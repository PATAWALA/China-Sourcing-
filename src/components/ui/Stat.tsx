export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center sm:text-left">
      <div className="text-[28px] font-semibold leading-none tracking-tight text-zinc-900">{value}</div>
      <div className="mt-1.5 text-[12px] text-zinc-500">{label}</div>
    </div>
  );
}