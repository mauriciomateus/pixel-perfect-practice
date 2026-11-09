import Dashboard from "@/src/frontend/dashboard-1/Dashboard";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financial Dashboard",
};

// Clean view of the implementation, without the mockup overlay or comparison tools.
export default function Dashboard1Implementation() {
  return (
    <>
      <Dashboard />

      <nav className="fixed bottom-2 right-2 z-20 flex items-center gap-1 rounded-lg border border-neutral-200 bg-white/95 p-1 text-xs font-medium text-neutral-700 shadow-lg backdrop-blur-sm">
        <Link
          href="/"
          className="rounded-md px-2.5 py-1.5 transition hover:bg-neutral-100 hover:text-neutral-900"
        >
          ← All projects
        </Link>
        <Link
          href="/diff/dashboard-1"
          className="hidden desktop:block rounded-md px-2.5 py-1.5 transition hover:bg-neutral-100 hover:text-neutral-900"
        >
          Compare with design
        </Link>
        <a
          href="https://www.figma.com/community/file/894542039433511203/financial-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md px-2.5 py-1.5 transition hover:bg-neutral-100 hover:text-neutral-900"
        >
          Figma design ↗
        </a>
      </nav>
    </>
  );
}
