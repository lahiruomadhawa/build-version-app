import React from 'react';
import { PipelineStep } from '../../types/pipeline';

interface PipelineFlowProps {
  steps: PipelineStep[];
}

const PipelineFlow: React.FC<PipelineFlowProps> = ({ steps }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Complete Pipeline Flow</h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                {index + 1}
              </div>
              <span className="mt-2 text-xs font-medium text-gray-700 text-center max-w-20">
                {step.shortName}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-shrink-0 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PipelineFlow;