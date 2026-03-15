# Galaxy Web Dev 🌌

A stunning, professional web development portfolio website featuring a live animated galaxy background with multilingual support (English, French, Arabic).

## Features

✨ **Live Galaxy Background** - Animated starfield with interactive particles
✨ **Responsive Design** - Works perfectly on all devices
✨ **Multilingual Support** - English, French, and Arabic with RTL support
✨ **Smooth Page Transitions** - Seamless navigation between pages
✨ **Modern UI** - Beautiful gradient effects and glass-morphism design
✨ **Space-Themed** - Cosmic nebulas and glowing effects throughout

## Pages

- **Home** (`index.html`) - Hero section and introduction
- **Services** (`services.html`) - Web development services offered
- **Why Us** (`why-us.html`) - Reasons to choose Galaxy Web Dev
- **About** (`about.html`) - Company information and statistics
- **Contact** (`contact.html`) - Contact information (WhatsApp & Instagram)

## Tech Stack

- HTML5
- CSS3 (with animations and gradients)
- JavaScript (Canvas API for galaxy animation)
- Font Awesome Icons
- Responsive Design

## Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. No build process required - it's pure HTML/CSS/JavaScript

```bash
# Simply serve the files with any HTTP server
# Python 3:
python -m http.server 8000

# Or use VS Code Live Server extension
```

## GitHub Pages Hosting

### Option 1: User/Organization Site

1. Create a repository named `username.github.io`
2. Clone this project into that repository
3. Push to GitHub
4. Site will be live at `https://username.github.io`

### Option 2: Project Repository

1. Create any repository (e.g., `galaxy-web-dev`)
2. Clone this project into that repository
3. Go to **Settings → Pages**
4. Under "Source", select `main` branch and `/root` folder
5. Site will be live at `https://username.github.io/galaxy-web-dev`

## Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Initialize git if not already done
git init
git add .
git commit -m "Initial commit - Galaxy Web Dev website"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

## Customization

- Update navigation links in all HTML files
- Modify content in the data attributes for translations
- Change colors in `css/style.css` (CSS variables in `:root`)
- Add your own WhatsApp number and Instagram handle in `contact.html`
- Replace social media links in footers
- Customize service descriptions and statistics

## File Structure

```
galaxy-web-dev/
├── index.html           # Home page
├── services.html        # Services page
├── why-us.html         # Why Choose Us page
├── about.html          # About page
├── contact.html        # Contact page
├── css/
│   └── style.css       # All styling
├── js/
│   └── script.js       # Galaxy animation & language switcher
└── README.md           # This file
```

## Features in Detail

### Animated Galaxy Background
- Real-time particle system
- Interactive mouse tracking
- Twinkling star effects
- Rotating nebula clouds
- 60 FPS performance

### Multilingual Support
- Switch between EN/FR/AR
- Language preference saved in browser
- RTL support for Arabic
- All content fully translated

### Smooth Transitions
- 0.6s fade-in animations on page load
- Consistent navigation experience
- Fast loading times

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Information

- **WhatsApp**: +213 673 20 25 03
- **Instagram**: @galaxyweb.dev

## License

Free to use and modify for your portfolio.

---

**Made with ❤️ by Galaxy Web Dev**
