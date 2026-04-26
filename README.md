# Next.js Static Gallery

This repository is now a static gallery website built with Next.js.

## Available pages
- `/` — Home page
- `/gallery` — Gallery listing page
- `/gallery/[slug]` — Individual static gallery item pages

## Run locally
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

## Build
```bash
npm run build
```

The site is built using static rendering with `getStaticProps` and `getStaticPaths`.
# TechElite Academy - Professional Training Institute Website

A modern, responsive training institute website inspired by industry-leading educational platforms like Coursera, Udemy, Google, and LinkedIn Learning.

## 🎯 Features

### 1. **Modern Hero Section**
- Eye-catching headline and call-to-action buttons
- Animated gradient graphics
- Hero section inspired by Google's clean design philosophy

### 2. **Course Catalog**
- 6+ professional courses with detailed information
- Course cards with:
  - Instructor profiles with images
  - Course duration and student count
  - Star ratings and reviews
  - Pricing display
  - Easy enrollment buttons
- Grid layout that adapts to all screen sizes
- Inspired by Coursera's course card design

### 3. **Instructor Directory**
- Professional profiles for expert instructors
- Social media links (LinkedIn, Twitter, GitHub)
- Hover effects revealing social connections
- Rich bios with experience levels
- Design inspired by LinkedIn's profile cards

### 4. **Student Testimonials**
- Real student success stories
- 5-star rating system
- Student credentials and achievements
- Elegant testimonial cards with shadow effects

### 5. **Key Statistics**
- Animated counters for impressive metrics
- Number of active students
- Total courses available
- Success rate percentage
- Number of expert instructors
- Inspired by Udemy's trust-building stats section

### 6. **Contact & Inquiry System**
- Contact information with multiple channels
- Professional contact form with validation
- Address, phone, email, and business hours
- Google Maps integration ready
- Modern form styling with focus states

### 7. **Responsive Navigation**
- Fixed top navigation bar
- Mobile hamburger menu
- Smooth scroll navigation to sections
- Active link highlighting based on scroll position
- Touch-friendly mobile menu with swipe support

### 8. **Accessibility & Performance**
- Semantic HTML structure
- ARIA labels for screen readers
- Responsive design for all devices
- CSS animations and transitions
- Optimized color contrast
- Fast loading with systematic design

## 🎨 Design Inspiration

The website draws inspiration from leading companies:

### Google
- **Clean, minimalist design** - Plenty of whitespace and simple typography
- **Intuitive navigation** - Clear hierarchy and easy-to-find information
- **Focus on user experience** - Every element has a purpose

### Coursera
- **Professional course cards** - Displaying instructor, ratings, duration, and pricing
- **Trust indicators** - Number of students and reviews building credibility
- **Career-focused messaging** - Emphasizing skill development and advancement

### Udemy
- **Compelling statistics section** - Building confidence with large numbers
- **Diverse course offerings** - Multiple skill levels (Beginner, Intermediate, Advanced)
- **Student testimonials** - Real success stories from real learners

### LinkedIn Learning
- **Professional instructor profiles** - Building credibility with expert credentials
- **Social integration** - Easy connection to instructor social profiles
- **Corporate-friendly aesthetic** - Polished, business-oriented design

## 📱 Responsive Breakpoints

- **Desktop**: Full multi-column layouts, hover effects
- **Tablet** (768px): Optimized grid layouts, touch-friendly buttons
- **Mobile** (480px): Single-column layouts, hamburger menu, optimized spacing

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS variables, Flexbox, and Grid
- **JavaScript (Vanilla)** - No dependencies, pure JS for interactivity
- **Font Awesome Icons** - Professional icon library
- **Responsive Design** - Mobile-first approach

## 📁 File Structure

```
sitebuild/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality
└── README.md           # Documentation (this file)
```

## 🚀 Getting Started

### Opening the Website Locally

1. **Download/Clone the files** to your computer
2. **Open `index.html`** in any modern web browser
3. The website is fully functional without requiring a server

### Customization Guide

#### Update Logo & Business Name
```html
<!-- In index.html, find: -->
<span>TechElite Academy</span>
<!-- Change to your institute name -->
```

#### Update Colors
```css
/* In styles.css, modify :root variables: */
--primary-color: #667eea;      /* Main brand color */
--secondary-color: #764ba2;    /* Accent color */
--accent-color: #f5576c;       /* Highlight color */
```

#### Add Your Courses
```html
<!-- Add more course cards in the courses section -->
<div class="course-card">
    <!-- Copy existing card and modify content -->
</div>
```

#### Update Contact Information
```html
<!-- In contact section, update: -->
<p>123 Tech Street, Silicon Valley, CA 94025</p>
<p>+1 (555) 123-4567</p>
<p>info@techelite.academy</p>
```

## ✨ Key Sections

### 1. **Navigation Bar**
- Fixed positioning for always-accessible menu
- Smooth dropdown for mobile
- Active state indicator

### 2. **Hero Section**
- Large headlines capturing attention
- Multiple CTA buttons for different user intents
- Animated graphics for visual interest

### 3. **Features Section**
- Why choose this institute
- 4 key differentiators
- Icons and clear messaging

### 4. **Courses Area**
- Complete course discovery
- Easy filtering by level
- Clear pricing and instructor info

### 5. **Instructor Section**
- Build trust with expert profiles
- Social credentials visible
- Professional appearance

### 6. **Testimonials**
- Social proof from successful students
- Professional titles and company names
- Star ratings for credibility

### 7. **Statistics**
- Impressive numbers (animated)
- Quick trust-building metrics
- Eye-catching presentation

### 8. **Contact Section**
- Multiple contact methods
- Professional inquiry form
- Business hours and location

### 9. **Footer**
- Links to important pages
- Social media integration
- Legal and privacy links
- Copyright information

## 🎓 Professional Elements

1. **Branding** - Consistent color scheme and typography
2. **Trust Building** - Testimonials, stats, instructor profiles
3. **Clear CTA** - Multiple enrollment opportunities
4. **Social Proof** - Student counts, reviews, ratings
5. **Professional Photography** - Placeholder for real instructor images
6. **Accessibility** - Semantic HTML, ARIA labels
7. **Performance** - Optimized CSS and minimal JavaScript
8. **Mobile-First** - Works perfectly on all devices

## 🔧 JavaScript Features

- Mobile menu toggle with smooth animations
- Smooth scroll navigation to sections
- Form validation and submission handling
- Intersection Observer for scroll animations
- Counter animation for statistics
- Active link highlighting
- Touch swipe support for mobile users
- Keyboard navigation (Escape to close menu)

## 📊 Expected Performance

- Page Load Time: < 2 seconds
- Mobile Friendly: ✓ Fully responsive
- Accessibility Score: High (WCAG compliant)
- SEO Ready: ✓ Semantic HTML structure
- Browser Support: All modern browsers (Chrome, Firefox, Safari, Edge)

## 🔗 Integration Ready

This website is ready for:
- **CMS Integration** - Easy to adapt for WordPress, etc.
- **Database Connection** - Form submissions can connect to backend
- **Payment Processing** - Stripe/PayPal ready for course purchases
- **Learning Management System** - Can integrate with LMS platforms
- **Analytics** - Ready for Google Analytics, Mixpanel, etc.

## 📝 License

This website template is free to use and modify for your training institute.

## 💡 Tips for Success

1. **Replace placeholder images** with real instructor photos
2. **Add real testimonials** from actual students
3. **Update course descriptions** to match your offerings
4. **Customize colors** to match your brand
5. **Add contact form backend** for actual submissions
6. **Implement payment system** for course enrollment
7. **Add blog section** for SEO and thought leadership
8. **Consider adding live chat** for student support

---

**Created with ❤️ for aspiring educators and training institutes worldwide**
