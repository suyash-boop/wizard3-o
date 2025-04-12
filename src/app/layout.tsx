import './globals.css'
import { Navbar } from './_components/layout/navbar'
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
