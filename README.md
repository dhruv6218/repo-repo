# Cosmic Verification Platform

> A modern, frontend-only verification application built with Next.js, featuring document verification services with a clean, responsive interface.

## 🚀 Features

- **Multiple Verification Types**: Support for Aadhaar, PAN, GST, Passport, CIN, DIN, and DigiLocker
- **All-in-One Verification**: Comprehensive verification dashboard
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Static Export**: Optimized for static hosting and CDN deployment
- **Mock Data Implementation**: Frontend-only with realistic mock responses
- **Admin Dashboard**: User management and analytics interface
- **Payment Integration UI**: Stripe-ready payment interfaces
- **Blog System**: Content management for articles and updates

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Build**: Static Export (No server required)
- **Deployment**: Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── components/         # Reusable UI components
│   │   ├── FeaturesSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── PricingSection.tsx
│   │   └── ProgressBar.tsx
│   ├── verify/            # Verification pages
│   │   ├── aadhaar/       # Aadhaar verification
│   │   ├── all-in-one/    # Comprehensive verification
│   │   ├── cin/           # Corporate Identity Number
│   │   ├── digilocker/    # DigiLocker integration
│   │   ├── din/           # Director Identification Number
│   │   ├── gst/           # GST verification
│   │   ├── pan/           # PAN verification
│   │   └── passport/      # Passport verification
│   ├── admin/             # Admin dashboard
│   ├── dashboard/         # User dashboard
│   ├── blog/              # Blog system
│   ├── pricing/           # Pricing page
│   └── ...
├── lib/                   # Utility functions
│   └── utils.ts
├── out/                   # Static build output
├── package.json           # Dependencies and scripts
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhruv6218/repo-repo.git
   cd repo-repo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deployment

### Static Build

```bash
# Build for production
npm run build

# The static files will be generated in the 'out' directory
```

### Deploy to Vercel

#### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

#### Option 2: GitHub Integration

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and deploy

#### Option 3: Manual Upload

1. Build the project: `npm run build`
2. Upload the `out` folder to Vercel

### Deploy to Netlify

1. **Netlify CLI**
   ```bash
   npm install -g netlify-cli
   npm run build
   netlify deploy --prod --dir=out
   ```

2. **Drag & Drop**
   - Build: `npm run build`
   - Drag the `out` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. **Enable GitHub Pages** in repository settings
2. **Set source** to GitHub Actions
3. **Push code** - automatic deployment via GitHub Actions

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
# Note: This is a frontend-only app, so no sensitive server keys
NEXT_PUBLIC_APP_NAME="Cosmic Verification Platform"
NEXT_PUBLIC_APP_URL="https://your-domain.com"
```

### Vercel Configuration

The project includes a `vercel.json` file optimized for deployment:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "trailingSlash": false,
  "cleanUrls": true
}
```

## 🎨 Customization

### Styling

- **Colors**: Modify `tailwind.config.ts` for brand colors
- **Components**: Update components in `app/components/`
- **Global Styles**: Edit `app/globals.css`

### Content

- **Hero Section**: Edit `app/components/HeroSection.tsx`
- **Features**: Modify `app/components/FeaturesSection.tsx`
- **Pricing**: Update `app/components/PricingSection.tsx`

### Mock Data

All verification pages use mock data for demonstration:

- Located in individual page components
- Simulates real API responses
- Easy to replace with actual API calls

## 📱 Pages Overview

### Public Pages
- **Home** (`/`) - Landing page with hero and features
- **About** (`/about`) - Company information
- **Pricing** (`/pricing`) - Service pricing
- **Contact** (`/contact`) - Contact form
- **Blog** (`/blog`) - Articles and updates

### Verification Pages
- **All-in-One** (`/verify/all-in-one`) - Comprehensive verification
- **Aadhaar** (`/verify/aadhaar`) - Aadhaar card verification
- **PAN** (`/verify/pan`) - PAN card verification
- **GST** (`/verify/gst`) - GST number verification
- **Passport** (`/verify/passport`) - Passport verification
- **CIN** (`/verify/cin`) - Corporate Identity verification
- **DIN** (`/verify/din`) - Director Identity verification
- **DigiLocker** (`/verify/digilocker`) - DigiLocker integration

### User Pages
- **Dashboard** (`/dashboard`) - User dashboard
- **Verification History** (`/verification-history`) - Past verifications
- **Settings** (`/settings`) - User preferences

### Admin Pages
- **Admin Dashboard** (`/admin`) - Admin overview
- **User Management** (`/admin/users`) - Manage users
- **API Keys** (`/admin/api-keys`) - API key management
- **Payments** (`/admin/payments`) - Payment management

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server (if needed)
npm run start

# Lint code
npm run lint

# Type checking
npm run type-check
```

### Code Quality

- **ESLint**: Configured for Next.js and TypeScript
- **TypeScript**: Strict mode enabled
- **Prettier**: Code formatting (recommended)

## 🚀 Performance

- **Static Export**: No server required
- **Optimized Images**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination
- **Minification**: Production builds are minified

## 🔒 Security

- **No Backend**: Frontend-only reduces attack surface
- **Static Hosting**: Inherently secure
- **Environment Variables**: Properly configured
- **Dependencies**: Regularly updated

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email support@cosmic-verification.com or create an issue in this repository.

## 🎯 Roadmap

- [ ] Add more verification types
- [ ] Implement real-time notifications
- [ ] Add bulk verification features
- [ ] Mobile app development
- [ ] API integration templates

---

**Built with ❤️ using Next.js and Tailwind CSS**

**Ready for deployment on Vercel, Netlify, or any static hosting platform!**