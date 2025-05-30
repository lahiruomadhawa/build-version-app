import React from 'react';
import { BuildStatistic } from '../../types/pipeline';

interface BuildStatisticsProps {
  statistics: BuildStatistic[];
}

const BuildStatistics: React.FC<BuildStatisticsProps> = ({ statistics }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {statistics.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default BuildStatistics;