import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Pixel Perfect Practice",
    // Child pages set their own title, e.g. "Financial Dashboard | Pixel Perfect Practice"
    template: "%s | Pixel Perfect Practice",
  },
  description:
    "Figma designs rebuilt as responsive Next.js and Tailwind pages, with built-in tools to compare the result against the original design pixel by pixel.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
