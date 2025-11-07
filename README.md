# Portfolio - Modern Shadcn Design

A modern, sleek portfolio website built with Next.js, TypeScript, and shadcn/ui.

## Features

- 🎨 Modern, sleek design with shadcn/ui components
- 🌙 Dark theme with beautiful gradients
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🚀 Optimized for performance
- ♿ Accessible components

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Move the CV file to the public folder:

```bash
cp youssef_cv public/
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sections/           # Page sections
│   ├── navigation.tsx      # Navigation component
│   ├── hero.tsx            # Hero section
│   ├── footer.tsx          # Footer component
│   └── scroll-to-top.tsx   # Scroll to top button
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets (including CV)
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Customization

### Colors

Edit the color scheme in `app/globals.css` under the `:root` selector:

```css
:root {
  --primary: 217.2 91.2% 59.8%;
  --secondary: 217.2 32.6% 17.5%;
  /* ... */
}
```

### Content

Update the content in the respective section components:
- `components/sections/about.tsx`
- `components/sections/experience.tsx`
- `components/sections/projects.tsx`
- `components/sections/skills.tsx`
- `components/sections/certifications.tsx`
- `components/sections/blog.tsx`
- `components/sections/contact.tsx`

## License

This project is open source and available under the MIT License.

