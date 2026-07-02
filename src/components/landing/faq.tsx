const faqs = [
  {
    question: "Is this official from Purdue?",
    answer:
      "No. This is an independent student-built tool. It reads public data and works alongside the official UniTime portal — it does not replace it.",
  },
  {
    question: "Do I need an account to use the extension?",
    answer:
      "No. The Chrome extension works without signing in. Creating an account unlocks schedule sync and the web dashboard.",
  },
  {
    question: "Where does the GPA data come from?",
    answer:
      "Average course GPA comes from the open BoilerGrades dataset (Purdue public grade distributions), bundled with the extension.",
  },
  {
    question: "Is my data private?",
    answer:
      "Personal marks and settings stay local until you choose to sign in and sync. We only store what you explicitly save to your account.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-b border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <dl className="mx-auto mt-16 max-w-3xl divide-y divide-border">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-6">
              <dt className="text-base font-medium">{faq.question}</dt>
              <dd className="mt-2 leading-relaxed text-muted-foreground">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
