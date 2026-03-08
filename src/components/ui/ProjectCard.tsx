import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../../types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-xl border border-slate-700 bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/5">
      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-cyan-400/10 px-2.5 py-0.5 text-xs font-medium text-cyan-400"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-cyan-400"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-cyan-400"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
