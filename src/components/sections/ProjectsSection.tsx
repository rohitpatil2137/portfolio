import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ProjectCard } from '../ui/ProjectCard';
import { projects } from '../../data/portfolio-data';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 bg-slate-800/30">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading title="Projects" subtitle="Things I've built" />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ScrollReveal key={project.title}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
