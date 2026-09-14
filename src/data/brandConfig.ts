/**
 * HI-5 Soft Drink & Elwad Wholesale Trade
 * Centralized Brand Configuration and Contact Placeholders
 * 
 * Update contact numbers, email, or address here in one place.
 */

export interface ProductItem {
  id: string;
  name: string;
  flavor: string;
  category: string;
  description: string;
  packaging: string;
  bestServed: string;
  tagline: string;
  image: string;
  remoteImage?: string;
  status: 'available' | 'upcoming';
  accent?: string;
  badge?: string;
}

export const BRAND_CONFIG = {
  brandName: 'HI-5',
  productName: 'HI-5 Soft Drink',
  flavorName: 'Banana Flavor',
  companyName: 'ELWAD WHOLESALE TRADE',
  country: 'Ethiopia',
  tagline: 'Refreshing flavor. Bold character.',
  headline: 'REFRESHMENT THAT BRINGS PEOPLE TOGETHER',
  subheadline: 'Discover HI-5 Soft Drink — refreshing flavor, bold character, and quality made for everyday moments.',

  // Actual HI-5 logo URL provided by user, with local fallback
  logoUrl: 'https://i.ibb.co/2Rk6m8t/images.jpg',
  localLogoUrl: './images/hi5-logo.jpg',

  // Centralized editable business placeholders
  contact: {
    phone: '[PHONE NUMBER]',
    phoneRaw: '+251900000000', // for tel: links
    whatsapp: '[WHATSAPP NUMBER]',
    whatsappRaw: '251900000000', // for wa.me/ links
    email: '[BUSINESS EMAIL]',
    address: '[BUSINESS ADDRESS], Ethiopia',
    city: 'Addis Ababa & Regional Distribution, Ethiopia',
  },

  socials: {
    facebook: '#',
    instagram: '#',
    telegram: '#',
    linkedin: '#',
  },

  meta: {
    year: 2026,
    copyright: '© 2026 HI-5 Soft Drink / Elwad Wholesale Trade. All rights reserved.',
  }
};

// All 6 Official HI-5 Flavors with high-resolution product photography
export const HI5_FLAVORS: ProductItem[] = [
  {
    id: 'hi5-banana',
    name: 'HI-5 Soft Drink',
    flavor: 'Banana Flavor',
    category: 'Carbonated Soft Drink',
    description: 'HI-5 Banana delivers an invigorating tropical burst of sweet banana aroma balanced with sparkling effervescence. Crafted for maximum everyday refreshment, it combines an eye-catching bottle presentation with a distinctive flavor profile designed to stand out on any shelf.',
    packaging: 'Commercial Bottle (Packaged in standard retail & wholesale crates)',
    bestServed: 'Chilled over ice or straight from the bottle',
    tagline: 'Distinctive tropical banana refreshment with sparkling carbonation',
    image: './images/hi5-banana-flavor.png',
    remoteImage: 'https://i.ibb.co/cXDjCBy9/Gemini-Generated-Image-ql5andql5a-clean.png',
    status: 'available',
    accent: '#f59e0b',
    badge: 'Signature Flavor',
  },
  {
    id: 'hi5-coffee',
    name: 'HI-5 Soft Drink',
    flavor: 'Coffee Flavor',
    category: 'Carbonated Soft Drink',
    description: 'A distinctive and aromatic coffee-infused sparkling soft drink paying tribute to Ethiopia’s celebrated coffee culture. Offers smooth roasted depth with gentle effervescence and a satisfying clean finish.',
    packaging: 'Commercial Bottle (Packaged in standard retail & wholesale crates)',
    bestServed: 'Well-chilled straight from the bottle or with light ice',
    tagline: 'Rich roasted coffee notes harmonized with crisp sparkling bubbles',
    image: './images/hi5-coffee-flavor.png',
    remoteImage: 'https://i.ibb.co/jPMJn2c4/Gemini-Generated-Image-ppynqcppynqcppyn-clean.png',
    status: 'available',
    accent: '#b45309',
    badge: 'Original Blend',
  },
  {
    id: 'hi5-strawberry',
    name: 'HI-5 Soft Drink',
    flavor: 'Strawberry Flavor',
    category: 'Carbonated Soft Drink',
    description: 'Vibrant, fruity, and delightfully sweet, HI-5 Strawberry Soft Drink provides a burst of fresh berry notes and sparkling energy. Ideal for celebrations, social occasions, and afternoon refreshments.',
    packaging: 'Commercial Bottle (Packaged in standard retail & wholesale crates)',
    bestServed: 'Chilled over ice with fresh fruit garnish',
    tagline: 'Sweet, bright berry notes with lively effervescent sparkle',
    image: './images/hi5-strawberry-flavor.png',
    remoteImage: 'https://i.ibb.co/W4tTwY6z/Gemini-Generated-Image-gt1pzngt1pzngt1p-clean.png',
    status: 'available',
    accent: '#e11d48',
    badge: 'Popular Favorite',
  },
  {
    id: 'hi5-mojito',
    name: 'HI-5 Soft Drink',
    flavor: 'Mojito Flavor',
    category: 'Carbonated Soft Drink',
    description: 'A cool, crisp fusion of zesty fresh lime and cool garden mint. HI-5 Mojito delivers an intensely invigorating spark that revitalizes the senses on warm Ethiopian afternoons.',
    packaging: 'Commercial Bottle (Packaged in standard retail & wholesale crates)',
    bestServed: 'Ice-cold with a fresh lime wedge and mint sprig',
    tagline: 'Crisp citrus lime and refreshing mint for immediate revitalization',
    image: './images/hi5-mojito-flavor.png',
    remoteImage: 'https://i.ibb.co/1fwCHjcj/Gemini-Generated-Image-aakd9yaakd9yaakd-clean.png',
    status: 'available',
    accent: '#10b981',
    badge: 'Ultra Crisp',
  },
  {
    id: 'hi5-grape',
    name: 'HI-5 Soft Drink',
    flavor: 'Grape Flavor',
    category: 'Carbonated Soft Drink',
    description: 'Juicy, rich, and mouthwatering dark grape essence combined with fine sparkling carbonation. Provides deep fruit aroma and smooth effervescence loved by patrons of all ages.',
    packaging: 'Commercial Bottle (Packaged in standard retail & wholesale crates)',
    bestServed: 'Chilled over ice for rich fruit satisfaction',
    tagline: 'Deep juicy grape bouquet with smooth sparkling sweetness',
    image: './images/hi5-grape-flavor.png',
    remoteImage: 'https://i.ibb.co/zHRXb7Md/Gemini-Generated-Image-7ivhhv7ivhhv7ivh-clean.png',
    status: 'available',
    accent: '#8b5cf6',
    badge: 'Rich Fruit',
  },
  {
    id: 'hi5-pineapple',
    name: 'HI-5 Soft Drink',
    flavor: 'Pineapple Flavor',
    category: 'Carbonated Soft Drink',
    description: 'Tangy-sweet golden pineapple flavor bringing sunny tropical warmth to every sip. Balanced with fine bubbles to deliver a crisp, vibrant, and thirst-quenching drinking experience.',
    packaging: 'Commercial Bottle (Packaged in standard retail & wholesale crates)',
    bestServed: 'Served ice-cold straight from the cooler',
    tagline: 'Tangy golden tropical pineapple with crisp effervescent lift',
    image: './images/hi5-pineapple-flavor.png',
    remoteImage: 'https://i.ibb.co/Z668d4jx/Gemini-Generated-Image-23ibkl23ibkl23ib-clean.png',
    status: 'available',
    accent: '#eab308',
    badge: 'Tropical Sun',
  },
];

export const FLAGSHIP_PRODUCT: ProductItem = HI5_FLAVORS[0];

export const FULL_COLLECTION_IMAGE = {
  local: './images/hi5-collection.png',
  remote: 'https://i.ibb.co/5g7MkSDG/Chat-GPT-Image-Sep-13-2026-12-16-43-AM-optimized-2000.png',
  title: 'Complete HI-5 Flavor Collection',
  description: 'Six signature HI-5 flavors: Banana, Coffee, Strawberry, Mojito, Grape, and Pineapple.',
};

export const EXPERIENCE_PILLARS = [
  {
    id: 'refreshing',
    title: 'REFRESHING',
    subtitle: 'Bright & Invigorating',
    description: 'A bright and enjoyable soft-drink experience engineered to revitalize your senses with crisp, bubbly carbonation and clean satisfaction.',
    icon: 'Sparkles',
  },
  {
    id: 'flavor',
    title: 'BOLD FLAVOR',
    subtitle: 'Signature Fruit & Coffee Profiles',
    description: 'Six distinctive flavor profiles bringing authentic fruit essence and aromatic specialty notes rarely found in standard soft drinks.',
    icon: 'Flame',
  },
  {
    id: 'moments',
    title: 'MADE FOR EVERYDAY MOMENTS',
    subtitle: 'Hospitality & Celebrations',
    description: 'Perfect for enjoying with family meals, casual gatherings, afternoon breaks, and community celebrations across Ethiopia.',
    icon: 'Users',
  },
  {
    id: 'presentation',
    title: 'QUALITY PRESENTATION',
    subtitle: 'Shelf-Dominant Packaging',
    description: 'Professional packaging with vibrant emerald and golden tones designed to capture shopper attention in stores and kiosks.',
    icon: 'ShieldCheck',
  },
];

export const WHY_HI5_FEATURES = [
  {
    number: '01',
    title: 'Refreshing Taste',
    description: 'Crisp carbonation coupled with a harmonious sweetness profile makes every sip smooth, thirst-quenching, and delightful.',
    icon: 'Droplets',
  },
  {
    number: '02',
    title: 'Distinctive Flavor Range',
    description: 'From signature Banana to rich Coffee, Strawberry, Mojito, Grape, and Pineapple—crafted to appeal to diverse tastes.',
    icon: 'Zap',
  },
  {
    number: '03',
    title: 'Eye-Catching Product',
    description: 'Vibrant branding and high-contrast bottle presentation create exceptional visual impact in stores and coolers.',
    icon: 'Eye',
  },
  {
    number: '04',
    title: 'Easy Ordering & Distribution',
    description: 'Elwad Wholesale Trade provides reliable commercial fulfillment, clear order coordination, and direct merchant support.',
    icon: 'Truck',
  },
];

export const WHOLESALE_TIERS = [
  {
    id: 'retailers',
    title: 'RETAILERS',
    role: 'Shops & Supermarkets',
    description: 'Convenience stores, neighborhood kiosks, and supermarkets seeking a high-turnover beverage with strong shelf appeal.',
    benefits: [
      'Fast-moving beverage category',
      'High shelf visibility and brand contrast',
      'Flexible minimum order quantities',
      'Direct order coordination'
    ],
    cta: 'Stock for Retail',
    icon: 'Store',
  },
  {
    id: 'wholesalers',
    title: 'WHOLESALERS',
    role: 'Bulk Purchasing',
    description: 'Regional stockists and secondary distributors supplying local merchants, depots, and town centers.',
    benefits: [
      'Bulk pallet and crate shipments',
      'Priority delivery schedules',
      'Consistent inventory fulfillment',
      'Dedicated trade liaison'
    ],
    cta: 'Inquire Bulk Orders',
    icon: 'Boxes',
  },
  {
    id: 'foodservice',
    title: 'RESTAURANTS & CAFÉS',
    role: 'Hospitality & Dining',
    description: 'Dining establishments, traditional eateries, fast food counters, and cafés offering refreshing pairings for meals.',
    benefits: [
      'Popular accompaniment for hearty dining',
      'Attractive tabletop and chiller display',
      'Chilled beverage appeal for diners',
      'Regular replenishment cycles'
    ],
    cta: 'Add to Menu',
    icon: 'UtensilsCrossed',
  },
  {
    id: 'distributors',
    title: 'DISTRIBUTORS',
    role: 'Regional Commercial Partners',
    description: 'Large-scale route distributors and logistics operators expanding HI-5 availability across regional hubs.',
    benefits: [
      'Territory commercial partnership',
      'High-capacity transport allocation',
      'Direct supply chain communication',
      'Long-term commercial growth'
    ],
    cta: 'Partner as Distributor',
    icon: 'TrendingUp',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-collection',
    title: 'Complete HI-5 Flavor Collection',
    category: 'Full Range',
    image: './images/hi5-collection.png',
    fallbackImage: 'https://i.ibb.co/5g7MkSDG/Chat-GPT-Image-Sep-13-2026-12-16-43-AM-optimized-2000.png',
    description: 'All six HI-5 flavors united: Banana, Coffee, Strawberry, Mojito, Grape, and Pineapple.',
  },
  {
    id: 'gal-banana',
    title: 'HI-5 Banana Flavor Soft Drink',
    category: 'Commercial Bottle',
    image: './images/hi5-banana-flavor.png',
    fallbackImage: 'https://i.ibb.co/cXDjCBy9/Gemini-Generated-Image-ql5andql5a-clean.png',
    description: 'The signature tropical banana carbonated soft drink bottle.',
  },
  {
    id: 'gal-coffee',
    title: 'HI-5 Coffee Flavor Soft Drink',
    category: 'Commercial Bottle',
    image: './images/hi5-coffee-flavor.png',
    fallbackImage: 'https://i.ibb.co/jPMJn2c4/Gemini-Generated-Image-ppynqcppynqcppyn-clean.png',
    description: 'Rich aromatic coffee notes celebrating Ethiopian coffee culture in a sparkling beverage.',
  },
  {
    id: 'gal-strawberry',
    title: 'HI-5 Strawberry Flavor Soft Drink',
    category: 'Commercial Bottle',
    image: './images/hi5-strawberry-flavor.png',
    fallbackImage: 'https://i.ibb.co/W4tTwY6z/Gemini-Generated-Image-gt1pzngt1pzngt1p-clean.png',
    description: 'Vibrant sweet berry refreshment with joyful effervescence.',
  },
  {
    id: 'gal-mojito',
    title: 'HI-5 Mojito Flavor Soft Drink',
    category: 'Commercial Bottle',
    image: './images/hi5-mojito-flavor.png',
    fallbackImage: 'https://i.ibb.co/1fwCHjcj/Gemini-Generated-Image-aakd9yaakd9yaakd-clean.png',
    description: 'Zesty lime and cooling mint spark for thirst-quenching invigoration.',
  },
  {
    id: 'gal-grape',
    title: 'HI-5 Grape Flavor Soft Drink',
    category: 'Commercial Bottle',
    image: './images/hi5-grape-flavor.png',
    fallbackImage: 'https://i.ibb.co/zHRXb7Md/Gemini-Generated-Image-7ivhhv7ivhhv7ivh-clean.png',
    description: 'Deep, juicy dark grape essence with lively sparkling bubbles.',
  },
  {
    id: 'gal-pineapple',
    title: 'HI-5 Pineapple Flavor Soft Drink',
    category: 'Commercial Bottle',
    image: './images/hi5-pineapple-flavor.png',
    fallbackImage: 'https://i.ibb.co/Z668d4jx/Gemini-Generated-Image-23ibkl23ibkl23ib-clean.png',
    description: 'Tangy-sweet golden tropical pineapple refreshment.',
  },
  {
    id: 'gal-logo',
    title: 'Official HI-5 Brand Emblem',
    category: 'Brand Identity',
    image: 'https://i.ibb.co/2Rk6m8t/images.jpg',
    fallbackImage: './images/hi5-logo.jpg',
    description: 'The authentic HI-5 emblem representing quality refreshment across Ethiopia.',
  },
];
