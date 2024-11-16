import React, { useRef } from 'react';
import { UserData } from '../types';
import { Plus, Trash2, Download, Upload } from 'lucide-react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { getTemplateHtml } from '../templates';

interface UserFormProps {
  data: UserData;
  onChange: (data: UserData) => void;
}

export default function UserForm({ data, onChange }: UserFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addProject = () => {
    onChange({
      ...data,
      projects: [...data.projects, { title: '', description: '' }],
    });
  };

  const removeProject = (index: number) => {
    onChange({
      ...data,
      projects: data.projects.filter((_, i) => i !== index),
    });
  };

  const updateProject = (index: number, field: string, value: string) => {
    const newProjects = [...data.projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    onChange({ ...data, projects: newProjects });
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({ ...data, avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = async () => {
    try {
      const zip = new JSZip();
      const html = getTemplateHtml(data);
      
      zip.file('index.html', html);
      const blob = await zip.generateAsync({ type: 'blob' });
      saveAs(blob, `${data.name.toLowerCase().replace(/\s+/g, '-')}-portfolio.zip`);
    } catch (error) {
      console.error('Error generating portfolio:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Personal Information</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div 
              className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer overflow-hidden"
              onClick={() => fileInputRef.current?.click()}
            >
              {data.avatar ? (
                <img src={data.avatar} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <Upload className="w-6 h-6 text-gray-400" />
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              className="hidden"
            />
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={data.name}
              onChange={(e) => onChange({ ...data, name: e.target.value })}
              className="input-field"
            />
            <input
              type="text"
              placeholder="Professional Title"
              value={data.title}
              onChange={(e) => onChange({ ...data, title: e.target.value })}
              className="input-field"
            />
          </div>
        </div>
        <textarea
          placeholder="Bio"
          value={data.bio}
          onChange={(e) => onChange({ ...data, bio: e.target.value })}
          className="input-field h-32"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Contact & Social</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            className="input-field"
          />
          <input
            type="url"
            placeholder="GitHub URL"
            value={data.github}
            onChange={(e) => onChange({ ...data, github: e.target.value })}
            className="input-field"
          />
          <input
            type="url"
            placeholder="LinkedIn URL"
            value={data.linkedin}
            onChange={(e) => onChange({ ...data, linkedin: e.target.value })}
            className="input-field"
          />
          <input
            type="url"
            placeholder="Twitter URL"
            value={data.twitter}
            onChange={(e) => onChange({ ...data, twitter: e.target.value })}
            className="input-field"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <input
          type="text"
          placeholder="Skills (comma-separated)"
          value={data.skills.join(', ')}
          onChange={(e) =>
            onChange({ ...data, skills: e.target.value.split(',').map((s) => s.trim()) })
          }
          className="input-field"
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Projects</h2>
          <button
            onClick={addProject}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Project
          </button>
        </div>
        <div className="space-y-4">
          {data.projects.map((project, index) => (
            <div key={index} className="relative p-4 border rounded-lg">
              <button
                onClick={() => removeProject(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-600"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Project Title"
                  value={project.title}
                  onChange={(e) => updateProject(index, 'title', e.target.value)}
                  className="input-field"
                />
                <textarea
                  placeholder="Project Description"
                  value={project.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                  className="input-field h-24"
                />
                <input
                  type="url"
                  placeholder="Project Link (optional)"
                  value={project.link}
                  onChange={(e) => updateProject(index, 'link', e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Customization</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Primary Color</label>
            <input
              type="color"
              value={data.primaryColor}
              onChange={(e) => onChange({ ...data, primaryColor: e.target.value })}
              className="w-full h-10 rounded-lg cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Secondary Color</label>
            <input
              type="color"
              value={data.secondaryColor}
              onChange={(e) => onChange({ ...data, secondaryColor: e.target.value })}
              className="w-full h-10 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        <Download className="w-5 h-5" />
        Download Portfolio
      </button>
    </div>
  );
}