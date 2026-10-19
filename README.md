# KM — Ethiopian Wedding Planner

> **Your Culture. Our Expertise.**

A premium, responsive website for KM, an Ethiopian wedding-planning brand. Built with React, TypeScript, Vite, and Tailwind CSS.

---

## Quick Start

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

The dev server runs at `http://localhost:5173/`.

---

## Pages

| Route | Page |
|---|---|
| `/` | Homepage |
| `/packages` | All Packages overview |
| `/packages/traditional` | Ethiopian Traditional Wedding packages |
| `/packages/muslim` | Muslim Wedding packages |
| `/packages/christian` | Christian Wedding services |
| `/packages/modern` | Modern Wedding services |
| `/packages/destination` | Destination Wedding services |
| `/packages/civil` | Civil Wedding services |
| `/packages/custom` | Custom Wedding Planning |
| `/gallery` | Filterable photo gallery with lightbox |
| `/about` | About KM |
| `/contact` | Contact page |
| `/plan` | Full wedding inquiry form |
| `*` | Custom 404 page |

---

## Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool and dev server
- **Tailwind CSS v4** — Utility-first styling
- **React Router v7** — Client-side routing

---

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, SEOHead, ScrollToTop
│   ├── ui/            # PackageCard, Lightbox
│   └── forms/         # InquiryForm
├── data/
│   └── packages.ts    # Single source of truth for all content
├── pages/             # All route pages
├── types/             # TypeScript interfaces
├── App.tsx            # Router and layout
├── main.tsx           # Entry point
└── index.css          # Tailwind + design system
```

---

## Wedding Package Data

Package data is stored in `src/data/packages.ts`. This file contains:

- **Traditional Wedding** — 4 tiers: ቤተሰብ (Beteseb), ጓድ (Guad), አብሮ አደግ (Abro Adeg), እንግዳ (Engda)
- **Muslim Wedding** — 4 tiers with the same structure
- **Christian, Modern, Destination, Civil, Custom** — Service descriptions

To update packages, edit this file directly. No prices are shown until configured — all packages display "Request a Quote."

---

## Inquiry Form — Backend Integration

The inquiry form currently runs in **development mode**:

- Submissions are logged to the browser console
- Data is saved to `localStorage` under the key `km_last_inquiry`
- A "Demo Mode" banner is displayed

### To connect a real backend:

**Option A: EmailJS (no backend needed)**
1. Create an account at [emailjs.com](https://www.emailjs.com)
2. Set up a service and email template
3. Install: `npm install @emailjs/browser`
4. Update `InquiryForm.tsx` to call `emailjs.send()` instead of the localStorage fallback

**Option B: Formspree**
1. Create a form at [formspree.io](https://formspree.io)
2. Change the form `onSubmit` to POST to your Formspree endpoint

**Option C: Custom API**
1. Create a backend endpoint (Express, Supabase, etc.)
2. Update the form submission handler to `fetch()` your API
3. Store submissions in a database

> ⚠️ Never put API keys or secrets in frontend code. Use environment variables and server-side proxies.

---

## Images

All images are stored in `public/images/` and are AI-generated placeholders. To replace them:

1. Add your images to `public/images/`
2. Update the filenames in `src/data/packages.ts`
3. Images referenced: `hero-wedding.jpg`, `traditional-wedding.jpg`, `muslim-wedding.jpg`, `christian-wedding.jpg`, `modern-wedding.jpg`, `destination-wedding.jpg`, `civil-wedding.jpg`

> These are sample images for demonstration purposes. They are not photographs of actual KM clients.

---

## Customization

### Colors
Edit the `@theme` block in `src/index.css`:
- Ivory: `#F7F3EB`
- Burgundy: `#5C2736`
- Gold: `#B99A62`
- Charcoal: `#292724`

### Fonts
Loaded from Google Fonts in `index.html`:
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Contact Information
Contact details are placeholder. Update them in:
- `src/components/layout/Footer.tsx` — Social links
- `src/pages/ContactPage.tsx` — Contact information

---

## Browser Support

- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Responsive: Mobile, Tablet, Desktop

---

## License

This project is proprietary. All rights reserved by KM Wedding Planner.
