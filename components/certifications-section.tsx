import { Award } from "lucide-react"

export function CertificationsSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Certifications
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Professional Credentials
          </h2>
        </div>

        <div className="mx-auto max-w-lg">
          <div className="flex items-start gap-5 rounded-xl border border-border bg-card p-8">
            <div className="rounded-lg bg-accent p-3">
              <Award className="h-7 w-7 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-card-foreground">
                Certified Data Analyst
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                ExcelR Solution
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
