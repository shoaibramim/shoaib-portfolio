# Shoaib Uddin - Portfolio

Personal portfolio website for Shoaib Uddin, built with a focus on performance, clean architecture, and modern UI/UX.

## Tech Stack

| Layer        | Technology                                 |
| ------------ | ------------------------------------------ |
| Framework    | React 19, TypeScript ~5.8                  |
| Build Tool   | Vite 6                                     |
| Styling      | Tailwind CSS (CDN), Poppins (Google Fonts) |
| Animation    | Framer Motion 12                           |
| Icons        | React Icons 5                              |
| Contact Form | FormSubmit.co (no backend required)        |

## Design System

Follows the **60:20:10 colour rule**:

| Token           | Hex       | Role                            |
| --------------- | --------- | ------------------------------- |
| `bgPrimary`     | `#121212` | 60% — page background           |
| `bgSecondary`   | `#1E1E1E` | 20% — card / surface background |
| `accent`        | `#0771e1` | 10% — sky blue highlight        |
| `textPrimary`   | `#F5F5F5` | body text                       |
| `textSecondary` | `#B3B3B3` | muted / secondary text          |

Custom animations (`blob`, `gradient-x`) and scrollbar styles are defined inline in `index.html`.

## Folder Structure

```
/
├── index.html              # HTML entry point, Tailwind CDN config & global CSS
├── index.tsx               # React root
├── App.tsx                 # Root layout (background blobs, noise texture, section order)
├── types.ts                # Shared TypeScript interfaces (Project, Skill, Testimonial, ProfileData, EducationData)
├── vite.config.ts          # Vite config — dev port 3000, @ alias
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
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

## Features

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
