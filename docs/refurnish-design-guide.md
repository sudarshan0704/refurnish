# Refurnish Website Design Guide

## Purpose

This guide is the single source of truth for designing and implementing Refurnish pages. The entire supplied `html-demo` folder is the visual reference library. Reuse the matching page or section's structure, proportions, image treatments, spacing, and interactions instead of inventing new layouts.

The demo is an interior-design template, not Refurnish brand content. Keep its visual patterns, but replace its copy and imagery labels with accurate furniture restoration content. Do not treat any single demo homepage as the default design for every page or section.

## Brand and audience

- **Business:** Refurnish restores, repairs, refinishes, and transforms existing furniture.
- **Location:** Bangalore, Karnataka, India.
- **Audience:** Bangalore homeowners, families, apartment owners, interior designers, and property managers considering whether to restore or replace furniture.
- **Core message:** **Don't Replace It. Refurnish It.**
- **Voice:** Professional, clear, warm, and practical. Write as “We”, “Our”, and “Us”; never write as an individual.
- Do not imply that Refurnish sells or manufactures furniture.
- Do not invent prices, experience, awards, reviews, guarantees, project outcomes, or service locations.

## Reference implementation rules

1. Before implementing a page or section, inspect the matching page(s) in `html-demo` and the CSS selectors used by that section. Choose the closest match for the requested content and layout; do not assume homepage-9 is the reference unless the user specifically says so.
2. Port the relevant HTML structure and CSS behavior faithfully. Replace only the content, assets, links, and semantics needed for Refurnish.
3. Do not make a substitute design because the original takes more work. If the demo relies on a shape asset, hover state, sticky behavior, or responsive rule, port that behavior and its dependency.
4. If a business requirement intentionally changes the demo layout, preserve the rest of the demo's visual language and record the exception here.
5. Do not bring the full legacy demo stylesheets into the app. Port only the section rules that are required, and avoid selector collisions.
6. Use the existing feature structure: `features/<feature>/components/<Section>/index.js` and `index.css`; page-level composition belongs in `features/<feature>/index.js`.

## Visual system

### Color and type

- Use the existing global CSS variables in `app/globals.css` for the brand palette and typography.
- Primary: vivid orange (`--color-primary`), balanced with a warm amber accent (`--color-accent`).
- Secondary: charcoal (`--color-secondary`); light surface: warm white (`--color-light`); page surface: `--color-white`; body copy: `--color-text`.
- Headings use Space Grotesk and body copy uses Roboto (matching the template).
- Do not define a new section H2 scale in a component stylesheet.

### Headings

- Every section title uses the shared `.section-heading` wrapper and the global `.section-heading h2` rule.
- Use the same heading structure on every page: eyebrow/section label, then one H2, followed by optional supporting copy.
- Global headings use `--color-secondary` (warm charcoal) with Space Grotesk; body copy uses Roboto, as in the template. Component CSS must not override the shared H2 color or typography.
- Component CSS may control layout (alignment, width, spacing), but must not override H2 font size, line-height, weight, or color.
- The hero is the sole exception: it has the page's H1 and follows the homepage-9 slider title treatment.
- Card titles use the shared `.refurnish-h3` class or the exact corresponding template card title pattern. Do not create near-duplicate heading utilities.

### Buttons and links

- The primary site CTA uses the shared `.refurnish-pill-button`: outlined pill, text on the left, orange circular arrow on the right.
- Reuse this CTA in the header and sections. Do not create another pill button style for each component.
- Template service-card arrow buttons are a separate part of the homepage-9 Style 7 card treatment and should retain that treatment.
- Secondary text links should follow the template's understated text-link pattern.

### Spacing, surfaces, and imagery

- Use global `.section-space` / `.section-space-small` for section rhythm unless the matching template section has an explicit different rhythm.
- Keep section content inside the shared Bootstrap `.container` and use Bootstrap grid breakpoints.
- Reuse the demo's image crop, radius, overlay, mask/shape, and hover treatment for each selected pattern.
- Use real supplied brand/demo assets from `public`; write descriptive alt text for meaningful images and empty alt text for decorative images.
- Avoid decorative claims or fabricated social proof in image badges.

## Homepage design map

### 1. Header

- Reference: header pattern in `html-demo/homepage-9.html.htm`.
- Keep the compact spacing, single supplied Refurnish logo image, navigation, phone, and shared Book Now CTA.
- Phone and address must use the confirmed Bangalore business details.

### 2. Homepage hero slider

- Reference for the current homepage hero: `html-demo/homepage-9.html.htm`, `.pbmit-slider-area.pbmit-slider-nine`, as specifically requested.
- For other pages, select the closest hero/banner pattern from the relevant demo page instead of reusing homepage-9 automatically.
- Use the matching full-width demo images, copy alignment, overlay, transition, autoplay, and pagination.
- Keep one H1 across the homepage; slide changes may update its text but must remain understandable and SEO-relevant.
- CTAs: “View Services” and “Contact Us”.
- Do not overlay extra cards or unrelated decoration on the hero.

### 3. Homepage welcome / about introduction

- Reference for the current homepage introduction: `html-demo/homepage-9.html.htm`, `about-section-nine`, with left copy, central image, and right feature list, as specifically requested.
- Keep this as one restrained three-column section with matching demo spacing and image treatment.
- Use Refurnish restoration copy and four concise, factual points.
- Use the shared section heading and CTA styles.

### 4. Homepage Our Services

- Base visual reference for the current homepage services: `html-demo/homepage-9.html.htm`, `service-section-nine` and `.pbmit-service-style-7` cards, as specifically requested.
- **Approved Refurnish adaptation:** omit the template's left sticky image/phone column and show all six services in a three-column desktop grid.
- Preserve the Style 7 cards: large rounded photo, dark bottom gradient, white title at lower-left, template cutout/mask at lower-right, circular arrow button, and image zoom/description hover.
- At tablet and mobile breakpoints, let the grid wrap naturally; do not horizontally squeeze the cards.
- The section heading uses the same global `.section-heading h2` style as every other section.

### 5. Homepage Our Process

- Reference: the user-provided four-step process section.
- Use a centered shared section heading, four circular images with numbered badges, and the horizontal dotted connector behind the images.
- Keep each step static and concise; use illustrative template imagery without presenting it as Refurnish project evidence.
- On smaller screens, wrap the steps into two columns and then one column, removing the desktop connector when it no longer fits the layout.

### 6. Homepage Why Choose Us

- Reference: `html-demo/homepage-6.html.htm`, `.ihbox-six-left-area`, `.ihbox-six-right-area`, and `.pbmit-ihbox-style-19`.
- Keep the left introduction and lamp illustration beside six centered icon cards with alternating light and transparent backgrounds.
- Keep the intro column pinned while the cards scroll on desktop; disable the pinned behavior on smaller screens.
- Keep each benefit grounded in Refurnish's restoration and makeover services; do not claim warranties, awards, pricing advantages, or other unverified promises.
- Stack the intro above the card grid on smaller screens; show two columns on tablets and one on narrow mobile screens.

### 7. Homepage contact CTA

- Reference: the CTA banner in `html-demo/homepage-5.html.htm`, `.about-us-five-bg`.
- Preserve its rounded image banner, dark overlay, animated burst badge, and vertical phone treatment; replace the offer copy with Refurnish contact messaging and the confirmed Bangalore phone number.

### 8. Homepage reviews

- Reference: the testimonial slider in `html-demo/homepage-5.html.htm`, `.testimonial-section-five` and `.pbmit-testimonial-style-5`.
- Use only verified customer review text, ratings, and attribution supplied or approved by Refurnish. Never reuse the demo's placeholder testimonials or author details.
- Keep review cards simple and show four cards per desktop view in a Swiper slider; adapt the visible count for smaller screens and leave a clear gap after the contact CTA.
- If real reviews are not ready, use obvious sample placeholders marked as such. Never present invented quotes, customer names, or ratings as real.

## Responsive behavior

- Match the reference template's desktop, tablet, and mobile breakpoints where practical.
- Desktop: preserve original template proportions.
- Tablet: reduce section padding and allow grids to wrap.
- Mobile: stack columns, keep readable text and large tap targets, preserve image focal points, and avoid sideways overflow.
- Sticky elements are used only where the matching reference uses them and only when their parent layout permits sticky positioning. Do not add sticky behavior to the approved four-card services adaptation.

## Content and SEO requirements

- Write all public copy according to the Refurnish content brief.
- Use Bangalore naturally where relevant; do not repeat it unnaturally in every heading.
- Describe only confirmed restoration, repair, upholstery, polishing, refinishing, repainting, and makeover services.
- Keep page title, description, canonical URL, Open Graph, and Twitter metadata accurate to each page.
- Use a configured canonical origin; do not invent a production domain.
- Do not add placeholder testimonials as if they were real customer reviews.

## Quality gate before marking a section complete

- Compare the implementation against the corresponding demo section, including CSS and responsive rules.
- Confirm shared heading and CTA utilities are reused instead of duplicated.
- Check that only the requested content/layout differs from the reference.
- Validate the desktop and mobile layouts, image paths, hover states, and accessibility labels.
- Run the production build after implementation.
