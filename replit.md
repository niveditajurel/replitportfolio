# Modern Full-Stack React Application

## Overview

This is a modern full-stack web application built with React, TypeScript, and Express.js. The application uses a clean architecture with a shared schema layer, providing a solid foundation for building scalable web applications. It features a comprehensive UI component library based on shadcn/ui, Tailwind CSS for styling, and Drizzle ORM for database operations.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system variables
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Icons**: Lucide React and React Icons

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM with PostgreSQL support
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution in development

### Build and Deployment
- **Development**: Vite dev server with HMR for frontend, tsx for backend
- **Production**: Vite build for frontend, esbuild for backend bundling
- **Deployment**: Configured for Replit's autoscale deployment target

## Key Components

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Centralized schema definition in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations
- **Current Schema**: Basic user table with username/password fields

### API Layer
- **Express Server**: RESTful API with JSON middleware
- **Request Logging**: Custom middleware for API request logging
- **Error Handling**: Centralized error handling middleware
- **Storage Interface**: Abstracted storage layer with in-memory implementation

### Frontend Components
- **Component System**: Comprehensive UI library with 40+ components
- **Design System**: Consistent theming with CSS variables for light/dark modes
- **Forms**: React Hook Form integration with Zod validation
- **Responsive Design**: Mobile-first approach with responsive utilities

### Development Tools
- **TypeScript**: Strict configuration with path mapping
- **Linting**: ESLint integration (implied by dependencies)
- **Hot Reload**: Vite HMR for instant development feedback
- **Replit Integration**: Custom plugins for Replit environment

## Data Flow

1. **Client Requests**: React components make API calls using TanStack React Query
2. **API Routes**: Express routes handle requests and interact with storage layer
3. **Data Access**: Storage interface abstracts database operations
4. **Response**: JSON responses sent back to client with error handling
5. **State Management**: React Query manages caching and synchronization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon database driver for PostgreSQL
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Dependencies
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **drizzle-kit**: Database migration tool

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Process**: Runs backend with tsx and frontend with Vite dev server
- **Port**: Application serves on port 5000
- **HMR**: Instant hot module replacement for development

### Production
- **Build**: `npm run build` - Vite build for frontend, esbuild for backend
- **Start**: `npm run start` - Runs production server
- **Deployment**: Replit autoscale with automatic builds
- **Static Assets**: Frontend builds to `dist/public`, served by Express

### Database
- **Provider**: Configured for PostgreSQL (Neon or standard PostgreSQL)
- **Environment**: Requires `DATABASE_URL` environment variable
- **Migrations**: Run with `npm run db:push`

## Changelog

```
Changelog:
- June 24, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```