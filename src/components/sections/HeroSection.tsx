import { ArrowDown, Download, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/portfolio-data';

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Initials avatar */}
        <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-4xl font-bold text-white shadow-lg shadow-cyan-400/20 ring-4 ring-cyan-400/20">
          {personalInfo.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-4">
          <MapPin className="h-4 w-4" />
          {personalInfo.location}
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        <p className="mt-4 text-xl text-cyan-400 font-medium sm:text-2xl">{personalInfo.title}</p>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          {personalInfo.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/25"
          >
            View Projects
          </a>
          {personalInfo.resumeUrl && (
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-400/50 hover:bg-slate-800"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          )}
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="mt-16 inline-flex animate-bounce text-slate-500 transition-colors hover:text-cyan-400"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
