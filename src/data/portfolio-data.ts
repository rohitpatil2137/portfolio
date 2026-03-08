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
  title: 'DevOps Engineer',
  tagline: 'Building reliable cloud infrastructure and automating everything in between.',
  location: 'Pune, India',
  email: 'rohitpatil2137@gmail.com',
  resumeUrl: null, // Drop a resume.pdf in public/ and set this to '/resume.pdf'
};

// ─── ABOUT ──────────────────────────────────────────────────
export const aboutText = `DevOps Engineer with ~3 years of hands-on experience in cloud infrastructure, CI/CD automation, and full-stack development. Proficient across Azure, AWS, and GCP ecosystems with expertise in container orchestration, infrastructure as code, and building developer tools. Passionate about streamlining deployments, reducing toil, and crafting solutions that scale.`;

// ─── SKILLS ─────────────────────────────────────────────────
export const skills: SkillCategory[] = [
  {
    category: 'Cloud Platforms',
    icon: 'Cloud',
    items: ['Azure', 'AWS', 'GCP'],
  },
  {
    category: 'DevOps & IaC',
    icon: 'Settings',
    items: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD (YAML)', 'Linux', 'Git'],
  },
  {
    category: 'Frontend',
    icon: 'Monitor',
    items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    icon: 'Server',
    items: ['Node.js', 'Express', 'Java (Spring Boot)', 'PHP', 'Python'],
  },
  {
    category: 'Databases & Tools',
    icon: 'Database',
    items: ['PostgreSQL', 'Supabase', 'MySQL', 'Active Directory'],
  },
];

// ─── EXPERIENCE ─────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    role: 'DevOps Engineer',
    company: 'Eberl Claims Solutions',
    period: '2024 - Present',
    description:
      'Managing Azure cloud infrastructure, CI/CD pipelines, and Kubernetes clusters. Driving infrastructure automation with Terraform and improving deployment reliability.',
    highlights: [
      'Azure DevOps YAML Pipelines',
      'Kubernetes & AKS Management',
      'Terraform Infrastructure as Code',
      'Monitoring & Incident Response',
    ],
  },
  {
    role: 'Azure DevOps Engineer',
    company: 'Go Digital Technology Consulting LLP',
    period: '2023 - 2024',
    description:
      'Designed and maintained Azure cloud solutions, automated CI/CD workflows, and provisioned resources using Terraform on hybrid cloud environments.',
    highlights: [
      'CI/CD Pipeline Automation',
      'Azure Resource Provisioning',
      'Hybrid Cloud Infrastructure',
      'Performance Monitoring & Alerting',
    ],
  },
  {
    role: 'Cloud Support Engineer',
    company: 'SysTools',
    period: '2022 - 2023',
    description:
      'Provided cloud support and administration, managed mailbox migrations, optimized cloud services for performance, and handled Active Directory administration.',
    highlights: [
      'Cloud Migration Support',
      'Active Directory Management',
      'Troubleshooting & Root Cause Analysis',
      'Service Optimization',
    ],
  },
];

// ─── PROJECTS ───────────────────────────────────────────────
export const projects: Project[] = [
  {
    title: 'Job Hunter',
    description:
      'Full-stack PWA for tracking job applications across multiple profiles. Features AI-powered resume customization, Gmail integration for auto-detecting application updates, smart job discovery with relevance scoring, and AI mock interview prep.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'Tailwind CSS', 'Groq AI'],
    githubUrl: 'https://github.com/rohitpatil2137/job-hunter',
    liveUrl: 'https://job-hunter-client.vercel.app',
  },
  {
    title: 'Bhaji-Katta',
    description:
      'E-commerce platform for ordering fresh vegetables online with doorstep delivery. Built with a focus on user-friendly ordering experience.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/rohitpatil2137/Bhaji-katta',
    liveUrl: null,
  },
  {
    title: 'Credit Management System',
    description:
      'Web application for managing credit transactions and financial records with user authentication and reporting capabilities.',
    techStack: ['PHP', 'MySQL', 'HTML/CSS'],
    githubUrl: 'https://github.com/rohitpatil2137/CreditManagement',
    liveUrl: null,
  },
  {
    title: 'Spring Boot Microservices',
    description:
      'Collection of microservice projects built with Spring Boot demonstrating REST APIs, testing patterns, and Java backend architecture.',
    techStack: ['Java', 'Spring Boot', 'REST API'],
    githubUrl: 'https://github.com/rohitpatil2137/springBootHello',
    liveUrl: null,
  },
];

// ─── CERTIFICATIONS ─────────────────────────────────────────
export const certifications: Certification[] = [
  { name: 'AZ-900: Azure Fundamentals', issuer: 'Microsoft', year: '2023' },
  { name: 'Azure DevOps Engineer Expert', issuer: 'Microsoft', year: '2024' },
];

// ─── SOCIAL LINKS ───────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/rohitpatil2137', icon: 'Github' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/rohit-raut-cloud-devops', icon: 'Linkedin' },
  { platform: 'Email', url: 'mailto:rohitpatil2137@gmail.com', icon: 'Mail' },
];

// ─── NAVIGATION ─────────────────────────────────────────────
export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
