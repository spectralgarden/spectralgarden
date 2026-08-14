// Portal Environment Setup using Three.js & Starfield background
let scene, camera, renderer, sacredGeometryGroup, starFieldMesh, invisibleHitbox;

// Slingshot aiming vectors and helpers
let isAimingSlingshot = false;
let slingshotAnchor = new THREE.Vector3();
let pullVec = new THREE.Vector3();
let rubberBandLine, trajectoryLine;

// Clean repeater ghost trail array
let orbTrailGhosts = [];
let lastTrailSpawnTime = 0;

// Dynamic bounds math for screensaver boundaries
let halfHeight3D, halfWidth3D;

// Physics and launch momentum vectors
let posX = 0, posY = 0;
let angle = Math.random() * Math.PI * 2;
let vx = Math.cos(angle) * 0.08; 
let vy = Math.sin(angle) * 0.08;

const minSpeed = 0.08;          
const dragFriction = 0.993;     
const maxThrowSpeed = 1.4;      

// Grabbing states tracking
let isDraggingOrb = false;
let isHoveringOrb = false;

// Hold limits constants (3 Seconds maximum constraint)
let dragHoldStartTime = 0;
let dragLimitExceeded = false;
let lastHoldDamageTime = 0;

const raycaster = new THREE.Raycaster();
const mouse2D = new THREE.Vector2();

// Locked natural zoom scale
const zoomScale = 0.22;

// Respawn lifecycle state controls
let isRespawning = false;
let respawnTargetScale = 0.22;

// Color lerp variables
let targetSoftColor = null;
let currentSoftColor = new THREE.Color(0xff00ff);

function initPortal() {
    const container = document.getElementById('canvas-container');
    if (!container) return;
    
    // Scene Setup
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030303, 0.012);

    // Camera Setup
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    // Renderer Setup
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // Create Background Starfield & Shooting Stars generator
    createStarfieldBackground();

    // Main Group to hold sacred elements (The Saturn Triangles + Rings Core)
    sacredGeometryGroup = new THREE.Group();
    scene.add(sacredGeometryGroup);

    // Expanded invisible hit sphere for easier mobile grabbing
    const hitGeo = new THREE.SphereGeometry(11.5, 16, 16);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false });
    invisibleHitbox = new THREE.Mesh(hitGeo, hitMat);
    sacredGeometryGroup.add(invisibleHitbox);

    // Generate Initial geometries (Level 1 core)
    evolveOrbForLevel(1);

    // Initialize native BufferAttribute position arrays to dynamically update line coordinates
    const rubberPositions = new Float32Array(6);
    const rubberGeo = new THREE.BufferGeometry();
    rubberGeo.setAttribute('position', new THREE.BufferAttribute(rubberPositions, 3));
    const rubberMat = new THREE.LineBasicMaterial({ color: 0xff00ff, linewidth: 3 });
    rubberBandLine = new THREE.Line(rubberGeo, rubberMat);
    rubberBandLine.visible = false;
    scene.add(rubberBandLine);

    const trajPositions = new Float32Array(6);
    const trajGeo = new THREE.BufferGeometry();
    trajGeo.setAttribute('position', new THREE.BufferAttribute(trajPositions, 3));
    const trajMat = new THREE.LineDashedMaterial({ color: 0x00ff66, dashSize: 0.3, gapSize: 0.15 });
    trajectoryLine = new THREE.Line(trajGeo, trajMat);
    trajectoryLine.visible = false;
    scene.add(trajectoryLine);

    // Calculate initial screensaver edge limits
    updateBounds();

    // Event hooks for drag-and-throw slingshot interactions
    window.addEventListener('mousedown', onMouseDown, false);
    window.addEventListener('mousemove', onMouseMoveVector, false);
    window.addEventListener('mouseup', onMouseUp, false);
    window.addEventListener('resize', onWindowResize, false);
    
    window.addEventListener('touchstart', (e) => { onMouseDown(e.touches[0]); }, { passive: false });
    window.addEventListener('touchmove', (e) => { onMouseMoveVector(e.touches[0]); }, { passive: false });
    window.addEventListener('touchend', () => { onMouseUp(); }, { passive: false });

    document.addEventListener('wheel', onWindowScroll, { passive: false });

    animate();
}

function createStarfieldBackground() {
    const starCount = 400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const scales = new Float32Array(starCount);

    for (let i = 0; i < starCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 60;
        positions[i + 1] = (Math.random() - 0.5) * 60;
        positions[i + 2] = (Math.random() - 0.5) * 30 - 10;
        scales[i / 3] = Math.random();
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const material = new THREE.PointsMaterial({
        color: 0x16000E,           // black
        size: 0.15,                // Sized up slightly to enhance the glowing point effect
        transparent: true,
        opacity: 0.95,             // Strong, vivid opacity
        blending: THREE.AdditiveBlending // Makes the particles look like glowing light sources
    });

    starFieldMesh = new THREE.Points(geometry, material);
    scene.add(starFieldMesh);
}

function evolveOrbForLevel(level) {
    if (!sacredGeometryGroup) return;

    while (sacredGeometryGroup.children.length > 1) {
        const item = sacredGeometryGroup.children[1];
        if (item.geometry) item.geometry.dispose();
        if (item.material) {
            if (Array.isArray(item.material)) {
                item.material.forEach(m => m.dispose());
            } else {
                item.material.dispose();
            }
        }
        sacredGeometryGroup.remove(item);
    }

    if (level >= 32) {
        const coreGeo = new THREE.SphereGeometry(2.6, 32, 32);
        const coreMat = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            wireframe: false,
            transparent: true,
            opacity: 0.9
        });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        sacredGeometryGroup.add(coreMesh);

        const auraGeo = new THREE.SphereGeometry(3.6, 32, 32);
        const auraMat = new THREE.MeshBasicMaterial({
            color: 0xff00ff,
            transparent: true,
            opacity: 0.35,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide
        });
        const auraMesh = new THREE.Mesh(auraGeo, auraMat);
        sacredGeometryGroup.add(auraMesh);

        for (let i = 1; i <= 3; i++) {
            const ringGeo = new THREE.RingGeometry(i * 2.2, (i * 2.2) + 0.08, 64);
            const ringMat = new THREE.MeshBasicMaterial({
                color: 0xffd700,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.5 - (i * 0.1)
            });
            const ringMesh = new THREE.Mesh(ringGeo, ringMat);
            sacredGeometryGroup.add(ringMesh);
        }
        return;
    }
// orb color
    let innerColor = 0x000000;
    let ringColor = 0x00ff66;
    let dualColor = 0x00a8ff;

    if (level >= 5 && level < 12) {
        innerColor = 0xff3300; ringColor = 0x000000; dualColor = 0xff00ff;
    } else if (level >= 12 && level < 20) {
        innerColor = 0x00ff66; ringColor = 0xff00ff; dualColor = 0x00ffff;
    } else if (level >= 20) {
        innerColor = 0x00ffff; ringColor = 0xff9900; dualColor = 0xff0033;
    }

    const topPyramidGeo = new THREE.ConeGeometry(2.2, 3.5, 4);
    const topPyramidMat = new THREE.MeshBasicMaterial({
        color: innerColor,
        wireframe: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
    });
    const topPyramid = new THREE.Mesh(topPyramidGeo, topPyramidMat);
    topPyramid.position.y = 1.2;
    topPyramid.userData = { baseColor: new THREE.Color(innerColor) };
    sacredGeometryGroup.add(topPyramid);

    const botPyramidGeo = new THREE.ConeGeometry(2.2, 3.5, 4);
    const botPyramidMat = new THREE.MeshBasicMaterial({
        color: innerColor,
        wireframe: true,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending
    });
    const botPyramid = new THREE.Mesh(botPyramidGeo, botPyramidMat);
    botPyramid.rotation.z = Math.PI;
    botPyramid.position.y = -1.2;
    botPyramid.userData = { baseColor: new THREE.Color(innerColor) };
    sacredGeometryGroup.add(botPyramid);

    const dualityGeo = new THREE.TorusKnotGeometry(5.2, 0.4, 120, 16, 2, 3);
    const dualityMat = new THREE.MeshBasicMaterial({
        color: ringColor,
        wireframe: true,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending
    });
    const dualityMesh = new THREE.Mesh(dualityGeo, dualityMat);
    dualityMesh.userData = { baseColor: new THREE.Color(ringColor) };
    sacredGeometryGroup.add(dualityMesh);

    const saturnRingGeo = new THREE.RingGeometry(5.8, 7.8, 64);
    const saturnRingMat = new THREE.MeshBasicMaterial({
        color: dualColor,
        side: THREE.DoubleSide,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
    });
    const saturnRing = new THREE.Mesh(saturnRingGeo, saturnRingMat);
    saturnRing.rotation.x = Math.PI / 2.5;
    saturnRing.userData = { baseColor: new THREE.Color(dualColor) };
    sacredGeometryGroup.add(saturnRing);

    const totalRings = Math.min(5, 2 + Math.floor(level / 7));
    for (let i = 1; i <= totalRings; i++) {
        const extraRingGeo = new THREE.RingGeometry(i * 2.2, (i * 2.2) + 0.05, 32);
        const extraRingMat = new THREE.MeshBasicMaterial({
            color: innerColor,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.25,
            blending: THREE.AdditiveBlending
        });
        const extraRingMesh = new THREE.Mesh(extraRingGeo, extraRingMat);
        extraRingMesh.rotation.y = Math.PI / i;
        extraRingMesh.userData = { baseColor: new THREE.Color(innerColor) };
        sacredGeometryGroup.add(extraRingMesh);
    }
}
window.evolveOrbForLevel = evolveOrbForLevel;

function spawnOrbTrailGhost() {
    if (!sacredGeometryGroup || isRespawning) return;

    const ghostGroup = sacredGeometryGroup.clone(true);
    if (ghostGroup.children.length > 0) {
        ghostGroup.children[0].geometry.dispose();
        ghostGroup.children.shift();
    }

    ghostGroup.children.forEach((mesh) => {
        if (mesh && mesh.material) {
            mesh.material = mesh.material.clone();
            mesh.material.transparent = true;
            mesh.material.opacity = 0.22;
        }
    });

    ghostGroup.position.copy(sacredGeometryGroup.position);
    ghostGroup.rotation.copy(sacredGeometryGroup.rotation);
    ghostGroup.scale.copy(sacredGeometryGroup.scale);

    scene.add(ghostGroup);

    orbTrailGhosts.push({
        mesh: ghostGroup,
        life: 1.0,
        decay: 0.07
    });
}

function updateOrbTrailGhosts() {
    const currentSpeed = Math.hypot(vx, vy);
    if (currentSpeed > 0.3 && !isDraggingOrb) {
        const now = Date.now();
        if (now - lastTrailSpawnTime > 80) {
            lastTrailSpawnTime = now;
            spawnOrbTrailGhost();
        }
    }

    for (let i = orbTrailGhosts.length - 1; i >= 0; i--) {
        const ghost = orbTrailGhosts[i];
        ghost.life -= ghost.decay;
        
        const shrinkFactor = 0.95;
        ghost.mesh.scale.multiplyScalar(shrinkFactor);

        ghost.mesh.children.forEach(m => {
            if (m.material) {
                m.material.opacity = Math.max(0, ghost.life * 0.22);
            }
        });

        if (ghost.life <= 0) {
            ghost.mesh.children.forEach(m => {
                if (m.geometry) m.geometry.dispose();
                if (m.material) m.material.dispose();
            });
            scene.remove(ghost.mesh);
            orbTrailGhosts.splice(i, 1);
        }
    }
}

function updateBounds() {
    const aspect = window.innerWidth / window.innerHeight;
    halfHeight3D = Math.tan((camera.fov / 2) * Math.PI / 180) * camera.position.z;
    halfWidth3D = halfHeight3D * aspect;
}

function onMouseMoveVector(event) {
    if (window.isGamePaused) return;
    mouse2D.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse2D.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse2D, camera);
    if (invisibleHitbox) {
        const intersects = raycaster.intersectObject(invisibleHitbox);
        if (intersects.length > 0) {
            isHoveringOrb = true;
            document.body.style.cursor = 'grab';
        } else {
            if (!isAimingSlingshot) {
                isHoveringOrb = false;
                document.body.style.cursor = '';
            }
        }
    }

    const vector = new THREE.Vector3(mouse2D.x, mouse2D.y, 0.5);
    vector.unproject(camera);
    const dir = vector.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const currentMouseWorld = camera.position.clone().add(dir.multiplyScalar(distance));

    if (isAimingSlingshot && !isRespawning) {
        document.body.style.cursor = 'grabbing';
        pullVec.subVectors(currentMouseWorld, slingshotAnchor);
        
        const maxPull = 4.0;
        if (pullVec.length() > maxPull) {
            pullVec.setLength(maxPull);
        }

        const rubberPosAttr = rubberBandLine.geometry.attributes.position;
        rubberPosAttr.setXYZ(0, slingshotAnchor.x, slingshotAnchor.y, slingshotAnchor.z);
        rubberPosAttr.setXYZ(1, slingshotAnchor.x + pullVec.x, slingshotAnchor.y + pullVec.y, slingshotAnchor.z + pullVec.z);
        rubberPosAttr.needsUpdate = true;
        rubberBandLine.visible = true;

        const trajPosAttr = trajectoryLine.geometry.attributes.position;
        trajPosAttr.setXYZ(0, slingshotAnchor.x, slingshotAnchor.y, slingshotAnchor.z);
        trajPosAttr.setXYZ(1, slingshotAnchor.x - pullVec.x * 2.0, slingshotAnchor.y - pullVec.y * 2.0, slingshotAnchor.z - pullVec.z);
        trajPosAttr.needsUpdate = true;
        trajectoryLine.computeLineDistances();
        trajectoryLine.visible = true;

        const pullLen = pullVec.length();
        const stretchFactor = 1.0 + (pullLen * 0.15);
        sacredGeometryGroup.scale.set(zoomScale * stretchFactor, zoomScale * (1.0 / stretchFactor), zoomScale);
        sacredGeometryGroup.rotation.z = Math.atan2(pullVec.y, pullVec.x);
    }
}

function onMouseDown(event) {
    if (isRespawning || window.isClusterBombArmed || window.isGamePaused) return;

    mouse2D.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse2D.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse2D, camera);
    const intersects = raycaster.intersectObject(invisibleHitbox);

    if (intersects.length > 0) {
        isAimingSlingshot = true;
        isDraggingOrb = true;
        setOrbPale(true);

        slingshotAnchor.copy(sacredGeometryGroup.position);
        pullVec.set(0, 0, 0);

        dragHoldStartTime = performance.now();
        dragLimitExceeded = false;
    }
}

function onMouseUp() {
    if (isAimingSlingshot) {
        isAimingSlingshot = false;
        isDraggingOrb = false;
        dragLimitExceeded = false;
        setOrbPale(false);
        document.body.style.cursor = 'grab';

        rubberBandLine.visible = false;
        trajectoryLine.visible = false;

        vx = -pullVec.x * 0.25;
        vy = -pullVec.y * 0.25;

        const currentSpeed = Math.hypot(vx, vy);
        if (currentSpeed > maxThrowSpeed) {
            vx = (vx / currentSpeed) * maxThrowSpeed;
            vy = (vy / currentSpeed) * maxThrowSpeed;
        }

        playSlingshotTwangSound();
    }
}

function playSlingshotTwangSound() {
    try {
        const ctx = window.audioCtx || new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.15);

        gainNode.gain.setValueAtTime(0.12, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.0, ctx.currentTime + 0.15);

        osc.start();
        osc.stop(ctx.currentTime + 0.15);
    } catch (e) {}
}

function setOrbPale(isPale) {
    if (isPale) {
        if (window.gameBeaten) return;
        for (let i = 1; i < sacredGeometryGroup.children.length; i++) {
            if (sacredGeometryGroup.children[i].material) {
                sacredGeometryGroup.children[i].material.color.setHex(0xffccff);
            }
        }
    }
}

function onWindowScroll(event) {
    if (isRespawning || window.gameBeaten || window.isGamePaused) return;
    event.preventDefault();

    if (event.deltaY > 0) {
        if (typeof window.castAuraWave === 'function') {
            window.castAuraWave('damage');
        }
    } else if (event.deltaY < 0) {
        if (typeof window.castAuraWave === 'function') {
            window.castAuraWave('knockback');
        }
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    updateBounds();
}

function triggerGlitch() {
    if (!sacredGeometryGroup) return;
    sacredGeometryGroup.children.forEach((mesh, idx) => {
        if (idx === 0) return;
        mesh.material.color.setHex(Math.random() * 0xffffff);
        mesh.scale.set(
            (Math.random() * 2.5 + 0.5) * zoomScale,
            (Math.random() * 2.5 + 0.5) * zoomScale,
            (Math.random() * 2.5 + 0.5) * zoomScale
        );
    });
    setTimeout(() => {
        updateOrbHPColors();
    }, 600);
}
window.triggerGlitch = triggerGlitch;

function rotateFrequencies() {
    if (!sacredGeometryGroup) return;
    const randomLevel = Math.floor(Math.random() * 28) + 1;
    evolveOrbForLevel(randomLevel);
    
    vx += (Math.random() - 0.5) * 0.6;
    vy += (Math.random() - 0.5) * 0.6;
}
window.rotateFrequencies = rotateFrequencies;

const tempWorldVector = new THREE.Vector3();

function checkOrbBugCollisions() {
    if (!sacredGeometryGroup || !camera || isRespawning || window.isGamePaused) return;

    sacredGeometryGroup.getWorldPosition(tempWorldVector);

    const projectedCoord = tempWorldVector.project(camera);

    const screenX = (projectedCoord.x * 0.5 + 0.5) * window.innerWidth;
    const screenY = (-projectedCoord.y * 0.5 + 0.5) * window.innerHeight;

    // Strict boundary safeguard blocking any top-left [0,0] artifacts from rendering or interacting
    if (screenX < 40 && screenY < 40) return;

    window.orbScreenX = screenX;
    window.orbScreenY = screenY;
    window.orbZoomScale = zoomScale; 

    const baseRadius = 140;
    const currentCollisionRadius = baseRadius * zoomScale;

    // Air Hockey Goal Defense Logic for Infinite Defense Mode (Level >= 32)
    if (window.gameBeaten) {
        if (screenY < 90 && screenX > window.innerWidth / 2 - 120 && screenX < window.innerWidth / 2 + 120) {
            if (typeof window.damageEnemySpawner === 'function') {
                window.damageEnemySpawner();
            }
            vy = Math.abs(vy); 
        }
        if (screenY > window.innerHeight - 90 && screenX > window.innerWidth / 2 - 120 && screenX < window.innerWidth / 2 + 120) {
            if (typeof window.playerConcedeGoal === 'function') {
                window.playerConcedeGoal();
            }
            vy = -Math.abs(vy); 
        }
    }

    if (window.dataBugs && window.dataBugs.length > 0) {
        for (let i = window.dataBugs.length - 1; i >= 0; i--) {
            const bugObj = window.dataBugs[i];
            const dx = bugObj.x - screenX;
            const dy = bugObj.y - screenY;
            const distance = Math.hypot(dx, dy);

            if (distance < currentCollisionRadius) {
                if (bugObj.isPeaceful && !window.gameBeaten) {
                    triggerSoftColorChange();
                    explodeBug(bugObj.id);
                } else {
                    if (bugObj.isOracle) {
                        if (typeof window.restoreHP === 'function') window.restoreHP(35);
                        if (typeof window.restoreEnergy === 'function') window.restoreEnergy(25);
                        playHealSound();
                        explodeBug(bugObj.id);
                    } else if (bugObj.isHealer) {
                        if (typeof window.restoreHP === 'function') window.restoreHP(25);
                        explodeBug(bugObj.id);
                    } else if (bugObj.isHarmless) {
                        explodeBug(bugObj.id);
                    } else {
                        const recDmg = bugObj.isStalker ? 50 : (bugObj.isAlien ? 35 : 15);
                        if (typeof window.takeDamage === 'function') {
                            window.takeDamage(recDmg);
                        }
                        explodeBug(bugObj.id);
                    }
                }
            }
        }
    }

    if (window.bossActive && window.bossHP > 0) {
        const bossCenterX = window.bossX + 50;
        const bossCenterY = window.bossY + 50;
        const distToBoss = Math.hypot(bossCenterX - screenX, bossCenterY - screenY);

        if (distToBoss < currentCollisionRadius + 50) {
            if (typeof window.damageBoss === 'function') {
                window.damageBoss(180);
            }
            if (typeof window.takeDamage === 'function') {
                window.takeDamage(12); 
            }
            
            const pushAngle = Math.atan2(screenY - bossCenterY, screenX - bossCenterX);
            vx = Math.cos(pushAngle) * 0.45;
            vy = Math.sin(pushAngle) * 0.45;
            posX += vx * 5;
            posY += vy * 5;
        }
    }

    if (window.activePowerUpItem) {
        const item = window.activePowerUpItem;
        const dx = item.x - screenX;
        const dy = item.y - screenY;
        const distance = Math.hypot(dx, dy);

        if (distance < currentCollisionRadius + 35) {
            if (typeof window.collectPowerUp === 'function') {
                window.collectPowerUp();
            }
        }
    }
}

function triggerSoftColorChange() {
    const hue = Math.random();
    const saturation = 0.85;
    const lightness = 0.65;
    targetSoftColor = new THREE.Color().setHSL(hue, saturation, lightness);
}

function playHoldWarningTone() {
    try {
        const warningCtx = window.audioCtx || new (window.AudioContext || window.webkitAudioContext)();
        const osc = warningCtx.createOscillator();
        const gainNode = warningCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, warningCtx.currentTime);
        osc.frequency.setValueAtTime(330, warningCtx.currentTime + 0.05);

        gainNode.gain.setValueAtTime(0.06, warningCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.0, warningCtx.currentTime + 0.1);

        osc.start();
        osc.stop(warningCtx.currentTime + 0.1);
    } catch (e) {}
}

function updateOrbHPColors() {
    if (isDraggingOrb || isRespawning) return;

    if (window.gameBeaten && targetSoftColor) {
        currentSoftColor.lerp(targetSoftColor, 0.04);
        for (let i = 1; i < sacredGeometryGroup.children.length; i++) {
            if (sacredGeometryGroup.children[i].material) {
                sacredGeometryGroup.children[i].material.color.copy(currentSoftColor);
            }
        }
        return;
    }

    const hpRatio = Math.max(0, Math.min(1, window.orbHP / 100));
    const damageTint = new THREE.Color(0x330000);

    for (let i = 1; i < sacredGeometryGroup.children.length; i++) {
        const child = sacredGeometryGroup.children[i];
        if (child && child.userData && child.userData.baseColor) {
            const originalColor = child.userData.baseColor;
            const blendedColor = originalColor.clone().lerp(damageTint, 1 - hpRatio);
            child.material.color.copy(blendedColor);
        }
    }
}

function killAndRespawnOrb() {
    isRespawning = true;
    isDraggingOrb = false;
    dragLimitExceeded = false;
    isAimingSlingshot = false;

    rubberBandLine.visible = false;
    trajectoryLine.visible = false;
    
    sacredGeometryGroup.visible = false;
    
    respawnTargetScale = zoomScale;
    sacredGeometryGroup.scale.set(0.01, 0.01, 0.01);
    
    posX = 0;
    posY = 0;
    
    const angle = Math.random() * Math.PI * 2;
    vx = Math.cos(angle) * 0.08;
    vy = Math.sin(angle) * 0.08;

    setTimeout(() => {
        window.orbHP = 100;
        window.orbEnergy = 100;
        if (typeof window.updateHPDisplay === 'function') window.updateHPDisplay();
        if (typeof window.updateEnergyDisplay === 'function') window.updateEnergyDisplay();
        
        updateOrbHPColors();
        sacredGeometryGroup.visible = true;
    }, 2500);
}
window.killAndRespawnOrb = killAndRespawnOrb;

function animate() {
    requestAnimationFrame(animate);

    if (window.isGamePaused) {
        renderer.render(scene, camera);
        return;
    }

    const spinFactor = window.gameBeaten ? 0.4 : 1.0;
    sacredGeometryGroup.rotation.x += 0.005 * spinFactor;
    sacredGeometryGroup.rotation.y += 0.008 * spinFactor;

    let hoverScaleBonus = 0;
    if (isHoveringOrb && !isAimingSlingshot) {
        hoverScaleBonus = Math.sin(Date.now() * 0.012) * 0.03 + 0.03;
    }

    if (starFieldMesh) {
        starFieldMesh.material.opacity = 0.65 + Math.sin(Date.now() * 0.002) * 0.25;
        starFieldMesh.rotation.z += 0.0002;
    }

    updateOrbTrailGhosts();

    if (isDraggingOrb && !isRespawning && !window.gameBeaten) {
        const dragDuration = performance.now() - dragHoldStartTime;
        if (dragDuration > 3000) {
            dragLimitExceeded = true;
            
            const shakeSeverity = (dragDuration - 3000) * 0.0025;
            posX += (Math.random() - 0.5) * shakeSeverity;
            posY += (Math.random() - 0.5) * shakeSeverity;

            const currentTime = performance.now();
            if (currentTime - lastHoldDamageTime > 250) {
                lastHoldDamageTime = currentTime;
                if (typeof window.takeDamage === 'function') {
                    window.takeDamage(5); 
                }
                playHoldWarningTone();
            }
        }
    }

    if (!isDraggingOrb) {
        vx *= dragFriction;
        vy *= dragFriction;

        const speed = Math.hypot(vx, vy);
        if (speed < minSpeed) {
            const currentAngle = Math.atan2(vy, vx);
            vx = Math.cos(currentAngle) * minSpeed;
            vy = Math.sin(currentAngle) * minSpeed;
        }

        posX += vx;
        posY += vy;

        const bounceWidth = halfWidth3D - 0.2;
        const bounceHeight = halfHeight3D - 0.2;

        if (posX > bounceWidth) {
            posX = bounceWidth;
            vx = -Math.abs(vx);
        } else if (posX < -bounceWidth) {
            posX = -bounceWidth;
            vx = Math.abs(vx);
        }

        if (posY > bounceHeight) {
            posY = bounceHeight;
            vy = -Math.abs(vy);
        } else if (posY < -bounceHeight) {
            posY = -bounceHeight;
            vy = Math.abs(vy);
        }
    }

    sacredGeometryGroup.position.x = posX;
    sacredGeometryGroup.position.y = posY;

    if (isRespawning && sacredGeometryGroup.visible) {
        let currentScale = sacredGeometryGroup.scale.x;
        currentScale += (respawnTargetScale - currentScale) * 0.04;
        sacredGeometryGroup.scale.set(currentScale, currentScale, currentScale);
        if (Math.abs(currentScale - respawnTargetScale) < 0.005) {
            sacredGeometryGroup.scale.set(respawnTargetScale, respawnTargetScale, respawnTargetScale);
            isRespawning = false;
        }
    } else {
        if (!isAimingSlingshot) {
            const targetActiveZoom = zoomScale + hoverScaleBonus;
            sacredGeometryGroup.scale.set(targetActiveZoom, targetActiveZoom, targetActiveZoom);
        }
    }

    const time = Date.now() * 0.001;
    const pulseFactor = Math.sin(time * 2) * 0.1 + 0.95;
    if (sacredGeometryGroup.children[1] && !isAimingSlingshot) {
        sacredGeometryGroup.children[1].scale.set(pulseFactor, pulseFactor, pulseFactor);
    }

    if (!isRespawning && window.orbHP < 30 && !window.gameBeaten && Math.random() > 0.4) {
        const severity = (30 - window.orbHP) * 0.008;
        sacredGeometryGroup.position.x += (Math.random() - 0.5) * severity;
        sacredGeometryGroup.position.y += (Math.random() - 0.5) * severity;
    }

    updateOrbHPColors();
    checkOrbBugCollisions();

    renderer.render(scene, camera);
}

document.addEventListener('DOMContentLoaded', initPortal);