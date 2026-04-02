# Project Constitution (gemini.md)

## Data Schemas

### 1. Marketing Content (Source of Truth: Repo)
Defined as structured JSON/Markdown files in `src/content/`.

**Programs (`programs.json`)**
```json
[
  {
    "id": "string", // e.g., "calm-companion"
    "title": "string",
    "tagline": "string",
    "description": "string",
    "price_range": "string", // e.g., "$2k - $3k"
    "duration": "string",
    "ideal_for": ["string"],
    "outcomes": ["string"],
    "details_url": "string"
  }
]
```

**Testimonials (`testimonials.json`)**
```json
[
  {
    "id": "string",
    "client_name": "string",
    "dog_name": "string",
    "program_id": "string",
    "quote": "string",
    "image_path": "string" // Local path or cloud URL
  }
]
```

**Applicant Data (Source of Truth: Google Sheets)**
Columns correspond to Google Form fields + Internal Status.
- **Timestamp**: Date/Time of application
- **Owner Name**: String
- **Email**: String
- **Phone**: String
- **Dog Name**: String
- **Breed**: String
- **Age**: String
- **Primary Issues**: Text (Long)
- **Selected Program**: String (Dropdown match to `programs.json` IDs)
- **Status**: Enum ["New", "Contacted", "Consult Booked", "Closed-Won", "Closed-Lost"] (Internal Use)

## Behavioral Rules

### Tone & Voice
- **Calm Authority**: Reassuring, professional, avoiding alarmist language.
- **Premium**: High-end service, not a discount warehouse.
- **Direct**: Clear instructions, no fluff.

### Design SOPs
- **Mobile-First**: All layouts must stack gracefully.
- **Visual Hierarchy**: 
    - H1: Poppins (Navy #0B2744)
    - Body: Poppins (Ink Black #13202A)
    - Accents: Gold (#D1B27F) for primary CTAs.
- **No "Buy Now"**: All roads lead to "Apply for Assessment".
- **Color Usage**: 
    - Navy (#0B2744) for trust/headers.
    - Teal (#0F6D7F) for calm/supportive elements.
    - Deep Red (#7D2C2D) ONLY for "Red Zone" alerts/seriousness.

## Architectural Invariants
<!-- Default invariants from B.L.A.S.T. protocol -->
- **Data-First Rule**: Coding only begins once the "Payload" shape is confirmed.
- **3-Layer Architecture**:
    - Layer 1: Architecture (`architecture/`) - SOPs.
    - Layer 2: Navigation - Decision Making.
    - Layer 3: Tools (`tools/`) - Deterministic Python scripts.
- **Do Not Guess**: Prioritize reliability over speed.
- **Tech Stack**:
    - Frontend: HTML/JS/CSS (Vanilla or Framework TBD - likely Astro or Next.js for SSG + Form handling). *Decision: Astro for performance & simple content collection management.*
    - Styles: TailwindCSS (configured with Brand Guidelines).
    - Hosting: Netlify/Vercel (TBD) - currently local build.
- **Strict Asset Naming (Case-Sensitivity)**: All image and asset file names MUST strictly match the physical file's exact casing and extension. Import paths in code must be an exact, character-for-character match to the file on disk. This is a hard requirement because Vercel's Linux servers are case-sensitive while macOS is not — a mismatch that builds locally will crash the Vercel build. When adding new assets, prefer lowercase kebab-case filenames (e.g., `simba-profile.png`). When importing existing assets with mixed-case names (e.g., `Navy-Dog-Mascot-Transparent---Good-Doggos.png`), copy the exact filename from the filesystem.
