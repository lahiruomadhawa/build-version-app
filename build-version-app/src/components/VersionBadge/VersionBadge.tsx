import React from 'react';

interface VersionBadgeProps {
  version: string;
}

const VersionBadge: React.FC<VersionBadgeProps> = ({ version }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Build Pipeline Dashboard</h2>
      <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
        <span className="text-lg font-semibold">App Version: {version}</span>
      </div>
    </div>
  );
};

export default VersionBadge;