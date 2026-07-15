import { Ingredient, Testimonial, FAQItem } from "./types";

export const INGREDIENTS: Ingredient[] = [
  {
    id: "sandalwood",
    name: "Sandalwood",
    sanskritName: "Chandana",
    shortDesc: "Sandalwood has been cherished in Ayurveda for centuries for its soothing, cooling and skin-enhancing properties.",
    headerTitle: "THE SKIN SOOTHER",
    quote: "Pure comfort for naturally radiant skin.",
    benefits: [
      "Soothes irritation & calms the skin",
      "Reduces redness & inflammation",
      "Cools and refreshes the skin naturally",
      "Improves complexion and skin tone",
      "Maintains healthy moisture balance"
    ],
    imageUrl: "/img/sandalwood.png",
    iconName: "Sparkles",
    footerBadges: ["NATURAL INGREDIENTS", "AYURVEDIC WISDOM", "SCIENCE BACKED", "SAFE & GENTLE", "DERMATOLOGICALLY TESTED"]
  },
  {
    id: "licorice",
    name: "Licorice",
    sanskritName: "Yashtimadhu",
    shortDesc: "Licorice is a powerful Ayurvedic herb known for its skin-brightening and tone-evening properties.",
    headerTitle: "THE BRIGHTENING SECRET",
    quote: "Reveal brighter, healthier-looking skin.",
    benefits: [
      "Brightens dull skin and enhances radiance",
      "Reduces pigmentation and dark spots",
      "Evens out skin tone naturally",
      "Soothes and calms irritated skin",
      "Provides a healthy, natural glow"
    ],
    imageUrl: "/img/licorice.png",
    iconName: "Sun",
    footerBadges: ["NATURAL INGREDIENTS", "AYURVEDIC GOODNESS", "SCIENCE BACKED", "SAFE & EFFECTIVE", "DERMATOLOGICALLY TESTED"]
  },
  {
    id: "manjistha",
    name: "Manjistha",
    sanskritName: "Manjistha",
    shortDesc: "Manjistha is a revered Ayurvedic herb known for its powerful detoxifying and blood-purifying properties that promote clear, healthy and radiant skin.",
    headerTitle: "THE SKIN DETOXIFIER",
    quote: "Nature's secret to clear, beautiful skin.",
    benefits: [
      "Detoxifies blood and purifies the skin",
      "Helps reduce acne and blemishes",
      "Promotes clear, healthy glow",
      "Improves skin texture and tone",
      "Protects skin from environmental damage"
    ],
    imageUrl: "/img/manjistha.png",
    iconName: "Shield",
    footerBadges: ["NATURAL INGREDIENTS", "AYURVEDIC WISDOM", "SCIENCE BACKED", "SAFE & GENTLE", "DERMATOLOGICALLY TESTED"]
  },
  {
    id: "nagkeshar",
    name: "Nagkeshar",
    sanskritName: "Nagakesara",
    shortDesc: "Nagkeshar is a precious Ayurvedic herb known for its powerful rejuvenating and skin-enhancing properties.",
    headerTitle: "THE SKIN REJUVENATOR",
    quote: "Timeless herb for healthy, glowing skin.",
    benefits: [
      "Reduces inflammation and soothes skin",
      "Helps improve skin texture and tone",
      "Fights acne and prevents breakouts",
      "Enhances natural glow and radiance",
      "Supports healthy, clear and youthful skin"
    ],
    imageUrl: "/img/nagkeshar.png",
    iconName: "FlameKindling",
    footerBadges: ["NATURAL INGREDIENTS", "AYURVEDIC WISDOM", "SCIENCE BACKED", "SAFE & GENTLE", "DERMATOLOGICALLY TESTED"]
  },
  {
    id: "amlaki",
    name: "Amlaki (Amla)",
    sanskritName: "Amalaki",
    shortDesc: "Amlaki (Amla) is a revered Ayurvedic superfruit known for its potent antioxidant and skin-rejuvenating properties.",
    headerTitle: "THE SKIN REVITALIZER",
    quote: "Ancient superfruit for healthy, youthful skin.",
    benefits: [
      "Rich in antioxidants that fight free radicals",
      "Brightens skin and enhances natural glow",
      "Improves skin texture and tone",
      "Helps reduce signs of aging",
      "Supports collagen production",
      "Hydrates and nourishes the skin deeply"
    ],
    imageUrl: "/img/amlaki.png",
    iconName: "Activity",
    footerBadges: ["NATURAL INGREDIENTS", "AYURVEDIC WISDOM", "SCIENCE BACKED", "SAFE & GENTLE", "DERMATOLOGICALLY TESTED"]
  },
  {
    id: "kshirvidari",
    name: "Kshirvidari",
    sanskritName: "Kshiravidari",
    shortDesc: "Kshirvidari is a powerful Ayurvedic herb known for its deeply nourishing and rejuvenating properties that promote soft, supple and healthy skin.",
    headerTitle: "THE SKIN NOURISHER",
    quote: "Nourishment that shows on your skin, naturally.",
    benefits: [
      "Deeply nourishes and hydrates the skin",
      "Improves skin softness and suppleness",
      "Helps repair and rejuvenate skin cells",
      "Supports natural moisture balance",
      "Enhances skin glow and radiance",
      "Promotes healthy, youthful-looking skin"
    ],
    imageUrl: "/img/kshirvidari.png",
    iconName: "Droplet",
    footerBadges: ["NATURAL INGREDIENTS", "AYURVEDIC WISDOM", "SCIENCE BACKED", "SAFE & GENTLE", "DERMATOLOGICALLY TESTED"]
  },
  {
    id: "lodhra",
    name: "Lodhra",
    sanskritName: "Lodhra",
    shortDesc: "Lodhra is a traditional Ayurvedic herb known for its astringent, purifying and skin-refining properties that help maintain clear, firm and radiant skin.",
    headerTitle: "THE SKIN REFINER",
    quote: "Nature's astringent for pure, refined skin.",
    benefits: [
      "Tightens pores and tones the skin",
      "Helps control excess oil and reduces acne",
      "Soothes irritation and reduces redness",
      "Improves skin firmness and elasticity",
      "Promotes even skin tone and clarity",
      "Supports healthy, balanced and glowing skin"
    ],
    imageUrl: "/img/lodhra.png",
    iconName: "Maximize2",
    footerBadges: ["NATURAL INGREDIENTS", "AYURVEDIC WISDOM", "SCIENCE BACKED", "SAFE & GENTLE", "DERMATOLOGICALLY TESTED"]
  },
  {
    id: "haridra",
    name: "Haridra (Turmeric)",
    sanskritName: "Haridra",
    shortDesc: "Haridra, commonly known as Turmeric, is a powerful Ayurvedic herb celebrated for its healing, purifying and skin-enhancing properties.",
    headerTitle: "THE SKIN HEALER",
    quote: "Golden glow, naturally from the touch of nature.",
    benefits: [
      "Fights acne and prevents breakouts",
      "Brightens complexion and adds natural glow",
      "Reduces inflammation and soothes skin",
      "Evens out skin tone and reduces blemishes",
      "Supports skin healing and cell regeneration",
      "Detoxifies skin and fights free radicals"
    ],
    imageUrl: "/img/haridra.png",
    iconName: "Award",
    footerBadges: ["NATURAL INGREDIENTS", "AYURVEDIC WISDOM", "SCIENCE BACKED", "SAFE & GENTLE", "DERMATOLOGICALLY TESTED"]
  },
  {
    id: "tea-extract",
    name: "Tea Extract",
    sanskritName: "Chaha",
    shortDesc: "Tea Extract is a natural powerhouse derived from Camellia sinensis, rich in antioxidants and polyphenols that protect, soothe and revitalize the skin.",
    headerTitle: "THE SKIN REVITALIZER",
    quote: "Nature's brew for refreshed, protected and radiant skin.",
    benefits: [
      "Rich in antioxidants that fight free radicals",
      "Protects skin from environmental damage",
      "Soothes irritation and reduces redness",
      "Helps control excess oil and prevents acne",
      "Revives dull skin and enhances natural glow",
      "Anti-inflammatory and calming effect"
    ],
    imageUrl: "/img/tea-extract.png",
    iconName: "Leaf",
    footerBadges: ["NATURAL INGREDIENTS", "AYURVEDIC WISDOM", "SCIENCE BACKED", "SAFE & GENTLE", "DERMATOLOGICALLY TESTED"]
  },
  {
    id: "vitamin-e",
    name: "Vitamin E",
    sanskritName: "Tocopherol",
    shortDesc: "Vitamin E is a powerful antioxidant that helps protect and nourish the skin, fights free radicals and supports healthy, youthful-looking skin.",
    headerTitle: "THE SKIN PROTECTOR",
    quote: "Nature's protection for healthy, glowing skin.",
    benefits: [
      "Powerful antioxidant that fights free radicals",
      "Moisturizes and nourishes dry, damaged skin",
      "Improves skin elasticity and smoothness",
      "Helps protect skin from UV damage & pollution",
      "Supports skin healing and reduces scars",
      "Promotes healthy, radiant and youthful skin"
    ],
    imageUrl: "/img/vitamen-e.png",
    iconName: "Heart",
    footerBadges: ["NATURAL INGREDIENTS", "AYURVEDIC WISDOM", "SCIENCE BACKED", "SAFE & GENTLE", "DERMATOLOGICALLY TESTED"]
  },
  {
    id: "aromatic-oil",
    name: "Aromatic Oil",
    sanskritName: "Gandha Taila",
    shortDesc: "Aromatic Oil is a natural blend of pure essential oils extracted from flowers, herbs and woods, known for their soothing aroma and skin-enhancing properties that refresh, relax and rejuvenate.",
    headerTitle: "THE NATURAL INDULGENCE",
    quote: "Nature's fragrance, crafted for your well-being.",
    benefits: [
      "Relaxes the mind and reduces stress",
      "Soothes and nourishes the skin",
      "Provides a refreshing and uplifting aroma",
      "Enhances mood and promotes well-being",
      "Natural aromatherapy for everyday wellness",
      "Antioxidant-rich and skin protective"
    ],
    imageUrl: "/img/aronatic-oil.png",
    iconName: "Flower2",
    footerBadges: ["NATURAL INGREDIENTS", "AYURVEDIC WISDOM", "SCIENCE BACKED", "SAFE & GENTLE", "DERMATOLOGICALLY TESTED"]
  },
  {
    id: "coco-glucoside",
    name: "Coco Glucoside",
    sanskritName: "Narikele-Shodhaka",
    shortDesc: "Coco Glucoside is a mild, plant-derived surfactant made from coconut oil and glucose. Known for its excellent cleansing action and skin-friendly nature, it gently removes dirt and impurities without stripping the skin's natural moisture, leaving it clean, soft and refreshed.",
    headerTitle: "THE GENTLE CLEANSER",
    quote: "Nature's gentle touch for clean, soft and happy skin.",
    benefits: [
      "Gentle cleanser that respects the skin barrier",
      "Creates rich lather and removes impurities",
      "Moisturizes and prevents dryness",
      "Suitable for sensitive and baby skin",
      "Biodegradable and eco-friendly",
      "Perfect for shampoos, face washes and body washes"
    ],
    imageUrl: "/img/coco-glucoa.png",
    iconName: "Check",
    footerBadges: ["NATURAL INGREDIENTS", "AYURVEDIC WISDOM", "SCIENCE BACKED", "SAFE & GENTLE", "DERMATOLOGICALLY TESTED"]
  },
  {
    id: "phenoxyethanol",
    name: "Phenoxyethanol",
    sanskritName: "Preservative",
    shortDesc: "Phenoxyethanol is a widely used, broad-spectrum preservative known for its effectiveness and safety. It helps protect skincare and personal care products from harmful bacteria, yeast and mold, ensuring long-lasting freshness and product integrity.",
    headerTitle: "THE SAFE PRESERVATIVE",
    quote: "Smart preservation, naturally effective.",
    benefits: [
      "Effective broad-spectrum preservative",
      "Gentle on skin and suitable for sensitive formulations",
      "Helps prevent microbial contamination",
      "Enhances product stability and extends shelf life",
      "Compatible with a wide range of ingredients",
      "Approved for safe use in cosmetic formulations"
    ],
    imageUrl: "/img/phynoxethelyne.png",
    iconName: "Shield",
    footerBadges: ["NATURAL INGREDIENTS", "AYURVEDIC WISDOM", "SCIENCE BACKED", "SAFE & GENTLE", "DERMATOLOGICALLY TESTED"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Radha Galani",
    location: "Jamnagar, Gujarat",
    rating: 5,
    text: "I have suffered from acne and persistent redness for years. Most face washes strip my skin completely dry, causing more breakouts. The AREDH Herbal Cleanser is a miracle. It's so gentle, smells heavenly of pure sandalwood and turmeric, and my acne has almost cleared up within three weeks. Absolutely love it!",
    tag: "Combination Skin",
    avatarInitials: "RG",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "2",
    name: "Priyanka Sanghani",
    location: "Ahmedabad, Gujrat",
    rating: 5,
    text: "As a beauty blogger, I test dozens of products. AREDH feels like a genuine, premium Ayurvedic elixir. The formula has an incredible slip, builds a light creamy lather (since it is SLS-free), and leaves my skin feeling hydrated and looking remarkably bright. It feels like a high-end spa ritual every morning.",
    tag: "Dermatologically Tested Fan",
    avatarInitials: "PS",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "3",
    name: "Nitin Patel",
    location: "Mumbai",
    rating: 5,
    text: "My dermatologist suggested shifting to sulfate-free, mild cleansers. I chose AREDH because of its transparent 12-hero-ingredient formulation. My dry skin doesn't feel tight or scratchy after washing anymore. The packaging is premium and the quantity lasts long because a tiny pea-sized drop is enough.",
    tag: "Sensitive & Dry Skin",
    avatarInitials: "NP",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "4",
    name: "Bhavesh Patel",
    location: "Surat, Gujarat",
    rating: 5,
    text: "So proud to support a brand originating from Jamnagar! This cleanser is exceptional. It balances the oily sections of my face while leaving the rest hydrated. It does not contain artificial fragrances, and you can tell it's premium. Worth every single rupee.",
    tag: "Oily T-Zone",
    avatarInitials: "BP",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "5",
    name: "Rohan Mehta",
    location: "Vadodara, Gujarat",
    rating: 5,
    text: "The texture is unlike any face wash I've used before. It doesn't strip the skin at all, and the aroma of natural vetiver and sandalwood makes me look forward to washing my face. It has significantly helped with my post-shave skin irritation.",
    tag: "Daily Ritual",
    avatarInitials: "RM",
    avatarUrl: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "6",
    name: "Deepika Joshi",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "I love the clean science meets traditional Ayurveda approach. The inclusion of Yashtimadhu (Licorice) and Haridra (Turmeric) has made an actual difference in fading my dark spots and sun tan. My skin looks bright and glowing.",
    tag: "Pigmentation Solution",
    avatarInitials: "DJ",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "7",
    name: "Jignesh Shah",
    location: "Rajkot, Gujarat",
    rating: 5,
    text: "After trying so many high-end brands, AREDH stands out as a genuine product. Its non-drying gel lather rinses clean without leaving any residue. The formulation transparency with 12 active ingredients gives absolute confidence in what you're putting on your skin.",
    tag: "Clean Formulation",
    avatarInitials: "JS",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "8",
    name: "Komal Vyas",
    location: "Bengaluru, Karnataka",
    rating: 5,
    text: "This is an extraordinary Ayurvedic cleanser. The fragrance is incredibly subtle and earthy, and my skin feels extremely supple. It keeps my seasonal dryness completely at bay. Definitely a permanent addition to my skincare routine.",
    tag: "Highly Recommended",
    avatarInitials: "KV",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Is AREDH Herbal Cleanser suitable for extremely sensitive skin?",
    answer: "Yes, absolutely! The AREDH Herbal Cleanser is formulated specifically with gentle plant-derived cleansers like Coco Glucoside instead of harsh sulfates (SLS/SLES). Coupled with cooling ingredients like Sandalwood and Kshirvidari, it calms irritation and is completely safe and gentle for sensitive, reactive, or compromised skin barriers."
  },
  {
    id: "faq-2",
    question: "Does it contain parabens, silicones, or phenoxyethanol?",
    answer: "Our cleanser is 100% Free from Parabens, SLS/SLES, and Silicones. We practice ingredient transparency: to ensure safety and prevent bacterial growth in wet bathroom environments, we use a minute, safe percentage (less than 1%) of Phenoxyethanol as a gentle, internationally approved food-grade preservative. No heavy toxic chemicals are ever used."
  },
  {
    id: "faq-3",
    question: "How is AREDH different from regular Ayurvedic face washes?",
    answer: "Regular Ayurvedic face washes often use cheap chemical soap bases while advertising Ayurvedic herbs as active ingredients. AREDH is a true luxury formulation: we combine 12 premium active botanical extracts (like Nagkeshar, Lodhra, and Manjistha) in an ultra-gentle coconut-derived base. We don't hide our base and we don't use artificial colorings or synthetic perfumes."
  },
  {
    id: "faq-4",
    question: "How long does shipping take, and where are you located?",
    answer: "We are proudly formulated and dispatched from Jamnagar, Gujarat, India. Standard shipping takes 2-4 business days within Gujarat, and 4-7 business days for the rest of India. We offer reliable tracking updates via SMS and WhatsApp once your inquiry is confirmed."
  },
  {
    id: "faq-5",
    question: "Can I place a bulk or wholesale order for my spa, store, or gifting?",
    answer: "Yes! We cater to corporate gifting, luxury spas, hotels, and organic boutique stores. In our Inquiry Form, please check the 'I'm interested in bulk/wholesale orders' checkbox or directly reach out to us at +91 977-323-5862. We offer special discounted pricing for bulk inquiries."
  }
];

export const SIZES = [
  {
    id: "50ml",
    size: "50ml",
    name: "Travel Companion",
    desc: "Perfect size for testing or on-the-go luxury skincare.",
    features: ["TSA-friendly travel bottle", "Lasts 2-3 weeks", "Secure flip-cap packaging"],
    badge: "Try It Out"
  },
  {
    id: "100ml",
    size: "100ml",
    name: "AREDH Standard",
    desc: "Our highly recommended signature size with premium pump dispenser.",
    features: ["Premium leakproof pump", "Lasts 5-6 weeks of daily use", "Elegant visual packaging"],
    badge: "Most Popular",
    popular: true
  },
  {
    id: "200ml",
    size: "200ml",
    name: "Wellness Pack",
    desc: "Great value pack for your dedicated daily Ayurvedic skincare routine.",
    features: ["Double the volume", "Best price-to-volume ratio", "Refinement pump locks"],
    badge: "Best Value"
  }
];

export const WHY_AREDH = [
  {
    title: "100% Natural Surfactants",
    description: "Formulated without toxic SLS/SLES sulfates. We utilize coco glucosides derived from fresh coconuts for a silky, safe lather.",
    iconName: "Droplet"
  },
  {
    title: "Ancient Wisdom, Modern Science",
    description: "An authentic formulation crafted by referencing classic Ayurvedic texts, balanced and tested using modern dermatological standards.",
    iconName: "Brain"
  },
  {
    title: "Dermatologically Safe & Mild",
    description: "Extensively patch-tested under dermatological control to ensure no allergy, irritation, or clogging of skin pores.",
    iconName: "ShieldCheck"
  },
  {
    title: "Cruelty Free & Vegan",
    description: "We are deeply committed to clean beauty. None of our ingredients or final formulations are ever tested on animals.",
    iconName: "Heart"
  },
  {
    title: "Zero Artificial Pigments",
    description: "The pale honey hue of the cleanser is completely natural, resulting from organic turmeric, licorice, and sandalwood extracts.",
    iconName: "Sparkles"
  },
  {
    title: "Eco-Conscious Packaging",
    description: "Our high-durability dark amber bottles shield active botanical nutrients from sunlight oxidation and are 100% recyclable.",
    iconName: "Leaf"
  }
];
