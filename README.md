# Food Products Company Website

A modern, responsive website for a food products company built with React and TypeScript. The website showcases the company's products, services, and franchise opportunities.

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Multiple Pages**:
  - Home: Company overview and featured products
  - About: Company history and values
  - Products: Showcase of food product categories
  - Exports: Global distribution network
  - Franchise: Business opportunities and investment details

## Tech Stack

- **Frontend**:
  - React.js
  - TypeScript
  - Tailwind CSS
  - shadcn/ui components
  - wouter (for routing)
  - Lucide React (for icons)

- **Build Tools**:
  - Vite
  - PostCSS
  - TypeScript

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5000`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is configured for deployment on Replit. The production build will be automatically served when you run the project on Replit.

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/          # Utility functions
│   │   └── App.tsx       # Main application component
├── server/               # Express server setup
└── shared/              # Shared types and schemas
```

## Customization

- Update `theme.json` to modify the color scheme and UI variants
- Modify `tailwind.config.ts` for custom Tailwind CSS configuration
- Edit page content in the `client/src/pages` directory

## License

MIT License - feel free to use this code for your own projects.
