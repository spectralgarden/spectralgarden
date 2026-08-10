# SPECTRAL GARDEN // LABS

A retro-futuristic 90s OS browser environment fused with an interactive 3D arcade survival game, VST plugin showcase, and digital divination tools. 

---

## 🌟 Overview

**Spectral Garden** mimics a vintage, stylized desktop interface running on a custom "Void" OS. Users can navigate draggable windows, explore virtual software utilities, interact with a dynamic start menu, or dive straight into an embedded browser game driven by **Three.js**.

### Key Highlights
- **Retro 90s Desktop Environment:** Styled with classic window frames, a functional taskbar, a live system clock, CRT/VHS visual overlays, and custom audio feedback generated via the Web Audio API.
- **The "Void" Game Loop:** Powered by an infinite Three.js background canvas and interactive gameplay elements. Players control a responsive energy core, fend off data bugs/aliens, collect power-ups (drones, vortexes, cluster bombs, shields), and battle progressing boss entities across 32 levels.
- **Module Database:** Dynamic spec loaders for experimental VST software units, arcade simulators, and the Akashic Tarot web application.
- **Admin & Progression System:** Includes local high-score matrices (`localStorage`), customizable XP thresholds, level-transition banners, and a cheat/skip command line console (`admin69_skip_to_[1-32]`).

---

## 📂 Project Structure

```text
├── index.html        # Main entry point: OS layout, DOM UI elements, and modals
├── css/
│   └── style.css     # Retro window styling, CRT/glitch effects, and game UI layers
└── js/
    ├── app.js        # Core OS logic, UI state handlers, gameplay loops, audio synth, and HUD updates
    └── portal.js     # Three.js background rendering and 3D orb/particle interaction mechanics
