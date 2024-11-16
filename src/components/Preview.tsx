import React from 'react';
import { UserData } from '../types';
import { getTemplateHtml } from '../templates';

interface PreviewProps {
  data: UserData;
}

export default function Preview({ data }: PreviewProps) {
  const html = getTemplateHtml(data);

  return (
    <div className="w-full h-full min-h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
      <iframe
        srcDoc={html}
        title="Portfolio Preview"
        className="w-full h-full border-0"
        sandbox="allow-scripts"
      />
    </div>
  );
}