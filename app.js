// Local Database holding dynamic specs for apps, vsts, games, and music
const moduleDatabase = {
    vst: {
        vst_a: {
            title: "C:\\PROG\\VST_UNITS\\ARCANE_GAIN.VST3",
            header: "ArcaneGain v1.0",
            desc: "Arcane Gain is a lightweight, zero-latency, CPU-efficient gain/trim utility plugin designed to be the simplest, cleanest, and most reliable utility tool in the Spectral Garden ecosystem. It provides precise gain staging, transparent soft-clipping saturation, combined peak/RMS metering, and sample-accurate auto-gain compensation. Extremely low memory and CPU footprint. Built-in live CPU usage monitor. Scalable UI options (100%, 125%, 150%, 200%).",
            image: "assets/images/vst_arcanegain.gif",
            links: [
                { text: "DOWNLOAD VST3 (64-BIT)", href: "https://github.com/spectralgarden/ArcaneGain/releases/download/arcanegain/ArcaneGain.zip" },
            ]
        },
        vst_b: {
            title: "C:\\PROG\\VST_UNITS\\CRESCENT_Q.VST3",
            header: "CrescentQ v1.0.0",
            desc: "CrescentQ is a high‑precision 24‑band parametric equalizer designed for mixing, mastering, and surgical spectral shaping. CrescentQ is a high‑precision 24‑band parametric equalizer designed for mixing, mastering, and surgical spectral shaping. It features switchable minimum‑phase and linear‑phase architectures, per‑band Mid/Side routing, multi‑stage oversampling, and real‑time FFT visualization. The engine is optimized for low‑latency operation while offering advanced phase‑coherent processing for critical audio work. ",
            image: "assets/images/vst_crescent_q.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/CrescentQ/releases/download/CRESCENTQ/CrescentQ.zip" },
               
            ]
        },
        vst_c: {
            title: "C:\\PROG\\VST_UNITS\\DOWNER.VST3",
            header: "downer v1.0.0",
            desc: "Real‑time decay. Rain‑soaked memory. Tape‑stop gravity. A spectral audio decay processor for ambient sound design.downer is a real-time creative audio effect designed to recreate the characteristics of chopped & screwed taped eceleration, rhythmic stuttering, and atmospheric, low-fidelity environments. Inspired by legacy console configuration menus and vintage tape degradation, the system combines: A latency-free dual-tap pitch processor An independent vocal formant filter bank A host-synchronized stutter (chop) engine A dynamic, physical-modeling rain generator that automatically gates according to the input signal's envelope to prevent background static when audio is paused.",
            image: "assets/images/vst_downer.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/downer/releases/download/downer/downer.zip" },
               
            ]
        },
        vst_d: {
            title: "C:\\PROG\\VST_UNITS\\ECHOFIELD_RELIQUARY.VST3",
            header: "Echofield Reliquary V1.0.0",
            desc: "Ambient cathedral reverb & delay‑matrix for evolving, spectral spaces. Echofield Reliquary is an ambient reverberation and delay-matrix synthesizer designed to evoke the warm, dusty, and slightly eerie atmosphere of a forgotten cathedral. Combining visual aesthetics reminiscent of stained-glass altars with a modern DSP console, the plugin serves as a creative sound-design tool for generating organic, evolving spaces and modulated echoes.",
            image: "assets/images/vst_echofield.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/Echofield-Reliquary/releases/download/Echofield_Reliquary/echofield.reliquary.zip" }
            ]
        },
        vst_e: {
            title: "C:\\PROG\\VST_UNITS\\ETHERFORGE_HARMONICS.VST3",
            header: "Etherforge Harmonic V1.0.0",
            desc: "Sacred Cathedral Space & Acoustic Portal Simulator.ETHERFORGE HARMONICS is a hybrid spectral‑processing audio plugin combining real‑time  partial analysis, non‑linear harmonic excitation, and additive resynthesis inside a dark, industrial UI framework. It analyzes incoming audio at the harmonic level and provides precise control over tonal balance, spectral coloration, and harmonic structure.",
            image: "assets/images/vst_etherforge.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/ETHERFORGE-HARMONICS/releases/download/ETHERFORGE_HARMONICS/ETHERFORGE.HARMONICS.zip" }
            ]
        },
        vst_f: {
            title: "C:\\PROG\\VST_UNITS\\FORSAKEN.VST3",
            header: "forsaken v1.0.0",
            desc: "Spectral formant filter Forsaken is an astral vocal processor, but can be used for almost anything, designed for darkwave, witch house, ambient, cinematic, and experimental vocal manipulation. Built with JUCE 8.0.14, it combines analogue‑style warmth, reverse grain engines, cathedral‑scale decay, and void‑filtered ambience to transform clean vocals into unstable, supernatural soundscapes.",
            image: "assets/images/vst_forsaken.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/forsaken/releases/download/forsaken/forsaken.zip" }
            ]
        },
        vst_g: {
            title: "C:\\PROG\\VST_UNITS\\HEXCHANT_HARMONIZER.VST3",
            header: "Hexchant Harmonizer V1.0.0",
            desc: "An occult vocal harmonizer, spectral vocoder & text-to-speech chant engine for VST3      Hexchant Harmonizer turns any voice — live or typed — into layered ritual harmony. It combines an 8-voice harmonizer, a 32-band spectral vocoder, a built-in text-to-speech spell casting engine, a Ghost spectral delay, and a Formant Sculptor with tube saturation and cathedral reverb, all wrapped in an animated coven-themed interface.",
            image: "assets/images/vst_hexchant_harmonizer.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/Hexchant-Harmonizer/releases/download/HexchantHarmonizer/hexchant.harmonizer.zip" }
            ]
        },
        vst_h: {
            title: "C:\\PROG\\VST_UNITS\\ISOLATED.VST3",
            header: "Isolated v1.0.0",
            desc: "An ambient noise-removal envelope shaping absolute silence into pulsing sub-bass frequencies.*Advanced Multi-Band Drum Isolation & Frequency Sweep Processor***Isolated** is a specialized real-time audio plugin designed for surgical drum separation, transient management, and dynamic frequency sweeping. Powered by multi-stage transient splitters (TSS) and specialized channel frequency cross-overs, it allows producers to independently isolate, mix, and shape individual drum elements (Kick, Snare, Hats, Percussion, and Other) from a full stereo mix. ",
            image: "assets/images/vst_isolated.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/isolated/releases/download/isolated/isolated.zip" }
            ]
        },
        vst_i: {
            title: "C:\\PROG\\VST_UNITS\\SERPENTINE.VST3",
            header: "Serpentine v1.0.0",
            desc: "Serpentine is a three‑band dynamics processor and waveshaping saturator It providesanalog‑style saturation, multi‑stage dynamics control, and flexible crossover management using Linkwitz‑Riley filters and phase‑aligned reconstruction",
            image: "assets/images/vst_serpentine.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/Serpentine/releases/download/SERPENTINE/Serpentine.zip" }
            ]
        },
        vst_j: {
            title: "C:\\PROG\\VST_UNITS\\SORROW_STORM.VST3",
            header: "Sorrow Storm",
            desc: "Generates static sheets of dynamic high-frequency hiss that simulate cold, falling rain. An ambient shoegaze reverb & fuzz plugin for VST3. Sorrow Storm is a mood-drenched effects processor built for dream-pop, shoegaze, and ambient production. It combines a saturating fuzz stage with a modulated four-tap feedback reverb, built-in shimmer pitch-shifting, and 30 hand-tuned presets — wrapped in a custom-animated, glitch-titled interface",
            image: "assets/images/vst_sorrow_storm.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/sorrowstorm/releases/download/sorrowstorm/sorrow.storm.zip" }
            ]
        },
        vst_k: {
            title: "C:\\PROG\\VST_UNITS\\WRAITHGATE_VOCODER.VST3",
            header: "Wraithgate Vocoder v1.0.0",
            desc: "Wraithgate Vocoder is a high-performance, real-time spectral morphing processor designed for Windows VST3 hosts. It bridges the frequency characteristics of an incoming Modulator (traditionally a vocal or speech source) with a Carrier (internal synthesized waves or an external sidechained instrument) through a highly optimized 32-band filterbank, enhanced by a unique Spectral Ghost Engine..",
            image: "assets/images/vst_wraithgate_vocoder.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/Wraithgate-Vocoder/releases/download/WraithgateVocoder/Wraithgate.Vocoder.zip" }
            ]
        },
        vst_l: {
            title: "C:\\PROG\\VST_UNITS\\TRICKSTER.VST3",
            header: "Trickster v1.0",
            desc: "Modulated audio delay loop engine featuring randomized memory-read jitter anomalies. Coming soon",
            image: "assets/images/vst_trickster.gif",
            links: [
               /* { text: "DOWNLOAD VST3", href: "#" }*/
            ]
        },
        vst_m: {
            title: "C:\\PROG\\VST_UNITS\\VOIDBREAK.VST3",
            header: "Voidbreak v2.0",
            desc: "A brutal peak-clipper modeling severe hardware output stages with extreme tape saturation curves. Voidbreak is an experimental astral character‑effect audio processor designedfor darkwave, witch house, ambient, cinematic, and industrial sound design.It models heavy output degradation, magnetic tape saturation curves, warp‑driftinstability, reverse‑memory distortion, smear‑delay coloration, and spectralpresence shaping.",
            image: "assets/images/vst_voidbreak.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/voidbreak/releases/download/voidbreak/voidbreak.zip" }
            ]
        },
        vst_n: {
            title: "C:\\PROG\\VST_UNITS\\SPECTRAL_WRAITH.VST3",
            header: "Spectral Wraith",
            desc: "Spectral Bin-Freezing • Phase Smearing • Density Gating • FFT Manipulation • Spectral Morphing • Ghost Engine • Multi-Band Processing • Real-Time Spectral Analysis",
            image: "assets/images/vst_spectral_wraith.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/SPECTRAL-WRAITH/releases/download/spectralwraith/spectral.wraith.zip" }
            ]
        
    },
     vst_o: {
            title: "C:\\PROG\\VST_UNITS\\AETHER_BLOOM.VST3",
            header: "AetherBloom",
            desc: "Spectral Bin-Freezing • Phase Smearing • Density Gating • FFT Manipulation • Spectral Morphing • Ghost Engine • Multi-Band Processing • Real-Time Spectral Analysis",
            image: "assets/images/vst_aether_bloom.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/AetherBloom/releases/download/AetherBloom/Aether.Bloom.zip" }
            ]
        
    },
    vst_p: {
            title: "C:\\PROG\\VST_UNITS\\HOLLOW_LIGHT.VST3",
            header: "Hollow Light",
            desc: "A shoegaze reverb and tape-delay hybrid designed to evoke loneliness, regret, distance, and ghostly melancholy.* **Hollowlight** is a zero-latency (excluding reverb tail), lightweight VST3 audio plugin engineered for lush, washed-out guitars, haunting vocal pads, and distant, tape-warbled echoes.",
            image: "assets/images/vst_hollow_light.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/HollowLight/releases/download/hollowlight/Hollow.Light.zip" }
            ]
        }
    },
    games: {
        game_a: {
    title: "C:\\PROG\\GAMES\\Eden's Edge.EXE",
    header: "Eden's Edge (2027)",
    desc: "A surreal, avant‑garde horror action RPG set inside a fractured 3D world. Navigate esoteric landscapes, confront impossible entities, and descend through shifting realities that refuse to stay stable. (Coming soon in 2027)",
    image: "assets/images/game_sim_x.gif",
    content: "STATUS: BOOT SEQUENCE ONLINE\nREALITY ANCHOR: UNSTABLE\nENTITY VECTOR: ACTIVE\n\nEngage Eden's Edge runtime below and enter the distortion."
        },
       
    },
   apps: {
        app_a: {
            title: "C:\\PROG\\APPS\\AKASHIC_TAROT.EXE",
            header: "AKASHIC TAROT V2.3",
            desc: "A ritual-coded search guide for the Akashic Tarot deck. Built as a static web portal using HTML, CSS, and JavaScript.",
            image: "assets/images/tarot_preview.png",
            content: "--- AKASHIC TAROT SYSTEM SPECS ---<br><br>" +
                     "🌐 <strong>LIVE PORTAL:</strong><br>" +
                     "<a href='https://spectralgarden.github.io/akashictarot/' target='_blank' style='color: #8b5cf6; font-weight: bold;'>[ LAUNCH AKASHIC TAROT WEBAPP ]</a>"+ 
                    "✨ <strong>FEATURES:</strong><br>" +
                     "• Search: Instantly locates & highlights cards.<br>" +
                     "• Random Draw: Simulates a digital pull.<br>" +
                     "• Zero Bloat: Pure ritual logic, no backend.<br><br>" +
                     "🧪 <strong>TECH STACK:</strong> HTML, CSS, Vanilla JS<br><br>" 
        },
        app_b: {
            title: "C:\\PROG\\APPS\\SPECTRAL_ATLAS.EXE",
            header: "SPECTRAL ATLAS",
            desc: "An interactive astrocartography atlas that maps planetary lines around the world from your birth details. Explore relocation charts, planetary crossings, parans, and transits.",
            content: "SPECTRAL ATLAS // COSMIC LOCATION MAPPING<br><br>" +
                     "Enter your birth date, time, and location to explore personalized planetary lines across an interactive world map.<br><br>" +
                     "FEATURES: Astrocartography lines, relocation comparisons, planetary crossings, parans, and transit maps.",
            image: "assets/images/spectralatlasscreen.png",
            pageUrl: "https://spectralgarden.github.io/spectralatlas/",
            openLabel: "OPEN SPECTRAL ATLAS"
        }
    },
       
}; 

const currentActiveKeys = {
    vst: 'vst_a',
    games: 'game_a',
    apps: 'app_a',
    music: 'track_a'
};

// Gameplay & Level state definitions
window.dataBugs = [];
window.bugEliminationCount = 0;
window.bugHighScore = parseInt(localStorage.getItem('spectral_bugs_highscore') || '0', 10);
let bugIdCounter = 0;
let showcaseAllyTimer = null;
let lastShowcaseItemId = null;

// Lives & Player state
window.playerLives = 3;

// Levels
window.currentLevel = 1;
window.currentLevelXP = 0;
window.xpNeededForNextLevel = 2000; 
window.gameBeaten = false;

// Energy Reserve
window.orbEnergy = 100;

// Boss Fight State
window.bossActive = false;
window.bossHP = 0;
window.bossMaxHP = 1;
window.bossX = 0;
window.bossY = 0;
window.bossVX = 1.2;
window.bossVY = 0.8;
window.bossIsCharging = false;
let bossElement = null;
let lastBossChargeTime = 0;
let lastBossStarRainTime = 0;
let lastBossMissileTime = 0;
let bossProjectiles = [];
let fireDemons = [];
let fireDemonProjectiles = [];
let nextFireDemonWaveAt = Date.now() + 12000;

window.isClusterBombArmed = false;
window.orbHP = 100;

window.orbScreenX = window.innerWidth / 2;
window.orbScreenY = (window.innerHeight - 40) / 2;

window.activePowerUpItem = null;
window.activeFighters = [];
window.activeTornado = null;
window.nextPowerUpType = 'fighter';
window.gamePaused = false;
window.gamePausedForShowcase = false;
window.gamePausedBeforeShowcase = false;
window.activeShowcaseAlly = null;
window.showcaseWindowId = null;
const showcaseWindowIds = new Set(['apps-window', 'vst-window', 'games-window']);

let spawnIntervalTimer = null;
let bombAimIndicator = null;

function setStartMenuOpen(isOpen) {
    const menu = document.getElementById('start-menu');
    const startButton = document.querySelector('.start-btn');
    if (menu) menu.style.display = isOpen ? 'block' : 'none';
    if (startButton) startButton.classList.toggle('is-open', isOpen);
}

function closeStartMenu() {
    setStartMenuOpen(false);
}

function initializeWallpaperWordmark() {
    const wordmark = document.querySelector('.wallpaper-logo');
    if (!wordmark) return;

    wordmark.setAttribute('role', 'img');
    wordmark.setAttribute('aria-label', 'Spectral Garden');
    const words = [...wordmark.querySelectorAll(':scope > span')];
    const letterCount = words.reduce((count, word) => count + (word.textContent || '').length, 0);
    let letterIndex = 0;
    words.forEach((word) => {
        const letters = Array.from(word.textContent || '');
        word.setAttribute('aria-hidden', 'true');
        word.replaceChildren(...letters.map((letter, index) => {
            const letterElement = document.createElement('span');
            letterElement.textContent = letter;
            const angle = (letterIndex / letterCount) * Math.PI * 2;
            const distance = 65 + ((letterIndex * 17) % 36);
            letterElement.style.setProperty('--explode-x', `${Math.cos(angle) * distance}px`);
            letterElement.style.setProperty('--explode-y', `${Math.sin(angle) * distance}px`);
            letterElement.style.setProperty('--explode-delay', `${(letterIndex % 5) * 24}ms`);
            letterIndex++;
            return letterElement;
        }));
    });
}

// Initialize events
document.addEventListener('DOMContentLoaded', () => {
    initializeWallpaperWordmark();

    const portalWin = document.getElementById('portal-control');
    if (portalWin) {
        centerWindowOnScreen(portalWin);
    }

    const windows = document.querySelectorAll('.window');
    windows.forEach(win => {
        const header = win.querySelector('.window-header');
        dragElement(win, header);
    });

    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(submenu => {
        submenu.addEventListener('wheel', (e) => {
            e.stopPropagation();
            submenu.scrollTop += e.deltaY;
        }, { passive: true });
    });

    document.addEventListener('mousemove', (e) => {
        createSparkle(e.clientX, e.clientY);
    });

    const vhs = document.getElementById('vhs-player');
    if (vhs) {
        vhs.addEventListener('ended', () => { vhs.play(); });
    }

    initializeAudioControls();

    setInterval(updateClock, 1000);
    updateClock();

    updateLivesDisplay();
    const bugCounterEl = document.getElementById('bug-counter');
    if (bugCounterEl) bugCounterEl.textContent = window.bugEliminationCount;
    updateKillsDisplay();
    
    const bugHighscoreEl = document.getElementById('bug-highscore');
    if (bugHighscoreEl) bugHighscoreEl.textContent = window.bugHighScore;

    updateHPDisplay();
    updateLevelDisplay();
    reinitSpawnInterval();
    scheduleShowcaseAlly();
    updateXPDisplay();
    updateEnergyDisplay();

    updateGameplayLoop();

    document.addEventListener('click', (e) => {
        if (window.isClusterBombArmed) {
            if (!e.target.closest('#taskbar') && !e.target.closest('.window') && !e.target.closest('#start-menu')) {
                e.preventDefault();
                e.stopPropagation();
                detonateClusterBomb(e.clientX, e.clientY);
                return;
            }
        }

        if (window.showcaseWindowId) {
            const showcaseWindow = document.getElementById(window.showcaseWindowId);
            if (showcaseWindow && !showcaseWindow.contains(e.target)) {
                closeWindow(window.showcaseWindowId);
                return;
            }
        }

        const menu = document.getElementById('start-menu');
        const startBtn = document.querySelector('.start-btn');
        if (menu && menu.style.display === 'block') {
            if (!menu.contains(e.target) && !startBtn.contains(e.target)) {
                closeStartMenu();
            }
        }

        const bugMenu = document.getElementById('bug-submenu');
        const bugTrigger = document.getElementById('bug-submenu-trigger');
        if (bugMenu && bugMenu.style.display === 'block') {
            if (!bugMenu.contains(e.target) && !bugTrigger.contains(e.target)) {
                bugMenu.style.display = 'none';
                bugTrigger.textContent = '◀';
            }
        }

        const helpMenu = document.getElementById('help-submenu');
        const helpTrigger = document.getElementById('help-submenu-trigger');
        if (helpMenu && helpMenu.style.display === 'block') {
            if (!helpMenu.contains(e.target) && !helpTrigger.contains(e.target)) {
                helpMenu.style.display = 'none';
            }
        }
    });

});// --- ROBUST MOBILE MULTI-TAP ENERGY SYSTEM ---
let tapCount = 0;
let tapTimer = null;

document.addEventListener('touchstart', (e) => {
    // Check if the user is tapping inside a window, menu, or button
    if (
        e.target.closest('#taskbar') || 
        e.target.closest('.window') || 
        e.target.closest('#start-menu') ||
        e.target.closest('button') ||
        e.target.closest('a')
    ) {
        return; // Let normal UI clicks happen
    }

    tapCount++;

    if (tapTimer) clearTimeout(tapTimer);

    tapTimer = setTimeout(() => {
        if (tapCount === 2) {
            // DOUBLE-TAP -> Pulse / Push Aura (10 Energy)
            castAuraWave('push');
        } else if (tapCount >= 3) {
            // TRIPLE-TAP -> Damage Blast Aura (20 Energy)
            castAuraWave('damage');
        }
        tapCount = 0; // Reset counter after evaluation window ends
    }, 320); // 320ms window to catch multi-taps
}, { passive: true });

function toggleHelpSubmenu(event) {
    event.stopPropagation();
    playUISound();
    const submenu = document.getElementById('help-submenu');
    if (submenu) {
        const isVisible = submenu.style.display === 'block';
        submenu.style.display = isVisible ? 'none' : 'block';
    }
}
window.toggleHelpSubmenu = toggleHelpSubmenu;

function getSafeSpawnCoords() {
    const sidebarWidth = 260;
    const topBarHeight = 120;
    const monitorWidth = 420;
    const rightMargin = 160;
    const bottomMargin = 120;
    
    const w = isNaN(window.innerWidth) || window.innerWidth <= 0 ? 1200 : window.innerWidth;
    const h = isNaN(window.innerHeight) || window.innerHeight <= 0 ? 800 : window.innerHeight;

    let x, y;
    let attempts = 0;
    while (attempts < 100) {
        x = Math.random() * (w - sidebarWidth - rightMargin) + sidebarWidth;
        y = Math.random() * (h - topBarHeight - bottomMargin) + topBarHeight;
        
        if (x > w - monitorWidth && y < 350) { 
            attempts++; 
            continue; 
        }
        if (isNaN(x) || isNaN(y)) {
            attempts++;
            continue;
        }
        return { x, y };
    }
    return { x: w / 2, y: h / 2 };
}

function reinitSpawnInterval() {
    if (spawnIntervalTimer) clearInterval(spawnIntervalTimer);
    
    const intervalTime = Math.max(400, 1200 - (window.currentLevel * 50));
    spawnIntervalTimer = setInterval(() => {
        if (!window.gamePaused && document.visibilityState === 'visible') {
            spawnDataBug();
        }
    }, intervalTime);
}

function scheduleShowcaseAlly(delay = 12000 + Math.random() * 18000) {
    if (showcaseAllyTimer) clearTimeout(showcaseAllyTimer);
    showcaseAllyTimer = setTimeout(() => {
        showcaseAllyTimer = null;
        if (window.gamePaused || window.activeShowcaseAlly) {
            scheduleShowcaseAlly(1000);
            return;
        }
        spawnShowcaseAlly();
    }, delay);
}

function spawnShowcaseAlly() {
    const products = [
        ...Object.entries(moduleDatabase.apps)
            .filter(([, app]) => app.image && app.header && app.desc)
            .map(([key, product]) => ({ category: 'apps', key, product })),
        ...Object.entries(moduleDatabase.vst)
            .filter(([, product]) => product.image && product.header && product.desc &&
                Array.isArray(product.links) && product.links.length > 0)
            .map(([key, product]) => ({ category: 'vst', key, product }))
    ];
    if (!products.length) {
        scheduleShowcaseAlly();
        return;
    }

    const availableProducts = products.length > 1
        ? products.filter(({ category, key }) => `${category}:${key}` !== lastShowcaseItemId)
        : products;
    const { category, key, product } = availableProducts[Math.floor(Math.random() * availableProducts.length)];
    lastShowcaseItemId = `${category}:${key}`;

    const element = document.createElement('button');
    element.type = 'button';
    element.className = 'showcase-ally';
    element.setAttribute('aria-label', `Open ${category === 'vst' ? 'VST' : 'app'} ${product.header}`);

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = '';
    image.draggable = false;

    const name = document.createElement('span');
    name.className = 'showcase-ally-name';
    name.textContent = product.header;

    const prompt = document.createElement('span');
    prompt.className = 'showcase-ally-prompt';
    prompt.textContent = 'CLICK ME';

    element.append(image, name, prompt);

    const cardHeight = 118;
    const viewHeight = Math.max(0, window.innerHeight - 40 - cardHeight);
    const y = 60 + Math.random() * Math.max(0, viewHeight - 60);
    const x = -150;
    element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    element.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        openShowcaseAlly(category, key, element);
    });
    document.body.appendChild(element);

    window.activeShowcaseAlly = {
        category,
        key,
        element,
        x,
        y,
        vx: 2.5 + Math.random() * 1.7,
        bossHit: false
    };
}

function openShowcaseAlly(category, key, element) {
    if (!moduleDatabase[category]?.[key]) return;
    const ally = window.activeShowcaseAlly;
    if (ally) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        detonateShowcaseAlly(centerX, centerY);
        ally.element.remove();
        window.activeShowcaseAlly = null;
    }
    const windowId = category === 'vst' ? 'vst-window' : 'apps-window';
    const showcaseWindow = document.getElementById(windowId);
    if (!showcaseWindow) return;
    document.body.appendChild(showcaseWindow);
    showcaseWindow.classList.add('showcase-window');
    window.showcaseWindowId = windowId;
    loadModule(category, key);
}

function detonateShowcaseAlly(centerX, centerY) {
    const blastRadius = 520;
    const burst = document.createElement('div');
    burst.className = 'aoe-explosion showcase-ally-burst';
    burst.style.left = `${centerX}px`;
    burst.style.top = `${centerY}px`;
    document.body.appendChild(burst);
    requestAnimationFrame(() => burst.classList.add('detonated'));
    setTimeout(() => burst.remove(), 700);

    document.body.classList.add('showcase-burst-flash');
    setTimeout(() => document.body.classList.remove('showcase-burst-flash'), 240);
    playBombExplosionSound();

    for (let i = window.dataBugs.length - 1; i >= 0; i--) {
        const bug = window.dataBugs[i];
        if (Math.hypot(bug.x + 12 - centerX, bug.y + 12 - centerY) <= blastRadius) {
            explodeBug(bug.id);
        }
    }
    damageFireDemonsInRadius(centerX, centerY, blastRadius);

    if (window.bossActive && bossElement &&
        Math.hypot(window.bossX + 50 - centerX, window.bossY + 50 - centerY) <= blastRadius + 50) {
        damageBoss(600);
    }

    for (let i = bossProjectiles.length - 1; i >= 0; i--) {
        const projectile = bossProjectiles[i];
        if (Math.hypot(projectile.x - centerX, projectile.y - centerY) <= blastRadius) {
            projectile.element.remove();
            bossProjectiles.splice(i, 1);
        }
    }

    const colors = ['#ffffff', '#c084fc', '#67e8f9', '#a855f7'];
    for (let i = 0; i < 48; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.sqrt(Math.random()) * blastRadius;
        createExplosionParticles(
            centerX + Math.cos(angle) * distance,
            centerY + Math.sin(angle) * distance,
            colors[i % colors.length]
        );
    }
}

function createSparkle(x, y) {
    if (Math.random() > 0.25) return; 

    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle-trail';
    document.body.appendChild(sparkle);

    const offsetX = (Math.random() - 0.5) * 8;
    const offsetY = (Math.random() - 0.5) * 8;

    sparkle.style.left = (x + offsetX) + 'px';
    sparkle.style.top = (y + offsetY) + 'px';

    const silverShades = ['#ffffff', '#f5f5f5', '#e6e6e6', '#cccccc', '#b3b3b3', '#999999'];
    const randomColor = silverShades[Math.floor(Math.random() * silverShades.length)];
    sparkle.style.backgroundColor = randomColor;
    sparkle.style.boxShadow = `0 0 5px rgba(255, 255, 255, 0.8)`;

    const velocityX = (Math.random() - 0.5) * 2.5;
    const velocityY = (Math.random() * 2) + 0.5;

    let opacity = 1.0;
    let scale = 1.0;
    let posX = x + offsetX;
    let posY = y + offsetY;

    const interval = setInterval(() => {
        posX += velocityX;
        posY += velocityY;
        opacity -= 0.04;
        scale -= 0.04;

        sparkle.style.left = posX + 'px';
        sparkle.style.top = posY + 'px';
        sparkle.style.opacity = opacity;
        sparkle.style.transform = `scale(${scale})`;

        if (opacity <= 0 || scale <= 0) {
            clearInterval(interval);
            sparkle.remove();
        }
    }, 30);
}

function updateClock() {
    const clockEl = document.getElementById('system-clock');
    if (clockEl) {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        clockEl.textContent = `${hours}:${minutes} ${ampm}`;
    }
}

function toggleStartMenu(event) {
    event.stopPropagation();
    playUISound();
    const menu = document.getElementById('start-menu');
    if (menu) {
        setStartMenuOpen(menu.style.display !== 'block');
    }
}

function toggleBugSubmenu(event) {
    event.stopPropagation();
    playUISound();
    const submenu = document.getElementById('bug-submenu');
    const trigger = document.getElementById('bug-submenu-trigger');
    if (submenu && trigger) {
        const isVisible = submenu.style.display === 'block';
        submenu.style.display = isVisible ? 'none' : 'block';
        trigger.textContent = isVisible ? '◀' : '▶';
        trigger.setAttribute('aria-expanded', String(!isVisible));
    }
}

function spawnDataBug() {
    if (window.gamePaused) return;
    const maxBugsAllowed = window.gameBeaten ? 20 : (20 + (window.currentLevel * 2));
    if (window.dataBugs.length >= maxBugsAllowed) return;

    const bugElement = document.createElement('div');
    bugElement.className = 'data-bug';

    let glyphs, chosenColor, chosenShadow;
    let isAlien = false;
    let isHealer = false;
    let isHarmless = false;
    let isCustomIcon = false;

    if (window.gameBeaten) {
        glyphs = ['assets/images/items/2_item_sprite.png','assets/images/soft/1.png', 'assets/images/soft/2.png', 'assets/images/items/4_item_sprite.png', 'assets/images/soft/3.png', '⛧', 'assets/images/soft/4.png', '🕸️', 'assets/images/items/3_item_sprite.png', '✦', '✧'];
        const colors = ['#00ffff', '#ffd700', '#ff00ff', '#e0b0ff', '#ffffff'];
        chosenColor = colors[Math.floor(Math.random() * colors.length)];
        chosenShadow = chosenColor;
        bugElement.style.fontSize = '18px';
    } else {
        // 10% chance to spawn one of your custom icons
        const customIconRoll = Math.random() < 0.10;

        if (customIconRoll) {
            isCustomIcon = true;
            isHealer = true; // Acts as a healer/relic
            
            // <-- custom icons -->
            glyphs = [

                'assets/images/icon2.png',
                'assets/images/items/2_item_sprite.png',
                'assets/images/sprites/healers/1_sprites_healer.png',
                'assets/images/collect/1_item_collect.png',
                'assets/images/items/4_item_sprite.png',
                'assets/images/items/3_item_sprite.png'

            ];
            
            chosenColor = '#ffffff';
            chosenShadow = 'rgba(255, 255, 255, 0.9)';
            bugElement.className += ' healer-bug';
        } else {
            const healChance = window.bossActive ? 0.35 : 0.15;
            const healRoll = Math.random() < healChance;
            if (healRoll) {
                isHealer = true;
                glyphs = ['✦', '✙', ''];
                chosenColor = '#00ffff';
                chosenShadow = 'rgba(0, 255, 255, 0.9)';
                bugElement.className += ' healer-bug';
                bugElement.style.fontSize = '22px';
            } else {
                const harmlessChance = Math.max(0.05, 0.7 - (window.currentLevel - 1) * 0.3);
                const harmlessRoll = Math.random() < harmlessChance;

                if (harmlessRoll) {
                    isHarmless = true;
                    glyphs = ['assets/images/junk/1_junk.png', '🪰', '⚙️', 'assets/images/junk/2_junk.png', 'assets/images/junk/3_junk.png', 'assets/images/junk/4_junk.png'];
                    chosenColor = '#668899'; 
                    chosenShadow = 'rgba(102, 136, 153, 0.5)';
                    bugElement.style.fontSize = '15px';
                } else {
                    const alienLimit = Math.min(0.65, 0.15 + (window.currentLevel * 0.02));
                    isAlien = Math.random() < alienLimit;

                    if (isAlien) {
                        glyphs = ['assets/images/sprites/sprites_1.png', 'assets/images/sprites/sprites_2.png', 'assets/images/sprites/sprites_7.png', 'assets/images/sprites/sprites_6.png', 'assets/images/sprites/sprites_3.png', 'assets/images/sprites/sprites_4.png', 'assets/images/sprites/sprites_5.png'];
                        chosenColor = '#a855f7';
                        chosenShadow = 'rgba(168, 85, 247, 0.9)';
                        bugElement.style.fontSize = '24px';
                    } else {
                        if (window.currentLevel < 6) {
                            glyphs = ['assets/images/sprites/sprites_1.png', '🕷️', '🪲', '🐜'];
                        } else if (window.currentLevel < 15) {
                            glyphs = ['assets/images/sprites/sprites_10.png','assets/images/sprites/sprites_11.png',];
                        } else {
                            glyphs = ['☠️', '☣', '☢', '𓁹', '⚚', '☋', '⚡', '⚙️', '⌖'];
                        }
                        const isMagenta = Math.random() > 0.5;
                        chosenColor = isMagenta ? '#ff00ff' : '#00ff66';
                        chosenShadow = isMagenta ? 'rgba(255, 0, 255, 0.8)' : 'rgba(0, 255, 102, 0.8)';
                        bugElement.style.fontSize = '16px';
                    }
                }
            }
        }
    }

    const chosenGlyph = glyphs[Math.floor(Math.random() * glyphs.length)];

    // Render image if it's a custom icon or contains a file extension
    if (isCustomIcon || chosenGlyph.includes('.')) {
        const img = document.createElement('img');
        img.src = chosenGlyph;
        img.style.width = '46px';
        img.style.height = '46px';
        img.style.objectFit = 'contain';
        bugElement.appendChild(img);
    } else {
        bugElement.textContent = chosenGlyph;
        bugElement.style.color = chosenColor;
    }

    bugElement.style.filter = `drop-shadow(0px 0px 5px ${chosenShadow})`;

    const edgeSelection = Math.floor(Math.random() * 3); 
    let x, y;
    const buffer = 40;
    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight - 40;

    if (edgeSelection === 0) {
        x = Math.random() * (viewWidth - 280) + 240;
        y = -buffer;
    } else if (edgeSelection === 1) {
        x = viewWidth + buffer;
        y = Math.random() * (viewHeight - 120) + 80;
    } else {
        x = Math.random() * (viewWidth - 280) + 240;
        y = viewHeight + buffer;
    }

    bugElement.style.left = '0px';
    bugElement.style.top = '0px';
    bugElement.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    document.body.appendChild(bugElement);

    const bugId = bugIdCounter++;
    const bugObj = {
        id: bugId,
        element: bugElement,
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        targetX: Math.random() * viewWidth,
        targetY: Math.random() * viewHeight,
        angle: 0,
        isAlien: isAlien,
        isHealer: isHealer,
        isHarmless: isHarmless,
        isPeaceful: window.gameBeaten,
        isMagenta: !isAlien && !isHealer && !isHarmless && (chosenColor === '#ff00ff')
    };

    window.dataBugs.push(bugObj);
}

function handlePowerUpSpawning() {
    if (window.gameBeaten) return;

    const spawnThreshold = window.bossActive ? 350 : 250;

    if (Math.random() * 10000 < spawnThreshold && !window.activePowerUpItem) {
        const safeCoords = getSafeSpawnCoords();

        const itemElement = document.createElement('div');
        itemElement.className = 'retro-powerup';

        let itemType = window.nextPowerUpType;

        // Boss mode overrides
        if (window.bossActive) {
            itemType = Math.random() > 0.4 ? 'health_potion' : 'fighter';
        }

        const powerUpStyles = {
            fighter: ['fighter-powerup', 'Fighter drone'],
            tornado: ['tornado-powerup', 'Vortex power-up'],
            cluster_bomb: ['bomb-powerup', 'Cluster bomb'],
            extra_life: ['extra-life', 'Extra life'],
            health_potion: ['health-potion', 'Health potion'],
            energy_cell: ['energy-cell', 'Energy cell']
        };
        const [powerUpClass, powerUpLabel] = powerUpStyles[itemType];
        itemElement.classList.add(powerUpClass);
        itemElement.setAttribute('aria-label', powerUpLabel);
        itemElement.setAttribute('role', 'img');

        // Helper: render emoji or image
        const renderIcon = (icon) => {
            if (icon.includes('.')) {
                return `<img src="${icon}" alt="" style="width:32px;height:32px;object-fit:contain;">`;
            }
            return `<span aria-hidden="true">${icon}</span>`;
        };

        // Power-up definitions
        if (itemType === 'fighter') {
            itemElement.innerHTML = renderIcon('assets/images/sprites/healers/space/1_sprites_space.png');
            window.nextPowerUpType = 'tornado';

        } else if (itemType === 'tornado') {
            itemElement.innerHTML = renderIcon('assets/images/specials/2_special_sprite.png');
            window.nextPowerUpType = 'cluster_bomb';

        } else if (itemType === 'cluster_bomb') {
            itemElement.innerHTML = renderIcon('assets/images/items/1_item_sprite.png');
            window.nextPowerUpType = 'extra_life';

        } else if (itemType === 'extra_life') {
            itemElement.innerHTML = renderIcon('assets/images/collect/2_item_collect.png');
            window.nextPowerUpType = 'health_potion';

        } else if (itemType === 'health_potion') {
            itemElement.innerHTML = renderIcon('🧪');
            window.nextPowerUpType = 'energy_cell';

        } else if (itemType === 'energy_cell') {
            itemElement.innerHTML = renderIcon('🔋');
            window.nextPowerUpType = 'fighter';
        }

        // Positioning
        itemElement.style.left = (safeCoords.x - 50) + 'px';
        itemElement.style.top = (safeCoords.y - 20) + 'px';
        document.body.appendChild(itemElement);

        // Track active item
        window.activePowerUpItem = {
            element: itemElement,
            x: safeCoords.x,
            y: safeCoords.y,
            type: itemType
        };
    }


}

function collectPowerUp() {
    if (!window.activePowerUpItem) return;

    const type = window.activePowerUpItem.type;
    window.activePowerUpItem.element.remove();
    window.activePowerUpItem = null;

    playPowerupSound();
    if (type === 'health_potion') {
        restoreHP(45);
    } else if (type === 'energy_cell') {
        restoreEnergy(35);
    } else if (type === 'extra_life') {
        window.playerLives++;
        updateLivesDisplay();
        const sX = window.orbScreenX || window.innerWidth / 2;
        const sY = window.orbScreenY || (window.innerHeight - 40) / 2;
        createExplosionParticles(sX, sY, '#8b5cf6');
    } else if (type === 'fighter') {
        deployFighters();
    } else if (type === 'tornado') {
        deployTornado();
    } else if (type === 'cluster_bomb') {
        armClusterBomb();
    }
}
window.collectPowerUp = collectPowerUp;

function deployFighters() {
    const viewHeight = window.innerHeight - 40;
    
    // Define 3 unique fighter archetypes
    const fighterArchetypes = [
        {
            img: "assets/images/sprites/healers/space/1_sprites_space.png",
            glowColor: "#22d3ee",
            fireRate: 350,
            speedY: 0.5
        },
        {
            img: "assets/images/sprites/healers/space/2_sprites_space.png",
            glowColor: "#d946ef",
            fireRate: 250,
            speedY: -0.6
        },
        {
            img: "assets/images/sprites/healers/space/3_sprites_space.png",
            glowColor: "#a855f7",
            fireRate: 600,
            speedY: 0.0
        }
    ];

    for (let i = 0; i < 3; i++) {
        const droneEl = document.createElement('div');
        droneEl.className = `fighter-drone-unit drone-type-${i + 1}`;
        
        // Grab configuration based on index (or randomize it)
        const archetype = fighterArchetypes[i % fighterArchetypes.length];

        // Fallback safety check: if a specific index image doesn't exist yet, reuse the default or map cleanly
        const spriteSrc = archetype.img || 'assets/images/sprites/healers/space/1_sprites_space.png';

        droneEl.innerHTML = `
            <div class="drone-engine"></div>
            <div class="drone-core-glow" style="background: radial-gradient(circle, ${archetype.glowColor} 0%, rgba(0,0,0,0) 70%);"></div>
            <img src="${spriteSrc}" class="drone-img" alt="">
        `;
        droneEl.style.setProperty('--drone-glow', archetype.glowColor);

        const startX = -70 - (i * 45); // Stagger their entry formations horizontally
        const startY = (viewHeight / 4) * (i + 1);
        
        droneEl.style.left = '0px';
        droneEl.style.top = '0px';
        droneEl.style.transform = `translate3d(${startX}px, ${startY}px, 0)`;
        document.body.appendChild(droneEl);

        window.activeFighters.push({
            element: droneEl,
            x: startX,
            y: startY,
            vx: 3.0 + (Math.random() * 1.0),
            vy: archetype.speedY,
            fireRate: archetype.fireRate,
            glowColor: archetype.glowColor,
            lastTrailTime: 0,
            lastFireTime: 0
        });
    }
}

function spawnFireDemonWave() {
    const viewHeight = window.innerHeight - 40;
    const demonSprites = [
        'assets/images/sprites/1fire_seige.png',
        'assets/images/sprites/2fire_seige.png',
        'assets/images/sprites/3fire_seige.png'
    ];
    const fromRight = Math.random() < 0.5;
    const startX = fromRight ? window.innerWidth + 80 : -80;
    const direction = fromRight ? -1 : 1;

    demonSprites.forEach((sprite, index) => {
        const element = document.createElement('div');
        element.className = 'fire-demon';
        element.style.setProperty('--demon-glow', ['#ff3b18', '#ff6a00', '#ff2d55'][index]);
        element.innerHTML = `<span class="fire-demon-aura"></span><span class="fire-demon-flame"></span><img src="${sprite}" alt="">`;

        const y = Math.max(50, Math.min(viewHeight - 70, viewHeight * (index + 1) / 4));
        const x = startX + direction * index * 55;
        element.style.transform = `translate3d(${x}px, ${y}px, 0) scaleX(${direction})`;
        document.body.appendChild(element);

        fireDemons.push({
            element,
            x,
            y,
            baseY: y,
            direction,
            speed: 2.2 + Math.random() * 0.6,
            wave: Math.random() * Math.PI * 2,
            fireRate: 1200 + Math.random() * 650,
            lastFireTime: Date.now() + index * 350,
            lastTrailTime: 0,
            glowColor: ['#ff3b18', '#ff6a00', '#ff2d55'][index]
        });
    });
}

function damageFireDemon(demon) {
    const index = fireDemons.indexOf(demon);
    if (index === -1) return;

    createExplosionParticles(demon.x + 34, demon.y + 34, demon.glowColor);
    playExplosionSound();
    demon.element.remove();
    fireDemons.splice(index, 1);

    window.bugEliminationCount++;
    earnXP(200);
    if (window.bugHighScore < window.bugEliminationCount) {
        window.bugHighScore = window.bugEliminationCount;
        localStorage.setItem('spectral_bugs_highscore', window.bugHighScore);
        const bugHighscoreEl = document.getElementById('bug-highscore');
        if (bugHighscoreEl) bugHighscoreEl.textContent = window.bugHighScore;
    }
    const bugCounterEl = document.getElementById('bug-counter');
    if (bugCounterEl) bugCounterEl.textContent = window.bugEliminationCount;
    updateKillsDisplay();
}
window.damageFireDemon = damageFireDemon;

function damageFireDemonsInRadius(x, y, radius) {
    for (let i = fireDemons.length - 1; i >= 0; i--) {
        const demon = fireDemons[i];
        if (Math.hypot(demon.x + 34 - x, demon.y + 34 - y) <= radius) {
            damageFireDemon(demon);
        }
    }
}

window.hitFireDemonAtOrb = function (orbX, orbY, radius) {
    for (let i = fireDemons.length - 1; i >= 0; i--) {
        const demon = fireDemons[i];
        if (Math.hypot(demon.x + 34 - orbX, demon.y + 34 - orbY) <= radius + 34) {
            damageFireDemon(demon);
            takeDamage(8);
            return true;
        }
    }
    return false;
};

function fireDemonFireball(demon, targetX, targetY) {
    const element = document.createElement('div');
    element.className = 'fireball-projectile';
    const originX = demon.x + 28;
    const originY = demon.y + 28;
    const dx = targetX - originX;
    const dy = targetY - originY;
    const distance = Math.hypot(dx, dy) || 1;
    const speed = 5.6;
    const vx = (dx / distance) * speed;
    const vy = (dy / distance) * speed;
    element.style.setProperty('--fireball-glow', demon.glowColor);
    element.style.transform = `translate3d(${originX}px, ${originY}px, 0) rotate(${Math.atan2(vy, vx)}rad)`;
    document.body.appendChild(element);

    fireDemonProjectiles.push({ element, x: originX, y: originY, vx, vy, speed, createdAt: Date.now() });
}

function deployTornado() {
    const wrapper = document.createElement('div');
    wrapper.className = 'spiral-vortex-wrapper';

    const inner = document.createElement('div');
    inner.className = 'spiral-vortex-inner';

    // Central core image or icon layout
    const symbol = document.createElement('div');
    symbol.className = 'vortex-symbol';

    const img = document.createElement('img');
    img.src = 'assets/images/specials/1_special_sprite.png';
    img.style.width = '42px';
    img.style.height = '42px';
    img.style.objectFit = 'contain';
    img.style.filter = 'drop-shadow(0 0 8px #ffffff)';
    symbol.appendChild(img);

    inner.appendChild(symbol);

    const debrisIcons = ['✦', '✧', '·', '✦', '✧', '·', '✦', '✧'];
    for (let i = 0; i < debrisIcons.length; i++) {
        const debris = document.createElement('div');
        debris.className = 'vortex-debris';
        debris.textContent = debrisIcons[Math.floor(Math.random() * debrisIcons.length)];
        debris.style.setProperty('--orbit-angle', `${(i / debrisIcons.length) * 360}deg`);
        debris.style.setProperty('--orbit-radius', `${48 + Math.random() * 42}px`);
        debris.style.setProperty('--orbit-duration', `${1.1 + Math.random() * 0.8}s`);
        debris.style.setProperty('--orbit-color', Math.random() > 0.5 ? '#22d3ee' : '#d946ef');
        debris.style.animationDelay = `${-Math.random()}s`;
        inner.appendChild(debris);
    }

    wrapper.appendChild(inner);

    const startX = window.innerWidth / 2;
    const startY = (window.innerHeight - 40) / 2;

    wrapper.style.left = '0px';
    wrapper.style.top = '0px';
    wrapper.style.transform = `translate3d(${startX - 110}px, ${startY - 110}px, 0)`;
    document.body.appendChild(wrapper);

    window.activeTornado = {
        element: wrapper,
        x: startX,
        y: startY,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        lifeFrames: 450
    };
}



function armClusterBomb() {
    window.isClusterBombArmed = true;
    document.body.classList.add('bomb-armed');

    const prompt = document.createElement('div');
    prompt.id = 'bomb-arm-prompt';
    prompt.setAttribute('role', 'status');
    prompt.setAttribute('aria-live', 'assertive');
    prompt.innerHTML = '<strong>AOE BOMB ARMED</strong><span>CLICK OR TAP THE FIELD TO DETONATE</span>';
    document.body.appendChild(prompt);

    bombAimIndicator = document.createElement('div');
    bombAimIndicator.id = 'bomb-aim-indicator';
    bombAimIndicator.setAttribute('aria-hidden', 'true');
    bombAimIndicator.innerHTML = '<span></span>';
    document.body.appendChild(bombAimIndicator);
    positionBombAimIndicator(window.innerWidth / 2, window.innerHeight / 2);

    const output = document.getElementById('terminal-output');
    if (output) {
        const line = document.createElement('div');
        line.style.color = '#c084fc';
        line.textContent = '>> AOE BOMB ARMED: CLICK OR TAP THE FIELD TO DETONATE.';
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    }
}

function positionBombAimIndicator(x, y) {
    if (!bombAimIndicator) return;
    bombAimIndicator.style.left = `${x}px`;
    bombAimIndicator.style.top = `${y}px`;
}

window.addEventListener('pointermove', event => {
    positionBombAimIndicator(event.clientX, event.clientY);
});

window.addEventListener('pointerdown', event => {
    if (window.isClusterBombArmed) {
        positionBombAimIndicator(event.clientX, event.clientY);
    }
});

function detonateClusterBomb(clickX, clickY) {
    window.isClusterBombArmed = false;
    document.body.classList.remove('bomb-armed');
    document.getElementById('bomb-arm-prompt')?.remove();
    bombAimIndicator?.remove();
    bombAimIndicator = null;

    const explosion = document.createElement('div');
    explosion.className = 'aoe-explosion';
    explosion.style.left = clickX + 'px';
    explosion.style.top = clickY + 'px';
    document.body.appendChild(explosion);

    document.body.classList.add('bomb-burst-flash');
    setTimeout(() => {
        document.body.classList.remove('bomb-burst-flash');
    }, 200);

    setTimeout(() => {
        explosion.classList.add('detonated');
        setTimeout(() => explosion.remove(), 600);
    }, 10);

    playBombExplosionSound();

    for (let i = window.dataBugs.length - 1; i >= 0; i--) {
        const bug = window.dataBugs[i];
        const distance = Math.hypot(bug.x - clickX, bug.y - clickY);
        if (distance < 300) {
            explodeBug(bug.id);
        }
    }
    damageFireDemonsInRadius(clickX, clickY, 300);

    if (window.bossActive && bossElement) {
        const distBoss = Math.hypot(window.bossX + 50 - clickX, window.bossY + 50 - clickY);
        if (distBoss < 300) {
            damageBoss(350); 
        }
    }

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * 240;
            const flareX = clickX + Math.cos(angle) * dist;
            const flareY = clickY + Math.sin(angle) * dist;
            createExplosionParticles(flareX, flareY, '#00ff66');
        }, i * 20);
    }
}

function updateHPDisplay() {
    const healthRatio = Math.max(0, Math.min(1, window.orbHP / 100));
    const damageRatio = 1 - healthRatio;
    const wallpaperLogo = document.querySelector('.wallpaper-logo');
    if (wallpaperLogo) {
        const color = {
            r: Math.round(139 + (255 - 139) * damageRatio),
            g: Math.round(92 + (55 - 92) * damageRatio),
            b: Math.round(246 + (150 - 246) * damageRatio)
        };
        wallpaperLogo.style.setProperty('--health-color', `${color.r}, ${color.g}, ${color.b}`);
        wallpaperLogo.style.setProperty('--health-glow-opacity', (0.12 + damageRatio * 0.58).toFixed(2));
        wallpaperLogo.style.setProperty('--health-glow-size', `${6 + damageRatio * 18}px`);
        wallpaperLogo.style.setProperty('--health-text-alpha', (0.025 + damageRatio * 0.12).toFixed(3));
    }

    const hpDisplay = document.getElementById('orb-hp-display');
    if (hpDisplay) {
        hpDisplay.textContent = Math.max(0, window.orbHP);
        hpDisplay.style.color = window.orbHP > 60 ? '#8b5cf6' : (window.orbHP > 25 ? '#ffcc00' : '#a855f7');
    }
    const shieldText = document.getElementById('shield-text');
    if (shieldText) shieldText.textContent = Math.max(0, window.orbHP) + '%';
    
    const shieldBar = document.getElementById('shield-bar-inner');
    if (shieldBar) {
        shieldBar.style.width = Math.max(0, window.orbHP) + '%';
        shieldBar.style.backgroundColor = window.orbHP > 60 ? '#00a8ff' : (window.orbHP > 25 ? '#ffcc00' : '#a855f7');
    }
}

function updateLivesDisplay() {
    const livesBox = document.getElementById('lives-num-display');
    if (livesBox) {
        livesBox.textContent = '❤️'.repeat(Math.max(0, window.playerLives));
    }
}

function updateKillsDisplay() {
    const killsDisplay = document.getElementById('toolbar-kills-count');
    if (killsDisplay) killsDisplay.textContent = window.bugEliminationCount;
}

function updateLevelDisplay() {
    const lvlDisplay = document.getElementById('level-num-display');
    if (lvlDisplay) lvlDisplay.textContent = window.currentLevel;
}

function updateXPDisplay() {
    const xpText = document.getElementById('xp-text');
    if (xpText) xpText.textContent = Math.round(window.currentLevelXP) + '/' + window.xpNeededForNextLevel;

    const xpBar = document.getElementById('xp-bar-inner');
    if (xpBar) xpBar.style.width = (window.currentLevelXP / window.xpNeededForNextLevel * 100) + '%';
}

function updateEnergyDisplay() {
    const energyText = document.getElementById('energy-text');
    if (energyText) energyText.textContent = Math.round(window.orbEnergy) + '%';

    const energyBar = document.getElementById('energy-bar-inner');
    if (energyBar) energyBar.style.width = window.orbEnergy + '%';
}

function triggerDamageFlashOverlay(amount) {
    const overlay = document.getElementById('damage-overlay');
    if (!overlay || amount <= 0) return;

    let chosenColor = 'rgba(139,92,246,0.25)';
    let transitionDuration = 120;

    if (amount < 5) {
        chosenColor = 'rgba(192, 132, 252, 0.15)'; 
        transitionDuration = 90;
    } else if (amount < 25) {
        chosenColor = 'rgba(139, 92, 246, 0.35)';      
        transitionDuration = 140;
    } else {
        chosenColor = 'rgba(76, 29, 149, 0.75)';      
        transitionDuration = 260;
    }

    overlay.style.backgroundColor = chosenColor;
    overlay.style.opacity = '1';

    if (window.damageFlashTimeout) clearTimeout(window.damageFlashTimeout);
    window.damageFlashTimeout = setTimeout(() => {
        overlay.style.opacity = '0';
    }, transitionDuration);
}

function takeDamage(amount) {
    if (window.orbHP <= 0 || window.gameBeaten) return;

    const activeZoom = window.orbZoomScale || 0.22;
    const scaleModifier = Math.max(0.5, activeZoom * 1.5);
    const finalDamage = Math.round(amount * scaleModifier);

    if (finalDamage <= 0) return;

    window.orbHP = Math.max(0, window.orbHP - finalDamage);
    updateHPDisplay();

    triggerDamageFlashOverlay(finalDamage);
    document.body.classList.remove('orb-damaged');
    void document.body.offsetWidth;
    document.body.classList.add('orb-damaged');
    if (window.orbDamagePulseTimeout) clearTimeout(window.orbDamagePulseTimeout);
    window.orbDamagePulseTimeout = setTimeout(() => {
        document.body.classList.remove('orb-damaged');
        window.orbDamagePulseTimeout = null;
    }, 850);
    playDamageTone();

    if (window.orbHP <= 0) {
        loseLifeOrTriggerGameOver();
    }
}
window.takeDamage = takeDamage;

function loseLifeOrTriggerGameOver() {
    window.playerLives--;
    updateLivesDisplay();
    document.body.classList.remove('orb-exploding');
    void document.body.offsetWidth;
    document.body.classList.add('orb-exploding');
    if (window.orbExplosionTimeout) clearTimeout(window.orbExplosionTimeout);
    window.orbExplosionTimeout = setTimeout(() => {
        document.body.classList.remove('orb-exploding');
        window.orbExplosionTimeout = null;
    }, 1400);

    // Grab the exact 2D screen coordinate calculated by Three.js tracker
    const deathX = window.orbScreenX || window.innerWidth / 2;
    const deathY = window.orbScreenY || (window.innerHeight - 40) / 2;

    if (window.playerLives > 0) {
        // 1. Fire multi-colored particle bursts at the orb's exact position
        createExplosionParticles(deathX, deathY, '#8b5cf6');
        createExplosionParticles(deathX, deathY, '#ff00ff');
        
        triggerDamageFlashOverlay(50);
        playOverloadSound();

        // 2. Invoke your built-in Three.js death/respawn sequence
        if (typeof killAndRespawnOrb === 'function') {
            killAndRespawnOrb();
        } else {
            // Fallback if function name differs
            window.orbHP = 100;
            updateHPDisplay();
        }
    } else {
        window.orbHP = 0;
        updateHPDisplay();
        window.gamePaused = true;
        
        // Final death explosion burst
        createExplosionParticles(deathX, deathY, '#8b5cf6');
        triggerDamageFlashOverlay(80);
        playOverloadSound();

        // Pause/Hide the geometry group if available
        if (typeof sacredGeometryGroup !== 'undefined' && sacredGeometryGroup) {
            sacredGeometryGroup.visible = false;
        }

        // Delay leaderboard modal so the explosion particles render first
        setTimeout(() => {
            triggerGameOverLeaderboardModal();
        }, 500);
    }
}

function restoreHP(amount) {
    if (window.orbHP <= 0 || window.gameBeaten) return;
    window.orbHP = Math.min(100, window.orbHP + amount);
    updateHPDisplay();
    playHealSound();

    const sX = window.orbScreenX || window.innerWidth / 2;
    const sY = window.orbScreenY || (window.innerHeight - 40) / 2;
    createExplosionParticles(sX, sY, '#00ffff');
}
window.restoreHP = restoreHP;

function restoreEnergy(amount) {
    if (window.orbHP <= 0 || window.gameBeaten) return;
    window.orbEnergy = Math.min(100, window.orbEnergy + amount);
    updateEnergyDisplay();
    playHealSound();

    const sX = window.orbScreenX || window.innerWidth / 2;
    const sY = window.orbScreenY || (window.innerHeight - 40) / 2;
    createExplosionParticles(sX, sY, '#ffd700');
}

function castAuraWave(type) {
    if (window.orbHP <= 0 || window.gameBeaten) return;

    const cost = type === 'damage' ? 20 : 10;
    if (window.orbEnergy < cost) {
        playDamageTone(); 
        return;
    }

    window.orbEnergy = Math.max(0, window.orbEnergy - cost);
    updateEnergyDisplay();

    const orbX = window.orbScreenX || window.innerWidth / 2;
    const orbY = window.orbScreenY || (window.innerHeight - 40) / 2;

    const wave = document.createElement('div');
    wave.className = `aura-wave ${type}`;
    wave.style.left = orbX + 'px';
    wave.style.top = orbY + 'px';
    document.body.appendChild(wave);

    setTimeout(() => {
        wave.classList.add('expanded');
        setTimeout(() => { wave.remove(); }, 400);
    }, 10);

    playAuraAudio(type);

    if (type === 'damage') {
        const radius = 180;
        for (let i = window.dataBugs.length - 1; i >= 0; i--) {
            const bug = window.dataBugs[i];
            const dist = Math.hypot(bug.x - orbX, bug.y - orbY);
            if (dist < radius) {
                explodeBug(bug.id);
            }
        }
        damageFireDemonsInRadius(orbX, orbY, radius);
        if (window.bossActive && bossElement) {
            const distBoss = Math.hypot(window.bossX + 50 - orbX, window.bossY + 50 - orbY);
            if (distBoss < radius) {
                damageBoss(150); 
            }
        }
    } else {
        const radius = 240;
        for (let i = window.dataBugs.length - 1; i >= 0; i--) {
            const bug = window.dataBugs[i];
            const dx = bug.x - orbX;
            const dy = bug.y - orbY;
            const dist = Math.hypot(dx, dy);
            if (dist < radius) {
                const angle = Math.atan2(dy, dx);
                bug.vx = Math.cos(angle) * 8.0;
                bug.vy = Math.sin(angle) * 8.0;
            }
        }
        if (window.bossActive && bossElement) {
            const dxBoss = (window.bossX + 50) - orbX;
            const dyBoss = (window.bossY + 50) - orbY;
            const distBoss = Math.hypot(dxBoss, dyBoss);
            if (distBoss < radius) {
                const angle = Math.atan2(dyBoss, dxBoss);
                window.bossVX = Math.cos(angle) * 4.0;
                window.bossVY = Math.sin(angle) * 4.0;
            }
        }
    }
}
window.castAuraWave = castAuraWave;

function playAuraAudio(type) {
    try {
        getGameAudioContext();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        connectGameAudioNode(gainNode);

        if (type === 'damage') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(400, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.35);
        } else {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(300, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.35);
        }

        gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.35);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.35);
    } catch (e) {}
}

function triggerOrbExplosion() {
    const centerX = window.orbScreenX || (window.innerWidth / 2);
    const centerY = window.orbScreenY || ((window.innerHeight - 40) / 2);

    const colors = [
        "#ff00ff",
        "#00ff66",
        "#00a8ff",
        "#a855f7"
    ];

    // Fire multi-colored particle bursts from the orb's center
    colors.forEach((color, i) => {
        setTimeout(() => {
            createExplosionParticles(centerX, centerY, color);
        }, i * 80);
    });

    // Flash/pulse the damage or screen overlay so the player sees the hit effect
    triggerDamageFlashOverlay(50);
    playOverloadSound();

}

function triggerGameOverLeaderboardModal() {
    playOverloadSound();
    const modal = document.getElementById('gameover-modal');
    const scoreVal = document.getElementById('final-score-val');
    if (scoreVal) scoreVal.textContent = window.bugEliminationCount * 100 + (window.currentLevel * 500);
    if (modal) modal.style.display = 'flex';
    renderLeaderboardList();
}

function clearGameBoard() {
    if (spawnIntervalTimer) clearInterval(spawnIntervalTimer);
    if (showcaseAllyTimer) clearTimeout(showcaseAllyTimer);
    spawnIntervalTimer = null;
    showcaseAllyTimer = null;

    window.dataBugs.forEach(bug => bug?.element?.remove());
    window.dataBugs = [];
    window.activePowerUpItem?.element?.remove();
    window.activePowerUpItem = null;
    window.activeShowcaseAlly?.element?.remove();
    window.activeShowcaseAlly = null;
    window.activeTornado?.element?.remove();
    window.activeTornado = null;
    window.activeFighters.forEach(fighter => fighter?.element?.remove());
    window.activeFighters = [];
    fireDemons.forEach(demon => demon.element.remove());
    fireDemons = [];
    fireDemonProjectiles.forEach(projectile => projectile.element.remove());
    fireDemonProjectiles = [];
    nextFireDemonWaveAt = Date.now() + 12000;

    if (typeof cleanupBossFight === 'function') cleanupBossFight();
    if (typeof window.clearOrbTrailGhosts === 'function') window.clearOrbTrailGhosts();

    document.querySelectorAll([
        '.data-bug',
        '.retro-powerup',
        '.showcase-ally',
        '.fighter-drone-unit',
        '.fighter-trail-particle',
        '.fire-demon',
        '.fire-demon-trail',
        '.fireball-projectile',
        '.fighter-orb',
        '.spiral-vortex-wrapper',
        '.boss-entity',
        '.boss-projectile',
        '.boss-charge-line',
        '.laser-beam',
        '.bug-particle',
        '.aura-wave',
        '.aoe-explosion',
        '.sparkle-trail',
        '#bomb-arm-prompt',
        '#bomb-aim-indicator'
    ].join(',')).forEach(element => element.remove());

    bossProjectiles = [];
}

function submitScoreToLeaderboard() {
    const nameInput = document.getElementById('leaderboard-name-input');
    const nickname = (nameInput && nameInput.value.trim()) ? nameInput.value.trim().toUpperCase() : 'ANONYMOUS';
    const finalScore = window.bugEliminationCount * 100 + (window.currentLevel * 500);

    let scores = JSON.parse(localStorage.getItem('spectral_garden_lb') || '[]');
    scores.push({ name: nickname, score: finalScore });
    scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 5);

    localStorage.setItem('spectral_garden_lb', JSON.stringify(scores));
    renderLeaderboardList();

    clearGameBoard();

    // --- Reset all game states back to Level 1 and clean up bosses ---
    window.playerLives = 3;
    window.bugEliminationCount = 0;
    window.currentLevel = 1;                  
    window.currentLevelXP = 0;
    window.xpNeededForNextLevel = 2000;       
    window.orbHP = 100;
    window.orbEnergy = 100;
    window.gameBeaten = false;
    window.gamePaused = false;
    window.gamePausedForShowcase = false;
    window.isClusterBombArmed = false;
    window.nextPowerUpType = 'fighter';
    window.showcaseWindowId = null;
    document.body.classList.remove('orb-exploding', 'orb-damaged', 'bomb-armed', 'bomb-burst-flash', 'showcase-burst-flash');
    if (window.orbExplosionTimeout) clearTimeout(window.orbExplosionTimeout);
    if (window.orbDamagePulseTimeout) clearTimeout(window.orbDamagePulseTimeout);
    if (window.damageFlashTimeout) clearTimeout(window.damageFlashTimeout);
    window.orbExplosionTimeout = null;
    window.orbDamagePulseTimeout = null;
    window.damageFlashTimeout = null;
    const damageOverlay = document.getElementById('damage-overlay');
    if (damageOverlay) damageOverlay.style.opacity = '0';

    const modal = document.getElementById('gameover-modal');
    if (modal) modal.style.display = 'none';

    updateLivesDisplay();
    updateKillsDisplay();
    updateHPDisplay();
    updateLevelDisplay();
    updateXPDisplay();
    updateEnergyDisplay();

    // Re-evolve the visual orb back to Level 1 geometries
    if (typeof evolveOrbForLevel === 'function') {
        evolveOrbForLevel(1);
    }
    if (typeof window.resetOrbForNewGame === 'function') {
        window.resetOrbForNewGame();
    }

    reinitSpawnInterval();
    scheduleShowcaseAlly();
}window.submitScoreToLeaderboard = submitScoreToLeaderboard;

function renderLeaderboardList() {
    const listEl = document.getElementById('leaderboard-list');
    if (!listEl) return;
    
    let scores = JSON.parse(localStorage.getItem('spectral_garden_lb') || '[]');
    if (scores.length === 0) {
        listEl.innerHTML = '<div style="text-align:center; color:#666;">NO RECORDS LOGGED</div>';
        return;
    }

    listEl.innerHTML = '';
    scores.forEach((entry, idx) => {
        const row = document.createElement('div');
        row.className = 'lb-row';
        row.innerHTML = `<span>#${idx + 1} ${entry.name}</span><span>${entry.score} PTS</span>`;
        listEl.appendChild(row);
    });
}

function earnXP(amount) {
    if (window.gameBeaten) return;
    if (window.bossActive) return;

    window.currentLevelXP += amount;

    if (window.currentLevelXP >= window.xpNeededForNextLevel) {
        window.currentLevelXP = window.xpNeededForNextLevel;
        updateXPDisplay();
        triggerBossFight();
    } else {
        updateXPDisplay();
    }
}

function advanceLevel() {
    window.currentLevelXP = 0;
    if (window.currentLevel < 32) {
        window.currentLevel++;
        window.xpNeededForNextLevel = 2000 + (window.currentLevel * 1000);
        updateLevelDisplay();
        updateXPDisplay();
        reinitSpawnInterval();

        triggerLevelTransitionBanner(window.currentLevel);

        if (typeof window.evolveOrbForLevel === 'function') {
            window.evolveOrbForLevel(window.currentLevel);
        }
    } else {
        triggerTranscendedEndState();
    }
}

function triggerBossFight() {
    if (window.bossActive) return;
    
    window.bossActive = true;
    window.bossMaxHP = 600 + (window.currentLevel * 250);
    window.bossHP = window.bossMaxHP;

    window.bossX = window.innerWidth / 2 - 50;
    window.bossY = 180;
    window.bossIsCharging = false;

    const bossSymbols = [
        'assets/images/boss/2_boss.png', 
        'assets/images/boss/3_boss.png', 
        'assets/images/boss/4_boss.png', 
        'assets/images/boss/10_boss.png', 
        'assets/images/boss/6_boss.png', 
        'assets/images/boss/1_boss.png', 
        'assets/images/boss/11_boss.png', 
        'assets/images/boss/9_boss.png', 
        'assets/images/boss/12_boss.png',
        'assets/images/boss/13_boss.png',
        '⚡', 
        '🪐'
    ];
    const chosenSymbol = bossSymbols[Math.floor(Math.random() * bossSymbols.length)];
    
    const bossTitles = [
        "CORE_BREACH_CORRUPTOR.EXE",
        "VOID_PHANTOM_OVERLORD.SYS",
        "ANOMALY_VECTOR_ZERO.BAT",
        "SPECTRAL_DAEMON_DESTRUCTOR",
        "ENTROPY_MATRIX_SINGULARITY",
        "QUANTUM_CORRUPTION_NEXUS"
    ];
    const chosenTitle = bossTitles[Math.floor(Math.random() * bossTitles.length)];

    const randomHue = Math.floor(Math.random() * 360);
    const speedMultiplier = 1.0 + (window.currentLevel * 0.08);
    window.bossVX = (Math.random() > 0.5 ? 1 : -1) * (1.2 + Math.random() * 0.8) * speedMultiplier;
    window.bossVY = (Math.random() > 0.5 ? 1 : -1) * (0.8 + Math.random() * 0.6) * speedMultiplier;

    // --- CREATE BOSS ELEMENT FIRST ---
    bossElement = document.createElement('div');
    bossElement.className = 'boss-entity';
    
    // --- FIX: CHECK FOR IMAGE EXTENSION OR RENDER PROPERLY ---
    if (chosenSymbol.includes('.')) {
        const img = document.createElement('img');
        img.src = chosenSymbol;
        img.style.width = '72px';
        img.style.height = '72px';
        img.style.objectFit = 'contain';
        
        // Fallback safety if the image file fails to load
        img.onerror = function() {
            this.onerror = null;
            this.replaceWith(document.createTextNode('👾'));
        };
        
        bossElement.appendChild(img);
    } else {
        bossElement.textContent = chosenSymbol;
    }
    // ---------------------------------------------------------

    bossElement.style.filter = `hue-rotate(${randomHue}deg) drop-shadow(0 0 20px rgba(168, 85, 247, 0.9))`;
    bossElement.style.transform = `translate3d(${window.bossX}px, ${window.bossY}px, 0)`;
    document.body.appendChild(bossElement);

    const bossTitleEl = document.querySelector('.boss-title');
    if (bossTitleEl) bossTitleEl.textContent = `[LVL ${window.currentLevel}] ${chosenTitle}`;

    const bossHUD = document.getElementById('boss-hud');
    if (bossHUD) bossHUD.style.display = 'block';

    updateBossHUD();

    lastBossChargeTime = Date.now() + 2000; 
    lastBossStarRainTime = Date.now();
    lastBossMissileTime = Date.now();

    playLevelUpSound(); 
}

function updateBossHUD() {
    const currentHP = document.getElementById('boss-hp-current');
    const maxHP = document.getElementById('boss-hp-max');
    const bar = document.getElementById('boss-hp-bar-inner');
    
    if (currentHP) currentHP.textContent = Math.round(window.bossHP);
    if (maxHP) maxHP.textContent = window.bossMaxHP;
    if (bar) bar.style.width = (window.bossHP / window.bossMaxHP * 100) + '%';
}

function damageBoss(amount) {
    if (!window.bossActive) return;
    
    window.bossHP = Math.max(0, window.bossHP - amount);
    updateBossHUD();

    createExplosionParticles(window.bossX + 50, window.bossY + 50, '#a855f7');
    playExplosionSound();

    if (window.bossHP <= 0) {
        defeatBoss();
    }
}

function defeatBoss() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createExplosionParticles(window.bossX + 30 + Math.random() * 40, window.bossY + 30 + Math.random() * 40, '#a855f7');
            playExplosionSound();
        }, i * 150);
    }

    cleanupBossFight();
    advanceLevel();
}

function cleanupBossFight() {
    window.bossActive = false;
    if (bossElement) {
        bossElement.remove();
        bossElement = null;
    }
    const bossHUD = document.getElementById('boss-hud');
    if (bossHUD) bossHUD.style.display = 'none';

    bossProjectiles.forEach(proj => proj.element.remove());
    bossProjectiles = [];

    const existingLines = document.querySelectorAll('.boss-charge-line');
    existingLines.forEach(line => line.remove());
}

function triggerLevelTransitionBanner(lvl) {
    const banner = document.getElementById('level-banner');
    const bannerText = document.getElementById('level-banner-text');
    const bannerSub = document.getElementById('level-banner-sub');

    if (banner && bannerText && bannerSub) {
        bannerText.textContent = `LEVEL ${lvl}`;
        if (lvl < 5) {
            bannerSub.textContent = "VOID SIGNAL RECONFIGURED";
        } else if (lvl < 12) {
            bannerSub.textContent = "SHADOW SYSTEM BREACH DETECTED";
        } else if (lvl < 20) {
            bannerSub.textContent = "SPECTRAL INTRUSION INTENSIFYING";
        } else if (lvl < 25) {
            bannerSub.textContent = "CORE STRUCTURE OVERLOADING";
        } else {
            bannerSub.textContent = "CRITICAL COGNITIVE DISSONANCE";
        }

        banner.classList.add('show');
        playLevelUpSound();

        setTimeout(() => {
            banner.classList.remove('show');
        }, 3000);
    }
}

function triggerTranscendedEndState() {
    window.gameBeaten = true;
    window.currentLevel = 32;
    updateLevelDisplay();

    for (let i = 0; i < window.dataBugs.length; i++) {
        window.dataBugs[i].element.remove();
    }
    window.dataBugs = [];

    if (window.activePowerUpItem) {
        window.activePowerUpItem.element.remove();
        window.activePowerUpItem = null;
    }
    if (window.activeTornado) {
        window.activeTornado.element.remove();
        window.activeTornado = null;
    }
    for (let i = 0; i < window.activeFighters.length; i++) {
        window.activeFighters[i].element.remove();
    }
    window.activeFighters = [];

    const banner = document.getElementById('level-banner');
    const bannerText = document.getElementById('level-banner-text');
    const bannerSub = document.getElementById('level-banner-sub');

    if (banner && bannerText && bannerSub) {
        bannerText.textContent = "TRANSCENDED";
        bannerSub.textContent = "SPECTRAL GARDEN HARMONIZED // VOID CALMED";
        banner.classList.add('show');
        playLevelUpSound();
        setTimeout(() => {
            banner.classList.remove('show');
        }, 4500);
    }

    if (typeof window.evolveOrbForLevel === 'function') {
        window.evolveOrbForLevel(32);
    }
}

function updateGameplayLoop() {
    if (window.gamePaused) {
        requestAnimationFrame(updateGameplayLoop);
        return;
    }

    const viewWidth = window.innerWidth;
    const viewHeight = window.innerHeight - 40;

    handlePowerUpSpawning();

    for (let i = window.dataBugs.length - 1; i >= 0; i--) {
        const bugObj = window.dataBugs[i];
        
        if (isNaN(bugObj.x) || isNaN(bugObj.y)) {
            bugObj.x = window.innerWidth / 2;
            bugObj.y = (window.innerHeight - 40) / 2;
            bugObj.vx = 0;
            bugObj.vy = 0;
        }

        if (bugObj.isAlien && typeof window.orbScreenX === 'number' && typeof window.orbScreenY === 'number' && !isNaN(window.orbScreenX)) {
            bugObj.targetX = window.orbScreenX;
            bugObj.targetY = window.orbScreenY;
        }

        const dx = bugObj.targetX - bugObj.x;
        const dy = bugObj.targetY - bugObj.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 40 && !bugObj.isAlien) {
            bugObj.targetX = Math.random() * viewWidth;
            bugObj.targetY = Math.random() * viewHeight;
        }

        const forceX = (dx / (dist || 1)) * 0.05;
        const forceY = (dy / (dist || 1)) * 0.05;

        bugObj.vx += forceX;
        bugObj.vy += forceY;

        const speedScale = 1.0 + (window.currentLevel * 0.04);
        const maxSpeed = bugObj.isPeaceful ? 0.6 : (bugObj.isHealer ? 1.5 : (bugObj.isAlien ? (1.8 * speedScale) : (1.2 * speedScale)));
        const currentSpeed = Math.hypot(bugObj.vx, bugObj.vy);
        if (currentSpeed > maxSpeed) {
            bugObj.vx = (bugObj.vx / currentSpeed) * maxSpeed;
            bugObj.vy = (bugObj.vy / currentSpeed) * maxSpeed;
        }

        bugObj.x += bugObj.vx;
        bugObj.y += bugObj.vy;

        bugObj.angle = Math.atan2(bugObj.vy, bugObj.vx) + Math.PI / 2 + Math.sin(Date.now() * 0.015) * 0.15;
        bugObj.element.style.transform = `translate3d(${bugObj.x}px, ${bugObj.y}px, 0) rotate(${bugObj.angle}rad)`;
    }

    if (window.activeShowcaseAlly) {
        const ally = window.activeShowcaseAlly;
        ally.x += ally.vx;
        ally.element.style.transform = `translate3d(${ally.x}px, ${ally.y}px, 0)`;

        const allyWidth = ally.element.offsetWidth;
        const allyHeight = ally.element.offsetHeight;
        for (let i = window.dataBugs.length - 1; i >= 0; i--) {
            const bug = window.dataBugs[i];
            const bugX = bug.x + 12;
            const bugY = bug.y + 12;
            if (bugX >= ally.x && bugX <= ally.x + allyWidth &&
                bugY >= ally.y && bugY <= ally.y + allyHeight) {
                explodeBug(bug.id);
            }
        }
        damageFireDemonsInRadius(ally.x + allyWidth / 2, ally.y + allyHeight / 2, 40);

        if (window.bossActive && bossElement && !ally.bossHit &&
            window.bossX < ally.x + allyWidth && window.bossX + 100 > ally.x &&
            window.bossY < ally.y + allyHeight && window.bossY + 100 > ally.y) {
            ally.bossHit = true;
            damageBoss(250);
        }

        for (let i = bossProjectiles.length - 1; i >= 0; i--) {
            const projectile = bossProjectiles[i];
            if (projectile.x >= ally.x && projectile.x <= ally.x + allyWidth &&
                projectile.y >= ally.y && projectile.y <= ally.y + allyHeight) {
                projectile.element.remove();
                bossProjectiles.splice(i, 1);
            }
        }

        if (ally.x > viewWidth + allyWidth) {
            ally.element.remove();
            window.activeShowcaseAlly = null;
            scheduleShowcaseAlly();
        }
    }

    const now = Date.now();
    if (!window.gameBeaten && window.currentLevel >= 5 && now >= nextFireDemonWaveAt) {
        spawnFireDemonWave();
        nextFireDemonWaveAt = now + Math.max(12000, 24000 - window.currentLevel * 350);
    }

    for (let i = fireDemons.length - 1; i >= 0; i--) {
        const demon = fireDemons[i];
        demon.x += demon.speed * demon.direction;
        demon.y = demon.baseY + Math.sin(now * 0.003 + demon.wave) * 28;
        demon.element.style.transform = `translate3d(${demon.x}px, ${demon.y}px, 0) scaleX(${demon.direction})`;

        if (now - demon.lastTrailTime > 38) {
            demon.lastTrailTime = now;
            const trail = document.createElement('span');
            trail.className = 'fire-demon-trail';
            trail.textContent = Math.random() > 0.45 ? '✦' : '🔥';
            trail.style.color = demon.glowColor;
            trail.style.left = `${demon.x + (demon.direction > 0 ? 8 : 44)}px`;
            trail.style.top = `${demon.y + 20 + Math.random() * 18}px`;
            trail.style.setProperty('--trail-drift', `${(Math.random() - 0.5) * 18}px`);
            trail.addEventListener('animationend', () => trail.remove(), { once: true });
            document.body.appendChild(trail);
        }

        if (now - demon.lastFireTime >= demon.fireRate) {
            demon.lastFireTime = now;
            fireDemonFireball(demon, window.orbScreenX, window.orbScreenY);
        }

        if ((demon.direction > 0 && demon.x > viewWidth + 80) ||
            (demon.direction < 0 && demon.x < -100)) {
            demon.element.remove();
            fireDemons.splice(i, 1);
        }
    }

    for (let i = fireDemonProjectiles.length - 1; i >= 0; i--) {
        const projectile = fireDemonProjectiles[i];
        const orbX = window.orbScreenX || window.innerWidth / 2;
        const orbY = window.orbScreenY || (window.innerHeight - 40) / 2;
        const targetDx = orbX - projectile.x;
        const targetDy = orbY - projectile.y;
        const targetDistance = Math.hypot(targetDx, targetDy) || 1;
        const desiredVx = targetDx / targetDistance * projectile.speed;
        const desiredVy = targetDy / targetDistance * projectile.speed;
        const turnStrength = 0.075;
        projectile.vx += (desiredVx - projectile.vx) * turnStrength;
        projectile.vy += (desiredVy - projectile.vy) * turnStrength;
        const steeredSpeed = Math.hypot(projectile.vx, projectile.vy) || 1;
        projectile.vx = projectile.vx / steeredSpeed * projectile.speed;
        projectile.vy = projectile.vy / steeredSpeed * projectile.speed;
        const previousX = projectile.x;
        const previousY = projectile.y;
        projectile.x += projectile.vx;
        projectile.y += projectile.vy;
        projectile.element.style.transform = `translate3d(${projectile.x}px, ${projectile.y}px, 0) rotate(${Math.atan2(projectile.vy, projectile.vx)}rad)`;

        const collisionRadius = 50 * (window.orbZoomScale || 0.22) + 11;
        const segmentX = projectile.x - previousX;
        const segmentY = projectile.y - previousY;
        const segmentLengthSquared = segmentX * segmentX + segmentY * segmentY;
        const nearestPointRatio = segmentLengthSquared
            ? Math.max(0, Math.min(1, ((orbX - previousX) * segmentX + (orbY - previousY) * segmentY) / segmentLengthSquared))
            : 0;
        const nearestX = previousX + segmentX * nearestPointRatio;
        const nearestY = previousY + segmentY * nearestPointRatio;
        if (Math.hypot(nearestX - orbX, nearestY - orbY) < collisionRadius) {
            createExplosionParticles(projectile.x, projectile.y, projectile.element.style.getPropertyValue('--fireball-glow'));
            projectile.element.remove();
            fireDemonProjectiles.splice(i, 1);
            takeDamage(8);
            continue;
        }

        if (now - projectile.createdAt > 5000 ||
            projectile.x < -40 || projectile.x > viewWidth + 40 ||
            projectile.y < -40 || projectile.y > window.innerHeight + 40) {
            projectile.element.remove();
            fireDemonProjectiles.splice(i, 1);
        }
    }

    for (let i = window.activeFighters.length - 1; i >= 0; i--) {
        const drone = window.activeFighters[i];
        drone.x += drone.vx;
        drone.y += drone.vy;

        drone.element.style.transform = `translate3d(${drone.x}px, ${drone.y}px, 0)`;

        if (now - drone.lastTrailTime > 55) {
            drone.lastTrailTime = now;
            const trail = document.createElement('span');
            trail.className = 'fighter-trail-particle';
            trail.textContent = Math.random() > 0.5 ? '✦' : '·';
            trail.style.color = drone.glowColor;
            trail.style.left = `${drone.x - 13}px`;
            trail.style.top = `${drone.y + 16 + (Math.random() - 0.5) * 12}px`;
            trail.style.setProperty('--trail-drift', `${(Math.random() - 0.5) * 22}px`);
            trail.style.setProperty('--trail-scale', `${0.6 + Math.random() * 0.7}`);
            trail.addEventListener('animationend', () => trail.remove(), { once: true });
            document.body.appendChild(trail);
        }

        let target = null;
        let minDist = 280;

        if (window.bossActive && bossElement) {
            const dB = Math.hypot(window.bossX + 50 - drone.x, window.bossY + 50 - drone.y);
            if (dB < minDist) {
                minDist = dB;
                target = { id: 'boss', x: window.bossX + 50, y: window.bossY + 50 };
            }
        }

        if (!target) {
            for (const demon of fireDemons) {
                const d = Math.hypot(demon.x + 34 - drone.x, demon.y + 34 - drone.y);
                if (d < minDist) {
                    minDist = d;
                    target = { id: 'fire-demon', demon, x: demon.x + 34, y: demon.y + 34 };
                }
            }
        }

        if (!target) {
            for (let b = 0; b < window.dataBugs.length; b++) {
                const bug = window.dataBugs[b];
                if (bug.isPeaceful) continue;
                const d = Math.hypot(bug.x - drone.x, bug.y - drone.y);
                if (d < minDist) {
                    minDist = d;
                    target = bug;
                }
            }
        }

        if (target && (now - drone.lastFireTime > drone.fireRate)) {
            drone.lastFireTime = now;
            fireLaser(drone.x, drone.y, target, drone.glowColor); // Optional: pass color to laser
        }

        if (drone.x > viewWidth + 60) {
            drone.element.remove();
            window.activeFighters.splice(i, 1);
        }
    }

    if (window.activeTornado) {
        const tornado = window.activeTornado;
        
        tornado.vx += (Math.random() - 0.5) * 0.4;
        tornado.vy += (Math.random() - 0.5) * 0.4;
        tornado.vx *= 0.98;
        tornado.vy *= 0.98;

        tornado.x += tornado.vx;
        tornado.y += tornado.vy;

        if (tornado.x < 110) { tornado.x = 110; tornado.vx *= -1; }
        if (tornado.x > viewWidth - 110) { tornado.x = viewWidth - 110; tornado.vx *= -1; }
        if (tornado.y < 110) { tornado.y = 110; tornado.vy *= -1; }
        if (tornado.y > viewHeight - 110) { tornado.y = viewHeight - 110; tornado.vy *= -1; }

        tornado.element.style.transform = `translate3d(${tornado.x - 110}px, ${tornado.y - 110}px, 0)`;

        for (let b = window.dataBugs.length - 1; b >= 0; b--) {
            const bug = window.dataBugs[b];
            if (bug.isPeaceful) continue;
            const d = Math.hypot(bug.x - tornado.x, bug.y - tornado.y);
            if (d < 110) {
                explodeBug(bug.id);
            }
        }
        damageFireDemonsInRadius(tornado.x, tornado.y, 110);

        if (window.bossActive && bossElement) {
            const dBoss = Math.hypot(window.bossX + 50 - tornado.x, window.bossY + 50 - tornado.y);
            if (dBoss < 110) {
                damageBoss(5); 
            }
        }

        tornado.lifeFrames--;
        if (tornado.lifeFrames <= 0) {
            tornado.element.remove();
            window.activeTornado = null;
        }
    }

    if (window.bossActive && bossElement) {
        if (!window.bossIsCharging) {
            window.bossX += window.bossVX;
            window.bossY += window.bossVY;

            if (window.bossX < 220 || window.bossX > window.innerWidth - 150) window.bossVX *= -1;
            if (window.bossY < 80 || window.bossY > window.innerHeight - 200) window.bossVY *= -1;

            bossElement.style.transform = `translate3d(${window.bossX}px, ${window.bossY}px, 0)`;
        }

        const orbX = window.orbScreenX || (window.innerWidth / 2);
        const orbY = window.orbScreenY || ((window.innerHeight - 40) / 2);

        if (now - lastBossChargeTime > 6500 && !window.bossIsCharging) {
            window.bossIsCharging = true;
            bossElement.style.borderColor = '#ffffff'; 
            
            const warningLine = document.createElement('div');
            warningLine.className = 'boss-charge-line';
            document.body.appendChild(warningLine);

            const bCenterX = window.bossX + 50;
            const bCenterY = window.bossY + 50;
            const dX = orbX - bCenterX;
            const dY = orbY - bCenterY;
            const len = Math.hypot(dX, dY);
            const rot = Math.atan2(dY, dX);

            warningLine.style.width = len + 'px';
            warningLine.style.transform = `translate3d(${bCenterX}px, ${bCenterY}px, 0) rotate(${rot}rad)`;

            setTimeout(() => {
                warningLine.remove();
                if (window.gamePaused) {
                    lastBossChargeTime = Date.now();
                    return;
                }
                if (!window.bossActive) return;

                const slideAngle = Math.atan2(orbY - (window.bossY + 50), orbX - (window.bossX + 50));
                const targetSlideX = window.bossX + Math.cos(slideAngle) * len;
                const targetSlideY = window.bossY + Math.sin(slideAngle) * len;

                let slideStepCount = 0;
                const slideTicks = 20;

                const slideInterval = setInterval(() => {
                    if (!window.bossActive) {
                        clearInterval(slideInterval);
                        return;
                    }
                    if (window.gamePaused) return;
                    window.bossX += (targetSlideX - window.bossX) * 0.25;
                    window.bossY += (targetSlideY - window.bossY) * 0.25;
                    bossElement.style.transform = `translate3d(${window.bossX}px, ${window.bossY}px, 0)`;
                    
                    slideStepCount++;
                    if (slideStepCount >= slideTicks) {
                        clearInterval(slideInterval);
                        window.bossIsCharging = false;
                        if (bossElement) bossElement.style.borderColor = '#a855f7';
                        lastBossChargeTime = Date.now();
                    }
                }, 20);

            }, 1500);
        }

        if (now - lastBossStarRainTime > 8500) {
            lastBossStarRainTime = now;
            for (let s = 0; s < 8; s++) {
                setTimeout(() => {
                    if (window.gamePaused) return;
                    if (!window.bossActive) return;
                    const proj = document.createElement('div');
                    proj.className = 'boss-projectile';
                    proj.textContent = '✦';
                    proj.style.color = '#ff9900';
                    proj.style.fontSize = '14px';

                    const spawnX = Math.random() * (window.innerWidth - 300) + 220;
                    const spawnY = -20;
                    
                    proj.style.transform = `translate3d(${spawnX}px, ${spawnY}px, 0)`;
                    document.body.appendChild(proj);

                    bossProjectiles.push({
                        element: proj,
                        x: spawnX,
                        y: spawnY,
                        vy: 3.5 + Math.random() * 1.5,
                        type: 'star'
                    });
                }, s * 200);
            }
        }

        if (now - lastBossMissileTime > 4500) {
            lastBossMissileTime = now;
            const proj = document.createElement('div');
            proj.className = 'boss-projectile';
            proj.textContent = '☄️';
            proj.style.fontSize = '18px';
            
            const bCenterX = window.bossX + 50;
            const bCenterY = window.bossY + 50;
            proj.style.transform = `translate3d(${bCenterX}px, ${bCenterY}px, 0)`;
            document.body.appendChild(proj);

            bossProjectiles.push({
                element: proj,
                x: bCenterX,
                y: bCenterY,
                vx: 0,
                vy: 0,
                type: 'missile'
            });
        }
    }

    for (let p = bossProjectiles.length - 1; p >= 0; p--) {
        const proj = bossProjectiles[p];
        const orbX = window.orbScreenX || (window.innerWidth / 2);
        const orbY = window.orbScreenY || ((window.innerHeight - 40) / 2);

        if (proj.type === 'star') {
            proj.y += proj.vy;
            proj.element.style.transform = `translate3d(${proj.x}px, ${proj.y}px, 0)`;

            if (proj.y > window.innerHeight) {
                proj.element.remove();
                bossProjectiles.splice(p, 1);
                continue;
            }
        } else if (proj.type === 'missile') {
            const dx = orbX - proj.x;
            const dy = orbY - proj.y;
            const len = Math.hypot(dx, dy);

            proj.vx += (dx / (len || 1)) * 0.08;
            proj.vy += (dy / (len || 1)) * 0.08;
            proj.vx *= 0.98;
            proj.vy *= 0.98;

            proj.x += proj.vx;
            proj.y += proj.vy;

            proj.element.style.transform = `translate3d(${proj.x}px, ${proj.y}px, 0)`;
        }

        const collisionRadius = 50 * (window.orbZoomScale || 0.22);
        const distToOrb = Math.hypot(proj.x - orbX, proj.y - orbY);

        if (distToOrb < collisionRadius + 8) {
            createExplosionParticles(proj.x, proj.y, '#a855f7');
            proj.element.remove();
            bossProjectiles.splice(p, 1);

            const damageVal = proj.type === 'star' ? 4 : 8;
            takeDamage(damageVal);
        }
    }

    requestAnimationFrame(updateGameplayLoop);
}

function fireLaser(fromX, fromY, bugTarget, color = '#00ff66') {
    const laser = document.createElement('div');
    laser.className = 'laser-beam';
    laser.style.backgroundColor = color;
    laser.style.boxShadow = `0 0 8px ${color}`;
    document.body.appendChild(laser);

    const dx = bugTarget.x - fromX;
    const dy = bugTarget.y - fromY;
    const length = Math.hypot(dx, dy);
    const rotation = Math.atan2(dy, dx);

    laser.style.width = length + 'px';
    laser.style.transform = `translate3d(${fromX + 7}px, ${fromY + 7}px, 0) rotate(${rotation}rad)`;

    if (bugTarget.id === 'boss') {
        damageBoss(80); 
    } else if (bugTarget.id === 'fire-demon') {
        damageFireDemon(bugTarget.demon);
    } else {
        explodeBug(bugTarget.id);
    }

    setTimeout(() => {
        laser.style.opacity = '0';
        setTimeout(() => laser.remove(), 100);
    }, 80);
}

function explodeBug(bugId) {
    const activeIndex = window.dataBugs.findIndex(b => b.id === bugId);
    if (activeIndex === -1) return;

    const bugObj = window.dataBugs[activeIndex];
    
    if (bugObj.isHealer) {
        restoreHP(25);
    }

    const particleColor = bugObj.isHealer ? '#00ffff' : (bugObj.isAlien ? '#a855f7' : (bugObj.isMagenta ? '#ff00ff' : (bugObj.isHarmless ? '#668899' : '#00ff66')));

    createExplosionParticles(bugObj.x, bugObj.y, particleColor);
    playExplosionSound();

    bugObj.element.remove();
    window.dataBugs.splice(activeIndex, 1);

    window.bugEliminationCount++;
    
    const xpReward = bugObj.isHealer ? 150 : (bugObj.isAlien ? 200 : (bugObj.isHarmless ? 50 : 100));
    earnXP(xpReward);
    
    if (window.bugHighScore < window.bugEliminationCount) {
        window.bugHighScore = window.bugEliminationCount;
        localStorage.setItem('spectral_bugs_highscore', window.bugHighScore);
        const bugHighscoreEl = document.getElementById('bug-highscore');
        if (bugHighscoreEl) bugHighscoreEl.textContent = window.bugHighScore;
    }

    const bugCounterEl = document.getElementById('bug-counter');
    if (bugCounterEl) bugCounterEl.textContent = window.bugEliminationCount;
    updateKillsDisplay();
}
window.explodeBug = explodeBug;

function createExplosionParticles(x, y, color) {
    const count = 10;
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'bug-particle';
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 4px ${color}`;
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        document.body.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 2.5 + 1.2;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        let opacity = 1.0;
        let pX = x;
        let pY = y;

        const loop = setInterval(() => {
            pX += vx;
            pY += vy;
            opacity -= 0.05;

            particle.style.left = pX + 'px';
            particle.style.top = pY + 'px';
            particle.style.opacity = opacity;

            if (opacity <= 0) {
                clearInterval(loop);
                particle.remove();
            }
        }, 20);
    }
}

function playExplosionSound() {
    try {
        getGameAudioContext();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        connectGameAudioNode(gainNode);
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(320, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(15, audioCtx.currentTime + 0.12);
        
        gainNode.gain.setValueAtTime(0.07, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.12);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.12);
    } catch (e) {}
}

function playDamageTone() {
    try {
        getGameAudioContext();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        connectGameAudioNode(gainNode);
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(180, audioCtx.currentTime);
        osc.frequency.setValueAtTime(90, audioCtx.currentTime + 0.05);
        
        gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.1);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
    } catch (e) {}
}

function playHealSound() {
    try {
        getGameAudioContext();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        connectGameAudioNode(gainNode);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.2);

        gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.2);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.2);
    } catch (e) {}
}

function playOverloadSound() {
    try {
        getGameAudioContext();
        const osc = audioCtx.createOscillator();
        const noise = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.connect(gainNode);
        noise.connect(gainNode);
        connectGameAudioNode(gainNode);
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(400, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(20, audioCtx.currentTime + 0.65);
        
        noise.type = 'square';
        noise.frequency.setValueAtTime(80, audioCtx.currentTime);
        noise.frequency.setValueAtTime(20, audioCtx.currentTime + 0.65);
        
        gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.65);

        osc.start();
        noise.start();
        osc.stop(audioCtx.currentTime + 0.65);
        noise.stop(audioCtx.currentTime + 0.65);
    } catch (e) {}
}

function playBombExplosionSound() {
    try {
        getGameAudioContext();
        const osc = audioCtx.createOscillator();
        const subOsc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc.connect(gainNode);
        subOsc.connect(gainNode);
        connectGameAudioNode(gainNode);

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        subOsc.frequency.setValueAtTime(65, subOsc.currentTime);
        gainNode.gain.setValueAtTime(0.35, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.85);

        osc.start();
        subOsc.start();
        osc.stop(audioCtx.currentTime + 0.85);
        subOsc.stop(audioCtx.currentTime + 0.85);
    } catch (e) {}
}

function playLevelUpSound() {
    try {
        getGameAudioContext();
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        connectGameAudioNode(gainNode);

        osc1.type = 'sine';
        osc2.type = 'triangle';

        osc1.frequency.setValueAtTime(440, audioCtx.currentTime); 
        osc1.frequency.setValueAtTime(554.37, audioCtx.currentTime + 0.15); 
        osc1.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.3); 
        osc1.frequency.setValueAtTime(880, audioCtx.currentTime + 0.45); 

        osc2.frequency.setValueAtTime(220, audioCtx.currentTime); 
        osc2.frequency.setValueAtTime(277.18, audioCtx.currentTime + 0.15); 
        osc2.frequency.setValueAtTime(329.63, audioCtx.currentTime + 0.3); 
        osc2.frequency.setValueAtTime(440, audioCtx.currentTime + 0.45); 

        gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.65);

        osc1.start();
        osc2.start();
        osc1.stop(audioCtx.currentTime + 0.65);
        osc2.stop(audioCtx.currentTime + 0.65);
    } catch (e) {}
}

function playPowerupSound() {
    try {
        getGameAudioContext();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        connectGameAudioNode(gainNode);
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.08);
        osc.frequency.setValueAtTime(1760, audioCtx.currentTime + 0.16);
        
        gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.24);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.24);
    } catch (e) {}
}

function loadModule(category, key) {
    playUISound();
    const data = moduleDatabase[category]?.[key];
    if (!data) return;

    currentActiveKeys[category] = key;

    if (category === 'vst') {
        const win = document.getElementById('vst-window');
        win.querySelector('.window-header .window-title').textContent = data.title;
        win.querySelector('.window-body h3').textContent = data.header;
        win.querySelector('.window-body p').textContent = data.desc;
        
        const img = win.querySelector('#vst-img');
        if (img) {
            img.src = data.image || '';
            img.onerror = function() {
                this.onerror = null;
                this.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='200'><rect width='100%' height='100%' fill='%23111'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%2300ff00' font-family='monospace'>[ ${data.header} PREVIEW ]</text></svg>`;
            };
        }
        
        const actionBar = win.querySelector('.window-body .action-bar');
        actionBar.innerHTML = '';
        data.links.forEach(link => {
            const btn = document.createElement('a');
            btn.href = link.href;
            btn.className = 'retro-btn';
            btn.textContent = link.text;
            actionBar.appendChild(btn);
        });
        openWindow('vst-window');
    } else if (category === 'games') {
        const win = document.getElementById('games-window');
        win.querySelector('.window-header .window-title').textContent = data.title;
        win.querySelector('.window-body h3').textContent = data.header;
        win.querySelector('.window-body p').textContent = data.desc;
        win.querySelector('.game-terminal-box').textContent = data.content;

        const img = win.querySelector('#game-img');
        if (img) {
            img.src = data.image || '';
            img.onerror = function() {
                this.onerror = null;
                this.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='200'><rect width='100%' height='100%' fill='%23111'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%2300ff00' font-family='monospace'>[ ${data.header} PREVIEW ]</text></svg>`;
            };
        }

        openWindow('games-window');
    } else if (category === 'apps') {
        const win = document.getElementById('apps-window');
        win.querySelector('.window-header .window-title').textContent = data.title;
        win.querySelector('.window-body h3').textContent = data.header;
        win.querySelector('.window-body p').textContent = data.desc;

        // Use innerHTML instead of textContent so <a> links become clickable
        const appBox = win.querySelector('.app-data-box');
        appBox.innerHTML = data.content;
        if (data.pageUrl) {
            const pageButton = document.createElement('button');
            pageButton.className = 'retro-btn';
            pageButton.type = 'button';
            pageButton.textContent = data.openLabel || 'OPEN PAGE';
            pageButton.addEventListener('click', () => openAppPage(key));
            appBox.appendChild(pageButton);
        }

        const img = win.querySelector('#app-img');
        if (img) {
            img.alt = `[${data.header} Preview]`;
            img.onerror = function() {
                this.onerror = null;
                this.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='200'><rect width='100%' height='100%' fill='%23111'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%2300ff00' font-family='monospace'>[ ${data.header} PREVIEW ]</text></svg>`;
            };
            img.src = data.image || `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='200'><rect width='100%' height='100%' fill='%23111'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%2300ff00' font-family='monospace'>[ ${data.header} PREVIEW ]</text></svg>`;
        }

        openWindow('apps-window');
    } else if (category === 'music') {
        const win = document.getElementById('music-window');
        win.querySelector('.window-header .window-title').textContent = data.title;
        win.querySelector('.window-body h3').textContent = data.header;
        win.querySelector('.window-body p').textContent = data.desc;
        win.querySelector('.music-tracker-display').textContent = data.player;

        const img = win.querySelector('#music-img');
        if (img) {
            img.src = data.image || '';
            img.onerror = function() {
                this.onerror = null;
                this.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='200'><rect width='100%' height='100%' fill='%23111'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%2300ff00' font-family='monospace'>[ ${data.header} PREVIEW ]</text></svg>`;
            };
        }

        openWindow('music-window');
    }

    closeStartMenu();
}

function openAppPage(key) {
    const data = moduleDatabase.apps[key];
    if (data?.pageUrl) {
        window.open(data.pageUrl, '_blank', 'noopener,noreferrer');
    }
}
window.openAppPage = openAppPage;

function navigateModule(category, direction) {
    const keys = Object.keys(moduleDatabase[category]);
    if (!keys.length) return;

    let index = keys.indexOf(currentActiveKeys[category]);
    if (index === -1) index = 0;

    if (direction === 'next') {
        index = (index + 1) % keys.length;
    } else {
        index = (index - 1 + keys.length) % keys.length;
    }

    loadModule(category, keys[index]);
}

function dragElement(elmnt, header) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (header) {
        header.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        
        document.body.classList.add('dragging-active');
        
        document.querySelectorAll('.window').forEach(w => {
            w.style.zIndex = w.classList.contains('showcase-window') ? 100020 : 10;
        });
        elmnt.style.zIndex = elmnt.classList.contains('showcase-window') ? 100021 : 100;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.body.classList.remove('dragging-active');
    }
}

function centerWindowOnScreen(win) {
    const winWidth = win.offsetWidth || parseInt(win.style.width) || 420;
    const winHeight = win.offsetHeight || 320;
    const left = Math.max(20, (window.innerWidth - winWidth) / 2);
    const top = Math.max(20, (window.innerHeight - 40 - winHeight) / 2);
    win.style.left = left + 'px';
    win.style.top = top + 'px';
}

function openWindow(id) {
    playUISound();
    const win = document.getElementById(id);
    if (win) {
        if (showcaseWindowIds.has(id)) {
            if (!window.gamePausedForShowcase) {
                window.gamePausedBeforeShowcase = window.gamePaused;
            }
            window.gamePaused = true;
            window.gamePausedForShowcase = true;
            document.body.appendChild(win);
            win.classList.add('showcase-window');
        }
        win.style.display = 'flex';
        win.style.zIndex = win.classList.contains('showcase-window') ? 100020 : 101;
        centerWindowOnScreen(win);
    }
}
window.openWindow = openWindow;

function closeWindow(id) {
    playUISound();
    const win = document.getElementById(id);
    if (win) {
        win.style.display = 'none';
    }
    if (showcaseWindowIds.has(id)) {
        if (window.showcaseWindowId === id) {
            window.showcaseWindowId = null;
        }
        const anotherShowcaseWindowIsOpen = Array.from(showcaseWindowIds).some(windowId => {
            const showcaseWindow = document.getElementById(windowId);
            return showcaseWindow && showcaseWindow.style.display !== 'none';
        });
        if (!anotherShowcaseWindowIsOpen && window.gamePausedForShowcase) {
            window.gamePaused = window.gamePausedBeforeShowcase;
            window.gamePausedBeforeShowcase = false;
            window.gamePausedForShowcase = false;
            window.showcaseWindowId = null;
            scheduleShowcaseAlly();
        }
    }
}

// --- ADMIN TERMINAL & COMMAND LINE ROUTER ---

function submitAdminCommand(event) {
    event.preventDefault();
    const inputEl = document.getElementById('admin-terminal-input');
    const outputEl = document.getElementById('admin-terminal-output');
    if (!inputEl || !outputEl) return;

    const val = inputEl.value.trim();
    if (!val) return;

    const cmdLine = document.createElement('div');
    cmdLine.textContent = `> ${val}`;
    outputEl.appendChild(cmdLine);

    const cleanCommand = val.toLowerCase();

    if (cleanCommand.startsWith('admin69_skip_to_')) {
        const targetLvl = parseInt(cleanCommand.replace('admin69_skip_to_', ''), 10);
        if (!isNaN(targetLvl) && targetLvl >= 1 && targetLvl <= 32) {
            window.currentLevel = targetLvl;
            window.currentLevelXP = 0;
            window.xpNeededForNextLevel = 2000 + (window.currentLevel * 1000);
            updateLevelDisplay();
            updateXPDisplay();
            reinitSpawnInterval();
            
            const successLine = document.createElement('div');
            successLine.style.color = '#00ff66';
            successLine.textContent = `>> SUCCESS: JUMPED TO LEVEL ${targetLvl}`;
            outputEl.appendChild(successLine);

            if (typeof window.evolveOrbForLevel === 'function') {
                window.evolveOrbForLevel(targetLvl);
            }
        } else {
            const errLvl = document.createElement('div');
            errLvl.style.color = '#8b5cf6';
            errLvl.textContent = `>> ERROR: TARGET LEVEL MUST BE BETWEEN 1 AND 32`;
            outputEl.appendChild(errLvl);
        }
    } else if (cleanCommand === 'help') {
        const helpLine = document.createElement('div');
        helpLine.style.color = '#00ffff';
        helpLine.textContent = `>> ADMIN PROTOCOLS: type 'admin69_skip_to_[1-32]' to jump levels.`;
        outputEl.appendChild(helpLine);
    } else {
        const errLine = document.createElement('div');
        errLine.style.color = '#8b5cf6';
        errLine.textContent = `>> UNKNOWN COMMAND "${val}". TYPE 'help' FOR PROTOCOLS.`;
        outputEl.appendChild(errLine);
    }

    outputEl.scrollTop = outputEl.scrollHeight;
    inputEl.value = '';
}
window.submitAdminCommand = submitAdminCommand;


function submitTerminal(event) {
    event.preventDefault();
    const inputElement = document.getElementById('terminal-input');
    const outputElement = document.getElementById('terminal-output');
    const inputVal = inputElement.value;

    if (!inputVal.trim()) return;

    const promptLine = document.createElement('div');
    promptLine.textContent = `> ${inputVal}`;
    outputElement.appendChild(promptLine);

    const cleanCommand = inputVal.trim().replace(/[^a-zA-Z0-9\s-_]/g, '').slice(0, 50).toLowerCase();

    let responseText = '';
    switch (cleanCommand) {
        case 'help':
            responseText = 'AVAILABLE PROTOCOLS: [vst, play, manifest, pulse, escape]';
            break;
        case 'vst':
            responseText = 'LOADING PARANORMAL SYNTHESIS SUITE... DETECTING HARDWARE.';
            break;
        case 'manifest':
            responseText = 'COORDINATES DETECTED: 53.3498° N, 6.2603° W. SHADOW PORTAL INITIATED.';
            break;
        default:
            responseText = `COMMAND "${inputVal}" RECORDED. SYSTEM EVALUATION IN PROGRESS...`;
    }

    const responseLine = document.createElement('div');
    responseLine.style.color = '#ff00ff';
    responseLine.textContent = `>> ${responseText}`;
    outputElement.appendChild(responseLine);
    
    outputElement.scrollTop = outputElement.scrollHeight;
    inputElement.value = '';
}

let audioCtx;
let gameAudioGain;
const storedAudioVolume = localStorage.getItem('spectral_game_volume');
let gameAudioVolume = storedAudioVolume === null ? 1 : Number(storedAudioVolume);
if (!Number.isFinite(gameAudioVolume) || gameAudioVolume < 0 || gameAudioVolume > 1) gameAudioVolume = 1;
let gameAudioMuted = localStorage.getItem('spectral_game_muted') === 'true';

function getGameAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        gameAudioGain = audioCtx.createGain();
        gameAudioGain.connect(audioCtx.destination);
        window.audioCtx = audioCtx;
        updateGameAudioGain();
    }
    return audioCtx;
}

function connectGameAudioNode(audioNode) {
    if (!gameAudioGain) getGameAudioContext();
    audioNode.connect(gameAudioGain);
}

function updateGameAudioGain() {
    if (gameAudioGain && audioCtx) {
        gameAudioGain.gain.setTargetAtTime(gameAudioMuted ? 0 : gameAudioVolume, audioCtx.currentTime, 0.015);
    }
}

function updateAudioControls() {
    const volumeSlider = document.getElementById('game-volume');
    const volumeValue = document.getElementById('game-volume-value');
    const muteButton = document.getElementById('game-mute-toggle');
    if (volumeSlider) volumeSlider.value = String(Math.round(gameAudioVolume * 100));
    if (volumeValue) volumeValue.textContent = `${Math.round(gameAudioVolume * 100)}%`;
    if (muteButton) {
        muteButton.textContent = gameAudioMuted ? 'UNMUTE' : 'MUTE';
        muteButton.setAttribute('aria-pressed', String(gameAudioMuted));
    }
}

function initializeAudioControls() {
    const volumeSlider = document.getElementById('game-volume');
    const muteButton = document.getElementById('game-mute-toggle');

    if (volumeSlider) {
        volumeSlider.addEventListener('input', () => {
            gameAudioVolume = Number(volumeSlider.value) / 100;
            localStorage.setItem('spectral_game_volume', String(gameAudioVolume));
            updateAudioControls();
            updateGameAudioGain();
        });
    }

    if (muteButton) {
        muteButton.addEventListener('click', () => {
            gameAudioMuted = !gameAudioMuted;
            localStorage.setItem('spectral_game_muted', String(gameAudioMuted));
            updateAudioControls();
            updateGameAudioGain();
        });
    }

    updateAudioControls();
}

window.getGameAudioContext = getGameAudioContext;
window.connectGameAudioNode = connectGameAudioNode;

function playUISound() {
    try {
        getGameAudioContext();
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        connectGameAudioNode(gainNode);
        
        osc.type = 'square';
        osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.08);
        
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.08);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {}
}

window.damageBoss = damageBoss;