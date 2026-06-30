import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  Sparkles,
  MessageCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "I'm not good with technology. Can you still help me?",
    answer: "Absolutely — that's exactly who we're here for! We specialize in helping business owners who aren't tech-savvy. We explain everything in plain English, never make you feel dumb for asking questions, and set up systems that are easy for you to use."
  },
  {
    question: 'Do you come to my business location?',
    answer: "Yes! We provide on-site IT support throughout Manhattan and the greater NYC area. We'll come directly to your shop, restaurant, office, or wherever you need us. No need to unplug everything and drag it somewhere — we come to you."
  },
  {
    question: 'How much does this cost?',
    answer: "Our pricing varies based on what you need, but we're specifically designed to be affordable for small businesses. We offer a free first hour of consulting so you can understand exactly what you need before spending anything."
  },
  {
    question: 'Can you help fix my POS system or cash register?',
    answer: "Yes! POS system issues are one of our specialties. We work with Square, Clover, Toast, Lightspeed, and other common systems. Whether your register is freezing or your card reader won't connect, we've got you covered."
  },
  {
    question: 'Why is it called Little Fight NYC?',
    answer: "Small businesses in NYC are in a constant fight — against rising rents, big corporations, and tech that makes life harder. We help small businesses punch above their weight. When local businesses succeed, neighborhoods stay interesting."
  }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 70%' }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="section-luxury pt-28 lg:pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[var(--lf-orange)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--lf-charcoal)] leading-tight mb-6">
              Let's talk about your tech.
            </h1>
            <p className="text-lg lg:text-xl text-[var(--lf-muted)] leading-relaxed">
              Got a question? Need help? Just want to vent about your printer? We're here for it. 
              <span className="text-[var(--lf-charcoal)] font-medium"> No judgment. Just help.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={formRef} className="section-luxury section-luxury-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Contact Info */}
            <div className="contact-content">
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--lf-charcoal)] mb-8">
                Get in touch
              </h2>
              
              <div className="space-y-4 mb-10">
                <a 
                  href="tel:646-360-0318" 
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-[var(--lf-stone-light)] hover:border-[var(--lf-orange)] hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-[var(--lf-orange)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--lf-muted)] mb-1">Call us</p>
                    <p className="text-xl font-semibold text-[var(--lf-charcoal)]">646-360-0318</p>
                  </div>
                </a>

                <a 
                  href="mailto:hello@littlefightnyc.com" 
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-[var(--lf-stone-light)] hover:border-[var(--lf-orange)] hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-[var(--lf-orange)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--lf-muted)] mb-1">Email us</p>
                    <p className="text-xl font-semibold text-[var(--lf-charcoal)]">hello@littlefightnyc.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-[var(--lf-stone-light)]">
                  <div className="w-14 h-14 bg-[var(--lf-orange)] rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--lf-muted)] mb-1">Based in</p>
                    <p className="text-xl font-semibold text-[var(--lf-charcoal)]">Manhattan, NYC</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-[var(--lf-stone-light)]">
                  <div className="w-14 h-14 bg-[var(--lf-orange)] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--lf-muted)] mb-1">Hours</p>
                    <p className="text-xl font-semibold text-[var(--lf-charcoal)]">Mon–Fri, 8am–8pm</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[var(--lf-orange)]/10 to-[var(--lf-orange-light)]/10 rounded-2xl p-6 border border-[var(--lf-orange)]/20">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-[var(--lf-orange)]" />
                  <p className="text-[var(--lf-orange)] font-semibold">Fast Response Guarantee</p>
                </div>
                <p className="text-[var(--lf-muted)] text-sm">
                  We'll get back to you within 2 business hours. For urgent issues, call us directly.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="contact-content">
              {formSubmitted ? (
                <div className="bg-white rounded-3xl p-10 text-center border border-[var(--lf-stone-light)] shadow-lg">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--lf-orange)] to-[var(--lf-orange-light)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[var(--lf-orange)]/30">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--lf-charcoal)] mb-4">Message sent!</h3>
                  <p className="text-[var(--lf-muted)] mb-6">
                    Thanks for reaching out. We'll get back to you within 2 business hours.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="text-[var(--lf-orange)] font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 lg:p-10 space-y-6 border border-[var(--lf-stone-light)] shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="w-6 h-6 text-[var(--lf-orange)]" />
                    <h3 className="text-xl font-semibold text-[var(--lf-charcoal)]">Send us a message</h3>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--lf-charcoal)] mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[var(--lf-stone-light)] focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--lf-charcoal)] mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[var(--lf-stone-light)] focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all"
                        placeholder="you@business.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--lf-charcoal)] mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--lf-stone-light)] focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--lf-charcoal)] mb-2">Business Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--lf-stone-light)] focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all"
                        placeholder="Your business"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--lf-charcoal)] mb-2">What do you need help with? *</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-[var(--lf-stone-light)] focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your tech challenges..."
                    />
                  </div>

                  <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                  
                  <p className="text-sm text-[var(--lf-muted)] text-center">
                    By submitting, you agree to our privacy policy. We'll never spam you.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-luxury bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow">FAQ</p>
            <h2 className="title">Questions we get a lot</h2>
            <p className="text-[var(--lf-muted)]">
              Can't find what you're looking for?{' '}
              <a href="tel:646-360-0318" className="link-luxury">Give us a call</a>
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item-luxury">
                <button
                  className="faq-question-luxury w-full flex items-center justify-between py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span className="font-medium text-[var(--lf-charcoal)] pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[var(--lf-muted)] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`faq-answer overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="faq-answer-content pb-5 text-[var(--lf-muted)] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-luxury bg-[var(--lf-charcoal)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--lf-orange)]/10 rounded-full blur-[100px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-[var(--lf-orange)]" />
            <span className="text-sm font-semibold text-white/80">Prefer to talk? We're here.</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Sometimes it's easier to explain things over the phone.
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            Call us anytime during business hours — we're happy to chat. No judgment, no pressure, just honest advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:646-360-0318" className="btn-primary bg-[var(--lf-orange)] hover:bg-[var(--lf-orange-light)]">
              <Phone className="w-5 h-5" />
              Call 646-360-0318
            </a>
            <a 
              href="https://audits.littlefightnyc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-2xl hover:bg-white/20 transition-colors"
            >
              <Globe className="w-5 h-5" />
              Get a Free Website Audit <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
