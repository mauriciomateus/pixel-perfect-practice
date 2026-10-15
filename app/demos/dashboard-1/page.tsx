"use client";
import { supremaRegular, supremaSemibold } from "@/fonts";
import AppLogo from "@/src/frontend/dashboard-1/AppLogo";
import CardSummary from "@/src/frontend/dashboard-1/CardSummary";
import Header from "@/src/frontend/dashboard-1/Header";
import Sidebar from "@/src/frontend/dashboard-1/Sidebar";
import clsx from "clsx";
import { Lato } from "next/font/google";
import { useState } from "react";

export default function Dashboard1() {
  const [showHtml, setShowHtml] = useState(true);
  const [showMockup, setShowMockup] = useState(true);

  return (
    <div>
      <div
        className={`flex justify-center w-full min-h-screen absolute transition-opacity
          ${clsx({
            "opacity-0": !showMockup,
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
        className={`z-10 relative flex bg-gray-800 text-white w-[1477px]  mx-auto rounded-[59px]
        ${clsx({
          "opacity-0": !showHtml,
          "opacity-50": showHtml,
        })}
        `}
      >
        {/* Sidebar container */}
        <Sidebar />
        <div className="pt-10.75 px-11.75 flex-auto">
          <Header />
          <div className="flex mt-[44px] ">
            <div className="flex-[596px] grow-0">
              <CardSummary />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-1 right-1">
        <div className="flex flex-col">
          <ul>
            <li>
              <label htmlFor="mockup" className="flex gap-3">
                <input
                  id="mockup"
                  type="checkbox"
                  checked={showMockup}
                  onChange={(e) => setShowMockup(!showMockup)}
                />
                Mockup
              </label>
            </li>

            <li>
              <label htmlFor="html" className="flex gap-3">
                <input
                  id="html"
                  type="checkbox"
                  checked={showHtml}
                  onChange={(e) => setShowHtml(!showHtml)}
                />
                Html
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
