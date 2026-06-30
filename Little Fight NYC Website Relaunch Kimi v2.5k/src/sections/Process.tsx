import { MessageCircle, Zap, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Tell Us What\'s Broken',
    description: 'Call, email, or book online. We\'ll ask the right questions to understand what\'s going wrong.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'We Fix It Fast',
    description: 'Same-day response. Most issues resolved in one visit. If we can\'t fix it, we\'ll tell you fast.',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'You Get Back to Business',
    description: 'No more tech headaches. You focus on customers, we keep your systems running smooth.',
  },
];

export default function Process() {
  return (
    <section className="bg-bone py-20 lg:py-28">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20 fade-up-section">
          <span className="eyebrow mb-4 block">How It Works</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-graphite">
            Three steps to calm, reliable tech
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative fade-up-section">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-stone/40 -z-10" />
              )}
              
              <div className="text-center">
                {/* Number */}
                <span className="font-display text-6xl lg:text-7xl font-bold text-stone/30 block mb-4">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-display font-semibold text-graphite text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
