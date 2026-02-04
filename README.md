# 🚀 My Portfolio

A modern, full-stack developer portfolio built with Next.js 16, featuring a comprehensive design system, dark mode support, and internationalization.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Complete Design System** - Based on Figma design with comprehensive color palette and reusable components
- 🌓 **Dark/Light Mode** - Seamless theme switching with `next-themes`
- 🌍 **Internationalization** - Support for Vietnamese, English, and Chinese using `next-intl`
- 📱 **Responsive Design** - Fully responsive layout optimized for all devices
- ⚡ **Modern Stack** - Built with Next.js 16 App Router and React 19
- 🎯 **13+ Portfolio Sections** - Hero, Stats, Services, Experience, Projects, Skills, Blog, Contact, and more
- 🔧 **Reusable Components** - Button, FormInput, Icons library with 24+ RemixIcons
- 🎭 **18 Brand Icons** - Figma, React, Next.js, Vue, Angular, Laravel, Tailwind, MongoDB, and more

## 🎨 Design System

The project implements a comprehensive design system with:

### Color Palette

- **Theme Colors**: Primary (3 variants), Secondary (3 variants)
- **System Colors**: Success, Info, Warning, Danger, Muted
- **Neutral Scale**: 11 gradations from neutral-0 to neutral-1000
- **Gradient**: `linear-gradient(84.09deg, #6d4df2 → #8c71ff)`

### Typography

- **Urbanist**: Bold, SemiBold, Medium (400, 500, 600, 700)
- **DM Mono**: Regular, Medium (300, 400, 500)

### Components

- Buttons (Default, Outline, Small, Circle with hover states)
- Form Inputs with validation and labels
- Icon library (24 RemixIcons + 18 Brand icons)
- Cards (Service, Blog, Contact, Education, Project, Skills)

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.1.6](https://nextjs.org/)
- **React**: 19.2.3
- **TypeScript**: 5.0
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **i18n**: [next-intl](https://next-intl-docs.vercel.app/)
- **Utils**: clsx, tailwind-merge

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd my-portfolio

# Install dependencies
yarn install
# or
npm install

# Run development server
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📜 Available Scripts

```bash
# Development
yarn dev          # Start development server

# Production
yarn build        # Build for production
yarn start        # Start production server

# Linting
yarn lint         # Run ESLint
```

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── globals.css           # Global styles with CSS variables
│   ├── layout.tsx            # Root layout with providers
│   └── page.tsx              # Home page with all sections
├── components/
│   ├── portfolio/
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Stats.tsx         # Statistics section
│   │   ├── Services.tsx      # Services section
│   │   ├── Experience.tsx    # Work experience with tabs
│   │   ├── Education.tsx     # Education timeline
│   │   ├── Research.tsx      # Research projects
│   │   ├── Projects.tsx      # Project slider
│   │   ├── Skills.tsx        # Skills showcase
│   │   ├── Blog.tsx          # Blog posts
│   │   ├── Contact.tsx       # Contact form
│   │   ├── Cooperation.tsx   # Trusted companies
│   │   ├── GitJournal.tsx    # Git activity timeline
│   │   ├── Header.tsx        # Navigation header
│   │   └── Footer.tsx        # Footer
│   ├── providers/
│   │   └── ThemeProvider.tsx # Theme context provider
│   └── ui/
│       ├── Button.tsx        # Button components
│       ├── FormInput.tsx     # Form input & checkbox
│       ├── Icons.tsx         # RemixIcon library
│       ├── BrandIcons.tsx    # Brand icon components
│       ├── LanguageSwitcher.tsx
│       └── ThemeSwitch.tsx
├── lib/
│   └── utils.ts              # Utility functions (cn)
├── messages/
│   ├── en.json               # English translations
│   ├── vi.json               # Vietnamese translations
│   └── zh.json               # Chinese translations
└── public/                   # Static assets
```

## 🌐 Internationalization

The portfolio supports 3 languages:

- 🇻🇳 Vietnamese (vi)
- 🇬🇧 English (en)
- 🇨🇳 Chinese (zh)

Language can be switched via the language switcher in the header.

## 🎯 Portfolio Sections

1. **Hero** - Introduction with tech stack icons and download CV button
2. **Stats** - Key statistics and achievements
3. **Cooperation** - Trusted companies and brands
4. **Git Journal** - Recent git commit timeline
5. **Services** - Services offered
6. **Experience** - Work history with tabbed interface
7. **Education & Research** - Academic background and research projects
8. **Projects** - Project showcase with slider
9. **Skills** - Technical skills with icons
10. **Blog** - Latest blog posts
11. **Contact** - Contact form with info cards
12. **Footer** - Social links and navigation

## 🎨 Figma Design

Based on the official Figma design system:

- Design File: `Zelio_Design_v1`
- Color System: [View Colors](https://figma.com/design/oZluDkqoXRAQWZT2j6JJE4/Zelio_Design_v1?node-id=59-947)
- Components: [View Components](https://figma.com/design/oZluDkqoXRAQWZT2j6JJE4/Zelio_Design_v1?node-id=36-87)

## 🚀 Deployment

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Environment Variables

No environment variables are required for basic functionality.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- **Email**: contact@james.dev
- **Phone**: +1-234-567-8901
- **Skype**: JamesDev24
- **Address**: 0811 Erdman Prairie, Joaville CA

---

Built with ❤️ using [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
