import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, DollarSign, Clock, Wifi, Monitor, CreditCard } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface LossItem {
  icon: typeof Wifi;
  title: string;
  dailyLoss: number;
  description: string;
}

const lossItems: LossItem[] = [
  {
    icon: Wifi,
    title: 'Wi-Fi Down',
    dailyLoss: 340,
    description: 'Customers can\'t pay. Staff can\'t work. Every minute counts.'
  },
  {
    icon: Monitor,
    title: 'Website Crashed',
    dailyLoss: 520,
    description: 'No online orders. No bookings. No new customers finding you.'
  },
  {
    icon: CreditCard,
    title: 'POS Failure',
    dailyLoss: 680,
    description: 'Can\'t process payments during rush hour. Customers walk out.'
  }
];

export default function RevenueLossSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animatedLoss, setAnimatedLoss] = useState(0);
  const total = lossItems.reduce((sum, item) => sum + item.dailyLoss, 0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.loss-title',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );

      gsap.fromTo('.loss-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
        }
      );

      // Animate the total counter
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 60%',
        onEnter: () => {
          gsap.to({}, {
            duration: 2,
            ease: 'power2.out',
            onUpdate: function() {
              setAnimatedLoss(Math.round(total * this.progress()));
            }
          });
        },
        once: true
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="section-luxury bg-gradient-to-b from-white to-[var(--lf-bone)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="loss-title text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">The Hidden Cost</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--lf-charcoal)] mb-6 leading-tight">
            Your broken tech is costing you more than you think.
          </h2>
          <p className="text-lg text-[var(--lf-muted)] leading-relaxed">
            Every hour your systems are down, you're not just losing sales — you're losing trust, reputation, and customers who won't come back.
          </p>
        </div>

        {/* Loss Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {lossItems.map((item, index) => (
            <div 
              key={index}
              className="loss-card bg-white rounded-3xl p-8 shadow-lg border border-[var(--lf-stone-light)]/50 hover:shadow-xl hover:border-red-200 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                <item.icon className="w-8 h-8 text-red-500" />
              </div>
              <div className="flex items-baseline gap-1 mb-3">
                <DollarSign className="w-6 h-6 text-red-500" />
                <span className="text-4xl font-bold text-red-500">{item.dailyLoss}</span>
                <span className="text-sm text-[var(--lf-muted)]">/day</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--lf-charcoal)] mb-2">{item.title}</h3>
              <p className="text-[var(--lf-muted)] text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Total Loss Calculator */}
        <div className="bg-gradient-to-r from-[var(--lf-charcoal)] to-[var(--lf-graphite)] rounded-3xl p-8 lg:p-12 text-white text-center relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--lf-orange)]/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10">
            <p className="text-sm uppercase tracking-wider text-white/60 mb-4">Combined Daily Loss</p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <DollarSign className="w-12 h-12 lg:w-16 lg:h-16 text-[var(--lf-orange)]" />
              <span className="text-6xl lg:text-8xl font-bold text-white tabular-nums">
                {animatedLoss.toLocaleString()}
              </span>
            </div>
            <p className="text-lg text-white/70 mb-2">per day your tech isn't working properly</p>
            <p className="text-2xl lg:text-3xl font-bold text-[var(--lf-orange)] mb-8">
              That's ${(animatedLoss * 30).toLocaleString()} per month.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:646-360-0318" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--lf-orange)] text-white font-semibold rounded-full hover:bg-[var(--lf-orange-light)] transition-colors shadow-lg shadow-[var(--lf-orange)]/30"
              >
                <Clock className="w-5 h-5" />
                Stop the Bleeding — Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-center text-sm text-[var(--lf-muted)] mt-8">
          *Based on average small business revenue data. Your actual losses may vary. 
          <span className="text-[var(--lf-charcoal)] font-medium"> But one thing's certain: every minute counts.</span>
        </p>
      </div>
    </section>
  );
}
