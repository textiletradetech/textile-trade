import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/textile-trade-icon.png"
                alt="Textile Trade"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">Textile Trade</span>
            </Link>
            <p className="text-background/70 text-sm">
              The leading B2B marketplace for the textile industry. Connect, trade, and grow your business.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-background/70 hover:text-background transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-background/70 hover:text-background transition-colors text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 hover:text-background transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-background/70 hover:text-background transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-background/70 hover:text-background transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-background/70 hover:text-background transition-colors text-sm">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/deletion-policy" className="text-background/70 hover:text-background transition-colors text-sm">
                  Data Deletion
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Download</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://play.google.com/store/apps/details?id=com.textiletrade.in" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors text-sm">
                  Android App
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/in/app/textile-trade/id6764899520" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors text-sm">
                  iOS App
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            &copy; {currentYear} Textile Trade. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-background/70 hover:text-background transition-colors text-sm">
              Privacy
            </Link>
            <Link href="/terms-of-service" className="text-background/70 hover:text-background transition-colors text-sm">
              Terms
            </Link>
            <Link href="/contact" className="text-background/70 hover:text-background transition-colors text-sm">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
