import { Clock, MapPin, Globe } from 'lucide-react';

const trustItems = [
  {
    icon: Clock,
    title: 'Free First Hour',
    description: 'Your first consultation is on us. No strings attached.',
  },
  {
    icon: MapPin,
    title: 'NYC On-Site',
    description: 'We come to you in Manhattan, Brooklyn, Queens.',
  },
  {
    icon: Globe,
    title: 'Remote Anywhere',
    description: 'Nationwide support via screen share and video.',
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-stone/40 fade-up-section">
      <div className="section-padding py-10 lg:py-14">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-graphite mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
