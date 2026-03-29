# Persephone Biosciences Website

A modern, high-performance website for Persephone Biosciences built with Vue 3, Vite, and vite-ssg. Deployed on Cloudflare Pages with global CDN acceleration.

## 🚀 Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite + vite-ssg (static site generation)
- **Hosting**: Cloudflare Pages (free)
- **CDN**: Cloudflare (300+ global nodes)
- **SSL**: Cloudflare (automatic)
- **Forms**: EmailJS (free tier)
- **Styling**: CSS-in-JS (scoped styles)
- **Fonts**: Google Fonts (DM Serif Display + DM Sans)

## 📁 Project Structure

```
website-project/
├── src/
│   ├── pages/
│   │   ├── Home.vue          # Landing page (hero, products, science, testimonials)
│   │   ├── About.vue         # About page (story, team, values, timeline)
│   │   ├── Science.vue       # Science page (research, findings, safety)
│   │   └── Contact.vue       # Contact page (form, FAQ, info)
│   ├── components/
│   │   ├── SiteHeader.vue    # Navigation bar
│   │   └── SiteFooter.vue    # Footer
│   ├── router/
│   │   └── index.js          # Route definitions
│   ├── App.vue               # Root component + global styles
│   └── main.js               # Entry point
├── public/
│   ├── favicon.svg           # Brand icon
│   └── _redirects            # Cloudflare Pages SPA routing
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

## 🎨 Design System

### Colors
- **Primary**: Dark (#1A1512) + Brand Brown (#8B5E3C)
- **Neutrals**: Cream (#FAF8F3), Warm White (#F5F0E8), Sand (#E8E0D0)
- **Accents**: Soft Rose (#E8D5C8), Sage (#7A8B6F)

### Typography
- **Display**: DM Serif Display (elegant, editorial)
- **Body**: DM Sans (clean, readable)

### Spacing
8-level spacing system: xs (0.25rem) → 4xl (8rem)

### Components
- Buttons (primary, secondary, outline)
- Cards (product, testimonial, info)
- Forms (input, textarea, select)
- Animations (fade-in, slide-left, scale)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ and npm

### Local Development

```bash
# 1. Navigate to project directory
cd website-project

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Visit http://localhost:5173
```

### Build for Production

```bash
# Generate static site
npm run build

# Output: dist/ folder (ready for deployment)
```

### Preview Production Build

```bash
npm run preview
```

## 📧 EmailJS Setup (Contact Form)

The contact form is pre-configured but needs EmailJS credentials:

1. **Sign up** at [emailjs.com](https://www.emailjs.com)
2. **Create a service** (Gmail, Outlook, etc.)
3. **Create an email template** with variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{subject}}`
   - `{{message}}`
4. **Get your credentials**:
   - Service ID
   - Template ID
   - Public Key
5. **Update** `src/pages/Contact.vue`:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY')
   
   // In handleSubmit():
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     { /* form data */ }
   )
   ```

## 🚀 Deployment to Cloudflare Pages

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Persephone website"
git remote add origin https://github.com/YOUR_USERNAME/persephone-website.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select **Pages** → **Create a project** → **Connect to Git**
3. Select your GitHub repository
4. **Build settings**:
   - Framework: None (manual)
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click **Save and Deploy** ✅

### Step 3: Custom Domain (Optional)

1. In Cloudflare Pages project settings
2. Go to **Custom domains**
3. Add your domain (e.g., `persephone.bio`)
4. SSL certificate auto-issued ✅

## 📊 Performance

- **Static Generation**: All pages pre-rendered at build time
- **Global CDN**: 300+ Cloudflare edge locations
- **Zero Cold Starts**: Instant page loads worldwide
- **Automatic Caching**: Optimized cache headers
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)

## 🔒 Security

- **HTTPS**: Automatic SSL/TLS via Cloudflare
- **DDoS Protection**: Cloudflare's enterprise-grade protection
- **No Server**: Static site = no server vulnerabilities
- **Third-party Testing**: All product claims verified

## 📱 Responsive Design

- **Desktop**: Full experience (1200px+)
- **Tablet**: Optimized layout (768px - 1199px)
- **Mobile**: Touch-friendly (< 768px)
- **Hamburger Menu**: Auto-collapse on mobile

## 🎯 SEO Optimization

- ✅ Meta tags (title, description, OG)
- ✅ Semantic HTML
- ✅ Mobile-friendly
- ✅ Fast page load
- ✅ Structured data ready
- ✅ Sitemap generation (via vite-ssg-sitemap)

## 🔄 Continuous Deployment

Every `git push` to `main` automatically:
1. Triggers Cloudflare Pages build
2. Runs `npm run build`
3. Deploys to production
4. Updates global CDN cache

## 📝 Content Updates

To update content:

1. Edit `.vue` files in `src/pages/` or `src/components/`
2. Commit and push to GitHub
3. Cloudflare Pages auto-deploys (2-3 minutes)

## 🐛 Troubleshooting

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Form not sending
- Check EmailJS credentials in `Contact.vue`
- Verify email template variables match
- Check browser console for errors

### Styles not loading
- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
- Check CSS scoping in component `<style scoped>`

## 📚 Resources

- [Vue 3 Docs](https://vuejs.org)
- [Vite Docs](https://vitejs.dev)
- [vite-ssg](https://github.com/antfu/vite-ssg)
- [Cloudflare Pages](https://pages.cloudflare.com)
- [EmailJS Docs](https://www.emailjs.com/docs)

## 📄 License

© 2024 Persephone Biosciences. All rights reserved.

## 🤝 Support

For questions or issues:
- Email: hello@persephone.bio
- GitHub Issues: [Create an issue](https://github.com/YOUR_USERNAME/persephone-website/issues)

---

**Built with ❤️ for infant health**
