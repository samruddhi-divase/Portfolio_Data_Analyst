import { BarChart3 } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <BarChart3 className="h-4 w-4 text-primary" />
          Samruddhi Divase
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Samruddhi Divase. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
