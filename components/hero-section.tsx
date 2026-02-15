"use client"

import Image from "next/image"
import { Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Welcome to my portfolio
          </p>

          <h1 className="text-balance font-display text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {"I'm "}
            <span className="text-primary">Samruddhi</span>
            {", a Junior Data Analyst"}
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            Automating ETL pipelines and building data-driven stories. Turning
            raw numbers into actionable business insights with SQL, Python,
            Power BI, and Tableau.
          </p>

          {/* Social ribbon */}
          <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
            <a
              href="https://linkedin.com/in/samruddhi-divase"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/samruddhidivase"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Right column - profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative shrink-0"
        >
          <div className="relative h-72 w-72 overflow-hidden rounded-3xl border-2 border-primary/40 shadow-lg shadow-primary/10 sm:h-80 sm:w-80">
            <Image
              src="/images/profile-photo.jpg"
              alt="Samruddhi Divase - Junior Data Analyst"
              fill
              sizes="320px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
