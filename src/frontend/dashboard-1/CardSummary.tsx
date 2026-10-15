import {
  latoBold,
  latoSemibold,
  supremaRegular,
  supremaSemibold,
} from "@/fonts";
import CardImage from "./CardImage";
import Caret from "./Caret";
import { Switch } from "@/components/ui/switch";
import { FinancialAppSwitch } from "@/components/ui/financial-app-switch";

export default function CardSummary() {
  return (
    <div className="rounded-[24px] flex flex-col pt-2.5 pl-6 shadow-2xl pb-[32px]">
      <h2 className={`${supremaSemibold.className} text-[20px] text-dark-gray`}>Cards</h2>
      <div className="flex relative">
        <div className="flex flex-col mt-2 ml-2.75 relative pr-9.5 ">
          <div className="relative">
            <CardImage />
            <div className="absolute  top-[50%] -mt-3 right-4">
              <Caret />
            </div>
            <div>
              <div className="absolute  top-[50%] -mt-3 -rotate-180 -translate-x-5.25">
                <Caret />
              </div>
              <span className="h-full w-[1px]  py-1 flex absolute -right-px">
                <span className=" bg-[#E8E8E8] flex w-full "></span>
              </span>
            </div>
          </div>

          <div className="mt-[31px] flex flex-col">
            <ProgressBar percentage={21.5} />
            <div className="flex justify-between mt-2.5">
              <p
                className={`text-light-gray text-[14px] ${supremaRegular.className}`}
              >
                Weekly payment limit
              </p>

              <p
                className={`text-dark-gray ${latoSemibold.className} text-[14px]`}
              >
                $350.60 / $4000
              </p>
            </div>
          </div>
        </div>
        <div className="text-right flex flex-col pt-3.5 pr-7.25 flex-auto">
          <span className={`${latoSemibold.className} flex flex-col items-end text-[#197bbd]`}>
            <span className="flex flex-nowrap items-end-safe leading-none">
              <span className="text-[18px]  -translate-x-1.75 -translate-y-[2px]">
                $
              </span>
              <span className="text-[32px] ">2850.75</span>
            </span>
            <span className={`${supremaRegular.className} text-[14px] text-light-gray`}>
              Current balance
            </span>
          </span>

          <span className="flex flex-col mt-[27px] items-end leading-none">
            <span
              className={`${latoSemibold.className} text-[18px] text-[#439a86] flex flex-nowrap gap-2`}
            >
              <span className="flex">$</span>
              <span>1500.50</span>
            </span>
            <span className={`${supremaRegular.className} text-[14px] mt-2`}>
              Income
            </span>
          </span>

          <span className="flex flex-col mt-[30px] items-end leading-none">
            <span
              className={`${latoSemibold.className} text-[18px] text-[#bb4430] flex flex-nowrap gap-2`}
            >
              <span className="flex">$</span>
              <span>350.60</span>
            </span>
            <span className={`${supremaRegular.className} text-[14px] mt-2`}>
              Outcome
            </span>
          </span>

          <div className="flex flex-col items-end mt-[29px]">
            <FinancialAppSwitch />
            <span className={`${supremaRegular.className} text-[14px] mt-2.5`}>
              Deactivate card
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <span className="flex h-2.5 bg-gray-300 rounded-lg">
      <span
        className="rounded-lg bg-indigo-700 h-full"
        style={{ width: `${percentage}%` }}
      ></span>
    </span>
  );
}
