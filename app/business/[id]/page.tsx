"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Globe, User, Smartphone, Download, AlertCircle, ArrowLeft, MapPin, Tag } from "lucide-react"

export default function BusinessProfilePage() {
  const params = useParams()
  const id = params?.id as string

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [business, setBusiness] = useState<any>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !id) return

    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
    const isAndroid = /android/i.test(userAgent)
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream

    const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.textiletrade.in"
    const APP_STORE_URL = "https://apps.apple.com/in/app/textile-trade/id6764899520"

    if (isAndroid) {
      const intentUrl = `intent://business/${id}#Intent;scheme=textiletrade;package=com.textiletrade.in;S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`
      window.location.href = intentUrl
    } else if (isIOS) {
      window.location.href = `textiletrade://business/${id}`
      const startTime = Date.now()
      setTimeout(() => {
        if (!document.hidden && Date.now() - startTime < 3000) {
          window.location.href = APP_STORE_URL
        }
      }, 2000)
    }
  }, [id])

  useEffect(() => {
    if (!id) return

    const fetchDetails = async () => {
      try {
        const isLocal = typeof window !== "undefined" && (
          window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1" ||
          window.location.hostname.startsWith("192.168.")
        )
        const defaultApiUrl = isLocal
          ? "http://localhost:3001/api/v1"
          : "https://hkwhmirhp3.us-east-1.awsapprunner.com/api/v1"
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || defaultApiUrl
        const res = await fetch(`${baseUrl}/business/${id}`)
        const data = await res.json()

        if (res.ok && data.business) {
          setBusiness(data.business)
        } else {
          setError(data.error || "This business profile link is invalid or has expired.")
        }
      } catch (err) {
        console.error("Fetch business details failed:", err)
        setError("This business profile link is invalid or has expired.")
      } finally {
        setLoading(false)
      }
    }

    fetchDetails()
  }, [id])

  const handleOpenApp = () => {
    if (!id) return
    window.location.href = `textiletrade://business/${id}`
  }

  const handleDownloadApp = () => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
    if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.textiletrade.in"
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.location.href = "https://apps.apple.com/in/app/textile-trade/id6764899520"
    } else {
      window.location.href = "https://play.google.com/store/apps/details?id=com.textiletrade.in"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-950 flex flex-col justify-between items-center text-zinc-100 font-sans p-6">
      
      {/* Top Header */}
      <header className="w-full max-w-4xl flex justify-between items-center py-4">
        <a href="https://textiletrade.in" className="flex items-center gap-2 text-zinc-400 hover:text-white transition duration-200">
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">textiletrade.in</span>
        </a>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center w-full py-12">
        {loading ? (
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
            <p className="text-sm text-zinc-400">Loading business details...</p>
          </div>
        ) : error ? (
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 max-w-md w-full text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-950/40 text-red-400 border border-red-800/30 mb-6">
              <AlertCircle className="h-8 w-8" />
            </div>
            <h1 className="text-xl font-bold text-zinc-100 mb-2">Profile Invalid</h1>
            <p className="text-sm text-zinc-400 mb-8 leading-relaxed">{error}</p>
            <a
              href="https://textiletrade.in"
              className="w-full py-3 block bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/60 font-medium rounded-xl transition duration-200"
            >
              Go to Textile Trade
            </a>
          </div>
        ) : (
          <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-2xl p-8 max-w-md w-full flex flex-col items-center">
            {/* Avatar */}
            {business.owner?.avatar ? (
              <img
                src={business.owner.avatar}
                alt={business.business_name}
                className="w-24 h-24 rounded-full object-cover border-2 border-cyan-500/20 mb-6"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-cyan-950/40 text-cyan-400 border border-cyan-800/30 flex items-center justify-center text-3xl font-bold mb-6">
                {(business.business_name || "B").substring(0, 1).toUpperCase()}
              </div>
            )}

            {/* Business Title */}
            <h1 className="text-2xl font-bold text-zinc-100 text-center mb-2">{business.business_name}</h1>
            
            {/* Owner Name */}
            {business.owner?.full_name && (
              <div className="flex items-center gap-1.5 text-sm text-zinc-400 mb-4">
                <User className="h-4 w-4 text-cyan-400" />
                <span>Owned by {business.owner.full_name}</span>
              </div>
            )}

            {/* Badges / Details */}
            <div className="flex flex-col gap-2.5 mb-8 w-full">
              {business.business_type && (
                <div className="flex items-center gap-2.5 text-xs bg-zinc-800/40 text-zinc-300 px-3 py-2 rounded-xl border border-zinc-800/60">
                  <Tag className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>{business.business_type}</span>
                </div>
              )}
              {business.owner?.location && (
                <div className="flex items-center gap-2.5 text-xs bg-zinc-800/40 text-zinc-300 px-3 py-2 rounded-xl border border-zinc-800/60">
                  <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>{business.owner.location}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="w-full flex flex-col gap-3">
              <button
                onClick={handleOpenApp}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Smartphone className="h-5 w-5" />
                <span>Open in App</span>
              </button>

              <button
                onClick={handleDownloadApp}
                className="w-full py-3 bg-zinc-800/70 hover:bg-zinc-700/70 text-zinc-200 border border-zinc-700/60 font-semibold rounded-xl transition duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="h-5 w-5" />
                <span>Download App</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Footer */}
      <footer className="w-full text-center py-6 text-xs text-zinc-600 border-t border-zinc-900">
        <p>&copy; {new Date().getFullYear()} Textile Trade. All rights reserved.</p>
      </footer>
    </div>
  )
}
