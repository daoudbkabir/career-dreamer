import type { ReactNode } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Link } from "wouter";

export function CareerShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex min-h-[72px] items-center justify-between gap-6">
          <Link href="/" className="group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
            <span className="font-display text-[1.6rem] leading-none text-primary" aria-hidden="true">
              ya.
            </span>
            <span className="hidden h-7 w-px bg-border sm:block" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-[-0.01em] text-foreground sm:text-base">
              Career Dreamer
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
            <a href="/#journey" className="nav-link">Your journey</a>
            <a href="/#why" className="nav-link">How it works</a>
            <Link href="/my-career" className="nav-link">My Career</Link>
          </nav>

          <div className="flex items-center gap-2">
            <a href="/#start" className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform duration-150 hover:bg-primary/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 sm:inline-flex">
              Start exploring <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <button type="button" className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 md:hidden" aria-label="Open navigation menu">
              <Menu className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-border/80 bg-card">
        <div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p><span className="font-semibold text-foreground">Career Dreamer</span> by Youth Academy</p>
          <p>Build a direction you can act on.</p>
        </div>
      </footer>
    </div>
  );
}
