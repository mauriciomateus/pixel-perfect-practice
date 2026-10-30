import { ReactNode } from "react";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

export default function TransationHistory() {
  return (
    <SectionContainer className="mt-[39px] pl-6 pr-[21px] pb-[26px]">
      <div>
        <SectionTitle>Transaction history </SectionTitle>
        <TableDemo />
      </div>
    </SectionContainer>
  );
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { latoBold, supremaRegular } from "@/fonts";
import { cn } from "cn";

const invoices = [
  {
    invoice: {
      icon: (
        <>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.49884 10.999C4.77499 10.999 4.99886 10.7751 4.99886 10.4989C4.99886 10.2228 4.77499 9.99892 4.49884 9.99892C4.22268 9.99892 3.99881 10.2228 3.99881 10.4989C3.99881 10.7751 4.22268 10.999 4.49884 10.999Z"
              stroke="#404040"
              strokeWidth="0.996054"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.99875 10.999C10.2749 10.999 10.4988 10.7751 10.4988 10.4989C10.4988 10.2228 10.2749 9.99892 9.99875 9.99892C9.72259 9.99892 9.49872 10.2228 9.49872 10.4989C9.49872 10.7751 9.72259 10.999 9.99875 10.999Z"
              stroke="#404040"
              strokeWidth="0.996054"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0.498016 0.498032H2.49812L3.8382 7.19339C3.88392 7.4236 4.00916 7.6304 4.19199 7.77757C4.37482 7.92475 4.60359 8.00293 4.83825 7.99844H9.69852C9.93318 8.00293 10.1619 7.92475 10.3448 7.77757C10.5276 7.6304 10.6528 7.4236 10.6986 7.19339L11.4986 2.99817H2.99815"
              stroke="#404040"
              strokeWidth="0.996054"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      ),
      text: "Tesco Market",
    },
    paymentStatus: "Shopping",
    totalAmount: "$75.67",
    paymentMethod: "13 Dec 2020",
  },
  {
    invoice: {
      icon: (
        <>
          <svg
            width="12"
            height="10"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.0005 0.500031H0.500031V7.00044H8.0005V0.500031Z"
              stroke="black"
              strokeWidth="1.00006"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.00052 3.00052H10.0006L11.5007 4.50061V7.00077H8.00052V3.00052Z"
              stroke="black"
              strokeWidth="1.00006"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.75011 9.50019C3.44051 9.50019 4.00019 8.94051 4.00019 8.25011C4.00019 7.55971 3.44051 7.00003 2.75011 7.00003C2.05971 7.00003 1.50003 7.55971 1.50003 8.25011C1.50003 8.94051 2.05971 9.50019 2.75011 9.50019Z"
              stroke="black"
              strokeWidth="1.00006"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.2506 9.50019C9.941 9.50019 10.5007 8.94051 10.5007 8.25011C10.5007 7.55971 9.941 7.00003 9.2506 7.00003C8.5602 7.00003 8.00052 7.55971 8.00052 8.25011C8.00052 8.94051 8.5602 9.50019 9.2506 9.50019Z"
              stroke="black"
              strokeWidth="1.00006"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      ),
      text: "ElectroMen Market",
    },
    paymentStatus: "Shopping",
    totalAmount: "$250.00",
    paymentMethod: "13 Dec 2020",
  },
  {
    invoice: {
      icon: (
        <>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.77204 5.13178C9.28488 4.61894 9.57299 3.92338 9.57299 3.19811C9.57299 2.47285 9.28488 1.77729 8.77204 1.26445C8.2592 0.751611 7.56364 0.463501 6.83838 0.463501C6.11311 0.463501 5.41755 0.751611 4.90471 1.26445L1.82999 4.33918V8.21106H5.70187L8.77204 5.13178Z"
              stroke="black"
              strokeWidth="0.926981"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.84072 3.20053L0.463501 9.57775"
              stroke="black"
              strokeWidth="0.926981"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.52367 6.38931H3.65179"
              stroke="black"
              strokeWidth="0.926981"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      ),
      text: "Fiorgio Restaurant",
    },
    paymentStatus: "Food",
    totalAmount: "$19.50",
    paymentMethod: "07 Dec 2020",
  },
  {
    invoice: {
      icon: (
        <>
          <svg
            width="9"
            height="10"
            viewBox="0 0 9 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.27297 9.24635V8.27306C8.27297 7.75679 8.06788 7.26167 7.70283 6.89662C7.33777 6.53156 6.84265 6.32648 6.32638 6.32648H2.43322C1.91695 6.32648 1.42183 6.53156 1.05677 6.89662C0.691719 7.26167 0.486633 7.75679 0.486633 8.27306V9.24635"
              stroke="black"
              strokeWidth="0.973292"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.37951 4.3798C5.45457 4.3798 6.32609 3.50829 6.32609 2.43322C6.32609 1.35815 5.45457 0.486633 4.37951 0.486633C3.30444 0.486633 2.43292 1.35815 2.43292 2.43322C2.43292 3.50829 3.30444 4.3798 4.37951 4.3798Z"
              stroke="black"
              strokeWidth="0.973292"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      ),
      text: "John Matthew Kayne",
    },
    paymentStatus: "Sport",
    totalAmount: "$350",
    paymentMethod: "06 Dec 2020",
  },
  {
    invoice: {
      icon: (
        <>
          <svg
            width="9"
            height="10"
            viewBox="0 0 9 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.27297 9.24635V8.27306C8.27297 7.75679 8.06788 7.26167 7.70283 6.89662C7.33777 6.53156 6.84265 6.32648 6.32638 6.32648H2.43322C1.91695 6.32648 1.42183 6.53156 1.05677 6.89662C0.691719 7.26167 0.486633 7.75679 0.486633 8.27306V9.24635"
              stroke="black"
              strokeWidth="0.973292"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.37951 4.3798C5.45457 4.3798 6.32609 3.50829 6.32609 2.43322C6.32609 1.35815 5.45457 0.486633 4.37951 0.486633C3.30444 0.486633 2.43292 1.35815 2.43292 2.43322C2.43292 3.50829 3.30444 4.3798 4.37951 4.3798Z"
              stroke="black"
              strokeWidth="0.973292"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      ),
      text: "Ann Marlin",
    },
    paymentStatus: "Shopping",
    totalAmount: "$430",
    paymentMethod: "31 Nov 2020",
  },
];

export function TableDemo() {
  return (
    <Table className="">
      <TableHeader>
        <TableRow className="border-transparent">
          <TableDemoHeader className="w-[217px] text-light-gray">
            Receiver
          </TableDemoHeader>
          <TableDemoHeader className="w-[122px] hidden sm:table-cell">
            Type
          </TableDemoHeader>
          <TableDemoHeader>Date</TableDemoHeader>
          <TableDemoHeader className="text-right pr-[7px]">
            Amount
          </TableDemoHeader>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => (
          <TableRow key={index}>
            <TableCell
              className={` text-dark-gray ${supremaRegular.className}  text-[14px] h-[42px] align-middle p-0`}
            >
              <ReceiverCellContent icon={invoice.invoice.icon} text={invoice.invoice.text}/>
            </TableCell>
            <TableCell
              className={`text-light-gray p-0 hidden sm:table-cell ${supremaRegular.className}  text-[14px]`}
            >
              {invoice.paymentStatus}
            </TableCell>
            <TableCell
              className={`text-light-gray p-0 ${supremaRegular.className}  text-[14px]`}
            >
              {invoice.paymentMethod}
            </TableCell>
            <TableCell
              className={`text-right ${latoBold.className} text-[14px] text-dark-gray`}
            >
              {invoice.totalAmount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
  );
}

function TableDemoHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <TableHead
      className={cn(
        `${supremaRegular.className} text-[14px] px-0 pt-[8px] text-light-gray`,
        className,
      )}
    >
      {children}
    </TableHead>
  );
}

function ReceiverCellContent({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) {
  return (
    <div
      className={`gap-[11px] flex items-center pl-0 ${supremaRegular.className}  text-[14px]`}
    >
      <div className="size-[17px] bg-light-gray rounded-[5px] flex justify-center items-center">
      {icon}
      </div>
      {text}
    </div>
  );
}
