export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  resumeUrl: string | null;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string | null;
  liveUrl: string | null;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
