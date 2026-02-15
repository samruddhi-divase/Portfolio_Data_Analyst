"use client"

import { motion } from "framer-motion"
import {
  Database,
  Code2,
  BarChart3,
  LineChart,
  FileSpreadsheet,
  FlaskConical,
  Terminal,
  TrendingUp,
} from "lucide-react"

const categories = [
  {
    name: "Languages",
    icon: Terminal,
    skills: [
      { name: "SQL / MySQL", icon: Database, level: 90 },
      { name: "Python", icon: Code2, level: 85 },
      { name: "R", icon: FlaskConical, level: 75 },
    ],
  },
  {
    name: "Visualization",
    icon: BarChart3,
    skills: [
      { name: "Power BI", icon: BarChart3, level: 88 },
      { name: "Tableau", icon: LineChart, level: 82 },
      { name: "Advanced Excel", icon: FileSpreadsheet, level: 92 },
    ],
  },
  {
    name: "Engineering",
    icon: Database,
    skills: [
      { name: "Data Cleaning", icon: TrendingUp, level: 90 },
      { name: "Statistics", icon: TrendingUp, level: 80 },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="bg-card px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Tech Stack
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Technical Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A versatile toolkit spanning data manipulation, visualization, and
            statistical analysis.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              className="rounded-xl border border-border bg-background p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-accent p-2.5">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <skill.icon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
