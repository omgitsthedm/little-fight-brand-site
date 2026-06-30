import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 'grand-funding',
    business: 'Grand Funding LLC',
    industry: 'Hard Money Lending',
    location: 'Arizona & California',
    pages: 18,
    score: '97',
    grade: 'A',
    stack: 'HTML, CSS, JS (zero frameworks)',
    image: '/agency_card_01.jpg',
    challenge:
      'A private lender needed a site reflecting speed and sophistication. The previous Wix site felt slow and generic — it undermined the credibility of a business built on trust and fast execution.',
    whatChanged:
      'Rebuilt from scratch — cinematic, conversion-focused design that communicates trust and urgency simultaneously. Every element was crafted to move the visitor from curiosity to confidence.',
    result:
      'The website became the strongest asset in their sales process. Prospects started referencing the site in meetings before the team even pitched. Trust Score 97.',
  },
  {
    id: 'logan-loans',
    business: 'Logan Loans',
    industry: 'Mortgage Lending',
    location: 'Nationwide',
    pages: 34,
    score: '96',
    grade: 'A',
    stack: 'HTML, CSS, JS',
    image: '/agency_card_02.jpg',
    challenge:
      'An industry full of jargon needed a platform that humanized lending for first-time homebuyers. The existing site was dense, technical, and intimidating to the people who needed it most.',
    whatChanged:
      'Built a jargon translator, 15+ geo-landing pages, and a warm visual system that made complex financial products feel approachable. Every page was designed to reduce anxiety and increase clarity.',
    result:
      'First-time buyers reported understanding the process for the first time. 34 pages, all scoring A. The site became a teaching tool, not just a brochure. Trust Score 96.',
  },
  {
    id: 'wild-dandelion',
    business: 'The Wild Dandelion',
    industry: 'Premium Hair Salon',
    location: 'NYC',
    pages: 8,
    score: '95',
    grade: 'A',
    stack: 'HTML, CSS, JS',
    image: '/salon_interior.jpg',
    challenge:
      'Three distinct client types — direct bookers, complex color clients, and bridal parties — were all arriving at a flat link-tree homepage with no differentiation. The business was losing high-value bookings to confusion.',
    whatChanged:
      'Built distinct conversion paths for each client type. The site routes visitors based on intent, not generic service lists. Each segment gets the language and imagery that speaks to their specific needs.',
    result:
      'Each client segment now has a clear path. Bookings became intentional, not accidental. The salon stopped losing bridal inquiries to competitors with clearer sites. Trust Score 95.',
  },
  {
    id: 'army-navy-bags',
    business: 'Army & Navy Bags',
    industry: 'Heritage Surplus (est. 1956)',
    location: 'Greenwich Village, NYC',
    pages: 6,
    score: '98',
    grade: 'A+',
    stack: 'HTML, CSS, JS',
    image: '/retail_interior.jpg',
    challenge:
      'A 69-year-old institution featured by The New York Times needed a digital presence that captured the experience of in-person browsing despite daily inventory changes.',
    whatChanged:
      'Built a site that feels like walking into the store — curated, tactile, authentic. Featured in NYT for a reason; the site now matches that reputation. Every detail reflects the character of the physical space.',
    result:
      'The institution\'s digital presence finally matches its legacy. Customers coming from the NYT feature found a site worthy of the story. Trust Score 98.',
  },
];

const aggregateStats = [
  { value: '4', label: 'Live Projects' },
  { value: '66', label: 'Total Pages' },
  { value: '96.5', label: 'Avg Trust Score' },
  { value: 'A', label: 'Average Grade' },
];

export default function Work() {
  const heroRef = useRef<HTMLDivElement>(null);
  const casesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.case-study',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: casesRef.current, start: 'top 70%' },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="section-luxury pt-28 lg:pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[var(--lf-orange)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Our Work</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--lf-charcoal)] leading-tight mb-6">
              Businesses that closed the gap.
            </h1>
            <p className="text-lg lg:text-xl text-[var(--lf-muted)] leading-relaxed mb-8">
              Every site built from scratch. Zero frameworks. Lighthouse-grade performance. These are the businesses that stopped settling for generic and started earning trust from the first click.
            </p>
          </div>

          {/* Aggregate stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {aggregateStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[var(--lf-bone)] rounded-2xl p-5 text-center"
              >
                <p className="text-2xl lg:text-3xl font-bold text-[var(--lf-charcoal)]">
                  {stat.value}
                </p>
                <p className="text-xs text-[var(--lf-muted)] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={casesRef} className="section-luxury section-luxury-soft">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className={`case-study py-16 lg:py-20 ${
                index !== 0 ? 'border-t border-[var(--lf-stone-light)]' : ''
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl image-hover-luxury">
                    <img
                      src={study.image}
                      alt={study.business}
                      className="w-full h-80 lg:h-[500px] object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                      <p className="text-sm font-medium text-[var(--lf-charcoal)]">
                        {study.industry}
                      </p>
                      <p className="text-xs text-[var(--lf-muted)]">{study.location}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)] mb-2">
                    {study.business}
                  </h2>
                  <p className="text-[var(--lf-orange)] font-medium mb-2">
                    {study.industry} &middot; {study.location}
                  </p>

                  {/* Meta row */}
                  <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-[var(--lf-muted)]">
                    <span>{study.pages} pages</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--lf-stone)]" />
                    <span>Trust Score {study.score}/{study.grade}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--lf-stone)]" />
                    <span>{study.stack}</span>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="font-semibold text-[var(--lf-charcoal)] mb-2">
                        The Challenge
                      </h3>
                      <p className="text-[var(--lf-muted)] leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[var(--lf-charcoal)] mb-2">
                        What Changed
                      </h3>
                      <p className="text-[var(--lf-muted)] leading-relaxed">
                        {study.whatChanged}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-[var(--lf-charcoal)] mb-2">
                        The Result
                      </h3>
                      <p className="text-[var(--lf-muted)] leading-relaxed">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
              <p className="stat-number-luxury mb-2">66</p>
              <p className="text-white/60">Total Pages Built</p>
            </div>
            <div>
              <p className="stat-number-luxury mb-2">96.5</p>
              <p className="text-white/60">Average Trust Score</p>
            </div>
            <div>
              <p className="stat-number-luxury mb-2">0</p>
              <p className="text-white/60">Frameworks Used</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-luxury bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--lf-charcoal)] mb-6">
            Your business deserves the same clarity.
          </h2>
          <p className="text-lg text-[var(--lf-muted)] mb-10 max-w-2xl mx-auto">
            If the gap between what your business is and how it presents is costing you trust, we should talk.
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
              Audit Your Website
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
