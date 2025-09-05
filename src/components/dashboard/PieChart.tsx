import React, { useState } from 'react';

interface DataPoint {
  source: string;
  percentage: number;
  color: string;
}

interface PieChartProps {
  data: DataPoint[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const radius = 80;
  const centerX = 120;
  const centerY = 120;
  
  let cumulativePercentage = 0;
  
  const segments = data.map((item, index) => {
    const startAngle = (cumulativePercentage / 100) * 360;
    const endAngle = ((cumulativePercentage + item.percentage) / 100) * 360;
    cumulativePercentage += item.percentage;
    
    const x1 = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
    const y1 = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
    const x2 = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
    const y2 = centerY + radius * Math.sin((endAngle * Math.PI) / 180);
    
    const largeArcFlag = item.percentage > 50 ? 1 : 0;
    
    const pathD = [
      `M ${centerX} ${centerY}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ');
    
    return { ...item, pathD, index };
  });

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Traffic Sources</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Website traffic by source</p>
      </div>
      
      <div className="flex items-center">
        <div className="relative">
          <svg width="240" height="240" viewBox="0 0 240 240">
            {segments.map((segment) => (
              <path
                key={segment.index}
                d={segment.pathD}
                fill={segment.color}
                className={`transition-all duration-200 cursor-pointer ${
                  hoveredIndex === segment.index ? 'opacity-80 scale-105' : 'opacity-100'
                }`}
                onMouseEnter={() => setHoveredIndex(segment.index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transformOrigin: `${centerX}px ${centerY}px`,
                  filter: hoveredIndex === segment.index ? 'brightness(1.1)' : 'none'
                }}
              />
            ))}
          </svg>
        </div>
        
        <div className="ml-8 space-y-3">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex items-center cursor-pointer transition-all duration-200 ${
                hoveredIndex === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="w-3 h-3 rounded-full mr-3"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-700 dark:text-gray-300 mr-2">
                {item.source}
              </span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;