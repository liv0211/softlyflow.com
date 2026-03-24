import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Softlyflow',
  description: 'Privacy Policy for Softlyflow. Learn how we collect, use, and protect your information.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'March 18, 2026'

  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <span className="text-xs font-sans font-light tracking-widest uppercase text-accent mb-4 block">
        Legal
      </span>
      <h1 className="font-serif text-4xl font-medium text-ink leading-tight mb-4">
        Privacy Policy
      </h1>
      <p className="text-sm font-sans font-light text-stone-400 mb-10 pb-8 border-b border-stone-200/60">
        Last updated: {lastUpdated}
      </p>

      <div className="prose-softly space-y-8">

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Softlyflow</strong> ("we," "our," or "us"). We are committed to protecting
            your personal information and your right to privacy. This Privacy Policy explains how we
            collect, use, and share information about you when you visit{' '}
            <strong>softlyflow.com</strong> (the "Site").
          </p>
          <p>
            By using our Site, you agree to the collection and use of information in accordance with
            this policy. If you do not agree, please discontinue use of the Site.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>We collect information in the following ways:</p>
          <ul>
            <li>
              <strong>Log Data:</strong> When you visit our Site, our servers automatically record
              information such as your IP address, browser type, referring URL, and pages visited.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies and similar tracking technologies to track
              activity on our Site and hold certain information. You can instruct your browser to
              refuse all cookies or to indicate when a cookie is being sent.
            </li>
            <li>
              <strong>Analytics:</strong> We may use third-party analytics services (such as Google
              Analytics) to understand how visitors use our Site. These services may collect
              information sent by your browser as part of a web page request.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Google AdSense & Advertising</h2>
          <p>
            We use <strong>Google AdSense</strong> to display advertisements on our Site. Google
            AdSense uses cookies to serve ads based on your prior visits to our Site or other sites
            on the Internet.
          </p>
          <p>
            Google's use of advertising cookies enables it and its partners to serve ads to you
            based on your visit to our Site and/or other sites on the Internet. You may opt out of
            personalized advertising by visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            .
          </p>
          <p>
            For more information on how Google uses data from sites that use its services, please
            visit:{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
            >
              How Google uses information from sites or apps that use our services
            </a>
            .
          </p>
        </section>

        <section>
          <h2>4. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Operate and maintain our Site</li>
            <li>Understand and analyze how you use our Site</li>
            <li>Improve, personalize, and expand our Site</li>
            <li>Display relevant advertisements through Google AdSense</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>5. Third-Party Services</h2>
          <p>
            Our Site may contain links to third-party websites or services that are not operated by
            us. We have no control over, and assume no responsibility for, the content, privacy
            policies, or practices of any third-party sites or services.
          </p>
          <p>
            We may use the following third-party services, each governed by their own privacy policy:
          </p>
          <ul>
            <li>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google Analytics & AdSense
              </a>
            </li>
            <li>
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                Vercel (hosting)
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>6. Children's Privacy</h2>
          <p>
            Our Site is not directed to children under the age of 13. We do not knowingly collect
            personally identifiable information from children under 13. If you are a parent or
            guardian and believe your child has provided us with personal information, please contact
            us so we can take appropriate action.
          </p>
        </section>

        <section>
          <h2>7. Your Rights (GDPR & CCPA)</h2>
          <p>
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul>
            <li>The right to access the personal data we hold about you</li>
            <li>The right to request correction or deletion of your personal data</li>
            <li>The right to object to or restrict processing of your personal data</li>
            <li>The right to opt out of the sale of personal data (California residents)</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at the email address below.
          </p>
        </section>

        <section>
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page and updating the "Last updated" date.
            You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:{' '}
            <a href="mailto:hello@softlyflow.com">hello@softlyflow.com</a>
          </p>
        </section>

      </div>
    </article>
  )
}
