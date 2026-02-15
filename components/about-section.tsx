import { GraduationCap, Briefcase, Target } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "M.Sc. Computer Science",
    description:
      "Master's degree from Savitribai Phule Pune University, providing a strong foundation in analytical thinking and computational problem-solving.",
  },
  {
    icon: Briefcase,
    title: "Internship Experience",
    description:
      "Hands-on experience as a Data Analyst Intern, working with real-world datasets to derive actionable business insights.",
  },
  {
    icon: Target,
    title: "Business Problem Solver",
    description:
      "Passionate about leveraging data analytics to uncover patterns, optimize processes, and support data-driven decision making.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            About Me
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Turning Data into Decisions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            I combine technical skills with business acumen to transform raw
            data into meaningful insights that drive strategic decisions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent p-3">
                <item.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
