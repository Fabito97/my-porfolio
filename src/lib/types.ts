export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Backend' | 'Full-Stack' | 'AI / Agent' | 'Open Source' | 'System Tool';
  featured: boolean;
  published: boolean;
  date: string;
  githubUrl?: string;
  liveUrl?: string;
  problem: string;
  role: string;
  architecture: string;
  decisions: string[];
  challenges: string[];
  lessons: string[];
  results: string[];
  techStack: string[];
  order: number;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  isExternal: boolean;
  externalUrl?: string;
  externalPlatform?: 'Dev.to' | 'Medium' | 'Substack' | 'Hashnode' | 'GitHub';
}

export interface LearningItem {
  id: string;
  topic: string;
  category: string;
  whyLearning: string;
  status: 'Exploring' | 'Building Prototype' | 'Applying in Projects' | 'Documenting';
  startDate: string;
  resources: string[];
  relatedProjectSlug?: string;
  notes?: string;
}

export interface SkillGroup {
  id: string;
  category: string;
  skills: {
    name: string;
    level?: 'Core Proficiency' | 'Working Knowledge' | 'Actively Exploring';
    experienceYears?: string;
  }[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  employmentType: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  techStack: string[];
  featuredLink?: {
    label: string;
    url: string;
  };
}

export interface Contribution {
  id: string;
  title: string;
  type: 'Open Source' | 'Article' | 'Guide / Tutorial' | 'Community Project' | 'Experiment';
  description: string;
  url?: string;
  date: string;
  badge: string;
}

export interface SiteProfile {
  name: string;
  title: string;
  headline: string;
  bio: string;
  philosophy: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  availableForHire: boolean;
  currentFocus: string;
}
