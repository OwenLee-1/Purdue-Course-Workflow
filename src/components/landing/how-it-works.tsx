const steps = [
  {
    step: "01",
    title: "Install the extension",
    description:
      "Add BoilerClassPlan to Chrome and open the Purdue UniTime scheduling portal.",
  },
  {
    step: "02",
    title: "Build your schedule",
    description:
      "Compare professors with inline ratings and GPA data while you pick sections.",
  },
  {
    step: "03",
    title: "Sync to your dashboard",
    description:
      "Sign in on the web to save your schedule, export calendars, and access it anywhere.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border/60 bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three steps from registration stress to a schedule you can trust.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="relative text-center md:text-left">
              <span className="text-5xl font-bold tracking-tight text-[color-mix(in_oklch,var(--gold),transparent_55%)]">
                {item.step}
              </span>
              <h3 className="mt-4 text-xl font-medium">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
