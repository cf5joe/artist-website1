# Artist Website (Placeholder Build)

An immersive, single-page storytelling site for a Ukrainian pysanky + portrait artist. Everything currently uses placeholder copy, links, and SVG artwork so the real content can be dropped in later without reworking layout or interactions.

## Highlights
- Narrative scroll experience: hero, about, gallery, process, services, contact, footer.
- Folkloric visual language: pysanky frames, embroidered borders, parchment textures.
- Interactive touches: floating section nav, gallery filters + lightbox, timeline, animated scroll reveals, mock commission form.
- Accessibility + motion care: semantic structure, focusable controls, `prefers-reduced-motion` support.

## Tech Stack
- **HTML**: `index.html` houses all sections and placeholder content.
- **CSS**:
  - `styles/tokens.css`: global design tokens (colors, typography, spacing, motion).
  - `styles/base.css`: resets, typography, buttons, floating nav, utilities.
  - `styles/layout.css`: per-section layout + visual styling.
  - `styles/sections.css`: reveal animations, services borders, lightbox, misc states.
- **JavaScript**: `scripts/main.js` handles smooth scroll, section reveal highlighting, gallery filters, lightbox, placeholder form submission, and hero parallax.
- **Assets**: custom SVGs for eggs/portraits/digital work, icons, borders, and textures under `assets/`.

## Project Structure
```
assets/
  icons/            # egg + brush icons
  images/
    pysanky/        # egg-sample-*.svg placeholders
    portraits/      # portrait-sample-*.svg placeholders
    digital/        # digital-sample-*.svg placeholders
  patterns/         # embroidered border svg
  textures/         # paper background
docs/
  siteplan.md       # approved plan
  wireframes.md     # low-fi ASCII layouts
  high-fidelity-comps.md
styles/
scripts/
index.html
README.md
CONTEXT.md          # quick-reference tech + design notes
```

## Quick Start
```
# open the root folder in any static server / live preview
cd /Volumes/code/Projects/artist-website
python3 -m http.server 4173
# visit http://localhost:4173
```
Any static host (GitHub Pages, Netlify, Vercel, S3, etc.) can serve the site as-is.

## Replacing Placeholder Content
1. **Text**: Edit copy directly inside `index.html`. Search for "Placeholder" to find all swap points (hero name/tagline, bios, gallery blurbs, services descriptions, contact messages, footer links).
2. **Images**:
   - Drop final assets into the relevant folder under `assets/images/<category>/`.
   - Update `<img>` tags in `index.html` to point at the new filenames.
   - Keep descriptive `alt` text updated.
   - For the contact/process icons, replace SVGs inside `assets/icons/` if desired.
3. **Gallery metadata**: Each `.gallery-card` contains a tag label and paragraph used by the lightbox; update those values to match the new art piece.
4. **Services + pricing**: Replace "Starting at $XXX" lines with real ranges; adjust CTA text as needed.
5. **Contact form**:
   - Update placeholder disclaimer text.
   - Wire the submission handler in `scripts/main.js` to your preferred backend/email (currently a timeout mock). Replace the `setTimeout` block with a `fetch` call or form service and handle success/error states accordingly.
6. **Social links**: Swap URLs + handles in the footer.

> Tip: keep a copy of the original placeholders for reference (`docs/siteplan.md` captures the intent of each section).

## Design & Layout Notes
- Color palette + type choices live in `styles/tokens.css`; tweak variables to recolor the whole site.
- Section wrappers rely on CSS grid, organic border radii, and SVG backgrounds; adjusting spacing is easiest via the token values (`--section-padding`, `--gap-*`).
- Services borders reuse the embroidered pattern `assets/patterns/folk-border.svg` referenced in `styles/sections.css`.
- Animations use CSS transitions and `IntersectionObserver`. Reduced-motion users automatically get non-animated behavior.

## Accessibility & Performance
- Semantic landmarks (`header`, `section`, `footer`) support anchored navigation.
- Buttons/links are keyboard accessible; lightbox listens for `Escape` and overlay clicks.
- All imagery includes placeholder `alt` text—update these with meaningful descriptions when swapping assets.
- SVG placeholders are lightweight; no heavy libraries or dependencies.

## Future Enhancements
- Hook contact form to a backend or service (Netlify forms, Formspree, bespoke API, etc.).
- Add localization or seasonal palettes by extending token files.
- Integrate a bundler or template system if additional pages/components are introduced.

For deeper planning artifacts or visual references, see `docs/wireframes.md` and `docs/high-fidelity-comps.md`.
