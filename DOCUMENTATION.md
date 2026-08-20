# Vivek Reddy — React Portfolio: Complete Documentation

An end-to-end guide to the tech stack, features, architecture, local setup, deployment, and interview preparation for this portfolio project.

**Live site:** `https://vivekv1504.github.io/Vivek-Profile-React/`
**Repo:** `https://github.com/vivekv1504/Vivek-Profile-React`

---

## Table of Contents

1. [Overview](#1-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Features (What & How)](#4-features-what--how)
5. [Deep Dive: The Flip-Card Intro Video](#5-deep-dive-the-flip-card-intro-video)
6. [How the Intro Video Was Produced (AI + ffmpeg)](#6-how-the-intro-video-was-produced-ai--ffmpeg)
7. [Running Everything End-to-End](#7-running-everything-end-to-end)
8. [Deployment (CI/CD)](#8-deployment-cicd)
9. [Interview Questions & Answers](#9-interview-questions--answers)

---

## 1. Overview

This is a single-page personal portfolio built with **React 19 + Vite**. It presents an introduction (hero), work experience, education, projects, skills, certifications, and a contact form. It features smooth scroll-based animations, a dark/light theme with persistence, a scroll progress bar, a back-to-top button, and a signature interactive element: a **flip-card intro video** — the profile photo flips in place to reveal a lip-synced introduction video.

Design goals:
- Fast load (Vite build, compressed assets)
- Modern, animated UX (Framer Motion)
- Fully responsive (mobile-first breakpoints)
- Zero backend — static hosting via GitHub Pages, contact form via a third-party form service

---

## 2. Tech Stack

### Core
| Technology | Version | Purpose |
|---|---|---|
| **React** | ^19.2.0 | UI library (function components + hooks) |
| **React DOM** | ^19.2.0 | Renders React to the browser DOM |
| **Vite** | ^7.2.4 | Dev server + production bundler (fast HMR, ES modules) |
| **@vitejs/plugin-react** | ^5.1.1 | React Fast Refresh + JSX transform for Vite |

### Libraries
| Library | Version | Purpose |
|---|---|---|
| **framer-motion** | ^12.23.24 | Declarative animations (fade/slide-in, header, modal-like transitions, buttons) |
| **react-icons** | ^5.5.0 | SVG icon set (Font Awesome, Simple Icons, Devicons) |
| **react-intersection-observer** | ^10.0.0 | Scroll-triggered "animate on view" via `useInView` |
| **react-scroll** | ^1.9.3 | Smooth scrolling + active-section highlighting in the nav |

### Tooling
| Tool | Version | Purpose |
|---|---|---|
| **ESLint** | ^9.39.1 | Linting (flat config) |
| **eslint-plugin-react-hooks** | ^7.0.1 | Enforces Rules of Hooks |
| **eslint-plugin-react-refresh** | ^0.4.24 | Keeps components Fast-Refresh-safe |
| **gh-pages** | ^6.3.0 | (Optional) manual deploy helper to the `gh-pages` branch |

### Media pipeline (for the intro video)
- **ffmpeg / ffprobe** — video/audio inspection, trimming, muxing, compression
- AI talking-head generation tools (D-ID / Hedra / SadTalker) for the source clip

### Hosting / CI
- **GitHub Actions** — build + deploy pipeline
- **GitHub Pages** — static hosting
- **formsubmit.co** — serverless contact-form email delivery

---

## 3. Project Structure

```
react-portfolio/
├── .github/workflows/deploy.yml      # CI/CD: build + deploy to GitHub Pages
├── index.html                        # HTML entry point (mounts #root)
├── vite.config.js                    # Vite config (React plugin)
├── eslint.config.js                  # ESLint flat config
├── package.json                      # Scripts + dependencies
├── public/
│   ├── videos/intro.mp4              # Lip-synced intro video (served as static asset)
│   └── resumes/…                     # Downloadable CV
└── src/
    ├── main.jsx                      # React entry — createRoot + <StrictMode>
    ├── App.jsx                       # Layout: composes all sections
    ├── App.css                       # Main styles (incl. flip-card + responsive)
    ├── enhanced-styles.css           # Supplemental styles
    ├── index.css                     # Base/global styles
    ├── context/
    │   └── ThemeContext.jsx          # Dark/light theme provider (Context API)
    └── components/
        ├── Header.jsx                # Sticky nav, theme toggle, mobile menu
        ├── Hero.jsx                  # Intro + flip-card video
        ├── Experience.jsx            # Work timeline
        ├── Education.jsx             # Education cards
        ├── Projects.jsx              # Project cards + links
        ├── Skills.jsx                # Skill categories with icons
        ├── Certifications.jsx        # Certificates with dates/links
        ├── Contact.jsx               # Validated contact form
        ├── Footer.jsx                # Footer
        ├── ScrollProgress.jsx        # Top progress bar
        └── BackToTop.jsx             # Floating scroll-to-top button
```

### Composition (`App.jsx`)
The app wraps everything in `ThemeProvider`, then renders (in order): `ScrollProgress`, `Header`, and a `<main>` containing `Hero → Experience → Education → Projects → Skills → Certifications → Contact`, followed by `Footer` and `BackToTop`.

---

## 4. Features (What & How)

### 4.1 Dark / Light Theme (persistent)
- **Where:** `src/context/ThemeContext.jsx`, toggle in `Header.jsx`.
- **How:** A React **Context** exposes `isDarkMode` and `toggleTheme`. Initial value is lazily read from `localStorage`. A `useEffect` writes the value back to `localStorage` and sets `document.body.className` to `dark-mode` / `light-mode`, which CSS keys off of.
- **Why Context:** Theme is global state consumed by multiple components — Context avoids prop-drilling.

```jsx
// src/context/ThemeContext.jsx
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);
  // ...
};
```

### 4.2 Sticky Animated Header + Smooth-Scroll Nav
- **Where:** `Header.jsx`.
- **How:** `react-scroll`'s `<Link>` scrolls smoothly to section IDs. `spy` + `activeClass` highlight the current section. A `scroll` listener adds a `scrolled` class after 50px for a compact/shadowed header. Mobile menu toggles via local state. The header slides down on mount using Framer Motion.

### 4.3 Scroll Progress Bar
- **Where:** `ScrollProgress.jsx`.
- **How:** Listens to `scroll`, computes `scrollY / (scrollHeight - clientHeight) * 100`, and animates a fixed-position bar's width with Framer Motion.

### 4.4 Back-to-Top Button
- **Where:** `BackToTop.jsx`.
- **How:** Appears (via `AnimatePresence`) after scrolling 400px; `window.scrollTo({ behavior: 'smooth' })` on click.

### 4.5 Scroll-Triggered Section Animations
- **Where:** most sections (e.g., `Contact.jsx`, `Experience.jsx`, `Education.jsx`).
- **How:** `react-intersection-observer`'s `useInView({ triggerOnce: true, threshold })` gates Framer Motion `animate` props so content fades/slides in when scrolled into view — once.

### 4.6 Hero with Typewriter Effect + Flip-Card Video
- **Where:** `Hero.jsx`.
- **How:** A `useEffect` timer types/deletes the name for a looping typewriter effect. The profile photo is a **flip card** that reveals the intro video (see [Section 5](#5-deep-dive-the-flip-card-intro-video)).

### 4.7 Experience / Education / Projects / Skills / Certifications
- **Experience & Education:** timeline/card layouts using `react-icons` and CSS `::before` bullet markers.
- **Projects:** array-driven cards; each supports a custom `linkText` (e.g., "View Live Demo" vs "View Analysis").
- **Skills:** categorized (Technical, Testing & DevOps, AI Development, Data & Tools, Soft Skills) with brand icons from `react-icons` (`Fa`, `Si`, `Di`, `Bs`).
- **Certifications:** array-driven, each with an icon, optional issue date (`FaRegCalendarAlt`), and a link to a PDF/verification page.

### 4.8 Validated Contact Form (no backend)
- **Where:** `Contact.jsx`.
- **How:** Controlled inputs in a single `formData` state object. `validateForm()` checks required fields, email regex, and a 10-digit phone. On submit it `POST`s JSON to **formsubmit.co**, showing `Sending…`, then a success/error message. Errors clear as the user types.
- **Why formsubmit.co:** static hosting has no server — this delivers form submissions to email without writing a backend.

---

## 5. Deep Dive: The Flip-Card Intro Video

The hero photo flips in 3D to reveal a lip-synced intro video, in the same circular frame.

### Behavior
1. A pulsing **play button** overlays the photo.
2. Clicking it sets `isFlipped = true` → CSS rotates the card 180° (0.8s).
3. A `useEffect` on `isFlipped` calls `video.play()` (with sound — allowed because a user click initiated it) and resets `currentTime` to 0.
4. The video plays **chrome-free** (native controls hidden).
5. The card flips back automatically when:
   - the video **ends** (`onEnded`), or
   - the **✕** button is clicked, or
   - **Esc** is pressed.
6. On flip-back, the effect **pauses** and resets the video.

### Key implementation details
- **3D flip:** a `.hero-flip` container with `perspective`, an inner element with `transform-style: preserve-3d` + `transition`, and two faces (`.hero-flip-front`, `.hero-flip-back`) with `backface-visibility: hidden`. The back face is pre-rotated `rotateY(180deg)`.
- **Same size/shape:** both faces are `border-radius: 50%` with `overflow: hidden`, so the video is clipped into the same circle as the photo (`object-fit: cover`).
- **Controls fully hidden:** `controls` attribute removed; plus `disablePictureInPicture`, `disableRemotePlayback`, `controlsList`, `onContextMenu` prevention, `pointer-events: none`, and CSS hiding every `::-webkit-media-controls-*` pseudo-element (covers Safari's overlay play button).
- **Accessibility:** buttons have `aria-label`s; Esc closes.

```jsx
// src/components/Hero.jsx
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPlay, FaTimes } from 'react-icons/fa';
import passPhoto from '../assets/images/passphoto1.jpeg';

const introVideo = `${import.meta.env.BASE_URL}videos/intro.mp4`;
```

> **Why `import.meta.env.BASE_URL`?** In production the site is served from a sub-path (`/Vivek-Profile-React/`). Prefixing the video path with `BASE_URL` makes the asset resolve correctly both locally (`/`) and on GitHub Pages.

---

## 6. How the Intro Video Was Produced (AI + ffmpeg)

The talking-head clip was generated by an AI lip-sync tool (from a **photo + a voiceover audio**), screen-recorded, then processed locally with **ffmpeg**.

### Tools evaluated
- **SadTalker** (open-source, Colab) — powerful but brittle: requires Python 3.8 while modern Colab ships Python 3.12, causing dependency build failures (e.g., `torch 1.12+cu113`/`numpy 1.23` have no 3.12 wheels; `lmdb` fails to compile without `python3.8-dev`).
- **D-ID / Hedra** (hosted) — reliable, zero-setup, but gate downloads behind paid plans.
- Final approach: screen-record the generated preview, then re-attach the clean audio locally.

### The ffmpeg workflow

**1. Inspect files (durations, streams, audio presence):**
```bash
ffprobe -v error -show_entries format=duration \
  -show_entries stream=codec_type,codec_name,width,height \
  -of default=noprint_wrappers=1 input.mov
```

**2. Detect the lead-in (screen recordings start before playback):**
```bash
# Find the frozen intro segment before motion begins
ffmpeg -i recording.mov -vf "freezedetect=n=-50dB:d=0.35" -map 0:v:0 -f null -
```

**3. Detect where the audio actually starts speaking:**
```bash
ffmpeg -i voice.mp3 -af "silencedetect=n=-35dB:d=0.2" -f null -
```

**4. Trim the lead-in and mux video + audio, aligned:**
```bash
ffmpeg -y -ss 1.03 -i recording.mov -i voice.mp3 \
  -map 0:v:0 -map 1:a:0 \
  -c:v libx264 -crf 23 -preset slow -pix_fmt yuv420p \
  -c:a aac -b:a 128k -shortest -movflags +faststart \
  public/videos/intro.mp4
```
- `-ss` trims the frozen lead-in so the first lip movement lands on the first word.
- `-shortest` ends the output at whichever stream is shorter.
- `-movflags +faststart` moves metadata to the front so the video streams/plays before fully downloading.

**5. (When needed) compress a large render for web:**
```bash
ffmpeg -y -i big.mp4 -vf "scale=1080:1080:flags=lanczos" \
  -c:v libx264 -crf 26 -preset veryfast -pix_fmt yuv420p \
  -c:a aac -b:a 128k -movflags +faststart public/videos/intro.mp4
```

**Sync lessons learned:**
- "Audio ahead of lips" → trim more from the video's front (advance the video).
- Screen recordings often have a frozen tail (playback ended) — trim it or pick a recording with continuous motion.
- The recording's talking footage must be **≥** the audio length, or the ending words get cut.

---

## 7. Running Everything End-to-End

### Prerequisites
- **Node.js 22+** (CI uses Node 22) and npm.
- (Optional, for editing the intro video) **ffmpeg** — on macOS: `brew install ffmpeg`.

### Install
```bash
git clone https://github.com/vivekv1504/Vivek-Profile-React.git
cd Vivek-Profile-React      # (repo root contains the Vite project)
npm install
```

### Develop (hot reload)
```bash
npm run dev
# Vite prints a local URL, e.g. http://localhost:5173
```

### Lint
```bash
npm run lint
```

### Production build
```bash
npm run build
# Output goes to dist/
```

### Preview the production build locally
```bash
npm run preview
```

### Available scripts (`package.json`)
| Script | Command | What it does |
|---|---|---|
| `dev` | `vite` | Start dev server with HMR |
| `build` | `vite build` | Bundle to `dist/` |
| `preview` | `vite preview` | Serve the built `dist/` locally |
| `lint` | `eslint .` | Run ESLint over the project |

### Common customizations
- **Swap the intro video:** replace `public/videos/intro.mp4` (keep the filename) or update `introVideo` in `Hero.jsx`.
- **Edit content:** each section is data-driven — edit the arrays in `Projects.jsx`, `Skills.jsx`, `Certifications.jsx`, `Experience.jsx`.
- **Change contact recipient:** update the `formsubmit.co/<email>` URL in `Contact.jsx`.
- **Theme colors:** adjust CSS variables/colors in `App.css` / `index.css`.

---

## 8. Deployment (CI/CD)

Deployment is automated via **GitHub Actions** → **GitHub Pages** (`.github/workflows/deploy.yml`).

### Trigger
- Every **push to `main`** (or manual `workflow_dispatch`).

### Pipeline
1. **build job:**
   - Checkout, set up Node 22 (with npm cache).
   - `npm ci` (clean, lockfile-exact install).
   - `npm run build -- --base=/<repo-name>/` — the `--base` flag is crucial because Pages serves from `https://<user>.github.io/<repo-name>/`, so all asset URLs must be prefixed.
   - Upload `dist/` as a Pages artifact.
2. **deploy-github-pages job:**
   - Uses `actions/deploy-pages` to publish the artifact.
   - Permissions: `pages: write`, `id-token: write`; concurrency guards against overlapping deploys.

### Why the `--base` / `BASE_URL` matters
Locally the base is `/`. On Pages it's `/<repo-name>/`. Vite injects `import.meta.env.BASE_URL`, which the code uses for the video path — keeping assets working in both environments.

---

## 9. Interview Questions & Answers

### A. React & Frontend Fundamentals

**Q1. Why did you choose Vite over Create React App?**
Vite uses native ES modules and esbuild for near-instant dev server start and fast HMR, and Rollup for optimized production builds. CRA is slower and effectively deprecated. Vite also makes base-path config for sub-path hosting (GitHub Pages) straightforward.

**Q2. How do you manage global state without Redux?**
The only cross-cutting state is the theme, so I used React's **Context API** (`ThemeContext`). It provides `isDarkMode` + `toggleTheme` to any component without prop-drilling. For a portfolio, Redux would be over-engineering.

**Q3. Explain the theme persistence.**
`useState` is initialized lazily from `localStorage` (so the last choice survives reloads), and a `useEffect` syncs changes back to `localStorage` and toggles `document.body.className`, which the CSS targets. Lazy initialization avoids reading `localStorage` on every render.

**Q4. How are the scroll animations implemented, and why "trigger once"?**
`react-intersection-observer`'s `useInView` reports when a section enters the viewport; that boolean gates Framer Motion's `animate`. `triggerOnce: true` means the reveal plays once and doesn't re-run on every scroll — better UX and performance.

**Q5. What are the Rules of Hooks and where do they matter here?**
Hooks must be called at the top level, in the same order every render, only from React functions. It matters in every component with `useState`/`useEffect`/`useRef` — e.g., the Hero's effects run unconditionally and use dependency arrays to control when they re-run. `eslint-plugin-react-hooks` enforces this.

### B. The Flip-Card Video (signature feature)

**Q6. How does the 3D flip work?**
A container sets `perspective`; an inner wrapper uses `transform-style: preserve-3d` and transitions `transform`. Two absolutely-positioned faces have `backface-visibility: hidden`; the back is pre-rotated 180°. Toggling a `.flipped` class rotates the inner wrapper `rotateY(180deg)`, so the hidden back face swings into view.

**Q7. How do you control video playback from React?**
A `useRef` holds the `<video>` element. A `useEffect` keyed on `isFlipped` calls `.play()` (resetting `currentTime`) on flip and `.pause()` on flip-back. `onEnded` sets `isFlipped=false` for auto-return; Esc is handled via a `keydown` listener added/removed in an effect.

**Q8. Autoplay with audio is usually blocked — why does it work here?**
Browsers allow audible playback only after a **user gesture**. The video only plays as a direct result of the user clicking the play button, so the gesture requirement is satisfied.

**Q9. How did you completely hide the native controls across browsers?**
Removed the `controls` attribute; added `disablePictureInPicture`, `disableRemotePlayback`, `controlsList`, and blocked the context menu; set `pointer-events: none`; and hid every `::-webkit-media-controls-*` pseudo-element in CSS to kill Safari/Chrome's overlay play button.

**Q10. Why prefix the video path with `import.meta.env.BASE_URL`?**
Because GitHub Pages serves from a sub-path. `BASE_URL` is `/` locally and `/<repo>/` in production, so the asset resolves correctly in both without hardcoding.

### C. Media Engineering

**Q11. Walk me through creating the lip-synced video.**
Generate a talking head from a photo + voiceover (D-ID/Hedra/SadTalker), screen-record the preview, then use ffmpeg to: inspect durations (`ffprobe`), detect the recording's frozen lead-in (`freezedetect`) and the audio's speech start (`silencedetect`), trim the lead-in with `-ss`, mux video+audio (`-map`, `-shortest`), and add `+faststart`. Finally compress with `libx264 -crf` for web.

**Q12. The audio was ahead of the lips — how did you fix sync?**
"Audio ahead" means the lips lag, so I advanced the video by trimming more off its front (`-ss`) until the first word matched the first mouth movement. I iterated in ~0.5s steps.

**Q13. What does `-movflags +faststart` do and why use it?**
It relocates the MP4 metadata (`moov` atom) to the start of the file, so browsers can begin playback while streaming instead of waiting for a full download — important for web.

### D. Build, Tooling & Deployment

**Q14. Explain your CI/CD pipeline.**
A GitHub Actions workflow triggers on push to `main`: it installs with `npm ci`, builds with `vite build --base=/<repo>/`, uploads `dist/` as a Pages artifact, and deploys via `actions/deploy-pages`. Concurrency + least-privilege token permissions are configured.

**Q15. `npm ci` vs `npm install` in CI?**
`npm ci` does a clean, deterministic install strictly from `package-lock.json` (failing if it's out of sync). It's faster and reproducible — ideal for CI. `npm install` may mutate the lockfile.

**Q16. Why the `--base` flag at build time?**
Vite bakes the base path into asset URLs. Since Pages serves under `/<repo>/`, omitting it would produce root-absolute URLs that 404. Passing `--base=/<repo>/` fixes all asset references.

**Q17. How does the contact form work without a backend?**
Controlled inputs with client-side validation (required fields, email regex, 10-digit phone), then a `fetch` `POST` to **formsubmit.co**, which emails the submission. Static-host-friendly, no server to maintain. (Trade-off: relies on a third party and exposes the endpoint; for production I'd add spam protection / a serverless function.)

### E. Performance, Accessibility & Trade-offs

**Q18. What performance considerations did you make?**
Compressed the intro video (`crf`, scaled resolution, `+faststart`), used `triggerOnce` animations, lazy theme init, and Vite's optimized production bundle. Icons are tree-shakeable SVGs from `react-icons`.

**Q19. Accessibility measures?**
`aria-label`s on icon-only buttons (theme toggle, play, close, back-to-top), keyboard support (Esc to close the video), and semantic sections with `id`s used by the nav.

**Q20. What would you improve next?**
Add tests (React Testing Library / Playwright), lazy-load below-the-fold sections and the video, add spam protection to the form (or a serverless handler), provide a `prefers-reduced-motion` fallback for animations, and add captions/a poster image to the intro video.

---

*Generated as living documentation — update it as the portfolio evolves.*
