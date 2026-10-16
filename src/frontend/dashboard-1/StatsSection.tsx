import { ReactNode } from "react";
import SectionTitle from "./SectionTitle";
import ProgressBar from "./ProgressBar";
import { latoSemibold, supremaRegular } from "@/fonts";

type StatData = {
  label: string;
  percentage: number;
  icon: ReactNode;
  iconBg: string;
};

export default function StatsSection() {
  const stats: StatData[] = [
    {
      label: "Shopping",
      percentage: 52,
      icon: (
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.07324 16.9372C7.49237 16.9372 7.83214 16.5975 7.83214 16.1783C7.83214 15.7592 7.49237 15.4194 7.07324 15.4194C6.6541 15.4194 6.31433 15.7592 6.31433 16.1783C6.31433 16.5975 6.6541 16.9372 7.07324 16.9372Z"
            stroke="#F8964C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.4199 16.9372C15.839 16.9372 16.1788 16.5975 16.1788 16.1783C16.1788 15.7592 15.839 15.4194 15.4199 15.4194C15.0007 15.4194 14.661 15.7592 14.661 16.1783C14.661 16.5975 15.0007 16.9372 15.4199 16.9372Z"
            stroke="#F8964C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 1H4.03563L6.0695 11.1618C6.13889 11.5112 6.32897 11.825 6.60646 12.0484C6.88394 12.2718 7.23115 12.3904 7.58731 12.3836H14.9639C15.32 12.3904 15.6673 12.2718 15.9447 12.0484C16.2222 11.825 16.4123 11.5112 16.4817 11.1618L17.6959 4.79453H4.79453"
            stroke="#F8964C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      iconBg: '#FFEADA'
    },
    {
      label: "Electronics",
      percentage: 21,
      icon: (
        <svg
          width="22"
          height="19"
          viewBox="0 0 22 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5703 1H3C1.89543 1 1 1.89543 1 3V10.761C1 11.8655 1.89543 12.761 3 12.761H12.5703C13.6749 12.761 14.5703 11.8655 14.5703 10.761V3C14.5703 1.89543 13.6749 1 12.5703 1Z"
            stroke="#22A447"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round" />
          <path
            d="M14.5693 7.52442C14.5693 6.41985 15.4648 5.52441 16.5693 5.52441H17.3597C17.8901 5.52441 18.3988 5.73513 18.7739 6.1102L20.3164 7.65269C20.6914 8.02777 20.9022 8.53647 20.9022 9.06691V10.7619C20.9022 11.8665 20.0067 12.7619 18.9022 12.7619H16.5693C15.4648 12.7619 14.5693 11.8665 14.5693 10.7619V7.52442Z"
            stroke="#22A447"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round" />
          <path
            d="M5.07129 17.2832C6.32041 17.2832 7.33301 16.2706 7.33301 15.0215C7.33301 13.7724 6.32041 12.7598 5.07129 12.7598C3.82218 12.7598 2.80957 13.7724 2.80957 15.0215C2.80957 16.2706 3.82218 17.2832 5.07129 17.2832Z"
            stroke="#22A447"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round" />
          <path
            d="M16.8311 17.2832C18.0802 17.2832 19.0928 16.2706 19.0928 15.0215C19.0928 13.7724 18.0802 12.7598 16.8311 12.7598C15.5819 12.7598 14.5693 13.7724 14.5693 15.0215C14.5693 16.2706 15.5819 17.2832 16.8311 17.2832Z"
            stroke="#22A447"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      ),
      iconBg: "#FFEADA"
    },
    {
      label: "Travels",
      percentage: 74,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.225 10.594L6.716 16.104L4.846 15.327L4.679 15.496L7.059 17.083L8.647 19.463L8.815 19.295L8.039 17.425L13.548 11.917L17.876 18.169L18.086 17.961L15.199 10.265L19.599 5.867C19.7651 5.68969 19.8558 5.45474 19.8518 5.21182C19.8478 4.96889 19.7496 4.73702 19.5778 4.56523C19.406 4.39343 19.1741 4.29516 18.9312 4.2912C18.6883 4.28724 18.4533 4.37789 18.276 4.544L13.876 8.943L6.182 6.057L5.972 6.266L12.225 10.594ZM17.615 21.077L13.285 14.824L10.245 17.864L11.022 19.734L8.356 22.399L5.711 18.432L1.743 15.786L4.409 13.12L6.278 13.896L9.318 10.856L3.065 6.528L5.711 3.883L13.406 6.768L16.953 3.221C17.2124 2.95532 17.5219 2.74377 17.8637 2.59861C18.2055 2.45345 18.5726 2.37756 18.9439 2.37534C19.3152 2.37312 19.6833 2.44462 20.0268 2.58569C20.3702 2.72676 20.6823 2.93459 20.9448 3.19715C21.2074 3.4597 21.4152 3.77176 21.5563 4.11523C21.6974 4.4587 21.7689 4.82675 21.7667 5.19805C21.7644 5.56936 21.6885 5.93653 21.5434 6.27829C21.3982 6.62005 21.1867 6.9296 20.921 7.189L17.374 10.736L20.26 18.432L17.614 21.077H17.615Z"
            fill="#70A6E8"
          />
        </svg>
      ),
      iconBg: '#FFEADA'
    },
  ];
  return (
    <div className="pt-[46px]">
      <SectionTitle>Outcome Statistics</SectionTitle>
      <ul className="flex flex-col gap-[7px]">
        {stats.map((stat, index) => {
          return (
            <li key={index}>
              <Stat stat={stat} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Stat({ stat }: { stat: StatData }) {
  return (
    <div className="flex  mt-[16px]">
      <div className="size-[43px] rounded-[3px] flex justify-center items-center bg-background " style={{'--background':stat.iconBg}}>
        {stat.icon}
      </div>
      <div className="flex-auto pt-[4px] ml-[16px] ">
        <ProgressBar percentage={stat.percentage} />
        <p
          className={`${supremaRegular.className} text-[14px] mt-[7px] text-light-gray`}
        >
          {stat.label}
        </p>
      </div>
      <span className={`text-dark-gray ${latoSemibold.className} text-[24px] leading-none pr-[17px] ml-[17px] -mt-[2px]`}>{stat.percentage}%</span>
    </div>
  );
}
