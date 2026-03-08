# Jincheng Qian — Personal Portfolio

> **AI-Native Product Manager · Full-Stack AI Delivery · B2B Architecture**

A personal portfolio website built with **Next.js 16 + Tailwind CSS v4 + Framer Motion**, featuring a unique **"AI Dev Mode"** that exposes the actual prompts used to generate each section — showcasing how this site was built with AI-assisted development end-to-end.

**Live site →** [portfolio-jc.vercel.app](https://portfolio-jc.vercel.app) *(coming soon)*

---

## ✨ Highlights

- **AI Dev Mode** — Toggle a terminal panel that displays the real generation prompts for each section, synchronized to scroll position via `IntersectionObserver`
- **Bilingual (ZH / EN)** — Full Chinese/English language switch with locale dictionaries, state persisted in `localStorage`
- **Cyber-Minimalist Design** — Pure black (`#000`) background, lime-yellow (`#D9EB3F`) accents, monospace typography
- **Smooth Animations** — Page-entry animations, scroll-reveal effects, and card hover interactions powered by Framer Motion
- **Project Modals** — Click-to-expand project cards with shared layout animations (`layoutId`)
- **Fully Responsive** — Mobile-first layout with full-screen overlay nav

---

## 🛠 Tech Stack

| Area | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 (CSS-native config) |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter + Fira Code (Google Fonts) |
| Deployment | Vercel |
| Language | TypeScript |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page — section composition & AI Dev Mode state
│   └── globals.css         # Design tokens (@theme inline for Tailwind v4)
├── components/
│   ├── Header.tsx          # Fixed nav, language switcher, AI Dev Mode toggle
│   ├── Footer.tsx          # Copyright footer
│   ├── RightNav.tsx        # Fixed dot navigation (desktop)
│   └── sections/
│       ├── Hero.tsx        # Full-screen hero with avatar, typewriter title, CTAs
│       ├── About.tsx       # Bio + 3 capability cards
│       ├── Education.tsx   # Education timeline (HK PolyU + CQUPT)
│       ├── Experience.tsx  # Work experience cards
│       ├── Projects.tsx    # Project grid with expand-to-modal
│       ├── TechStack.tsx   # Tech categories grid
│       ├── Contact.tsx     # Contact info + WeChat QR modal
│       └── AIDevMode.tsx   # Floating terminal prompt panel
├── context/
│   └── LanguageContext.tsx # Global ZH/EN locale state (React Context)
└── locales/
    ├── zh.ts               # Chinese content dictionary
    └── en.ts               # English content dictionary
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/vitalemonteea/portfolio-web.git
cd portfolio-web

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 🤖 The "AI Dev Mode" Concept

This site was built almost entirely with AI-assisted coding (Cursor + Claude). The **AI Dev Mode** toggle (top-right corner) is a meta-feature that reveals this process:

- Opening the terminal panel shows the **exact prompts** used to generate each section
- The displayed prompt **updates in real-time** as you scroll through sections
- The typewriter animation simulates the actual generation process

This demonstrates the core belief: *In the AI era, a Product Manager should be a direct builder of solutions, not just a requirements definer.*

---

## 📄 License

MIT — feel free to fork and adapt for your own portfolio.
