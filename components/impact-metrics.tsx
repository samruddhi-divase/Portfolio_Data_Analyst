"use client"

import { motion } from "framer-motion"
import { Database, Code2, Lightbulb } from "lucide-react"

const metrics = [
  {
    icon: Database,
    value: "50+",
    label: "Datasets Analyzed",
  },
  {
    icon: Code2,
    value: "10k+",
    label: "SQL Lines Written",
  },
  {
    icon: Lightbulb,
    value: "5+",
    label: "Business Solutions",
  },
]

export function ImpactMetrics() {
  return (
    <section className="border-y border-border bg-card px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-4 text-center sm:text-left"
          >
            <div className="rounded-lg bg-accent p-2.5">
              <metric.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                {metric.value}
              </p>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
