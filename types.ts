
export interface SEOPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  paymentUrl: string;
  targetAudience: string;
  gbpOptimization: boolean;
  productPagesSEO: string;
  keywordOptimization: boolean;
  newPages: string;
  blogPosts: string;
  youtubeOptimization: number;
  strategy: string[]; // e.g., ['SEO', 'AEO', 'GEO']
  trendFinding: boolean;
  locations: number;
  onpageOptimization: boolean;
  offpageOptimization: boolean;
  citationBuilding: number;
  guestPosts: number;
  featured?: boolean;
}

export enum PackageTier {
  GROWING = 'Growing Business',
  PRO = 'Pro Business',
  ENTERPRISE = 'Enterprise Solutions'
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}