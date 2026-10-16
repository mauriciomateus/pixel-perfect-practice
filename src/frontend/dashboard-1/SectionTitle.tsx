import { supremaSemibold } from "@/fonts";
import { cn } from "cn";

export default function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        `${supremaSemibold.className} text-[20px] text-dark-gray`,
        className,
      )}
    >
      {children}
    </h2>
  );
}
