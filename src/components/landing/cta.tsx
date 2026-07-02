import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { EXTENSION_RELEASES_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Cta() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--gold),transparent_60%),transparent_55%)]" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready for registration season?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Install the extension now. Sign in later when you want your
              schedule saved to the cloud.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
                variant="secondary"
                className="h-11 px-6"
              >
                Get the extension
              </Button>
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 border-primary-foreground/25 bg-transparent px-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                )}
              >
                Sign in to dashboard
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
