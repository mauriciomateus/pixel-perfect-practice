import { supremaSemibold } from "@/fonts";
import CardImage from "./CardImage";
import Caret from "./Caret";

export default function CardSummary() {
  return (
    <div className="rounded-[20px] flex flex-col pt-2.5 pl-6">
      <h2 className={`${supremaSemibold.className} text-[20px]`}>Cards</h2>
      <div className="flex relative">
        <div className="flex mt-2 ml-2.75 relative pr-9.5 ">
          <div>
            <div className="absolute  top-[50%] -mt-3 -rotate-180 -translate-x-5.25">
              <Caret />
            </div>
            <CardImage />
            <div className="absolute  top-[50%] -mt-3 right-4">
              <Caret />
            </div>
          </div>
          <span className="h-full w-[1px]  py-1 flex absolute -right-px">
            <span className=" bg-[#E8E8E8] flex w-full "></span>
          </span>
        </div>
        <div className="text-right bg-gray-900 flex-auto">amounts</div>
      </div>
    </div>
  );
}
