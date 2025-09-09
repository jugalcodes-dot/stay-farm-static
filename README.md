# Serenity Farmhouse - Marketing Website

A beautiful, fast, and conversion-focused marketing website for farmhouse rentals built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm installed

### Installation & Running
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customizing Content

### Basic Information
Edit `src/pages/Index.tsx` to update:
- **Farmhouse Name**: Change "Serenity Farmhouse" 
- **Location**: Update "Delhi NCR" references
- **Phone Numbers**: Replace "+91-9876543210" 
- **Capacity**: Update guest numbers (currently set to 20)
- **Pricing**: Modify package prices in the packages array
- **Amenities**: Edit the amenities array to match your facilities

### Contact Information
Update these key contact details in `src/pages/Index.tsx` and `src/components/StickyActions.tsx`:
```javascript
const phoneNumber = "+91-XXXXXXXXXX";
const whatsappNumber = "91XXXXXXXXXX"; // Without + or -
```

### Images
Replace the generated images in `src/assets/` with your own:
- `farmhouse-hero.jpg` - Main hero image (1920x1080)
- `swimming-pool.jpg` - Pool/amenities image (800x600)  
- `outdoor-dining.jpg` - Dining/outdoor space image (800x600)

### SEO & Meta Tags
Update `index.html` to customize:
- Page title and description
- Open Graph images and content
- Structured data (JSON-LD)
- Contact information in structured data

## 🎨 Design System

The website uses a warm, farmhouse-inspired design system defined in:
- `src/index.css` - Color palette, gradients, shadows
- `tailwind.config.ts` - Extended Tailwind configuration
- `src/components/ui/button.tsx` - Button variants

### Color Palette
- **Primary**: Forest green (#2d5a3d)
- **Secondary**: Sage green 
- **Accents**: Warm terracotta
- **Backgrounds**: Cream and warm gradients

## 📞 Contact Forms

### Current Setup
The contact form is currently set up as a client-side form that:
1. Shows a success message
2. Opens WhatsApp with pre-filled message
3. Includes honeypot spam protection

### Connecting to Form Services

#### Option 1: Netlify Forms
1. Deploy to Netlify
2. Add `netlify` attribute to form:
   ```html
   <form netlify onSubmit={handleSubmit}>
   ```

#### Option 2: Formspree
1. Create account at formspree.io
2. Update form action:
   ```javascript
   const response = await fetch('https://formspree.io/f/YOUR_ID', {
     method: 'POST',
     body: formData
   });
   ```

#### Option 3: WhatsApp Only
The current setup already includes WhatsApp integration as fallback.

## 🚀 Deployment

### Static Hosting (Recommended)
```bash
# Build the project
npm run build

# Upload the 'dist' folder to:
# - Netlify (drag & drop)
# - Vercel (connect GitHub repo)
# - GitHub Pages
# - Any static hosting service
```

### Custom Domain
After deployment, connect your custom domain through your hosting provider's settings.

## 📱 Features

### Mobile-First Design
- Responsive layout optimized for mobile devices
- Sticky mobile action bar with call/WhatsApp/directions
- Touch-friendly interface

### Performance Optimizations
- Optimized images with lazy loading
- Minimal dependencies
- Static site generation ready
- Fast loading times

### SEO & Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- High contrast ratios
- Keyboard navigation support
- Structured data for search engines

### Conversion Optimization
- Clear call-to-action buttons
- Multiple contact methods
- Social proof ready (testimonials section)
- Trust signals (amenities, policies)

## 🛠 Technical Stack

- **React 18** - Component library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Lucide React** - Icon library
- **TypeScript** - Type safety

## 📊 Performance Targets

This website is optimized to achieve:
- **Performance**: ≥90 (Lighthouse)
- **Accessibility**: ≥95 (Lighthouse)  
- **SEO**: ≥95 (Lighthouse)
- **Mobile-friendly**: Full responsive design

## 🔧 Customization Tips

### Adding New Sections
1. Create components in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Follow the existing design system

### Modifying Packages
Edit the `packages` array in `src/pages/Index.tsx`:
```javascript
const packages = [
  {
    title: "Your Package",
    price: "₹X,XXX",
    features: ["Feature 1", "Feature 2"],
    // ... other properties
  }
];
```

### Changing Colors
Update the color palette in `src/index.css` under the `:root` section.

## 📞 Support

For technical support or customization help, contact the development team or refer to the component documentation in the codebase.

---

**Built with ❤️ for the hospitality industry**
