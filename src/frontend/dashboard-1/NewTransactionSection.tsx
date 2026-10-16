import { latoBold, latoLight, quicksand as quicksandFont, supremaRegular } from "@/fonts";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { EyeOffIcon } from "lucide-react";
import InputGroupInputFinancialDashboard from "./InputGroupInputFinancialDashboard";
import InputGroupFinancialDashboard from "./InputGroupFinancialDashboard";
import { Button } from "@/components/ui/button";

type User = { name: string; photo: string };

export default function NewTransactionSection() {
  const users = ["ann", "monica", "john", "mike", "mia"];

  return (
    <SectionContainer className="pl-[12px]">
      <SectionTitle className="leading-none">New transaction</SectionTitle>
      <ul className="flex gap-[11px] mt-[16px]">
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
                  className={`text-dark-gray ${supremaRegular.className} text-[12px]`}
                >
                  {userName}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex items-stretch gap-[8px] mt-[15px]">
        <Field className="max-w-sm">
          <InputGroupFinancialDashboard className=" w-[175px]! h-[37px] rounded-[10px]">
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
        <Button className={`bg-[#FFC145] ${quicksandFont.className} flex-auto text-[11px] text-dark-gray h-full`}>
          Send the transfer
           </Button>
      </div>
    </SectionContainer>
  );
}
