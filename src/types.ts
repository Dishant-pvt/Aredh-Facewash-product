export interface Ingredient {
  id: string;
  name: string;
  sanskritName?: string;
  shortDesc: string;
  benefits: string[];
  imageUrl: string;
  iconName: string; // lucide icon identifier
  headerTitle?: string;
  quote?: string;
  footerBadges?: string[];
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  size: string;
  quantity: number;
  message: string;
  bulk: boolean;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  tag: string; // e.g. "Verified Buyer", "Sensitive Skin"
  avatarInitials: string;
  avatarUrl?: string;
  imageUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Ingredients" | "Ayurvedic Skincare" | "Rituals & Routines" | "Skin Types & Doshas" | "Natural Beauty Secrets";
  author: string;
  publishedDate: string;
  readTime: string;
  imageUrl: string;
  excerpt: string;
  content: {
    introduction: string;
    sections: {
      heading: string;
      body: string;
      bulletPoints?: string[];
    }[];
    keyTakeaways: string[];
    faq?: { question: string; answer: string }[];
  };
  tags: string[];
  metaDescription: string;
  keywords: string[];
}
