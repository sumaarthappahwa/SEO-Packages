import { SEOPackage } from './types';

export const SEO_PACKAGES: SEOPackage[] = [
  {
    id: 'growing',
    name: 'Growth Catalyst',
    tagline: 'Suitable for growing businesses and local startups.',
    price: '₹15,000',
    paymentUrl: 'https://rzp.io/rzp/DCnEGvRg',
    targetAudience: 'Growing Business',
    gbpOptimization: true,
    productPagesSEO: '10+ Product Pages SEO Optimization',
    keywordOptimization: true,
    newPages: 'New pages as per requirements',
    blogPosts: 'No blog posts',
    youtubeOptimization: 0,
    strategy: ['SEO'],
    trendFinding: false,
    locations: 1,
    onpageOptimization: true,
    offpageOptimization: true,
    citationBuilding: 5,
    guestPosts: 0,
  },
  {
    id: 'pro',
    name: 'Pro Accelerator',
    tagline: 'Suitable for pro businesses, manufacturers and exporters.',
    price: '₹25,000',
    paymentUrl: 'https://rzp.io/rzp/mlPnhSSM',
    targetAudience: 'Pro Business',
    gbpOptimization: true,
    productPagesSEO: '10+ Product Pages SEO Optimization',
    keywordOptimization: true,
    newPages: '10 New Pages Creation',
    blogPosts: '4 Blog Posts per month',
    youtubeOptimization: 4,
    strategy: ['SEO', 'AO', 'GO'],
    trendFinding: true,
    locations: 3,
    onpageOptimization: true,
    offpageOptimization: true,
    citationBuilding: 20,
    guestPosts: 1,
    featured: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Authority',
    tagline: 'Enterprise solutions for global reach and dominance.',
    price: '₹55,000',
    paymentUrl: 'https://rzp.io/rzp/8wmC8VK3',
    targetAudience: 'Enterprise Solutions',
    gbpOptimization: true,
    productPagesSEO: '10+ Product Pages SEO Optimization',
    keywordOptimization: true,
    newPages: 'Up to 20 New Pages Creation',
    blogPosts: 'Up to 8 Blog Posts',
    youtubeOptimization: 8,
    strategy: ['SEO', 'AO', 'GO'],
    trendFinding: true,
    locations: 6,
    onpageOptimization: true,
    offpageOptimization: true,
    citationBuilding: 40,
    guestPosts: 3,
  }
];

export const TARGET_AUDIENCES = [
  {
    title: 'SMEs',
    description: 'Empowering small and medium enterprises with local visibility and high-intent keyword optimization.',
    icon: '🏢'
  },
  {
    title: 'Manufacturers',
    description: 'Technical SEO and product page optimization designed for manufacturing catalogs and B2B buyers.',
    icon: '🏭'
  },
  {
    title: 'Exporters',
    description: 'Scaling your business to 3 or 6 locations internationally with AO (Answer Optimization) and GO (Generative Optimization).',
    icon: '🚢'
  }
];