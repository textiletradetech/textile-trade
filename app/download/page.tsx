import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const IOS_STORE_URL = 'https://apps.apple.com/in/app/textile-trade/id6764899520';
const ANDROID_STORE_URL = 'https://play.google.com/store/apps/details?id=com.textiletrade.in';

/**
 * Smart download redirect page.
 * Server-side: reads User-Agent and instantly redirects to the
 * correct app store (App Store for iOS, Play Store for Android).
 * Desktop users see a beautiful download landing page.
 */
export default async function DownloadPage() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';

  const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
  const isAndroid = /Android/i.test(userAgent);

  if (isIOS) {
    redirect(IOS_STORE_URL);
  }

  if (isAndroid) {
    redirect(ANDROID_STORE_URL);
  }

  // Desktop fallback — show a styled download page
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        padding: '24px',
        textAlign: 'center',
      }}
    >
      {/* Logo / Icon */}
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: 24,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 32,
          fontSize: 48,
        }}
      >
        🧵
      </div>

      <h1
        style={{
          color: '#ffffff',
          fontSize: 36,
          fontWeight: 800,
          margin: '0 0 12px',
          letterSpacing: '-0.5px',
        }}
      >
        Textile Trade
      </h1>

      <p
        style={{
          color: '#94a3b8',
          fontSize: 18,
          margin: '0 0 48px',
          maxWidth: 420,
          lineHeight: 1.6,
        }}
      >
        The best platform for textile business. Connect, trade, and grow with thousands of textile professionals.
      </p>

      {/* Download Buttons */}
      <div
        style={{
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {/* App Store */}
        <a
          href={IOS_STORE_URL}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: '#ffffff',
            color: '#0f172a',
            borderRadius: 16,
            padding: '14px 24px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 15,
            transition: 'opacity 0.2s',
          }}
        >
          <span style={{ fontSize: 28 }}>🍎</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 11, opacity: 0.6, fontWeight: 500 }}>Download on the</div>
            <div style={{ fontSize: 16, fontWeight: 800 }}>App Store</div>
          </div>
        </a>

        {/* Play Store */}
        <a
          href={ANDROID_STORE_URL}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            background: '#ffffff',
            color: '#0f172a',
            borderRadius: 16,
            padding: '14px 24px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: 15,
            transition: 'opacity 0.2s',
          }}
        >
          <span style={{ fontSize: 28 }}>▶️</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 11, opacity: 0.6, fontWeight: 500 }}>Get it on</div>
            <div style={{ fontSize: 16, fontWeight: 800 }}>Google Play</div>
          </div>
        </a>
      </div>

      <p
        style={{
          color: '#475569',
          fontSize: 13,
          marginTop: 48,
        }}
      >
        Available for iOS and Android • Free to download
      </p>
    </main>
  );
}

export const metadata = {
  title: 'Download Textile Trade',
  description: 'Download the Textile Trade app — the best platform for textile business. Available on iOS and Android.',
};
