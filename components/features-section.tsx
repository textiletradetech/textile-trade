import { Shield, Users, Package, MessageSquare, TrendingUp, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Users,
    title: "Verified Suppliers",
    description: "Connect with verified textile manufacturers and wholesalers with trust badges and ratings.",
  },
  {
    icon: Package,
    title: "Vast Product Catalog",
    description: "Browse through thousands of fabrics, yarns, and textile products from across India.",
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "Chat directly with suppliers, negotiate prices, and finalize deals in-app.",
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Safe and secure payment options with buyer protection and escrow services.",
  },
  {
    icon: TrendingUp,
    title: "Business Analytics",
    description: "Track your orders, analyze trends, and make data-driven business decisions.",
  },
  {
    icon: Globe,
    title: "Pan-India Network",
    description: "Access suppliers and buyers from textile hubs across Gujarat, Tamil Nadu, and more.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Everything You Need to Grow Your Textile Business
          </h2>
          <p className="text-muted-foreground text-lg">
            Powerful features designed specifically for the textile industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
