import { Briefcase, Award, GraduationCap, GitBranch } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '../ui/ScrollReveal';
import { aboutText, certifications, education } from '../../data/portfolio-data';

const stats = [
  { icon: Briefcase, label: 'Years Experience', value: '4+' },
  { icon: Award, label: 'Certifications', value: '4' },
  { icon: GitBranch, label: 'GitHub Repos', value: '32+' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading title="About Me" subtitle="Get to know me better" />
        </ScrollReveal>

        <ScrollReveal>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-slate-400">
            {aboutText}
          </p>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal className="mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center rounded-xl border border-slate-700 bg-slate-800 p-6 text-center"
              >
                <Icon className="h-8 w-8 text-cyan-400" />
                <span className="mt-3 text-3xl font-bold text-white">{value}</span>
                <span className="mt-1 text-sm text-slate-400">{label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Education */}
        <ScrollReveal className="mt-10">
          <div className="mx-auto max-w-md rounded-xl border border-slate-700 bg-slate-800 p-5 text-center">
            <GraduationCap className="mx-auto h-6 w-6 text-cyan-400" />
            <p className="mt-2 font-semibold text-white">{education.degree}</p>
            <p className="text-sm text-slate-400">{education.institution}</p>
            <p className="text-xs text-slate-500">{education.period}</p>
          </div>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2"
              >
                <Award className="h-4 w-4 shrink-0 text-cyan-400" />
                <span className="text-sm text-slate-300">{cert.name}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
