import {
  Clock3,
  Compass,
  Receipt,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface CaseStudyResult {
  metric: string;
  label: string;
  icon: LucideIcon;
}

export interface CaseStudy {
  id: string;
  business: string;
  type: string;
  note: string;
  location: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  highlightMetric: string;
  highlightLabel: string;
  results: CaseStudyResult[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'soho-restaurant',
    business: 'SoHo Restaurant',
    type: 'Restaurant',
    note: 'Representative engagement',
    location: 'SoHo',
    image: '/cafe_interior.jpg',
    summary:
      'We stabilized checkout, printers, and Wi-Fi fast enough to protect busy service hours.',
    challenge:
      'Checkout hardware, printer failures, and patchwork Wi-Fi were all breaking during rushes, forcing staff into manual workarounds and slowing service down.',
    solution:
      'We found the weak points, rebuilt the checkout path, and left staff with a backup process they could actually use under pressure.',
    highlightMetric: 'Same-day',
    highlightLabel: 'rush-hour recovery',
    results: [
      { metric: 'Same-day', label: 'on-site triage', icon: Clock3 },
      { metric: 'Stable', label: 'checkout flow', icon: Receipt },
      { metric: 'Clear', label: 'backup process', icon: ShieldCheck },
    ],
  },
  {
    id: 'east-village-salon',
    business: 'East Village Salon',
    type: 'Salon',
    note: 'Representative engagement',
    location: 'East Village',
    image: '/salon_interior.jpg',
    summary:
      'We rebuilt the website, booking path, and trust signals around how clients actually choose on a phone.',
    challenge:
      'The site looked dated on phones, the booking flow was clunky, and first-time visitors were not getting a clear sense of the services.',
    solution:
      'We simplified the pages, tightened the service copy, and built a booking-first mobile experience with clearer proof and stronger local search structure.',
    highlightMetric: 'Mobile-first',
    highlightLabel: 'booking rebuild',
    results: [
      { metric: 'Mobile', label: 'booking flow', icon: Smartphone },
      { metric: 'Search-ready', label: 'service pages', icon: Search },
      { metric: 'Sharper', label: 'first impression', icon: Compass },
    ],
  },
  {
    id: 'midtown-training-studio',
    business: 'Midtown Training Studio',
    type: 'Fitness',
    note: 'Representative engagement',
    location: 'Midtown',
    image: '/gym_interior.jpg',
    summary:
      'A clearer offer and stronger inquiry flow made the business easier to trust from day one.',
    challenge:
      'The business had momentum offline but no digital system that explained the offer clearly or turned interest into steady inquiries.',
    solution:
      'We built the core website structure, clarified the offer hierarchy, and connected the business to a cleaner inquiry path.',
    highlightMetric: 'Launch-ready',
    highlightLabel: 'lead path',
    results: [
      { metric: 'Launch-ready', label: 'website stack', icon: Sparkles },
      { metric: 'Direct', label: 'lead capture', icon: Users },
      { metric: 'Clear', label: 'offer hierarchy', icon: Compass },
    ],
  },
];
