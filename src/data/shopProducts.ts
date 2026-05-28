export const SHOP_TAGS = [
  'Budget Friendly',
  'Premium',
  'Everyday Use',
  'Training Use',
  'Recall',
  'Safety',
  'Durable',
  'High Value Food',
  'Enrichment',
  'Crate Training',
  'Travel',
  'Heavy Duty',
] as const;

export type ShopTag = (typeof SHOP_TAGS)[number];

export interface ShopProduct {
  category: string;
  title: string;
  url: string;
  /** Full image URL, or empty string to show the placeholder swatch */
  image: string;
  blurb: string;
  bullets: [string, string, string];
  tags: ShopTag[];
}

// ─── Food & Training Rewards ────────────────────────────────────────────────

export const foodProducts: ShopProduct[] = [
  {
    category: 'Food & Training Rewards',
    title: 'JustFresh — Beef & Chicken Wet Food',
    url: 'https://www.amazon.com/dp/B0F63YYZK1?tag=gooddoggos03-20',
    image: '',
    blurb:
      'Human-grade, preservative-free fresh food in a resealable pouch. Use as a daily meal or a high-value topper — diet quality directly affects energy and trainability.',
    bullets: [
      'Human-grade ingredients, no preservatives or fillers',
      'Resealable 12 oz pouches — easy to portion and store',
      'Works as a full meal or a high-value training topper',
    ],
    tags: ['High Value Food', 'Everyday Use', 'Premium'],
  },
  {
    category: 'Food & Training Rewards',
    title: "Hill's Science Diet Adult Dry Dog Food — Chicken & Barley",
    url: 'https://www.amazon.com/dp/B000634160?tag=gooddoggos03-20',
    image: '',
    blurb:
      'A vet-formulated kibble we use as a daily feeding and low-value training reward. Consistent kibble size makes it easy to toss at high repetition without inflating calorie count.',
    bullets: [
      'Vet-formulated and clinically tested for adult dogs ages 1–6',
      'Chicken & barley recipe — palatable baseline for food-motivated dogs',
      'Uniform kibble size for consistent, fast treat delivery during drills',
    ],
    tags: ['Everyday Use', 'Training Use'],
  },
  {
    category: 'Food & Training Rewards',
    title: "Zuke's Mini Naturals — Chicken Training Treats",
    url: 'https://www.amazon.com/ZukeS-Naturals-Chicken-Recipe-Treats/dp/B0007A0AQM?tag=gooddoggos03-20',
    image: '',
    blurb:
      'Pea-sized, soft, and low-calorie — the go-to reward for high-repetition sessions where rate of reinforcement matters more than treat size.',
    bullets: [
      "Pea-sized portions — fast delivery without breaking the dog's focus",
      'Soft texture dogs take instantly, no crunching or delay',
      'Low calorie — safe for intensive training days without diet disruption',
    ],
    tags: ['Training Use', 'Everyday Use'],
  },
  {
    category: 'Food & Training Rewards',
    title: 'Vital Essentials Freeze-Dried Beef Liver Treats',
    url: 'https://www.amazon.com/dp/B0CLYL61KP?tag=gooddoggos03-20',
    image: '',
    blurb:
      'Single-ingredient freeze-dried beef liver — the high-value jackpot reward for breakthrough moments, recall work, and conditioning to new stimuli.',
    bullets: [
      'Single ingredient: 100% beef liver, nothing else added',
      'Break into smaller pieces for high-rep delivery in tight sessions',
      'Intense smell and flavor — powerful motivator for food-driven dogs',
    ],
    tags: ['High Value Food', 'Training Use', 'Premium'],
  },
];

// ─── Collars & Harnesses ────────────────────────────────────────────────────

export const collarProducts: ShopProduct[] = [
  {
    category: 'Collars & Harnesses',
    title: 'Herm Sprenger Ultra-Plus Prong Collar',
    url: 'https://www.amazon.com/dp/B07W4WYLL5?tag=gooddoggos03-20',
    image: '',
    blurb:
      'The German-engineered standard for pressure-based leash work. Chrome-plated interlocking links apply even, blunt pressure across the neck — not a choke.',
    bullets: [
      'Made in Germany — chrome-plated steel, built to last decades',
      'Blunt prongs distribute pressure evenly, no choke points',
      'Links add or remove for a precise, skin-contact fit',
    ],
    tags: ['Training Use', 'Durable', 'Premium'],
  },
  {
    category: 'Collars & Harnesses',
    title: 'Herm Sprenger Prong Collar (Quick-Release Buckle)',
    url: 'https://www.amazon.com/dp/B07WK7MGJY?tag=gooddoggos03-20',
    image: '',
    blurb:
      'The Herm Sprenger prong collar with a built-in quick-release buckle. Adjusts from 13 to 19 inches without removing links — cleaner for daily training transitions.',
    bullets: [
      'Quick-release buckle: fast on/off without removing links',
      'Adjustable fit for 13–19" neck sizes out of the box',
      'German-made chrome steel — same Herm Sprenger quality and longevity',
    ],
    tags: ['Training Use', 'Everyday Use', 'Premium'],
  },
  {
    category: 'Collars & Harnesses',
    title: 'Safiman Prong Collar (Quick-Release Buckle)',
    url: 'https://www.amazon.com/dp/B09WHDG6RL?tag=gooddoggos03-20',
    image: '',
    blurb:
      'A solid entry-level prong collar with a safety buckle and two extra links included — good for fitting a new dog before committing to a sized Herm Sprenger.',
    bullets: [
      'Quick-release safety buckle for fast on/off between exercises',
      'Two extra links included — fits small through large dogs',
      'Rounded prong tips for consistent, blunt pressure',
    ],
    tags: ['Training Use', 'Budget Friendly'],
  },
  {
    category: 'Collars & Harnesses',
    title: 'Mini Educator E-Collar',
    url: 'https://www.amazon.com/dp/B01CRLQBXO?tag=gooddoggos03-20',
    image: '',
    blurb:
      'The benchmark e-collar for balanced trainers. 100 blunt stimulation levels, 1/2 mile range, and a compact receiver that works on any size dog.',
    bullets: [
      '100 blunt stimulation levels — precise, proportional, and humane',
      'Waterproof + 1/2 mile range for off-leash and field work',
      'Tone and vibration modes for layered, low-level communication',
    ],
    tags: ['Training Use', 'Premium', 'Safety'],
  },
  {
    category: 'Collars & Harnesses',
    title: 'Dogtra Tom Davis E-Collar',
    url: 'https://www.amazon.com/dp/B0DSPF748B?tag=gooddoggos03-20',
    image: '',
    blurb:
      'Co-designed with Tom Davis, this is the e-collar we reach for on serious training cases. 127 levels, Boost & Lock, and IPX9K waterproofing in a compact receiver.',
    bullets: [
      '127 stimulation levels + Boost button for recall and high-distraction work',
      'Safety Level Lock prevents accidental changes mid-session',
      'IPX9K waterproof — works in any weather, rinses clean between dogs',
    ],
    tags: ['Training Use', 'Premium', 'Heavy Duty'],
  },
];

// ─── Place Beds & Crates ────────────────────────────────────────────────────

export const placeProducts: ShopProduct[] = [
  {
    category: 'Place Beds & Crates',
    title: 'K9 Ballistics Elevated Dog Bed',
    url: 'https://www.amazon.com/dp/B0FHRNDP6F?tag=gooddoggos03-20',
    image: '',
    blurb:
      'Built for aggressive chewers. Ripstop fabric with no padding to tear through, elevated for airflow — the place bed that actually holds up to daily use.',
    bullets: [
      'Ripstop fabric — no stuffing or padding to chew out or destroy',
      'Elevated frame promotes airflow and keeps dogs off hot or cold floors',
      'Pre-assembled and ready to use out of the box',
    ],
    tags: ['Durable', 'Everyday Use', 'Premium'],
  },
  {
    category: 'Place Beds & Crates',
    title: 'Amazon Basics Elevated Dog Bed',
    url: 'https://www.amazon.com/dp/B076VXVB2L?tag=gooddoggos03-20',
    image: '',
    blurb:
      'A solid elevated bed at a budget price. Great as a second place station, a travel station, or a starter before upgrading to a chew-proof option.',
    bullets: [
      'Breathable mesh fabric promotes cooling and airflow',
      'Metal frame handles large dogs — 51 x 31 x 8 inches',
      'Budget-friendly option for adding a second or third place station',
    ],
    tags: ['Everyday Use', 'Budget Friendly'],
  },
  {
    category: 'Place Beds & Crates',
    title: 'Impact Collapsible Dog Crate',
    url: 'https://www.amazon.com/dp/B0CV64FPB5?tag=gooddoggos03-20',
    image: '',
    blurb:
      'Powder-coated aluminum that folds flat in seconds. The travel crate for dogs who need structure on the road — durable enough for working conditions, light enough to carry.',
    bullets: [
      'Powder-coated aluminum frame — lightweight, rust-resistant, built to last',
      'Collapses flat for easy loading in a vehicle or airline check-in',
      'Quick setup for indoor or outdoor use without tools',
    ],
    tags: ['Crate Training', 'Travel', 'Premium', 'Heavy Duty'],
  },
  {
    category: 'Place Beds & Crates',
    title: 'BOLDBONE Heavy Duty Wire Dog Crate',
    url: 'https://www.amazon.com/dp/B0CD2NRXJ1?tag=gooddoggos03-20',
    image: '',
    blurb:
      'Reinforced wire construction built for anxious and escape-prone dogs. The 48-inch size covers most large breeds and the removable tray makes cleanup fast.',
    bullets: [
      'Reinforced wire construction — escape-proof for anxious or determined dogs',
      'Removable floor tray for fast, tool-free cleaning between sessions',
      'Available in 37" and 48" to fit most large breeds',
    ],
    tags: ['Crate Training', 'Heavy Duty'],
  },
  {
    category: 'Place Beds & Crates',
    title: 'Amazon Basics Foldable Metal Wire Dog Crate',
    url: 'https://www.amazon.com/dp/B09G4R4161?tag=gooddoggos03-20',
    image: '',
    blurb:
      'The reliable no-frills wire crate at a price that makes sense. Folds flat, includes a removable tray, and sized correctly for most large breeds starting crate work.',
    bullets: [
      'Foldable metal wire frame — collapses flat for storage or transport',
      'Removable floor tray for quick cleaning after accidents',
      '42 x 28 x 30 inches — fits most large breeds for crate conditioning',
    ],
    tags: ['Crate Training', 'Budget Friendly'],
  },
];

// ─── Toys & Enrichment ──────────────────────────────────────────────────────

export const enrichmentProducts: ShopProduct[] = [
  {
    category: 'Toys & Enrichment',
    title: 'WOOF Pupsicle Starter Pack',
    url: 'https://www.amazon.com/dp/B0C6QQ3ZF7?tag=gooddoggos03-20',
    image: '',
    blurb:
      'A freezable silicone enrichment toy that turns mealtime into a slow, satisfying activity — good for crate calm-downs, post-walk wind-downs, and early separation anxiety work.',
    bullets: [
      'Fillable silicone mold — freeze with wet food, broth, or kibble mix',
      'Slows feeding and extends engagement to lower arousal naturally',
      'Sized for small dogs 10–25 lbs',
    ],
    tags: ['Enrichment', 'Crate Training'],
  },
  {
    category: 'Toys & Enrichment',
    title: 'Monster K9 Ring Ball',
    url: 'https://www.amazon.com/dp/B084YRYHG2?tag=gooddoggos03-20',
    image: '',
    blurb:
      '5.5 inches of solid natural rubber for the dogs that destroy everything else. Chew, tug, or fetch — it holds up, and Monster K9 backs it for life.',
    bullets: [
      'Solid natural rubber — no stuffing or squeaker to gut out',
      'Lifetime guarantee — replaced if the dog destroys it',
      'Works for chewing, tugging, and fetch in a single durable toy',
    ],
    tags: ['Durable', 'Enrichment'],
  },
  {
    category: 'Toys & Enrichment',
    title: 'Fida Indestructible Rope Toy',
    url: 'https://www.amazon.com/dp/B08RYXFV76?tag=gooddoggos03-20',
    image: '',
    blurb:
      'Three feet of thick cotton rope with five knots for grip and tug work. Built for large and medium aggressive chewers — doubles as a tug toy and a passive teeth cleaner.',
    bullets: [
      '3-foot length with 5 knots — structured for two-handed tug sessions',
      'Thick cotton braid rated for large and medium aggressive chewers',
      'Natural chewing action promotes dental cleaning between brushings',
    ],
    tags: ['Durable', 'Enrichment'],
  },
  {
    category: 'Toys & Enrichment',
    title: 'Chuckit! Paraflight Flying Disc',
    url: 'https://www.amazon.com/dp/B008ESY894?tag=gooddoggos03-20',
    image: '',
    blurb:
      'A durable nylon frisbee with soft rubber edges — flies farther than standard discs, floats in water, and holds up through thousands of catches.',
    bullets: [
      'Soft rubber edges protect gums and teeth on high-speed catches',
      'Floats in water — works for lake, pool, and beach sessions',
      'Durable nylon construction built for large and medium breeds',
    ],
    tags: ['Enrichment'],
  },
];

// ─── Leashes & Long Lines ───────────────────────────────────────────────────

export const leashProducts: ShopProduct[] = [
  {
    category: 'Leashes & Long Lines',
    title: 'FunTags 6ft Reflective Training Leash',
    url: 'https://www.amazon.com/dp/B089231T8H?tag=gooddoggos03-20',
    image: '',
    blurb:
      'A clean everyday leash built for training. Reflective stitching, padded handle, and a 360° swivel clasp that keeps things tangle-free on busy walks.',
    bullets: [
      'Full-length reflective threading for low-light visibility',
      '360° rotating clasp prevents leash twist during active work',
      'Padded handle — comfortable when a strong dog hits the end',
    ],
    tags: ['Everyday Use', 'Training Use', 'Durable', 'Budget Friendly'],
  },
  {
    category: 'Leashes & Long Lines',
    title: 'Fida 6ft Double Handle Leash',
    url: 'https://www.amazon.com/dp/B09NVM8YPW?tag=gooddoggos03-20',
    image: '',
    blurb:
      'Two handles: one at the standard grip, one near the collar. That traffic handle changes everything when you need instant close control near distractions.',
    bullets: [
      'Short traffic handle for immediate close control near dogs or traffic',
      'Heavy-duty snap hook with 360° swivel — no tangling',
      'Reflective threading for low-light and early morning walks',
    ],
    tags: ['Training Use', 'Safety', 'Everyday Use'],
  },
  {
    category: 'Leashes & Long Lines',
    title: 'Fida 6ft Slip Lead',
    url: 'https://www.amazon.com/dp/B08Y5RYPTS?tag=gooddoggos03-20',
    image: '',
    blurb:
      'A heavy-duty slip lead that goes on and comes off in seconds. No hardware, nothing to clip — just clean, direct control.',
    bullets: [
      'One-piece slip design — fast on/off during high-rep training sessions',
      'Reflective rope for visibility on early morning and late evening walks',
      'Padded handle rated for large, strong dogs',
    ],
    tags: ['Training Use', 'Everyday Use', 'Durable'],
  },
  {
    category: 'Leashes & Long Lines',
    title: 'Hi Kiss 30ft Recall Training Long Line',
    url: 'https://www.amazon.com/dp/B072MNCJ8K?tag=gooddoggos03-20',
    image: '',
    blurb:
      'The long line we use for recall proofing. 30 feet of lightweight nylon that lets the dog move while keeping you in control of the exercise.',
    bullets: [
      'Available in 15ft, 20ft, 30ft, 50ft, and 100ft lengths',
      'Nickel-plated swivel clip resists twisting during active fieldwork',
      "Lightweight nylon — won't drag the dog down mid-rep",
    ],
    tags: ['Recall', 'Training Use', 'Everyday Use', 'Budget Friendly'],
  },
  {
    category: 'Leashes & Long Lines',
    title: 'XiaZ 30ft Waterproof Long Line',
    url: 'https://www.amazon.com/dp/B0DPKWLRQV?tag=gooddoggos03-20',
    image: '',
    blurb:
      'A waterproof 30-foot long line with a padded handle — holds up in wet conditions and stays comfortable when a strong dog hits the end during recall work.',
    bullets: [
      'Waterproof construction — no soaking, no stiffening in rain or mud',
      'Padded handle absorbs shock when a dog runs to the end of the line',
      'Works for all sizes — recall proofing, yard work, and field sessions',
    ],
    tags: ['Recall', 'Training Use', 'Durable'],
  },
  {
    category: 'Leashes & Long Lines',
    title: 'Viper 33ft Biothane Working Lead Leash',
    url: 'https://www.amazon.com/dp/B01A7HN3P4?tag=gooddoggos03-20',
    image: '',
    blurb:
      "Biothane is waterproof, mud-proof, and nearly indestructible. This is the working dog standard for a reason — it holds up when nylon won't.",
    bullets: [
      'Waterproof and odor-resistant — wipes clean between dogs',
      'Built for working dog loads and field conditions',
      'Available in multiple colors and configurations',
    ],
    tags: ['Training Use', 'Durable', 'Heavy Duty', 'Premium'],
  },
];
