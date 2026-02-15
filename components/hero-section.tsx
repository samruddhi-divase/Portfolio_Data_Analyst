"use client"

import Image from "next/image"
import { ArrowDown, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      {/* Subtle dot grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left column - text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Open to opportunities
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Data Architect &{" "}
            <span className="text-primary">Insights Strategist</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            Turning raw data into high-impact business narratives. Certified
            Data Analyst with a Master&apos;s in Computer Science and hands-on
            experience in SQL, Python, Power BI, and Tableau.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button asChild size="lg">
              <a href="#projects">
                <ArrowDown className="mr-2 h-4 w-4" />
                View Projects
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Right column - profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative shrink-0"
        >
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl border-2 border-border shadow-lg sm:h-80 sm:w-80">
            <Image
              src="/images/profile-photo.jpg"
              alt="Samruddhi Divase - Data Analyst"
              fill
              sizes="320px"
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -right-3 -bottom-3 -z-10 h-72 w-72 rounded-2xl border-2 border-primary/20 sm:h-80 sm:w-80" />
        </motion.div>
      </div>
    </section>
  )
}
