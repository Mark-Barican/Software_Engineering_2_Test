# Modern Hello - Next.js Application

A beautiful, interactive "Hello World" application built with Next.js 15, TypeScript, and Tailwind CSS. Features multi-language greetings, real-time clock, and modern UI animations.

## 🌟 Features

### 🌍 Multi-Language Support
- **8 Different Languages**: English, French, Spanish, Japanese, German, Italian, Portuguese, and Russian
- **Auto-Cycling**: Greetings change automatically every 3 seconds
- **Manual Control**: Interactive button to manually cycle through greetings

### 🎨 Modern Design
- **Gradient Backgrounds**: Beautiful gradients that adapt to light/dark themes
- **Glass Morphism**: Modern frosted glass effects with backdrop blur
- **Smooth Animations**: Hover effects, scale transforms, and pulse animations
- **Responsive Design**: Optimized for all screen sizes from mobile to desktop

### ⏰ Real-Time Features
- **Live Clock**: Updates every second with current time
- **Loading States**: Skeleton UI during hydration
- **Interactive Elements**: Bouncing dots and animated buttons

### 🌙 Theme Support
- **Dark/Light Mode**: Seamless theme transitions
- **System Preference**: Respects user's system theme preference
- **Accessibility**: Proper contrast ratios and readable typography

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd test_po
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: React 18 with Client Components
- **Build Tool**: Turbopack (Next.js built-in)

## 📁 Project Structure

```
test_po/
├── app/
│   ├── favicon.ico          # App icon
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main hello page component
├── public/                  # Static assets
├── docs/                    # Project documentation
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🎯 Key Components

### Main Page Component (`app/page.tsx`)
- **Client Component**: Uses React hooks for interactivity
- **State Management**: Manages current greeting, time, and mount state
- **Effects**: Handles time updates and greeting rotation
- **Responsive UI**: Adapts layout for different screen sizes

### Global Styles (`app/globals.css`)
- **CSS Variables**: Theme-aware color system
- **Dark Mode**: Media query-based theme switching
- **Tailwind Integration**: Custom theme configuration

## 🎨 Design System

### Color Palette
- **Primary**: Blue to Purple gradient (`from-blue-600 via-purple-600 to-pink-600`)
- **Background**: Light (`blue-50 → white → purple-50`) / Dark (`gray-900 → gray-800 → purple-900`)
- **Text**: High contrast with theme-aware colors
- **Accents**: Green for status indicators, various colors for animations

### Typography
- **Headings**: Large, bold text with gradient effects (6xl-8xl)
- **Body**: Clean, readable fonts with proper line spacing
- **Monospace**: Used for time display for consistent character width

### Animations
- **Pulse**: Breathing effect for main heading and status indicators
- **Bounce**: Playful dots animation with staggered delays
- **Scale**: Hover effects on interactive elements
- **Fade**: Smooth transitions between states

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build production application
npm run start        # Start production server
npm run lint         # Run ESLint for code quality

# Type Checking
npm run type-check   # Run TypeScript compiler check
```

## 🌐 Browser Support

- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile**: iOS Safari 14+, Chrome Mobile 88+
- **Features Used**: CSS Grid, Flexbox, CSS Variables, Backdrop Filter

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` - Single column layout, smaller text
- **Tablet**: `640px - 1024px` - Adjusted spacing and button sizes  
- **Desktop**: `> 1024px` - Full layout with larger typography

## 🎭 Interactive Features

1. **Greeting Rotation**: Click "Change Greeting" to manually advance
2. **Live Clock**: Real-time updates every second
3. **Hover Effects**: Buttons and elements respond to mouse interaction
4. **Loading State**: Skeleton UI prevents layout shift during hydration

## 🔮 Future Enhancements

- [ ] Add more languages and cultural greetings
- [ ] Implement timezone selection for the clock
- [ ] Add sound effects for interactions
- [ ] Create greeting customization options
- [ ] Add weather integration
- [ ] Implement user preferences storage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vercel** for deployment platform
- **Unicode Consortium** for emoji support

---

**Built with ❤️ using Next.js and Tailwind CSS**