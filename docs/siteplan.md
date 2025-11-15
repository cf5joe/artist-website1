# Immersive Folkloric Artist Site

### High-level concept

- **Experience**: A single-page, story-driven scroll that feels like opening a hand-painted storybook or ornamented egg, revealing layers of the artist’s world as you move down the page.
- **Core metaphors**: Pysanky egg motifs as frames, borders, and section transitions; hand-drawn flourishes; textile-like backgrounds reminiscent of Ukrainian embroidery.
- **Primary goals**: (1) Showcase art in a memorable, tactile way, (2) Make it easy to contact the artist for custom work, and (3) Highlight links to other platforms.
- **Content rule**: During implementation, use **placeholder content only** for all text, images, and media (e.g., sample text, stock-like egg images, generic social handles). The artist’s real content will be filled in later.

### Information architecture & sections

- **1. Hero / Cover ("The Egg Cracks Open")**
- Large pysanky-inspired frame that subtly "opens" or "glows" as you scroll.
- Artist name and tagline should use placeholder text (e.g., "Artist Name", "Pysanky, Portraits & Digital Stories").
- Primary call-to-action with placeholder label such as "View the work" (text can be updated later).
- Subtle animated background using generic folk-style patterns or abstract motifs (no need for final artwork yet).

- **2. About the Artist (Story spread)**
- Split layout: placeholder portrait silhouette or generic illustration on one side, placeholder "about" copy on the other (1–2 paragraphs describing a fictional version of the artist that can be swapped later).
- Short origin story text using example copy that references pysanky, portraits, and digital art in a generic way.
- Small call-to-action: "Scroll to see favorite pieces" with placeholder wording.

- **3. Signature Works Gallery (Egg Panels)**
- Gallery structure implemented with **placeholder images** (e.g., `egg-sample-1.jpg`, `portrait-sample-1.jpg`) and generic titles like "Pysanky Study #1".
- Optional filter buttons or tabs by medium: "Pysanky", "Portraits & Cards", "Digital Art" using placeholder labels.
- Lightbox modal shows larger placeholder image, sample description text, and a generic note like "Inspired by traditional motifs".

- **4. Process & Craft ("How the magic happens")**
- Step-by-step timeline using simple placeholder icons (generic egg icon, brush icon, tablet icon) and example text for each step (e.g., "Sketching", "Wax & Dye", "Finishing touches").
- Placeholder embedded media: use a static poster image or dummy video embed URL that can be replaced with real process footage later.

- **5. Custom Commissions & Services**
- Placeholder descriptions of services (e.g., "Custom pysanky eggs", "Personalized portraits", "Custom greeting cards", "Digital illustration commissions").
- Example pricing ranges only (e.g., "Starting at $X"), clearly written as sample data to be replaced.
- Prominent call-to-action button such as "Request a commission" (copy can be adjusted later).

- **6. Contact / Commission Request Form**
- Intro line with placeholder phrasing like "Tell me about your idea".
- Fields: name, email, project type (dropdown: Pysanky egg, Portrait, Card, Digital illustration, Other), budget range, timeline, description, optional inspiration link.
- Form action and backend integration can point to a test endpoint or mocked submission handler at first; success/error messages use generic, friendly placeholder copy.

- **7. Links & Social / Footer Shrine**
- Icons and labels for social profiles filled with placeholder handles (e.g., `@artist_handle`, `shop.example.com`), to be swapped with real URLs.
- Mini gallery with small placeholder thumbnails referencing sample works.
- Placeholder copyright line (e.g., "© 2025 Artist Name").

### Visual design language

- **Color palette**
- Warm, rich, folklore-inspired tones: deep burgundy, dark forest green, warm gold, cream parchment, touches of indigo or cobalt.
- All colors defined as tokens (e.g., `--color-egg-gold`, `--color-ink-burgundy`) so they can be adjusted without changing layout.

- **Typography**
- Display font: Decorative, folk-inspired or calligraphic for headings/logotype (configured but using placeholder site title).
- Body font: Clean, legible serif or humanist sans-serif.
- Script font, if used, appears only in small accents like section labels; sample phrases used as placeholders.

- **Layout & shapes**
- Rounded frames, egg silhouettes, scalloped borders, and embroidery-like dividers between sections, all implemented with generic shapes/SVGs not tied to specific artworks.
- Asymmetrical compositions with placeholder images and text blocks to demonstrate the intended feel.

- **Textures & illustrations**
- Subtle paper/grain textures using tiling images or CSS effects that can be reused regardless of final artwork.
- Generic folk-inspired icons/illustrations (eggs, flowers, birds) created as placeholder SVGs that can be replaced later.

### Interaction & motion design

- **Scroll narrative**
- Gentle parallax and reveal animations applied to placeholder backgrounds, frames, and text blocks.
- Transitions designed around the egg/storybook metaphor but not dependent on specific final images.

- **Micro-interactions**
- Hover effects on placeholder artworks and buttons (scale, glow, outline animations).
- Contact form feedback states with generic success/error copy.

- **Performance & restraint**
- Emphasis on lightweight SVGs and CSS animations; media placeholders should be optimized small assets.
- Respect `prefers-reduced-motion` and ensure the site remains usable with all placeholder assets.

### Content & asset checklist (placeholder-focused)

- **Branding & copy**
- Placeholder logo or wordmark (e.g., "Artist Name" in the chosen display font).
- Sample hero tagline and about copy referencing her mediums in a generic way.

- **Images & media**
- A small set of **placeholder** pysanky-style, portrait-style, card-style, and digital-style images—these can be simple mockups, colored shapes, or royalty-free stand-ins.
- Placeholder icons and any dummy video URLs or image sequences for the process section.

- **Contact & commissions**
- Example list of services and pricing ranges labeled clearly as sample data.
- Test or placeholder email/endpoint for the contact form (with the intention to update before launch).

### Implementation outline (technology-agnostic)

- **Structure & components**
- Single-page layout with anchored sections for hero, about, gallery, process, services, contact, and footer.
- Reusable components (e.g., `Hero`, `About`, `Gallery`, `Process`, `Services`, `ContactForm`, `FooterLinks`, `EggFrame`, `SectionDivider`, `Button`) all wired up to consume placeholder props (text, images, links) that can later be fed real content.

- **Styling approach**
- Centralized design tokens for colors, typography, spacing, radii, shadows, and textures.
- SVGs and CSS masks used for egg frames and folk patterns, referencing placeholder asset files.

- **Contact form behavior**
- Client-side validation for required fields and friendly placeholder messages.
- POST to a mocked or development endpoint initially; show decorative placeholder success/error states.

- **Responsiveness & accessibility**
- Mobile-first, responsive layouts with touch-friendly galleries and buttons, tested using placeholder text and images of varying lengths and aspect ratios.
- Accessible structure: heading hierarchy, focus states, sufficient contrast, alt text on all placeholder images (e.g., "Placeholder for pysanky egg artwork").

### Possible future enhancements (optional)

- **Interactive egg orbit**: Orbiting ring of placeholder egg thumbnails in the hero or gallery, wired for future replacement with real works.
- **Seasonal themes**: Palette and accent pattern toggles implemented with placeholder presets (e.g., "Spring", "Winter") that later can be fine-tuned.
- **Multi-language support**: Infrastructure for language toggling (English/Ukrainian) using placeholder translation strings.