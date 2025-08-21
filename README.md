# TBR Tracker

A modern, accessible TBR (To Be Read) tracking application with Google Sheets integration.

## Features

- 📚 **Track Your Reading**: Easily manage your to-be-read list
- 📊 **Google Sheets Integration**: Sync with your personal Google Spreadsheet
- 📱 **Mobile-First Design**: Responsive design that works on all devices
- ♿ **Accessibility**: Built with accessibility in mind (WCAG compliant)
- 🧪 **Well-Tested**: Comprehensive test coverage with Jest and Testing Library
- 🔧 **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Testing**: Jest + Testing Library
- **Linting**: ESLint with accessibility plugins
- **Formatting**: Prettier

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

### Google OAuth Setup

To enable Google Sheets authentication, create a Google OAuth 2.0 Client ID and add it to a `.env.local` file at the project root:

```
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_client_id_here
```

Restart the development server after adding the environment variable.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

## Project Structure

```
src/
├── app/              # Next.js 13+ app directory
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/       # Reusable UI components
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and configurations
└── types/           # TypeScript type definitions
```

## Future Development

This project is set up as a foundation for building out the full TBR tracking functionality, including:

- User authentication
- Book management (add, edit, delete, mark as read)
- Google Sheets API integration
- Reading goals and statistics
- Search and filtering
- Responsive book cards and lists

## Contributing

This project follows best practices for:

- Accessibility (WCAG guidelines)
- Testing (unit and integration tests)
- Code quality (ESLint, Prettier)
- Type safety (TypeScript)
- Mobile-first responsive design
