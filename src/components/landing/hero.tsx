import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EXTENSION_RELEASES_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--gold-muted),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-6 border border-[color-mix(in_oklch,var(--gold),transparent_70%)] bg-[color-mix(in_oklch,var(--gold-muted),transparent_40%)] text-foreground"
          >
            Companion to BoilerClassPlan
          </Badge>

          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Plan your Purdue schedule with confidence
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
            See professor ratings and GPA data right on UniTime, then sync your
            schedule to a dashboard you can access anywhere.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={
                <a
                  href={EXTENSION_RELEASES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              size="lg"
              className="h-11 px-6"
            >
              <Download />
              Install Chrome extension
            </Button>
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 px-6"
              )}
            >
              Open dashboard
              <ArrowRight />
            </Link>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Free for Purdue students. Works with the official UniTime portal.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl border border-border bg-card p-1 shadow-xl shadow-black/5 ring-1 ring-foreground/5">
            <div className="rounded-xl bg-muted/40 p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="size-3 rounded-full bg-red-400/80" />
                <span className="size-3 rounded-full bg-amber-400/80" />
                <span className="size-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-xs text-muted-foreground">
                  timetable.mypurdue.purdue.edu
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { course: "CS 24000", prof: "Smith, J.", rating: "★ 4.6 · 3.2 GPA" },
                  { course: "ECE 27000", prof: "Chen, L.", rating: "★ 4.1 · 2.9 GPA" },
                  { course: "MA 26100", prof: "Patel, R.", rating: "★ 3.8 · 2.4 GPA" },
                ].map((row) => (
                  <div
                    key={row.course}
                    className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border/60 bg-background px-4 py-3 text-sm"
                  >
                    <div>
                      <span className="font-medium">{row.course}</span>
                      <span className="mx-2 text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{row.prof}</span>
                    </div>
                    <span className="rounded-full bg-[color-mix(in_oklch,var(--gold-muted),transparent_30%)] px-2.5 py-0.5 text-xs font-medium text-foreground">
                      {row.rating}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
