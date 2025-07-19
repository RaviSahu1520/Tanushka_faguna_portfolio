# Portfolio Website - Replit Configuration

## Overview

This is a modern, responsive portfolio website for Chandra Dev Pathak, a full-stack MERN developer. The application showcases a clean, animated design with smooth scrolling and a vibrant purple gradient theme. Built as a full-stack TypeScript application with React frontend and Express backend, it features a professional portfolio layout with hero section, services showcase, project gallery, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite for fast development
- **Styling**: Tailwind CSS with custom purple gradient theme and CSS variables
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Theme System**: Custom React Context for light/dark mode with localStorage persistence
- **Animations**: CSS animations and transitions for floating elements, smooth scrolling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM (configured for Neon Database)
- **Storage**: In-memory storage implementation with interface for database switching
- **API Design**: RESTful endpoints for contact form and CV download

## Key Components

### Frontend Sections
- **Header**: Fixed navigation with smooth scrolling, theme toggle, mobile menu
- **Hero Section**: Professional character image, name/title, social links, CV download
- **Services Section**: Three service cards (Web Developer, Web Designer, UI/UX)
- **Projects Section**: Three project showcase cards with hover effects
- **CTA Section**: Call-to-action for collaboration
- **Footer**: Contact information, social links, navigation

### Backend Components
- **Contact API**: Form submission endpoint with validation
- **CV Download**: Simulated CV file download endpoint
- **Storage Layer**: Abstract interface with in-memory implementation
- **Error Handling**: Centralized error middleware with proper status codes

### UI Features
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Dark/Light Theme**: Toggle with smooth transitions and persistence
- **Smooth Animations**: Floating character, gradient backgrounds, card hover effects
- **Form Handling**: Contact form ready for implementation with validation schemas

## Data Flow

1. **Frontend Rendering**: React components render with theme context and query client
2. **Theme Management**: Context provider manages light/dark mode state with localStorage
3. **API Communication**: TanStack Query handles HTTP requests with error handling
4. **Form Submission**: Contact forms validate with Zod schemas before API calls
5. **File Downloads**: CV download triggers API request and blob handling

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18, React DOM, React Query
- **UI Framework**: Radix UI primitives, Lucide icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Form Handling**: React Hook Form, Hookform resolvers
- **Utilities**: Date-fns, Wouter routing

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, Neon Database serverless
- **Validation**: Zod for schema validation
- **Session**: Connect-pg-simple for session management
- **Build Tools**: tsx, esbuild for production builds

## Deployment Strategy

- **Development**: Vite dev server with Express backend, hot reloading
- **Build Process**: Vite builds frontend to dist/public, esbuild bundles server
- **Production**: Single Node.js process serving static files and API
- **Database**: Configured for PostgreSQL with environment variable connection
- **Assets**: Static file serving with proper caching headers