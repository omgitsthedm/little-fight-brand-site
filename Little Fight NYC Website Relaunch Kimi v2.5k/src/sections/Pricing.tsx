import { ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Quick Fix',
    price: '$150',
    description: 'One issue, one visit, one flat rate.',
    cta: 'Book a Visit',
    featured: false,
  },
  {
    name: 'Website in a Week',
    price: 'From $1,200',
    description: 'Launch-ready site with SEO basics.',
    cta: 'Request a Quote',
    featured: true,
  },
  {
    name: 'Monthly Support',
    price: 'From $350/mo',
    description: 'Ongoing help + maintenance.',
    cta: 'See the Plan',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20 fade-up-section">
          <span className="eyebrow mb-4 block">Simple Pricing</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-graphite mb-5">
            Choose what fits today. Upgrade anytime.
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto stagger-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`stagger-item rounded-2xl p-6 lg:p-8 ${
                plan.featured
                  ? 'bg-primary/5 border-2 border-primary'
                  : 'bg-white border border-stone/40'
              }`}
            >
              <h3 className="font-display font-semibold text-graphite text-lg mb-2">
                {plan.name}
              </h3>
              <div className="font-display text-3xl lg:text-4xl font-bold text-graphite mb-3">
                {plan.price}
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6">
                {plan.description}
              </p>
              <button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all duration-200 ${
                  plan.featured
                    ? 'bg-primary text-white hover:bg-primary-light'
                    : 'bg-graphite text-white hover:bg-charcoal'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-10 fade-up-section">
          <p className="text-muted text-sm">
            <span className="text-primary">👋</span> First hour of consulting is always free.
          </p>
        </div>
      </div>
    </section>
  );
}
