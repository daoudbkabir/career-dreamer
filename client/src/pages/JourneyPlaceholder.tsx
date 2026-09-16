import { ArrowLeft, ArrowRight, Compass, Heart, Sparkles, Target } from "lucide-react";
import { Link } from "wouter";
import { CareerShell } from "@/components/CareerShell";

type JourneyPlaceholderProps = {
  eyebrow: string;
  title: string;
  body: string;
  nextLabel: string;
  nextHref: string;
  icon: typeof Heart;
};

export function JourneyPlaceholder({ eyebrow, title, body, nextLabel, nextHref, icon: Icon }: JourneyPlaceholderProps) {
  return (
    <CareerShell>
      <section className="container flex min-h-[calc(100vh-145px)] max-w-4xl flex-col justify-center py-16">
        <Link href="/" className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"><ArrowLeft className="size-4" aria-hidden="true" /> Back to overview</Link>
        <div className="mt-12 grid gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-accent text-primary"><Icon className="size-7" aria-hidden="true" /></div>
          <div className="max-w-2xl">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-4 font-display text-5xl leading-tight tracking-[-0.04em] text-foreground sm:text-6xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">{body}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href={nextHref} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition duration-150 hover:bg-primary/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4">{nextLabel} <ArrowRight className="size-4" aria-hidden="true" /></Link>
              <span className="inline-flex min-h-12 items-center rounded-full border border-border bg-card px-5 text-sm font-medium text-muted-foreground">Phase 1 foundation</span>
            </div>
            <div className="mt-14 rounded-2xl border border-border bg-card p-5 text-sm leading-6 text-muted-foreground"><span className="font-semibold text-foreground">What is here today:</span> the route and content hierarchy are established. The guided workflow is the next implementation phase, so this page intentionally does not collect or invent personal information yet.</div>
          </div>
        </div>
      </section>
    </CareerShell>
  );
}

export function CareerIdentityPage() {
  return <JourneyPlaceholder eyebrow="01 · Career identity" title="Start with what matters to you." body="A guided space for your interests, strengths, education, experience, skills, and preferences. We will use what you share to make the rest of the journey more relevant — never to make assumptions on your behalf." nextLabel="See the path ahead" nextHref="/explore" icon={Heart} />;
}

export function ExplorePage() {
  return <JourneyPlaceholder eyebrow="02 · Explore paths" title="Find a few directions worth exploring." body="Career paths should help you understand what the work is, what roles exist, what skills matter, and what you could try next. This experience is being shaped before recommendations are turned on." nextLabel="See how to take action" nextHref="/take-action" icon={Compass} />;
}

export function TakeActionPage() {
  return <JourneyPlaceholder eyebrow="03 · Take action" title="Turn a direction into a next move." body="The future workspace will connect a target role and job description to truthful application preparation, clearer skill gaps, and credible learning resources." nextLabel="Open My Career" nextHref="/my-career" icon={Target} />;
}

export function MyCareerPage() {
  return <JourneyPlaceholder eyebrow="Your workspace" title="Keep your career journey in one place." body="My Career will bring together your profile, saved paths, job ideas, courses, application materials, and progress without turning into a complicated dashboard." nextLabel="Start with your identity" nextHref="/career-identity" icon={Sparkles} />;
}
