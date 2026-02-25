# Shoaib Uddin - Portfolio

Personal portfolio website for Shoaib Uddin, built with a focus on performance, clean architecture, and modern UI/UX.

## Tech Stack

| Layer        | Technology                                                    |
| ------------ | ------------------------------------------------------------- |
| Framework    | React 19, TypeScript ~5.8                                     |
| Build Tool   | Vite 6                                                        |
| Styling      | Tailwind CSS v3 (PostCSS, build-time), Poppins (Google Fonts) |
| Animation    | Framer Motion 12                                              |
| Icons        | React Icons 5                                                 |
| Contact Form | FormSubmit.co (no backend required)                           |

## Design System

Follows the **60:20:10 colour rule**:

| Token           | Hex       | Role                            |
| --------------- | --------- | ------------------------------- |
| `bgPrimary`     | `#121212` | 60% — page background           |
| `bgSecondary`   | `#1E1E1E` | 20% — card / surface background |
| `accent`        | `#0771e1` | 10% — sky blue highlight        |
| `textPrimary`   | `#F5F5F5` | body text                       |
| `textSecondary` | `#B3B3B3` | muted / secondary text          |

Custom animations (`blob`, `gradient-x`) are defined in `tailwind.config.js`. Base styles and scrollbar rules live in `index.css`.

## Folder Structure

```
/
├── index.html              # HTML entry point; SSG placeholder (<!--app-html-->), meta tags
├── index.css               # Tailwind directives (@tailwind base/components/utilities) + base styles
├── index.tsx               # React client entry — hydrateRoot (SSG) / createRoot (dev) fallback
├── entry-server.tsx        # SSR render function used by the prerender script
├── prerender.mjs           # Post-build: injects renderToString output into dist/index.html, then deletes dist/server/
├── tailwind.config.js      # Tailwind v3 config — theme colors, fonts, custom animations
├── postcss.config.js       # PostCSS config — tailwindcss + autoprefixer
├── vercel.json             # Vercel rewrite rule — serves index.html for all routes (SPA routing)
├── App.tsx                 # Root layout (background blobs, noise texture, section order)
├── types.ts                # Shared TypeScript interfaces (Project, Skill, Testimonial, ProfileData, EducationData)
├── vite.config.ts          # Vite config — dev port 3000, SSR outDir switch, @ alias
├── metadata.json           # Site metadata
├── data/
│   └── portfolioData.ts    # All content: profile info, skills, projects, education, testimonials
└── components/
    ├── ui/
    │   ├── Button.tsx          # Reusable anchor/button component with icon support
    │   ├── Section.tsx         # Section wrapper with title, subtitle, and scroll reveal
    │   ├── ProjectModal.tsx    # Animated project detail modal (Escape-to-close)
    │   ├── PDFViewerModal.tsx  # Animated in-browser PDF viewer modal with download option
    │   └── SocialSidebar.tsx   # Fixed left sidebar with social links; scroll-aware positioning
    ├── layout/
    │   ├── Navbar.tsx      # Sticky, scroll-aware navbar with smooth-scroll + URL pushState
    │   └── Footer.tsx      # Site footer
    └── sections/
        ├── Hero.tsx        # Full-screen intro with CV download, GitHub & HuggingFace links
        ├── About.tsx       # Bio and personal background
        ├── Skills.tsx      # Skill categories rendered from data
        ├── Projects.tsx    # Project grid with category filter and modal detail view
        ├── Education.tsx   # Education timeline, certifications, and extracurricular activities
        ├── Reviews.tsx     # Client testimonials / star ratings
        └── Contact.tsx     # Contact form (FormSubmit.co)
```

## Sections

| Section       | Description                                                                          |
| ------------- | ------------------------------------------------------------------------------------ |
| **Hero**      | Full-screen intro — name, role, tagline, links to GitHub / HuggingFace, CV download  |
| **About**     | Bio highlighting AI/ML research background                                           |
| **Skills**    | 5 categories — ML & AI, Frontend, Backend & Database, DevOps & Tools, Design & Media |
| **Projects**  | Grid of projects; each card opens an animated modal with full details                |
| **Education** | Degree timeline, IBM certification with in-browser PDF viewer, and activities        |
| **Reviews**   | Client testimonials from Upwork and Fiverr                                           |
| **Contact**   | Name / email / message form submitted via FormSubmit.co                              |

## Rendering Architecture

The app uses **Static Site Generation (SSG)** via a custom Vite SSR prerender pipeline:

| Step            | Command                             | Output                                                               |
| --------------- | ----------------------------------- | -------------------------------------------------------------------- |
| 1. Client build | `vite build`                        | `dist/` — hashed CSS/JS assets                                       |
| 2. SSR build    | `vite build --ssr entry-server.tsx` | `dist/server/entry-server.js` (temporary)                            |
| 3. Prerender    | `node prerender.mjs`                | Injects rendered HTML into `dist/index.html`, deletes `dist/server/` |

`index.tsx` uses `ReactDOM.hydrateRoot` when `#root` already has children (production), falling back to `ReactDOM.createRoot` in development where no prerendering occurs.

Googlebot and other crawlers receive **fully rendered HTML** without executing any JavaScript.

`vercel.json` contains a catch-all rewrite rule so direct visits to pushState URLs (e.g. `https://shoaibramim.me/projects`) are served `index.html` instead of returning a 404.

## Deployment (Vercel)

Before the first deploy, add the environment variable in the Vercel dashboard:

| Variable             | Value                              |
| -------------------- | ---------------------------------- |
| `VITE_CONTACT_EMAIL` | your FormSubmit.co recipient email |

Vercel will automatically run `npm run build` on every push to `main` and serve the contents of `dist/` as a static deployment.

## Setup & Running Locally

### Prerequisites

- Node.js ≥ 18

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_CONTACT_EMAIL=your-email@example.com
```

This is used by the Contact form to route submissions via FormSubmit.co.

### Install & Run

```bash
npm install
npm run dev        # development server on http://localhost:3000
npm run build      # client build + SSR build + prerender → dist/
npm run preview    # preview the production build locally
```

### Verify SSG Output

After `npm run build`, confirm the pre-rendered HTML:

```bash
# Should print a large number (full prerendered HTML, ~97 KB)
(Get-Item dist/index.html).Length          # PowerShell
wc -c dist/index.html                      # bash

# Should output actual text content, not an empty div
grep -o 'Shoaib Uddin' dist/index.html     # bash
Select-String 'Shoaib Uddin' dist/index.html  # PowerShell

# Should find no CDN Tailwind reference
grep 'cdn.tailwindcss' dist/index.html     # should return nothing
```

### Confirm Google Visibility

1. Deploy to Vercel (`vercel --prod`).
2. Open [Google Search Console](https://search.google.com/search-console) → URL Inspection.
3. Enter `https://shoaibramim.me/` and click **Test Live URL**.
4. Under **Page** tab, check **HTML** — it should contain the full rendered text (name, sections, project titles) without requiring JavaScript execution.

## Features

- **Static Site Generation** — `npm run build` pre-renders the full page to HTML via Vite SSR + `renderToString`. Crawlers receive complete content without JavaScript.
- **Build-Time Tailwind CSS** — Tailwind v3 processed through PostCSS at build time; unused classes are tree-shaken. Production CSS is ~25 KB / ~5 KB gzipped (vs ~3 MB CDN).
- **Data-Driven UI** — all content (profile, skills, projects, education, testimonials) sourced from `data/portfolioData.ts`; add or edit content without touching component code.
- **Animated Background** — three animating blobs and a subtle noise texture overlay applied globally via `App.tsx`.
- **Smooth Navigation** — Navbar uses `scrollIntoView` + `history.pushState` so direct URLs (e.g. `/projects`) deep-link to the correct section.
- **Project Modal** — click any project card to open an animated overlay with full description, tech tags, and links (GitHub, Live, Figma, Manuscript). Closes on Escape or backdrop click.
- **PDF Viewer Modal** — certifications open in an in-browser PDF viewer with a download option. Closes on Escape or backdrop click.
- **Social Sidebar** — fixed left sidebar showing GitHub, LinkedIn, and Behance links; travels upward as the user scrolls and hides when the footer is in view.
- **Contact Form** — zero-backend form handler via FormSubmit.co; submission state (`idle → submitting → success/error`) managed locally.
- **Framer Motion** — entrance animations, staggered children, and hover states throughout.
- **Responsive Design** — mobile-first; hamburger menu on small screens, multi-column grid on larger ones.
- **Custom Scrollbar** — styled via Tailwind `@layer base` to match the dark theme.
