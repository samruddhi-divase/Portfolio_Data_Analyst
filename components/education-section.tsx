"use client"

import { GraduationCap, Award } from "lucide-react"
import { motion } from "framer-motion"

const education = [
  {
    degree: "M.Sc. Computer Science",
    institution: "Savitribai Phule Pune University",
    type: "Master of Science",
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "Savitribai Phule Pune University",
    type: "Bachelor of Science",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="bg-card/50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">
            Education
          </h2>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/40"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {item.type}
              </p>
              <h3 className="mt-1 text-lg font-bold text-foreground">
                {item.degree}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.institution}
              </p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="rounded-xl border border-primary/30 bg-primary/5 p-8 transition-all hover:border-primary/50"
          >
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Certification
            </p>
            <h3 className="mt-1 text-lg font-bold text-foreground">
              Certified Data Analyst
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              ExcelR Solution &middot; 2025
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
