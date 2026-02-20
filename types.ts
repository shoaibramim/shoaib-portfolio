export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  category: 'AI/ML' | 'Full-Stack' | 'Frontend' | 'UI/UX' | 'Mobile App' | 'Video Editing' | 'Graphic Design' | 'Other';
}

export interface Skill {
  name: string;
  level?: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export interface CPProfile {
  platform: string;
  rating: string | number;
  solved: number;
  url: string;
}

export interface ProfileData {
  name: string;
  role: string;
  email: string;
  location: string;
  about: string;
  socials: {
    linkedin: string;
    github: string;
    twitter?: string;
  };
}