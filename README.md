# ZYD. Portfolio

Personal portfolio website. Stack: React + Vite + Tailwind CSS v4 + Motion + lucide-react.
Design and requirements: `Project_Spec.md` (Project Knowledge).

**Status: Phase 0-1 foundations plus all sections.** Content comes from `src/data/`; empty values show a clear placeholder or are hidden.

## Requirements

- **Node.js 22 LTS** (recommended). Minimum: 20.19 or newer (required by Vite 7).
- npm (bundled with Node.js).

## Run on Windows

1. Install Node.js LTS from https://nodejs.org (choose the Windows installer, keep default options).
2. Extract the ZIP first (right-click > Extract All). Do not run it from inside the ZIP.
3. Open PowerShell or Command Prompt in the extracted `zyd-portfolio` folder
   (in File Explorer, click the address bar, type `cmd`, press Enter).
4. Check versions:
   ```
   node -v
   npm -v
   ```
   `node -v` must show v20.19.0 or higher.
5. Install dependencies (first time only, needs internet):
   ```
   npm install
   ```
6. Start the development server:
   ```
   npm run dev
   ```
7. Open the address shown in the terminal, normally http://localhost:5173. Press `Ctrl + C` to stop.

Other commands:

```
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## What you should see in Phase 0

A white page with the text "ZYD.", the line "Fondasi design tokens aktif.", and a small red bar.
The heading uses Bricolage Grotesque and the body uses Inter. If the fonts look like plain system fonts,
tell me.

## Troubleshooting

- **PowerShell says scripts are disabled:** use Command Prompt (`cmd`) instead, or run
  `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once.
- **`npm install` reports "No matching version" or peer dependency errors:** copy the full message and send it back.
  Package versions were chosen without access to the npm registry and could not be checked in advance.
- **Port 5173 already in use:** Vite picks the next free port; use the address printed in the terminal.
- **Node version error from Vite:** upgrade Node.js to 22 LTS.

## Project structure

```
src/
  styles/index.css   design tokens (light/dark), Tailwind theme, base styles, reduced-motion
  data/              owner content; empty/null until real data is supplied
  components/        (Phase 1+)
  hooks/             (Phase 1+)
  i18n/              (Phase 1+)
public/favicon.svg
```

Content rules: nothing in `src/data/` is invented. Empty values stay hidden in the UI.
Red small text uses `text-accent-text`; brand red `bg-accent` is for buttons, icons, lines, decoration.
