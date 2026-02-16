"use client"

import { motion } from "framer-motion"
import { Database, Award, Target } from "lucide-react"

const metrics = [
  { icon: Database, value: "10+", label: "Datasets Analyzed" },
  { icon: Award, value: "Data Analyst", label: "Certified" },
  { icon: Target, value: "90%", label: "Data Accuracy" },
]

export function ImpactMetrics() {
  return (
    <section className="border-y border-border px-6 py-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.12 }}
            className="flex items-center gap-4 rounded-xl border border-border bg-card px-6 py-4"
          >
            <div className="rounded-lg bg-primary/10 p-2.5">
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
