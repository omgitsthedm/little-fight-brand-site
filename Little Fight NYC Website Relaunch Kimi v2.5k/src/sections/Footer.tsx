const serviceLinks = [
  'Website Design',
  'On-Site IT Support',
  'Local SEO & Ads',
  'POS Setup',
  'Smart Systems',
];

const companyLinks = [
  'Home',
  'Solutions',
  'Work',
  'About',
  'Blog',
  'Industries',
  'Contact',
];

export default function Footer() {
  return (
    <footer className="bg-graphite text-bone">
      <div className="section-padding py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-mono text-sm font-bold uppercase tracking-wider block mb-4">
              Little Fight NYC
            </span>
            <p className="text-stone text-sm leading-relaxed">
              Helping small businesses punch above their weight with practical websites, IT support, and smart systems.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-bone mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-stone text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-bone mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-stone text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-bone mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-stone text-sm">
              <li>
                <a
                  href="mailto:hello@littlefightnyc.com"
                  className="hover:text-primary transition-colors"
                >
                  hello@littlefightnyc.com
                </a>
              </li>
              <li>
                <a
                  href="tel:646-360-0318"
                  className="hover:text-primary transition-colors"
                >
                  646-360-0318
                </a>
              </li>
              <li>Manhattan, NYC</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone/20">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone text-xs">
              © 2026 Little Fight NYC. Built in New York with guts & grit.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-stone text-xs hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-stone text-xs hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
          <p className="text-stone/60 text-xs text-center mt-4">
            Designed, Hosted and Cared For by LittleFightNYC.com
          </p>
        </div>
      </div>
    </footer>
  );
}
