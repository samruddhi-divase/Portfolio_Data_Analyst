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
    <section id="education" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Education & Credentials
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Academic Background
          </h2>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent p-3">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {item.type}
              </p>
              <h3 className="mt-1 text-lg font-bold text-card-foreground">
                {item.degree}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.institution}
              </p>
            </motion.div>
          ))}

          {/* Certification card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-xl border border-primary/20 bg-accent/50 p-8 transition-all hover:shadow-md"
          >
            <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Certification
            </p>
            <h3 className="mt-1 text-lg font-bold text-card-foreground">
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
