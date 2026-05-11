# Thirupathi Burra | Personal Portfolio & Brand Studio

> 🚀 **Live Production URL:** [thirupathiportfoliowebsite.vercel.app](https://thirupathiportfoliowebsite.vercel.app/)

An editorial, typographic, and highly immersive personal brand website built to highlight production-grade engineering in AI, Machine Learning, and Full-Stack Scalable Systems. 

Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, and **React Three Fiber**.

---

## ✨ Design Concept

Unlike generic, neon-glowing "AI engineer" templates, this site was handcrafted with a **Premium dark studio aesthetic**:
- **Obsidian Theme**: Built on strict obsidian black (`#050505`) and zinc grey accents.
- **Calm 3D Hero**: Features an organic, distorted metallic glass sphere representing architectural depth rather than cliché futuristic hardware.
- **Micro-animations**: Smooth, staggered page transitions and scroll reveals driven by **Framer Motion**.
- **Volumetric Depth**: Layout borders are set to `white/5` with subtle `bg-gradient-to-br` panels that elevate the grid structure.

---

## 🛠️ Tech Stack & Architecture

- **Core**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first Variable Architecture), PostCSS
- **Animations**: Framer Motion
- **3D Render**: Three.js, React Three Fiber, `@react-three/drei`
- **Iconography**: Lucide React + custom SVG modules for modern brand continuity

---

## 📂 Project Organization

```text
src/
├── app/
│   ├── globals.css         # Tailwind v4 import & @theme configurations
│   ├── layout.tsx          # Master layout containing Navbar & Footer
│   ├── template.tsx        # Framer Motion animated page transitions
│   ├── page.tsx            # Continuous Home page snapshot stream
│   ├── projects/           # Categorized Case Study templates & grids
│   ├── experience/         # Sticky interactive professional timeline
│   ├── skills/             # Grouped core competence matrices
│   ├── achievements/       # Finalist positions & publication showcase
│   ├── community/          # Hackathons, GDG participation, and Freelance CTAs
│   └── contact/            # Frictionless email & custom contact form UI
├── components/
│   ├── layout/             # Navbar.tsx & Footer.tsx
│   ├── sections/           # Standalone narrative section components
│   └── ui/                 # Distorted 3D Hero canvas & interactive Form
├── data/
│   └── *.ts                # Centralized, strictly structured portfolio data models
└── lib/
    └── utils.ts            # Dynamic class name compiler (cn)
```

---

## ⚙️ Setup & Local Testing

### Prerequisites
Make sure you have Node.js 18+ installed on your system.

### Install Dependencies
```bash
npm install
```

### Start Local Development
```bash
npm run dev
```
Open **`http://localhost:3000`** in your browser.

### Run Production Build & Lints
```bash
npm run lint  # Verifies zero type checking or formatting errors
npm run build # Generates fully optimized, statically compiled pages
npm start     # Spins up the production-ready build locally
```

---

## 🚀 Deployment (Vercel)

The codebase is highly optimized for deployment on Vercel:
1. Push your changes to your GitHub Repository.
2. Log into your [Vercel Dashboard](https://vercel.com).
3. Import your repository, choose the standard **Next.js preset**, and click **Deploy**.
4. The build compiles statically in under 45 seconds!

---

## 📄 License
This repository is private and built specifically as a custom portfolio for **Thirupathi Burra**. All rights reserved.
