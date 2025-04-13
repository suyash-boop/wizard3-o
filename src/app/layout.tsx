import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "./_components/layout/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Evil Geniuses",
  description: "A collective of brilliant developers pushing the boundaries of what's possible",
  icons: {
    icon: "/favicon.ico"
  },
}

import Footer from './_components/layout/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  )
}