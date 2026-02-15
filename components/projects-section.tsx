import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "HR Analytics Dashboard",
    description:
      "Built an interactive HR dashboard tracking attrition rates, employee tenure, and department-level metrics. Reduced manual verification time by 10 hours/month through automated reporting.",
    tools: ["SQL", "Excel", "Power BI"],
    image: "/images/hr-analytics.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Sales & Customer Analysis",
    description:
      "Identified high-value customer segments and analyzed product profitability trends. Created comprehensive sales funnel analysis and customer retention insights.",
    tools: ["SQL", "Tableau"],
    image: "/images/ecommerce-analysis.jpg",
    github: "#",
    demo: "#",
  },
  {
    title: "Adventure Works Data Exploration",
    description:
      "Built a Star Schema data model and created year-over-year KPI dashboards with DAX measures. Generated actionable business recommendations from multi-dimensional analysis.",
    tools: ["SQL", "Power BI", "DAX"],
    image: "/images/adventure-works.jpg",
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-card px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Real-world data analytics projects showcasing skills in
            visualization, data modeling, and business insights.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-border bg-background transition-all hover:border-primary/30 hover:shadow-lg"
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
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {project.title}
                </h3>

                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1.5 h-3.5 w-3.5" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
