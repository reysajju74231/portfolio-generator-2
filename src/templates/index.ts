import { UserData } from '../types';
import { minimal1, minimal2, minimal3 } from './minimal';
import { modern1, modern2, modern3 } from './modern';
import { creative1, creative2, creative3 } from './creative';

export const templates = [
  {
    id: 'minimal-1',
    name: 'Minimal Classic',
    description: 'Clean and simple design focusing on content',
    preview: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=640',
    category: 'minimal'
  },
  {
    id: 'minimal-2',
    name: 'Minimal Grid',
    description: 'Grid-based layout with minimalist aesthetics',
    preview: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=640',
    category: 'minimal'
  },
  {
    id: 'minimal-3',
    name: 'Minimal Cards',
    description: 'Card-based layout with clean typography',
    preview: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=640',
    category: 'minimal'
  },
  {
    id: 'modern-1',
    name: 'Modern Professional',
    description: 'Contemporary design with bold elements',
    preview: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=640',
    category: 'modern'
  },
  {
    id: 'modern-2',
    name: 'Modern Dynamic',
    description: 'Dynamic layout with modern aesthetics',
    preview: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=640',
    category: 'modern'
  },
  {
    id: 'modern-3',
    name: 'Modern Gradient',
    description: 'Gradient-based design with modern elements',
    preview: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=640',
    category: 'modern'
  },
  {
    id: 'creative-1',
    name: 'Creative Bold',
    description: 'Bold and creative design for artists',
    preview: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=640',
    category: 'creative'
  },
  {
    id: 'creative-2',
    name: 'Creative Flow',
    description: 'Flowing design with artistic elements',
    preview: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=640',
    category: 'creative'
  },
  {
    id: 'creative-3',
    name: 'Creative Edge',
    description: 'Edgy design for creative professionals',
    preview: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=640',
    category: 'creative'
  },
];

export const getTemplateHtml = (data: UserData): string => {
  switch (data.template) {
    case 'minimal-1':
      return minimal1(data);
    case 'minimal-2':
      return minimal2(data);
    case 'minimal-3':
      return minimal3(data);
    case 'modern-1':
      return modern1(data);
    case 'modern-2':
      return modern2(data);
    case 'modern-3':
      return modern3(data);
    case 'creative-1':
      return creative1(data);
    case 'creative-2':
      return creative2(data);
    case 'creative-3':
      return creative3(data);
    default:
      return minimal1(data);
  }
};