import type { Experience } from '../../types';

export function ExperienceCard({ experience, isLast }: { experience: Experience; isLast: boolean }) {
  return (
    <div className="relative pl-8 pb-10">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] top-3 bottom-0 w-px bg-slate-700" />
      )}
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-cyan-400 bg-slate-900" />

      <div className="rounded-xl border border-slate-700 bg-slate-800 p-5 transition-colors hover:border-cyan-400/30">
        <span className="inline-block rounded-full bg-cyan-400/10 px-3 py-0.5 text-xs font-medium text-cyan-400">
          {experience.period}
        </span>
        <h3 className="mt-2 text-lg font-semibold text-white">{experience.role}</h3>
        <p className="text-sm text-slate-400">{experience.company}</p>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{experience.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {experience.highlights.map((h) => (
            <span
              key={h}
              className="rounded-full bg-slate-700/60 px-2.5 py-0.5 text-xs text-slate-300"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
