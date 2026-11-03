# Dilip Kumar Mahato - personal academic website

A static website. No build step and no installation: open `index.html` in a browser.

## Files

```
portfolio-website/
|-- index.html            home page
|-- tools.html            landing page for the free CV Builder
|-- cv-builder.html       the CV Builder itself, Academic CV Studio (self-contained)
|-- 404.html              "page not found" page (self-contained)
|-- css/style.css         styling and animations (shared by index.html and tools.html)
|-- js/script.js          home page: animations, menu, links, contact form
|-- js/tools.js           CV Builder landing page: menu and scroll effects
|-- images/
|   |-- iitr-building.jpg hero background and About picture (IIT Roorkee)
|   |-- nepal/            four Nepal photographs, each used once on the home page
|   |-- logo.svg          pinwheel logo with blackletter D (nav bar)
|   |-- favicon.svg       adaptive favicon (switches between light and dark mode)
|   |-- favicon.ico, favicon-32.png, favicon-dark.ico, favicon-32-dark.png
|   `-- apple-touch-icon.png, icon-192/512.png, icon-192/512-dark.png
|-- site.webmanifest      home-screen icon settings
|-- robots.txt
`-- README.md
```

## Things to personalise (search the files for `EDIT:`)

1. **Contact form** - create a free form at https://formspree.io and paste its ID into `FORMSPREE_ID` at the top of `js/script.js`. Until then the form opens WhatsApp with the visitor's message. No email address appears anywhere on the site.
2. **Links** - fill in `LINKS` at the top of `js/script.js` (Scholar, ResearchGate, Medium, WhatsApp, phone). An icon shows only when its link is set, so there are no dead links.
3. **Blog** - add entries to `BLOG_POSTS` in `js/script.js`. The Blog section stays hidden while the list is empty.
4. **Colours** - all colours are CSS variables at the top of `css/style.css` (`:root`).
5. **Hero photo** - replace `images/iitr-building.jpg` with another wide image (about 1600 px) to change the background.
6. **Nepal photos** - replace a file in `images/nepal/` with another photo of the same name (about 1600-1900 px wide). Only use photos you have the right to publish.

## Publishing

Easiest: upload the flat files from the GitHub-ready package. With this editable source, upload the whole folder (keep css/, js/ and images/) to GitHub Pages, Netlify or Cloudflare Pages.

The CV Builder (`cv-builder.html`) keeps visitors' data in their own browser; its sample CV is a neutral template.

