"use client";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { supremaRegular, supremaSemibold } from "@/fonts";
import AppLogo from "@/src/frontend/dashboard-1/AppLogo";
import CardSummary from "@/src/frontend/dashboard-1/CardSummary";
import GoalsSection from "@/src/frontend/dashboard-1/GoalsSection";
import Header from "@/src/frontend/dashboard-1/Header";
import LoanSection from "@/src/frontend/dashboard-1/LoanSection";
import NewTransactionSection from "@/src/frontend/dashboard-1/NewTransactionSection";
import Sidebar from "@/src/frontend/dashboard-1/Sidebar";
import StatsSection from "@/src/frontend/dashboard-1/StatsSection";
import TransationHistory from "@/src/frontend/dashboard-1/TransactionHistory";
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
      <div
        className={`z-10 relative  bg-white text-white w-full desktop:w-[1477px]  mx-auto desktop:rounded-[59px]
          flex flex-col
          desktop:grid
          desktop:grid-cols-[252px_1fr]
          desktop:opacity-(--html-opacity)
        ${clsx({
          "desktop:mix-blend-difference": differenceMode,
        })}
        `}
        style={
          {
            // Difference mode needs full opacity so matching pixels turn black.
            // Only applied from the desktop breakpoint, where the comparison tools live.
            "--html-opacity": showHtml ? (differenceMode ? 1 : htmlOpacity) : 0,
          } as React.CSSProperties
        }
      >
        <Sidebar />
        {/* <div className="bg-emerald-900 flex-auto">content palceholder</div> */}
        <div className="px-4 pt-6 pb-10 md:px-8 desktop:pt-10.75 desktop:px-11.75 desktop:pb-0 flex-auto min-w-0">
          <Header />
          <div className="flex flex-col xl:flex-row mt-8 gap-8 desktop:mt-[44px] xl:gap-[21px]">
            <div className="min-w-0 xl:flex-[596px] xl:grow-0">
              <CardSummary />
              <TransationHistory />
            </div>
            <div className="flex flex-col flex-auto min-w-0">
              <div className="xl:pl-[12px]">
                <GoalsSection />
                <StatsSection />
              </div>

              <div className="flex flex-col sm:flex-row mt-8 desktop:mt-[44px] gap-6 sm:gap-[21px]">
                <NewTransactionSection />
                <LoanSection />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="desktop:hidden fixed bottom-2 inset-x-2 z-20 rounded-lg bg-dark-gray/90 px-3 py-2 text-center text-xs text-white">
        Widen your window to at least 1477px to use the pixel perfect
        comparison tools.
      </p>

      {/* Opaque light panel keeps the dark shadcn controls readable over any page content */}
      <div className="hidden desktop:block fixed bottom-1 right-1 w-60 z-20 rounded-lg border border-neutral-200 bg-white/95 p-3 text-neutral-900 shadow-lg backdrop-blur-sm">
        <div className="flex flex-col">
          <Link
            href="/"
            className="mb-3 inline-flex items-center gap-1 border-b border-neutral-200 pb-2 text-sm font-medium text-neutral-600 transition hover:text-neutral-900"
          >
            ← All projects
          </Link>
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
        </div>
      </div>
    </div>
  );
}
