import React, { useState } from 'react';
import { Template } from '../types';
import { Check } from 'lucide-react';

interface TemplateSelectorProps {
  templates: Template[];
  selectedTemplate: string;
  onSelect: (templateId: Template['id']) => void;
}

export default function TemplateSelector({ templates, selectedTemplate, onSelect }: TemplateSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'minimal' | 'modern' | 'creative'>('all');

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-4">
        {(['all', 'minimal', 'modern', 'creative'] as const).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${
              selectedTemplate === template.id
                ? 'ring-2 ring-blue-500 scale-[1.02]'
                : 'hover:scale-[1.01]'
            }`}
            onClick={() => onSelect(template.id)}
          >
            <img
              src={template.preview}
              alt={template.name}
              className="w-full aspect-[16/10] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="text-lg font-semibold">{template.name}</h3>
              <p className="text-sm opacity-90">{template.description}</p>
            </div>
            {selectedTemplate === template.id && (
              <div className="absolute top-2 right-2 bg-blue-500 rounded-full p-1">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}