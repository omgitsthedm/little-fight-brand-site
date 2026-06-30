import { useEffect, useRef, useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle, ChevronDown, Clock, Globe, Mail, MapPin, MessageCircle, Phone, Send, Sparkles, Zap } from 'lucide-react';
import { siteFaqs } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';
import { gsap, registerScrollTrigger } from '@/lib/gsap';
import { Link } from 'react-router-dom';
import { useMobileExperience } from '@/hooks/useMobileExperience';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const formRef = useRef<HTMLDivElement>(null);
  const { reduceEffects } = useMobileExperience();

  usePageMeta({
    title: 'Contact Little Fight NYC | NYC Website & Tech Support',
    description:
      'Contact Little Fight NYC for website help, website audits, local SEO, on-site IT support, POS troubleshooting, Apple setup, and practical small-business tech consulting.',
    path: '/contact/',
  });

  useEffect(() => {
    registerScrollTrigger();
    const ctx = gsap.context(() => {
      if (reduceEffects) {
        gsap.set('.contact-content', { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo('.contact-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 70%' }
        }
      );
    });

    return () => ctx.revert();
  }, [reduceEffects]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState('submitting');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') {
        body.append(key, value);
      }
    }

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  };

  return (
    <main id="main-content" className="relative">
      {/* Hero Section */}
      <section className="section-luxury pt-28 lg:pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 hidden h-[500px] w-[500px] rounded-full bg-[var(--lf-orange)]/5 blur-[100px] sm:block" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_20px_60px_rgba(38,35,31,0.08)] backdrop-blur-sm sm:bg-white/92 sm:p-8 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none">
            <p className="eyebrow">Contact</p>
            <h1 className="mb-6 text-[2.35rem] font-bold leading-[1.08] text-[var(--lf-charcoal)] sm:text-5xl lg:text-6xl">
              Tell us what feels broken, dated, confusing, or too important to leave alone.
            </h1>
            <p className="text-lg text-[var(--lf-muted)] leading-[1.8] sm:text-xl lg:text-[1.35rem] lg:leading-[1.85]">
              Got a question, a messy setup, a broken checkout flow, or a website that no longer reflects the business? Start there. Plain language is enough.
            </p>
            <p className="mt-4 max-w-2xl text-lg text-[var(--lf-graphite)]/80 leading-[1.8]">
              If you would rather explain it in a normal sentence than open a technical ticket, this page is for you. If you want to begin more quietly, you can also start with a private review first.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={formRef} className="section-luxury section-luxury-soft">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            {/* Left - Contact Info */}
            <div className="contact-content">
              <h2 className="text-2xl lg:text-3xl font-bold text-[var(--lf-charcoal)] mb-8">
                Choose the easiest way to start
              </h2>
              <p className="mb-8 max-w-2xl text-lg leading-[1.85] text-[var(--lf-muted)]">
                If business is actively disrupted, call. If you want to explain the situation carefully, email or use the form. If the first question is whether the website is helping or hurting, start with the private review. Either way, we will help you narrow the right next step.
              </p>
              
              <div className="space-y-4 mb-10">
                <a 
                  href="tel:646-360-0318" 
                  className="group flex items-start gap-4 rounded-2xl border border-[var(--lf-stone-light)] bg-white p-5 transition-all hover:border-[var(--lf-orange)] hover:shadow-lg sm:p-6"
                >
                  <div className="w-14 h-14 bg-[var(--lf-orange)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--lf-orange)] mb-2">Best for urgent issues</p>
                    <p className="text-xl font-semibold text-[var(--lf-charcoal)]">Call or text 646-360-0318</p>
                    <p className="mt-2 text-base leading-[1.75] text-[var(--lf-muted)]">
                      Fastest if the business is currently disrupted or the team is blocked.
                    </p>
                  </div>
                </a>

                <a 
                  href="mailto:hello@littlefightnyc.com" 
                  className="group flex items-start gap-4 rounded-2xl border border-[var(--lf-stone-light)] bg-white p-5 transition-all hover:border-[var(--lf-orange)] hover:shadow-lg sm:p-6"
                >
                  <div className="w-14 h-14 bg-[var(--lf-orange)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--lf-orange)] mb-2">Best for thoughtful detail</p>
                    <p className="text-xl font-semibold text-[var(--lf-charcoal)]">Email hello@littlefightnyc.com</p>
                    <p className="mt-2 text-base leading-[1.75] text-[var(--lf-muted)]">
                      Great if you want to send screenshots, links, or a fuller explanation first.
                    </p>
                  </div>
                </a>

                <Link
                  to="/services/website-audit-small-business/"
                  className="group flex items-start gap-4 rounded-2xl border border-[var(--lf-stone-light)] bg-white p-5 transition-all hover:border-[var(--lf-orange)] hover:shadow-lg sm:p-6"
                >
                  <div className="w-14 h-14 bg-[var(--lf-orange)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--lf-orange)] mb-2">Best for clarity before a redesign</p>
                    <p className="text-xl font-semibold text-[var(--lf-charcoal)]">Start with a private review</p>
                    <p className="mt-2 text-base leading-[1.75] text-[var(--lf-muted)]">
                      We review readability, trust signals, mobile comfort, and search clarity so you know what is worth fixing before you spend more.
                    </p>
                  </div>
                </Link>

                <div className="flex items-start gap-4 rounded-2xl border border-[var(--lf-stone-light)] bg-white p-5 sm:p-6">
                  <div className="w-14 h-14 bg-[var(--lf-orange)] rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--lf-orange)] mb-2">Based in</p>
                    <p className="text-xl font-semibold text-[var(--lf-charcoal)]">Manhattan, NYC</p>
                    <p className="mt-2 text-base leading-[1.75] text-[var(--lf-muted)]">
                      On-site support throughout Manhattan. Remote website and strategy work nationwide.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-[var(--lf-stone-light)] bg-white p-5 sm:p-6">
                  <div className="w-14 h-14 bg-[var(--lf-orange)] rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--lf-orange)] mb-2">Hours</p>
                    <p className="text-xl font-semibold text-[var(--lf-charcoal)]">Mon–Fri, 8am–8pm</p>
                    <p className="mt-2 text-base leading-[1.75] text-[var(--lf-muted)]">
                      If the issue is urgent, call anyway. We would rather tell you quickly than leave you guessing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[var(--lf-orange)]/10 to-[var(--lf-orange-light)]/10 rounded-2xl p-6 border border-[var(--lf-orange)]/20">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-[var(--lf-orange)]" />
                  <p className="text-[var(--lf-orange)] text-lg font-semibold">Fast response target</p>
                </div>
                <p className="text-[var(--lf-muted)] text-base leading-[1.75]">
                  We aim to reply within 2 business hours. If something is actively breaking operations, call directly.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-[var(--lf-stone-light)] bg-[var(--lf-bone)] p-6">
                <h3 className="text-xl font-semibold text-[var(--lf-charcoal)] mb-4">How the first conversation usually goes</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[var(--lf-orange)]">1</div>
                    <p className="text-base leading-[1.8] text-[var(--lf-muted)]">You tell us what feels wrong, outdated, or urgent in your own words.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[var(--lf-orange)]">2</div>
                    <p className="text-base leading-[1.8] text-[var(--lf-muted)]">We help sort what matters now, what can wait, and whether the problem is website, Wi-Fi, POS, or workflow.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-[var(--lf-orange)]">3</div>
                    <p className="text-base leading-[1.8] text-[var(--lf-muted)]">
                      You get a clear next step without pressure, jargon, or a maze of handoffs. If an audit makes more sense than a full project, we will say that plainly. That kind of clarity usually saves time, avoids bad purchases, and helps owners spend money in the right order.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="contact-content">
              {submitState === 'success' ? (
                <div className="bg-white rounded-3xl p-10 text-center border border-[var(--lf-stone-light)] shadow-lg">
                  <div className="w-20 h-20 bg-gradient-to-br from-[var(--lf-orange)] to-[var(--lf-orange-light)] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[var(--lf-orange)]/30">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--lf-charcoal)] mb-4">Message sent</h3>
                  <p className="text-[var(--lf-muted)] mb-6">
                    Thanks for reaching out. We'll follow up as soon as we can.
                  </p>
                  <button 
                    onClick={() => setSubmitState('idle')}
                    className="text-[var(--lf-orange)] font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-6 rounded-[2rem] border border-[var(--lf-stone-light)] bg-white p-6 shadow-lg sm:rounded-3xl sm:p-8 lg:p-10"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageCircle className="w-6 h-6 text-[var(--lf-orange)]" />
                      <h3 className="text-2xl font-semibold text-[var(--lf-charcoal)]">Send the messy version</h3>
                    </div>
                    <p className="text-base leading-[1.8] text-[var(--lf-muted)]">
                      Plain language is enough. A few honest sentences are more useful than trying to sound technical.
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-base font-semibold text-[var(--lf-charcoal)] mb-2">Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        className="w-full rounded-xl border border-[var(--lf-stone-light)] px-5 py-4 text-lg focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-base font-semibold text-[var(--lf-charcoal)] mb-2">Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        inputMode="email"
                        className="w-full rounded-xl border border-[var(--lf-stone-light)] px-5 py-4 text-lg focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all"
                        placeholder="you@business.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-phone" className="block text-base font-semibold text-[var(--lf-charcoal)] mb-2">Phone</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        inputMode="tel"
                        className="w-full rounded-xl border border-[var(--lf-stone-light)] px-5 py-4 text-lg focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-business" className="block text-base font-semibold text-[var(--lf-charcoal)] mb-2">Business Name</label>
                      <input
                        id="contact-business"
                        type="text"
                        name="business"
                        autoComplete="organization"
                        className="w-full rounded-xl border border-[var(--lf-stone-light)] px-5 py-4 text-lg focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all"
                        placeholder="Your business"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-location" className="block text-base font-semibold text-[var(--lf-charcoal)] mb-2">Location</label>
                    <input
                      id="contact-location"
                      type="text"
                      name="location"
                      autoComplete="address-level2"
                      className="w-full rounded-xl border border-[var(--lf-stone-light)] px-5 py-4 text-lg focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all"
                      placeholder="City, neighborhood, or service area"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-base font-semibold text-[var(--lf-charcoal)] mb-2">What do you need help with? *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={6}
                      className="w-full rounded-xl border border-[var(--lf-stone-light)] px-5 py-4 text-lg leading-[1.75] focus:border-[var(--lf-orange)] focus:ring-2 focus:ring-[var(--lf-orange)]/20 outline-none transition-all resize-none"
                      placeholder="Tell us what is slowing things down, what feels outdated, or what is starting to cost you time."
                    />
                  </div>

                  {submitState === 'error' && (
                    <div className="flex items-center gap-2 text-base text-red-600 bg-red-50 border border-red-100 rounded-2xl px-4 py-3">
                      <AlertCircle className="w-4 h-4" />
                      <span>Something went wrong while sending the form. Please call or email us directly.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
                    disabled={submitState === 'submitting'}
                  >
                    <Send className="w-5 h-5" />
                    {submitState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  <p className="text-base text-[var(--lf-muted)] text-center leading-[1.75]">
                    We only use this information to respond to your inquiry. No marketing circus, no surprise handoff.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-luxury bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow">FAQ</p>
            <h2 className="title">Questions we get a lot</h2>
            <p className="text-base leading-[1.75] text-[var(--lf-muted)]">
              Can't find what you're looking for?{' '}
              <a href="tel:646-360-0318" className="link-luxury">Give us a call</a>
            </p>
          </div>

          <div className="faq-list">
            {siteFaqs.map((faq, index) => (
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
        <div className="absolute top-0 right-0 hidden h-96 w-96 rounded-full bg-[var(--lf-orange)]/10 blur-[100px] sm:block" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-[var(--lf-orange)]" />
            <span className="text-sm font-semibold text-white/80">Prefer to talk? We're here.</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Sometimes it's easier to explain things over the phone.
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            Call us anytime during business hours if that is easier. If you want a quieter first step, send the current website for a private review and we will help you see what deserves attention first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:646-360-0318" className="btn-primary bg-[var(--lf-orange)] hover:bg-[var(--lf-orange-light)]">
              <Phone className="w-5 h-5" />
              Call 646-360-0318
            </a>
            <Link
              to="/services/website-audit-small-business/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-2xl hover:bg-white/20 transition-colors"
            >
              <Globe className="w-5 h-5" />
              Start a Private Review <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
