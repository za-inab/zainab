# Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 15 and TypeScript, featuring smooth animations, interactive particle effects, and a sleek dark theme.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **Interactive Design**: Particle effects with tsParticles integration
- **Smooth Animations**: Motion animations for enhanced user experience
- **Responsive Layout**: Mobile-first design with Tailwind CSS
- **Contact Form**: Integrated email functionality with Nodemailer
- **Toast Notifications**: User feedback with react-toastify
- **Icon Libraries**: Comprehensive icon sets from Lucide, Tabler, and React Icons
- **Type Safety**: Full TypeScript implementation
- **Modern UI**: Styled with Tailwind CSS and Radix UI components

## 🛠️ Tech Stack

### Core
- **Framework**: Next.js 15.5.3
- **Runtime**: React 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4

### Key Dependencies
- **Animations**: Motion (Framer Motion successor)
- **Particles**: tsParticles for interactive background effects
- **Icons**: Lucide React, Tabler Icons, React Icons
- **UI Components**: Radix UI Select
- **Email**: Nodemailer for contact form
- **Notifications**: React Toastify
- **Utilities**: clsx, tailwind-merge, class-variance-authority

### Development Tools
- **Linting**: ESLint with Next.js config
- **PostCSS**: Tailwind CSS processing
- **Environment**: dotenv for configuration

## 📁 Project Structure

```
portfolio/
├── .next/                 # Next.js build output
├── .vscode/              # VS Code configuration
├── node_modules/         # Dependencies
├── public/               # Static assets
├── src/                  # Source code
├── components.json       # Component configuration
├── eslint.config.mjs     # ESLint configuration
├── next-env.d.ts        # Next.js TypeScript declarations
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies
├── package-lock.json    # Dependency lock file
├── postcss.config.mjs   # PostCSS configuration
├── README.md           # Project documentation
└── tsconfig.json       # TypeScript configuration
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Email configuration (if using contact form)
   SMTP_USER=your-email@domain.com
   SMTP_PASSWORD=your-password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Styling
- Modify Tailwind configuration in `tailwind.config.js`
- Custom styles in component files using CSS modules or Tailwind classes
- Animation configurations in motion components

### Content
- Update personal information in components
- Replace placeholder images in `public/` directory
- Modify particle configurations for different visual effects

### Contact Form
- Configure email settings in environment variables
- Customize form validation and styling
- Update success/error messages

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:
- Responsive navigation
- Adaptive layouts for different screen sizes
- Touch-friendly interactions
- Optimized images and assets

## 🔧 Configuration Files

- **TypeScript**: `tsconfig.json` - Type checking and compilation settings
- **Next.js**: `next.config.ts` - Framework configuration
- **ESLint**: `eslint.config.mjs` - Code linting rules
- **PostCSS**: `postcss.config.mjs` - CSS processing
- **Tailwind**: Integrated with PostCSS for utility-first styling

## 📦 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Optimal for Next.js projects (zero-config)
- **Netlify**: Static site deployment
- **GitHub Pages**: For static export
- **Custom Server**: Using `npm run start`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and for personal use.

## 📞 Contact

Feel free to reach out through the contact form on the portfolio or connect with me on social media.

---

Built with ❤️ using Next.js and TypeScript
