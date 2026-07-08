import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Textile Trade",
  description: "Read the terms and conditions for using the Textile Trade platform and services.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: April 12, 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to Textile Trade. By accessing or using our mobile application and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
              <p className="text-muted-foreground">
                These terms apply to all users of the platform, including buyers, sellers, and visitors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                Textile Trade is a B2B marketplace platform that connects textile manufacturers, wholesalers, and retailers. Our services include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Product listing and discovery</li>
                <li>Buyer-seller communication</li>
                <li>Order management and tracking</li>
                <li>Payment processing</li>
                <li>Business analytics and insights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">3.1 Registration</h3>
              <p className="text-muted-foreground mb-4">
                To use certain features, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate.
              </p>

              <h3 className="text-xl font-medium text-foreground mb-3">3.2 Account Security</h3>
              <p className="text-muted-foreground mb-4">
                You are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized access to your account.
              </p>

              <h3 className="text-xl font-medium text-foreground mb-3">3.3 Account Eligibility</h3>
              <p className="text-muted-foreground">
                You must be at least 18 years old and have the legal authority to enter into these terms. Business accounts must be registered with valid business documentation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Conduct</h2>
              <p className="text-muted-foreground mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Post false, misleading, or fraudulent content</li>
                <li>Infringe on intellectual property rights</li>
                <li>Engage in spam, phishing, or malicious activities</li>
                <li>Manipulate prices or engage in unfair trade practices</li>
                <li>Circumvent platform fees or payment systems</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Use automated systems to access our services without permission</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Seller Obligations</h2>
              <p className="text-muted-foreground mb-4">As a seller on Textile Trade, you agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate product descriptions and images</li>
                <li>Maintain updated inventory and pricing</li>
                <li>Fulfill orders in a timely manner</li>
                <li>Comply with all applicable trade and tax regulations</li>
                <li>Provide valid GST and business documentation</li>
                <li>Honor all confirmed orders and agreed prices</li>
                <li>Respond to buyer inquiries within reasonable timeframes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Buyer Obligations</h2>
              <p className="text-muted-foreground mb-4">As a buyer on Textile Trade, you agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate shipping and billing information</li>
                <li>Complete payment for confirmed orders</li>
                <li>Inspect goods upon delivery and report issues promptly</li>
                <li>Communicate professionally with sellers</li>
                <li>Not engage in fraudulent chargebacks or disputes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Transactions and Payments</h2>
              <p className="text-muted-foreground mb-4">
                All transactions on Textile Trade are subject to our payment terms. We facilitate payments between buyers and sellers but are not a party to the underlying sale transaction.
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Platform fees may apply to transactions</li>
                <li>Payment processing is handled by third-party providers</li>
                <li>Refunds are subject to our Refund Policy</li>
                <li>We reserve the right to hold payments pending dispute resolution</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                The Textile Trade platform, including its design, features, and content, is protected by copyright, trademark, and other intellectual property laws. You retain ownership of content you post but grant us a license to use, display, and distribute it on our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Disclaimers</h2>
              <p className="text-muted-foreground mb-4">
                Textile Trade provides the platform &quot;as is&quot; without warranties of any kind. We do not guarantee:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>The quality, safety, or legality of listed products</li>
                <li>The accuracy of listings or user content</li>
                <li>The ability of sellers to complete transactions</li>
                <li>The identity or reliability of users</li>
                <li>Uninterrupted or error-free service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, Textile Trade shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform, including lost profits, data loss, or business interruption.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold harmless Textile Trade, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the platform, your violation of these terms, or your infringement of any rights of another party.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Termination</h2>
              <p className="text-muted-foreground">
                We may suspend or terminate your account at any time for violations of these terms or for any other reason. You may also delete your account at any time. Upon termination, your right to use the platform ceases, but certain provisions of these terms will survive.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">
                For disputes between buyers and sellers, we encourage resolution through our platform&apos;s dispute resolution process. For disputes with Textile Trade:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Disputes shall be governed by the laws of India</li>
                <li>The courts of Gujarat, India shall have exclusive jurisdiction</li>
                <li>You agree to attempt informal resolution before pursuing legal action</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We may modify these terms at any time. We will notify users of material changes through the app or email. Your continued use of the platform after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">15. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong>Email:</strong> legal@textiletrade.app</li>
                <li><strong>Address:</strong> Textile Trade Pvt. Ltd., Surat, Gujarat, India</li>
                <li><strong>Phone:</strong> +91-XXX-XXX-XXXX</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
