import React from 'react';
import Image from 'next/image';

import { Footer } from '@/components/footer';

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20">
      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 lg:px-0">
        <div className="relative">
          <Image
            src="/logo.png"
            alt="Citizenship Test App Logo"
            width="80"
            height="80"
            className="rounded-(--radius)"
          />
          <h1 className="mt-16 max-w-xl text-balance text-5xl font-medium font-unbounded">
            Privacy Policy
          </h1>
        </div>
        <section>
          <div className="py-12">
            <p className="text-muted-foreground mt-4 text-balance text-xl font-roboto">
              <strong>Effective Date:</strong> August 1, 2025
            </p>
            <p className="text-muted-foreground mb-6 text-balance text-xl font-roboto">
              <strong>Contact:</strong>{' '}
              <a href="mailto:contact@citizenshiptestapp.com">contact@citizenshiptestapp.com</a>
            </p>

            <h2 className="mb-6 mt-4 text-balance font-medium font-unbounded">1. Introduction</h2>
            <p className="text-muted-foreground mb-6 mt-4 text-balance text-xl font-roboto">
              Welcome to <strong>Citizenship Test App</strong> (we, our, or us). Your privacy is
              critically important to us. This Privacy Policy explains how we collect, use, and
              safeguard your information when you use our mobile application (“App”).
            </p>

            <h2 className="mb-6 mt-4 text-balance font-medium font-unbounded">
              2. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-6 mt-4 text-balance text-xl font-roboto">
              When you use our app, we collect:
            </p>
            <ul className="list-disc list-inside">
              <li className="text-muted-foreground text-balance text-xl font-roboto">
                <strong>Name</strong> – chosen by you for identification within the app
              </li>
              <li className="text-muted-foreground text-balance text-xl font-roboto">
                <strong>User ID</strong> – automatically generated to link progress and preferences
              </li>
            </ul>
            <p className="text-muted-foreground mb-6 mt-4 text-balance text-xl font-roboto">
              This data is stored securely and used only to enhance your experience — for example,
              to save your progress or personalize content.{' '}
              <strong>We do not share or sell this data</strong> to any third parties.
            </p>
            <p className="text-muted-foreground mb-6 mt-4 text-balance text-xl font-roboto">
              We may collect anonymized data like session length, screen views, or quiz performance
              to improve app features.
            </p>

            <h2 className="mb-6 mt-4 text-balance font-medium font-unbounded">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside">
              <li className="text-muted-foreground text-balance text-xl font-roboto">
                To personalize your learning experience
              </li>
              <li className="text-muted-foreground text-balance text-xl font-roboto">
                To store your progress and preferences
              </li>
              <li className="text-muted-foreground text-balance text-xl font-roboto">
                To improve the app’s features and usability
              </li>
            </ul>

            <h2 className="mb-6 mt-4 text-balance font-medium font-unbounded">
              4. Data Storage and Security
            </h2>
            <p className="text-muted-foreground mb-6 mt-4 text-balance text-xl font-roboto">
              Your data is stored securely using encryption and modern access controls. Data stays
              within the app’s infrastructure and is not sold or transferred externally.
            </p>

            <h2 className="mb-6 mt-4 text-balance font-medium font-unbounded">
              5. Children’s Privacy
            </h2>
            <p className="text-muted-foreground mb-6 mt-4 text-balance text-xl font-roboto">
              The app is not intended for children under 13 (or 16 in the EU). We do not knowingly
              collect data from minors.
            </p>

            <h2 className="mb-6 mt-4 text-balance font-medium font-unbounded">
              6. Third-Party Services
            </h2>
            <p className="text-muted-foreground mb-6 mt-4 text-balance text-xl font-roboto">
              We may use third-party tools (like Firebase or Sentry) for analytics or crash
              reporting. These services process data under strict compliance policies.
            </p>
            <ul className="list-disc list-inside">
              <li className="text-muted-foreground text-balance text-xl font-roboto">
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firebase Privacy Policy
                </a>
              </li>
              <li className="text-muted-foreground text-balance text-xl font-roboto">
                <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">
                  Sentry Privacy Policy
                </a>
              </li>
            </ul>

            <h2 className="mb-6 mt-4 text-balance font-medium font-unbounded">
              7. Your Rights (GDPR)
            </h2>
            <p className="text-muted-foreground mb-6 mt-4 text-balance text-xl font-roboto">
              If you’re in the EU/UK, you have rights under GDPR including access, correction,
              deletion, restriction, or data portability. Contact us to request any of these.
            </p>

            <h2 className="mb-6 mt-4 text-balance font-medium font-unbounded">
              8. CCPA Compliance
            </h2>
            <p className="text-muted-foreground mb-6 mt-4 text-balance text-xl font-roboto">
              California residents may request data access or deletion. We do not sell your data.
              Contact us to submit a CCPA request.
            </p>

            <h2 className="mb-6 mt-4 text-balance font-medium font-unbounded">
              9. Changes to This Policy
            </h2>
            <p className="text-muted-foreground mb-6 mt-4 text-balance text-xl font-roboto">
              We may update this Privacy Policy. We’ll notify users via app updates or in-app
              notices.
            </p>

            <h2 className="mb-6 mt-4 text-balance font-medium font-unbounded">10. Contact Us</h2>
            <p className="text-muted-foreground mb-6 mt-4 text-balance text-xl font-roboto">
              For privacy questions, please email{' '}
              <a href="mailto:contact@citizenshiptestapp.com">contact@citizenshiptestapp.com</a>.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
}
