import type { Metadata, Viewport } from "next"
import { Inter, Saira_Stencil_One } from "next/font/google"
import { Toaster } from "sonner"

import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _saira = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-saira-stencil",
})

export const metadata: Metadata = {
  title: "Samruddhi Divase | Junior Data Analyst",
  description:
    "Junior Data Analyst automating ETL pipelines and building data-driven stories. Skilled in SQL, Python, Power BI, Tableau, and Excel.",
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
  themeColor: "#0F172A",
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
        <Toaster position="bottom-center" richColors theme="dark" />
      </body>
    </html>
  )
}
