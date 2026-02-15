"use client"

import { useState } from "react"
import {
  Phone,
  Mail,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { motion } from "framer-motion"

const EMAIL = "samruddhidivase28@email.com"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/samruddhi-divase",
    href: "https://linkedin.com/in/samruddhi-divase",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/samruddhidivase",
    href: "https://github.com/samruddhi-divase",
  },
]

export function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      toast.success("Email copied to clipboard!")
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">
            Contact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Interested in working together or have questions? Feel free to reach
            out.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-5"
        >
          {/* Quick connect panel */}
          <div className="space-y-4 lg:col-span-2">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40"
              >
                <div className="rounded-lg bg-primary/10 p-2.5">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-0.5 truncate text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            <Button
              variant="outline"
              className="w-full"
              onClick={copyEmail}
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4 text-primary" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy Email Address
                </>
              )}
            </Button>
          </div>

          {/* Contact form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 rounded-xl border border-border bg-card p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can I help?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell me about the opportunity..."
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
