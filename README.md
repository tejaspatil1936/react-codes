# react-codes

A collection of independent React practice projects, each exploring a specific concept in the React ecosystem.

## Overview

This repository holds 14 standalone React applications built while learning React fundamentals and its surrounding tooling. Each folder is its own self-contained project — with its own `package.json`, lockfile, and dev server — rather than a single application split into modules. Topics covered range from basic `useState` counters to Context API state sharing, Redux Toolkit, client-side routing with data loaders, and a partially scaffolded blog app wired for an Appwrite backend.

There is no shared build system, monorepo tool (no Lerna/Turborepo/Nx), or cross-project code reuse; every subfolder runs and builds independently.

## Features

| Project | What it demonstrates | Status |
|---|---|---|
| `bgchanger` | Background color switcher using `useState` and inline styles, driven by a row of color buttons | Complete |
| `calculator` | Calculator button grid and input layout | UI only — buttons have no click handlers, no arithmetic logic |
| `commentBox` | Reddit-style comment thread with an upvote/downvote control, avatar, and reply button, styled with Tailwind CSS and Iconify icons | Complete (static content) |
| `context_API` | Minimal React Context example: a `UserContextProvider` shares a `User` value between sibling `Login` and `Profile` components | Complete |
| `Counter` | Increment/decrement counter using `useState` | Complete |
| `Counter2` | A second counter variant; Tailwind CSS is installed and configured but its directives are commented out in `index.css`, so styling falls back to plain CSS | Complete |
| `greeting` | Default Vite + React starter template, unmodified | Scaffold |
| `my-react-app` | Create React App scaffold rendering a single Iconify icon | Minimal |
| `passwordGenrator` | Password generator UI: text field, copy button, length slider, and checkboxes for numbers/symbols, styled with Tailwind CSS | UI only — no password generation logic wired up |
| `React_Router` | Multi-page app using `react-router-dom` v6: a shared `Layout` with `Header`/`Footer`, nested routes for Home/About/Contact, a dynamic `/user/:id` route read with `useParams`, and a `/github` route whose data is fetched by a router loader (`gitHubInfoLoader`) calling the public GitHub API | Complete |
| `redux_todo` | Redux Toolkit scaffold: a `todoSlice` with `addtodo`/`removetodo` reducers | Scaffold — reducers are empty stubs and the slice is not registered with `configureStore` |
| `themeswitcher` | Light/dark theme toggle using Context API; a `useEffect` swaps a class on the `<html>` element to apply the active theme | Complete |
| `toDo` | Todo app using Context API for add/update/delete/toggle-complete, with todos persisted to and restored from `localStorage` | Complete |
| `blogPage` | Planned blog application with dependencies for Appwrite (backend), Redux Toolkit, React Hook Form, a TinyMCE rich-text editor, and `react-router-dom`, plus a `.env` with Appwrite connection variables | Scaffold — dependencies and config are in place, but no feature code beyond the default Vite template exists yet |
| `vite-project` | Default Vite + React starter template, unmodified | Scaffold |

## Tech Stack

**Frontend**
- React 18 (function components, hooks)
- Vite (dev server and bundler for 13 of the 14 projects)
- Create React App (`my-react-app` only)
- React Router v6 (`React_Router`)
- Tailwind CSS + PostCSS + Autoprefixer (`commentBox`, `passwordGenrator`, `React_Router`, `redux_todo`, `themeswitcher`, `toDo`, `blogPage`)
- Iconify (`commentBox`, `React_Router`, `my-react-app`)

**State Management**
- React Context API (`context_API`, `themeswitcher`, `toDo`)
- Redux Toolkit + React Redux (`redux_todo`, and as a dependency in `blogPage`)

**Backend / BaaS**
- Appwrite — configured as a dependency and `.env` in `blogPage` for a planned backend integration

**Other**
- ESLint (`eslint-plugin-react`, `eslint-plugin-react-hooks`) in every Vite-based project
- React Hook Form, `html-react-parser`, `@tinymce/tinymce-react` — dependencies staged in `blogPage` for its planned editor/form features

## Architecture

Each top-level folder is a fully independent single-page app:

```
<project>/
├── index.html          # Vite entry point (or public/index.html for CRA)
├── package.json         # project-specific dependencies and scripts
├── vite.config.js        # Vite + @vitejs/plugin-react config
├── tailwind.config.js     # present only in Tailwind-enabled projects
└── src/
    ├── main.jsx           # ReactDOM root render
    ├── App.jsx             # top-level component
    ├── components/          # feature components, where applicable
    └── contexts/ or Context/ # Context API providers, where applicable
```

Projects that use Context API (`context_API`, `themeswitcher`, `toDo`) follow the same pattern: a context module exporting the context object plus a provider, consumed by a custom hook (`useTheme`, `useTodo`) instead of calling `useContext` directly in components.

## Project Structure

```
react-codes/
├── bgchanger/
├── blogPage/
├── calculator/
├── commentBox/
├── context_API/
├── Counter/
├── Counter2/
├── greeting/
├── my-react-app/
├── passwordGenrator/
├── React_Router/
├── redux_todo/
├── themeswitcher/
├── toDo/
└── vite-project/
```

## Getting Started

### Prerequisites

- Node.js and npm

Each project is run independently — there is no root-level install step.

### Run locally

For any Vite-based project (all folders except `my-react-app`):

```bash
cd <project-name>
npm install
npm run dev
```

For `my-react-app` (Create React App):

```bash
cd my-react-app
npm install
npm start
```

### Build

```bash
cd <project-name>
npm run build
```

(`my-react-app` uses `npm run build` via `react-scripts` instead of Vite.)

## Design Decisions

- **Fully isolated projects instead of a monorepo.** Each folder has its own `package.json`, `package-lock.json`, and `.gitignore`, so dependency versions and tooling (React 18.2 vs 18.3, Vite 4 vs 5, Tailwind 3) can differ between projects without affecting one another — reflecting that each was scaffolded independently with `npm create vite@latest` as its own learning exercise.
- **Custom hooks wrapping Context.** `themeswitcher` and `toDo` both export a dedicated hook (`useTheme`, `useTodo`) alongside their context and provider, keeping the `useContext` call in one place rather than repeating it in every consuming component.
- **Router-driven data fetching.** `React_Router`'s `/github` route uses a `react-router-dom` loader function (`gitHubInfoLoader`) instead of fetching inside a `useEffect`, so the GitHub API call resolves before the route renders.

## Future Improvements

- Wire up `calculator`'s button grid to actual arithmetic logic and state.
- Implement the checkbox/slider-driven generation logic in `passwordGenrator` (currently UI only).
- Implement the `addtodo`/`removetodo` reducer bodies in `redux_todo`'s `todoSlice` and register the slice's reducer with `configureStore` (the store is currently created with no reducers).
- Build out `blogPage`'s actual Appwrite service layer, auth flow, and post editor — the dependencies and `.env` are staged but no components beyond the default template exist yet.
- Re-enable or remove the commented-out Tailwind directives in `Counter2`'s `index.css` so its Tailwind config and dependencies are either used or dropped.
