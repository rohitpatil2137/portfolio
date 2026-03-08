import type {
  PersonalInfo,
  SkillCategory,
  Experience,
  Project,
  Certification,
  SocialLink,
  NavItem,
} from '../types';

// ─── PERSONAL INFO ──────────────────────────────────────────
export const personalInfo: PersonalInfo = {
  name: 'Rohit Raut',
  title: 'Azure DevOps Engineer | Cloud Engineer',
  tagline: 'Designing, automating, and managing cloud-native infrastructure on Microsoft Azure with 4+ years of expertise in CI/CD, Kubernetes, Terraform, and cost optimization.',
  location: 'Pune, India',
  email: 'rohitraut002137@gmail.com',
  resumeUrl: '/resume.pdf',
};

// ─── ABOUT ──────────────────────────────────────────────────
export const aboutText = `Azure DevOps Engineer with 4+ years of experience in designing, automating, and managing cloud-native infrastructure on Microsoft Azure. Strong expertise in CI/CD pipelines, Kubernetes (AKS), Terraform, Docker, and Helm with a proven record of improving deployment speed, reliability, and cost optimization. Passionate about Platform Engineering, GitOps, and building self-service developer platforms that enable teams to ship faster.`;

// ─── EDUCATION ──────────────────────────────────────────────
export const education = {
  degree: 'Master of Computer Applications (MCA)',
  institution: 'P.E.S Modern College, Pune',
  period: '2020 – 2022',
};

// ─── SKILLS ─────────────────────────────────────────────────
export const skills: SkillCategory[] = [
  {
    category: 'Cloud & Azure',
    icon: 'Cloud',
    items: ['Azure AKS', 'App Service', 'Logic Apps', 'Key Vault', 'Azure Storage', 'Azure SQL', 'PostgreSQL', 'VMs', 'Front Door', 'Azure AD'],
  },
  {
    category: 'DevOps & CI/CD',
    icon: 'GitBranch',
    items: ['Azure DevOps', 'Jenkins', 'TeamCity', 'Octopus Deploy', 'YAML Pipelines', 'GitOps', 'ArgoCD'],
  },
  {
    category: 'IaC & Containers',
    icon: 'Container',
    items: ['Terraform', 'Docker', 'Kubernetes', 'Helm', 'Ansible', 'ARM Templates'],
  },
  {
    category: 'Monitoring & Observability',
    icon: 'Activity',
    items: ['Azure Monitor', 'Application Insights', 'Grafana', 'Promtail', 'Log Analytics', 'OpenTelemetry'],
  },
  {
    category: 'Scripting & Automation',
    icon: 'Terminal',
    items: ['Bash', 'PowerShell', 'YAML', 'Python', 'Shell Scripting'],
  },
  {
    category: 'VCS & Collaboration',
    icon: 'GitMerge',
    items: ['GitHub', 'Azure Repos', 'Git', 'Pull Request Workflows', 'Branch Policies'],
  },
];

// ─── TECH MARQUEE — scrolling tech logos ────────────────────
export const techMarqueeItems = [
  'Azure', 'Kubernetes', 'Docker', 'Terraform', 'Helm', 'Jenkins',
  'Azure DevOps', 'Grafana', 'Linux', 'Ansible', 'ArgoCD', 'GitOps',
  'AKS', 'CI/CD', 'PowerShell', 'Bash', 'PostgreSQL', 'Python',
  'Prometheus', 'Azure Monitor', 'Key Vault', 'Front Door',
];

// ─── EXPERIENCE ─────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    role: 'Azure DevOps Engineer',
    company: 'Go Digital Technology Consultancy',
    period: 'Oct 2024 – Present',
    description:
      'Designing and optimizing CI/CD pipelines using Azure DevOps for multi-environment deployments. Automating database restoration workflows, managing AKS clusters with Helm, and provisioning Azure infrastructure using Terraform.',
    highlights: [
      'Multi-environment CI/CD Pipelines',
      'AKS & Helm Deployments',
      'Terraform IaC Provisioning',
      'MSSQL Automation (24h → 1h recovery)',
      'Azure Monitoring Solutions',
      'Platform Engineering',
    ],
  },
  {
    role: 'Cloud Support Engineer',
    company: 'SysTools Software Pvt. Ltd.',
    period: 'Nov 2021 – Sep 2024',
    description:
      'Built and managed Azure infrastructure and CI/CD pipelines using Jenkins. Automated infrastructure tasks using Ansible and PowerShell. Led Active Directory and Exchange mailbox migration projects for enterprise clients.',
    highlights: [
      'Azure Infrastructure Management',
      'Jenkins CI/CD Pipelines',
      'Ansible & PowerShell Automation',
      'Active Directory & Exchange Migration',
      'Incident Response & Troubleshooting',
      'Cloud Cost Optimization',
    ],
  },
];

// ─── PROJECTS ───────────────────────────────────────────────
export const projects: Project[] = [
  {
    title: 'Azure Multi-Env CI/CD Pipeline',
    description:
      'Designed end-to-end Azure DevOps YAML pipelines for multi-environment deployments (Dev, QA, Staging, Prod) with automated approvals, variable groups, and rollback strategies. Reduced deployment failures by 40%.',
    techStack: ['Azure DevOps', 'YAML', 'Terraform', 'AKS', 'Helm'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'MSSQL Automated Restoration',
    description:
      'Built an automated MSSQL database restoration pipeline that reduced recovery time from 24 hours to under 1 hour. Uses Azure DevOps triggers, PowerShell scripts, and Azure SQL managed instances.',
    techStack: ['PowerShell', 'Azure DevOps', 'Azure SQL', 'Automation'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    title: 'Job Hunter — AI-Powered Job Tracker',
    description:
      'Full-stack PWA for tracking job applications with AI-powered resume customization, Gmail integration, smart job discovery with relevance scoring, and AI mock interview prep.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Groq AI'],
    githubUrl: 'https://github.com/rohitpatil2137/job-hunter',
    liveUrl: 'https://job-hunter-client.vercel.app',
  },
  {
    title: 'Infrastructure Monitoring Stack',
    description:
      'Set up comprehensive monitoring for Azure AKS workloads using Grafana, Promtail, and Azure Monitor with custom dashboards, alerting rules, and log aggregation for proactive incident management.',
    techStack: ['Grafana', 'Promtail', 'Azure Monitor', 'Application Insights'],
    githubUrl: null,
    liveUrl: null,
  },
];

// ─── CERTIFICATIONS ─────────────────────────────────────────
export const certifications: Certification[] = [
  { name: 'AZ-104: Azure Administrator Associate', issuer: 'Microsoft', year: '2024' },
  { name: 'AZ-900: Azure Fundamentals', issuer: 'Microsoft', year: '2023' },
  { name: 'Introduction to Kubernetes', issuer: 'Linux Foundation', year: '2023' },
  { name: 'Introduction to Jenkins', issuer: 'Linux Foundation', year: '2023' },
];

// ─── SOCIAL LINKS ───────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/rohitpatil2137', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/rohit-raut-cloud-devops', icon: 'Linkedin' },
  { platform: 'Email', url: 'mailto:rohitraut002137@gmail.com', icon: 'Mail' },
];

// ─── NAVIGATION ─────────────────────────────────────────────
export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
