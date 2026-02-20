# Shoaib Uddin - Portfolio Monorepo

This repository contains the personal portfolio website for myself (Shoaib Uddin), designed with a focus on high performance, clean architecture, and modern UI/UX principles.

## Architecture

The project is structured as a Monorepo containing only Frontend components for now.

*Note: This specific implementation has been adapted into a React Single-Page Application (SPA) structure at the root level to comply with the execution environment constraints, while retaining the modularity and component design of a Next.js App Router setup.*

### Tech Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: None at this moment.
- **Design System**: 60:20:10 rule (Dark Grey background, Lighter Grey surfaces, Purplish blue or green accent).

## Folder Structure

```
/
├── index.html           # Main entry point & Tailwind Config
├── index.tsx            # React root
├── App.tsx              # Application layout
├── data/                # JSON-like data stores (Projects, Skills)
├── components/          
│   ├── ui/              # Reusable generic components (Button, Section)
│   ├── layout/          # Navbar, Footer
│   └── sections/        # Page sections (Hero, About, Projects, etc.)
└── README.md
```

## Setup & Running Locally

### Frontend (React SPA)
The frontend is designed to run in standard Vite or Create React App environments.
1. Install dependencies: `npm install` (requires `react`, `react-dom`, `framer-motion`)
2. Start development server: `npm start` or `npm run dev`


## Features Implemented
- **Data-Driven UI**: All projects and skills are rendered dynamically from `data/portfolioData.ts`.
- **Framer Motion Animations**: Scroll reveals, staggered children, and hover states.
- **Theme Configuration**: CSS variables managed via Tailwind config in `index.html`.
- **Responsive Design**: Mobile-first implementation ensuring perfect rendering on all devices.
