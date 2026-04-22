# Project Handoff: Personal Portfolio Website

This document provides all the context needed to resume the development of the personal portfolio website.

## 🚀 Project Overview
A premium, high-performance personal portfolio built for **Mostofa Habib Fardin**. The site follows a minimalist yet sophisticated "Industrial Engineering" aesthetic.

- **Workspace Root**: `d:\Website Content\Portfolio Site\Site-Rebuild`
- **Main Website Package**: `artifacts/personal-website`
- **Design Palette**: Charcoal-slate (`#2B3240`) and Golden-amber (`#D4A017`).

## 🛠️ Technical Stack
- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: pnpm (Monorepo structure)
- **Routing**: Wouter

## 📍 Key File Locations
- **Home Page**: `src/pages/Home.tsx`
- **Theme/CSS**: `src/index.css`
- **Components**:
  - `src/components/sections/Hero.tsx`
  - `src/components/sections/Projects.tsx` (Recently updated)
  - `src/components/sections/Photography.tsx`
  - `src/components/sections/Contact.tsx`

## ✨ Recent Updates (Session April 18, 2026)
1.  **Radial Drilling Project**:
    - Replaced old static images with high-quality SolidWorks renders (`Isometric` and `Close up`).
    - Integrated a **YouTube Motion Study video** directly into the project gallery.
    - Updated `ProjectMediaGallery` component to support seamless switching between images and video.
2.  **Theme Refinement**:
    - Finalized the Charcoal-slate and Golden-amber color system.
    - Optimized navigation with a smooth scroll-spy Navbar.
3.  **Asset Management**:
    - All local assets (Resume, Project Renders) have been copied into the `public/images` and `public/docs` folders to ensure they are part of the project repository.

## 🏃 How to Resume Work
To start the development server, run the following in the root directory:

```powershell
# Set required environment variables and start the dev server
cmd /v:on /c "set PORT=5173&& set BASE_PATH=/&& pnpm --filter @workspace/personal-website run dev"
```

The site will be available at **http://localhost:5173/**.

## 🎯 Next Steps
- **Sharing**: The user was looking for ways to share the progress with a friend (consider Vercel/Netlify deployment).
- **Final Polish**: Review the "Photography" section and "Experience" timeline for any missing details.
- **Mobile Optimization**: Double-check the masonry layout on photography for small screens.

---
**Note to AI**: When resuming, please scan the `personal-website` directory to re-index the latest component logic.
