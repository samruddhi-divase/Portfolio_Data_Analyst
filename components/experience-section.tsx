"use client"

import { Building2, CalendarDays, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const responsibilities = [
  "Cleaned and transformed HR and E-commerce datasets using SQL and Python",
  "Improved reporting accuracy and reduced data discrepancies by around 15%",
  "Built Power BI and Tableau dashboards for KPIs like sales performance, retention, and attrition",
  "Created optimized SQL queries and built Star Schema data model",
  "Performed EDA and statistical testing using R",
]

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Experience
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Professional Background
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="relative rounded-xl border border-border bg-card p-8 shadow-sm">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-card-foreground">
                  Data Analyst Intern
                </h3>
                <a
                  href="https://aivariant.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
                >
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm font-medium">AI Variant, Pune</span>
                </a>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5" />
                Feb 2025 &ndash; Nov 2025
              </div>
            </div>

            <ul className="space-y-3">
              {responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
