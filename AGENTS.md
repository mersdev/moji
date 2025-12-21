# Repository Guidelines

## Project Structure & Module Organization
- `App.tsx` and `index.tsx` are the main entry points; `index.html` is the Vite HTML shell.
- `components/` holds UI building blocks (e.g., `FontUploader.tsx`, `StyleControls.tsx`).
- `services/` contains API integrations (e.g., `services/geminiService.ts`).
- `constants.ts` and `types.ts` centralize shared values and TypeScript types.
- Static metadata lives in `metadata.json`.

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts the Vite dev server for local work.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally for verification.

## Coding Style & Naming Conventions
- TypeScript + React with `.tsx` for components and `.ts` for utilities/services.
- Indentation appears to be 2 spaces; keep existing formatting and semicolons.
- React components use `PascalCase` filenames and exports (e.g., `FontUploader`).
- Prefer `camelCase` for variables and functions; use descriptive names for UI state.

## Testing Guidelines
- No testing framework is configured in this repo.
- If adding tests, document the chosen tool (e.g., Vitest) and place tests near sources (e.g., `components/__tests__/FontUploader.test.tsx`).
- Keep test names descriptive and match component or function names.

## Commit & Pull Request Guidelines
- This directory does not contain a Git history, so no local conventions are available.
- Suggested commit style: short, imperative summaries (e.g., "Add font upload validation").
- PRs should include a concise description, any relevant screenshots for UI changes, and a note about config updates (e.g., `.env.local`).

## Configuration & Secrets
- Create `.env.local` with `GEMINI_API_KEY` for the Gemini integration.
- Do not commit secrets; keep environment files local and document any new required keys here.
