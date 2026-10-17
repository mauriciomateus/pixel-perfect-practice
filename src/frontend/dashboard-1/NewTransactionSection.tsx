import {
  latoBold,
  latoLight,
  quicksand as quicksandFont,
  supremaRegular,
} from "@/fonts";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ChevronRight, EyeOffIcon } from "lucide-react";
import InputGroupInputFinancialDashboard from "./InputGroupInputFinancialDashboard";
import InputGroupFinancialDashboard from "./InputGroupFinancialDashboard";
import { Button } from "@/components/ui/button";
import PlusIcon from "./PlusIcon";

type User = { name: string; photo: string };

export default function NewTransactionSection() {
  const users = ["ann", "monica", "john", "mike", "mia"];

  return (
    <SectionContainer className="pl-[12px] mt-[12px]">
      <SectionTitle className="leading-none">New transaction</SectionTitle>
      <ul className="flex items-center gap-[11px] mt-[16px]">
        {users.map((user) => {
          const userName = user.charAt(0).toUpperCase() + user.slice(1);
          return (
            <li key={user}>
              <div className="flex flex-col w-[43px] items-center">
                <img
                  src={`/img/financial-dashboard/users/${user}.jpg`}
                  alt={userName}
                />
                <span
                  className={`text-dark-gray ${supremaRegular.className} text-[12px] mt-px`}
                >
                  {userName}
                </span>
              </div>
            </li>
          );
        })}
        <li className="h-full -translate-x-[6px]">
          <div className="flex flex-col items-center outline-1 outline-emerald-500 h-full">
            <div className="h-[42px] flex flex-col justify-center items-center">
              <PlusIcon />
            </div>
            <span
              className={`text-dark-gray ${supremaRegular.className} text-[12px] mt-auto`}
            >
              Add New
            </span>
          </div>
        </li>
      </ul>
      <div className="flex items-stretch gap-[9px] mt-[14px] ">
        <Field className="max-w-sm w-auto -mx-px">
          <InputGroupFinancialDashboard className=" w-[175px]! h-[37px] rounded-tl-[7px] rounded-bl-[7px]">
            <InputGroupInputFinancialDashboard
              id="inline-end-input"
              type="text"
              placeholder="0"
            />
            <InputGroupAddon align="inline-end">
              <span
                className={`${latoLight.className} text-[20px] text-light-gray`}
              >
                $
              </span>
            </InputGroupAddon>
          </InputGroupFinancialDashboard>
        </Field>
        <Button
          className={`bg-[#FFC145] hover:bg-[#FFC145] ${quicksandFont.className} flex-auto text-[11px] text-dark-gray h-full max-w-[134px] rounded-[15px]`}
        >
          <div className="flex items-center pl-[7px]">
            <span>Send the transfer</span>
            <ChevronRight className="size-[16px]" />
          </div>
        </Button>
      </div>
    </SectionContainer>
  );
}


