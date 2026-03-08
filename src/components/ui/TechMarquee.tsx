import { techMarqueeItems } from '../../data/portfolio-data';

const techIcons: Record<string, string> = {
  'Azure': '☁️',
  'Kubernetes': '⎈',
  'Docker': '🐳',
  'Terraform': '🏗️',
  'Helm': '⛑️',
  'Jenkins': '🔧',
  'Azure DevOps': '🔄',
  'Grafana': '📊',
  'Linux': '🐧',
  'Ansible': '⚙️',
  'ArgoCD': '🚀',
  'GitOps': '🔀',
  'AKS': '☸️',
  'CI/CD': '🔁',
  'PowerShell': '💻',
  'Bash': '📟',
  'PostgreSQL': '🐘',
  'Python': '🐍',
  'Prometheus': '🔥',
  'Azure Monitor': '📈',
  'Key Vault': '🔐',
  'Front Door': '🚪',
};

// Double the items for seamless infinite loop
const items = [...techMarqueeItems, ...techMarqueeItems];

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-6 bg-slate-800/40 border-y border-slate-800">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-900 to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="mx-4 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
          >
            <span className="text-base">{techIcons[tech] ?? '⚡'}</span>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
