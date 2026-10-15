import { supremaSemibold } from "@/fonts";

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className={`${supremaSemibold.className} text-[20px] text-dark-gray`}>
      {children}
    </h2>
  );
}
