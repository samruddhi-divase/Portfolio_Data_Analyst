"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const projects = [
  {
    title: "HR Analytics Dashboard",
    impact: [
      "Tracked attrition rates & employee tenure across departments",
      "Reduced manual verification time by 10 hours/month",
      "Automated KPI reporting for leadership reviews",
    ],
    tools: ["Python", "SQL", "Power BI"],
    image: "/images/hr-analytics.jpg",
    github: "https://github.com/samruddhi-divase",
    demo: "#",
  },
  {
    title: "E-Commerce Sales Analysis",
    impact: [
      "Identified high-value customer segments",
      "Increased revenue clarity by 20%",
      "Built sales funnel and retention insights",
    ],
    tools: ["SQL", "Tableau", "Excel"],
    image: "/images/ecommerce-analysis.jpg",
    github: "https://github.com/samruddhi-divase",
    demo: "#",
  },
  {
    title: "Adventure Works Data Exploration",
    impact: [
      "Built Star Schema data model with DAX measures",
      "Created year-over-year KPI comparison dashboards",
      "Generated actionable multi-dimensional analysis",
    ],
    tools: ["SQL", "Power BI", "DAX"],
    image: "/images/adventure-works.jpg",
    github: "https://github.com/samruddhi-divase",
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-card/50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real-world data analytics projects showcasing visualization, data
            modeling, and business insights.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} dashboard preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-6">
                <h3 className="mb-3 text-lg font-bold text-foreground">
                  {project.title}
                </h3>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary"
                    >
                      #{tool}
                    </span>
                  ))}
                </div>

                <div className="mb-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    Business Impact
                  </p>
                  <ul className="space-y-1.5">
                    {project.impact.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      View Dashboard
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1.5 h-3.5 w-3.5" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
