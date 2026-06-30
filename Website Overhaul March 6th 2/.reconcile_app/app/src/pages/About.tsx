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
  Users,
  Globe,
  Coffee,
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: MessageCircle,
    title: 'No Jargon, Ever',
    description: "We'll explain everything in plain English. You'll never feel dumb asking questions."
  },
  {
    icon: MapPin,
    title: 'Show Up',
    description: 'Same-day service in Manhattan. Because "next week" doesn\'t work when your POS is down.'
  },
  {
    icon: Target,
    title: 'Results First',
    description: 'We measure success by your success. More bookings, more customers, less downtime.'
  },
  {
    icon: GraduationCap,
    title: 'Teach, Don\'t Just Fix',
    description: 'We show you what we did so you\'re empowered, not dependent.'
  },
  {
    icon: Heart,
    title: 'Actually Care',
    description: 'Your success is our success. We celebrate your wins like they\'re our own.'
  },
  {
    icon: Zap,
    title: 'Move Fast',
    description: 'Websites in weeks, not months. IT support same day. Speed matters.'
  }
];

const differentiators = [
  {
    icon: MapPin,
    title: "We're Local — Really Local",
    description: 'Based in Manhattan. We know the neighborhoods, the challenges, and the unique needs of NYC small businesses. When you call, we can be at your door in hours, not days.'
  },
  {
    icon: Globe,
    title: 'Websites Anywhere in the World',
    description: "While our IT support is Manhattan-only, we build websites for businesses everywhere — from Miami to Madrid. Remote collaboration, same premium quality."
  },
  {
    icon: Users,
    title: 'Work Directly With Experts',
    description: 'No account managers. No offshore teams. You talk to the people actually building your site or fixing your tech. Direct line, always.'
  },
  {
    icon: Heart,
    title: 'We Actually Care',
    description: "We're not a call center. We're not an offshore team. We're a small group of humans who genuinely want to see your business succeed."
  }
];

export default function About() {
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const differentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.story-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: storyRef.current, start: 'top 70%' }
        }
      );

      gsap.fromTo('.value-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: valuesRef.current, start: 'top 70%' }
        }
      );

      gsap.fromTo('.different-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: differentRef.current, start: 'top 75%' }
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
              We started Little Fight because we were tired of watching small businesses get taken advantage of.
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="section-luxury bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="story-content grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)] mb-8">
                The story behind the fight
              </h2>
              <div className="space-y-6 text-lg text-[var(--lf-muted)] leading-relaxed">
                <p>
                  Little Fight NYC started in a coffee shop in the East Village.
                </p>
                <p>
                  Our founder was sitting next to the owner, Sarah, who was on the phone with her third IT company that week. Her website had been down for days. Her POS was glitching. And the "tech support" person on the other end was speaking in a language she didn't understand, quoting prices that made her wince.
                </p>
                <p>
                  Sarah wasn't tech-illiterate. She was a brilliant business owner who had built a thriving café in one of the most competitive markets in the world. But the tech industry made her feel small. Made her feel dumb. And was charging her enterprise prices for problems that should have taken an hour to fix.
                </p>
                <p>
                  That conversation sparked something.
                </p>
              </div>
            </div>
            <div className="space-y-6 text-lg text-[var(--lf-muted)] leading-relaxed">
              <p>
                What if there was a tech company that actually understood small business? That spoke human? That showed up when they said they would? That charged fair prices and explained what they were doing?
              </p>
              <p>
                Little Fight NYC was born that afternoon.
              </p>
              <div className="bg-[var(--lf-bone)] rounded-3xl p-8 mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="w-6 h-6 text-[var(--lf-orange)]" />
                  <p className="text-[var(--lf-charcoal)] font-medium text-xl">Our name comes from what we believe:</p>
                </div>
                <p className="text-[var(--lf-muted)]">
                  Small businesses in New York are in a constant fight — against rising rents, against corporate chains, against a system that seems designed to favor the big guys. We exist to help them punch above their weight.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mission Statement */}
          <div className="story-content mt-20 bg-gradient-to-br from-[var(--lf-charcoal)] to-[var(--lf-graphite)] rounded-3xl p-10 lg:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--lf-orange)]/20 rounded-full blur-[80px]" />
            
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 relative z-10">Our Mission</h3>
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto relative z-10">
              When the local salon competes with Drybar, we're in their corner.  
              When the neighborhood café battles Starbucks, we're fighting with them.  
              When the family-owned gym goes up against Equinox, we've got their back.
            </p>
            <p className="text-lg text-white/50 mt-8 relative z-10">
              Because when small businesses win, neighborhoods stay interesting. And New York stays New York.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section ref={differentRef} className="section-luxury section-luxury-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="title">What makes us different</h2>
            <p className="description">
              We're not trying to be the biggest. We're trying to be the best for businesses like yours.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <div key={index} className="different-card bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[var(--lf-orange)]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-[var(--lf-orange)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--lf-charcoal)] mb-2">{item.title}</h3>
                    <p className="text-[var(--lf-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="section-luxury bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Our Values</p>
            <h2 className="title">What we stand for</h2>
            <p className="description">
              These aren't just words on a wall. They're the principles that guide every decision we make.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="value-card bg-[var(--lf-bone)] rounded-3xl p-8 hover:bg-white hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 bg-[var(--lf-orange)]/10 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-[var(--lf-orange)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--lf-charcoal)] mb-3">{value.title}</h3>
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
              <p className="stat-number-luxury mb-2">200+</p>
              <p className="text-white/60">Businesses Helped</p>
            </div>
            <div>
              <p className="stat-number-luxury mb-2">2 hrs</p>
              <p className="text-white/60">Average Response Time</p>
            </div>
            <div>
              <p className="stat-number-luxury mb-2">5+</p>
              <p className="text-white/60">Years in Business</p>
            </div>
            <div>
              <p className="stat-number-luxury mb-2">12</p>
              <p className="text-white/60">Manhattan Neighborhoods</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-luxury bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)] mb-6">
            Ready to join the fight?
          </h2>
          <p className="text-lg text-[var(--lf-muted)] mb-10 max-w-2xl mx-auto">
            Let's talk about how we can help your business punch above its weight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link to="/work" className="btn-secondary">
              See Our Work <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
