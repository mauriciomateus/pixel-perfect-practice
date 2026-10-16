export default function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <span className="flex h-2.5 bg-gray-300 rounded-lg w-full ">
      <span
        className="rounded-lg bg-indigo-700 h-full"
        style={{ width: `${percentage}%` }}
      ></span>
    </span>
  );
}