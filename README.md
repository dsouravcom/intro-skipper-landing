<div align="center">

<img src="assets/icons/logo.png" alt="Intro Skipper Logo" width="128" height="128">

# Intro Skipper Landing Page

A modern, responsive landing page for the Intro Skipper browser extension - automatically skip intros, credits, and ads across streaming platforms.

### 📥 Download & Install the Extension

| Browser                                                                                                         | Download Link         | Status      |
| --------------------------------------------------------------------------------------------------------------- | --------------------- | ----------- |
| ![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)     | [Chrome Web Store](https://chromewebstore.google.com/detail/cdmmdficgnfnennlmjieepedoamgppgk) | ✅ Available |
| ![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=firefoxbrowser&logoColor=white) | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/universal-intro-skipper/)  | ✅ Available |

</div>

## 🌟 Features

-   **Responsive Design**: Optimized for desktop, tablet, and mobile devices
-   **Dynamic Browser Detection**: Automatically detects user's browser and shows relevant download links
-   **GitHub Integration**: Live star count display from GitHub API
-   **Multi-page Structure**: Home, Contact, Privacy Policy, and 404 pages
-   **Dark/Light Mode**: Automatic theme switching based on user preference
-   **SEO Optimized**: Complete meta tags, Open Graph, and structured data

## 📁 Project Structure

```
intro-skipper-landing/
├── index.html          # Main landing page
├── contact.html        # Contact form with Formspree integration
├── privacy.html        # Privacy policy page
├── 404.html           # Custom 404 error page
├── _redirects         # Netlify routing configuration
├── favicon.ico        # Website favicon
├── assets/
│   ├── site.webmanifest
│   └── icons/
│       ├── logo.png
│       ├── favicon.svg
│       ├── favicon-96x96.png
│       ├── apple-touch-icon.png
│       ├── Chrome.svg
│       ├── Firefox.svg
│       ├── Edge.svg
│       ├── web-app-manifest-192x192.png
│       └── web-app-manifest-512x512.png
└── README.md          # This file
```

## 🚀 Key Components

### Dynamic Browser Detection

-   Automatically detects Chrome, Firefox, Edge, or defaults to Chrome
-   Updates download buttons with browser-specific icons and links
-   Hides current browser from "Also available on" sections

### GitHub Stars Integration

-   Fetches live star count from GitHub API
-   Displays in navbar across all pages
-   Graceful fallback if API fails

### Contact Form

-   Powered by Formspree for form submissions
-   Success/error message handling
-   Responsive design with smooth animations

### SEO & Performance

-   Complete meta tags for social media sharing
-   JSON-LD structured data for search engines
-   Optimized images and lazy loading
-   Fast loading with CDN resources

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices and browsers
5. Submit a pull request

## 📞 Support

For issues or questions:

-   Open an issue on GitHub
-   Contact via the website's contact form
-   Email: [Your contact email]

---

**Made with ❤️ for streamers everywhere**
