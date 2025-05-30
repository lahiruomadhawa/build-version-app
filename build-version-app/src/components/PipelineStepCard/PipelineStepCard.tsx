import React from 'react';
import { PipelineStep } from '../../types/pipeline';

interface PipelineStepCardProps {
  step: PipelineStep;
  index: number;
}

const PipelineStepCard: React.FC<PipelineStepCardProps> = ({ step, index }) => {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    running: 'bg-blue-100 text-blue-800',
    ready: 'bg-orange-100 text-orange-800',
    completed: 'bg-purple-100 text-purple-800',
    pending: 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`w-24 h-24 mx-auto mb-4 ${step.gradient} rounded-lg flex items-center justify-center shadow-lg`}>
        <div dangerouslySetInnerHTML={{ __html: step.icon }} />
      </div>
      <div className="flex items-center justify-center mb-2">
        <span className="text-sm font-bold text-gray-500 bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center mr-2">
          {index + 1}
        </span>
        <h4 className="text-xl font-semibold text-gray-900">{step.name}</h4>
      </div>
      <p className="text-gray-600 text-sm mb-4">{step.description}</p>
      <div className={`px-3 py-1 ${statusColors[step.status]} rounded-full text-xs font-medium inline-block`}>
        {step.status.charAt(0).toUpperCase() + step.status.slice(1)}
      </div>
    </div>
  );
};

export default PipelineStepCard;