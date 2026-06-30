import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal py-20 lg:py-28">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16 fade-up-section">
            <span className="eyebrow mb-4 block text-stone">Get In Touch</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-bone mb-5">
              Let's Talk About Your Tech
            </h2>
            <p className="text-stone text-lg leading-relaxed max-w-xl mx-auto">
              Got a question? Need help? Just want to vent about your printer? We're here for it.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mb-12 fade-up-section">
            <a
              href="mailto:hello@littlefightnyc.com"
              className="flex flex-col items-center text-center p-6 bg-graphite/50 rounded-xl hover:bg-graphite/70 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="text-bone font-medium">hello@littlefightnyc.com</span>
            </a>

            <a
              href="tel:646-360-0318"
              className="flex flex-col items-center text-center p-6 bg-graphite/50 rounded-xl hover:bg-graphite/70 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span className="text-bone font-medium">646-360-0318</span>
            </a>

            <div className="flex flex-col items-center text-center p-6 bg-graphite/50 rounded-xl">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="text-bone font-medium">Manhattan, NYC</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center fade-up-section">
            <a
              href="mailto:hello@littlefightnyc.com"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-medium transition-all duration-200 hover:bg-primary-light hover:-translate-y-0.5"
              style={{ boxShadow: '0 8px 24px rgba(254, 89, 0, 0.3)' }}
            >
              Send Message (No Jargon, Promise)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
