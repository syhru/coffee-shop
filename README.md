# ☕ The Artisanal Monograph

A premium, highly responsive e-commerce and brand-storytelling landing page for an artisanal coffee roastery. Engineered with precise attention to visual aesthetics, mobile-first performance, and modern web accessibility practices.

![The Artisanal Monograph Preview](./public/The%20Artisanal%20Monoograph.jpeg)

## 🌟 Key Features

- **Cinematic Hero Experience**: Immersive, auto-playing video typography with scroll-reveal `framer-motion` aesthetics mapping a distinct premium vibe.
- **Glassmorphism & Dark Mode**: Flawless transition between the creamy "Latte" Light Mode and deep "Espresso" Dark Mode via intelligent tailwind toggles natively embedded.
- **Mobile-First Layout Precision**: Refined layout logic preserving spacing, landscape product cards, and responsive navigation hamburger drawer built explicitly for perfect mobile UX mapping.
- **Micro-Interactions**: Smooth component fade-ups, subtle drop-shadows (editorial-shadow), and staggered item reveals implemented through Framer Motion layout boundaries.
- **Accessible & SEO Ready**: Structured using semantic HTML (`<main>`, `<section>`, `<article>`), explicit `aria-labels`, and high-contrast color palettes ensuring inclusive readability.

## 🛠️ Technology Stack

- **Framework**: [React.js](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Extensively configured with custom brand variables `coffee-*`)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: React Icons / Material Symbols

## 📁 Project Structure

```bash
src/
├── components/          # Reusable UI widgets
│   ├── ArtisanalGallery.jsx
│   ├── BrewingGuides.jsx
│   ├── FloatingChip.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── Navbar.jsx
│   ├── OurSignatureBeans.jsx
│   ├── PhilosophySection.jsx
│   ├── ProductSpotlight.jsx
│   ├── ScrollToTop.jsx
│   ├── SignatureSelection.jsx
│   ├── StorytellingSection.jsx
│   ├── SubscriptionPlans.jsx
│   ├── TastingNote.jsx
│   └── TheRoastery.jsx
├── pages/               # Top-level Routing Modules
│   ├── Brewing.jsx
│   ├── Home.jsx
│   ├── OurBeans.jsx
│   ├── Roastery.jsx
│   └── Subscription.jsx
├── App.jsx              # Main Entry & Route Definer
├── App.css              # Global Application Styles
├── index.css            # Tailwind Base & CSS Vartiables
└── main.jsx             # DOM Injection Entry
```

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/artisanal-monograph.git
   cd artisanal-monograph
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   _or if utilizing yarn/pnpm:_

   ```bash
   yarn install
   ```

3. **Start the Development Server**

   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Navigate to `http://localhost:5173` to explore the project.

## ✨ Code Quality & Audit Standing

This project successfully passed comprehensive Senior-level QA inspections:

- **Clean Architecture**: Monolithic sections broken down into pure components (`TastingNote.jsx`, `FloatingChip.jsx`).
- **Memory Optimal**: Zero-leak interval timers executing natively inside `useEffect` with dependency resets.
- **Robust Layout Flow**: Resolved complex Flexbox mathematical overflows, leveraging dynamic `flex-1` logic mapping responsive behaviors properly.

## 🤝 Contribution

This is an ongoing project designed for a premium portfolio. Feel free to `fork` and submit a Pull Request if you spot UI friction points.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

_Crafted with precision & roasted with passion._
