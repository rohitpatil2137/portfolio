import { Github, Linkedin, Mail, MapPin, type LucideIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '../ui/ScrollReveal';
import { socialLinks, personalInfo } from '../../data/portfolio-data';

const iconMap: Record<string, LucideIcon> = { Github, Linkedin, Mail };

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <SectionHeading title="Let's Connect" subtitle="I'm always open to new opportunities and conversations" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex items-center justify-center gap-2 text-slate-400 mb-8">
            <MapPin className="h-4 w-4" />
            <span>{personalInfo.location}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {socialLinks.map(({ platform, url, icon }) => {
              const Icon = iconMap[icon];
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-6 py-4 text-sm font-medium text-slate-300 transition-all hover:border-cyan-400/40 hover:text-cyan-400 hover:-translate-y-0.5 sm:w-auto"
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  {platform}
                </a>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-10">
          <p className="text-slate-500 text-sm">
            Or drop me an email at{' '}
            <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:underline">
              {personalInfo.email}
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
