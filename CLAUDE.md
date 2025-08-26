# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start the Next.js development server on http://localhost:3000
- `pnpm build` - Build the production application
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality
- `pnpm install` - Install dependencies

### Code Formatting
Code is automatically formatted with Prettier using the Tailwind CSS plugin. ESLint is configured with Next.js core web vitals, TypeScript, and Prettier rules.

## Architecture

This is a comprehensive personal portfolio website built with Next.js 15 and React 19, using the App Router architecture. Features a single-page application with multiple sections showcasing professional experience, skills, projects, certifications, and education.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 with custom brand colors and accent color system
- **Font**: Geist Mono (Google Font)
- **Development**: AI-assisted with Claude Code and Cursor

### Project Structure
```
src/app/
├── layout.tsx                    # Root layout with responsive header/footer
├── page.tsx                     # Single-page portfolio with all sections
├── resume.ts                   # Centralized resume data and types
├── globals.css                  # Tailwind CSS with custom theme variables
├── components/
│   └── MobileNav.tsx            # Responsive mobile navigation component
├── resume.json/
│   └── route.ts                # JSON endpoint for resume data
└── resume.pdf/
    └── route.tsx               # Auto-generated PDF resume endpoint
```

### Design System
- **Colors**: Custom brand colors with accent system
  - `--color-brand-light`: #f5e6ca (cream/beige)
  - `--color-brand-dark`: #343f56 (dark blue-gray)  
  - `--color-brand-accent`: #8b9dc3 (periwinkle blue)
- **Typography**: Geist Mono font family with monospace styling
- **Layout**: Responsive design with mobile-first approach, consistent container widths
- **Components**: Reusable badge system with hover effects and accent color theming

### Portfolio Sections
- **Hero**: Profile image with availability status badge and dual CTAs
- **About**: Personal summary with specialization badges
- **Experiences**: Professional work history with technology badges
- **Skills**: Categorized skill groups with interactive badges
- **Projects**: 7 projects including professional and learning projects
- **Certificates**: 6 Boot.dev certifications with technology tags
- **Education**: Academic background with relevant technologies

### Key Features
- **Responsive Navigation**: Desktop menu and mobile hamburger navigation
- **Status Badge**: "Open to Opportunities" indicator with pulsing animation
- **Dual CTA Buttons**: "Get in Touch" (primary) and "Learn More" (secondary)
- **Interactive Badges**: Hover effects on all technology/skill badges
- **Auto-Generated PDF Resume**: Dynamic PDF creation using React-PDF with same data source
- **API Integration**: `/resume.json` endpoint serving complete portfolio data
- **SEO Optimization**: Comprehensive sitemap with section anchors
- **Mobile Optimized**: Responsive design with mobile-friendly badge sizing

### PDF Resume Generation
The portfolio includes an auto-generated PDF resume feature (`/resume.pdf`) that:
- Uses the same centralized data source (`resume.ts`) as the website
- Generates professional PDF using React-PDF library
- Matches portfolio styling with clean, ATS-friendly format
- Includes sections: Work Experience, Education, Skills
- Optimized for both digital viewing and printing
- Minimal design focusing on essential professional information

### Data Structure
All portfolio content is centralized in `src/app/resume.ts` with TypeScript types:
- **PersonalInfo**: Contact details and social links
- **AboutInfo**: Professional summary and specializations
- **Experience**: Work history with achievements and technologies
- **SkillGroup**: Categorized technical skills
- **Project**: Portfolio projects with descriptions and tech stacks
- **Certificate**: Professional certifications with technologies
- **Education**: Academic background and specializations

### Configuration Notes
- TypeScript path aliases: `@/*` maps to `./src/*`
- ESLint extends Next.js core web vitals and TypeScript configurations
- Prettier configured with Tailwind CSS class sorting
- Uses Tailwind CSS v4 syntax with `@import` and `@theme` directives
- Consistent accent color system throughout all components
- Mobile-friendly badge sizing: `px-3 py-1 text-xs xl:text-sm`