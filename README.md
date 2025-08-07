# Arbash Humayun - 3D Portfolio Website

A stunning, modern 3D portfolio website built with Next.js 14, Three.js, and cutting-edge web technologies. This portfolio showcases Arbash Humayun's skills, experience, and projects through immersive 3D interactions and smooth animations.

## 🚀 Features

- **3D Interactive Elements**: Floating particles, skill spheres, and project cards
- **Modern Design**: Dark theme with gradient accents and glass morphism effects
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Smooth Animations**: Framer Motion animations and GSAP transitions
- **Performance Optimized**: Lazy loading, code splitting, and optimized 3D rendering
- **SEO Optimized**: Proper meta tags, structured data, and accessibility features
- **PWA Ready**: Progressive Web App capabilities with offline support

## 🛠️ Technologies Used

### Core Technologies
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Useful helpers for React Three Fiber

### Animation & UI
- **Framer Motion** - Animation library
- **GSAP** - Professional animation library
- **Lucide React** - Beautiful icons
- **Radix UI** - Accessible UI primitives

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── 3d/               # 3D components
│   │   ├── Scene.tsx     # 3D scene wrapper
│   │   ├── FloatingParticles.tsx
│   │   ├── SkillSphere.tsx
│   │   └── ProjectCard.tsx
│   ├── sections/         # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/               # UI components
│       ├── Button.tsx
│       └── Navigation.tsx
├── data/                 # Portfolio data
│   └── portfolio.ts
├── lib/                  # Utility functions
│   └── utils.ts
└── types/                # TypeScript types
    └── index.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arbash173/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Updating Personal Information

Edit the data in `src/data/portfolio.ts` to update:
- Personal information
- Skills and experience
- Projects
- Contact details

### Styling

- **Colors**: Update CSS variables in `src/app/globals.css`
- **3D Elements**: Modify 3D components in `src/components/3d/`
- **Animations**: Adjust Framer Motion animations in section components

### Adding New Sections

1. Create a new section component in `src/components/sections/`
2. Add it to the main page in `src/app/page.tsx`
3. Update navigation in `src/components/ui/Navigation.tsx`

## 📱 Performance Optimization

- **3D Rendering**: Optimized with proper cleanup and LOD
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic with Next.js App Router
- **Bundle Analysis**: Use `npm run analyze` to check bundle size

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

### Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` directory to Netlify

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Performance Metrics

Target performance goals:
- **Lighthouse Score**: 90+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔒 Security

- **Content Security Policy**: Configured for 3D content
- **HTTPS**: Required for PWA features
- **Input Validation**: Form validation and sanitization
- **Dependencies**: Regular security updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Arbash Humayun**
- Email: arbashhumayun0@gmail.com
- LinkedIn: [linkedin.com/in/arbashse](https://linkedin.com/in/arbashse)
- GitHub: [github.com/Arbash173](https://github.com/Arbash173)
- Portfolio: [arbashhumayun.netlify.app](https://arbashhumayun.netlify.app)

## 🙏 Acknowledgments

- **Three.js** community for 3D graphics
- **Framer Motion** team for animations
- **Vercel** for Next.js and hosting
- **TailwindCSS** for styling utilities

---

⭐ If you find this portfolio helpful, please give it a star!
