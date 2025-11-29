# Odoo - Frontend (Landing Page)
`https://ca2los.github.io/odoo/`

[***This project***](https://ca2los.github.io/odoo/) is a pixel-inspired implementation of an Odoo landing-page using `HTML5`, `SCSS`, `Bootstrap 5.3` and 
`Vanilla JS`. The goal was to reproduce the provided mockup while keeping the code clean, modular, and easy to extend.

## Tech Stack
- `HTML5`: Semantic structure and objects basics
- `SCSS`: Custom them, reusable utilities, and component-level styling
- `Bootstrap 5.3`: Via CDN
  - Grid system and responsive layout
  - Utilities (spacing, colors, flex, typography, borders, etc.)
  - Components (navbar, buttons, cards, accordions, badges, progress bars, etc.)
- `Javascript (ES6)`: Small behavior enhancements
  - Mobile navbar (auto-close after clicking a menu item)
  - Bootstrap accordion (via Bootstrap bundle-js)
---
## Project Structure
```text
.
├── index.html
├── assets
│   ├── css
│   │   └── styles.css          # Compiled SCSS
│   ├── scss
│   │   └── styles.scss         # Custom theme & components
│   ├── img/*                   # Logos, illustrations and icons
│   └── js
│       └── custom-script.js    # Navbar behavior
```
## Highlights
- Header & Navigation:
  - Applied `fixed-top` navbar for a **sticky header** on scroll
  - Mobile-friendly **hamburger** using `collapse`
  - Custom JS that ensures the menu **closes automatically** after clicking an option
  - Subtle styles to match the original design
- Credit Card:
  - Two-column hero layout Bootstrap grid
  - Custom credit card component
    - Pure `HTML` and `SCSS` (no assets) for the credit card
    - Gradient background with radial-dots pattern
    - Uses a complementary font for the credit card information
  - Attached the missing SVG logos
- Blocks
  - Multiple blocks combination
  - Overlapping cards with `position-relative` and `position-absolute`
  - Custom Bootstrap progress bar
  - Small CTA-buttons for *"Play video"* messages
  - Custom SVG dotted curved lines
- Award Cards
  - Static row of cards with grid and rows
  - Reusable hover effect for elevation
- Accordion
  - Two-column accordion section
  - Card-like appearance to match the original mockup
  - Replaces default arrow for `+` SVG icon
  - Functional accordion 
  - Independent behaviors
- Footer
  - Rows for "Documentation" and "Purchase"
---
## Custom JS

`assets/js/custom-script.js`
- The script listens for clicks on `.navbar-nav .nav-link`.
- When in mobile, the hamburger is visible and calls Bootstrap's `Collapse API` to hide the navbar after a link is clicked.
```javascript
document.addEventListener('DOMContentLoaded', () => {
    const navbarCollapse = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    if (!navbarCollapse || !navbarToggler) return;

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            const togglerVisible = window.getComputedStyle(navbarToggler).display !== "none";
            if (!togglerVisible) return;
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, {toggle: false});
            bsCollapse.hide();
        })
    })
});
```
---
## Responsive
- Uses the Bootstrap's columns `col-*` and rows `row-*` with `flex` utilities.
- Spacing between objects with `gap`, `mt-*`, `pt-*`, and responsive variants like `mt-lg-0`.