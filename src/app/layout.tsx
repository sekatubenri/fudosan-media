import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://fudosan-select.com'),
  title: {
    default: '不動産投資ナビ｜マンション・REIT・土地投資の完全ガイド',
    template: '%s｜不動産投資ナビ',
  },
  description: '不動産投資を徹底解説。マンション投資・REIT・土地活用の始め方から失敗しないコツまで、不動産投資に必要な情報を完全網羅。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '不動産投資ナビ',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-900 antialiased min-h-screen flex flex-col">
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9320888355424356" crossOrigin="anonymous" strategy="afterInteractive" />
        <header className="border-b border-gray-200 sticky top-0 bg-white z-50 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="bg-blue-700 text-white text-sm font-bold px-2.5 py-1 rounded">不動産</span>
              <span className="text-xl font-bold text-gray-900">投資ナビ</span>
            </a>
            <nav className="hidden md:flex gap-1 text-sm">
              <a href="/category/mansion" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">マンション投資</a>
              <a href="/category/reit" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">REIT</a>
              <a href="/category/land" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">土地・戸建て</a>
              <a href="/category/beginner" className="px-3 py-2 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors">投資初心者</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="bg-blue-700 text-white text-xs font-bold px-2 py-0.5 rounded">不動産</span>
                <span className="text-sm font-bold text-gray-900">投資ナビ</span>
              </div>
              <nav className="flex gap-6 text-xs text-gray-400">
                <a href="/category/mansion" className="hover:text-gray-600">マンション投資</a>
                <a href="/category/reit" className="hover:text-gray-600">REIT</a>
                <a href="/category/land" className="hover:text-gray-600">土地・戸建て</a>
              </nav>
            </div>
            <nav className="flex justify-center gap-6 text-xs text-gray-400 mt-4">
              <a href="/privacy" className="hover:text-gray-600">プライバシーポリシー</a>
              <a href="/contact" className="hover:text-gray-600">お問い合わせ</a>
            </nav>
            <p className="text-center text-xs text-gray-300 mt-4">© 2026 不動産投資ナビ All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
