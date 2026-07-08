"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "support@textiletrade.app",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+91-XXX-XXX-XXXX",
    description: "Mon-Sat, 9 AM - 6 PM IST",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "Surat, Gujarat, India",
    description: "Textile Trade Pvt. Ltd.",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Monday - Saturday",
    description: "9:00 AM - 6:00 PM IST",
  },
]

const faqs = [
  {
    question: "How do I register as a seller?",
    answer: "Download the app, select 'Register as Seller', and provide your business details including GST number and bank information.",
  },
  {
    question: "What are the platform fees?",
    answer: "Textile Trade charges a small commission on successful transactions. Contact our sales team for detailed pricing.",
  },
  {
    question: "How do I verify my business account?",
    answer: "Submit your GST certificate, business registration, and bank details through the app. Verification typically takes 2-3 business days.",
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes, we use industry-standard encryption and work with trusted payment partners to ensure all transactions are secure.",
  },
]

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setFormStatus("success")
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg">
              Have questions or need support? Our team is here to help you succeed in the textile trade.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                  <p className="text-foreground font-medium">{info.details}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
              </div>

              {formStatus === "success" ? (
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <Button
                      className="mt-4"
                      variant="outline"
                      onClick={() => setFormStatus("idle")}
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        disabled={formStatus === "submitting"}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your company"
                        disabled={formStatus === "submitting"}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        disabled={formStatus === "submitting"}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 XXX XXX XXXX"
                        disabled={formStatus === "submitting"}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      required
                      disabled={formStatus === "submitting"}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                      disabled={formStatus === "submitting"}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* FAQ Section */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">Need More Help?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Our support team is available to assist you with any questions.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="mailto:support@textiletrade.app">Email Support</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
