import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Compass,
  FileText,
  GraduationCap,
  Heart,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "wouter";
import { CareerShell } from "@/components/CareerShell";

const journey = [
  { step: "01", label: "Career identity", detail: "Start with what matters to you.", icon: Heart },
  { step: "02", label: "Explore paths", detail: "See directions that fit.", icon: Compass },
  { step: "03", label: "Understand roles", detail: "Connect paths to real jobs.", icon: BriefcaseBusiness },
  { step: "04", label: "Take action", detail: "Prepare your next move.", icon: Target },
];

const nextSteps = [
  { label: "Career identity", copy: "Tell us about your interests, strengths, and the kind of work you want to try.", icon: Sparkles },
  { label: "Explore career paths", copy: "Turn your starting point into a few realistic directions to explore.", icon: Compass },
  { label: "Prepare with confidence", copy: "Understand a target role, tailor your materials, and see what to learn next.", icon: GraduationCap },
];

export default function Home() {
  return (
    <CareerShell>
      <section className="relative overflow-hidden border-b border-border/70 bg-background">
        <div className="container grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:py-24">
          <div className="max-w-2xl">
            <div className="eyebrow mb-6"><span className="eyebrow-dot" />A clearer next step for your career</div>
            <h1 className="max-w-2xl font-display text-5xl leading-[1.02] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-[4.8rem]">
              Find work that feels <span className="text-primary">worth moving toward.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Career Dreamer helps you understand yourself, explore realistic paths, and turn a direction into practical action — one thoughtful step at a time.
            </p>
            <div id="start" className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/career-identity" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_10px_24px_rgba(21,101,192,0.18)] transition duration-150 hover:bg-primary/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
                Start with your career identity <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a href="#journey" className="inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">
                See how it works
              </a>
            </div>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">Built by Youth Academy for the road ahead</p>
          </div>

          <div className="relative lg:pl-6">
            <div className="absolute -right-10 -top-10 size-40 rounded-full bg-accent/70 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[0_20px_60px_rgba(23,32,51,0.10)]">
              <div className="flex items-center justify-between border-b border-border px-6 py-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Your starting point</p>
                  <p className="mt-1 font-display text-2xl text-foreground">A career map, not a maze.</p>
                </div>
                <div className="flex size-10 items-center justify-center rounded-full bg-accent text-primary"><Compass className="size-5" aria-hidden="true" /></div>
              </div>
              <div className="space-y-3 p-6">
                <div className="rounded-2xl bg-accent/60 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Your direction</p>
                      <p className="mt-2 text-lg font-semibold text-foreground">Curious, creative, people-focused</p>
                    </div>
                    <span className="rounded-full bg-card px-2.5 py-1 text-xs font-semibold text-primary">New</span>
                  </div>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-card/80"><div className="h-full w-[34%] rounded-full bg-primary" /></div>
                  <p className="mt-2 text-xs text-muted-foreground">1 of 4 starting points explored</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-border p-4"><Heart className="size-4 text-primary" aria-hidden="true" /><p className="mt-6 text-sm font-semibold">What energizes you</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Interests and strengths</p></div>
                  <div className="rounded-2xl border border-border p-4"><Target className="size-4 text-primary" aria-hidden="true" /><p className="mt-6 text-sm font-semibold">Where to go next</p><p className="mt-1 text-xs leading-5 text-muted-foreground">Paths worth exploring</p></div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-[#172033] p-4 text-white">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10"><ArrowRight className="size-4" aria-hidden="true" /></div>
                  <div><p className="text-sm font-semibold">Your next step</p><p className="mt-0.5 text-xs leading-5 text-white/65">Tell us what you enjoy doing.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="journey" className="container scroll-mt-16 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">A connected journey</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight tracking-[-0.035em] text-foreground sm:text-5xl">You do not have to figure it all out at once.</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground">Career Dreamer keeps the thread from your first question to your next practical step.</p>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-4">
          {journey.map(({ step, label, detail, icon: Icon }, index) => (
            <div key={label} className="journey-card group relative rounded-2xl border border-border bg-card p-5 shadow-sm">
              {index < journey.length - 1 && <div className="absolute -right-3 top-1/2 z-10 hidden h-px w-6 bg-border md:block" aria-hidden="true" />}
              <div className="flex items-center justify-between"><span className="text-xs font-semibold tracking-[0.16em] text-muted-foreground">{step}</span><Icon className="size-5 text-primary transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true" /></div>
              <h3 className="mt-8 text-base font-semibold text-foreground">{label}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="border-y border-border/70 bg-card">
        <div className="container grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="eyebrow">Designed for real life</p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.035em] text-foreground sm:text-5xl">Less noise. More direction.</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">A calm place to ask better questions, make informed choices, and keep moving without pretending there is one perfect answer.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {nextSteps.map(({ label, copy, icon: Icon }) => (
              <div key={label}>
                <div className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary"><Icon className="size-5" aria-hidden="true" /></div>
                <h3 className="mt-5 text-base font-semibold text-foreground">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-[#172033] px-6 py-10 text-white sm:px-12 sm:py-14">
          <div className="absolute -right-14 -top-24 size-64 rounded-full border border-white/10" aria-hidden="true" />
          <div className="absolute -bottom-40 right-24 size-80 rounded-full border border-white/5" aria-hidden="true" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">A more honest kind of AI career support</p>
            <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">Your story stays yours.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70">Career Dreamer can help you find the words and the next steps. It will not invent your experience, promise a job, or decide your future for you.</p>
            <Link href="/career-identity" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#172033] transition duration-150 hover:bg-[#f7f3ea] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#172033]">Begin your career identity <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
          <div className="relative mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Your information", "Clearer options", "A next step"].map((item) => <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"><Check className="size-4 text-[#8dc4ff]" aria-hidden="true" />{item}</div>)}
          </div>
        </div>
      </section>
    </CareerShell>
  );
}
