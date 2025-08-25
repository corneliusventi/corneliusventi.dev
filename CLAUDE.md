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

This is a personal portfolio website built with Next.js 15 and React 19, using the App Router architecture.

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **UI**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 with custom brand colors
- **Font**: Geist Mono (Google Font)

### Project Structure
```
src/app/
├── layout.tsx          # Root layout with header/footer navigation
├── page.tsx           # Homepage with hero section
├── globals.css        # Tailwind CSS with custom theme
├── about/page.tsx     # About page
├── projects/page.tsx  # Projects showcase
└── skills/page.tsx    # Skills/technologies page
```

### Design System
- **Colors**: Custom brand colors defined in globals.css
  - `--color-brand-light`: #f5e6ca (cream/beige)
  - `--color-brand-dark`: #343f56 (dark blue-gray)
- **Typography**: Geist Mono font family with monospace styling
- **Layout**: Responsive design with container-based layouts, mobile-first approach

### Key Components
- **Layout**: Fixed header and footer with navigation links
- **Navigation**: Projects, Skills, About, Contact (mailto link)
- **Footer**: Social media links (GitHub, LinkedIn, X/Twitter)

### Configuration Notes
- TypeScript path aliases: `@/*` maps to `./src/*`
- ESLint extends Next.js core web vitals and TypeScript configurations
- Prettier configured with Tailwind CSS class sorting
- Uses Tailwind CSS v4 syntax with `@import` and `@theme` directives