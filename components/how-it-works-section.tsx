import { Download, Search, ShoppingCart, Truck } from "lucide-react"

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download the App",
    description: "Get Textile Trade from the Play Store and create your free business account.",
  },
  {
    icon: Search,
    step: "02",
    title: "Browse & Discover",
    description: "Explore thousands of textile products from verified suppliers across India.",
  },
  {
    icon: ShoppingCart,
    step: "03",
    title: "Connect & Negotiate",
    description: "Chat with suppliers, request quotes, and negotiate the best prices.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Order & Track",
    description: "Place orders securely and track deliveries in real-time.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Start Trading in 4 Simple Steps
          </h2>
          <p className="text-muted-foreground text-lg">
            Getting started with Textile Trade is quick and easy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="text-sm font-bold text-primary mb-2">{step.step}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
