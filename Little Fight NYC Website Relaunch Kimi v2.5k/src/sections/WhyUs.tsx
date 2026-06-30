import { ArrowRight } from 'lucide-react';

export default function WhyUs() {
  return (
    <section id="about" className="bg-bone py-20 lg:py-28">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="fade-up-section">
            <div className="relative">
              <div className="aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="/team-collab.jpg"
                  alt="Our team collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="fade-up-section">
            <span className="eyebrow mb-4 block">Why Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-graphite mb-6">
              We're Small Business People Too
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Big corporations have IT departments. You have us—a small, scrappy team that actually cares about keeping NYC's independent businesses thriving.
            </p>
            <button
              onClick={() => {
                const el = document.querySelector('#contact');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Learn About Us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
