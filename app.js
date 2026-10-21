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
    title: "C:\\PROG\\GAMES\\ASTRALS_END.EXE",
    header: "Astral's End",
    desc: "A spectral arcade survival game. Slingshot the core through the field, gather power-ups, and face the corrupted guardians.",
    image: "",
    content: "STATUS: READY\nGAME WINDOW: RESIZABLE\nCONTROLS: DRAG AND RELEASE"
        },
       
    },
   apps: {
        app_a: {
            title: "C:\\PROG\\APPS\\AKASHIC_TAROT.EXE",
            header: "AKASHIC TAROT V2.3",
            desc: "A ritual-coded search guide for the Akashic Tarot deck. Built as a static web portal using HTML, CSS, and JavaScript.",
            image: "assets/images/tarot_preview.png",
            content: "--- AKASHIC TAROT SYSTEM SPECS ---<br><br>" +
                     "✨ <strong>FEATURES:</strong><br>" +
                     "• Search: Instantly locates & highlights cards.<br>" +
                     "• Random Draw: Simulates a digital pull.<br>" +
                     "• Zero Bloat: Pure ritual logic, no backend.<br><br>" +
                     "🧪 <strong>TECH STACK:</strong> HTML, CSS, Vanilla JS<br><br>",
            pageUrl: "https://akashictarot.spectralgarden.net/",
            openLabel: "LAUNCH AKASHIC TAROT WEBAPP"
        },
        app_b: {
            title: "C:\\PROG\\APPS\\SPECTRAL_ATLAS.EXE",
            header: "SPECTRAL ATLAS",
            desc: "An interactive astrocartography atlas that maps planetary lines around the world from your birth details. Explore relocation charts, planetary crossings, parans, and transits.",
            content: "SPECTRAL ATLAS // COSMIC LOCATION MAPPING<br><br>" +
                     "Enter your birth date, time, and location to explore personalized planetary lines across an interactive world map.<br><br>" +
                     "FEATURES: Astrocartography lines, relocation comparisons, planetary crossings, parans, and transit maps.",
            image: "assets/images/spectralatlasscreen.png",
            pageUrl: "https://spectralatlas.spectralgarden.net/",
            openLabel: "LAUNCH SPECTRAL ATLAS"
        },
        app_c: {
            title: "C:\\PROG\\APPS\\FLAME_FINDER.EXE",
            header: "FLAME FINDER",
            desc: "Explore astrology and relationship synastry, then connect with a community forum for charts, interpretations, and conversation.",
            content: "ASTROLOGY TOOLS + COMMUNITY<br><br>" +
                     "Explore natal charts and synastry reports, and connect with others in the Flame Finder forum.",
            image: "assets/images/flamefinderscreenshot.png",
            pageUrl: "https://flamefinder.spectralgarden.net/",
            openLabel: "LAUNCH FLAME FINDER"
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
window.sleepParalysisPoints = 0;
const sleepPortalSpawnedLevels = new Set();
let bugIdCounter = 0;
let showcaseAllyTimer = null;
let lastShowcaseItemId = null;
const desktopShowcaseTimers = new Map();

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
let bossRetreatTimer = null;
let bossReturnTimer = null;
let bossReturnReady = false;
let bossProjectiles = [];
window.bossRetreating = false;
window.sleepParalysisActive = false;
window.sleepParalysisTransitioning = false;
window.sleepParalysisCharging = false;
window.sleepParalysisRoundPoints = 0;
let sleepParalysisEnemies = [];
let sleepParalysisEndsAt = 0;
let sleepParalysisNextSpawnAt = 0;
let sleepParalysisChargeStartedAt = 0;
let sleepParalysisLastDamageAt = 0;
let sleepParalysisTransitionTimer = null;
let sleepParalysisPausedAt = 0;
let fireDemons = [];
let fireDemonProjectiles = [];
let nextFireDemonWaveAt = Date.now() + 12000;
let confettiNpc = null;
let confettiBombProjectiles = [];
let nextConfettiNpcAt = Date.now() + 18000;
let enemyFighters = [];
let enemyFighterProjectiles = [];
let nextEnemyFighterWaveAt = Date.now() + 14000;
let mines = [];
let mineFragments = [];
let nextMineSpawnAt = Date.now() + 12000;
let gameTimeEffectTimer = null;
window.gameMovementScale = 1;

window.isClusterBombArmed = false;
window.orbHP = 100;

window.orbScreenX = window.innerWidth / 2;
window.orbScreenY = (window.innerHeight - 40) / 2;

window.activePowerUpItem = null;
window.activeFighters = [];
window.activeTornado = null;
window.nextPowerUpType = 'fighter';
window.gamePaused = true;
window.gameWindowActive = false;
window.activeShowcaseAlly = null;
window.showcaseWindowId = null;
const showcaseWindowIds = new Set(['apps-window', 'vst-window']);

let spawnIntervalTimer = null;
let gameplayFrameHandle = null;
let bombAimIndicator = null;
let wordmarkGlitchTimer = null;

function appendGameEntity(element) {
    const layer = document.getElementById('game-entities-layer');
    (layer || document.body).appendChild(element);
}

function updateGameEntityClip() {
    const stage = document.getElementById('game-stage');
    const layer = document.getElementById('game-entities-layer');
    if (!stage || !layer) return;
    const rect = stage.getBoundingClientRect();
    const isVisible = window.gameWindowActive && rect.width > 0 && rect.height > 0;
    layer.style.visibility = isVisible ? 'visible' : 'hidden';
    layer.style.clipPath = isVisible
        ? `inset(${Math.max(0, rect.top)}px ${Math.max(0, window.innerWidth - rect.right)}px ${Math.max(0, window.innerHeight - rect.bottom)}px ${Math.max(0, rect.left)}px)`
        : 'inset(0 100% 100% 0)';
    positionSleepParalysisOverlay();
}

function startGameplayLoop() {
    if (gameplayFrameHandle === null && !window.gamePaused) {
        gameplayFrameHandle = requestAnimationFrame(updateGameplayLoop);
    }
}

function stopGameplayLoop() {
    if (gameplayFrameHandle !== null) {
        cancelAnimationFrame(gameplayFrameHandle);
        gameplayFrameHandle = null;
    }
}

function togglePauseGame() {
    if (!window.gameWindowActive) return;
    const wasPaused = window.gamePaused;
    window.gamePaused = !window.gamePaused;
    if (!wasPaused && window.sleepParalysisActive) {
        sleepParalysisPausedAt = Date.now();
        window.sleepParalysisCharging = false;
        window.cancelSleepParalysisCharge?.();
        document.body.classList.remove('sleep-aura-charging');
    } else if (wasPaused && sleepParalysisPausedAt) {
        if (sleepParalysisEndsAt) sleepParalysisEndsAt += Date.now() - sleepParalysisPausedAt;
        sleepParalysisPausedAt = 0;
    }
    const modal = document.getElementById('pause-modal');
    if (modal) modal.style.display = window.gamePaused ? 'flex' : 'none';
    const button = document.querySelector('#games-window .game-window-controls [aria-label="Pause or resume game"]');
    if (button) button.textContent = window.gamePaused ? '▶' : 'Ⅱ';
    if (window.gamePaused) {
        stopGameplayLoop();
        if (spawnIntervalTimer) clearInterval(spawnIntervalTimer);
        spawnIntervalTimer = null;
        window.stopPortalAnimation?.();
    } else {
        startGameplayLoop();
        reinitSpawnInterval();
        window.startPortalAnimation?.();
    }
}
window.togglePauseGame = togglePauseGame;

function setGameTimeEffect(scale, label) {
    window.gameMovementScale = scale;
    if (gameTimeEffectTimer) clearTimeout(gameTimeEffectTimer);

    let indicator = document.getElementById('game-time-effect');
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.id = 'game-time-effect';
        indicator.setAttribute('role', 'status');
        appendGameEntity(indicator);
    }
    indicator.textContent = `${label} // 6 SECONDS`;
    indicator.classList.toggle('game-time-effect--slow', scale < 1);
    indicator.classList.toggle('game-time-effect--fast', scale > 1);
    indicator.classList.add('is-visible');

    gameTimeEffectTimer = setTimeout(() => {
        window.gameMovementScale = 1;
        indicator.classList.remove('is-visible');
        gameTimeEffectTimer = null;
    }, 6000);
}

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

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    wordmark.addEventListener('animationiteration', (event) => {
        if (event.target !== wordmark || !['wallpaper-pulse', 'game-wordmark-pulse'].includes(event.animationName)) return;
        if (wordmarkGlitchTimer) clearTimeout(wordmarkGlitchTimer);
        wordmarkGlitchTimer = window.setTimeout(() => {
            wordmarkGlitchTimer = null;
            if (Math.random() > 0.42 || document.body.classList.contains('orb-exploding')) return;

            const bounds = wordmark.getBoundingClientRect();
            const colors = ['#c084fc', '#f472b6', '#67e8f9', '#93c5fd'];
            const fragmentCount = 18 + Math.floor(Math.random() * 11);
            for (let i = 0; i < fragmentCount; i++) {
                const pixel = document.createElement('span');
                pixel.className = 'wallpaper-glitch-pixel';
                const color = colors[Math.floor(Math.random() * colors.length)];
                pixel.style.left = `${Math.random() * bounds.width}px`;
                pixel.style.top = `${Math.random() * bounds.height}px`;
                pixel.style.width = `${2 + Math.random() * 7}px`;
                pixel.style.height = `${1 + Math.random() * 3}px`;
                pixel.style.setProperty('--glitch-color', color);
                pixel.style.setProperty('--glitch-x', `${(Math.random() - 0.5) * 32}px`);
                pixel.style.setProperty('--glitch-y', `${(Math.random() - 0.5) * 20}px`);
                wordmark.appendChild(pixel);
                pixel.addEventListener('animationend', () => pixel.remove(), { once: true });
            }
        }, 4000);
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

    const gameStage = document.getElementById('game-stage');
    if (gameStage && 'ResizeObserver' in window) {
        new ResizeObserver(() => {
            updateGameEntityClip();
            window.resizeGamePortal?.();
        }).observe(gameStage);
    }
    window.addEventListener('resize', updateGameEntityClip);
    window.addEventListener('scroll', updateGameEntityClip, { passive: true });
    document.addEventListener('mousemove', updateGameEntityClip);

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
    updateXPDisplay();
    updateEnergyDisplay();

    updateGameEntityClip();
    loadModule('games', 'game_a', { keepPosition: true, silent: true });
    loadModule('apps', Object.keys(moduleDatabase.apps)[0], { keepPosition: true, silent: true });
    loadModule('vst', Object.keys(moduleDatabase.vst)[0], { keepPosition: true, silent: true });

    document.addEventListener('click', (e) => {
        if (window.isClusterBombArmed) {
            if (e.target.closest('#game-stage')) {
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
    if (window.sleepParalysisActive) return;
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
            // DOUBLE-TAP -> Pulse / Push Aura (5 Energy)
            castAuraWave('push');
        } else if (tapCount >= 3) {
            // TRIPLE-TAP -> Damage Blast Aura (10 Energy)
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
    const bounds = getGameBounds();
    const margin = 32;
    return {
        x: bounds.left + margin + Math.random() * Math.max(0, bounds.right - bounds.left - margin * 2),
        y: bounds.top + margin + Math.random() * Math.max(0, bounds.bottom - bounds.top - margin * 2)
    };
}

function reinitSpawnInterval() {
    if (spawnIntervalTimer) clearInterval(spawnIntervalTimer);
    spawnIntervalTimer = null;
    if (window.gamePaused || !window.gameWindowActive) return;
    
    const intervalTime = Math.max(400, 1200 - (window.currentLevel * 50));
    spawnIntervalTimer = setInterval(() => {
        if (!window.gamePaused && document.visibilityState === 'visible') {
            spawnDataBug();
        }
    }, intervalTime);
}

function scheduleShowcaseAlly(delay = 12000 + Math.random() * 18000) {
    if (!window.gameWindowActive) return;
    if (showcaseAllyTimer) clearTimeout(showcaseAllyTimer);
    showcaseAllyTimer = setTimeout(() => {
        showcaseAllyTimer = null;
        if (!window.gameWindowActive) return;
        if (window.gamePaused || window.sleepParalysisActive || window.sleepParalysisTransitioning || window.activeShowcaseAlly) {
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

    const bounds = getGameBounds();
    const cardHeight = 118;
    const viewHeight = Math.max(0, bounds.bottom - bounds.top - cardHeight);
    const y = bounds.top + 20 + Math.random() * Math.max(0, viewHeight - 20);
    const x = bounds.left - 150;
    element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    element.addEventListener('click', event => {
        event.preventDefault();
        event.stopPropagation();
        openShowcaseAlly(category, key, element);
    });
    appendGameEntity(element);

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
    appendGameEntity(burst);
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
    damageConfettiNpcInRadius(centerX, centerY, blastRadius);

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
    if (window.gamePaused || window.sleepParalysisActive || window.sleepParalysisTransitioning) return;
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
                    glyphs = ['assets/images/junk/1_junk.png', 'assets/images/junk/6_junk.png', 'assets/images/junk/5_junk.png', 'assets/images/junk/2_junk.png', 'assets/images/junk/3_junk.png', 'assets/images/junk/4_junk.png'];
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

    const edgeSelection = Math.floor(Math.random() * 4); 
    let x, y;
    const buffer = 40;
    const bounds = getGameBounds();
    const viewWidth = bounds.right - bounds.left;
    const viewHeight = bounds.bottom - bounds.top;

    if (edgeSelection === 0) {
        x = bounds.left + Math.random() * viewWidth;
        y = bounds.top - buffer;
    } else if (edgeSelection === 1) {
        x = bounds.right + buffer;
        y = bounds.top + Math.random() * viewHeight;
    } else if (edgeSelection === 2) {
        x = bounds.left + Math.random() * viewWidth;
        y = bounds.bottom + buffer;
    } else {
        x = bounds.left - buffer;
        y = bounds.top + Math.random() * viewHeight;
    }

    bugElement.style.left = '0px';
    bugElement.style.top = '0px';
    bugElement.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    appendGameEntity(bugElement);

    const bugId = bugIdCounter++;
    const bugObj = {
        id: bugId,
        element: bugElement,
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        targetX: bounds.left + Math.random() * viewWidth,
        targetY: bounds.top + Math.random() * viewHeight,
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

        const canSpawnPortal = window.currentLevel >= 5 &&
            !sleepPortalSpawnedLevels.has(window.currentLevel);
        let itemType = canSpawnPortal && Math.random() < 0.1
            ? 'sleep_portal'
            : window.nextPowerUpType;

        // Boss mode overrides
        if (window.bossActive && itemType !== 'sleep_portal') {
            itemType = Math.random() > 0.4 ? 'health_potion' : 'fighter';
        }

        const powerUpStyles = {
            fighter: ['fighter-powerup', 'Fighter drone'],
            tornado: ['tornado-powerup', 'Vortex power-up'],
            cluster_bomb: ['bomb-powerup', 'Cluster bomb'],
            extra_life: ['extra-life', 'Extra life'],
            health_potion: ['health-potion', 'Health potion'],
            energy_cell: ['energy-cell', 'Energy cell'],
            time_fracture: ['time-fracture', 'Time fracture: slow time'],
            time_forward: ['time-forward', 'Time forward: accelerate time'],
            sleep_portal: ['sleep-paralysis-portal', 'Sleep paralysis portal']
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
            window.nextPowerUpType = 'time_fracture';
        } else if (itemType === 'time_fracture') {
            itemElement.innerHTML = renderIcon('assets/images/items/timefracture.png');
            window.nextPowerUpType = 'time_forward';
        } else if (itemType === 'time_forward') {
            itemElement.innerHTML = renderIcon('assets/images/items/timeforward.png');
            window.nextPowerUpType = 'fighter';
        } else if (itemType === 'sleep_portal') {
            itemElement.innerHTML = renderIcon('assets/images/soft/1.png');
            sleepPortalSpawnedLevels.add(window.currentLevel);
        }

        // Positioning
        itemElement.style.left = (safeCoords.x - 50) + 'px';
        itemElement.style.top = (safeCoords.y - 20) + 'px';
        appendGameEntity(itemElement);

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
    } else if (type === 'time_fracture') {
        setGameTimeEffect(0.45, 'TIME FRACTURE');
    } else if (type === 'time_forward') {
        setGameTimeEffect(1.7, 'TIME FORWARD');
    } else if (type === 'sleep_portal') {
        startSleepParalysisMode();
    }
}
window.collectPowerUp = collectPowerUp;

function deployFighters() {
    const bounds = getGameBounds();
    const viewHeight = bounds.bottom - bounds.top;
    
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

        const startX = bounds.left - 70 - (i * 45);
        const startY = bounds.top + (viewHeight / 4) * (i + 1);
        
        droneEl.style.left = '0px';
        droneEl.style.top = '0px';
        droneEl.style.transform = `translate3d(${startX}px, ${startY}px, 0)`;
        appendGameEntity(droneEl);

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
    const bounds = getGameBounds();
    const viewHeight = bounds.bottom - bounds.top;
    const demonSprites = [
        'assets/images/sprites/1fire_seige.png',
        'assets/images/sprites/2fire_seige.png',
        'assets/images/sprites/3fire_seige.png'
    ];
    const fromRight = Math.random() < 0.5;
    const startX = fromRight ? bounds.right + 80 : bounds.left - 80;
    const direction = fromRight ? -1 : 1;

    demonSprites.forEach((sprite, index) => {
        const element = document.createElement('div');
        element.className = 'fire-demon';
        element.style.setProperty('--demon-glow', ['#ff3b18', '#ff6a00', '#ff2d55'][index]);
        element.innerHTML = `<span class="fire-demon-aura"></span><span class="fire-demon-flame"></span><img src="${sprite}" alt="">`;

        const y = bounds.top + Math.max(50, Math.min(viewHeight - 70, viewHeight * (index + 1) / 4));
        const x = startX + direction * index * 55;
        element.style.transform = `translate3d(${x}px, ${y}px, 0) scaleX(${direction})`;
        appendGameEntity(element);

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

function spawnEnemyFighterWave() {
    const sprites = [
        'assets/images/enemy fighters/NoseUPenemyfighterjets.png',
        'assets/images/enemy fighters/NoseUPenemyfighterjet2.png',
        'assets/images/enemy fighters/NoseUPenemyfighterjets3.png'
    ];
    const bounds = getGameBounds();
    const viewHeight = bounds.bottom - bounds.top;

    sprites.forEach((sprite, index) => {
        const element = document.createElement('div');
        element.className = 'enemy-fighter';
        element.innerHTML = `<img src="${sprite}" alt="">`;
        const x = bounds.right + 80 + index * 75;
        const y = bounds.top + Math.max(60, Math.random() * (viewHeight - 120));
        element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        appendGameEntity(element);
        enemyFighters.push({
            element,
            x,
            y,
            baseY: y,
            vx: -(1.6 + Math.random() * 0.8),
            hp: 3,
            fireRate: 1700 + Math.random() * 500,
            lastFireTime: Date.now() + index * 350
        });
    });
}

function damageEnemyFighter(fighter) {
    const index = enemyFighters.indexOf(fighter);
    if (index === -1) return;

    createExplosionParticles(fighter.x + 30, fighter.y + 20, '#fb7185');
    fighter.element.remove();
    enemyFighters.splice(index, 1);
    playExplosionSound();
    recordEnemyElimination(125);
}

function fireEnemyFighterProjectile(fighter, targetX, targetY) {
    const element = document.createElement('div');
    element.className = 'enemy-fighter-projectile';
    const x = fighter.x + 30;
    const y = fighter.y + 22;
    const dx = targetX - x;
    const dy = targetY - y;
    const distance = Math.hypot(dx, dy) || 1;
    const speed = 4.2;
    const vx = dx / distance * speed;
    const vy = dy / distance * speed;
    element.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${Math.atan2(vy, vx)}rad)`;
    appendGameEntity(element);
    enemyFighterProjectiles.push({ element, x, y, vx, vy, createdAt: Date.now() });
}

function spawnMine() {
    const bounds = getGameBounds();
    const viewHeight = bounds.bottom - bounds.top;
    const fromRight = Math.random() < 0.5;
    const x = fromRight ? bounds.right + 40 : bounds.left - 40;
    const y = bounds.top + 60 + Math.random() * Math.max(1, viewHeight - 120);
    const targetX = window.orbScreenX || (bounds.left + bounds.right) / 2;
    const targetY = window.orbScreenY || (bounds.top + bounds.bottom) / 2;
    const angle = Math.atan2(targetY - y, targetX - x);
    const element = document.createElement('div');
    element.className = 'mine-item';
    const sprite = Math.random() < 0.5
        ? 'assets/images/mines/orbclusterbomb.png'
        : 'assets/images/mines/orbcluster2.png';
    element.innerHTML = `<img src="${sprite}" alt="">`;
    element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    appendGameEntity(element);
    mines.push({
        element,
        x,
        y,
        vx: Math.cos(angle) * (0.9 + Math.random() * 0.4),
        vy: Math.sin(angle) * (0.9 + Math.random() * 0.4),
        createdAt: Date.now()
    });
}

function detonateMine(mine) {
    const index = mines.indexOf(mine);
    if (index === -1) return;
    mine.element.remove();
    mines.splice(index, 1);
    createExplosionParticles(mine.x + 18, mine.y + 18, '#c084fc');

    const fragmentCount = 8;
    const angleOffset = Math.random() * Math.PI * 2;
    for (let i = 0; i < fragmentCount; i++) {
        const angle = angleOffset + (Math.PI * 2 * i) / fragmentCount;
        const element = document.createElement('img');
        element.className = 'mine-fragment';
        element.src = 'assets/images/mines/frag.png';
        element.alt = '';
        element.setAttribute('aria-hidden', 'true');
        element.style.transform = `translate3d(${mine.x}px, ${mine.y}px, 0) rotate(${angle}rad)`;
        appendGameEntity(element);
        mineFragments.push({
            element,
            x: mine.x,
            y: mine.y,
            vx: Math.cos(angle) * (2.4 + Math.random() * 1.2),
            vy: Math.sin(angle) * (2.4 + Math.random() * 1.2),
            createdAt: Date.now()
        });
    }
}

function recordEnemyElimination(xpReward) {
    window.bugEliminationCount++;
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

function damageFireDemon(demon) {
    const index = fireDemons.indexOf(demon);
    if (index === -1) return;

    createExplosionParticles(demon.x + 34, demon.y + 34, demon.glowColor);
    playExplosionSound();
    demon.element.remove();
    fireDemons.splice(index, 1);

    recordEnemyElimination(200);
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
}

function spawnConfettiNpc() {
    const bounds = getGameBounds();
    const viewHeight = bounds.bottom - bounds.top;
    const fromRight = Math.random() < 0.5;
    const direction = fromRight ? -1 : 1;
    const element = document.createElement('div');
    element.className = 'confetti-npc';
    element.setAttribute('aria-hidden', 'true');
    element.innerHTML = `
        <span class="confetti-npc-aura"></span>
        <span class="confetti-npc-sparkle"></span>
        <img src="assets/images/sprites/confettibomb.png" alt="">
    `;

    const x = fromRight ? bounds.right + 80 : bounds.left - 80;
    const y = bounds.top + Math.max(90, Math.min(viewHeight - 150, viewHeight * (0.25 + Math.random() * 0.45)));
    const glowColor = ['#c084fc', '#f472b6', '#67e8f9'][Math.floor(Math.random() * 3)];
    element.style.setProperty('--confetti-glow', glowColor);
    element.style.transform = `translate3d(${x}px, ${y}px, 0) scaleX(${direction})`;
    appendGameEntity(element);

    confettiNpc = {
        element,
        x,
        y,
        baseY: y,
        direction,
        speed: 1.1 + Math.random() * 0.45,
        wave: Math.random() * Math.PI * 2,
        fireRate: Math.max(1050, 1650 - window.currentLevel * 20),
        lastFireTime: Date.now() + 600,
        lastTrailTime: 0,
    };
}

function damageConfettiNpc() {
    if (!confettiNpc) return;
    const npc = confettiNpc;
    const centerX = npc.x + 38;
    const centerY = npc.y + 38;
    npc.element.remove();
    confettiNpc = null;
    nextConfettiNpcAt = Date.now() + 24000;
    ['#c084fc', '#f472b6', '#67e8f9', '#93c5fd'].forEach((color) => {
        createExplosionParticles(centerX, centerY, color);
    });
    playExplosionSound();
    recordEnemyElimination(250);
}

function damageConfettiNpcInRadius(x, y, radius) {
    if (confettiNpc && Math.hypot(confettiNpc.x + 38 - x, confettiNpc.y + 38 - y) <= radius) {
        damageConfettiNpc();
    }
}

function fireConfettiBomb(npc, targetX, targetY) {
    const element = document.createElement('div');
    element.className = 'confetti-bomb-projectile';
    element.setAttribute('aria-hidden', 'true');
    element.innerHTML = '<span></span><span></span><span></span><span></span>';

    const x = npc.x + 38;
    const y = npc.y + 38;
    const dx = targetX - x;
    const dy = targetY - y;
    const distance = Math.hypot(dx, dy) || 1;
    const speed = 5.2 + Math.min(window.currentLevel * 0.04, 1.4);
    const vx = dx / distance * speed;
    const vy = dy / distance * speed;
    element.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${Math.atan2(vy, vx)}rad)`;
    appendGameEntity(element);
    confettiBombProjectiles.push({ element, x, y, vx, vy, speed, createdAt: Date.now() });
}

function segmentWithinRadius(x1, y1, x2, y2, targetX, targetY, radius) {
    const segmentX = x2 - x1;
    const segmentY = y2 - y1;
    const segmentLengthSquared = segmentX * segmentX + segmentY * segmentY;
    const nearestPointRatio = segmentLengthSquared
        ? Math.max(0, Math.min(1, ((targetX - x1) * segmentX + (targetY - y1) * segmentY) / segmentLengthSquared))
        : 0;
    const nearestX = x1 + segmentX * nearestPointRatio;
    const nearestY = y1 + segmentY * nearestPointRatio;
    return Math.hypot(nearestX - targetX, nearestY - targetY) < radius;
}

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
    appendGameEntity(element);

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

    const bounds = getGameBounds();
    const startX = (bounds.left + bounds.right) / 2;
    const startY = (bounds.top + bounds.bottom) / 2;

    wrapper.style.left = '0px';
    wrapper.style.top = '0px';
    wrapper.style.transform = `translate3d(${startX - 110}px, ${startY - 110}px, 0)`;
    appendGameEntity(wrapper);

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
    const bounds = getGameBounds();

    const prompt = document.createElement('div');
    prompt.id = 'bomb-arm-prompt';
    prompt.setAttribute('role', 'status');
    prompt.setAttribute('aria-live', 'assertive');
    prompt.innerHTML = '<strong>AOE BOMB ARMED</strong><span>CLICK OR TAP THE FIELD TO DETONATE</span>';
    prompt.style.left = `${(bounds.left + bounds.right) / 2}px`;
    prompt.style.top = `${bounds.top + 12}px`;
    appendGameEntity(prompt);

    bombAimIndicator = document.createElement('div');
    bombAimIndicator.id = 'bomb-aim-indicator';
    bombAimIndicator.setAttribute('aria-hidden', 'true');
    bombAimIndicator.innerHTML = '<span></span>';
    appendGameEntity(bombAimIndicator);
    positionBombAimIndicator((bounds.left + bounds.right) / 2, (bounds.top + bounds.bottom) / 2);

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
    if (window.isClusterBombArmed && event.target.closest('#game-stage')) {
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
    appendGameEntity(explosion);

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
    damageConfettiNpcInRadius(clickX, clickY, 300);

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
            g: Math.round(92 + (24 - 92) * damageRatio),
            b: Math.round(246 + (48 - 246) * damageRatio)
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
        shieldBar.style.backgroundColor = '#ef4444';
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

    const backgrounds = [
        'spectral_garden_bg.png',
        'astral_nebula_grove_bg.png'
    ];
    const background = document.getElementById('level-background');
    if (background) {
        const filename = backgrounds[(window.currentLevel - 1) % backgrounds.length];
        background.style.backgroundImage = `url("assets/images/backgrounds/${filename}")`;
    }
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
    if (window.sleepParalysisActive) endSleepParalysisMode(false);
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
        stopGameplayLoop();
        if (spawnIntervalTimer) clearInterval(spawnIntervalTimer);
        spawnIntervalTimer = null;
        window.stopPortalAnimation?.();
        
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

function updateSleepParalysisHUD() {
    const timer = document.getElementById('sleep-paralysis-timer');
    const points = document.getElementById('sleep-paralysis-round-points');
    const charge = document.getElementById('sleep-paralysis-charge-fill');
    if (timer) {
        const remaining = sleepParalysisEndsAt
            ? Math.max(0, Math.ceil((sleepParalysisEndsAt - Date.now()) / 1000))
            : 10;
        timer.textContent = `${remaining}s`;
    }
    if (points) points.textContent = window.sleepParalysisRoundPoints.toLocaleString();
    if (charge && window.sleepParalysisCharging) {
        const progress = Math.min(1, (Date.now() - sleepParalysisChargeStartedAt) / 2200);
        charge.style.width = `${progress * 100}%`;
    }
}

function positionSleepParalysisOverlay() {
    const overlay = document.getElementById('sleep-paralysis-overlay');
    const hud = document.getElementById('sleep-paralysis-hud');
    if (!overlay && !hud) return;
    const bounds = getGameBounds();
    if (overlay) {
        overlay.style.inset = 'auto';
        overlay.style.left = `${bounds.left}px`;
        overlay.style.top = `${bounds.top}px`;
        overlay.style.width = `${bounds.right - bounds.left}px`;
        overlay.style.height = `${bounds.bottom - bounds.top}px`;
    }
    if (hud) {
        hud.style.left = `${(bounds.left + bounds.right) / 2}px`;
        hud.style.top = 'auto';
        hud.style.bottom = `${window.innerHeight - bounds.bottom + 10}px`;
    }
}

function clearSleepParalysisEnemies() {
    sleepParalysisEnemies.forEach(enemy => enemy.element.remove());
    sleepParalysisEnemies = [];
}

function spawnSleepParalysisEnemy() {
    if (sleepParalysisEnemies.length >= 90) return;

    const bounds = getGameBounds();
    const sprite = `assets/images/sprites/sprites_${[1, 2, 3, 4, 5, 6, 7, 10, 11][Math.floor(Math.random() * 9)]}.png`;
    const element = document.createElement('div');
    element.className = 'sleep-paralysis-enemy';
    const image = document.createElement('img');
    image.src = sprite;
    image.alt = '';
    image.draggable = false;
    element.appendChild(image);

    const edge = Math.floor(Math.random() * 4);
    let x;
    let y;
    if (edge === 0) {
        x = bounds.left + Math.random() * (bounds.right - bounds.left);
        y = bounds.top - 24;
    } else if (edge === 1) {
        x = bounds.right + 24;
        y = bounds.top + Math.random() * (bounds.bottom - bounds.top);
    } else if (edge === 2) {
        x = bounds.left + Math.random() * (bounds.right - bounds.left);
        y = bounds.bottom + 24;
    } else {
        x = bounds.left - 24;
        y = bounds.top + Math.random() * (bounds.bottom - bounds.top);
    }
    element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    appendGameEntity(element);

    sleepParalysisEnemies.push({
        element,
        x,
        y,
        speed: 1.4 + Math.random() * 1.2
    });
}

function updateSleepParalysisMode(now) {
    if (!sleepParalysisEndsAt) {
        updateSleepParalysisHUD();
        return;
    }
    if (now >= sleepParalysisEndsAt) {
        endSleepParalysisMode(true);
        return;
    }

    if (now >= sleepParalysisNextSpawnAt) {
        spawnSleepParalysisEnemy();
        sleepParalysisNextSpawnAt = now + 240 + Math.random() * 220;
    }

    const orbX = window.orbScreenX || window.innerWidth / 2;
    const orbY = window.orbScreenY || window.innerHeight / 2;
    for (let i = sleepParalysisEnemies.length - 1; i >= 0; i--) {
        const enemy = sleepParalysisEnemies[i];
        const dx = orbX - enemy.x;
        const dy = orbY - enemy.y;
        const distance = Math.hypot(dx, dy) || 1;
        enemy.x += (dx / distance) * enemy.speed;
        enemy.y += (dy / distance) * enemy.speed;
        enemy.element.style.transform = `translate3d(${enemy.x}px, ${enemy.y}px, 0) rotate(${Math.atan2(dy, dx)}rad)`;

        if (distance < 42) {
            enemy.element.remove();
            sleepParalysisEnemies.splice(i, 1);
            if (now - sleepParalysisLastDamageAt >= 500) {
                sleepParalysisLastDamageAt = now;
                takeDamage(12);
            }
        }
    }
    updateSleepParalysisHUD();
}

function startSleepParalysisMode() {
    if (window.sleepParalysisActive || window.currentLevel < 5) return;

    window.isClusterBombArmed = false;
    window.sleepParalysisActive = true;
    window.sleepParalysisTransitioning = true;
    window.sleepParalysisCharging = false;
    window.sleepParalysisRoundPoints = 0;
    sleepParalysisEndsAt = 0;
    sleepParalysisNextSpawnAt = 0;
    sleepParalysisLastDamageAt = 0;
    window.setSleepParalysisOrbMode?.(true);
    document.body.classList.remove('bomb-armed');
    document.getElementById('bomb-arm-prompt')?.remove();
    bombAimIndicator?.remove();
    bombAimIndicator = null;
    document.body.classList.add('sleep-paralysis-active');

    const overlay = document.createElement('div');
    overlay.id = 'sleep-paralysis-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    for (let i = 0; i < 48; i++) {
        const particle = document.createElement('span');
        particle.className = 'sleep-paralysis-rain';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.setProperty('--rain-duration', `${0.45 + Math.random() * 0.75}s`);
        particle.style.setProperty('--rain-delay', `${-Math.random() * 1.2}s`);
        particle.style.setProperty('--rain-length', `${18 + Math.random() * 42}px`);
        overlay.appendChild(particle);
    }
    const prompt = document.createElement('div');
    prompt.className = 'sleep-paralysis-prompt';
    prompt.textContent = 'PARALYSIS';
    overlay.appendChild(prompt);
    const orb = document.createElement('img');
    orb.className = 'sleep-paralysis-orb';
    orb.src = 'assets/images/sglogo.png';
    orb.alt = '';
    orb.draggable = false;
    overlay.appendChild(orb);
    appendGameEntity(overlay);

    const hud = document.createElement('div');
    hud.id = 'sleep-paralysis-hud';
    hud.innerHTML = '<span>HOLD ORB // RELEASE TO FIRE</span><span>TIME <b id="sleep-paralysis-timer">10s</b> // SCORE <b id="sleep-paralysis-round-points">0</b></span><div class="sleep-paralysis-charge"><i id="sleep-paralysis-charge-fill"></i></div><small>CHARGE THE AURA TO REACH THE SWARM</small>';
    appendGameEntity(hud);
    positionSleepParalysisOverlay();

    requestAnimationFrame(() => overlay.classList.add('is-active'));
    sleepParalysisTransitionTimer = setTimeout(() => {
        sleepParalysisTransitionTimer = null;
        if (!window.sleepParalysisActive) return;
        overlay.classList.add('is-gameplay');
        hud.classList.add('is-active');
        window.sleepParalysisTransitioning = false;
        sleepParalysisEndsAt = Date.now() + 10000;
        if (window.gamePaused) sleepParalysisPausedAt = Date.now();
        sleepParalysisNextSpawnAt = Date.now();
    }, 650);
}

function endSleepParalysisMode(survived) {
    if (!window.sleepParalysisActive && !window.sleepParalysisTransitioning) return;

    if (survived) {
        window.sleepParalysisPoints += window.sleepParalysisRoundPoints;
    }
    window.sleepParalysisRoundPoints = 0;
    window.sleepParalysisActive = false;
    window.sleepParalysisTransitioning = true;
    window.sleepParalysisCharging = false;
    sleepParalysisEndsAt = 0;
    sleepParalysisPausedAt = 0;
    if (sleepParalysisTransitionTimer) {
        clearTimeout(sleepParalysisTransitionTimer);
        sleepParalysisTransitionTimer = null;
    }
    clearSleepParalysisEnemies();
    document.body.classList.remove('sleep-aura-charging');
    const overlay = document.getElementById('sleep-paralysis-overlay');
    if (overlay) overlay.classList.remove('is-active');
    const hud = document.getElementById('sleep-paralysis-hud');
    if (hud) hud.remove();
    sleepParalysisTransitionTimer = setTimeout(() => {
        sleepParalysisTransitionTimer = null;
        overlay?.remove();
        document.body.classList.remove('sleep-paralysis-active');
        window.sleepParalysisTransitioning = false;
        window.setSleepParalysisOrbMode?.(false);
    }, 650);
}

function resetSleepParalysisMode() {
    if (sleepParalysisTransitionTimer) {
        clearTimeout(sleepParalysisTransitionTimer);
        sleepParalysisTransitionTimer = null;
    }
    clearSleepParalysisEnemies();
    document.getElementById('sleep-paralysis-overlay')?.remove();
    document.getElementById('sleep-paralysis-hud')?.remove();
    document.body.classList.remove('sleep-paralysis-active', 'sleep-aura-charging');
    window.sleepParalysisActive = false;
    window.sleepParalysisTransitioning = false;
    window.sleepParalysisCharging = false;
    window.sleepParalysisRoundPoints = 0;
    sleepParalysisEndsAt = 0;
    sleepParalysisPausedAt = 0;
    window.setSleepParalysisOrbMode?.(false);
}

function beginSleepParalysisCharge() {
    if (!window.sleepParalysisActive || window.sleepParalysisCharging) return;
    window.sleepParalysisCharging = true;
    sleepParalysisChargeStartedAt = Date.now();
    document.body.classList.add('sleep-aura-charging');
}

function releaseSleepParalysisCharge() {
    if (!window.sleepParalysisActive || !window.sleepParalysisCharging) return;
    const charge = Math.min(1, (Date.now() - sleepParalysisChargeStartedAt) / 2200);
    const radius = 90 + charge * 240;
    window.sleepParalysisCharging = false;
    document.body.classList.remove('sleep-aura-charging');

    const wave = document.createElement('div');
    wave.className = 'sleep-paralysis-aura';
    wave.style.left = `${window.orbScreenX || window.innerWidth / 2}px`;
    wave.style.top = `${window.orbScreenY || window.innerHeight / 2}px`;
    wave.style.width = `${radius * 2}px`;
    wave.style.height = `${radius * 2}px`;
    appendGameEntity(wave);
    requestAnimationFrame(() => wave.classList.add('expanded'));
    setTimeout(() => wave.remove(), 550);

    for (let i = sleepParalysisEnemies.length - 1; i >= 0; i--) {
        const enemy = sleepParalysisEnemies[i];
        if (Math.hypot(enemy.x - window.orbScreenX, enemy.y - window.orbScreenY) <= radius) {
            createExplosionParticles(enemy.x, enemy.y, '#ffffff');
            enemy.element.remove();
            sleepParalysisEnemies.splice(i, 1);
            window.sleepParalysisRoundPoints += 2500;
        }
    }
    updateSleepParalysisHUD();
}
window.beginSleepParalysisCharge = beginSleepParalysisCharge;
window.releaseSleepParalysisCharge = releaseSleepParalysisCharge;

function castAuraWave(type) {
    if (window.sleepParalysisActive) return;
    if (window.orbHP <= 0 || window.gameBeaten) return;

    const cost = type === 'damage' ? 10 : 5;
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
    appendGameEntity(wave);

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
        damageConfettiNpcInRadius(orbX, orbY, radius);
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
    if (scoreVal) scoreVal.textContent = window.bugEliminationCount * 100 + (window.currentLevel * 500) + window.sleepParalysisPoints;
    if (modal) modal.style.display = 'flex';
    loadLeaderboard();
}

function clearGameBoard() {
    resetSleepParalysisMode();
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
    enemyFighters.forEach(fighter => fighter.element.remove());
    enemyFighters = [];
    enemyFighterProjectiles.forEach(projectile => projectile.element.remove());
    enemyFighterProjectiles = [];
    mines.forEach(mine => mine.element.remove());
    mines = [];
    mineFragments.forEach(fragment => fragment.element.remove());
    mineFragments = [];
    fireDemons.forEach(demon => demon.element.remove());
    fireDemons = [];
    fireDemonProjectiles.forEach(projectile => projectile.element.remove());
    fireDemonProjectiles = [];
    confettiNpc?.element.remove();
    confettiNpc = null;
    confettiBombProjectiles.forEach(projectile => projectile.element.remove());
    confettiBombProjectiles = [];
    nextFireDemonWaveAt = Date.now() + 12000;
    nextConfettiNpcAt = Date.now() + 18000;
    nextEnemyFighterWaveAt = Date.now() + 14000;
    nextMineSpawnAt = Date.now() + 12000;
    if (gameTimeEffectTimer) clearTimeout(gameTimeEffectTimer);
    gameTimeEffectTimer = null;
    window.gameMovementScale = 1;
    document.getElementById('game-time-effect')?.classList.remove('is-visible');

    if (typeof cleanupBossFight === 'function') cleanupBossFight();
    if (typeof window.clearOrbTrailGhosts === 'function') window.clearOrbTrailGhosts();

    document.querySelectorAll([
        '.data-bug',
        '.retro-powerup',
        '.showcase-ally',
        '.fighter-drone-unit',
        '.fighter-trail-particle',
        '.enemy-fighter',
        '.enemy-fighter-projectile',
        '.mine-item',
        '.mine-fragment',
        '.fire-demon',
        '.fire-demon-trail',
        '.fireball-projectile',
        '.confetti-npc',
        '.confetti-npc-trail',
        '.confetti-bomb-projectile',
        '.fighter-orb',
        '.spiral-vortex-wrapper',
        '.boss-entity',
        '.boss-projectile',
        '.boss-charge-line',
        '.laser-beam',
        '.bug-particle',
        '.aura-wave',
        '.sleep-paralysis-enemy',
        '.sleep-paralysis-aura',
        '#sleep-paralysis-overlay',
        '#sleep-paralysis-hud',
        '.aoe-explosion',
        '.sparkle-trail',
        '#bomb-arm-prompt',
        '#bomb-aim-indicator'
    ].join(',')).forEach(element => element.remove());

    bossProjectiles = [];
}

async function submitScoreToLeaderboard() {
    const nameInput = document.getElementById('leaderboard-name-input');
    const nickname = (nameInput && nameInput.value.trim()) ? nameInput.value.trim().toUpperCase() : 'ANONYMOUS';
    const finalScore = window.bugEliminationCount * 100 + (window.currentLevel * 500) + window.sleepParalysisPoints;
    const button = document.getElementById('leaderboard-submit-button');
    const status = document.getElementById('leaderboard-status');
    if (button) button.disabled = true;
    if (status) status.textContent = 'Saving record...';

    try {
        const response = await fetch('https://flamefinder.spectralgarden.net/api/games/astrals-end/scores', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: nickname, score: finalScore })
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Could not save your score.');
        renderLeaderboardList(result.scores);
        if (status) status.textContent = result.ranked
            ? 'Record saved to the global leaderboard.'
            : 'Your score did not reach the global top five.';
    } catch (error) {
        if (status) status.textContent = error instanceof Error
            ? `${error.message} Please try again.`
            : 'Could not save your score. Please try again.';
        return;
    } finally {
        if (button) button.disabled = false;
    }

    clearGameBoard();

    // --- Reset all game states back to Level 1 and clean up bosses ---
    window.playerLives = 3;
    window.bugEliminationCount = 0;
    window.sleepParalysisPoints = 0;
    sleepPortalSpawnedLevels.clear();
    window.currentLevel = 1;                  
    window.currentLevelXP = 0;
    window.xpNeededForNextLevel = 2000;       
    window.orbHP = 100;
    window.orbEnergy = 100;
    window.gameBeaten = false;
    bossReturnReady = false;
    window.bossRetreating = false;
    window.gamePaused = !window.gameWindowActive;
    window.isClusterBombArmed = false;
    window.nextPowerUpType = 'fighter';
    window.gameMovementScale = 1;
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

    if (window.gameWindowActive) {
        reinitSpawnInterval();
        startGameplayLoop();
        window.startPortalAnimation?.();
    }
}window.submitScoreToLeaderboard = submitScoreToLeaderboard;

async function loadLeaderboard() {
    const status = document.getElementById('leaderboard-status');
    if (status) status.textContent = 'Loading global leaderboard...';
    try {
        const response = await fetch('https://flamefinder.spectralgarden.net/api/games/astrals-end/leaderboard', {
            cache: 'no-store'
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Could not load the leaderboard.');
        renderLeaderboardList(result.scores);
        if (status) status.textContent = '';
    } catch (error) {
        const listEl = document.getElementById('leaderboard-list');
        if (listEl) listEl.textContent = 'GLOBAL LEADERBOARD UNAVAILABLE';
        if (status) status.textContent = error instanceof Error
            ? error.message
            : 'Could not load the leaderboard.';
    }
}

function renderLeaderboardList(scores) {
    const listEl = document.getElementById('leaderboard-list');
    if (!listEl) return;

    if (!Array.isArray(scores) || scores.length === 0) {
        listEl.textContent = 'NO RECORDS LOGGED';
        return;
    }

    listEl.innerHTML = '';
    scores.forEach((entry, idx) => {
        const row = document.createElement('div');
        row.className = 'lb-row';
        const name = document.createElement('span');
        name.textContent = `#${idx + 1} ${entry.name}`;
        const score = document.createElement('span');
        score.textContent = `${entry.score} PTS`;
        row.append(name, score);
        listEl.appendChild(row);
    });
}

function earnXP(amount) {
    if (window.gameBeaten) return;
    if (window.bossActive || window.bossRetreating) return;

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
        window.bossRetreating = false;
        bossReturnReady = false;
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

function maybeStartEvolvedBoss() {
    if (bossReturnReady && window.currentLevel === 6 && !window.bossActive && !window.gamePaused &&
        !window.sleepParalysisActive && !window.sleepParalysisTransitioning) {
        triggerBossFight();
    }
}

function scheduleEvolvedBossReturn() {
    if (bossReturnTimer) clearTimeout(bossReturnTimer);
    bossReturnReady = false;
    const delay = 15000 + Math.random() * 15000;
    bossReturnTimer = setTimeout(() => {
        bossReturnTimer = null;
        bossReturnReady = true;
        maybeStartEvolvedBoss();
    }, delay);
}

const BOSS_SIZE = 100;

function getGameBounds() {
    const stage = document.getElementById('game-stage');
    const rect = stage?.getBoundingClientRect();
    if (rect && rect.width > 0 && rect.height > 0) {
        return { left: rect.left, top: rect.top, right: rect.right, bottom: rect.bottom };
    }
    return {
        left: 0,
        top: 0,
        right: window.innerWidth,
        bottom: window.innerHeight
    };
}

function getBossMovementBounds(gameBounds = getGameBounds()) {
    const maxX = Math.max(gameBounds.left, gameBounds.right - BOSS_SIZE);
    const maxY = Math.max(gameBounds.top, gameBounds.bottom - BOSS_SIZE);
    return {
        minX: Math.min(gameBounds.left + Math.min(220, Math.max(0, gameBounds.right - gameBounds.left - BOSS_SIZE)), maxX),
        maxX,
        minY: Math.min(gameBounds.top + 80, maxY),
        maxY
    };
}

function clampBossPosition(gameBounds) {
    const bounds = getBossMovementBounds(gameBounds);
    const x = Math.max(bounds.minX, Math.min(bounds.maxX, window.bossX));
    const y = Math.max(bounds.minY, Math.min(bounds.maxY, window.bossY));
    const hitX = x !== window.bossX;
    const hitY = y !== window.bossY;
    window.bossX = x;
    window.bossY = y;
    return { hitX, hitY };
}

function triggerBossFight() {
    if (window.bossActive) return;
    if (window.currentLevel === 6 && !bossReturnReady) return;
    if (window.bossRetreating) return;
    if (window.currentLevel === 6) bossReturnReady = false;
    
    window.bossActive = true;
    document.body.classList.add('boss-active');
    window.bossMaxHP = 600 + (window.currentLevel * 250);
    window.bossHP = window.bossMaxHP;

    const gameBounds = getGameBounds();
    window.bossX = (gameBounds.left + gameBounds.right) / 2 - BOSS_SIZE / 2;
    window.bossY = 180;
    clampBossPosition(gameBounds);
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
    const chosenSymbol = window.currentLevel === 5
        ? 'assets/images/boss/5_boss.png'
        : window.currentLevel === 6
            ? 'assets/images/boss/6_boss.png'
            : bossSymbols[Math.floor(Math.random() * bossSymbols.length)];
    
    const bossTitles = [
        "CORE_BREACH_SHADOW.EXE",
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
    appendGameEntity(bossElement);

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
    if (window.currentLevel === 5) {
        retreatBoss();
        return;
    }

    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createExplosionParticles(window.bossX + 30 + Math.random() * 40, window.bossY + 30 + Math.random() * 40, '#a855f7');
            playExplosionSound();
        }, i * 150);
    }

    cleanupBossFight();
    advanceLevel();
}

function retreatBoss() {
    window.bossActive = false;
    window.bossRetreating = true;
    document.body.classList.remove('boss-active');
    window.bossIsCharging = false;
    if (bossElement) {
        const retreatingBoss = bossElement;
        retreatingBoss.classList.add('boss-retreating');
        retreatingBoss.style.transform = `translate3d(${window.bossX}px, ${-BOSS_SIZE - 40}px, 0) scale(0.7)`;
        bossRetreatTimer = setTimeout(() => {
            if (bossElement === retreatingBoss) {
                retreatingBoss.remove();
                bossElement = null;
            }
            bossRetreatTimer = null;
            window.bossRetreating = false;
            if (window.currentLevel === 5) {
                advanceLevel();
                scheduleEvolvedBossReturn();
            }
        }, 900);
    }

    const bossHUD = document.getElementById('boss-hud');
    if (bossHUD) bossHUD.style.display = 'none';
    bossProjectiles.forEach(projectile => projectile.element.remove());
    bossProjectiles = [];
    document.querySelectorAll('.boss-charge-line').forEach(line => line.remove());

    const bannerText = document.getElementById('level-banner-text');
    const bannerSub = document.getElementById('level-banner-sub');
    const banner = document.getElementById('level-banner');
    if (banner && bannerText && bannerSub) {
        bannerText.textContent = 'BOSS 05 RETREATING';
        bannerSub.textContent = 'EVOLVED FORM DETECTED // LEVEL 06';
        banner.classList.add('show');
        setTimeout(() => banner.classList.remove('show'), 850);
    }
    playLevelUpSound();
}

function cleanupBossFight() {
    if (bossRetreatTimer) {
        clearTimeout(bossRetreatTimer);
        bossRetreatTimer = null;
    }
    if (bossReturnTimer) {
        clearTimeout(bossReturnTimer);
        bossReturnTimer = null;
    }
    window.bossActive = false;
    window.bossRetreating = false;
    document.body.classList.remove('boss-active');
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
    confettiNpc?.element.remove();
    confettiNpc = null;
    confettiBombProjectiles.forEach(projectile => projectile.element.remove());
    confettiBombProjectiles = [];

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
    gameplayFrameHandle = null;
    if (window.gamePaused) {
        return;
    }
    if (window.sleepParalysisActive || window.sleepParalysisTransitioning) {
        if (window.sleepParalysisActive) updateSleepParalysisMode(Date.now());
        startGameplayLoop();
        return;
    }
    maybeStartEvolvedBoss();

    const movementScale = Math.max(0.25, Math.min(2, window.gameMovementScale || 1));
    const gameBounds = getGameBounds();
    const viewWidth = gameBounds.right;
    const fieldWidth = gameBounds.right - gameBounds.left;
    const fieldHeight = gameBounds.bottom - gameBounds.top;

    handlePowerUpSpawning();

    for (let i = window.dataBugs.length - 1; i >= 0; i--) {
        const bugObj = window.dataBugs[i];
        
        if (isNaN(bugObj.x) || isNaN(bugObj.y)) {
            bugObj.x = (gameBounds.left + gameBounds.right) / 2;
            bugObj.y = (gameBounds.top + gameBounds.bottom) / 2;
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
            bugObj.targetX = gameBounds.left + Math.random() * fieldWidth;
            bugObj.targetY = gameBounds.top + Math.random() * fieldHeight;
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

        bugObj.x += bugObj.vx * movementScale;
        bugObj.y += bugObj.vy * movementScale;

        bugObj.angle = Math.atan2(bugObj.vy, bugObj.vx) + Math.PI / 2 + Math.sin(Date.now() * 0.015) * 0.15;
        bugObj.element.style.transform = `translate3d(${bugObj.x}px, ${bugObj.y}px, 0) rotate(${bugObj.angle}rad)`;
    }

    if (window.activeShowcaseAlly) {
        const ally = window.activeShowcaseAlly;
        ally.x += ally.vx * movementScale;
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

        if (ally.x > gameBounds.right + allyWidth) {
            ally.element.remove();
            window.activeShowcaseAlly = null;
        }
    }

    const now = Date.now();
    if (!window.gameBeaten && window.currentLevel >= 5 && now >= nextFireDemonWaveAt) {
        spawnFireDemonWave();
        nextFireDemonWaveAt = now + Math.max(12000, 24000 - window.currentLevel * 350);
    }
    if (!window.gameBeaten && window.currentLevel >= 3 && now >= nextEnemyFighterWaveAt) {
        spawnEnemyFighterWave();
        nextEnemyFighterWaveAt = now + Math.max(17000, 30000 - window.currentLevel * 400);
    }
    if (!window.gameBeaten && window.currentLevel >= 3 && now >= nextMineSpawnAt) {
        spawnMine();
        nextMineSpawnAt = now + Math.max(11000, 17000 - window.currentLevel * 250);
    }
    if (!window.gameBeaten && window.currentLevel >= 3 && !confettiNpc && now >= nextConfettiNpcAt) {
        spawnConfettiNpc();
    }

    for (let i = fireDemons.length - 1; i >= 0; i--) {
        const demon = fireDemons[i];
        demon.x += demon.speed * demon.direction * movementScale;
        const demonTargetY = demon.baseY + Math.sin(now * 0.003 + demon.wave) * 28;
        demon.y += (demonTargetY - demon.y) * movementScale;
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
            appendGameEntity(trail);
        }

        if (now - demon.lastFireTime >= demon.fireRate / movementScale) {
            demon.lastFireTime = now;
            fireDemonFireball(demon, window.orbScreenX, window.orbScreenY);
        }

        if ((demon.direction > 0 && demon.x > gameBounds.right + 80) ||
            (demon.direction < 0 && demon.x < gameBounds.left - 100)) {
            demon.element.remove();
            fireDemons.splice(i, 1);
        }
    }

    if (confettiNpc) {
        const npc = confettiNpc;
        npc.x += npc.speed * npc.direction * movementScale;
        const npcTargetY = npc.baseY + Math.sin(now * 0.0028 + npc.wave) * 24;
        npc.y += (npcTargetY - npc.y) * movementScale;
        npc.element.style.transform = `translate3d(${npc.x}px, ${npc.y}px, 0) scaleX(${npc.direction})`;

        if (now - npc.lastTrailTime > 95) {
            npc.lastTrailTime = now;
            const trail = document.createElement('span');
            trail.className = 'confetti-npc-trail';
            trail.textContent = Math.random() > 0.5 ? '✦' : '✧';
            trail.style.color = ['#c084fc', '#f472b6', '#67e8f9', '#93c5fd'][Math.floor(Math.random() * 4)];
            trail.style.left = `${npc.x + (npc.direction > 0 ? 48 : 22)}px`;
            trail.style.top = `${npc.y + 28 + Math.random() * 22}px`;
            trail.addEventListener('animationend', () => trail.remove(), { once: true });
            appendGameEntity(trail);
        }

        if (now - npc.lastFireTime >= npc.fireRate / movementScale) {
            npc.lastFireTime = now;
            fireConfettiBomb(npc, window.orbScreenX, window.orbScreenY);
        }

        if ((npc.direction > 0 && npc.x > gameBounds.right + 90) ||
            (npc.direction < 0 && npc.x < gameBounds.left - 110)) {
            npc.element.remove();
            confettiNpc = null;
            nextConfettiNpcAt = now + 24000;
        }
    }

    for (let i = fireDemonProjectiles.length - 1; i >= 0; i--) {
        const projectile = fireDemonProjectiles[i];
        const orbX = window.orbScreenX || (gameBounds.left + gameBounds.right) / 2;
        const orbY = window.orbScreenY || (gameBounds.top + gameBounds.bottom) / 2;
        const targetDx = orbX - projectile.x;
        const targetDy = orbY - projectile.y;
        const targetDistance = Math.hypot(targetDx, targetDy) || 1;
        const desiredVx = targetDx / targetDistance * projectile.speed;
        const desiredVy = targetDy / targetDistance * projectile.speed;
        const turnStrength = 0.075;
        projectile.vx += (desiredVx - projectile.vx) * turnStrength * movementScale;
        projectile.vy += (desiredVy - projectile.vy) * turnStrength * movementScale;
        const steeredSpeed = Math.hypot(projectile.vx, projectile.vy) || 1;
        projectile.vx = projectile.vx / steeredSpeed * projectile.speed;
        projectile.vy = projectile.vy / steeredSpeed * projectile.speed;
        const previousX = projectile.x;
        const previousY = projectile.y;
        projectile.x += projectile.vx * movementScale;
        projectile.y += projectile.vy * movementScale;
        projectile.element.style.transform = `translate3d(${projectile.x}px, ${projectile.y}px, 0) rotate(${Math.atan2(projectile.vy, projectile.vx)}rad)`;

        const collisionRadius = 50 * (window.orbZoomScale || 0.22) + 11;
        if (segmentWithinRadius(previousX, previousY, projectile.x, projectile.y, orbX, orbY, collisionRadius)) {
            createExplosionParticles(projectile.x, projectile.y, projectile.element.style.getPropertyValue('--fireball-glow'));
            projectile.element.remove();
            fireDemonProjectiles.splice(i, 1);
            takeDamage(8);
            continue;
        }

        if (now - projectile.createdAt > 5000 ||
            projectile.x < gameBounds.left - 40 || projectile.x > gameBounds.right + 40 ||
            projectile.y < gameBounds.top - 40 || projectile.y > gameBounds.bottom + 40) {
            projectile.element.remove();
            fireDemonProjectiles.splice(i, 1);
        }
    }

    for (let i = confettiBombProjectiles.length - 1; i >= 0; i--) {
        const projectile = confettiBombProjectiles[i];
        const orbX = window.orbScreenX || (gameBounds.left + gameBounds.right) / 2;
        const orbY = window.orbScreenY || (gameBounds.top + gameBounds.bottom) / 2;
        const targetDx = orbX - projectile.x;
        const targetDy = orbY - projectile.y;
        const targetDistance = Math.hypot(targetDx, targetDy) || 1;
        const desiredVx = targetDx / targetDistance * projectile.speed;
        const desiredVy = targetDy / targetDistance * projectile.speed;
        projectile.vx += (desiredVx - projectile.vx) * 0.12 * movementScale;
        projectile.vy += (desiredVy - projectile.vy) * 0.12 * movementScale;
        const steeredSpeed = Math.hypot(projectile.vx, projectile.vy) || 1;
        projectile.vx = projectile.vx / steeredSpeed * projectile.speed;
        projectile.vy = projectile.vy / steeredSpeed * projectile.speed;
        const previousX = projectile.x;
        const previousY = projectile.y;
        projectile.x += projectile.vx * movementScale;
        projectile.y += projectile.vy * movementScale;
        projectile.element.style.transform = `translate3d(${projectile.x}px, ${projectile.y}px, 0) rotate(${Math.atan2(projectile.vy, projectile.vx)}rad)`;

        const collisionRadius = 140 * (window.orbZoomScale || 0.22) + 12;
        if (segmentWithinRadius(previousX, previousY, projectile.x, projectile.y, orbX, orbY, collisionRadius)) {
            createExplosionParticles(projectile.x, projectile.y, '#f472b6');
            createExplosionParticles(projectile.x, projectile.y, '#67e8f9');
            projectile.element.remove();
            confettiBombProjectiles.splice(i, 1);
            takeDamage(6);
            continue;
        }

        if (now - projectile.createdAt > 5000 ||
            projectile.x < gameBounds.left - 40 || projectile.x > gameBounds.right + 40 ||
            projectile.y < gameBounds.top - 40 || projectile.y > gameBounds.bottom + 40) {
            projectile.element.remove();
            confettiBombProjectiles.splice(i, 1);
        }
    }

    for (let i = enemyFighters.length - 1; i >= 0; i--) {
        const fighter = enemyFighters[i];
        fighter.x += fighter.vx * movementScale;
        fighter.y += (fighter.baseY + Math.sin(now * 0.002 + fighter.x * 0.01) * 18 - fighter.y) * movementScale;
        fighter.element.style.transform = `translate3d(${fighter.x}px, ${fighter.y}px, 0)`;

        if (now - fighter.lastFireTime >= fighter.fireRate / movementScale) {
            fighter.lastFireTime = now;
            fireEnemyFighterProjectile(
                fighter,
                window.orbScreenX || (gameBounds.left + gameBounds.right) / 2,
                window.orbScreenY || (gameBounds.top + gameBounds.bottom) / 2
            );
        }

        const orbX = window.orbScreenX || (gameBounds.left + gameBounds.right) / 2;
        const orbY = window.orbScreenY || (gameBounds.top + gameBounds.bottom) / 2;
        const collisionRadius = 50 * (window.orbZoomScale || 0.22) + 24;
        if (Math.hypot(fighter.x + 30 - orbX, fighter.y + 20 - orbY) < collisionRadius) {
            damageEnemyFighter(fighter);
            takeDamage(8);
            continue;
        }

        if (fighter.x < gameBounds.left - 90) {
            fighter.element.remove();
            enemyFighters.splice(i, 1);
        }
    }

    for (let i = enemyFighterProjectiles.length - 1; i >= 0; i--) {
        const projectile = enemyFighterProjectiles[i];
        const previousX = projectile.x;
        const previousY = projectile.y;
        projectile.x += projectile.vx * movementScale;
        projectile.y += projectile.vy * movementScale;
        projectile.element.style.transform = `translate3d(${projectile.x}px, ${projectile.y}px, 0) rotate(${Math.atan2(projectile.vy, projectile.vx)}rad)`;

        const orbX = window.orbScreenX || (gameBounds.left + gameBounds.right) / 2;
        const orbY = window.orbScreenY || (gameBounds.top + gameBounds.bottom) / 2;
        if (segmentWithinRadius(previousX, previousY, projectile.x, projectile.y, orbX, orbY, 50 * (window.orbZoomScale || 0.22) + 7)) {
            createExplosionParticles(projectile.x, projectile.y, '#fb7185');
            projectile.element.remove();
            enemyFighterProjectiles.splice(i, 1);
            takeDamage(6);
            continue;
        }

        if (now - projectile.createdAt > 6000 ||
            projectile.x < gameBounds.left - 60 || projectile.x > gameBounds.right + 60 ||
            projectile.y < gameBounds.top - 60 || projectile.y > gameBounds.bottom + 60) {
            projectile.element.remove();
            enemyFighterProjectiles.splice(i, 1);
        }
    }

    for (let i = mines.length - 1; i >= 0; i--) {
        const mine = mines[i];
        mine.x += mine.vx * movementScale;
        mine.y += mine.vy * movementScale;
        mine.element.style.transform = `translate3d(${mine.x}px, ${mine.y}px, 0) rotate(${now * 0.001}rad)`;

        const orbX = window.orbScreenX || (gameBounds.left + gameBounds.right) / 2;
        const orbY = window.orbScreenY || (gameBounds.top + gameBounds.bottom) / 2;
        if (Math.hypot(mine.x + 18 - orbX, mine.y + 18 - orbY) < 50 * (window.orbZoomScale || 0.22) + 32) {
            detonateMine(mine);
            continue;
        }

        if (now - mine.createdAt > 16000 ||
            mine.x < gameBounds.left - 80 || mine.x > gameBounds.right + 80 ||
            mine.y < gameBounds.top - 80 || mine.y > gameBounds.bottom + 80) {
            mine.element.remove();
            mines.splice(i, 1);
        }
    }

    for (let i = mineFragments.length - 1; i >= 0; i--) {
        const fragment = mineFragments[i];
        const previousX = fragment.x;
        const previousY = fragment.y;
        fragment.x += fragment.vx * movementScale;
        fragment.y += fragment.vy * movementScale;
        fragment.element.style.transform = `translate3d(${fragment.x}px, ${fragment.y}px, 0) rotate(${Math.atan2(fragment.vy, fragment.vx)}rad)`;

        const orbX = window.orbScreenX || (gameBounds.left + gameBounds.right) / 2;
        const orbY = window.orbScreenY || (gameBounds.top + gameBounds.bottom) / 2;
        if (segmentWithinRadius(previousX, previousY, fragment.x, fragment.y, orbX, orbY, 50 * (window.orbZoomScale || 0.22) + 5)) {
            createExplosionParticles(fragment.x, fragment.y, '#f97316');
            fragment.element.remove();
            mineFragments.splice(i, 1);
            takeDamage(6);
            continue;
        }

        if (now - fragment.createdAt > 4500 ||
            fragment.x < gameBounds.left - 40 || fragment.x > gameBounds.right + 40 ||
            fragment.y < gameBounds.top - 40 || fragment.y > gameBounds.bottom + 40) {
            fragment.element.remove();
            mineFragments.splice(i, 1);
        }
    }

    for (let i = window.activeFighters.length - 1; i >= 0; i--) {
        const drone = window.activeFighters[i];
        drone.x += drone.vx * movementScale;
        drone.y += drone.vy * movementScale;

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
            appendGameEntity(trail);
        }

        let target = null;
        let minDist = 280;

        for (const fighter of enemyFighters) {
            const distance = Math.hypot(fighter.x + 30 - drone.x, fighter.y + 20 - drone.y);
            if (distance < minDist) {
                minDist = distance;
                target = { id: 'enemy-fighter', fighter, x: fighter.x + 30, y: fighter.y + 20 };
            }
        }

        if (window.bossActive && bossElement) {
            const dB = Math.hypot(window.bossX + 50 - drone.x, window.bossY + 50 - drone.y);
            if (dB < minDist) {
                minDist = dB;
                target = { id: 'boss', x: window.bossX + 50, y: window.bossY + 50 };
            }
        }

        if (!target && confettiNpc) {
            const d = Math.hypot(confettiNpc.x + 38 - drone.x, confettiNpc.y + 38 - drone.y);
            if (d < minDist) {
                target = {
                    id: 'confetti-npc',
                    x: confettiNpc.x + 38,
                    y: confettiNpc.y + 38,
                };
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

        if (target && (now - drone.lastFireTime > drone.fireRate / movementScale)) {
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

        tornado.x += tornado.vx * movementScale;
        tornado.y += tornado.vy * movementScale;

        if (tornado.x < gameBounds.left + 110) { tornado.x = gameBounds.left + 110; tornado.vx *= -1; }
        if (tornado.x > gameBounds.right - 110) { tornado.x = gameBounds.right - 110; tornado.vx *= -1; }
        if (tornado.y < gameBounds.top + 110) { tornado.y = gameBounds.top + 110; tornado.vy *= -1; }
        if (tornado.y > gameBounds.bottom - 110) { tornado.y = gameBounds.bottom - 110; tornado.vy *= -1; }

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
        damageConfettiNpcInRadius(tornado.x, tornado.y, 110);

        if (window.bossActive && bossElement) {
            const dBoss = Math.hypot(window.bossX + 50 - tornado.x, window.bossY + 50 - tornado.y);
            if (dBoss < 110) {
                damageBoss(5); 
            }
        }

        tornado.lifeFrames -= movementScale;
        if (tornado.lifeFrames <= 0) {
            tornado.element.remove();
            window.activeTornado = null;
        }
    }

    if (window.bossActive && bossElement) {
        if (!window.bossIsCharging) {
            window.bossX += window.bossVX * movementScale;
            window.bossY += window.bossVY * movementScale;

            const hitBounds = clampBossPosition(gameBounds);
            if (hitBounds.hitX) window.bossVX *= -1;
            if (hitBounds.hitY) window.bossVY *= -1;

            bossElement.style.transform = `translate3d(${window.bossX}px, ${window.bossY}px, 0)`;
        }

        const orbX = window.orbScreenX || (gameBounds.left + gameBounds.right) / 2;
        const orbY = window.orbScreenY || (gameBounds.top + gameBounds.bottom) / 2;

        if (now - lastBossChargeTime > 6500 / movementScale && !window.bossIsCharging) {
            window.bossIsCharging = true;
            bossElement.style.borderColor = '#ffffff'; 
            
            const warningLine = document.createElement('div');
            warningLine.className = 'boss-charge-line';
            appendGameEntity(warningLine);

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
                const slideBounds = getBossMovementBounds();
                const targetSlideX = Math.max(slideBounds.minX, Math.min(slideBounds.maxX, window.bossX + Math.cos(slideAngle) * len));
                const targetSlideY = Math.max(slideBounds.minY, Math.min(slideBounds.maxY, window.bossY + Math.sin(slideAngle) * len));

                let slideStepCount = 0;
                const slideTicks = 20;

                const slideInterval = setInterval(() => {
                    if (!window.bossActive) {
                        clearInterval(slideInterval);
                        return;
                    }
                    if (window.gamePaused) return;
                    window.bossX += (targetSlideX - window.bossX) * 0.25 * (window.gameMovementScale || 1);
                    window.bossY += (targetSlideY - window.bossY) * 0.25 * (window.gameMovementScale || 1);
                    const hitBounds = clampBossPosition();
                    if (hitBounds.hitX) window.bossVX *= -1;
                    if (hitBounds.hitY) window.bossVY *= -1;
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

        if (now - lastBossStarRainTime > 8500 / movementScale) {
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

                    const spawnX = gameBounds.left + Math.random() * Math.max(0, gameBounds.right - gameBounds.left - 12);
                    const spawnY = gameBounds.top;
                    
                    proj.style.transform = `translate3d(${spawnX}px, ${spawnY}px, 0)`;
                    appendGameEntity(proj);

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

        if (now - lastBossMissileTime > 4500 / movementScale) {
            lastBossMissileTime = now;
            const proj = document.createElement('div');
            proj.className = 'boss-projectile';
            proj.textContent = '☄️';
            proj.style.fontSize = '18px';
            
            const bCenterX = window.bossX + 50;
            const bCenterY = window.bossY + 50;
            proj.style.transform = `translate3d(${bCenterX}px, ${bCenterY}px, 0)`;
            appendGameEntity(proj);

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
        const orbX = window.orbScreenX || (gameBounds.left + gameBounds.right) / 2;
        const orbY = window.orbScreenY || (gameBounds.top + gameBounds.bottom) / 2;

        if (proj.type === 'star') {
            proj.y += proj.vy * movementScale;
            proj.element.style.transform = `translate3d(${proj.x}px, ${proj.y}px, 0)`;

            if (proj.y > gameBounds.bottom - 12) {
                proj.element.remove();
                bossProjectiles.splice(p, 1);
                continue;
            }
        } else if (proj.type === 'missile') {
            const dx = orbX - proj.x;
            const dy = orbY - proj.y;
            const len = Math.hypot(dx, dy);

            proj.vx += (dx / (len || 1)) * 0.08 * movementScale;
            proj.vy += (dy / (len || 1)) * 0.08 * movementScale;
            proj.vx *= 0.98;
            proj.vy *= 0.98;

            proj.x += proj.vx * movementScale;
            proj.y += proj.vy * movementScale;

            proj.element.style.transform = `translate3d(${proj.x}px, ${proj.y}px, 0)`;
        }

        if (
            proj.x < gameBounds.left ||
            proj.x > gameBounds.right - 12 ||
            proj.y < gameBounds.top ||
            proj.y > gameBounds.bottom - 12
        ) {
            proj.element.remove();
            bossProjectiles.splice(p, 1);
            continue;
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

    startGameplayLoop();
}

function fireLaser(fromX, fromY, bugTarget, color = '#00ff66') {
    const laser = document.createElement('div');
    laser.className = 'laser-beam';
    laser.style.backgroundColor = color;
    laser.style.boxShadow = `0 0 8px ${color}`;
    appendGameEntity(laser);

    const dx = bugTarget.x - fromX;
    const dy = bugTarget.y - fromY;
    const length = Math.hypot(dx, dy);
    const rotation = Math.atan2(dy, dx);

    laser.style.width = length + 'px';
    laser.style.transform = `translate3d(${fromX + 7}px, ${fromY + 7}px, 0) rotate(${rotation}rad)`;

    if (bugTarget.id === 'boss') {
        damageBoss(80); 
    } else if (bugTarget.id === 'enemy-fighter') {
        bugTarget.fighter.hp--;
        bugTarget.fighter.element.classList.add('enemy-fighter-hit');
        setTimeout(() => bugTarget.fighter.element.classList.remove('enemy-fighter-hit'), 120);
        if (bugTarget.fighter.hp <= 0) damageEnemyFighter(bugTarget.fighter);
    } else if (bugTarget.id === 'fire-demon') {
        damageFireDemon(bugTarget.demon);
    } else if (bugTarget.id === 'confetti-npc') {
        damageConfettiNpc();
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
    const bounds = getGameBounds();
    if (x < bounds.left || x + 4 > bounds.right || y < bounds.top || y + 4 > bounds.bottom) return;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'bug-particle';
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 4px ${color}`;
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        appendGameEntity(particle);

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 2.5 + 1.2;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        const endX = Math.max(bounds.left - x, Math.min(bounds.right - x - 4, vx * 20));
        const endY = Math.max(bounds.top - y, Math.min(bounds.bottom - y - 4, vy * 20));

        const animation = particle.animate([
            {transform: 'translate3d(0, 0, 0)', opacity: 1},
            {transform: `translate3d(${endX}px, ${endY}px, 0)`, opacity: 0}
        ], {duration: 400, easing: 'linear', fill: 'forwards'});
        const cleanupTimer = setTimeout(() => particle.remove(), 500);
        const removeParticle = () => {
            clearTimeout(cleanupTimer);
            particle.remove();
        };
        animation.onfinish = removeParticle;
        if (animation.playState === 'finished') removeParticle();
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

function loadModule(category, key, options = {}) {
    if (!options.silent) playUISound();
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
        
        const actionBar = win.querySelector('.window-body .showcase-action-bar');
        actionBar.innerHTML = '';
        data.links.forEach(link => {
            const btn = document.createElement('a');
            btn.href = link.href;
            btn.className = 'retro-btn';
            btn.textContent = 'DOWNLOAD VST3 WIN';
            btn.setAttribute('aria-label', link.text);
            actionBar.appendChild(btn);
        });
        openWindow('vst-window', options);
    } else if (category === 'games') {
        const win = document.getElementById('games-window');
        win.querySelector('.window-header .window-title').textContent = data.title;
        openWindow('games-window', options);
    } else if (category === 'apps') {
        const win = document.getElementById('apps-window');
        win.querySelector('.window-header .window-title').textContent = data.title;
        win.querySelector('.window-body h3').textContent = data.header;
        win.querySelector('.window-body p').textContent = data.desc;

        // Use innerHTML instead of textContent so <a> links become clickable
        const appBox = win.querySelector('.app-data-box');
        appBox.innerHTML = data.content;
        const launchBar = win.querySelector('.app-launch-bar');
        launchBar.innerHTML = '';
        if (data.pageUrl) {
            const pageButton = document.createElement('button');
            pageButton.className = 'retro-btn';
            pageButton.type = 'button';
            pageButton.textContent = data.openLabel || 'OPEN PAGE';
            pageButton.addEventListener('click', () => openAppPage(key));
            launchBar.appendChild(pageButton);
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

        openWindow('apps-window', options);
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

        openWindow('music-window', options);
    }

    if ((category === 'apps' || category === 'vst') && !options.rotate && !desktopShowcaseTimers.has(category)) {
        startDesktopShowcaseRotation(category);
    }
    closeStartMenu();
}

function startDesktopShowcaseRotation(category) {
    const windowId = category === 'apps' ? 'apps-window' : 'vst-window';
    const interval = category === 'apps' ? 6500 : 7500;
    if (desktopShowcaseTimers.has(category)) clearInterval(desktopShowcaseTimers.get(category));
    const timer = setInterval(() => {
        if (window.matchMedia('(max-width: 768px)').matches) return;
        const showcase = document.getElementById(windowId);
        if (!showcase || showcase.style.display === 'none') return;
        const keys = Object.keys(moduleDatabase[category]);
        if (keys.length < 2) return;
        const currentIndex = keys.indexOf(currentActiveKeys[category]);
        const nextKey = keys[(currentIndex + 1 + keys.length) % keys.length];
        loadModule(category, nextKey, { keepPosition: true, rotate: true, silent: true });
    }, interval);
    desktopShowcaseTimers.set(category, timer);
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
    if (e.target instanceof Element && e.target.closest('button, a, input')) return;
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

function openWindow(id, options = {}) {
    if (!options.silent) playUISound();
    const win = document.getElementById(id);
    if (win) {
        if (id === 'games-window') {
            win.classList.remove('is-maximized');
            window.gameWindowActive = true;
            window.gamePaused = false;
            const pauseModal = document.getElementById('pause-modal');
            if (pauseModal) pauseModal.style.display = 'none';
            const pauseButton = win.querySelector('.game-window-controls [aria-label="Pause or resume game"]');
            if (pauseButton) pauseButton.textContent = 'Ⅱ';
        }
        win.style.display = 'flex';
        win.style.zIndex = id === 'games-window' ? 10001 : (win.classList.contains('showcase-window') ? 100020 : 101);
        if (!options.keepPosition && !showcaseWindowIds.has(id)) centerWindowOnScreen(win);
        if (id === 'games-window') {
            updateGameEntityClip();
            window.resizeGamePortal?.();
            window.startPortalAnimation?.();
            startGameplayLoop();
            reinitSpawnInterval();
        }
    }
}
window.openWindow = openWindow;

function closeWindow(id) {
    playUISound();
    const win = document.getElementById(id);
    if (win) {
        win.style.display = 'none';
    }
    if (id === 'games-window') {
        window.gameWindowActive = false;
        window.gamePaused = true;
        window.isClusterBombArmed = false;
        document.body.classList.remove('bomb-armed');
        document.getElementById('bomb-arm-prompt')?.remove();
        document.getElementById('bomb-aim-indicator')?.remove();
        stopGameplayLoop();
        if (spawnIntervalTimer) clearInterval(spawnIntervalTimer);
        spawnIntervalTimer = null;
        if (showcaseAllyTimer) clearTimeout(showcaseAllyTimer);
        showcaseAllyTimer = null;
        window.stopPortalAnimation?.();
        updateGameEntityClip();
    }
    if (id === 'apps-window' || id === 'vst-window') {
        const category = id === 'apps-window' ? 'apps' : 'vst';
        clearInterval(desktopShowcaseTimers.get(category));
        desktopShowcaseTimers.delete(category);
    }
}

function toggleGameWindowMaximize() {
    const win = document.getElementById('games-window');
    if (!win) return;
    if (win.classList.contains('is-maximized')) {
        win.classList.remove('is-maximized');
        win.style.left = win.dataset.restoreLeft || '';
        win.style.top = win.dataset.restoreTop || '';
        win.style.right = win.dataset.restoreRight || '';
        win.style.bottom = win.dataset.restoreBottom || '';
        win.style.width = win.dataset.restoreWidth || '';
        win.style.height = win.dataset.restoreHeight || '';
    } else {
        const rect = win.getBoundingClientRect();
        win.dataset.restoreLeft = win.style.left;
        win.dataset.restoreTop = win.style.top;
        win.dataset.restoreRight = win.style.right;
        win.dataset.restoreBottom = win.style.bottom;
        win.dataset.restoreWidth = `${rect.width}px`;
        win.dataset.restoreHeight = `${rect.height}px`;
        win.classList.add('is-maximized');
        const edge = window.innerWidth <= 768 ? 0 : 10;
        win.style.left = `${edge}px`;
        win.style.top = `${edge}px`;
        win.style.right = `${edge}px`;
        win.style.bottom = `${window.innerWidth <= 768 ? 40 : 50}px`;
        win.style.width = 'auto';
        win.style.height = 'auto';
    }
    updateGameEntityClip();
    window.resizeGamePortal?.();
}
window.toggleGameWindowMaximize = toggleGameWindowMaximize;

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
let gameAudioVolume = storedAudioVolume === null ? 0.05 : Number(storedAudioVolume);
if (!Number.isFinite(gameAudioVolume) || gameAudioVolume < 0 || gameAudioVolume > 1) gameAudioVolume = 0.05;
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