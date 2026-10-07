# Lashes by Anise
React website with Vite. The English content, styling, and Instagram booking flow are preserved.

## Run locally
```sh
npm install
npm run dev
```
Open http://127.0.0.1:4173.

## Production build
```sh
npm run build
npm run preview
```

## Project structure
- `src/main.jsx`: React entry point.
- `src/App.jsx`: page composition.
- `src/components/`: header, footer, and individual page sections.
- `src/styles/global.css`: shared styling and responsive layouts.
- `src/config.js`: Instagram URL shared by booking links.
- `public/images/`: static image assets.
- `index.html`: page metadata and React mount point.
- `dist/`: generated production output; edit source files rather than this folder.
- `.openai/hosting.json`: existing Sites identity and static output configuration.

Booking links open Instagram; appointments are confirmed by the studio.
The hero image is an illustrative AI-generated asset.
