import type { ReactNode } from "react";
import { CheckIcon } from "@/components/icons";

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
    >
      Skip to content
    </a>
  );
}

/** Blue dot + uppercase caption used above every section heading. */
export function Caption({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p className={`caption ${tone === "light" ? "text-white/85" : "text-body"}`}>
      <span
        aria-hidden="true"
        className={`caption-dot ${tone === "light" ? "!bg-white" : ""}`}
      />
      {children}
    </p>
  );
}

/** Hairline rule that sits under section headings. */
export function Rule({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span
      aria-hidden="true"
      className={`rule ${tone === "light" ? "bg-mist/50" : "bg-body/30"}`}
    />
  );
}

export function Checklist({
  items,
  tone = "dark",
  columns = 1,
}: {
  items: readonly string[] | string[];
  tone?: "dark" | "light";
  columns?: 1 | 2;
}) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              tone === "light" ? "bg-white/15 text-white" : "bg-primary/10 text-primary"
            }`}
          >
            <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.2} />
          </span>
          <span className={`t-small ${tone === "light" ? "text-white/85" : "text-body"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
