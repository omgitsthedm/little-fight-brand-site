import {
  Wrench,
  Globe,
  TrendingUp,
  Smartphone,
  Palette,
  ShoppingCart,
  CreditCard,
  MessageCircle,
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'On-Site IT Support',
    description: 'We show up and fix it. Mac, PC, printers, Wi-Fi, POS systems.',
  },
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Beautiful, fast websites that actually bring in customers.',
  },
  {
    icon: TrendingUp,
    title: 'Local SEO & Ads',
    description: 'Get found on Google by people in your neighborhood.',
  },
  {
    icon: Smartphone,
    title: 'Apple Device Setup',
    description: 'iPhones, iPads, Macs—set up, secured, and managed simply.',
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    description: 'Logo, name, or complete visual identity. Look legit.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Setup',
    description: 'Shopify, Square, WooCommerce. Start selling online.',
  },
  {
    icon: CreditCard,
    title: 'POS & Registers',
    description: 'Square, Clover, Toast. Setup, troubleshooting, training.',
  },
  {
    icon: MessageCircle,
    title: 'Tech Consulting',
    description: "Not sure what you need? Let's talk. First hour is free.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-bone py-20 lg:py-28">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20 fade-up-section">
          <span className="eyebrow mb-4 block">What We Do</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-graphite mb-5">
            Tech Support That Actually Helps
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            From websites to Wi-Fi, we handle the technical headaches so you can focus on customers, team, and momentum.
          </p>
        </div>

        {/* Services Grid */}
        <div className="stagger-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="stagger-item card p-6 lg:p-7 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-graphite text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
