import type { Metadata } from "next";

// The diff page is a client component and can't export metadata itself,
// so its title lives in this route layout.
export const metadata: Metadata = {
  title: "Financial Dashboard – Compare with design",
};

export default function Dashboard1DiffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
