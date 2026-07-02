import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
        <p className="mt-2 text-muted-foreground">
          Google authentication arrives in Milestone 4. For now, this page is a
          placeholder.
        </p>
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline" }), "mt-8")}
        >
          Back to {SITE_NAME}
        </Link>
        <Button disabled className="mt-4 w-full" size="lg">
          Continue with Google
        </Button>
      </div>
    </div>
  );
}
