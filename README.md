# SPECTRAL GARDEN // LABS

A retro‑futuristic 90s OS browser environment fused with an interactive 3D arcade survival game, VST plugin showcase, and digital divination tools.  
**Live view:** https://spectralgarden.github.io/spectralgarden/

---

## 🌟 Overview

**Spectral Garden** simulates a stylized vintage desktop running on a custom “Void OS.” Users can open draggable windows, explore virtual software utilities, interact with a dynamic start menu, or dive directly into an embedded browser game powered by **Three.js**.

### Key Highlights
- **Retro 90s Desktop Environment:**  
  Classic window frames, a functional taskbar, live system clock, CRT/VHS overlays, and custom audio feedback via the Web Audio API.

- **The “Void” Game Loop:**  
  An infinite Three.js background canvas with responsive arcade‑style gameplay. Control an energy core, fight data bugs/aliens, collect power‑ups (drones, vortexes, cluster bombs, shields), and battle boss entities across 32 progressive levels.

- **Module Database:**  
  Dynamic loaders for experimental VST units, arcade simulators, and the Akashic Tarot web application.

- **Admin & Progression System:**  
  Local high‑score matrices (`localStorage`), customizable XP thresholds, level‑transition banners, and a cheat/skip command console (`admin69_skip_to_[1-32]`).

---

## 📂 Project Structure

```text
├── index.html        # Main entry point: OS layout, DOM UI elements, and modals
├── css/
│   └── style.css     # Retro window styling, CRT/glitch effects, and game UI layers
└── js/
    ├── app.js        # Core OS logic, UI state handlers, gameplay loops, audio synth, HUD updates
    └── portal.js     # Three.js background rendering and 3D orb/particle interaction mechanics
