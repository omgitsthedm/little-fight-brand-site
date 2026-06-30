import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Star, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    business: 'Noodle House',
    type: 'Restaurant',
    location: 'SoHo',
    image: '/cafe_interior.jpg',
    result: 'Zero downtime since',
    metric: '100%',
    description: 'POS system was crashing during dinner rush. We had them back online in under an hour.',
    link: '/work/'
  },
  {
    business: 'Bloom Salon',
    type: 'Hair Salon',
    location: 'East Village',
    image: '/salon_interior.jpg',
    result: 'Online bookings up',
    metric: '40%',
    description: 'Complete website redesign with booking integration and local SEO optimization.',
    link: '/work/'
  },
  {
    business: 'Core Fitness',
    type: 'Boutique Gym',
    location: 'Midtown',
    image: '/gym_interior.jpg',
    result: 'New member inquiries',
    metric: '3x',
    description: 'Built their entire digital presence from scratch — website, SEO, and booking system.',
    link: '/work/'
  }
];

export default function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.work-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      gsap.fromTo('.case-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.cases-grid', start: 'top 75%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-luxury section-luxury-soft"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="work-header flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Our Work</p>
            <h2 className="title">Real Businesses.<br />Real Results.</h2>
            <p className="description">
              Every small business has a story. Here's how we helped some of our favorites punch above their weight.
            </p>
          </div>
          <Link to="/work" className="btn-secondary self-start lg:self-auto">
            View All Case Studies
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Cases Grid */}
        <div className="cases-grid grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              to={study.link}
              className="case-card group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.business}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[var(--lf-charcoal)]">
                  {study.type}
                </div>

                {/* Result Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{study.metric}</span>
                  </div>
                  <p className="text-white/80 text-sm">{study.result}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--lf-charcoal)] mb-1 group-hover:text-[var(--lf-orange)] transition-colors">
                  {study.business}
                </h3>
                <p className="text-sm text-[var(--lf-muted)] mb-3">{study.location}</p>
                <p className="text-sm text-[var(--lf-muted)] leading-relaxed">
                  {study.description}
                </p>
                
                <div className="flex items-center gap-2 mt-4 text-[var(--lf-orange)] font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Read the story</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <TrendingUp className="w-8 h-8 text-[var(--lf-orange)] mx-auto mb-3" />
            <p className="text-3xl font-bold text-[var(--lf-charcoal)]">200+</p>
            <p className="text-sm text-[var(--lf-muted)]">Businesses Helped</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <Star className="w-8 h-8 text-[var(--lf-orange)] mx-auto mb-3" />
            <p className="text-3xl font-bold text-[var(--lf-charcoal)]">4.9/5</p>
            <p className="text-sm text-[var(--lf-muted)]">Average Rating</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <Users className="w-8 h-8 text-[var(--lf-orange)] mx-auto mb-3" />
            <p className="text-3xl font-bold text-[var(--lf-charcoal)]">12</p>
            <p className="text-sm text-[var(--lf-muted)]">NYC Neighborhoods</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
            <TrendingUp className="w-8 h-8 text-[var(--lf-orange)] mx-auto mb-3" />
            <p className="text-3xl font-bold text-[var(--lf-charcoal)]">98%</p>
            <p className="text-sm text-[var(--lf-muted)]">Client Retention</p>
          </div>
        </div>
      </div>
    </section>
  );
}
