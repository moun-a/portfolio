# Project Overview

Personal portfolio website for Mouna Mouhib, built with Create React App (CRA). It is a PWA (Progressive Web App) with service worker registration enabled. Deployed on Vercel.

## Commands

- **Install dependencies:** `npm install`
- **Dev server:** `npm start` (runs on http://localhost:3000)
- **Production build:** `npm run build`
- **Run tests:** `npm test` (Jest + React Testing Library via CRA)
- **Run a single test:** `npm test -- --testPathPattern=<pattern>` (e.g. `npm test -- --testPathPattern=App`)

Requires **Node 16.x**.

## Architecture

### Tech Stack
- React 17, react-router-dom v5 (`Switch`/`Route`, not v6 `Routes`)
- React Bootstrap v1 + Bootstrap 4 for layout and UI components
- react-ga for Google Analytics page tracking (initialized in `src/App.js`)
- Workbox-based service worker for PWA support (`src/service-worker.js`, `src/serviceWorkerRegistration.js`)

### Routing (src/App.js)
`App.js` is the top-level component. It uses `react-router-dom` v5 `<Switch>` to define four routes:
- `/` → `Home`
- `/project` → `Projects`
- `/about` → `About`
- `/resume` → `Resume`

`Navbar`, `Footer`, `Preloader`, and `ScrollToTop` render on every page outside the `<Switch>`.

### Component Organization (src/components/)
Each page has its own directory with sub-components:
- **Home/** — `Home.js` (hero section + `Type.js` typewriter effect), `Home2.js` (social links / intro)
- **About/** — `About.js` composes `AboutCard`, `Techstack`, `Toolstack`, and `Github` (GitHub contribution calendar for user "MohitSojitra")
- **Projects/** — `Projects.js` renders a grid of `ProjectCards`. Each card accepts `imgPath`, `title`, `description`, `link`, and optional `liveLink` props.
- **Resume/** — `Resume.js` renders `ResumeContent` entries and a PDF download button. The PDF is stored at `src/Assets/Mohit_SDE_Resume.pdf`.

Shared components live directly under `src/components/`: `Navbar.js`, `Footer.js`, `Particle.js` (currently disabled — returns an empty fragment), `Pre.js` (preloader), `ScrollToTop.js`, `LikeBtn.js`.

### Styling
- Global styles: `src/style.css` (main stylesheet) and `src/App.css`
- Bootstrap is imported in `App.js` via `bootstrap/dist/css/bootstrap.min.css`
- No CSS modules or CSS-in-JS — all styling uses plain CSS class names and inline styles
- Purple accent color (`#be50f4`, `#c770f0`) is used throughout via the `.purple` class and inline styles

### Static Assets
All images, SVGs, and the resume PDF are stored in `src/Assets/`. Project screenshots are in `src/Assets/Projects/`.
