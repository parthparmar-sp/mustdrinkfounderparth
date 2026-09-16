# MUSTDRINK Landing Page

A world-class premium landing page for MUSTDRINK (mustdrink.in) - a modern Indian functional beverage startup building healthy alternatives to coffee using traditional ingredients like Fenugreek (Methi), Moringa, and Ayurvedic superfoods.

## 🚀 Project Overview

MUSTDRINK is building the future of Indian functional beverages with modern Ayurveda. This landing page is designed to collect early users and build excitement before launch, featuring premium aesthetics and investor-ready design.

### Design Philosophy
- **Premium & Minimal**: Venture-backed startup aesthetic
- **Modern & Organic**: Clean typography with natural textures
- **Trustworthy**: Apple-level simplicity and professionalism
- **Investor-Ready**: Featured on Product Hunt, TechCrunch, Y Combinator ready

### Key Features
- 🎨 Premium, minimal design with warm cream/earth tones
- ⚡ Smooth animations using Framer Motion
- 📱 Fully responsive across all devices
- 🔍 SEO optimized with proper meta tags
- 🚀 Vercel deployment ready
- 📧 Waitlist collection for early access

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.4
- **Language**: TypeScript 5.8.2
- **Styling**: Tailwind CSS 4.0.14
- **Animations**: Framer Motion 12.4.7
- **UI**: React 19.0.0

## 📁 Project Structure

```
MustDrink/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── api/               # API routes
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── manifest.ts        # PWA manifest
│   │   ├── robots.ts          # SEO robots.txt
│   │   └── sitemap.ts         # SEO sitemap
│   ├── components/
│   │   ├── sections/          # Page sections
│   │   │   ├── Hero.tsx       # Hero section with waitlist
│   │   │   ├── Problem.tsx    # Problem statement
│   │   │   ├── Solution.tsx   # MUSTDRINK solution
│   │   │   ├── WhyMustdrink.tsx # Feature cards
│   │   │   ├── Ingredients.tsx # Ingredient story
│   │   │   ├── Vision.tsx     # Product vision
│   │   │   ├── Founder.tsx    # Founder story
│   │   │   ├── Incubated.tsx  # Incubation info
│   │   │   ├── FAQ.tsx        # FAQ section
│   │   │   └── EarlyAccess.tsx # Early access CTA
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── AnimatedSection.tsx
│   │   │   ├── ProductMockup.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   └── WaitlistForm.tsx
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Footer.tsx         # Footer component
│   │   └── JsonLd.tsx         # SEO structured data
│   └── lib/                   # Utility functions
├── public/                    # Static assets
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore rules
├── Build.md                  # Detailed build specifications
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
├── tsconfig.json             # TypeScript configuration
└── vercel.json               # Vercel deployment config
```

## 🎨 Design System

### Color Palette
- **Background**: Warm cream, Natural beige
- **Primary**: Earth brown, Deep forest green
- **Accents**: Off-white, Soft gold

### Visual Style
- Premium product photography style
- Organic textures and smooth animations
- Clean typography with plenty of white space
- Glassmorphism only where necessary
- Modern startup aesthetics

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MustDrink
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel Deployment
This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy automatically

The project includes `vercel.json` for optimal Vercel configuration and works seamlessly with GoDaddy domain connections without custom server configuration.

## 📝 Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Add your environment variables here
# Example:
# NEXT_PUBLIC_API_URL=your_api_url
# EMAIL_SERVICE_API_KEY=your_email_service_key
```

## 🎯 Website Sections

1. **Hero Section** - Premium headline, product mockup, waitlist form
2. **Problem Section** - Coffee dependency, energy crashes, acidity issues
3. **Solution Section** - Functional ingredients, modern Ayurveda
4. **Why MUSTDRINK** - Feature cards (no caffeine crash, digestion support, etc.)
5. **Ingredient Story** - Fenugreek (Methi), Moringa, Indian wellness traditions
6. **Product Vision** - Future of Indian functional beverages
7. **Founder Story** - Young founders, innovation, mission-driven company
8. **Early Access** - Waitlist signup, email capture
9. **FAQ Section** - Common questions
10. **Premium Footer** - Brand information and links

## 🔧 Development Guidelines

### Code Style
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Keep components modular and reusable
- Maintain consistent naming conventions

### Adding New Sections
1. Create component in `src/components/sections/`
2. Add to main page in `src/app/page.tsx`
3. Update this README with new section details

### Updating Content
- Edit section components directly
- Update Build.md for structural changes
- Update this README for project-level changes

## 📊 SEO Optimization

- Structured data with JsonLd component
- Dynamic sitemap generation
- Robots.txt configuration
- Meta tags for social sharing
- Semantic HTML structure

## 🤝 Contributing

This is a pre-launch project. For changes:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review

## 📄 License

[Add your license information here]

## 📞 Contact

- Website: [mustdrink.in](https://mustdrink.in)
- For inquiries: [Add contact email]

---

**Last Updated**: 2025-09-16  
**Version**: 0.1.0  
**Status**: Pre-launch Development
