"use client";
import CardSummary from "@/src/frontend/dashboard-1/CardSummary";
import GoalsSection from "@/src/frontend/dashboard-1/GoalsSection";
import Header from "@/src/frontend/dashboard-1/Header";
import LoanSection from "@/src/frontend/dashboard-1/LoanSection";
import NewTransactionSection from "@/src/frontend/dashboard-1/NewTransactionSection";
import Sidebar from "@/src/frontend/dashboard-1/Sidebar";
import StatsSection from "@/src/frontend/dashboard-1/StatsSection";
import TransationHistory from "@/src/frontend/dashboard-1/TransactionHistory";
import clsx from "clsx";

// Shared by the clean implementation page and the diff page, so both always
// render the same markup. The diff page passes extra classes and styles for
// its opacity and difference-mode overlay.
export default function Dashboard({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={clsx(
        `z-10 relative bg-white text-white w-full desktop:w-[1477px] mx-auto desktop:rounded-[59px]
          flex flex-col
          desktop:grid
          shadow-lg
          pb-[14px]
          desktop:grid-cols-[252px_1fr]`,
        className,
      )}
      style={style}
    >
      <Sidebar />
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
  );
}
