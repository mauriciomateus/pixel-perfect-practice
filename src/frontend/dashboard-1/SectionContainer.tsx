import { cn } from "cn";
import { ReactNode } from "react";

export default function SectionContainer({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${cn('rounded-[24px] flex flex-col pt-2.5 pl-6 shadow-2xl pb-[32px]', className)}`}>
      {children}
    </div>
  );
}
