# ExpertListing Dashboard Assessment

A fully responsive frontend dashboard built for the ExpertListing hiring assessment based on the provided Figma design.

![ExpertListing Dashboard](src/assets/logo.svg)

---

## Technical Stack & Architecture

- **React 19** + **TypeScript 5.8** - Modern, type-safe component-driven architecture.
- **Tailwind CSS v4** - Utility-first styling configured with `@theme` design tokens and custom `@font-face` definitions.
- **Recharts** - Lightweight, responsive SVG bar chart for the Sales Overview section.
- **Vite 6** - Lightning-fast development server and optimized production bundler.
- **Open Runde Font Family** - Custom local font integrated via `.woff` font files for typography consistency with the Figma design.

---

## Project Structure

```
recruit-assessment/
├── public/
├── src/
│   ├── assets/
│   │   ├── fonts/           # Open Runde font family (Regular, Medium, Semibold, Bold)
│   │   ├── icons/           # Navigation & header SVG icons
│   │   └── images/          # Property cards background images
│   ├── components/
│   │   ├── Header.tsx       # Top bar & navigation tabs
│   │   ├── SalesOverview.tsx# Sales chart & revenue cards
│   │   ├── ListingsOverview.tsx # Listings statistics
│   │   ├── UserOverview.tsx # User statistics grid
│   │   ├── MetricCards.tsx  # Bottom 3 property/metric cards
│   │   ├── Footer.tsx       # Attribution footer
│   │   └── ChatButton.tsx   # Floating chat button
│   ├── data/
│   │   └── dashboardData.ts # Type-safe static/mock data
│   ├── App.tsx              # Main dashboard layout
│   ├── index.css            # Tailwind v4 theme & font definitions
│   └── main.tsx             # Application entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation & Running Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ogb-daniel/listing-assessment.git
   cd recruit-assessment
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   Open `http://localhost:5173` (or `http://127.0.0.1:5173`) in your browser.

4. **Build for production**:

   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## Key Features & Design Implementation

1. **Figma Accuracy**:
   - Extracted exact color codes (`#105B48` primary green, `#176D58` active green, `#4545FE` inflow blue, `#F97316` payout orange, `#0C5D56` riders' credit, `#12B669` green increase, `#DC2626` red decrease, `#FFFF00` stat values).
   - Embedded original Open Runde typography styles.
   - Built custom bar chart matching month-by-month sales visualization.

2. **Responsiveness**:
   - **Desktop (≥1280px)**: 2-column grid layout (Sales Overview on left, Listings & User Overviews stacked on right, 3 metric cards at bottom).
   - **Tablet (768px - 1279px)**: Responsive single-column stacked layout with adaptive chart sizing.
   - **Mobile (<768px)**: Horizontal scroll navigation, full width stacked stat cards, optimized touch targets.

3. **Micro-interactions & UX**:
   - Smooth hover states on navigation tabs, CTA buttons, and property cards.
   - Interactive metric card toggles ("Live Listings" / "All Listings").
   - Carousel navigation arrows on property cards.
   - Fixed floating chat action button with micro-animation.

---

## Assumptions & Trade-offs

1. **Static Mock Data**:
   - Per requirements, no backend API is connected. All statistics, revenue figures, user totals, and sales chart data are served via a structured data file (`src/data/dashboardData.ts`).
2. **Icons & Assets**:
   - Custom SVG icons and building imagery provided in the assessment package were converted and embedded directly into component assets.
