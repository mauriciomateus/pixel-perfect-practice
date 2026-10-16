export default function ProgressBar({ percentage, barFillColor }: { percentage: number, barFillColor?: string }) {
  const fillColor = barFillColor||'orange';
  return (
    <span className="flex h-2.5 bg-gray-300 rounded-lg w-full ">
      <span
        className="rounded-lg bg-background h-full"
        style={{ width: `${percentage}%`, '--background': fillColor }}
      ></span>
    </span>
  );
}