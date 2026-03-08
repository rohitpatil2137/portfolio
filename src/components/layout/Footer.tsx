import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '../../data/portfolio-data';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = { Github, Linkedin, Mail };

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-8">
      <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Rohit Raut. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ platform, url, icon }) => {
            const Icon = iconMap[icon];
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 transition-colors hover:text-cyan-400"
                aria-label={platform}
              >
                {Icon && <Icon className="h-5 w-5" />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
