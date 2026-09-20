import { site } from "@/data/site";

export function Stats() {
  return (
    <div className="grid grid-cols-2 gap-8">
      {site.stats.map((s) => (
        <div key={s.label}>
          <div className="text-[32px] font-semibold leading-none tracking-tight text-zinc-900">
            {s.value}
          </div>
          <div className="mt-2 text-[12.5px] text-zinc-500">{s.label}</div>
        </div>
      ))}
    </div>
  );
}