# High-fidelity design notes (desktop + mobile)

Use placeholder copy/images until final assets arrive. The notes below translate directly into CSS variables/components.

## Global
- Background: parchment paper texture (`assets/textures/paper.svg`) layered over `--color-cream` gradient.
- Typography: H1/H2 -> `--font-display`; body -> `--font-body`; accent labels -> `--font-script` in small caps.
- Buttons: pill shape, gradient fill `linear-gradient(135deg, #d7b15a, #b96c6b)`, shadow `var(--shadow-glow)`.
- Section wrapper: max width `var(--max-content-width)` centered with organic border radius using `clip-path: ellipse` patterns.

## Hero (Desktop)
- Full viewport minus nav, paper texture background with overlayed subtle moving folk pattern (CSS mask).
- Central egg frame: gradient border (#f8f1e3 to #d7b15a), inside tinted burgundy gradient. Placeholder name in `--font-display` 72px, tagline 24px, CTA button + "scroll" chevron.
- Floating vertical nav on right: pill with dots; active dot glows gold.
- Mobile: egg frame scales to 70vw width, nav converts to top pill with section labels.

## About
- Two-column layout; left column 45% width card with placeholder portrait image inside SVG lace frame, offset drop shadow.
- Right column parchment card with story text; small script label above heading.
- CTA: text link with underline made of dotted motif.

## Gallery
- Background deep burgundy (#4c1f2b) with subtle stars pattern.
- Filter pills align left on desktop, scrollable row on mobile.
- Cards: organic egg-shaped mask (`border-radius: var(--border-radius-egg)`), each card uses placeholder image background, overlay label chip (gold) top-left, "View details" chevron bottom-right.
- Lightbox: full-screen overlay tinted midnight (#150b11cc), card centered with parchment background, image left, copy right.

## Process
- Split diagonal layout: left timeline column with icons in egg medallions connected by embroidered line, right column houses 4:3 placeholder video thumbnail and supporting text.
- Colors alternate between fern and rose backgrounds for each step.
- Mobile: timeline becomes stacked cards.

## Services
- Cream background with embroidered border top/bottom (use `assets/patterns/folk-border.svg`).
- Card grid 2x2 on desktop, vertical accordion on mobile. Each card includes placeholder icon, service title, sample price ("Starting at $XXX"), short copy.

## Contact
- Deep indigo background (#2c3a64) with gold speckles; form fields on parchment card with drop shadow.
- Field focus state uses gradient border; invalid shows rose outline.
- Submit button spans width on mobile; success state slides in from bottom with icon and placeholder success copy.

## Footer
- Dark forest strip with gold embroidered pattern at top.
- Social links as circular buttons using placeholder icons + text labels.
- Mini gallery row uses 3 egg thumbnails with gentle hover bob.
- Footer copy centered, small script flourish near year.
