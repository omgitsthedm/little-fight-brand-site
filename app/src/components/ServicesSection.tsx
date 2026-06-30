import { Link } from 'react-router-dom';
import { Briefcase, Users, Home, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const services = [
  {
    icon: Briefcase,
    label: 'FOR OWNERS',
    title: 'Business Presence',
    description:
      'Websites, SEO, and the digital presentation layer that shapes how customers perceive your business before they ever walk in.',
    tags: ['Websites', 'SEO', 'Digital Credibility'],
    link: '/services',
    image: '/service_webdesign.jpg',
    imageAlt: 'Professional website design workspace',
  },
  {
    icon: Users,
    label: 'FOR TEAMS',
    title: 'Operational Systems',
    description:
      'Devices, networking, POS infrastructure, and the internal systems that reduce friction and keep operations running cleanly.',
    tags: ['IT Infrastructure', 'Networking', 'Device Management'],
    link: '/services',
    image: '/service_itsupport.jpg',
    imageAlt: 'IT support and infrastructure setup',
  },
  {
    icon: Home,
    label: 'FOR HOME CLIENTS',
    title: 'Home Technology',
    description:
      'Smart home setup, home networking, and personal device support. The same standard of care, applied to your personal space.',
    tags: ['Smart Home', 'Home Wi-Fi', 'Device Setup'],
    link: '/services#home',
    image: '/apple_devices.jpg',
    imageAlt: 'Apple devices and smart home technology',
  },
];

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="section-midnight">
      {/* Progress indicator divider */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center -translate-y-1/2" aria-hidden="true">
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-white/10" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 px-4">02</span>
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-white/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lf-orange)] mb-3">
            How We Help
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight max-w-xl">
            Three areas of focus. One standard.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={service.link}
                className="group block h-full glass-card rounded-2xl"
              >
                {/* Service image */}
                <div className="h-40 overflow-hidden relative z-[1]">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ filter: 'contrast(1.1) saturate(0.85) brightness(0.95)' }}
                  />
                </div>

                <div className="p-6 lg:p-8 relative z-[1]">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5 group-hover:bg-[var(--lf-orange)]/10 transition-colors">
                    <service.icon className="w-6 h-6 text-[var(--lf-ice-blue)] group-hover:text-[var(--lf-orange)] transition-colors" />
                  </div>

                  {/* Label */}
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/30 mb-2">
                    {service.label}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[var(--lf-ice-blue)] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/50 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full border border-white/[0.08] text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-[var(--lf-ice-blue)] text-sm font-medium group-hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
