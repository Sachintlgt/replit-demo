# Zenkinns Food Products Website

A modern, responsive website for Zenkinns food products company built with React and TypeScript. The website showcases the company's products, services, and franchise opportunities.

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

## Deployment Guide

### Deploying on Replit

1. Your website is automatically deployed when you run the project on Replit
2. Click the "Run" button to start the server
3. Access your site via the "Webview" tab or your Replit URL

### Connecting a Custom Domain

1. **In Replit**:
   - Go to your project's "Tools" tab
   - Select "Hosting"
   - Click "Connect Custom Domain"
   - Add your domain name

2. **In Your Domain Provider**:
   - Add a CNAME record:
     - Name: @ or www (depending on your preference)
     - Value: Your Replit URL (without https://)
   - Wait for DNS propagation (can take up to 48 hours)

3. **SSL Setup**:
   - SSL is automatically handled by Replit
   - No additional configuration needed

### Alternative Free Hosting Options

You can also deploy this website on other free hosting platforms:

1. **Vercel**:
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Netlify**:
   - Connect your repository
   - Set build command: `npm run build`
   - Set publish directory: `dist/public`

3. **GitHub Pages**:
   - Enable GitHub Pages in repository settings
   - Set build command in GitHub Actions

## Local Development

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