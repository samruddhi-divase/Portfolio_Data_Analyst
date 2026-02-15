"use client"

import { motion } from "framer-motion"
import {
  Database,
  Terminal,
  BarChart3,
  LineChart,
  FileSpreadsheet,
  FlaskConical,
  TrendingUp,
  Code2,
} from "lucide-react"

const skills = [
  { name: "SQL / MySQL", icon: Database, level: 90 },
  { name: "Python", icon: Terminal, level: 85 },
  { name: "Power BI", icon: BarChart3, level: 88 },
  { name: "Tableau", icon: LineChart, level: 82 },
  { name: "Advanced Excel", icon: FileSpreadsheet, level: 92 },
  { name: "R Programming", icon: FlaskConical, level: 70 },
  { name: "Data Cleaning", icon: Code2, level: 90 },
  { name: "Statistics", icon: TrendingUp, level: 70 },
]

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">
            Skills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A versatile toolkit spanning data manipulation, visualization, and
            statistical analysis.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <skill.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">
                  {skill.name}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
                <span className="text-xs font-bold text-primary">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
