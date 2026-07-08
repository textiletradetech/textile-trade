import { Header } from "@/components/header"
import { VideoHero } from "@/components/video-hero"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <VideoHero />
      <FeaturesSection />
      <HowItWorksSection />
      <DownloadSection />
      <Footer />
    </main>
  )
}
