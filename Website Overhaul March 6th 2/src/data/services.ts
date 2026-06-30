export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceExample {
  label: string;
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  description: string;
  tagline: string;
  availability: string;
  heroNote: string;
  icon: string;
  painPoints: string[];
  roiSummary: string;
  fit: string[];
  includes: string[];
  outcomes: string[];
  examples: ServiceExample[];
  faqs: ServiceFaq[];
}

export const legacyServiceAliases: Record<string, string> = {
  'apple-device-setup-nyc': 'apple-device-setup-and-management',
};

export const siteFaqs: ServiceFaq[] = [
  {
    question: "I'm not good with technology. Can you still help me?",
    answer:
      "Yes. We help owners who do not want to become part-time IT managers. We explain things clearly, keep the process calm, and set up systems your team can actually use.",
  },
  {
    question: 'Do you come to my business location?',
    answer:
      'Yes. We provide on-site support throughout Manhattan and remote support nationwide. If it needs hands-on work, we come to you. If it can be solved faster remotely, we do that too.',
  },
  {
    question: 'How much does this cost?',
    answer:
      'Pricing depends on the scope, but the goal is simple: practical help that makes sense for a small-business budget. The first conversation is free so you can understand the next step before committing.',
  },
  {
    question: 'Can you help fix my POS system or cash register?',
    answer:
      'Yes. Square, Clover, Toast, Lightspeed, and similar systems are a core part of the work. We handle setup, troubleshooting, cleanup, and staff training.',
  },
  {
    question: 'Why is it called Little Fight NYC?',
    answer:
      'Because small businesses are always in a fight: rising costs, bigger competitors, and tools that are supposed to help but often do the opposite. We exist to make that fight a little more manageable.',
  },
];

export const manhattanAreas = [
  'East Village',
  'Lower East Side',
  'West Village',
  'Meatpacking District',
  'SoHo',
  'Midtown',
  'Upper East Side',
];

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'website-design-small-business-nyc',
    title: 'Website Design for Small Businesses in NYC',
    shortTitle: 'Website Design',
    category: 'Websites & Growth',
    description:
      'Custom websites that are easier to read, easier to trust, and easier for the right customer to act on.',
    tagline: 'Clearer pages, better reading comfort, and a stronger path to a call, booking, or sale.',
    availability: 'NYC based, remote nationwide',
    heroNote:
      'Best for owners who have outgrown templates and need a site that matches the real quality of the business.',
    icon: 'monitor-shimmer',
    painPoints: [
      'The site looks old and does not match the quality of the business.',
      'People visit but still leave with basic questions or do not reach out.',
      'Reading on a phone feels cramped, confusing, or slow.',
    ],
    roiSummary:
      'This usually pays off through a stronger first impression, more qualified inquiries, and fewer calls spent explaining the basics.',
    fit: [
      'Businesses whose current site looks dated, loads slowly, or does not explain the offer clearly',
      'Owners tired of template builders that never quite fit the way the business actually works',
      'Teams that need a site customers can trust in seconds on mobile',
    ],
    includes: [
      'Custom page structure based on what your customers need to understand before they contact you',
      'Mobile-first design and lightweight builds that feel fast and easy to use',
      'Search-ready copy structure so Google and AI systems can understand what you do',
      'Launch support, analytics setup, and a handoff that does not leave you stranded',
    ],
    outcomes: [
      'Fewer calls spent explaining the basics',
      'More qualified leads who already understand your value',
      'A cleaner digital first impression that feels trustworthy from the start',
    ],
    examples: [
      {
        label: 'Professional Services',
        title: 'Authority-led consultation flow',
        description:
          'Pages organized around credibility, clarity, and direct consultation intent instead of vague agency language.',
      },
      {
        label: 'Hospitality',
        title: 'Reservation-first architecture',
        description:
          'Menu, room, or experience discovery streamlined into booking actions with fewer clicks and stronger trust cues.',
      },
      {
        label: 'Retail + Local Services',
        title: 'Clear offer hierarchy',
        description:
          'Hours, services, neighborhood context, and proof surfaced quickly so visitors can decide without hunting.',
      },
    ],
    faqs: [
      {
        question: 'How long does a website usually take?',
        answer: 'Most brochure and service-business websites ship in roughly 2 to 4 weeks once content and direction are clear.',
      },
      {
        question: 'Will it be built for search from the start?',
        answer: 'Yes. Page structure, metadata, internal linking, and service clarity are part of the foundation, not an afterthought.',
      },
      {
        question: 'Can my team update it later?',
        answer: 'Yes. We can build it to be easy to maintain, and if you would rather not touch it, we can handle updates for you.',
      },
    ],
  },
  {
    slug: 'website-audit-small-business',
    title: 'Website Audit for Small Businesses',
    shortTitle: 'Website Audit',
    category: 'Websites & Growth',
    description:
      'A private website review that shows what feels dated, hard to trust, hard to use, or likely to block calls, leads, or bookings.',
    tagline: 'Get clear before you spend more money.',
    availability: 'Remote nationwide',
    heroNote:
      'Best for owners who know the site is underperforming but want a clear outside view before making a bigger move.',
    icon: 'clipboard-check-outline',
    painPoints: [
      'You know the site feels off, but you do not know what deserves fixing first.',
      'You do not want to waste money on a redesign that solves the wrong problem.',
      'Partners or staff disagree on what the website is actually doing.',
    ],
    roiSummary:
      'This usually pays off through better decisions, less wasted spend, and a clearer path into the right next project.',
    fit: [
      'Businesses wondering whether the current website needs a full redesign or a smaller strategic cleanup',
      'Owners who want a clearer understanding of mobile readability, trust signals, and weak conversion paths before hiring anyone',
      'Teams that need an outside read on whether the site is helping or quietly costing calls, leads, or bookings',
    ],
    includes: [
      'A clear review of the current site structure, messaging, readability, and customer path',
      'An audit of mobile comfort, trust signals, local clarity, and obvious conversion friction',
      'Priority recommendations so you know what to fix first, what can wait, and what is not worth overthinking',
      'A direct next-step recommendation, whether that means redesign, content cleanup, SEO work, or leaving the site mostly alone',
    ],
    outcomes: [
      'More confidence about what is actually wrong and what is still working',
      'A cleaner path into the right next project instead of guessing or overspending',
      'Clearer language for discussing the website with partners, staff, or vendors',
    ],
    examples: [
      {
        label: 'Professional Services',
        title: 'Intake path clarity review',
        description:
          'A law office or advisory firm gets a clearer view of whether the site feels readable, authoritative, and easy to contact on mobile.',
      },
      {
        label: 'Hospitality',
        title: 'Decision-path audit',
        description:
          'A restaurant or cafe sees where menus, reservations, ordering, and trust cues are slowing people down.',
      },
      {
        label: 'Retail + Local Brands',
        title: 'Trust and conversion snapshot',
        description:
          'A bakery, studio, or boutique learns whether the site is helping customers understand the offer and take the next step quickly.',
      },
    ],
    faqs: [
      {
        question: 'Is the audit free?',
        answer: 'Yes. The audit is meant to be a low-friction first step so you can get clarity before deciding what kind of project makes sense.',
      },
      {
        question: 'Do I need to know the technical problem first?',
        answer: 'No. You do not need a diagnosis. If you can share the website and tell us what feels off, that is enough to start.',
      },
      {
        question: 'Will you tell me if a full redesign is not necessary?',
        answer: 'Yes. The point is useful clarity, not forcing every audit into a bigger engagement.',
      },
    ],
  },
  {
    slug: 'on-site-it-support-nyc',
    title: 'On-Site IT Support in NYC',
    shortTitle: 'On-Site IT Support',
    category: 'Business Tech & IT',
    description:
      'Hands-on help for Wi-Fi, devices, printers, and everyday tech issues that slow the business down.',
    tagline: 'We show up, fix the problem, and leave the setup easier to live with.',
    availability: 'On-site in Manhattan, remote follow-up available',
    heroNote:
      'Best for shops, restaurants, offices, and studios that cannot keep losing hours to fragile systems.',
    icon: 'tools',
    painPoints: [
      'Wi-Fi, printers, or devices keep slowing the team down.',
      'Small issues pile up until they interrupt service or sales.',
      'Nobody owns the problem, so the owner gets dragged in.',
    ],
    roiSummary:
      'This usually pays off through less downtime, smoother staff days, and fewer hours lost to repeat issues.',
    fit: [
      'Businesses losing time to Wi-Fi dropouts, printer issues, laptop chaos, or mystery network problems',
      'Teams that cannot afford to wait a week for a support window',
      'Owners who want one calm point of contact instead of chasing five vendors',
    ],
    includes: [
      'On-site troubleshooting for networks, devices, peripherals, and everyday business tech',
      'Practical cleanup of messy setups so your team has fewer recurring problems',
      'Advice on what to repair, replace, or stop wasting money on',
      'Follow-up recommendations in plain English so the fix stays fixed',
    ],
    outcomes: [
      'Less downtime during business hours',
      'Fewer repeat issues caused by rushed setups',
      'A steadier setup your staff can work with confidently',
    ],
    examples: [
      {
        label: 'Restaurants',
        title: 'Rush-hour rescue',
        description:
          'POS, printer, and network issues stabilized quickly so service can keep moving without hand-written workarounds.',
      },
      {
        label: 'Studios + Offices',
        title: 'Device and network cleanup',
        description:
          'A tangle of Wi-Fi extenders, old routers, and disconnected peripherals replaced with something coherent.',
      },
      {
        label: 'Retail',
        title: 'Front-of-house reliability',
        description:
          'Checkout, receipt printing, and staff devices aligned so the customer-facing experience stops feeling fragile.',
      },
    ],
    faqs: [
      {
        question: 'How fast can you usually respond in Manhattan?',
        answer: 'For urgent issues, the goal is same-day help whenever possible. If we can solve it remotely first, we will.',
      },
      {
        question: 'Do you only help with computers?',
        answer: 'No. Wi-Fi, printers, POS hardware, peripherals, and the messy parts between them are a big part of the job.',
      },
      {
        question: 'Can you help even if we do not know what the problem is?',
        answer: 'Yes. Most people call because something is broken, not because they already diagnosed it correctly.',
      },
    ],
  },
  {
    slug: 'local-seo-and-google-ads-nyc',
    title: 'Local SEO and Google Ads for NYC Small Businesses',
    shortTitle: 'Local SEO & Google Ads',
    category: 'Websites & Growth',
    description:
      'Local search and Google Ads work built to bring in better calls, better leads, and better visibility.',
    tagline: 'Show up when nearby customers are ready to choose.',
    availability: 'Remote nationwide with NYC local-search focus',
    heroNote:
      'Best for businesses that depend on local search, Google Maps, and a strong first impression online.',
    icon: 'chart-line',
    painPoints: [
      'Nearby customers cannot find you when they are ready to buy.',
      'The business is paying for ads or listings without clear results.',
      'Competitors with weaker service look easier to choose online.',
    ],
    roiSummary:
      'This usually pays off through more qualified calls, better local visibility, and fewer wasted marketing dollars.',
    fit: [
      'Businesses that depend on Google Maps, search visibility, and local intent',
      'Owners who keep hearing “you should do SEO” but need a plan that actually fits the business',
      'Teams tired of paying for ads without understanding where leads are coming from',
    ],
    includes: [
      'Google Business Profile cleanup and optimization',
      'Local landing-page strategy tied to real search intent',
      'Campaign structure for ads that prioritizes high-intent leads over wasted clicks',
      'Reporting that connects activity to calls, bookings, and contact quality',
    ],
    outcomes: [
      'Better visibility when nearby customers are ready to choose',
      'Cleaner traffic that has a reason to contact you',
      'A steadier local presence that does not depend on guesswork',
    ],
    examples: [
      {
        label: 'Beauty + Wellness',
        title: 'Booking-first local search',
        description:
          'Service pages and profile details aligned so the next action is obvious on phones.',
      },
      {
        label: 'Hospitality',
        title: 'Neighborhood demand capture',
        description:
          'Local intent pages paired with ad campaigns that focus on people already deciding where to go.',
      },
      {
        label: 'Professional Services',
        title: 'Trust-first lead generation',
        description:
          'Search visibility paired with clearer trust signals so prospects arrive better informed.',
      },
    ],
    faqs: [
      {
        question: 'Do I need both SEO and ads?',
        answer: 'Not always. Some businesses need a stronger foundation first. Others benefit from ads while SEO is maturing. The right answer depends on the sales cycle and competition.',
      },
      {
        question: 'How quickly do results show up?',
        answer: 'Ads can move quickly. SEO usually takes longer but compounds over time. We build the plan around what needs to happen now versus what should still be paying off months from now.',
      },
      {
        question: 'Will I understand what you are doing?',
        answer: 'Yes. The work should be explainable in plain language, otherwise it is not being managed well.',
      },
    ],
  },
  {
    slug: 'apple-device-setup-and-management',
    title: 'Apple Device Setup and Management',
    shortTitle: 'Apple Device Setup',
    category: 'Business Tech & IT',
    description:
      'Mac, iPad, and iPhone setup for teams that need business devices to feel clean, secure, and consistent.',
    tagline: 'Keep Apple simple, secure, and easy to hand off.',
    availability: 'On-site in Manhattan, remote planning and policy support available',
    heroNote:
      'Best for growing teams that want less setup chaos and better control over company devices.',
    icon: 'apple',
    painPoints: [
      'New devices get set up differently every time.',
      'Business accounts and personal accounts are mixed together.',
      'When someone joins or leaves, access becomes messy and risky.',
    ],
    roiSummary:
      'This usually pays off through less setup chaos, fewer support interruptions, and lower risk around staff changes.',
    fit: [
      'Businesses buying multiple Apple devices for a team without a real onboarding process',
      'Owners who need better control over company devices, apps, and accounts',
      'Studios, hospitality teams, and service businesses using iPads or Macs in daily operations',
    ],
    includes: [
      'New-device setup, account structure, and deployment planning',
      'Basic security rules, shared access planning, and app rollout support',
      'Cleanup of unmanaged devices and scattered account ownership',
      'Simple documentation so your team knows what belongs to the business and how it is managed',
    ],
    outcomes: [
      'Less chaos when someone joins, leaves, or changes roles',
      'Fewer support tickets caused by inconsistent device setups',
      'A cleaner, more secure Apple environment that still feels easy to use',
    ],
    examples: [
      {
        label: 'Retail',
        title: 'Shared iPad workflows',
        description:
          'Front-of-house devices prepared for daily use without a confusing tangle of personal Apple IDs.',
      },
      {
        label: 'Creative Teams',
        title: 'Mac onboarding system',
        description:
          'New hires receive devices with the right access, apps, and standards from day one.',
      },
      {
        label: 'Hospitality',
        title: 'Operational device consistency',
        description:
          'Tablets, phones, and manager laptops aligned so staff can move without guesswork.',
      },
    ],
    faqs: [
      {
        question: 'Do I need MDM for a small team?',
        answer: 'Not always, but once multiple devices and multiple people are involved, some kind of management standard becomes worth it quickly.',
      },
      {
        question: 'Can you help us clean up old Apple IDs and ownership issues?',
        answer: 'Yes. Untangling personal versus business ownership is one of the most valuable parts of the work.',
      },
      {
        question: 'Is this only for companies with a big IT budget?',
        answer: 'No. The point is to create a setup that fits a small business and removes avoidable friction.',
      },
    ],
  },
  {
    slug: 'branding-and-identity-design',
    title: 'Branding and Identity Design',
    shortTitle: 'Branding & Identity',
    category: 'Websites & Growth',
    description:
      'Brand systems that help the business look more established, more consistent, and easier to remember.',
    tagline: 'A better brand makes good work look as strong as it really is.',
    availability: 'Remote nationwide',
    heroNote:
      'Best for businesses that have grown, but still look pieced together online or in print.',
    icon: 'lightbulb-outline',
    painPoints: [
      'The business feels strong in person but looks inconsistent online.',
      'Menus, signage, website, and social all feel like different businesses.',
      'A weak visual identity makes good work look smaller than it is.',
    ],
    roiSummary:
      'This usually pays off through stronger trust, better recall, and a cleaner first impression across every channel.',
    fit: [
      'Businesses that still look improvised even though the service is strong',
      'Owners launching something new and needing a confident first impression',
      'Teams whose website, menus, signage, and social channels all feel disconnected',
    ],
    includes: [
      'Identity direction rooted in the audience you are trying to earn trust with',
      'Logo, typography, color, and visual rules that hold together across channels',
      'Practical brand applications for websites, decks, menus, packaging, or signage',
      'A cleaner system so future design work feels coherent instead of accidental',
    ],
    outcomes: [
      'A brand that feels more credible at first glance',
      'Stronger consistency across online and physical touchpoints',
      'Less second-guessing every time something new needs to be designed',
    ],
    examples: [
      {
        label: 'Hospitality',
        title: 'Atmosphere with structure',
        description:
          'Visual identity that carries from storefront and menus into the website and booking experience.',
      },
      {
        label: 'Professional Services',
        title: 'Authority without stiffness',
        description:
          'A cleaner system that signals expertise without looking generic or corporate.',
      },
      {
        label: 'Retail',
        title: 'Shelf-to-screen consistency',
        description:
          'Brand decisions that feel unified whether someone sees the business online or in person.',
      },
    ],
    faqs: [
      {
        question: 'Do I need branding before a new website?',
        answer: 'Not always, but weak branding often limits how strong the website can feel. Sometimes a light identity pass changes everything.',
      },
      {
        question: 'Can you work with what I already have?',
        answer: 'Yes. Some projects need a full reset. Others just need the existing brand tightened and made usable.',
      },
      {
        question: 'Is this only logos?',
        answer: 'No. The goal is a usable identity system, not a single isolated mark.',
      },
    ],
  },
  {
    slug: 'ecommerce-setup-shopify-square-woocommerce',
    title: 'E-Commerce Setup with Shopify, Square, and WooCommerce',
    shortTitle: 'E-Commerce Setup',
    category: 'Websites & Growth',
    description:
      'Online store setups that feel clear to shoppers and manageable for the team behind the scenes.',
    tagline: 'Sell online without creating a second full-time job.',
    availability: 'Remote nationwide',
    heroNote:
      'Best for retail and product businesses that want online sales without added chaos.',
    icon: 'store-outline',
    painPoints: [
      'People start checkout and drop off before they buy.',
      'Online sales create more back-office confusion than they should.',
      'The store does not feel trustworthy or easy to manage.',
    ],
    roiSummary:
      'This usually pays off through smoother checkout, fewer order headaches, and online revenue that is easier to keep.',
    fit: [
      'Businesses launching online sales for the first time',
      'Teams whose current checkout flow feels clunky or abandoned halfway through',
      'Owners trying to connect inventory, fulfillment, and customer experience without duct tape',
    ],
    includes: [
      'Platform setup around the way the business actually fulfills and manages orders',
      'Clear product structure, collection logic, and checkout flow cleanup',
      'Integration planning for payments, basic inventory, shipping, or in-store coordination',
      'Foundational analytics so you can see what is working and where people drop off',
    ],
    outcomes: [
      'A smoother path from product discovery to completed purchase',
      'Less confusion after launch',
      'A store that feels credible enough to trust with a card number',
    ],
    examples: [
      {
        label: 'Retail',
        title: 'Storefront plus in-person sync',
        description:
          'Online and physical operations aligned so inventory and checkout do not feel like separate businesses.',
      },
      {
        label: 'Hospitality Merch',
        title: 'Simple revenue extension',
        description:
          'Merch, gift cards, or packaged goods added without turning the business into a fulfillment nightmare.',
      },
      {
        label: 'Specialty Products',
        title: 'Clarity-led product pages',
        description:
          'Information architecture shaped so customers understand the offer quickly and abandon checkout less often.',
      },
    ],
    faqs: [
      {
        question: 'Which platform should I use?',
        answer: 'That depends on your products, operations, and how much flexibility you really need. The right choice is usually the one your team can maintain without constant workarounds.',
      },
      {
        question: 'Can you connect online sales with our in-person setup?',
        answer: 'Yes. That planning is often the difference between a clean launch and a painful one.',
      },
      {
        question: 'Can you help if the store already exists?',
        answer: 'Yes. Cleanup, restructuring, and checkout optimization are common starting points.',
      },
    ],
  },
  {
    slug: 'pos-and-register-setup-nyc',
    title: 'POS and Register Setup in NYC',
    shortTitle: 'POS & Registers',
    category: 'Business Tech & IT',
    description:
      'Point-of-sale setup that keeps checkout fast, stable, and less stressful during busy hours.',
    tagline: 'Checkout should feel boring, fast, and dependable.',
    availability: 'On-site in Manhattan',
    heroNote:
      'Best for restaurants, hospitality, and retail teams that cannot afford breakdowns at the counter.',
    icon: 'cash-register',
    painPoints: [
      'Checkout slows down when the room gets busy.',
      'Printers, readers, or stations fail at the worst time.',
      'Staff work around the system instead of trusting it.',
    ],
    roiSummary:
      'This usually pays off through faster checkout, fewer customer-facing delays, and less stress during peak hours.',
    fit: [
      'Businesses opening a new location or replacing an unreliable setup',
      'Teams losing time to printer issues, disconnected card readers, or poor station configuration',
      'Owners who need both technical setup and practical staff training',
    ],
    includes: [
      'System selection and setup support for the way your front-of-house actually works',
      'Hardware, networking, and peripheral coordination so stations work together cleanly',
      'Staff training and simple operating guidance',
      'Troubleshooting and stabilization when an existing setup keeps failing under pressure',
    ],
    outcomes: [
      'Faster checkout and fewer customer-facing delays',
      'Less staff confusion during busy periods',
      'A setup that feels dependable instead of fragile',
    ],
    examples: [
      {
        label: 'Restaurants',
        title: 'Rush-hour stability',
        description:
          'Kitchen printing, receipt flow, and front-of-house payment handling aligned under real service conditions.',
      },
      {
        label: 'Retail',
        title: 'Counter workflow cleanup',
        description:
          'Register layout and hardware choices adjusted for faster throughput and fewer support calls.',
      },
      {
        label: 'Hospitality',
        title: 'Multi-device coordination',
        description:
          'Shared devices, network dependencies, and staff access rights tightened so service does not stall.',
      },
    ],
    faqs: [
      {
        question: 'Which POS systems do you work with?',
        answer: 'Square, Clover, Toast, Lightspeed, and other common small-business systems are all in scope.',
      },
      {
        question: 'Can you help train the staff too?',
        answer: 'Yes. A technically correct setup still fails if the day-to-day workflow is confusing.',
      },
      {
        question: 'Can you troubleshoot a live broken system?',
        answer: 'Yes. Rescue and stabilization work is a regular part of the job.',
      },
    ],
  },
  {
    slug: 'tech-consulting-small-business',
    title: 'Tech Consulting for Small Businesses',
    shortTitle: 'Tech Consulting',
    category: 'Business Tech & IT',
    description:
      'Plain-English guidance on what to buy, what to skip, and what order to tackle things in.',
    tagline: 'Good advice can save a small business a lot of wasted money.',
    availability: 'Remote nationwide, in-person strategy available in NYC',
    heroNote:
      'Best when something needs to change, but you do not want to guess your way into new problems.',
    icon: 'clipboard-check-outline',
    painPoints: [
      'You need to make a tech decision but do not trust the options in front of you.',
      'Vendors keep recommending more tools than the business actually needs.',
      'A move, opening, or upgrade could get expensive fast if the order is wrong.',
    ],
    roiSummary:
      'This usually pays off through fewer bad purchases, better sequencing, and less money lost to the wrong setup.',
    fit: [
      'Owners deciding between tools, vendors, or upgrades without a neutral guide',
      'Businesses opening, relocating, hiring, or reworking operations',
      'Teams that need a short list of smart next moves instead of ten conflicting opinions',
    ],
    includes: [
      'Technology audits focused on business risk, waste, and near-term priorities',
      'Practical recommendations on devices, software, systems, and sequencing',
      'Vendor translation so you can compare proposals without getting snowed',
      'Short roadmaps that help you move from chaos to a sane operating plan',
    ],
    outcomes: [
      'More confidence about what to do next',
      'Less money lost to the wrong tools or premature upgrades',
      'A roadmap that fits a small business instead of an enterprise playbook',
    ],
    examples: [
      {
        label: 'Openings + Relocations',
        title: 'Right-size the stack',
        description:
          'Network, POS, website, devices, and operations planned together before the scramble begins.',
      },
      {
        label: 'Growing Teams',
        title: 'Smoother scaling decisions',
        description:
          'Systems chosen with onboarding, permissions, and support overhead in mind.',
      },
      {
        label: 'Stalled Operations',
        title: 'Cut through tool fatigue',
        description:
          'Recommendations shaped around what the business actually needs, not what is trendy.',
      },
    ],
    faqs: [
      {
        question: 'Is this useful if nothing is technically broken right now?',
        answer: 'Yes. Consulting is often most valuable before a rushed purchase, move, or rollout creates preventable problems.',
      },
      {
        question: 'Will I get a real plan out of it?',
        answer: 'Yes. The point is not abstract strategy. It is a practical next-step roadmap you can act on.',
      },
      {
        question: 'Can consulting turn into implementation later?',
        answer: 'Yes. We can stay strategic or move into hands-on rollout depending on what makes the most sense.',
      },
    ],
  },
  {
    slug: 'smart-home-services-nyc',
    title: 'Smart Home and Smart Business Systems in NYC',
    shortTitle: 'Smart Systems',
    category: 'Smart Systems',
    description:
      'Smart home and smart business systems that feel easy to control instead of overbuilt.',
    tagline: 'Automation should remove friction, not create more of it.',
    availability: 'On-site in Manhattan',
    heroNote:
      'Best for spaces that need lighting, security, audio, or access control to work together simply.',
    icon: 'cellphone-link',
    painPoints: [
      'Different smart devices do not work well together.',
      'The space has too many apps, remotes, or unreliable automations.',
      'Control, comfort, or security still takes too much effort.',
    ],
    roiSummary:
      'This usually pays off through better reliability, less daily friction, and systems people actually keep using.',
    fit: [
      'Owners or residents upgrading spaces with lighting, security, audio, or access control',
      'Businesses that need simple automation without enterprise complexity',
      'People tired of smart products that do not work well together',
    ],
    includes: [
      'Planning for smart lighting, cameras, access control, networking, and connected device ecosystems',
      'Installation coordination and configuration around how the space is actually used',
      'Cleanup of fragmented apps, hubs, and inconsistent automations',
      'Simple documentation and handoff so daily use feels predictable',
    ],
    outcomes: [
      'Spaces that feel calmer and easier to control',
      'Better reliability across connected devices',
      'Automation that supports the room instead of stealing attention from it',
    ],
    examples: [
      {
        label: 'Hospitality',
        title: 'Guest-facing comfort systems',
        description:
          'Lighting, access, and atmosphere aligned to support operations and experience at the same time.',
      },
      {
        label: 'Retail + Office',
        title: 'Easier daily control',
        description:
          'Security, entry, and environmental settings made easier to manage for staff and ownership.',
      },
      {
        label: 'Residential',
        title: 'Less app juggling',
        description:
          'Connected systems simplified so they feel dependable enough to use every day.',
      },
    ],
    faqs: [
      {
        question: 'Can you work with systems we already have?',
        answer: 'Yes. Many projects start with cleaning up an existing mix of devices before adding anything new.',
      },
      {
        question: 'Do smart systems have to be complicated?',
        answer: 'No. The best setups feel obvious to use and stay out of your way.',
      },
      {
        question: 'Is this only for homes?',
        answer: 'No. Offices, retail environments, and hospitality spaces often benefit even more from simple, dependable automation.',
      },
    ],
  },
];

export const serviceGroups = [
  {
    title: 'Websites & Growth',
    description:
      'Websites, search, and brand work that help more people understand, trust, and choose the business.',
    slugs: [
      'website-design-small-business-nyc',
      'website-audit-small-business',
      'local-seo-and-google-ads-nyc',
      'branding-and-identity-design',
      'ecommerce-setup-shopify-square-woocommerce',
    ],
  },
  {
    title: 'Business Tech & IT',
    description:
      'The systems that keep staff moving, sales flowing, and owners out of constant tech triage.',
    slugs: [
      'on-site-it-support-nyc',
      'apple-device-setup-and-management',
      'pos-and-register-setup-nyc',
      'tech-consulting-small-business',
    ],
  },
  {
    title: 'Smart Systems',
    description:
      'Connected spaces that feel simple, dependable, and easy to use every day.',
    slugs: ['smart-home-services-nyc'],
  },
];

export const featuredServiceSlugs = [
  'website-audit-small-business',
  'website-design-small-business-nyc',
  'on-site-it-support-nyc',
  'local-seo-and-google-ads-nyc',
  'pos-and-register-setup-nyc',
  'tech-consulting-small-business',
];

export function resolveServiceSlug(slug: string) {
  return legacyServiceAliases[slug] ?? slug;
}

export function getServiceBySlug(slug: string) {
  const resolvedSlug = resolveServiceSlug(slug);
  return serviceDetails.find((service) => service.slug === resolvedSlug);
}
