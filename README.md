# Star Look Unisex Salon — Website

A static, production-ready website for **Star Look Unisex Salon**
(`starlookunisexsalon.com`). Built with plain HTML, CSS and JavaScript
only — no build tools, no frameworks, no backend.

---

## 1. Project Overview

This is a single-page site with the following sections, in order:

1. Header (sticky, with mobile menu)
2. Hero
3. About
4. Services
5. Editorial statement
6. Special offers
7. Gallery
8. Why Star Look
9. Contact / booking CTA
10. Footer
11. Floating WhatsApp button

The design uses a warm ivory → champagne → peach → cocoa gradient
system, Playfair Display for headings and Inter for body text.

---

## 2. Folder Structure

```
star-look-salon/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

---

## 3. How to Run Locally (assumes a brand-new laptop)

1. **Install VS Code**: download from https://code.visualstudio.com and
   install it like any normal app.
2. **Install Git** (optional, only needed for deployment via GitHub):
   https://git-scm.com/downloads
3. **Open the project folder**: in VS Code, go to `File → Open Folder`
   and select the `star-look-salon` folder.
4. **Install the "Live Server" extension** (optional but recommended):
   in VS Code, click the Extensions icon on the left sidebar, search
   for "Live Server" by Ritwick Dey, and click Install.
5. **Run the website**:
   - With Live Server: right-click `index.html` in the file list and
     choose "Open with Live Server". Your browser opens automatically.
   - Without Live Server: just double-click `index.html` and it will
     open directly in your browser. Everything will still work.
6. **Make changes**: edit any file, save it, then refresh the browser
   tab to see the update.

No Node.js, npm, or build step is required at any point.

---

## 4. How to Replace Images

All images live in `assets/images/`. The current files are soft
gradient placeholders so the layout never looks broken — replace them
with real salon photography whenever you have it.

| File | Used for |
|---|---|
| `hero.webp` | Hero image (top of page) |
| `about.webp` | About section image |
| `gallery-01.webp` … `gallery-05.webp` | Gallery section |

To replace an image:

1. Export your photo as `.webp` (or `.jpg`/`.png` — just also update
   the file extension in `index.html` if you don't convert to webp).
2. Name it exactly the same as the file you're replacing.
3. Drop it into `assets/images/`, overwriting the old file.

**Recommended sizes:**

- Hero: 1600–2000px wide
- Gallery: 1000–1400px wide
- Format: WebP preferred, AVIF optional
- Quality: approximately 75–85%

Free tools to compress/convert images: https://squoosh.app or
https://tinypng.com.

---

## 5. How to Update Salon Details

Open `js/script.js` and edit the `salonConfig` object at the very top
of the file:

```javascript
const salonConfig = {
  name: "Star Look Unisex Salon",
  phone: "UPDATE_PHONE",
  whatsapp: "UPDATE_WHATSAPP",
  address: "UPDATE_ADDRESS",
  maps: "UPDATE_GOOGLE_MAPS",
  instagram: "UPDATE_INSTAGRAM",
  facebook: "UPDATE_FACEBOOK",
  openingHours: "UPDATE_OPENING_HOURS"
};
```

Replace every `UPDATE_*` placeholder:

- `phone`: e.g. `"+919876543210"`
- `whatsapp`: digits only, with country code, e.g. `"919876543210"`
- `maps`, `instagram`, `facebook`: full URLs

These values automatically populate the footer, the floating WhatsApp
button, the "Book via WhatsApp" and "Call Now" buttons, and the
structured data in `index.html`.

You should also fill in the same details inside the `<script
type="application/ld+json">` block near the top of `index.html`
(the `telephone`, `address`, `openingHours` and `sameAs` fields) so
search engines pick them up correctly.

---

## 6. How to Update Offers

Still inside `js/script.js`, edit the `offers` array:

```javascript
const offers = [
  {
    name: "Honey Waxing",
    description: "Full Arms + Underarms + Full Legs",
    originalPrice: "₹900",
    offerPrice: "₹599"
  }
];
```

Add, remove or edit entries freely — the offers grid renders
automatically from this array. Leave a price as
`"PRICE TO BE UPDATED"` if you don't have the real number yet;
never guess a price.

---

## 7. How to Update Services

Edit the `services` array in `js/script.js`:

```javascript
const services = [
  { number: "01", name: "Hair", description: "Cut, style, colour and treatments." }
];
```

---

## 8. How to Update Social Links

Social and contact links all come from `salonConfig` (see section 5
above) — update them there once and every link across the site
(header, footer, floating button) updates automatically.

---

## 9. How to Change Colors

All colors and gradients are defined as CSS variables at the top of
`css/style.css`:

```css
:root {
  --ivory: #FBF8F3;
  --champagne: #CDB28E;
  --cocoa: #2B2521;
  /* ... */

  --gradient-main: linear-gradient(135deg, #FBF8F3 0%, #F4EDE4 45%, #E9DED3 100%);
  --gradient-accent: linear-gradient(135deg, #CDB28E 0%, #E7D1A8 50%, #B99768 100%);
  /* ... */
}
```

Change a variable's hex value once and it updates everywhere it's
used across the site.

---

## 10. How to Deploy

No server or database is required — any static hosting provider
works. Three easy, free options:

**GitHub Pages**
1. Create a free GitHub account and a new repository.
2. Upload the `star-look-salon` folder contents to the repository
   (via the GitHub website's "Add file → Upload files", or with Git).
3. In the repository, go to `Settings → Pages`, choose the `main`
   branch and `/ (root)` folder, then save.
4. GitHub gives you a live URL within a minute or two.

**Cloudflare Pages**
1. Create a free Cloudflare account.
2. Go to `Workers & Pages → Create → Pages` and connect your GitHub
   repository, or drag-and-drop the folder directly.
3. Deploy — Cloudflare gives you a live URL immediately.

**Netlify**
1. Create a free Netlify account.
2. Drag and drop the `star-look-salon` folder onto the Netlify
   dashboard ("Deploy manually").
3. Netlify gives you a live URL immediately.

### Connecting the domain

Once `starlookunisexsalon.com` is purchased from a domain registrar,
each of the above hosts has a "Custom domains" section in its
dashboard where you add the domain and follow the on-screen DNS
instructions (the exact records depend on which host you pick, so
follow the instructions shown in your chosen host's dashboard at the
time — don't rely on hard-coded DNS values from this README).

---

## Notes

- No business details (phone, address, social handles, opening
  hours, pricing) were invented — every unknown value is a clearly
  marked `UPDATE_*` or `PRICE TO BE UPDATED` placeholder in
  `js/script.js` and `index.html`.
- All gallery/hero/about images are neutral gradient placeholders in
  the brand palette — swap them for real photography per section 4.
