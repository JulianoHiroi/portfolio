import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Portfolio's Juliano",
  description: 'Portfolio of Juliano, a software developer.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
