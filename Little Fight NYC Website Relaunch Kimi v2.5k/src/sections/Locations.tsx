import { Globe, Monitor, Phone, Cloud } from 'lucide-react';

const neighborhoods = [
  'East Village',
  'Lower East Side',
  'West Village',
  'Meatpacking District',
  'SoHo',
  'Midtown',
  'Upper East Side',
];

const remoteServices = [
  { icon: Monitor, label: 'Screen sharing' },
  { icon: Phone, label: 'Phone & video support' },
  { icon: Globe, label: 'Website design & SEO' },
  { icon: Cloud, label: 'Cloud setup & management' },
];

export default function Locations() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* NYC On-Site */}
          <div className="fade-up-section">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🗽</span>
              <span className="eyebrow">Manhattan On-Site Service</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-graphite mb-6">
              On-site IT support throughout Manhattan
            </h3>
            <div className="flex flex-wrap gap-2">
              {neighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="inline-flex items-center px-4 py-2 border border-stone/60 rounded-full font-mono text-xs uppercase tracking-wider text-muted hover:border-primary hover:text-primary transition-colors cursor-default"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>

          {/* Remote */}
          <div className="fade-up-section">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🌎</span>
              <span className="eyebrow">Nationwide Remote Support</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-graphite mb-6">
              Remote support for small businesses anywhere in the United States
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {remoteServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-bone rounded-xl"
                >
                  <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-graphite font-medium">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
