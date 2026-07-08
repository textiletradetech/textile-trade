import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Refund Policy - Textile Trade",
  description: "Understand our refund and cancellation policies for transactions on Textile Trade.",
}

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-2">Refund Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: April 12, 2026</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Overview</h2>
              <p className="text-muted-foreground">
                At Textile Trade, we strive to ensure all transactions are completed satisfactorily. This Refund Policy outlines the terms and conditions for refunds, returns, and cancellations on our B2B marketplace platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Order Cancellation</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">2.1 Buyer Cancellation</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Orders can be cancelled within 24 hours of placement if not yet shipped</li>
                <li>Full refund will be processed for eligible cancellations</li>
                <li>Custom or made-to-order items may not be eligible for cancellation</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">2.2 Seller Cancellation</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Sellers may cancel orders due to stock unavailability</li>
                <li>Buyers will receive a full refund for seller-cancelled orders</li>
                <li>Repeated cancellations may affect seller ratings and standing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Return Eligibility</h2>
              <p className="text-muted-foreground mb-4">Products may be returned if:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>The product received is significantly different from the description</li>
                <li>The product is damaged or defective upon delivery</li>
                <li>Wrong product or quantity was delivered</li>
                <li>Quality does not match the agreed specifications</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Return requests must be initiated within 7 days of delivery with supporting photos and documentation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Non-Returnable Items</h2>
              <p className="text-muted-foreground mb-4">The following items cannot be returned:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Custom-made or personalized products</li>
                <li>Cut fabrics or processed materials</li>
                <li>Items marked as &quot;Final Sale&quot; or &quot;Non-Returnable&quot;</li>
                <li>Products damaged due to buyer mishandling</li>
                <li>Items returned after the 7-day return window</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Refund Process</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">5.1 Refund Timeline</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
                <li>Refund requests are processed within 5-7 business days</li>
                <li>Once approved, refunds are credited within 7-14 business days</li>
                <li>The actual credit time depends on your bank or payment provider</li>
              </ul>

              <h3 className="text-xl font-medium text-foreground mb-3">5.2 Refund Methods</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Refunds are processed to the original payment method</li>
                <li>Bank transfers may be used for alternative arrangements</li>
                <li>Platform credits may be offered for faster resolution</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Return Shipping</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>For seller fault (wrong/defective items): Seller bears return shipping costs</li>
                <li>For buyer change of mind: Buyer bears return shipping costs</li>
                <li>Products must be returned in original packaging when possible</li>
                <li>A restocking fee may apply for certain returns</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Dispute Resolution</h2>
              <p className="text-muted-foreground mb-4">
                If buyers and sellers cannot reach an agreement, Textile Trade offers a dispute resolution process:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Submit a dispute through the app with supporting evidence</li>
                <li>Our team will review and mediate within 5 business days</li>
                <li>Final decisions are binding on both parties</li>
                <li>Evidence including photos, communications, and documentation will be considered</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Platform Fees</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Platform fees are non-refundable for completed transactions</li>
                <li>For cancelled orders, platform fees may be refunded at our discretion</li>
                <li>Subscription fees are non-refundable once the billing cycle begins</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For refund-related inquiries, please contact our support team:
              </p>
              <ul className="list-none text-muted-foreground space-y-2">
                <li><strong>Email:</strong> support@textiletrade.app</li>
                <li><strong>In-App:</strong> Help Center → Refund Request</li>
                <li><strong>Phone:</strong> +91-XXX-XXX-XXXX (Mon-Sat, 9 AM - 6 PM IST)</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
