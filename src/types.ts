export interface UserData {
  name: string;
  title: string;
  bio: string;
  email: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  skills: string[];
  projects: Project[];
  avatar?: string;
  template: 'minimal-1' | 'minimal-2' | 'minimal-3' | 'modern-1' | 'modern-2' | 'modern-3' | 'creative-1' | 'creative-2' | 'creative-3';
  primaryColor: string;
  secondaryColor: string;
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  image?: string;
}

export interface Template {
  id: 'minimal-1' | 'minimal-2' | 'minimal-3' | 'modern-1' | 'modern-2' | 'modern-3' | 'creative-1' | 'creative-2' | 'creative-3';
  name: string;
  description: string;
  preview: string;
  category: 'minimal' | 'modern' | 'creative';
}