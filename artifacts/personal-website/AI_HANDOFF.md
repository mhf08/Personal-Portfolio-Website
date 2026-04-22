# Project Handoff: Portfolio Site Rebuild

## 🚀 Overview
This is a premium, editorial-style personal portfolio website built with **React**, **TypeScript**, and **Vite**. The project focuses on an industrial engineering aesthetic, using a "blueprint-inspired" layout with high-end animations and smooth interactions.

## 🛠 Tech Stack
- **Framework**: React 18 (Vite)
- **Styling**: Tailwind CSS + CSS Variables (Custom palette: charcoal-slate, golden-amber)
- **Animations**: Framer Motion
- **Components**: Radix UI (Headless UI)
- **Smooth Scroll**: Lenis
- **Utilities**: `clsx`, `tailwind-merge`, `lucide-react`
- **PDF Handling**: `pdfjs-dist` (for resume/portfolio previews)

## 🎨 Design System
- **Colors**: Defined in `index.css`. Uses HSL variables for light/dark mode.
- **Theme**: "Blueprint Editorial". Industrial engineering influence.
- **Typography**: Focused on clear, structured layouts (Inter/Roboto/Outfit style).
- **Micro-interactions**: Subtle hover effects, `TextReveal` components, and smooth transitions.

## 📂 Key File Structure
- `src/components/sections/`: Main page sections (Photography, About, Projects, Contact).
- `src/components/ui/`: Reusable primitive components (TextReveal, PdfImage, ThemeToggle).
- `src/components/providers/`: Context providers (Lenis, Theme).
- `src/index.css`: Global styles and design system variables.
- `src/App.tsx`: Main application entry and layout assembly.

## ✅ Completed Recently
- [x] Implemented Photography section with grid layout.
- [x] Set up Lenis smooth scrolling.
- [x] Established industrial "charcoal/slate & golden/amber" theme.
- [x] Resolved MediaLightbox integration warnings.
- [x] Refined Light Mode theme contrast for readability.

## 🔜 Next Steps / Pending Tasks
- [ ] Finalize "Get in Touch" section functionality.
- [ ] Optimize mobile responsiveness for the Photography grid.
- [ ] Integrate full-screen MediaLightbox across all visual sections.
- [ ] Finish PDF preview integration for the Resume section.

## 💡 Quick Tips for Resuming
- **Run dev server**: `npm run dev`
- **Theme Variables**: Check `src/index.css` for the `:root` and `.dark` definitions.
- **Animations**: Use `framer-motion` for all entrance and interaction animations to maintain consistency.
- **Scrolling**: Wrap main content in the `LenisProvider`.

---
*Created on 2026-04-19. This file is intended for AI assistant continuity.*
