# Autumnwood Designs Website

## Overview

This is a full-stack web application for Autumnwood Designs, a freelance creative studio specializing in website design, logo creation, and brand naming. The application features a modern, responsive design with a contact form system that handles quote requests and sends email notifications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Email Service**: Nodemailer for transactional emails
- **Session Management**: In-memory storage (development) with PostgreSQL session store capability

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Submissions Table**: Stores quote requests with fields for name, email, service type, budget, message, and timestamp
- **Database Provider**: Neon Database (serverless PostgreSQL)

### UI Components
- Comprehensive shadcn/ui component library implementation
- Custom components for Hero, About, Services, Portfolio, Contact, and Footer sections
- Responsive design with mobile-first approach
- Animation and reveal effects for enhanced user experience

### API Endpoints
- **POST /api/contact**: Handles contact form submissions, stores data, and sends email notifications

### Email System
- Dual email functionality: admin notification and user confirmation
- SMTP configuration for Gmail or custom email providers
- HTML email templates with professional formatting

## Data Flow

1. **User Interaction**: Users fill out the contact form with service requirements
2. **Form Validation**: Client-side validation using Zod schemas
3. **API Request**: Form data sent to backend via React Query mutation
4. **Data Storage**: Contact submission stored in PostgreSQL database
5. **Email Notifications**: Automated emails sent to admin and user
6. **User Feedback**: Success/error messages displayed via toast notifications

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **Form Management**: React Hook Form, Zod validation
- **Utilities**: class-variance-authority, clsx, date-fns

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Email Service**: Nodemailer with SMTP support
- **Session Management**: connect-pg-simple for PostgreSQL sessions

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **CSS Processing**: PostCSS with Tailwind CSS
- **Database Migrations**: Drizzle Kit for schema management

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR
- **Database**: Neon Database connection via environment variables
- **Email Testing**: SMTP configuration for development

### Production Build
- **Frontend**: Vite build process generating optimized static assets
- **Backend**: esbuild compilation for Node.js production bundle
- **Static Assets**: Served from dist/public directory
- **Environment Variables**: Required for database URL, SMTP credentials, and contact email

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`: Email configuration
- `CONTACT_EMAIL`: Recipient email for contact form submissions
- `SMTP_FROM`: Sender email address

### Database Setup
- Schema defined in `shared/schema.ts`
- Migrations managed via Drizzle Kit
- Production deployment requires running `npm run db:push`

The application is designed for easy deployment to cloud platforms with PostgreSQL database support and SMTP email services.