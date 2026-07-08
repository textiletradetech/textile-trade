"use client"

import { Button } from "@/components/ui/button"
import { Play, Download } from "lucide-react"
import Link from "next/link"
import { useState, useRef } from "react"

export function VideoHero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster="/images/textile-trade-icon.png"
          loop
          muted
          playsInline
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-04-02%20at%2014.35.03-9aHSe3o37mlRd6DsGOH2DWngw6kbR7.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 text-balance">
            Connect. Trade. Grow Your Textile Business
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-pretty">
            Join thousands of textile manufacturers, wholesalers, and retailers on India&apos;s premier B2B marketplace. Discover quality fabrics, connect with verified suppliers, and scale your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 text-lg px-8"
              onClick={handlePlayVideo}
            >
              <Play className="h-5 w-5" />
              {isPlaying ? "Pause Video" : "Watch Demo"}
            </Button>
            <Button
              size="lg"
              asChild
              className="gap-2 text-lg px-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link href="#download">
                <Download className="h-5 w-5" />
                Download App
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/80">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">10K+</div>
              <div className="text-sm">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">5000+</div>
              <div className="text-sm">Verified Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">50K+</div>
              <div className="text-sm">Products Listed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
