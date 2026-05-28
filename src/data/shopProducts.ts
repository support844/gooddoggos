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
    url: 'https://www.amazon.com/dp/B0F63YYZK1?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=e7e4f15232eb1881f847cf3786e6c0e1&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B000634160?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=c3d65b65bb6c0d94a1a5b74b461c7121&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/ZukeS-Naturals-Chicken-Recipe-Treats/dp/B0007A0AQM?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=4fad59d0341b2b814c2922dde3a9c9dd&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B0CLYL61KP?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=a8f9e1ca16d9bd104a83ac2b950bf8ff&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B07W4WYLL5?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=e9f52c980c1a97a7ac0b7c15745381cc&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B07WK7MGJY?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=b15a649043c668b99c805c227e4be173&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B09WHDG6RL?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=da0b894efa83848bdeeaad4f63aa7653&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B01CRLQBXO?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=e983d2c83c0687b720ac62ef604e3f91&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B0DSPF748B?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=d2e5ffc4b17c6142a3216805d1e36549&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B0FHRNDP6F?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=b2f15f046fd51ba7a77c14d7481102a9&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B076VXVB2L?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=476740353cee3978619fb387993c4cbc&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B0CV64FPB5?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=11191362b8090bdde57de108f36b8899&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B0CD2NRXJ1?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=deea4c19ea2edae49ecf67a6f9b3bcb8&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B09G4R4161?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=e8ba7a4dd6e331fb0b84090af5f2dbcd&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B0C6QQ3ZF7?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=4c1167840cd5036348676c474eaaf9d2&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B084YRYHG2?&linkCode=ll2&tag=gooddoggos03-20&linkId=97a55d5ced1151fb3abe51f44e6ac376&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B08RYXFV76?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=ce659da076abd02fce37c970199f1905&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B008ESY894?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=ab6eb8224ce46ed88c5f58930c4b1bbf&language=en_US&ref_=as_li_ss_tl',
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
  {
    category: 'Toys & Enrichment',
    title: 'Multipet Spike Spiked Football Dog Toy',
    url: 'https://www.amazon.com/MULTIPETSpike-Football-Assorted-Colors-Size/dp/B0F8DYFKYT?crid=HFAQ75V7NQLP&dib=eyJ2IjoiMSJ9.oYdef47BHkg24hqYw9FDGaeiBstPdDBWU1xYP41pKoxVwA6uDe5J9s9Q1keT4Za0P0RKZFvPRwyN0_XYaOF96HyJS5a07dtbJVoBnfOzQV25Qe3_FuAhOwCdWX4CBz4vi4M73jhsbxkgqKpA1nwOBXrPiFeTAvYWEHdJ0F8nnBO2vbCbsKbkGjbHGgRzfn-PyN00k3vG3iwKeQPqsZpAld1aP8B3ns6ekprO8p6lUpLW7XZyC4RPft3ClPLfu2LK21haqNJdKcMeYjG7ngCW7cjPUppQ2VNTqoeb5334NF0.aWzq4ekqEWCczhAn_INE3MEDr05hPU5vJu3T4KxIuo4&dib_tag=se&keywords=Joyhound%C2%AE%2BTPR%2BSpiked%2BFootball%2BDog%2BToy&qid=1779884129&sprefix=joyhound%2Btpr%2Bspiked%2Bfootball%2Bdog%2Btoy%2Caps%2C162&sr=8-5&th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=d0016ba5ef0a917cd6c7e0061cabf75e&language=en_US&ref_=as_li_ss_tl',
    image: '',
    blurb:
      'A spiked TPR rubber football built for dogs that need something they can actually grip. Bounces unpredictably, holds up to chewing, and works for solo play or a game of fetch.',
    bullets: [
      'Spiked surface gives dogs a firm grip — easier to pick up and carry than smooth balls',
      'Durable TPR rubber handles chewing between fetch sessions',
      'Unpredictable bounce keeps dogs engaged and mentally active',
    ],
    tags: ['Enrichment', 'Durable'],
  },
  {
    category: 'Toys & Enrichment',
    title: 'Nocciola Squeaky Plush Squirrel Toy',
    url: 'https://www.amazon.com/Nocciola-Squeaky-Reinforced-Durable-Stuffing/dp/B07VZM2PF8?content-id=amzn1.sym.06dae8e6-5073-49f2-9bdc-0faebb40a382%3Aamzn1.sym.06dae8e6-5073-49f2-9bdc-0faebb40a382&crid=13M3UNTEPMSS3&cv_ct_cx=small%2Bfurry%2Bsquirrel%2Btoy%2Bfor%2Bdogs&keywords=small%2Bfurry%2Bsquirrel%2Btoy%2Bfor%2Bdogs&pd_rd_i=B07VZM2PF8&pd_rd_r=2e821da7-a5aa-44e3-9044-562f07bd462a&pd_rd_w=jiDtx&pd_rd_wg=f7C23&pf_rd_p=06dae8e6-5073-49f2-9bdc-0faebb40a382&pf_rd_r=EKH88NECAWQP83QHA15J&qid=1779881314&s=pet-supplies&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=small%2Bfurry%2Bsquirrel%2Btoy%2Bfor%2Bdog%2Cpets%2C152&sr=1-1-9630ce6b-eb04-480e-8729-567d2ef7dacb-spons&aref=wK9hQdw7YF&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=bfac6e0065aedd7c84db485c7868b535&language=en_US&ref_=as_li_ss_tl',
    image: '',
    blurb:
      'A squeaky plush squirrel with reinforced seams and no loose stuffing to ingest — good for dogs who need a soft outlet that holds up past the first session.',
    bullets: [
      'Built-in squeaker satisfies prey-drive urges in a safe, controlled format',
      'Reinforced stitching extends lifespan beyond standard plush toys',
      'No stuffing — reduces ingestion risk if the dog breaks through the outer layer',
    ],
    tags: ['Enrichment'],
  },
  {
    category: 'Toys & Enrichment',
    title: 'Training Lunge Whip',
    url: 'https://www.amazon.com/Horse-Training-Horses-Detachable-Sections/dp/B0F1FBG2CS?crid=1C936GABC6W0U&dib=eyJ2IjoiMSJ9.m8zXOpMT-Y8fw8PpfeltO4HfxUbn6qCwMWMBqsuGHf4psXeEerRXIGJdFEs2rgD6sxBsOnbpP8H-RB9Kg8Hy4iyWd-Oahf5yJ1q9JBcw4ft6os5K-ND_7qCpRtrJZvgeHdZmx7uLPAPW0RRFzUBfpweKJ57s5LtZ9N0fq1uZioB15YAOKgyqV3_HibFzYbJNsCrZJP-kaTdBYV2_9Z5RR9kp9JCrWbLutZIKYfmHLUuSVo5vmAE8l1GjU85cH5JWGHygHFume5yhPaSavUJt4gH63zbkqxaE_SedF_fXvok.V0rxT_oru3N654z7waToU_PPwJ02WLLuP9pWd6I18tw&dib_tag=se&keywords=lunging%2Bhorse%2Bwhip&qid=1779884006&sprefix=lunging%2Bhorse%2B%2Caps%2C189&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=5124a359246439c96d62f2150e9c2203&language=en_US&ref_=as_li_ss_tl',
    image: '',
    blurb:
      'A horse lunge whip repurposed for dog training — used to create pressure, direct movement, and communicate at a distance without physical contact.',
    bullets: [
      'Extends your reach for directional pressure work and off-leash boundary setting',
      'Detachable sections for compact carry and easy transport to training sessions',
      'Lightweight fiberglass shaft with a long lash for precise, low-effort cues',
    ],
    tags: ['Training Use'],
  },
];

// ─── Leashes & Long Lines ───────────────────────────────────────────────────

export const leashProducts: ShopProduct[] = [
  {
    category: 'Leashes & Long Lines',
    title: 'FunTags 6ft Reflective Training Leash',
    url: 'https://www.amazon.com/dp/B089231T8H?&linkCode=ll2&tag=gooddoggos03-20&linkId=2c0dde93e3667fb891e3f129c32b9ea2&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B09NVM8YPW?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=6aceee5b2265b9f038adf2204fb185b7&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B08Y5RYPTS?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=cc7124d0decba071d4a3e69acff177ee&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B072MNCJ8K?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=43c2519ae2b23d6f5b7e99d38aff7241&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B0DPKWLRQV?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=6ae8962600fa21cb24571ca9187e3cf0&language=en_US&ref_=as_li_ss_tl',
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
    url: 'https://www.amazon.com/dp/B01A7HN3P4?th=1&linkCode=ll2&tag=gooddoggos03-20&linkId=c8eee94f6b96cea483f4dbf4598f4236&language=en_US&ref_=as_li_ss_tl',
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
