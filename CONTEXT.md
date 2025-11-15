# Project Context

## Purpose
Single-page immersive marketing site for a Ukrainian pysanky and portrait artist. Emphasis on folkloric, hand-drawn storytelling with placeholder copy and assets that can be replaced later.

## Tech Stack
- Static site: vanilla HTML, CSS, JavaScript (`index.html`, `styles/`, `scripts/`).
- Typography via Google Fonts: Great Vibes (script), Lora (display), Source Sans 3 (body).
- SVG-based decorative assets for eggs, portraits, digital art, icons, borders, and textures under `assets/`.
- No build tooling; ready to drop into any static host. Form submission currently mocked on the client.

## Design Tokens & Foundations (`styles/tokens.css`)
- Color palette: burgundy, fern green, egg gold, cream parchment, indigo, rose, moss, midnight, plus supporting shades/alphas.
- Typography tokens map display/body/script pairings; spacing + radii (`--border-radius-egg`, pill radius), gaps, box-shadows, animation timings (`--duration-*`, `--easing-soft`).
- Dark-mode override swaps cream/midnight values if system prefers dark.

## Key Design Elements
- **Hero**: Egg-framed focal area with glow, vertical floating nav, scroll indicator, background motifs that parallax on scroll.
- **Sections**: About, Gallery, Process, Services, Contact, Footer; each uses parchment-like cards, embroidery dividers, and script labels.
- **Gallery**: Filterable grid with egg-shaped masks, placeholder SVG works, lightbox modal for enlarged view + text.
- **Process**: Vertical timeline with icon medallions plus a mock video poster.
- **Services**: Cards with placeholder pricing; border top/bottom uses `assets/patterns/folk-border.svg`.
- **Contact**: Form over indigo background, contextual copy, placeholder handler.
- **Footer**: Social links + mini egg gallery.

## Interaction & Motion
- Smooth scroll via JS for nav buttons; respects `prefers-reduced-motion`.
- IntersectionObserver adds reveal animations and syncs floating nav active state.
- Gallery filter toggles cards via `data-category`; lightbox with ESC/overlay close.
- Contact form uses timeout to simulate submission and shows placeholder status messaging.
- Hero motifs translate slightly on scroll (disabled when reduced-motion).

## Placeholder Content Strategy
- All text, imagery, pricing, and links explicitly marked as placeholders; real assets can replace files in `assets/` and copy inside `index.html`.
- Contact form currently logs no data; ready to wire to email/service by updating `scripts/main.js` submit handler.
- Docs:
  - `docs/wireframes.md`: low-fi ASCII layouts per section.
  - `docs/high-fidelity-comps.md`: styling notes for desktop/mobile.

## Future Integration Notes
- When swapping in production assets, maintain alt text and aria labels for accessibility.
- Consider adding bundler or templating if content grows (e.g., Eleventy/Vite) but current setup is host-ready.
- To localize or theme seasonally, extend tokens and data attributes; structure already componentized by section IDs.
