import { X, Check, ArrowRight } from 'lucide-react';

export default function BeforeAfter() {
  return (
    <section className="bg-charcoal py-20 lg:py-28">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20 fade-up-section">
          <span className="eyebrow mb-4 block text-stone">What Feels Different</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-bone mb-5">
            Premium doesn't mean fancy words. It means less friction.
          </h2>
        </div>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <div className="bg-graphite/50 rounded-2xl p-6 lg:p-8 fade-up-section">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-5">
              <X className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="font-display font-semibold text-bone text-lg mb-3">Before</h3>
            <p className="text-stone leading-relaxed">
              Generic pages, mixed messages, and traffic that doesn't convert.
            </p>
          </div>

          {/* Arrow - Desktop only */}
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="w-10 h-10 text-stone/50" />
          </div>

          {/* After */}
          <div className="bg-primary/20 rounded-2xl p-6 lg:p-8 fade-up-section">
            <div className="w-12 h-12 bg-primary/30 rounded-xl flex items-center justify-center mb-5">
              <Check className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-bone text-lg mb-3">After</h3>
            <p className="text-stone leading-relaxed">
              Focused pages, clearer trust signals, and easier decision-making for the right clients.
            </p>
          </div>
        </div>

        {/* Outcome */}
        <div className="text-center mt-12 lg:mt-16 fade-up-section">
          <p className="text-bone text-lg lg:text-xl font-medium">
            Less explaining on calls. More inbound leads that already understand what you do.
          </p>
        </div>
      </div>
    </section>
  );
}
