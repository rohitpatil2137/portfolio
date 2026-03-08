export function SkillBadge({ name }: { name: string }) {
  return (
    <span className="rounded-full bg-slate-700/60 px-3 py-1 text-sm text-slate-300 border border-slate-600">
      {name}
    </span>
  );
}
