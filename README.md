# Moji

Moji is a lightweight text-sticker composer built with Vite + React. Type your caption, pick a font, tweak styling, and copy a transparent PNG to paste directly into Instagram Stories.

## Features

- Live text preview with size, color, alignment, shadow, padding, and radius controls
- Built-in local fonts loaded from the `font/` directory
- Custom font uploads (TTF/OTF/WOFF/WOFF2)
- One-click copy to clipboard for fast Story pasting

## Tech Stack

- Vite
- React + TypeScript
- Tailwind utility classes for UI styling
- html-to-image for PNG generation
- Gemini API integration (optional, via `services/`)

## Getting Started

Prerequisites: Node.js 18+ recommended.

```bash
npm install
```

Create `.env.local` and add your Gemini key if you plan to use the Gemini integration:

```bash
GEMINI_API_KEY=your_key_here
```

Start the dev server:

```bash
npm run dev
```

Then open the local URL shown in your terminal.

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Project Structure

- `App.tsx` and `index.tsx` are the app entry points
- `index.html` is the Vite HTML shell
- `components/` contains UI building blocks
- `services/` contains API integrations
- `constants.ts` and `types.ts` hold shared data/types
- `font/` stores bundled font files
- `metadata.json` holds static metadata

## Fonts

Built-in fonts live in `font/` and are loaded at runtime via `FontFace`. Some font files may require commercial authorization; verify licensing before redistributing or using commercially.

To add more built-in fonts:

1. Drop a font file into `font/`.
2. Register it in `constants.ts` under `LOCAL_FONT_SOURCES`.

For one-off usage, you can also upload fonts via the UI.

## Notes

- Clipboard copy requires a secure context (HTTPS or `localhost`).
- If a font does not render, refresh the page to reload fonts.
