import {
  Calendar,
  Cloud,
  GraduationCap,
  LayoutDashboard,
  Star,
  Zap,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Star,
    title: "Ratings on UniTime",
    description:
      "RMP scores and BoilerGrades GPA appear inline next to every professor while you browse sections.",
  },
  {
    icon: Zap,
    title: "Best section at a glance",
    description:
      "When a course has multiple sections, the highest-rated professor is highlighted automatically.",
  },
  {
    icon: Cloud,
    title: "Sync across devices",
    description:
      "Save your schedule and settings to the cloud so your plan follows you from laptop to laptop.",
  },
  {
    icon: LayoutDashboard,
    title: "Schedule dashboard",
    description:
      "View today's classes, past semesters, and quick actions from one clean web dashboard.",
  },
  {
    icon: Calendar,
    title: "Calendar export",
    description:
      "One-click Google, Apple, or Outlook calendar links — detected automatically from UniTime.",
  },
  {
    icon: GraduationCap,
    title: "Built for Purdue",
    description:
      "Designed around the real UniTime portal and data sources Purdue students already trust.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to register smarter
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The extension handles scheduling on UniTime. The dashboard keeps
            your data organized long after registration week ends.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/80 shadow-sm">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-[color-mix(in_oklch,var(--gold-muted),transparent_20%)] text-foreground">
                  <feature.icon className="size-5" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
