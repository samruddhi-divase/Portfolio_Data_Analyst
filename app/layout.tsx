import type { Metadata, Viewport } from "next"
import { Inter, Source_Code_Pro } from "next/font/google"

import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
})

export const metadata: Metadata = {
  title: "Samruddhi Divase | Data Analyst Portfolio",
  description:
    "Certified Data Analyst with Master's degree in Computer Science. Skilled in SQL, Python, Power BI, Tableau, and Excel with a strong focus on data cleaning, modeling, and visualization.",
  keywords: [
    "Data Analyst",
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
  themeColor: "#2563eb",
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
