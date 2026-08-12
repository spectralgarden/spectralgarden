// Local Database holding dynamic specs for apps, vsts, games, and music
const moduleDatabase = {
    vst: {
        vst_a: {
            title: "C:\\PROG\\VST_UNITS\\ARCANE_GAIN.EXE",
            header: "ArcaneGain v1.0",
            desc: "Arcane Gain is a lightweight, zero-latency, CPU-efficient gain/trim utility plugin designed to be the simplest, cleanest, and most reliable utility tool in the Spectral Garden ecosystem. It provides precise gain staging, transparent soft-clipping saturation, combined peak/RMS metering, and sample-accurate auto-gain compensation. Extremely low memory and CPU footprint. Built-in live CPU usage monitor. Scalable UI options (100%, 125%, 150%, 200%).",
            image: "assets/images/vst_arcanegain.gif",
            links: [
                { text: "DOWNLOAD DLL (64-BIT)", href: "https://github.com/spectralgarden/ArcaneGain/releases/download/arcanegain/ArcaneGain.zip" },
            ]
        },
        vst_b: {
            title: "C:\\PROG\\VST_UNITS\\CRESCENT_Q.EXE",
            header: "CrescentQ v1.0.0",
            desc: "CrescentQ is a high‑precision 24‑band parametric equalizer designed for mixing, mastering, and surgical spectral shaping. CrescentQ is a high‑precision 24‑band parametric equalizer designed for mixing, mastering, and surgical spectral shaping. It features switchable minimum‑phase and linear‑phase architectures, per‑band Mid/Side routing, multi‑stage oversampling, and real‑time FFT visualization. The engine is optimized for low‑latency operation while offering advanced phase‑coherent processing for critical audio work. ",
            image: "assets/images/vst_crescent_q.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/CrescentQ/releases/download/CRESCENTQ/CrescentQ.zip" },
               
            ]
        },
        vst_c: {
            title: "C:\\PROG\\VST_UNITS\\DOWNER.EXE",
            header: "downer v1.0.0",
            desc: "Real‑time decay. Rain‑soaked memory. Tape‑stop gravity. A spectral audio decay processor for ambient sound design.downer is a real-time creative audio effect designed to recreate the characteristics of chopped & screwed taped eceleration, rhythmic stuttering, and atmospheric, low-fidelity environments. Inspired by legacy console configuration menus and vintage tape degradation, the system combines: A latency-free dual-tap pitch processor An independent vocal formant filter bank A host-synchronized stutter (chop) engine A dynamic, physical-modeling rain generator that automatically gates according to the input signal's envelope to prevent background static when audio is paused.",
            image: "assets/images/vst_downer.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/downer/releases/download/downer/downer.zip" },
               
            ]
        },
        vst_d: {
            title: "C:\\PROG\\VST_UNITS\\ECHOFIELD_RELIQUARY.EXE",
            header: "Echofield Reliquary V1.0.0",
            desc: "Ambient cathedral reverb & delay‑matrix synthesizer for evolving, spectral spaces. Echofield Reliquary is an ambient reverberation and delay-matrix synthesizer designed to evoke the warm, dusty, and slightly eerie atmosphere of a forgotten cathedral. Combining visual aesthetics reminiscent of stained-glass altars with a modern DSP console, the plugin serves as a creative sound-design tool for generating organic, evolving spaces and modulated echoes.",
            image: "assets/images/vst_echofield.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/Echofield-Reliquary/releases/download/Echofield_Reliquary/echofield.reliquary.zip" }
            ]
        },
        vst_e: {
            title: "C:\\PROG\\VST_UNITS\\ETHERFORGE_HARMONICS.EXE",
            header: "Etherforge Harmonic V1.0.0",
            desc: "Sacred Cathedral Space & Acoustic Portal Simulator.ETHERFORGE HARMONICS is a hybrid spectral‑processing audio plugin combining real‑time  partial analysis, non‑linear harmonic excitation, and additive resynthesis inside a dark, industrial UI framework. It analyzes incoming audio at the harmonic level and provides precise control over tonal balance, spectral coloration, and harmonic structure.",
            image: "assets/images/vst_etherforge.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/ETHERFORGE-HARMONICS/releases/download/ETHERFORGE_HARMONICS/ETHERFORGE.HARMONICS.zip" }
            ]
        },
        vst_f: {
            title: "C:\\PROG\\VST_UNITS\\FORSAKEN.EXE",
            header: "forsaken v1.0.0",
            desc: "Spectral formant filter Forsaken is an astral vocal processor, but can be used for almost anything, designed for darkwave, witch house, ambient, cinematic, and experimental vocal manipulation. Built with JUCE 8.0.14, it combines analogue‑style warmth, reverse grain engines, cathedral‑scale decay, and void‑filtered ambience to transform clean vocals into unstable, supernatural soundscapes.",
            image: "assets/images/vst_forsaken.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/forsaken/releases/download/forsaken/forsaken.zip" }
            ]
        },
        vst_g: {
            title: "C:\\PROG\\VST_UNITS\\HEXCHANT_HARMONIZER.EXE",
            header: "Hexchant Harmonizer V1.0.0",
            desc: "An occult vocal harmonizer, spectral vocoder & text-to-speech chant engine for VST3      Hexchant Harmonizer turns any voice — live or typed — into layered ritual harmony. It combines an 8-voice harmonizer, a 32-band spectral vocoder, a built-in text-to-speech spell casting engine, a Ghost spectral delay, and a Formant Sculptor with tube saturation and cathedral reverb, all wrapped in an animated coven-themed interface.",
            image: "assets/images/vst_hexchant_harmonizer.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/Hexchant-Harmonizer/releases/download/HexchantHarmonizer/hexchant.harmonizer.zip" }
            ]
        },
        vst_h: {
            title: "C:\\PROG\\VST_UNITS\\ISOLATED.EXE",
            header: "Isolated v1.0.0",
            desc: "An ambient noise-removal envelope shaping absolute silence into pulsing sub-bass frequencies.*Advanced Multi-Band Drum Isolation & Frequency Sweep Processor***Isolated** is a specialized real-time audio plugin designed for surgical drum separation, transient management, and dynamic frequency sweeping. Powered by multi-stage transient splitters (TSS) and specialized channel frequency cross-overs, it allows producers to independently isolate, mix, and shape individual drum elements (Kick, Snare, Hats, Percussion, and Other) from a full stereo mix. ",
            image: "assets/images/vst_isolated.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/isolated/releases/download/isolated/isolated.zip" }
            ]
        },
        vst_i: {
            title: "C:\\PROG\\VST_UNITS\\SERPENTINE.EXE",
            header: "Serpentine v1.0.0",
            desc: "Serpentine is a three‑band dynamics processor and waveshaping saturator It providesanalog‑style saturation, multi‑stage dynamics control, and flexible crossover management using Linkwitz‑Riley filters and phase‑aligned reconstruction",
            image: "assets/images/vst_serpentine.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/Serpentine/releases/download/SERPENTINE/Serpentine.zip" }
            ]
        },
        vst_j: {
            title: "C:\\PROG\\VST_UNITS\\SORROW_STORM.EXE",
            header: "Sorrow Storm",
            desc: "Generates static sheets of dynamic high-frequency hiss that simulate cold, falling rain. An ambient shoegaze reverb & fuzz plugin for VST3. Sorrow Storm is a mood-drenched effects processor built for dream-pop, shoegaze, and ambient production. It combines a saturating fuzz stage with a modulated four-tap feedback reverb, built-in shimmer pitch-shifting, and 30 hand-tuned presets — wrapped in a custom-animated, glitch-titled interface",
            image: "assets/images/vst_sorrow_storm.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/sorrowstorm/releases/download/sorrowstorm/sorrow.storm.zip" }
            ]
        },
        vst_k: {
            title: "C:\\PROG\\VST_UNITS\\WRAITHGATE_VOCODER.EXE",
            header: "Wraithgate Vocoder v1.0.0",
            desc: "Wraithgate Vocoder is a high-performance, real-time spectral morphing processor designed for Windows VST3 hosts. It bridges the frequency characteristics of an incoming Modulator (traditionally a vocal or speech source) with a Carrier (internal synthesized waves or an external sidechained instrument) through a highly optimized 32-band filterbank, enhanced by a unique Spectral Ghost Engine..",
            image: "assets/images/vst_wraithgate_vocoder.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/Wraithgate-Vocoder/releases/download/WraithgateVocoder/Wraithgate.Vocoder.zip" }
            ]
        },
        vst_l: {
            title: "C:\\PROG\\VST_UNITS\\TRICKSTER.EXE",
            header: "Trickster v1.0",
            desc: "Modulated audio delay loop engine featuring randomized memory-read jitter anomalies. Coming soon",
            image: "assets/images/vst_trickster.gif",
            links: [
               /* { text: "DOWNLOAD VST3", href: "#" }*/
            ]
        },
        vst_m: {
            title: "C:\\PROG\\VST_UNITS\\VOIDBREAK.EXE",
            header: "Voidbreak v2.0",
            desc: "A brutal peak-clipper modeling severe hardware output stages with extreme tape saturation curves. Voidbreak is an experimental astral character‑effect audio processor designedfor darkwave, witch house, ambient, cinematic, and industrial sound design.It models heavy output degradation, magnetic tape saturation curves, warp‑driftinstability, reverse‑memory distortion, smear‑delay coloration, and spectralpresence shaping.",
            image: "assets/images/vst_voidbreak.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/voidbreak/releases/download/voidbreak/voidbreak.zip" }
            ]
        },
        vst_n: {
            title: "C:\\PROG\\VST_UNITS\\SPECTRE_WRAITH.EXE",
            header: "Spectre Wraith",
            desc: "Spectral Bin-Freezing • Phase Smearing • Density Gating • FFT Manipulation • Spectral Morphing • Ghost Engine • Multi-Band Processing • Real-Time Spectral Analysis",
            image: "assets/images/vst_spectral_wraith.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/SPECTRAL-WRAITH/releases/download/spectralwraith/spectral.wraith.zip" }
            ]
        
    },
     vst_p: {
            title: "C:\\PROG\\VST_UNITS\\AETHER_BLOOM.EXE",
            header: "AetherBloom",
            desc: "Spectral Bin-Freezing • Phase Smearing • Density Gating • FFT Manipulation • Spectral Morphing • Ghost Engine • Multi-Band Processing • Real-Time Spectral Analysis",
            image: "assets/images/vst_aether_bloom.gif",
            links: [
                { text: "DOWNLOAD VST3", href: "https://github.com/spectralgarden/AetherBloom/releases/download/AetherBloom/Aether.Bloom.zip" }
            ]
        
    },
    vst_q: {
            title: "C:\\PROG\\VST_UNITS\\HOLLOW_LIGHT.EXE",
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
        /*game_b: {
            title: "C:\\PROG\\GAMES\\RITUAL_DOOM.EXE",
            header: "RITUAL DOOM 3D",
            desc: "A software-rendered raycaster testing low-res environments against cognitive visual stress matrices.",
            image: "assets/images/game_ritual_doom.gif",
            content: "STATUS: DEGRADED\nASSETS LOADED: 12/64\nERROR: MATRIX CORRUPTION\n\nRun debug diagnostic sequence."
        },*/
        /*game_c: {
            title: "C:\\PROG\\GAMES\\NETRUNNER.EXE",
            header: "NETRUNNER 2099",
            desc: "Cyberdeck terminal navigator mapping corporate firewalls and high-value subnet servers.",
            image: "assets/images/game_netrunner.gif",
            content: "STATUS: INTRUSION DETECTED\nNODE TARGET: SECURE_VAULT_9\nFIREWALL DECAY: 45%"
        },*/
        /*game_d: {
            title: "C:\\PROG\\GAMES\\CRYPT_DESCENT.EXE",
            header: "CRYPT DESCENT",
            desc: "An algorithmic, text-based labyrinth crawl into simulated forgotten server vaults.",
            image: "assets/images/game_crypt.gif",
            content: "STATUS: FLOOR 4\nLIGHT RESOURCE: 12%\nWARNING: ENTITY DETECTED ON ADJACENT NODE"
        },*/
        /*game_e: {
            title: "C:\\PROG\\GAMES\\STATIC_WHISPER.EXE",
            header: "STATIC WHISPERER",
            desc: "An audio-frequency deciphering puzzle decrypting transmissions inside raw white noise.",
            image: "assets/images/game_static_whisper.gif",
            content: "STATUS: TUNING RADAR...\nCARRIER FREQ: 144.82 MHz\nSIGNAL STRENGTH: WEAK"
        },*/
        /*game_f: {
            title: "C:\\PROG\\GAMES\\TERM_HACK.EXE",
            header: "TERMINAL HACK",
            desc: "Time-restricted mainframe penetration testing program simulating security bypasses.",
            image: "assets/images/game_term_hack.gif",
            content: "STATUS: BYPASS ATTEMPT 1/3\nTIME REMAINING: 54 SEC\nDECRYPT KEY MATCH IN PROGRESS..."
        },*/
        /*game_g: {
            title: "C:\\PROG\\GAMES\\VOID_SWEEPER.EXE",
            header: "VOID SWEEPER",
            desc: "Logical deduction puzzle clearing grid vectors without puncturing localized coordinate leaks.",
            image: "assets/images/game_void_sweeper.gif",
            content: "STATUS: GRID SIZE 16x16\nLEAKS PLANTED: 40\nSECTORS CLEARED: 12"
        },*/
        /*game_h: {
            title: "C:\\PROG\\GAMES\\ROGUE_SIGNAL.EXE",
            header: "ROGUE SIGNAL",
            desc: "Track software telemetry spikes across dynamic coordinate tracking system grids.",
            image: "assets/images/game_rogue_signal.gif",
            content: "STATUS: TRACING...\nRELAY ID: #4489-B\nDISTANCE: 14.8 PARSECS"
        },*/
        /*game_i: {
            title: "C:\\PROG\\GAMES\\PSYCHIC_LINK.EXE",
            header: "PSYCHIC LINK",
            desc: "Memory evaluation protocol testing mental recall patterns against variable binary arrays.",
            image: "assets/images/game_psychic_link.gif",
            content: "STATUS: MATCH TEST RUNNING\nROUND: 3/10\nCONGRUENCE RATIO: 82.4%"
        },*/
        /*game_j: {
            title: "C:\\PROG\\GAMES\\MATRIX_RUNNER.EXE",
            header: "MATRIX RUNNER",
            desc: "Vector-style wireframe movement simulator testing hardware geometric processing rendering limits.",
            image: "assets/images/game_matrix_runner.gif",
            content: "STATUS: SIMULATING...\nRENDERING ENGINE: VECTOR_CORE_V1\nFPS: 60 [STABLE]"
        }*/
    },
   apps: {
        app_a: {
            title: "C:\\PROG\\APPS\\AKASHIC_TAROT.EXE",
            header: "AKASHIC TAROT V2.3",
            desc: "A ritual-coded search guide for the Akashic Tarot deck. Built as a static web portal using HTML, CSS, and JavaScript.",
            image: "assets/images/tarot_preview.gif",
            content: "--- AKASHIC TAROT SYSTEM SPECS ---<br><br>" +
                     "✨ <strong>FEATURES:</strong><br>" +
                     "• Search: Instantly locates & highlights cards.<br>" +
                     "• Random Draw: Simulates a digital pull.<br>" +
                     "• Zero Bloat: Pure ritual logic, no backend.<br><br>" +
                     "🧪 <strong>TECH STACK:</strong> HTML, CSS, Vanilla JS<br><br>" +
                     "🌐 <strong>LIVE PORTAL:</strong><br>" +
                     "<a href='https://spectralgarden.github.io/akashictarot/' target='_blank' style='color: #cc0033; font-weight: bold;'>[ LAUNCH AKASHIC TAROT WEBAPP ]</a>"
        },
        /*app_b: {
            title: "C:\\PROG\\APPS\\SPECTROGRAM.EXE",
            header: "PULSE SPECTROGRAM",
            desc: "Real-time frequency tracking utility analyzing underlying carrier signals.",
            image: "assets/images/app_spectrogram.gif",
            content: "FREQ TRACKING ACTIVE\n[|||||||||||||||||||||||] 12.4Hz\n[||||||||||||           ] 4.1Hz"
        },*/
        /*app_c: {
            title: "C:\\PROG\\APPS\\SHREDDER.EXE",
            header: "FILE SHREDDER",
            desc: "Destructive digital deletion utility utilizing high-entropy randomized dummy data overwrites.",
            image: "assets/images/app_shredder.gif",
            content: "ALGORITHM: DOD 5220.22-M\nTARGET: TEMP_SESSION_LOG.DAT\nSTATUS: IN PROGRESS [88%]"
        },*/
        /*app_d: {
            title: "C:\\PROG\\APPS\\SIG_GEN.EXE",
            header: "SIGNAL GENERATOR",
            desc: "Generates static reference wave frequencies, custom sweep waves, and pure white noise files.",
            image: "assets/images/app_sig_gen.gif",
            content: "WAVEFORM: SINE\nOUTPUT FREQ: 440.00 Hz\nAMPLITUDE: -12.0 dB"
        },*/
        /*app_e: {
            title: "C:\\PROG\\APPS\\DECRYPTOR.EXE",
            header: "DECRYPTOR PRO",
            desc: "Decodes structured system logs encoded with customized alphanumeric shift mechanics.",
            image: "assets/images/app_decryptor.gif",
            content: "ALGORITHM: ROT13 + BASE64\nCIPHER: UVNfSjN4X0xVMg==\nDECRYPTED: SYS_KEY_99"
        },*/
        /*app_f: {
            title: "C:\\PROG\\APPS\\MEM_INSPECT.EXE",
            header: "MEM INSPECTOR",
            desc: "Inspect active RAM block addresses and virtual system hardware registry partitions.",
            image: "assets/images/app_mem_inspect.gif",
            content: "RAM ACTIVE: 512 KB\nHEAP ALLOCATION: 256 KB\nFREE ADDR: 0x0F44BB"
        },*/
        /*app_g: {
            title: "C:\\PROG\\APPS\\PAINTER.EXE",
            header: "VECTOR PAINTER",
            desc: "Draw mathematical coordinate lines and wireframe models on virtual display adapters.",
            image: "assets/images/app_painter.gif",
            content: "CANVAS RESOLUTION: 320x240\nPOINTS PLOTTED: 8\nVECTOR REFRESH: ON"
        },*/
        /*app_h: {
            title: "C:\\PROG\\APPS\\NODE_MAP.EXE",
            header: "NODE MAPPER",
            desc: "Traces topological layouts of local network relays and interconnected virtual routers.",
            image: "assets/images/app_node_map.gif",
            content: "HOPS DETECTED: 4\nLATENCY: 12ms\nGATEWAY: 192.168.1.254"
        },*/
        /*app_i: {
            title: "C:\\PROG\\APPS\\LOG_VIEW.EXE",
            header: "LOG VIEWER",
            desc: "Read real-time background records and security tracking system indicators.",
            image: "assets/images/app_log_view.gif",
            content: "02:14:10 - RECV [SYS_PING]\n02:14:15 - OK [HANDSHAKE]\n02:14:22 - ALERT: ENCRYPT SCAN"
        },*/
        /*app_j: {
            title: "C:\\PROG\\APPS\\CLOCK_SYNC.EXE",
            header: "CLOCK SYNC",
            desc: "NTP protocol alignment system matching global regional systems to network clocks.",
            image: "assets/images/app_clock_sync.gif",
            content: "SERVER: TIME.VOID.NTP\nVARIANCE: -0.0024s\nSTATUS: DRIFT CORRECTED"
        }*/
    },
    music: {
        track_a: {
            title: "C:\\MEDIA\\PLAYER\\AMBIENT_DRONE.MP3",
            header: "BLACK AMBIENT SYSTEM DRONE",
            desc: "Constant low-frequency sine-wave output tracking geographic coordinate variance.",
            image: "assets/images/track_ambient.gif",
            player: "TRACK_01_DRONE.MP3 [04:20 / 99:99]"
        },
        track_b: {
            title: "C:\\MEDIA\\PLAYER\\HYPNOTIC_VORTEX.MP3",
            header: "HYPNOTIC VORTEX LOOP",
            desc: "Sub-harmonic rhythmic pulses aligned to standard CRT screen refresh intervals.",
            image: "assets/images/track_vortex.gif",
            player: "TRACK_02_VORTEX.MP3 [12:11 / 15:00]"
        },
        track_c: {
            title: "C:\\MEDIA\\PLAYER\\SPECTRAL_ECHO.MP3",
            header: "SPECTRAL ECHOES",
            desc: "Analog soundscape featuring heavy cassette tape hiss emulation.",
            image: "assets/images/track_spectral.gif",
            player: "TRACK_03_ECHO.MP3 [03:45 / 06:12]"
        },
        track_d: {
            title: "C:\\MEDIA\\PLAYER\\DARK_PULSE.MP3",
            header: "DARK NET PULSE",
            desc: "Rhythmic industrial distortion combined with mechanical clock signals.",
            image: "assets/images/track_dark_pulse.gif",
            player: "TRACK_04_PULSE.MP3 [05:01 / 07:30]"
        },
        track_e: {
            title: "C:\\MEDIA\\PLAYER\\ETHER_WHISPERS.MP3",
            header: "ETHER WHISPERS",
            desc: "A combination of low-pass modulated shortwave static bursts.",
            image: "assets/images/track_ether_whispers.gif",
            player: "TRACK_05_WHISPERS.MP3 [08:14 / 12:00]"
        },
        track_f: {
            title: "C:\\MEDIA\\PLAYER\\SUB_CORE.MP3",
            header: "SUBTERRANEAN CORE",
            desc: "Deep atmospheric synthesizer sweeps coupled with seismic signal vibrations.",
            image: "assets/images/track_sub_core.gif",
            player: "TRACK_06_CORE.MP3 [10:00 / 20:00]"
        },
        track_g: {
            title: "C:\\MEDIA\\PLAYER\\COSMIC_WAVE.MP3",
            header: "COSMIC MICRO WAVE",
            desc: "Simulated interstellar signal tracking space-frequency waveforms.",
            image: "assets/images/track_cosmic_wave.gif",
            player: "TRACK_07_COSMIC.MP3 [06:40 / 08:50]"
        },
        track_h: {
            title: "C:\\MEDIA\\PLAYER\\GLITCH_SUITE.MP3",
            header: "GLITCH SUITE NO. 9",
            desc: "Microtonal digital audio feedback fragments organized in structural math patterns.",
            image: "assets/images/track_glitch.gif",
            player: "TRACK_08_GLITCH.MP3 [02:30 / 03:15]"
        },
        track_i: {
            title: "C:\\MEDIA\\PLAYER\\CYBER_SLUMBER.MP3",
            header: "CYBERNETIC SLUMBER",
            desc: "Warm slow-tempo oscillator movements mimicking biological sleep states.",
            image: "assets/images/track_cyber_slumber.gif",
            player: "TRACK_09_SLUMBER.MP3 [15:22 / 30:00]"
        },
        track_j: {
            title: "C:\\MEDIA\\PLAYER\\PHANTOM_CARRIER.MP3",
            header: "PHANTOM CARRIER",
            desc: "An endless loop tracking low-frequency analog hum lines.",
            image: "assets/images/track_phantom.gif",
            player: "TRACK_10_PHANTOM.MP3 [99:99 / 99:99]"
        }
    }
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

window.isClusterBombArmed = false;
window.orbHP = 100;

window.orbScreenX = window.innerWidth / 2;
window.orbScreenY = (window.innerHeight - 40) / 2;

window.activePowerUpItem = null;
window.activeFighters = [];
window.activeTornado = null;
window.nextPowerUpType = 'fighter';

let spawnIntervalTimer = null;

// Initialize events
document.addEventListener('DOMContentLoaded', () => {
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

    setInterval(updateClock, 1000);
    updateClock();

    updateLivesDisplay();
    const bugCounterEl = document.getElementById('bug-counter');
    if (bugCounterEl) bugCounterEl.textContent = window.bugEliminationCount;
    
    const bugHighscoreEl = document.getElementById('bug-highscore');
    if (bugHighscoreEl) bugHighscoreEl.textContent = window.bugHighScore;

    updateHPDisplay();
    updateLevelDisplay();
    reinitSpawnInterval();
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

        const menu = document.getElementById('start-menu');
        const startBtn = document.querySelector('.start-btn');
        if (menu && menu.style.display === 'block') {
            if (!menu.contains(e.target) && !startBtn.contains(e.target)) {
                menu.style.display = 'none';
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
});

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
        if (document.visibilityState === 'visible') {
            spawnDataBug();
        }
    }, intervalTime);
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
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
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
    }
}

function spawnDataBug() {
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
        glyphs = ['⭐', '💫', '☯️', '✙', '⛧', '𓁹', '🕯️', '🕸️', '𓄿', '🦇', '✦', '✧'];
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
                'assets/images/icon3.png',
                'assets/images/icon4.png',
                'assets/images/icon5.png',
                'assets/images/icon6.png',
                'assets/images/icon7.png'

            ];
            
            chosenColor = '#ffffff';
            chosenShadow = 'rgba(255, 255, 255, 0.9)';
            bugElement.className += ' healer-bug';
        } else {
            const healChance = window.bossActive ? 0.35 : 0.15;
            const healRoll = Math.random() < healChance;
            if (healRoll) {
                isHealer = true;
                glyphs = ['✦', '✙', '⚛️'];
                chosenColor = '#00ffff';
                chosenShadow = 'rgba(0, 255, 255, 0.9)';
                bugElement.className += ' healer-bug';
                bugElement.style.fontSize = '22px';
            } else {
                const harmlessChance = Math.max(0.05, 0.7 - (window.currentLevel - 1) * 0.3);
                const harmlessRoll = Math.random() < harmlessChance;

                if (harmlessRoll) {
                    isHarmless = true;
                    glyphs = ['🪱', '🪰', '⚙️', '💬', '✏️'];
                    chosenColor = '#668899'; 
                    chosenShadow = 'rgba(102, 136, 153, 0.5)';
                    bugElement.style.fontSize = '15px';
                } else {
                    const alienLimit = Math.min(0.65, 0.15 + (window.currentLevel * 0.02));
                    isAlien = Math.random() < alienLimit;

                    if (isAlien) {
                        glyphs = ['🛸', '👁️', '👿', '👽', '☄️', '☠️', '☣️'];
                        chosenColor = '#ff3300';
                        chosenShadow = 'rgba(255, 51, 0, 0.9)';
                        bugElement.style.fontSize = '24px';
                    } else {
                        if (window.currentLevel < 6) {
                            glyphs = ['👾', '🕷️', '🪲', '🐜'];
                        } else if (window.currentLevel < 15) {
                            glyphs = ['🛸', '📡', '☄️', '🌌', '💫'];
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
        img.style.width = '26px';
        img.style.height = '26px';
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
        if (window.bossActive) {
            itemType = Math.random() > 0.4 ? 'health_potion' : 'fighter';
        }

        if (itemType === 'fighter') {
            itemElement.innerHTML = `<span>⚡</span><span>[F-SYS]</span>`;
            window.nextPowerUpType = 'tornado';
        } else if (itemType === 'tornado') {
            itemElement.innerHTML = `<span>🌀</span><span>[V-TEX]</span>`;
            window.nextPowerUpType = 'cluster_bomb';
        } else if (itemType === 'cluster_bomb') {
            itemElement.innerHTML = `<span>💣</span><span>[BOMB]</span>`;
            itemElement.className += ' bomb-powerup';
            window.nextPowerUpType = 'extra_life';
        } else if (itemType === 'extra_life') {
            itemElement.innerHTML = `<span>🖤</span><span>[+1 LIFE]</span>`;
            itemElement.className += ' extra-life';
            window.nextPowerUpType = 'health_potion';
        } else if (itemType === 'health_potion') {
            itemElement.innerHTML = `<span>🧪</span><span>[HEAL]</span>`;
            itemElement.className += ' health-potion';
            window.nextPowerUpType = 'energy_cell';
        } else if (itemType === 'energy_cell') {
            itemElement.innerHTML = `<span>🔋</span><span>[CELL]</span>`;
            itemElement.className += ' energy-cell';
            window.nextPowerUpType = 'fighter';
        }
        
        itemElement.style.left = (safeCoords.x - 50) + 'px';
        itemElement.style.top = (safeCoords.y - 20) + 'px';
        document.body.appendChild(itemElement);

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
        createExplosionParticles(sX, sY, '#ff0033');
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
    const count = 3;

    for (let i = 0; i < count; i++) {
        const drone = document.createElement('div');
        drone.className = 'fighter-orb';
        
        const startX = -50;
        const startY = (viewHeight / (count + 1)) * (i + 1);
        
        drone.style.left = '0px';
        drone.style.top = '0px';
        drone.style.transform = `translate3d(${startX}px, ${startY}px, 0)`;
        document.body.appendChild(drone);

        window.activeFighters.push({
            element: drone,
            x: startX,
            y: startY,
            vx: 3.5 + Math.random() * 1.5,
            vy: (Math.random() - 0.5) * 0.8,
            lastFireTime: 0
        });
    }
}

function deployTornado() {
    const wrapper = document.createElement('div');
    wrapper.className = 'spiral-vortex-wrapper';

    const inner = document.createElement('div');
    inner.className = 'spiral-vortex-inner';

    const ring1 = document.createElement('div');
    ring1.className = 'spiral-ring ring-1';
    const ring2 = document.createElement('div');
    ring2.className = 'spiral-ring ring-2';
    const ring3 = document.createElement('div');
    ring3.className = 'spiral-ring ring-3';

    const symbol = document.createElement('div');
    symbol.className = 'vortex-symbol';
    symbol.textContent = '🌀';

    inner.appendChild(ring1);
    inner.appendChild(ring2);
    inner.appendChild(ring3);
    inner.appendChild(symbol);
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

    const output = document.getElementById('terminal-output');
    if (output) {
        const line = document.createElement('div');
        line.style.color = '#ff9900';
        line.textContent = '>> BOMB_MODULE_LOADED: CLICK CANVAS FIELD TO DROP AOE CLUSTER DESTRUCT...';
        output.appendChild(line);
        output.scrollTop = output.scrollHeight;
    }
}

function detonateClusterBomb(clickX, clickY) {
    window.isClusterBombArmed = false;
    document.body.classList.remove('bomb-armed');

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
    const hpDisplay = document.getElementById('orb-hp-display');
    if (hpDisplay) {
        hpDisplay.textContent = Math.max(0, window.orbHP);
        hpDisplay.style.color = window.orbHP > 60 ? '#ff0033' : (window.orbHP > 25 ? '#ffcc00' : '#ff3300');
    }
    const shieldText = document.getElementById('shield-text');
    if (shieldText) shieldText.textContent = Math.max(0, window.orbHP) + '%';
    
    const shieldBar = document.getElementById('shield-bar-inner');
    if (shieldBar) {
        shieldBar.style.width = Math.max(0, window.orbHP) + '%';
        shieldBar.style.backgroundColor = window.orbHP > 60 ? '#00a8ff' : (window.orbHP > 25 ? '#ffcc00' : '#ff3300');
    }
}

function updateLivesDisplay() {
    const livesBox = document.getElementById('lives-num-display');
    if (livesBox) {
        livesBox.textContent = '❤️'.repeat(Math.max(0, window.playerLives));
    }
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

    let chosenColor = 'rgba(255,0,0,0.25)';
    let transitionDuration = 120;

    if (amount < 5) {
        chosenColor = 'rgba(255, 120, 120, 0.15)'; 
        transitionDuration = 90;
    } else if (amount < 25) {
        chosenColor = 'rgba(255, 0, 0, 0.35)';      
        transitionDuration = 140;
    } else {
        chosenColor = 'rgba(139, 0, 0, 0.75)';      
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
    playDamageTone();

    if (window.orbHP <= 0) {
        loseLifeOrTriggerGameOver();
    }
}
window.takeDamage = takeDamage;

function loseLifeOrTriggerGameOver() {
    window.playerLives--;
    updateLivesDisplay();

    if (window.playerLives > 0) {
        triggerOrbExplosion();
    } else {
        triggerGameOverLeaderboardModal();
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
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

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

    createExplosionParticles(centerX, centerY, '#ff00ff');
    createExplosionParticles(centerX, centerY, '#00ff66');
    createExplosionParticles(centerX, centerY, '#00a8ff');
    createExplosionParticles(centerX, centerY, '#ff3300');

    playOverloadSound();

    window.orbEnergy = 100;
    window.currentLevelXP = Math.max(0, window.currentLevelXP - 200);
    updateXPDisplay();
    updateEnergyDisplay();

    if (typeof window.killAndRespawnOrb === 'function') {
        window.killAndRespawnOrb();
    }
}

function triggerGameOverLeaderboardModal() {
    playOverloadSound();
    const modal = document.getElementById('gameover-modal');
    const scoreVal = document.getElementById('final-score-val');
    if (scoreVal) scoreVal.textContent = window.bugEliminationCount * 100 + (window.currentLevel * 500);
    if (modal) modal.style.display = 'flex';
    renderLeaderboardList();
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

    // --- FIX: Reset all game states back to Level 1 and clean up bosses ---
    window.playerLives = 3;
    window.bugEliminationCount = 0;
    window.currentLevel = 1;                  // <-- Resets level back to 1
    window.currentLevelXP = 0;
    window.xpNeededForNextLevel = 3000;       // <-- Reset XP requirement for Level 1
    window.orbHP = 100;
    window.orbEnergy = 100;
    window.gameBeaten = false;

    // Clean up any active boss elements and HUD elements left over
    if (typeof cleanupBossFight === 'function') {
        cleanupBossFight();
    }
    // ---------------------------------------------------------------------

    const modal = document.getElementById('gameover-modal');
    if (modal) modal.style.display = 'none';

    updateLivesDisplay();
    updateHPDisplay();
    updateLevelDisplay();
    updateXPDisplay();
    updateEnergyDisplay();
    reinitSpawnInterval();

    // Re-evolve the visual orb back to Level 1 geometries
    if (typeof evolveOrbForLevel === 'function') {
        evolveOrbForLevel(1);
    }
}
window.submitScoreToLeaderboard = submitScoreToLeaderboard;

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

    const bossSymbols = ['☬', '👁️', '☢️', '⚛️', '☣️', '🌀', '✠', '👾', '⚡', '🪐'];
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

    bossElement = document.createElement('div');
    bossElement.className = 'boss-entity';
    bossElement.textContent = chosenSymbol;
    bossElement.style.filter = `hue-rotate(${randomHue}deg) drop-shadow(0 0 20px rgba(255, 51, 0, 0.9))`;
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

    createExplosionParticles(window.bossX + 50, window.bossY + 50, '#ff3300');
    playExplosionSound();

    if (window.bossHP <= 0) {
        defeatBoss();
    }
}

function defeatBoss() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createExplosionParticles(window.bossX + 30 + Math.random() * 40, window.bossY + 30 + Math.random() * 40, '#ff3300');
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

    const now = Date.now();
    for (let i = window.activeFighters.length - 1; i >= 0; i--) {
        const drone = window.activeFighters[i];
        drone.x += drone.vx;
        drone.y += drone.vy;

        drone.element.style.transform = `translate3d(${drone.x}px, ${drone.y}px, 0)`;

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

        if (target && (now - drone.lastFireTime > 350)) {
            drone.lastFireTime = now;
            fireLaser(drone.x, drone.y, target);
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
                    window.bossX += (targetSlideX - window.bossX) * 0.25;
                    window.bossY += (targetSlideY - window.bossY) * 0.25;
                    bossElement.style.transform = `translate3d(${window.bossX}px, ${window.bossY}px, 0)`;
                    
                    slideStepCount++;
                    if (slideStepCount >= slideTicks) {
                        clearInterval(slideInterval);
                        window.bossIsCharging = false;
                        if (bossElement) bossElement.style.borderColor = '#ff3300';
                        lastBossChargeTime = Date.now();
                    }
                }, 20);

            }, 1500);
        }

        if (now - lastBossStarRainTime > 8500) {
            lastBossStarRainTime = now;
            for (let s = 0; s < 8; s++) {
                setTimeout(() => {
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
            createExplosionParticles(proj.x, proj.y, '#ff3300');
            proj.element.remove();
            bossProjectiles.splice(p, 1);

            const damageVal = proj.type === 'star' ? 4 : 8;
            takeDamage(damageVal);
        }
    }

    requestAnimationFrame(updateGameplayLoop);
}

function fireLaser(fromX, fromY, bugTarget) {
    const laser = document.createElement('div');
    laser.className = 'laser-beam';
    document.body.appendChild(laser);

    const dx = bugTarget.x - fromX;
    const dy = bugTarget.y - fromY;
    const length = Math.hypot(dx, dy);
    const rotation = Math.atan2(dy, dx);

    laser.style.width = length + 'px';
    laser.style.transform = `translate3d(${fromX + 7}px, ${fromY + 7}px, 0) rotate(${rotation}rad)`;

    if (bugTarget.id === 'boss') {
        damageBoss(80); 
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

    const particleColor = bugObj.isHealer ? '#00ffff' : (bugObj.isAlien ? '#ff3300' : (bugObj.isMagenta ? '#ff00ff' : (bugObj.isHarmless ? '#668899' : '#00ff66')));

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
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
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
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
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
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

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
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const osc = audioCtx.createOscillator();
        const noise = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        osc.connect(gainNode);
        noise.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
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
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const osc = audioCtx.createOscillator();
        const subOsc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc.connect(gainNode);
        subOsc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

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
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const osc1 = audioCtx.createOscillator();
        const osc2 = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(audioCtx.destination);

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
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
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

        const img = win.querySelector('#app-img');
        if (img) {
            img.src = data.image || '';
            img.onerror = function() {
                this.onerror = null;
                this.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='200'><rect width='100%' height='100%' fill='%23111'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%2300ff00' font-family='monospace'>[ ${data.header} PREVIEW ]</text></svg>`;
            };
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

    const menu = document.getElementById('start-menu');
    if (menu) menu.style.display = 'none';
}

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
        
        document.querySelectorAll('.window').forEach(w => w.style.zIndex = 10);
        elmnt.style.zIndex = 100;
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
        win.style.display = 'flex';
        win.style.zIndex = 101;
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
            errLvl.style.color = '#ff0033';
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
        errLine.style.color = '#ff0033';
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
function playUISound() {
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
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