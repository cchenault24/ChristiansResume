# Professional Portfolio & Resume

A modern, performant portfolio and resume application built with React, TypeScript, and Vite. Features dynamic content management through Firebase, smooth animations, and a responsive design optimized for all devices.

## Features

### Core Functionality
- **Dynamic Content Management**: Portfolio data dynamically fetched from Firebase Firestore
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4 for seamless experience across all devices
- **Smooth Animations**: Framer Motion animations with reduced motion support for accessibility
- **Contact Form**: Integrated EmailJS for direct message submission without backend infrastructure
- **Scroll Navigation**: Intuitive navigation with scroll progress indicator and smooth scrolling
- **Section-based Layout**: Hero, About Me, Work History, Skills, Projects, Education, Certificates, and Contact sections

### Performance Optimizations
- **Code Splitting**: Lazy loading of heavy components with React Suspense
- **Manual Chunk Splitting**: Optimized vendor bundles for React, Framer Motion, and Firebase
- **Asset Optimization**: Organized output structure with hashed filenames for optimal caching
- **Skeleton Loading**: Smooth loading states while fetching data from Firebase
- **Image Optimization**: Structured asset organization with proper cache headers
- **Error Boundaries**: Graceful error handling throughout the application
- **Data Caching**: Client-side caching with TTL to reduce Firebase reads
- **Throttled Scroll Events**: Optimized scroll listeners for better performance

### Developer Experience
- **TypeScript**: Full type safety across the application
- **ESLint & Prettier**: Consistent code formatting and linting
- **Modern Build Tools**: Vite 5 for lightning-fast HMR and optimized production builds
- **Git Hooks Ready**: Pre-configured for CI/CD integration

## Tech Stack

### Frontend
- **React 18.3.1** - UI library with latest concurrent features
- **TypeScript 5.9.3** - Type-safe development
- **Vite 5.4.21** - Next-generation frontend tooling
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Framer Motion 12.23.26** - Production-ready animation library

### Backend & Services
- **Firebase 12.11.0** - Backend-as-a-Service for Firestore database and Analytics
- **EmailJS 4.4.1** - Email service for contact form submissions

### UI Libraries
- **NextUI 2.2.10** - Modern React UI library
- **React Icons 5.5.0** - Icon library
- **React Scroll 1.9.3** - Smooth scrolling functionality
- **Styled Components 6.1.19** - CSS-in-JS styling

### Additional Libraries
- **DOMPurify 3.3.1** - XSS sanitization for user-generated content

## Prerequisites

- **Node.js**: Version 18.x or higher recommended
- **Package Manager**: Yarn 1.22.22 (specified in package.json)
- **Firebase Project**: Active Firebase project with Firestore database
- **EmailJS Account**: For contact form functionality

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ChristiansResume
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory based on the required variables:

   ```env
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

   # EmailJS Configuration
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   **Important**: Never commit the `.env` file to version control. All environment variables are prefixed with `VITE_` to be accessible in the browser.

4. **Configure Firebase**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Set up Firestore security rules
   - Copy your Firebase configuration to the `.env` file

5. **Configure EmailJS**

   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Set up an email service
   - Create an email template
   - Copy your service ID, template ID, and public key to the `.env` file

## Development

### Available Commands

- **Development Server**
  ```bash
  yarn dev
  ```
  Starts the development server at `http://localhost:5173` with hot module replacement.

- **Production Build**
  ```bash
  yarn build
  ```
  Creates an optimized production build in the `dist` directory.

- **Preview Production Build**
  ```bash
  yarn preview
  ```
  Locally preview the production build.

- **Linting**
  ```bash
  yarn lint        # Check for linting errors
  yarn lint:fix    # Automatically fix linting errors
  ```

- **Code Formatting**
  ```bash
  yarn format        # Format code with Prettier
  yarn format:check  # Check code formatting
  ```

- **Database Management**
  ```bash
  yarn seed-data    # Seed Firestore with sample data
  yarn delete-data  # Delete all data from Firestore
  ```

## Project Structure

```
ChristiansResume/
├── src/
│   ├── components/          # React components
│   │   ├── AboutMe.tsx      # About section
│   │   ├── Card.tsx         # Reusable card component
│   │   ├── Certificates.tsx # Certifications display
│   │   ├── Contact.tsx      # Contact section wrapper
│   │   ├── ContactForm.tsx  # Contact form with EmailJS
│   │   ├── ContactInfo.tsx  # Contact information display
│   │   ├── ContactItem.tsx  # Individual contact item
│   │   ├── Education.tsx    # Education history
│   │   ├── ErrorBoundary.tsx # Error handling component
│   │   ├── HeroSection.tsx  # Landing hero section
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Projects.tsx     # Project showcase
│   │   ├── ScrollNavigation.tsx # Scroll-based navigation
│   │   ├── ScrollProgress.tsx   # Scroll progress indicator
│   │   ├── SectionWrapper.tsx   # Section container HOC
│   │   ├── SkeletonLoader.tsx   # Loading skeletons
│   │   ├── Skills.tsx       # Skills display
│   │   └── WorkHistory.tsx  # Professional experience
│   ├── hooks/               # Custom React hooks
│   │   └── useDataFetching.ts # Firebase data fetching hook
│   ├── lib/                 # External service configurations
│   │   ├── firebase.ts      # Firebase initialization
│   │   └── firestore.ts     # Firestore helper functions
│   ├── styles/              # Global styles and themes
│   │   └── shared.ts        # Shared styled-components
│   ├── types/               # TypeScript type definitions
│   │   ├── index.ts         # Main type definitions
│   │   └── jsx.d.ts         # JSX type extensions
│   ├── utils/               # Utility functions
│   │   ├── animations.ts    # Framer Motion animation configs
│   │   ├── cache.ts         # Client-side caching utilities
│   │   ├── device.ts        # Device detection utilities
│   │   └── throttle.ts      # Performance throttling
│   ├── API.ts               # API interface definitions
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── vite-env.d.ts        # Vite environment types
├── public/                  # Static assets
├── dist/                    # Production build output (generated)
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
├── vercel.json             # Vercel deployment configuration
└── package.json            # Dependencies and scripts
```

## Build & Deployment

### Production Build

The application uses Vite for building with the following optimizations:

1. **ESBuild Minification**: Fast and efficient code minification
2. **Code Splitting**: Automatic and manual chunk splitting for optimal loading
3. **Asset Organization**: Structured output with images, fonts, and JS in separate directories
4. **Cache Optimization**: Long-term caching with content hashes in filenames
5. **Modern Target**: Builds for modern browsers (ES2020+) for smaller bundle sizes

Build command:
```bash
yarn build
```

Output structure:
```
dist/
├── index.html
└── assets/
    ├── images/           # Optimized images with hashes
    ├── fonts/            # Font files with hashes
    └── js/               # JavaScript bundles with hashes
```

### Deployment to Vercel

The application is configured for deployment on Vercel with optimized settings:

1. **Framework Detection**: Auto-detected as Vite project
2. **Build Configuration**: Specified in `vercel.json`
3. **Routing**: SPA routing with fallback to index.html
4. **Cache Headers**: Aggressive caching for static assets (1 year)

Deploy with Vercel CLI:
```bash
vercel deploy --prod
```

Or connect your repository to Vercel for automatic deployments on push.

### Environment Variables in Production

Set the following environment variables in your deployment platform:

- All `VITE_FIREBASE_*` variables
- All `VITE_EMAILJS_*` variables

**Note**: On Vercel, add these in Project Settings > Environment Variables.

## Performance Features

### Load Time Optimizations
- **Lazy Loading**: Heavy components load on-demand using React.lazy()
- **Skeleton Screens**: Immediate visual feedback during data fetching
- **Suspense Boundaries**: Graceful loading states for async components
- **Optimized Bundles**: Vendor code split into separate chunks

### Runtime Optimizations
- **Throttled Events**: Scroll and resize events throttled to 16ms (60fps)
- **Client-Side Caching**: Firebase data cached with TTL to reduce reads
- **Memoization**: Strategic use of React.memo() for expensive components
- **Reduced Motion**: Respects user's motion preferences

### Build Optimizations
- **Tree Shaking**: Unused code eliminated in production
- **CSS Code Splitting**: Styles loaded per-route
- **Asset Hashing**: Content-based hashing for optimal cache invalidation
- **Modern Output**: ES2020+ for smaller bundles

### Network Optimizations
- **CDN-Ready**: Static assets optimized for CDN distribution
- **Cache Headers**: Long-term caching for immutable assets
- **Firebase SDK**: Using modular imports to reduce bundle size

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Modern mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow the existing code style
- Run `yarn lint:fix` before committing
- Run `yarn format` to ensure consistent formatting
- Write meaningful commit messages

## License

This project is private and proprietary. All rights reserved.

## Contact

For questions or inquiries about this portfolio application, please use the contact form on the live site.

---

Built with React, TypeScript, and modern web technologies for optimal performance and user experience.
