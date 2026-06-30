import { homeAnswers } from '../data/homeAnswers';
import { getServiceBySlug, resolveServiceSlug, siteFaqs } from '../data/services';

export const BASE_URL = 'https://littlefightnyc.com';
export const DEFAULT_TITLE = 'Little Fight NYC | Clear Websites and Calm Tech Help';
export const DEFAULT_DESCRIPTION =
  'Website design, private website reviews, local SEO, and practical tech help for small businesses that need more trust online and fewer day-to-day problems.';
export const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`;

export interface RouteMeta {
  title: string;
  description: string;
  path: string;
  schemas: Record<string, unknown>[];
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

function absoluteUrl(path: string) {
  return `${BASE_URL}${path}`;
}

function normalizePath(path: string) {
  if (!path || path === '/') {
    return '/';
  }

  return path.endsWith('/') ? path : `${path}/`;
}

function trimDescription(value: string, maxLength = 158) {
  if (value.length <= maxLength) {
    return value;
  }

  const shortened = value.slice(0, maxLength + 1);
  const lastSpace = shortened.lastIndexOf(' ');
  const safeCut = lastSpace > 100 ? lastSpace : maxLength;

  return `${shortened.slice(0, safeCut).trim().replace(/[.,;:!?-]+$/, '')}.`;
}

function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#organization`,
    name: 'Little Fight NYC',
    url: BASE_URL,
    image: DEFAULT_IMAGE,
    telephone: '+1-646-360-0318',
    email: 'hello@littlefightnyc.com',
    description: DEFAULT_DESCRIPTION,
    areaServed: [
      { '@type': 'City', name: 'New York City' },
      { '@type': 'AdministrativeArea', name: 'Manhattan' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Manhattan',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Audit' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'On-Site IT Support' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Local SEO & Google Ads' } },
    ],
  };
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Little Fight NYC',
    description: DEFAULT_DESCRIPTION,
    publisher: { '@id': `${BASE_URL}/#organization` },
  };
}

function webPageSchema(path: string, title: string, description: string, type = 'WebPage') {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    about: { '@id': `${BASE_URL}/#organization` },
  };
}

function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function serviceSchema(path: string, name: string, description: string, serviceType: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    name,
    description,
    areaServed: ['New York City', 'Manhattan', 'United States'],
    provider: { '@id': `${BASE_URL}/#organization` },
    url: absoluteUrl(path),
  };
}

function makeMeta(
  title: string,
  description: string,
  path: string,
  schemas: Record<string, unknown>[],
): RouteMeta {
  return {
    title,
    description,
    path,
    schemas: [organizationSchema(), websiteSchema(), webPageSchema(path, title, description), ...schemas],
  };
}

export function getRouteMeta(inputPath: string): RouteMeta {
  const path = normalizePath(inputPath);

  if (path === '/') {
    return makeMeta(DEFAULT_TITLE, DEFAULT_DESCRIPTION, '/', [
      faqSchema(homeAnswers),
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Website Design',
            url: absoluteUrl('/services/website-design-small-business-nyc/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Website Audit',
            url: absoluteUrl('/services/website-audit-small-business/'),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'On-Site IT Support',
            url: absoluteUrl('/services/on-site-it-support-nyc/'),
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Local SEO & Google Ads',
            url: absoluteUrl('/services/local-seo-and-google-ads-nyc/'),
          },
        ],
      },
    ]);
  }

  if (path.startsWith('/services/') && path !== '/services/') {
    const slug = resolveServiceSlug(path.replace('/services/', '').replaceAll('/', ''));
    const service = getServiceBySlug(slug);

    if (service) {
      const title = `${service.shortTitle} in NYC | Little Fight NYC`;
      const description = trimDescription(
        `${service.description} For NYC businesses that need faster support, clearer communication, and stronger trust.`,
      );

      return makeMeta(title, description, `/services/${service.slug}/`, [
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services/' },
          { name: service.shortTitle, path: `/services/${service.slug}/` },
        ]),
        serviceSchema(`/services/${service.slug}/`, service.title, description, service.shortTitle),
        faqSchema(service.faqs),
      ]);
    }
  }

  const routeMap: Record<string, RouteMeta> = {
    '/services/': makeMeta(
      'Services for NYC Small Businesses | Little Fight NYC',
      'Website design, private website reviews, local SEO, on-site IT support, POS setup, Apple device help, and practical technology services for small businesses.',
      '/services/',
      [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }])]
    ),
    '/solutions/': makeMeta(
      'How We Work | Little Fight NYC',
      'How Little Fight NYC approaches websites, audits, and small-business tech support without layering on unnecessary process.',
      '/solutions/',
      [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Solutions', path: '/solutions/' }])]
    ),
    '/industries/': makeMeta(
      'Industries We Help | Little Fight NYC',
      'Little Fight NYC supports restaurants, salons, studios, retail, fitness, and professional services that need better websites and calmer business tech.',
      '/industries/',
      [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Industries', path: '/industries/' }])]
    ),
    '/about/': makeMeta(
      'About Little Fight NYC | Small-Business Tech Partner',
      'Why Little Fight NYC exists, what we stand for, and how we support small businesses that need technology to make more sense.',
      '/about/',
      [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about/' }])]
    ),
    '/work/': makeMeta(
      'Work & Case Patterns | Little Fight NYC',
      'Representative examples of the operating, website, and local-visibility problems Little Fight NYC solves for small businesses.',
      '/work/',
      [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Work', path: '/work/' }])]
    ),
    '/contact/': makeMeta(
      'Contact Little Fight NYC | NYC Website & Tech Support',
      'Contact Little Fight NYC for website help, private website reviews, local SEO, on-site IT support, POS troubleshooting, Apple setup, and practical small-business tech consulting.',
      '/contact/',
      [
        breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }]),
        faqSchema(siteFaqs),
      ]
    ),
    '/privacy/': makeMeta(
      'Privacy Policy | Little Fight NYC',
      'How Little Fight NYC collects, uses, stores, and protects information submitted through the website, including contact details and project inquiries.',
      '/privacy/',
      [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy/' }])]
    ),
    '/terms/': makeMeta(
      'Terms of Service | Little Fight NYC',
      'General terms governing the use of the Little Fight NYC website, project communications, proposals, and related service engagements.',
      '/terms/',
      [breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Terms of Service', path: '/terms/' }])]
    ),
  };

  return routeMap[path] ?? makeMeta(DEFAULT_TITLE, DEFAULT_DESCRIPTION, '/', []);
}

export function getStaticRoutes() {
  return [
    '/',
    '/services/',
    '/solutions/',
    '/industries/',
    '/about/',
    '/work/',
    '/contact/',
    '/privacy/',
    '/terms/',
    '/services/website-design-small-business-nyc/',
    '/services/website-audit-small-business/',
    '/services/on-site-it-support-nyc/',
    '/services/local-seo-and-google-ads-nyc/',
    '/services/apple-device-setup-and-management/',
    '/services/branding-and-identity-design/',
    '/services/ecommerce-setup-shopify-square-woocommerce/',
    '/services/pos-and-register-setup-nyc/',
    '/services/tech-consulting-small-business/',
    '/services/smart-home-services-nyc/',
  ];
}
