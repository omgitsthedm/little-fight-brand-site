export interface HomeAnswer {
  question: string;
  answer: string;
  href: string;
  cta: string;
}

export const homeAnswers: HomeAnswer[] = [
  {
    question: 'What kind of businesses do you help?',
    answer:
      'Small businesses that need technology to feel calmer and easier to trust, including law offices, restaurants, salons, studios, retail shops, hospitality groups, bakeries, and other local service brands.',
    href: '/industries/',
    cta: 'See who we help',
  },
  {
    question: 'Do you offer on-site support in Manhattan?',
    answer:
      'Yes. For urgent Manhattan issues, we handle on-site troubleshooting for Wi-Fi, POS, devices, printers, and other business tech that needs a calm person in the room, not another ticket number.',
    href: '/services/on-site-it-support-nyc/',
    cta: 'See urgent support',
  },
  {
    question: 'What do I actually get in a website audit?',
    answer:
      'A clear review of the current site: what feels dated, what is hard to read on mobile, what hurts trust, and what may be blocking calls, leads, or bookings.',
    href: '/services/website-audit-small-business/',
    cta: 'See the review',
  },
  {
    question: 'Can you build something better than Wix or Squarespace?',
    answer:
      'Yes. We build custom websites with clearer copy, larger reading comfort, stronger trust signals, and better mobile structure than a dressed-up template can usually deliver.',
    href: '/services/website-design-small-business-nyc/',
    cta: 'See website design',
  },
];
