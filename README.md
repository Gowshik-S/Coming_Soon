# Vortex Infinite - Project Structure

This project has been organized into two separate folders with different purposes:

## 📁 Project Structure

```
Coming_Soon/
├── maintenance/          # Maintenance page when site is down
│   └── index.html        # Maintenance landing page
├── coming_soon/          # Coming Soon landing page
│   ├── index.html        # Main coming soon page
│   ├── styles.css        # Styling for coming soon page
│   ├── script.js         # JavaScript functionality
│   └── vortex-logo.png   # Logo (reference from parent)
└── root/                 # Original files (reference)
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── sih.html
    └── vortex-logo.png
```

## 🚀 Folders Overview

### 1. **maintenance/** - Maintenance Page
Used when your website is undergoing maintenance or is temporarily down.
- **Location:** `c:\Coming_Soon\maintenance\`
- **Files:**
  - `index.html` - Shows a professional maintenance message
  - Includes contact information (email & phone)
  - Displays expected uptime information
  - Responsive and user-friendly

**Features:**
- Settings icon with spinning animation
- Status indicator showing expected downtime
- Direct contact links
- Clean, minimal design

---

### 2. **coming_soon/** - Coming Soon Landing Page
Professional coming soon page with countdown timer and email subscription.
- **Location:** `c:\Coming_Soon\coming_soon\`
- **Files:**
  - `index.html` - Main page structure
  - `styles.css` - All styling and animations
  - `script.js` - Countdown timer and interactions
  - Font Awesome icons (CDN)

**Features:**
- ⏱️ **Countdown Timer** - Live countdown to launch date
- 📧 **Email Subscription** - Capture emails for launch notification
- ✨ **Animated Background** - Starfield with twinkling effects
- 🎨 **Modern Design** - Gradient text, glass-morphism effects
- 📱 **Responsive** - Works on all devices
- 🔊 **Social Links** - GitHub, LinkedIn, Twitter, Instagram
- ⚡ **Loading Animation** - Professional loading overlay
- 🎯 **Features Section** - Showcase what's coming
- 📞 **Contact Information** - Email and phone contact
- 🎪 **Interactive Elements** - Hover effects and animations

---

## 🔧 How to Use

### For Maintenance Mode:
1. Navigate to `/maintenance/index.html`
2. Update the email and phone number as needed
3. Customize the maintenance message
4. The page will automatically show current year in footer

### For Coming Soon Page:
1. Navigate to `/coming_soon/index.html`
2. The countdown timer automatically starts from current date + 30 days
3. Update launch date in `script.js` if needed:
   ```javascript
   const launchDate = new Date();
   launchDate.setDate(launchDate.getDate() + 30); // Change 30 to desired days
   launchDate.setHours(12, 0, 0, 0); // Set to noon
   ```
4. Replace social media links in the HTML
5. Customize contact information

---

## 📝 Customization

### Colors & Theme (in styles.css):
```css
:root {
    --primary-color: #6366f1;      /* Main color */
    --secondary-color: #8b5cf6;    /* Secondary */
    --accent-color: #06b6d4;       /* Accent */
    --text-primary: #ffffff;
    --text-secondary: #e2e8f0;
    --text-muted: #94a3b8;
    --background-dark: #0f172a;
    --success-color: #10b981;
}
```

### Update Launch Date (in script.js):
```javascript
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);
launchDate.setHours(12, 0, 0, 0);
```

### Update Social Links (in index.html):
```html
<a href="YOUR_GITHUB_URL" class="social-link" data-platform="github">
    <i class="fab fa-github"></i>
</a>
```

---

## 📦 Resources Used

- **Font Awesome Icons** - CDN for social and UI icons
- **Google Fonts** - Poppins and Inter fonts (loaded via fallback)
- **Vanilla JavaScript** - No dependencies required
- **CSS3** - Animations and effects

---

## 🎨 Features Breakdown

### Coming Soon Page:
1. **Loading Overlay** - Shows during page load (2 seconds)
2. **Hero Section** - Large animated logo and tagline
3. **Countdown** - Interactive timer with days, hours, minutes, seconds
4. **Features Grid** - 4 feature cards showcasing what's coming
5. **Contact Section** - Email and phone contact
6. **Email Signup** - Subscribe to launch notifications
7. **Social Icons** - Links to social media profiles

### Maintenance Page:
1. **Logo Section** - Company branding
2. **Maintenance Message** - Clear communication
3. **Status Indicator** - Expected uptime
4. **Contact Links** - Email and phone

---

## 📱 Responsive Design

Both pages are fully responsive:
- **Desktop** - Full experience with hover effects
- **Tablet** - Optimized layout (768px breakpoint)
- **Mobile** - Single column layout, touch-friendly (480px breakpoint)

---

## 🔒 Local Storage

The coming soon page uses browser's localStorage to store email subscriptions:
```javascript
// Retrieve emails
const emails = JSON.parse(localStorage.getItem('emailSubscriptions'));

// View in browser console
console.log('Email subscriptions:', emails);
```

---

## 📞 Support

For questions or customizations needed, refer to the HTML/CSS/JS files directly. Each section is well-commented for easy understanding.

---

**Created:** October 19, 2025
**Last Updated:** October 19, 2025
