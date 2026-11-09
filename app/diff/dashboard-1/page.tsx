"use client";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { supremaRegular, supremaSemibold } from "@/fonts";
import AppLogo from "@/src/frontend/dashboard-1/AppLogo";
import Dashboard from "@/src/frontend/dashboard-1/Dashboard";
import clsx from "clsx";
import { Lato, Ruslan_Display } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

// Explicit colors so the comparison switches stay legible on the light panel
// in every state: white thumb, mid-gray track when off, near-black track when on.
const comparisonSwitchClass =
  "data-unchecked:bg-neutral-400 data-checked:bg-neutral-900 [&_[data-slot=switch-thumb]]:bg-white [&_[data-slot=switch-thumb]]:shadow-sm";

export default function Dashboard1() {
  const [showHtml, setShowHtml] = useState(true);
  const [showMockup, setShowMockup] = useState(true);
  const [htmlOpacity, setHtmlOpacity] = useState(0.5);
  const [differenceMode, setDifferenceMode] = useState(false);

  return (
    <div>
      <div
        className={`hidden justify-center w-full min-h-screen absolute transition-opacity
          ${clsx({
            "desktop:flex": showMockup,
          })}
            `}
      >
        <div
          className="w-[1477px] min-h-screen bg-no-repeat"
          style={{
            backgroundImage:
              "url(/img/financial-dashboard/financial-dashboard.png)",
          }}
        ></div>
      </div>

      {/* Html container */}
      <Dashboard
        className={clsx("desktop:opacity-(--html-opacity)", {
          "desktop:mix-blend-difference": differenceMode,
        })}
        style={
          {
            // Difference mode needs full opacity so matching pixels turn black.
            // Only applied from the desktop breakpoint, where the comparison tools live.
            "--html-opacity": showHtml ? (differenceMode ? 1 : htmlOpacity) : 0,
          } as React.CSSProperties
        }
      />

      <div className="desktop:hidden fixed bottom-2 inset-x-2 z-20 flex items-center gap-3 rounded-lg bg-dark-gray/90 px-3 py-2 text-xs text-white">
        <Link
          href="/"
          className="shrink-0 rounded-md bg-white px-2.5 py-1.5 font-medium text-neutral-900"
        >
          ← All projects
        </Link>
        <p>
          Widen your window to at least 1477px to use the pixel perfect
          comparison tools.
        </p>
      </div>

      {/* Opaque light panel keeps the dark shadcn controls readable over any page content */}
      <div className="hidden desktop:block fixed bottom-1 right-1 w-60 z-20 rounded-lg border border-neutral-200 bg-white/95 p-3 text-neutral-900 shadow-lg backdrop-blur-sm">
        <div className="flex flex-col">
          <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-2 text-sm font-medium text-neutral-600">
            <Link href="/" className="transition hover:text-neutral-900">
              ← All projects
            </Link>
            <Link
              href="/implementation/dashboard-1"
              className="transition hover:text-neutral-900"
            >
              Hide tools
            </Link>
          </div>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center space-x-2">
                <Switch
                  id="show-mockup"
                  className={comparisonSwitchClass}
                  checked={showMockup}
                  onCheckedChange={setShowMockup}
                />
                <Label htmlFor="show-mockup">Show Mockup</Label>
              </div>
            </li>

            <li>
              <div className="flex items-center space-x-2">
                <Switch
                  id="show-html"
                  className={comparisonSwitchClass}
                  checked={showHtml}
                  onCheckedChange={setShowHtml}
                />
                <Label htmlFor="show-html">Show Html</Label>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <Switch
                  id="difference-mode"
                  className={comparisonSwitchClass}
                  checked={differenceMode}
                  onCheckedChange={setDifferenceMode}
                />
                <Label htmlFor="difference-mode">Difference mode</Label>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2">
                <Slider
                  id="html-opacity"
                  max={100}
                  step={1}
                  value={[Math.round(htmlOpacity * 100)]}
                  disabled={differenceMode}
                  className="mx-auto w-full max-w-xs"
                  onValueChange={(value) => {
                    const percent = Array.isArray(value) ? value[0] : value;
                    setHtmlOpacity(percent / 100);
                  }}
                />
                <Label htmlFor="html-opacity">
                  Html opacity: {Math.round(htmlOpacity * 100)}
                </Label>
              </div>
            </li>
          </ul>
          <a
            href="https://www.figma.com/community/file/894542039433511203/financial-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 border-t border-neutral-200 pt-2 text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
          >
            Open Figma design ↗
          </a>
        </div>
      </div>
    </div>
  );
}
