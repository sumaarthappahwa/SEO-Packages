
import { SEOPackage } from './types';

export const SEO_PACKAGES: SEOPackage[] = [
  {
    id: 'growing',
    name: 'Growth Catalyst',
    tagline: 'Perfect for growing businesses and local startups.',
    price: '₹15,000',
    paymentUrl: 'https://rzp.io/rzp/DCnEGvRg',
    targetAudience: 'Growing Businesses',
    gbpOptimization: true,
    productPagesSEO: '10+ Product Pages',
    keywordOptimization: true,
    newPages: 'No New Pages',
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
    tagline: 'Designed for manufacturers and pro businesses scaling up.',
    price: '₹25,000',
    paymentUrl: 'https://rzp.io/rzp/mlPnhSSM',
    targetAudience: 'Pro Businesses',
    gbpOptimization: true,
    productPagesSEO: '10+ Product Pages',
    keywordOptimization: true,
    newPages: '10 New Pages',
    blogPosts: '4 Blog Posts per month',
    youtubeOptimization: 4,
    strategy: ['SEO', 'AEO', 'GEO'],
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
    tagline: 'Comprehensive solutions for large-scale manufacturers and global exporters.',
    price: '₹55,000',
    paymentUrl: 'https://rzp.io/rzp/8wmC8VK3',
    targetAudience: 'Enterprise Solutions',
    gbpOptimization: true,
    productPagesSEO: '10+ Product Pages',
    keywordOptimization: true,
    newPages: 'Up to 20 New Pages',
    blogPosts: 'Up to 8 Blog Posts',
    youtubeOptimization: 8,
    strategy: ['SEO', 'AEO', 'GEO'],
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
    description: 'Boost your local visibility and compete with larger corporations through targeted local SEO.',
    icon: '🏢'
  },
  {
    title: 'Manufacturers',
    description: 'Optimization specifically for B2B product catalogs, technical documentation, and bulk-buyer intent.',
    icon: '🏭'
  },
  {
    title: 'Exporters',
    description: 'Global reach through AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) across multiple countries.',
    icon: '🚢'
  }
];
