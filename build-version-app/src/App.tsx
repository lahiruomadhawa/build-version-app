import React from 'react';
import Navigation from './components/Navigation';
import VersionBadge from './components/VersionBadge';
import BuildStatistics from './components/BuildStatistics';
import PipelineFlow from './components/PipelineFlow';
import PipelineStepCard from './components/PipelineStepCard';
import { APP_VERSION, NAVIGATION_ITEMS, BUILD_STATISTICS, PIPELINE_STEPS } from './utils/constants';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation items={NAVIGATION_ITEMS} />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <VersionBadge version={APP_VERSION} />
        
        <BuildStatistics statistics={BUILD_STATISTICS} />
        
        <PipelineFlow steps={PIPELINE_STEPS} />
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Complete Build Pipeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PIPELINE_STEPS.map((step, index) => (
              <PipelineStepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;