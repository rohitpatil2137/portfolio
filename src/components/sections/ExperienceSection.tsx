import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ExperienceCard } from '../ui/ExperienceCard';
import { experiences } from '../../data/portfolio-data';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <SectionHeading title="Work Experience" subtitle="My professional journey" />
        </ScrollReveal>

        <div>
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.company}>
              <ExperienceCard
                experience={exp}
                isLast={index === experiences.length - 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
