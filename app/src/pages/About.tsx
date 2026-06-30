import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import {
  MessageCircle,
  MapPin,
  Heart,
  GraduationCap,
  Target,
  Zap,
  ArrowRight,
  Coffee,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const operatingStandards = [
  {
    icon: MessageCircle,
    title: 'No Jargon',
    description:
      'Every recommendation is explained in plain language. If the owner cannot repeat it back, we have not explained it well enough.',
  },
  {
    icon: MapPin,
    title: 'Show Up',
    description:
      'On-site in Manhattan, same day. Remote support nationwide. We are present when it counts — not just available.',
  },
  {
    icon: GraduationCap,
    title: 'Teach, Don\'t Just Fix',
    description:
      'We explain what we did and why, so you make better decisions going forward. Knowledge transfer is not optional.',
  },
  {
    icon: Heart,
    title: 'Actually Care',
    description:
      'We treat your business like it matters — because it does. To your family, your employees, your neighborhood. We do not forget that.',
  },
  {
    icon: Zap,
    title: 'Move Fast',
    description:
      'Websites in weeks, not months. System issues resolved the same day. Speed is a form of respect for your time and revenue.',
  },
  {
    icon: Target,
    title: 'Outcomes Over Output',
    description:
      'We measure success by what improves — trust, operations, perception — not by hours logged or tickets closed.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Tell us what feels off',
    description:
      'No forms. No intake questionnaires. Just a real conversation about what is not working and what it is costing you.',
  },
  {
    step: '02',
    title: 'Sort the highest-cost issue first',
    description:
      'We identify the weak point that is doing the most damage — to trust, revenue, or operations — and address it first.',
  },
  {
    step: '03',
    title: 'Leave with a calmer system',
    description:
      'Fewer weak points. Better standards. A digital presence and operational foundation that actually reflects the quality of your work.',
  },
];

export default function About() {
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.story-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: storyRef.current, start: 'top 70%' },
        }
      );

      gsap.fromTo(
        '.value-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: valuesRef.current, start: 'top 70%' },
        }
      );

      gsap.fromTo(
        '.process-step',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: processRef.current, start: 'top 75%' },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="section-luxury pt-28 lg:pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[var(--lf-orange)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="eyebrow">About Us</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--lf-charcoal)] leading-tight mb-8">
              Small businesses are always in some kind of fight.
            </h1>
            <p className="text-xl text-[var(--lf-muted)] leading-relaxed max-w-3xl">
              Against rising costs, competition, outdated tools, and confused vendor relationships. We built a practice around making that fight a little easier.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section — Founder Voice */}
      <section ref={storyRef} className="section-luxury bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="story-content grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)] mb-8">
                What we noticed
              </h2>
              <div className="space-y-6 text-lg text-[var(--lf-muted)] leading-relaxed">
                <p>
                  Small business owners were paying too much for unclear help and still ending up with fragile systems.
                </p>
                <p>
                  The work is excellent. The service is genuine. The reputation is strong within its circle. But the website looks like it was built five years ago. The systems create more friction than flow. And the digital presence — the thing most new customers encounter first — does not reflect the quality of what happens inside.
                </p>
                <p>
                  That gap between internal quality and external presentation is not cosmetic. It costs trust. It costs credibility. It costs revenue. And most business owners know it, even if they have not had the right partner to address it.
                </p>
                <p className="text-[var(--lf-charcoal)] font-medium">
                  Little Fight NYC was built to close that gap.
                </p>
              </div>
            </div>
            <div className="space-y-6 text-lg text-[var(--lf-muted)] leading-relaxed">
              <p>
                We do not try to impress people with complexity. We want the owner to understand what is wrong, what matters first, and what the cleanest next move actually is.
              </p>
              <p>
                The approach is not complicated. It is: fewer weak points, better standards, and a digital presence that is more aligned with the reality of your work.
              </p>
              <p>
                When small businesses feel sharper, calmer, and easier to trust, neighborhoods keep their character. The corner shop stays. The salon thrives. The restaurant that has been there for decades gets the digital presence it deserves.
              </p>
              <div className="bg-[var(--lf-bone)] rounded-3xl p-8 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="w-6 h-6 text-[var(--lf-orange)]" />
                  <p className="text-[var(--lf-charcoal)] font-medium text-xl">Why the name:</p>
                </div>
                <p className="text-[var(--lf-muted)]">
                  Running a good business in a competitive market is a quiet, persistent fight. Against noise, against mediocrity, against systems that make things harder than they need to be. We are in that fight with our clients — methodically, not dramatically.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="story-content mt-20 bg-gradient-to-br from-[var(--lf-charcoal)] to-[var(--lf-graphite)] rounded-3xl p-10 lg:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--lf-orange)]/20 rounded-full blur-[80px]" />

            <h3 className="text-2xl lg:text-3xl font-bold mb-6 relative z-10">Our Position</h3>
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto relative z-10">
              We help businesses modernize how they look, work, and are experienced — so the outside finally matches the inside.
            </p>
            <p className="text-lg text-white/50 mt-8 relative z-10">
              Good systems change perception. Clarity builds trust. And businesses that present well earn the credibility they have always deserved.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="section-luxury section-luxury-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">How It Works</p>
            <h2 className="title">Three steps. No runaround.</h2>
            <p className="description">
              We skip the intake forms, the discovery phases, and the 6-week onboarding. Here is how it actually works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="process-step bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <p className="text-4xl font-bold text-[var(--lf-orange)]/20 mb-4">
                  {item.step}
                </p>
                <h3 className="text-xl font-semibold text-[var(--lf-charcoal)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--lf-muted)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Standards */}
      <section ref={valuesRef} className="section-luxury bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Our Standards</p>
            <h2 className="title">What guides every engagement</h2>
            <p className="description">
              These are not aspirations. They are operating standards — the non-negotiable rules that shape how we show up.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatingStandards.map((value, index) => (
              <div
                key={index}
                className="value-card bg-[var(--lf-bone)] rounded-3xl p-8 hover:bg-white hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[var(--lf-orange)]/10 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-[var(--lf-orange)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--lf-charcoal)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--lf-muted)] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-luxury bg-[var(--lf-charcoal)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--lf-orange)]/10 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="stat-number-luxury mb-2">4</p>
              <p className="text-white/60">Live Projects</p>
            </div>
            <div>
              <p className="stat-number-luxury mb-2">96.5</p>
              <p className="text-white/60">Average Trust Score</p>
            </div>
            <div>
              <p className="stat-number-luxury mb-2">66</p>
              <p className="text-white/60">Pages Built</p>
            </div>
            <div>
              <p className="stat-number-luxury mb-2">0</p>
              <p className="text-white/60">Frameworks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-luxury bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)] mb-6">
            Ready to close the gap?
          </h2>
          <p className="text-lg text-[var(--lf-muted)] mb-10 max-w-2xl mx-auto">
            If your business is better than it looks online, we should talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact" className="btn-primary">
              Book a Private Consult
            </Link>
            <a
              href="https://audits.littlefightnyc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Audit Your Website <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
