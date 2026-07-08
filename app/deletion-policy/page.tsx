import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Data Deletion Policy - Textile Trade",
  description: "Learn how to request deletion of your personal data and account from Textile Trade.",
}

export default function DeletionPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-2">Data Deletion Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: April 12, 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Overview</h2>
              <p className="text-muted-foreground mb-4">
                At Textile Trade, we respect your right to control your personal data. This policy explains how you can request the deletion of your account and personal information from our platform.
              </p>
              <p className="text-muted-foreground">
                In accordance with data protection regulations and Google Play Store requirements, we provide clear mechanisms for users to delete their data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How to Request Data Deletion</h2>
              <p className="text-muted-foreground mb-4">You can request deletion of your data through the following methods:</p>
              
              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <h3 className="text-xl font-medium text-foreground mb-3">Option 1: In-App Deletion</h3>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                  <li>Open the Textile Trade app</li>
                  <li>Go to Settings (gear icon)</li>
                  <li>Select &quot;Account Settings&quot;</li>
                  <li>Tap on &quot;Delete My Account&quot;</li>
                  <li>Confirm your decision by entering your password</li>
                  <li>Your account and data will be scheduled for deletion</li>
                </ol>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <h3 className="text-xl font-medium text-foreground mb-3">Option 2: Email Request</h3>
                <p className="text-muted-foreground mb-3">Send an email to our data protection team:</p>
                <ul className="list-none text-muted-foreground space-y-2">
                  <li><strong>Email:</strong> deletion@textiletrade.app</li>
                  <li><strong>Subject:</strong> Data Deletion Request</li>
                </ul>
                <p className="text-muted-foreground mt-3">
                  Include the following information in your email:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
                  <li>Your registered email address</li>
                  <li>Your registered phone number</li>
                  <li>Business name (if applicable)</li>
                  <li>Reason for deletion (optional)</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-medium text-foreground mb-3">Option 3: Contact Form</h3>
                <p className="text-muted-foreground">
                  Visit our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link> and submit a data deletion request through the form. Select &quot;Data Deletion&quot; as the subject.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. What Data Will Be Deleted</h2>
              <p className="text-muted-foreground mb-4">Upon processing your deletion request, we will remove:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Personal Information:</strong> Name, email, phone number, profile picture</li>
                <li><strong>Business Information:</strong> Business name, GST number, business address, logo</li>
                <li><strong>Account Data:</strong> Login credentials, preferences, settings</li>
                <li><strong>Product Listings:</strong> All products you have listed on the platform</li>
                <li><strong>Messages:</strong> Chat history and communications with other users</li>
                <li><strong>Transaction History:</strong> Order records and payment information</li>
                <li><strong>Usage Data:</strong> App usage logs and analytics data linked to your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data We May Retain</h2>
              <p className="text-muted-foreground mb-4">
                Certain information may be retained even after account deletion for legal or legitimate business purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Transaction Records:</strong> Financial records required for tax and accounting purposes (retained for 7 years as per Indian law)</li>
                <li><strong>Legal Compliance:</strong> Information required to comply with legal obligations, resolve disputes, or enforce agreements</li>
                <li><strong>Anonymized Data:</strong> Aggregated, non-identifiable data for analytics and service improvement</li>
                <li><strong>Fraud Prevention:</strong> Records necessary to prevent fraud or abuse</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Deletion Timeline</h2>
              <div className="bg-secondary/50 rounded-lg p-6">
                <ul className="list-none text-muted-foreground space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">1</span>
                    <span><strong>Request Acknowledgment:</strong> Within 24-48 hours of receiving your request</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">2</span>
                    <span><strong>Verification:</strong> We may contact you to verify your identity (1-3 business days)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">3</span>
                    <span><strong>Account Deactivation:</strong> Your account will be deactivated immediately after verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">4</span>
                    <span><strong>Data Deletion:</strong> Complete deletion within 30 days of request approval</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">5</span>
                    <span><strong>Backup Purge:</strong> Removal from backup systems within 90 days</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Before You Delete</h2>
              <p className="text-muted-foreground mb-4">Please consider the following before requesting deletion:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Download any data or transaction records you may need for your records</li>
                <li>Complete any pending orders or transactions</li>
                <li>Withdraw any balance in your wallet</li>
                <li>Inform your business contacts about your departure from the platform</li>
                <li>Account deletion is <strong>permanent and cannot be undone</strong></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Effect of Deletion</h2>
              <p className="text-muted-foreground mb-4">Once your account is deleted:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>You will no longer be able to access the Textile Trade app with your account</li>
                <li>Your product listings will be removed from the marketplace</li>
                <li>Other users will not be able to view your profile or contact you</li>
                <li>You will lose access to your order history and messages</li>
                <li>Any pending transactions may be cancelled</li>
                <li>You may create a new account in the future, but your old data cannot be recovered</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about this policy or to request data deletion:
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <ul className="list-none text-muted-foreground space-y-2">
                  <li><strong>Data Deletion Email:</strong> deletion@textiletrade.app</li>
                  <li><strong>Privacy Email:</strong> privacy@textiletrade.app</li>
                  <li><strong>Support:</strong> support@textiletrade.app</li>
                  <li><strong>Address:</strong> Textile Trade Pvt. Ltd., Surat, Gujarat, India</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Related Policies</h2>
              <p className="text-muted-foreground">
                For more information about how we handle your data, please refer to our{" "}
                <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> and{" "}
                <Link href="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
