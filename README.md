# Boston Day — FCAT Demo (v5)

A short financial education game about spending, saving, and making choices during a day trip to Boston.

**Play the demo:** https://bunnys-boston-day.moolingking.chatgpt.site/

## About this copy

This repository contains the original source and assets of the published v5 demo (October 28, 2026), exported for academic review. The game files have not been modified. This README was added for navigation and setup.

The game was developed through an iterative process with ChatGPT: defining the game idea and flow, building scenes, testing the experience, and requesting revisions.

## Main files

| File | Purpose |
| --- | --- |
| `dist/index.html` | Game entry page |
| `dist/game.js` | Game flow, choices, and interactions |
| `dist/pip.js` | Pip companion reactions |
| `dist/style.css` | Visual styling and layout |
| `dist/assets/` | Original illustrations and supporting assets |

## Run locally

Download the repository and open a terminal in its root folder. With Python 3 installed, run:

```sh
python3 -m http.server 8000 --directory dist
```

Then open http://localhost:8000 in a browser. Internet access is needed for externally loaded resources such as fonts and map tiles.

## Version reference

- Published version: v5
- Original source commit: `d6563be2ce37811fc29e0cdb2930522a7c713210`
- The original hosting configuration is preserved in `.openai/hosting.json` for provenance; it is not needed for local review.
