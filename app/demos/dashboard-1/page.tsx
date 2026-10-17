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
import { useState } from "react";

export default function Dashboard1() {
  const [showHtml, setShowHtml] = useState(true);
  const [showMockup, setShowMockup] = useState(true);
  const [htmlOpacity, setHtmlOpacity] = useState(0.5);
  const [differenceMode, setDifferenceMode] = useState(false);

  return (
    <div>
      <div
        className={`flex justify-center w-full min-h-screen absolute transition-opacity
          ${clsx({
            "hidden": !showMockup,
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
        className={`z-10 relative  bg-white text-white w-[1477px]  mx-auto rounded-[59px]
          grid
          grid-cols-[252px_1fr]
        ${clsx({
          "mix-blend-difference": differenceMode,
        })}
        `}
        style={{
          // Difference mode needs full opacity so matching pixels turn black
          opacity: showHtml ? (differenceMode ? 1 : htmlOpacity) : 0,
        }}
      >
        <Sidebar />
        {/* <div className="bg-emerald-900 flex-auto">content palceholder</div> */}
        <div className="pt-10.75 px-11.75 flex-auto">
          <Header />
          <div className="flex mt-[44px] gap-[21px]">
            <div className="flex-[596px] grow-0">
              <CardSummary />
              <TransationHistory />
            </div>
            <div className="flex flex-col flex-auto">
              <div className="pl-[12px]">
                <GoalsSection />
                <StatsSection />
              </div>

              <div className="flex mt-[44px] gap-[21px]">
                <NewTransactionSection />
                <LoanSection />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-1 right-1 w-56 z-20">
        <div className="flex flex-col">
          <ul>
            <li>
              <div className="flex items-center space-x-2">
                <Switch
                  id="show-mockup"
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
