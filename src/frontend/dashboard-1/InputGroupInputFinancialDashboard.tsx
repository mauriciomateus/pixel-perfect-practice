import { Input } from "@/components/ui/input";
import { cn } from "cn";

export default function InputGroupInputFinancialDashboard({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "flex-1 rounded-[7px] bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent border-none outline-none text-dark-gray placeholder:text-[24px]",
        className
      )}
      {...props}
    />
  )
}