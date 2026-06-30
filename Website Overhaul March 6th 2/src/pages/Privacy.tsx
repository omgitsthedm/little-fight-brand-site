import { usePageMeta } from '../hooks/usePageMeta';

export default function Privacy() {
  usePageMeta({
    title: 'Privacy Policy',
    description:
      'How Little Fight NYC collects, uses, stores, and protects information submitted through the website, including contact details and project inquiries.',
    path: '/privacy/',
  });

  return (
    <main id="main-content" className="relative">
      <section className="section-luxury pt-28 lg:pt-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow">Privacy Policy</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--lf-charcoal)] mb-8">How we handle your information</h1>
          <div className="space-y-8 text-[var(--lf-muted)] leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-[var(--lf-charcoal)] mb-3">What we collect</h2>
              <p>
                When you contact Little Fight NYC, we may collect the information you choose to submit, including your name, email address, phone number, business name, location, and message details.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--lf-charcoal)] mb-3">How we use it</h2>
              <p>
                We use submitted information to respond to inquiries, provide service recommendations, deliver requested work, and improve how the website and our services operate.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--lf-charcoal)] mb-3">Analytics and tracking</h2>
              <p>
                This website may use analytics and performance tools to understand site usage, improve conversion paths, and maintain site performance. Those tools may collect standard technical information such as browser, device, and page activity.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--lf-charcoal)] mb-3">Sharing information</h2>
              <p>
                We do not sell personal information. Information may be shared with trusted service providers only when necessary to operate the website, communicate with you, or deliver requested services.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--lf-charcoal)] mb-3">Retention and protection</h2>
              <p>
                We keep inquiry information only as long as it is useful for communication, project delivery, record keeping, or legal and accounting needs. We take reasonable steps to limit access to submitted information and use established third-party tools that support secure handling of website and communication data.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--lf-charcoal)] mb-3">Your choices</h2>
              <p>
                If you want to update, correct, or delete information you submitted through this site, reach out directly and we will handle the request as reasonably and quickly as possible, subject to any legal or operational obligations that require us to retain certain records.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--lf-charcoal)] mb-3">Contact</h2>
              <p>
                For privacy-related questions, email <a href="mailto:hello@littlefightnyc.com" className="link-luxury">hello@littlefightnyc.com</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
