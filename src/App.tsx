import React, { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { UserData } from './types';
import { templates, getTemplateHtml } from './templates';
import UserForm from './components/UserForm';
import Preview from './components/Preview';
import TemplateSelector from './components/TemplateSelector';

const initialData: UserData = {
  name: '',
  title: '',
  bio: '',
  email: '',
  github: '',
  linkedin: '',
  twitter: '',
  skills: [],
  projects: [],
  template: 'minimal',
  primaryColor: '#3b82f6',
  secondaryColor: '#1e40af',
};

export default function App() {
  const [data, setData] = useState<UserData>(initialData);
  const [downloading, setDownloading] = useState(false);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const zip = new JSZip();
      const html = getTemplateHtml(data);
      
      zip.file('index.html', html);
      const blob = await zip.generateAsync({ type: 'blob' });
      saveAs(blob, `${data.name.toLowerCase().replace(/\s+/g, '-')}-portfolio.zip`);
    } catch (error) {
      console.error('Error generating portfolio:', error);
    }
    setDownloading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Portfolio Generator</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('edit')}
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === 'edit'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Edit
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-4 py-2 rounded-lg ${
                    activeTab === 'preview'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Preview
                </button>
              </div>
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                {downloading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                Download
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose a Template</h2>
          <TemplateSelector
            templates={templates}
            selectedTemplate={data.template}
            onSelect={(template) => setData({ ...data, template })}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className={activeTab === 'edit' ? 'block' : 'hidden lg:block'}>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <UserForm data={data} onChange={setData} />
            </div>
          </div>
          <div className={activeTab === 'preview' ? 'block' : 'hidden lg:block'}>
            <Preview data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}