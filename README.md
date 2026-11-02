# Dilip Kumar Mahato - Personal Website

A static website. No build step and no installation: open `index.html` in a browser.

## Files

```
portfolio-website/
|-- index.html            page content
|-- 404.html              "page not found" page
|-- css/style.css         all styling and animations
|-- js/script.js          animations, menu, project filter, contact form
|-- images/
|   |-- iitr-building.jpg hero background (James Thomason Building, IIT Roorkee)
|   |-- nature.jpg      landscape used in the scenic band, contact backdrop and footer
|   |-- logo.svg        four-petal swirl logo (blackletter D in a pinwheel; nav bar and hero placeholder)
|   |-- favicon.svg     adaptive favicon: switches itself between light and dark mode
|   |-- favicon.ico / favicon-32.png (light) and favicon-dark.ico / favicon-32-dark.png (dark)
|   |-- apple-touch-icon.png, icon-192/512(.png, -dark.png)  home-screen icons
|   |-- icon-192.png, icon-512.png   home-screen icons
|   `-- photo.jpg         (optional) your portrait, see below
|-- site.webmanifest      home-screen icon settings
|-- robots.txt, sitemap.xml
`-- README.md
```

## Things to personalise (search the files for `EDIT:`)

1. **Portrait** - save a square photo as `images/photo.jpg`. The circular portrait (with rays) only appears in the hero once this file exists; until then the building photo is fully visible.
2. **Contact form** - create a free form at https://formspree.io, copy its ID and paste it into `FORMSPREE_ID` at the top of `js/script.js`. Until then the form only shows a short notice. No email address appears anywhere on the site.
3. **Social links** - in the "Find me online" section replace the GitHub, Scholar, ResearchGate and Medium placeholders, or delete the ones you do not use.
4. **Projects and blog** - replace the "Add yours" and "Blog post title" placeholder cards in `index.html`.
5. **Colours** - all colours are CSS variables at the top of `css/style.css` (`:root`).
6. **Hero photo** - replace `images/iitr-building.jpg` with another wide image (about 1600 px) to change the background.

## Publishing

Upload the whole folder (keep the structure) to any static host, for example GitHub Pages, Netlify or Cloudflare Pages, then point your domain (mahatodilip.com.np) at it.

7. **Nature photo** - replace `images/nature.jpg` (about 1800 px wide) to change the scenic band, contact and footer backgrounds. Only use a photo you have the right to publish.
