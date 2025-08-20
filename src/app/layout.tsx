import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TBR Tracker - To Be Read List Manager',
  description:
    'A modern, accessible tool to track your to-be-read books with Google Sheets integration',
  keywords: ['reading', 'books', 'TBR', 'to be read', 'reading list'],
  authors: [{ name: 'TBR Tracker Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3b82f6',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">{children}</div>
      </body>
    </html>
  )
}
