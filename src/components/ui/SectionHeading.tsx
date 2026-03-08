export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-400">{subtitle}</p>}
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-cyan-400" />
    </div>
  );
}
