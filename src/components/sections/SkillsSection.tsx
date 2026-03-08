import { Cloud, Settings, Monitor, Server, Database, type LucideIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SkillBadge } from '../ui/SkillBadge';
import { skills } from '../../data/portfolio-data';

const iconMap: Record<string, LucideIcon> = { Cloud, Settings, Monitor, Server, Database };

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 bg-slate-800/30">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading title="Skills & Tech Stack" subtitle="Technologies I work with" />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon] ?? Cloud;
            return (
              <ScrollReveal key={skill.category}>
                <div className="h-full rounded-xl border border-slate-700 bg-slate-800 p-6 transition-colors hover:border-cyan-400/40">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10">
                      <Icon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <h3 className="font-semibold text-white">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <SkillBadge key={item} name={item} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
