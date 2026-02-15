import { GraduationCap } from "lucide-react"

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
    <section id="education" className="bg-card px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Education
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Academic Background
          </h2>
        </div>

        <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-accent p-3">
                <GraduationCap className="h-6 w-6 text-accent-foreground" />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
