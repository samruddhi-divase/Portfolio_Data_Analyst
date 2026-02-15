import {
  Database,
  Code2,
  BarChart3,
  LineChart,
  FileSpreadsheet,
  FlaskConical,
  Sparkles,
  TrendingUp,
} from "lucide-react"

const skills = [
  { name: "SQL / MySQL", icon: Database, level: 90 },
  { name: "Python", icon: Code2, level: 85 },
  { name: "Power BI", icon: BarChart3, level: 88 },
  { name: "Tableau", icon: LineChart, level: 82 },
  { name: "Advanced Excel", icon: FileSpreadsheet, level: 92 },
  { name: "R", icon: FlaskConical, level: 75 },
  { name: "Data Cleaning", icon: Sparkles, level: 90 },
  { name: "Statistics", icon: TrendingUp, level: 80 },
]

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Skills
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Technical Expertise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A versatile toolkit spanning data manipulation, visualization, and
            statistical analysis.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-accent p-2.5">
                  <skill.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <h3 className="text-sm font-semibold text-card-foreground">
                  {skill.name}
                </h3>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="mt-2 text-right text-xs font-medium text-muted-foreground">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
