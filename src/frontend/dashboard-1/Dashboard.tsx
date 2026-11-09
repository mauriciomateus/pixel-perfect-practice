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
    // Full-width wrapper holds the decorative cloud and the main box as
    // siblings, so the box (z-10) paints over the cloud. A child of the box
    // could never sit behind it, because the box creates its own stacking
    // context. Spanning the full width lets the cloud be offset from the
    // viewport edge; overflow-x-clip stops it causing horizontal scroll.
    <div
      className={clsx(
        "z-10 relative w-full overflow-x-clip desktop:pt-[77.5px] desktop:pb-[77.5px]",
        className,
      )}
      style={style}
    >
      <svg
        width="484"
        height="317"
        viewBox="0 0 484 317"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        // Fixed to the viewport so it stays put while the page scrolls
        className="hidden desktop:block fixed -top-[81px] -right-[165px] pointer-events-none"
      >
        <path d="M370.127 119.273C371.501 112.703 372.224 105.894 372.224 98.9156C372.224 44.286 327.938 0 273.308 0C227.369 0 188.745 31.3162 177.618 73.7652C169.352 88.5941 144.608 118.252 111.758 118.252H98.9156C73.0887 118.252 49.5736 128.15 31.9569 144.36C12.3105 162.438 0 188.365 0 217.168C0 271.797 44.286 316.083 98.9156 316.083H384.393C439.023 316.083 483.309 271.797 483.309 217.168C483.309 162.538 439.023 118.252 384.393 118.252C379.548 118.252 374.785 118.6 370.127 119.273Z" fill="#E8E8E8"/>
      </svg>

      <div
        className={`z-10 relative bg-white text-white w-full desktop:w-[1477px] mx-auto desktop:rounded-[59px]
          flex flex-col
          desktop:grid
          shadow-lg
          pb-[14px]
          desktop:grid-cols-[252px_1fr]`}
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
    </div>
  );
}
