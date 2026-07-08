import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Textile Trade",
  description: "Learn how Textile Trade collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: April 12, 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to Textile Trade. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
              </p>
              <p className="text-muted-foreground">
                By using Textile Trade, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">2.1 Personal Information</h3>
              <p className="text-muted-foreground mb-4">When you register and use our app, we may collect:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Full name and business name</li>
                <li>Email address and phone number</li>
                <li>Business address and GST number</li>
                <li>Profile picture and business logo</li>
                <li>Payment and billing information</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">2.2 Usage Data</h3>
              <p className="text-muted-foreground mb-4">We automatically collect certain information when you use our app:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Device information (model, operating system, unique identifiers)</li>
                <li>Log data (access times, pages viewed, app crashes)</li>
                <li>Location data (with your consent)</li>
                <li>Usage patterns and preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the collected information for:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and sending related information</li>
                <li>Connecting buyers with sellers on our platform</li>
                <li>Sending promotional communications (with your consent)</li>
                <li>Improving our app and developing new features</li>
                <li>Detecting and preventing fraud or abuse</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Other Users:</strong> Your business profile is visible to other users for trading purposes</li>
                <li><strong>Service Providers:</strong> Third parties who help us operate our platform (payment processors, analytics providers)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your personal information, including encryption, secure servers, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your personal information for as long as your account is active or as needed to provide you services. We may retain certain information as required by law or for legitimate business purposes, such as resolving disputes and enforcing our agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your account and personal data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Data portability</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise these rights, please contact us at privacy@textiletrade.app
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-muted-foreground">
                Textile Trade is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If we discover that we have collected information from a child, we will delete it immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our app may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party services you access.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong>Email:</strong> privacy@textiletrade.app</li>
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
