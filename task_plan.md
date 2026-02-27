# Task Plan
## Phases

### Phase 1: B - Blueprint
- [x] **Discovery**: Gather requirements (Done).
- [x] **Data Definition**: Define Schemas in `gemini.md` (Done).
- [x] **Tech Stack Decision**: Astro selected.
- [x] **Repo Setup**: Initialize project structure (In Progress).

### Phase 2: L - Link
- [ ] **Google Forms**: create form and link to sheet.
- [x] **Substack RSS**: Verify feed URL accessibility (Verified).
- [ ] **YouTube**: Verify embed codes/availability.

### Phase 3: A - Architect & Build
- [ ] **Scaffold**: Setup Astro project with Tailwind.
- [ ] **Design System**: specific `tailwind.config.mjs` with Brand Colors/Fonts.
- [ ] **Content Layer**: Create `src/content/programs`, `src/content/testimonials`.
- [ ] **Components**: 
    - Navbar (Programs, About, Transformations, Apply)
    - Hero Section (Video/Img + Value Prop)
    - Program Cards (Dynamic from JSON)
    - Testimonial Slider
    - FAQ Accordion (for Programs page)
    - Footer (Terms, Privacy, Guarantee, Contact Info, Substack signup)
    - Promotional Banner (Calm Companion Challenge)
- [ ] **Pages**:
    - Home (Hero -> Free Session -> Reactivity -> Simba/Pack -> Testimonials -> Substack -> CTA)
    - Programs (Detail view + FAQ)
    - Transformations
    - About
    - Apply (Redirect to Google Form)
    - Calm Companion Challenge
    - Legal (Terms, Privacy, Guarantee)

### Phase 4: S - Stylize
- [ ] **Refinement**: Apply "Premium" shadow/border-radius tokens.
- [ ] **Responsiveness**: Verify mobile stacking.
- [ ] **Assets**: Optimize images from `DesignGuidelines`.

### Phase 5: T - Trigger
- [ ] **Build**: Run `npm run build`.
- [ ] **Deploy Check**: Verify local preview works.
- [ ] **Handover**: Documentation for domain cutover.

## Goals
- [ ] Build a pixel-perfect, premium marketing site.
- [ ] Ensure 100% accurate routing of applicants to Google Form.
- [ ] Load Substack content dynamically (or build-time).

## Checklists
- [ ] Brand Colors implemented in Tailwind config.
- [ ] Fonts (Poppins, Libre Baskerville) loaded correctly.
- [ ] Google Form link verified.
- [ ] Mobile view tested.
