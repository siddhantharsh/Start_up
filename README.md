# Start_up — Aesthetic Personal Startpage

A clean and cozy custom startpage for your browser that replaces the default new tab. Features dynamic greetings and organized links for a peaceful and productive workflow.

### Key Features:
- **Smart Greetings** that change by time of day, day of the week, and holidays
- **Organized Links** in categories like Work, Tools, and Personal
- **Minimalist Design** with smooth animations and loading effects
- **Lightweight & Fast** — built with pure HTML, CSS, and JavaScript
- **Customizable** - Easy to modify colors, links, and layout

### Quick Setup:

#### As a Custom New Tab:
1. Download or clone this repository
2. Edit `js/links.js` to add your own links
3. Use a browser extension like *Custom New Tab URL* (Chrome) or *New Tab Override* (Firefox)
4. Set the URL to: https://my-hometab.web.app

#### Or Deploy Online:
- **GitHub Pages**: Fork this repo and enable GitHub Pages
- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Deploy directly from GitHub

### Customization:
- **Links**: Edit `js/links.js` to add your favorite websites
- **Name**: Change "シッダント" in `index.html` to your name
- **Styling**: Modify CSS files in the `css/` directory
- **Greetings**: Customize messages in `js/greeting.js`

### Project Structure:
```
├── index.html          # Main HTML file
├── css/               # Stylesheets
│   ├── body.css       # Main layout and body styles
│   ├── content.css    # Content section styles
│   ├── fonts.css      # Font definitions
│   └── loader.css     # Loading animation styles
├── js/                # JavaScript functionality
│   ├── greeting.js    # Dynamic greeting system
│   ├── links.js       # Link categories and generation
│   └── loader.js      # Page loading animations
├── Fonts/             # Custom font files
└── assets/            # Additional assets
```

### Technologies:
- Pure HTML5
- CSS3 with modern features
- Vanilla JavaScript
- No build tools or dependencies required

Easy to customize. No dependencies or build tools required.

**Live Demo:** [https://my-hometab.web.app](https://my-hometab.web.app)

---