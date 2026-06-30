import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export default function CTASection() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission handled by Netlify Forms or backend
    window.location.href = `mailto:hello@littlefightnyc.com?subject=Consult Request from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <section id="contact" className="section-midnight relative overflow-hidden">
      {/* Ambient orb */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--lf-orange)]/[0.04] rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Form */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lf-orange)] mb-3">
              Ready to Discuss a Project
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4">
              Start the conversation.
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-md">
              Share what's on your mind. No pitch, no pressure — just a clear conversation about what would actually help.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="cta-name" className="block text-sm text-white/40 mb-2">
                  Name
                </label>
                <input
                  id="cta-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/20 focus:outline-none focus:border-[var(--lf-ice-blue)]/40 transition-colors min-h-[44px]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="cta-email" className="block text-sm text-white/40 mb-2">
                  Email
                </label>
                <input
                  id="cta-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/20 focus:outline-none focus:border-[var(--lf-ice-blue)]/40 transition-colors min-h-[44px]"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="cta-message" className="block text-sm text-white/40 mb-2">
                  What's on your mind?
                </label>
                <textarea
                  id="cta-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-white/20 focus:outline-none focus:border-[var(--lf-ice-blue)]/40 transition-colors resize-none"
                  placeholder="Tell us what's not working or what you'd like to improve..."
                />
              </div>
              <button type="submit" className="btn btn-primary w-full sm:w-auto min-h-[44px]">
                Book a Private Consult
              </button>
            </form>
          </motion.div>

          {/* Right - Contact Info with background image */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center relative"
          >
            {/* Subtle background image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-[0.07] pointer-events-none" aria-hidden="true">
              <img
                src="/manhattan_skyline.jpg"
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ filter: 'contrast(1.2) saturate(0) brightness(0.8)' }}
              />
            </div>

            <div className="relative space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[var(--lf-ice-blue)]" />
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Phone</p>
                  <a href="tel:646-360-0318" className="text-white hover:text-[var(--lf-ice-blue)] transition-colors font-medium">
                    646-360-0318
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[var(--lf-ice-blue)]" />
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Email</p>
                  <a href="mailto:hello@littlefightnyc.com" className="text-white hover:text-[var(--lf-ice-blue)] transition-colors font-medium">
                    hello@littlefightnyc.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--lf-ice-blue)]" />
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Location</p>
                  <p className="text-white font-medium">Manhattan, NYC</p>
                  <p className="text-sm text-white/40">On-site service available</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[var(--lf-ice-blue)]" />
                </div>
                <div>
                  <p className="text-sm text-white/40 mb-1">Hours</p>
                  <p className="text-white font-medium">Mon &ndash; Fri, 8am &ndash; 8pm</p>
                  <p className="text-sm text-white/40">Urgent matters welcome.</p>
                </div>
              </div>
            </div>

            {/* Audit pathway */}
            <div className="relative mt-10 pt-6 border-t border-white/[0.06]">
              <p className="text-sm font-medium text-white/50 mb-2">Not sure where to start?</p>
              <p className="text-sm text-white/30 leading-relaxed mb-4">
                Get a clear read on where your website stands before committing to anything.
              </p>
              <a
                href="https://audits.littlefightnyc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--lf-ice-blue)] hover:text-white transition-colors"
              >
                Review your website first &rarr;
              </a>
            </div>

            {/* Trust note */}
            <div className="relative mt-6 pt-6 border-t border-white/[0.06]">
              <p className="text-sm text-white/30 leading-relaxed">
                Standards-first approach. 30-day guarantee. First conversation free. No contracts unless you want them.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
