import { usePageMeta } from '../hooks/usePageMeta';

export default function Terms() {
  usePageMeta({
    title: 'Terms of Service',
    description:
      'General terms governing the use of the Little Fight NYC website, project communications, proposals, and related service engagements.',
    path: '/terms/',
  });

  return (
    <main id="main-content" className="relative">
      <section className="section-luxury pt-28 lg:pt-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow">Terms of Service</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-[var(--lf-charcoal)] mb-8">General terms for using this site and working with us</h1>
          <div className="space-y-8 text-[var(--lf-muted)] leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-[var(--lf-charcoal)] mb-3">Website use</h2>
              <p>
                The content on this site is provided for general informational purposes. While we aim to keep it accurate and useful, it should not be treated as a binding promise of service scope, timing, or pricing.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--lf-charcoal)] mb-3">Project scope and estimates</h2>
              <p>
                Any scope, schedule, or pricing shared through email, calls, or proposals is subject to confirmation in a written agreement. Requirements change, and final terms are based on the actual work requested.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--lf-charcoal)] mb-3">Intellectual property</h2>
              <p>
                Site content, branding, and original project materials remain the property of their respective owners unless otherwise assigned in writing.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--lf-charcoal)] mb-3">Third-party services</h2>
              <p>
                Some work may rely on third-party platforms, tools, hosts, or payment providers. Their uptime, policies, and feature changes are outside our direct control.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--lf-charcoal)] mb-3">Communication and approvals</h2>
              <p>
                Project direction, approvals, and revisions are most reliable when confirmed in writing. If a timeline, launch step, access request, or scope adjustment matters, both sides should expect it to be documented through email, a proposal, or another agreed channel so there is a clear record.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--lf-charcoal)] mb-3">Limits and practical expectations</h2>
              <p>
                We work to provide thoughtful, high-quality support, but business outcomes also depend on third-party tools, staffing, market conditions, and decisions outside our control. Nothing on this website should be interpreted as a guarantee of rankings, revenue, uptime, or specific commercial results unless a written agreement says otherwise.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-[var(--lf-charcoal)] mb-3">Contact</h2>
              <p>
                Questions about these terms can be sent to <a href="mailto:hello@littlefightnyc.com" className="link-luxury">hello@littlefightnyc.com</a>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
