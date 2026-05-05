import { Button } from "@/components/ui/button";

export default function SGPACalculator() {
  return (
    <div className="grid place-items-center py-12">
      <div className="rounded-3xl border border-border/50 bg-card p-10 text-center max-w-xl w-full">
        <h2 className="text-3xl font-semibold text-white">SGPA Calculator</h2>
        <p className="mt-4 text-sm text-muted-foreground">
          The SGPA calculator has moved to our dedicated site. Click below to open it.
        </p>
        <Button asChild className="mt-8">
          <a href="https://calculator.teamdino.in/" target="_blank" rel="noreferrer">
            Open SGPA Calculator
          </a>
        </Button>
      </div>
    </div>
  );
}
