import type { Metadata, Viewport } from "next"
import { Inter, Source_Code_Pro } from "next/font/google"
import { Toaster } from "sonner"

import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
})

export const metadata: Metadata = {
  title: "Samruddhi Divase | Data Architect & Insights Strategist",
  description:
    "Data Architect & Insights Strategist turning raw data into high-impact business narratives. Skilled in SQL, Python, Power BI, Tableau, and Excel.",
  keywords: [
    "Data Analyst",
    "Data Architect",
    "Insights Strategist",
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
    "Excel",
    "Portfolio",
    "Pune",
  ],
}

export const viewport: Viewport = {
  themeColor: "#0e8585",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <Toaster position="bottom-center" richColors />
      </body>
    </html>
  )
}
