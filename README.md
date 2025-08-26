# corneliusventi.dev

A modern, responsive portfolio website showcasing my professional experience, projects, skills, and certifications. Built with Next.js 15 and React 19, featuring a sophisticated design system and comprehensive content management.

🔗 **Live Site**: [https://corneliusventi.dev](https://corneliusventi.dev)

## ✨ Features

- **Responsive Design** - Mobile-first approach with seamless desktop experience
- **Modern Tech Stack** - Next.js 15, React 19, TypeScript, Tailwind CSS v4
- **Interactive Components** - Mobile navigation, status badge, hover effects
- **Comprehensive Sections** - Experience, Skills, Projects, Certificates, Education
- **API Integration** - RESTful endpoint serving portfolio data
- **SEO Optimized** - Comprehensive sitemap with section anchors
- **AI-Assisted Development** - Built using Claude Code and Cursor

## 🎨 Design System

- **Accent Color System** - Periwinkle blue (`#8b9dc3`) with cream and dark blue-gray
- **Typography** - Geist Mono font family for professional monospace styling
- **Interactive Badges** - Consistent hover effects and responsive sizing
- **Status Indicator** - "Open to Opportunities" badge with pulsing animation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 with custom theme
- **Font**: Geist Mono (Google Font)
- **Development**: Claude Code, Cursor (AI-assisted)

## 🏗️ Project Structure

```
src/app/
├── layout.tsx                    # Root layout with header/footer
├── page.tsx                     # Main portfolio page
├── globals.css                  # Tailwind CSS with custom variables
├── components/
│   └── MobileNav.tsx            # Responsive navigation
├── data/
│   └── resume.ts               # Centralized portfolio data
└── api/
    └── resume/route.ts         # Portfolio data API endpoint
```

## 📊 Portfolio Sections

- **Hero** - Professional introduction with profile and CTAs
- **About** - Summary with specialization badges
- **Experience** - Work history with achievements and technologies
- **Skills** - Categorized technical competencies
- **Projects** - 7 projects from enterprise APIs to learning projects
- **Certificates** - 6 Boot.dev certifications with technologies
- **Education** - Academic background and specializations

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/corneliusventi/corneliusventi.dev.git
   cd corneliusventi.dev
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality

## 🔧 Configuration

- **TypeScript** - Strict mode with path aliases (`@/*` → `./src/*`)
- **ESLint** - Next.js core web vitals and TypeScript rules
- **Prettier** - Automatic formatting with Tailwind CSS plugin
- **Tailwind CSS** - v4 syntax with custom theme variables

## 🌐 API Endpoints

- `GET /api/resume` - Returns complete portfolio data in JSON format

## 📱 Responsive Features

- Mobile hamburger navigation with smooth animations
- Mobile-optimized badge sizing (`px-3 py-1 text-xs xl:text-sm`)
- Responsive grid layouts for all content sections
- Touch-friendly interactive elements

## 🎯 Key Features

- **Status Badge** - Real-time availability indicator
- **Dual CTAs** - "Get in Touch" and "Learn More" buttons
- **Technology Badges** - Interactive skill and tech demonstrations
- **Professional Timeline** - Clear work history progression
- **Project Showcase** - From enterprise solutions to learning projects

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 👤 Author

**Cornelius Venti**
- Website: [corneliusventi.dev](https://corneliusventi.dev)
- GitHub: [@corneliusventi](https://github.com/corneliusventi)
- LinkedIn: [corneliusventi](https://linkedin.com/in/corneliusventi)

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome! Feel free to:

- Open an issue for bugs or suggestions
- Submit a pull request for improvements
- Use this as inspiration for your own portfolio

---

Built with 💙 using Next.js, React, and AI-assisted development tools.