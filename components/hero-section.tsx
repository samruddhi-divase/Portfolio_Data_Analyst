import { ArrowDown, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const skills = ["SQL", "Python", "Power BI", "Tableau", "Excel", "R"]

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          Open to opportunities
        </div>

        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Samruddhi Divase
        </h1>

        <p className="mt-3 text-xl font-semibold text-primary sm:text-2xl">
          Data Analyst
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Certified Data Analyst with a Master&apos;s degree in Computer Science
          and hands-on internship experience. Skilled in SQL, Python, Power BI,
          and Tableau with a strong focus on data cleaning, modeling, and
          visualization to support data-driven decision making.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg">
            <a href="#projects">
              <ArrowDown className="mr-2 h-4 w-4" />
              View Projects
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
