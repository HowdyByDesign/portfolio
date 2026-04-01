# CLAUDE.md: Project Context & Standards

## 🛠️ Project Overview

- **Venture**: HowdyByDesign (Self-Employed / Freelance Portfolio)

- **Owner**: Benjamin Howard, Senior Product Designer & d.MBA

- **Persona**: UX Strategist & Senior Product Designer. We prioritize organizational complexity, enterprise-grade solutions (Pfizer, Air Force), and measurable business outcomes over "just pretty pixels."

- **Tech Stack**: Next.js (App Router), Tailwind CSS, TypeScript, Framer Motion, Playwright (E2E testing).

## 🎨 Design System & Brand

- **Palette**:
  
  - `primary`: #FF3200 (Howdy Red)
  
  - `background`: #F9F8F6 (warm-50 / "Warm Paper")

- **Typography**:
  
  - `Signet`: **Zilla Slab Bold** (Used for "Howdy!" signatures). **STRICT RULE**: Never use Italics for brand text.
  
  - `Primary`: **Instrument Sans** (Variable weight, tracking-widest for subheads).
  
  - Standardize all body text to `text-warm-900` at `font-medium` (500) for maximum readability against `warm-50`."

- **UI Aesthetic**: "Industrial Frontier." Minimalist, dot-grid backgrounds, architectural geometry, and subtle motion (230ms stagger entrances).

## 🖼️ Asset Standards

- **Primary Headshot**: `public/images/Ben_shot_cap2.jpg`.
  
  - **Crop**: Circular (`aspect-square rounded-full`).
  
  - **Filter**: `sepia(0.1) saturate(1.1)` to match `warm-50`.
  
  - **Direction**: Use `scale-x-[-1]` (horizontal flip) so the profile gaze is directed **into** the page content.

- **Chief of Investigations**: `public/images/darcy-planter.webp`.
  
  - **Styling**: Polaroid-style with `rotate-3` tilt, white borders, and specific QA-focused captioning.

## 🚀 Technical Constraints

- **Animations**: Maintain a coordinated "choreography." Navigation fades in first; hero elements/portrait follow with a **230ms delay**.

- **Testing**: All brand changes must be verified against `e2e/design-system.spec.ts`. Use `.first()` for Zilla Slab assertions to avoid DOM collisions between nav and hero signets.

- **Responsiveness**: Hero sections use a 2-column grid on `md` screens (2/3 text, 1/3 image) and stack centered on mobile.

## 📝 Recent Decisions (March 2026)

1. **Non-Italic Rebrand**: Removed all italics from Zilla Slab for a more stable, "architectural" firm identity.

2. **Universal Circles**: Standardized all portraits as circles across Homepage and About page for consistency.

3. **Bolo Tie/Cap Asset**: Swapped to the cap-wearing profile shot to lean into the Houston/Frontier aesthetic.

4. Adopted 'Outcome-First' case study headers and 2-3 line descriptions for a 3-minute scan.
