import React from 'react';

interface DataPoint {
  month: string;
  users: number;
}

interface LineChartProps {
  data: DataPoint[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map(d => d.users));
  const padding = 40;
  const width = 600;
  const height = 300;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  const points = data.map((point, index) => ({
    x: padding + (index * chartWidth) / (data.length - 1),
    y: padding + chartHeight - (point.users / maxValue) * chartHeight,
    ...point
  }));

  const pathD = points.reduce((path, point, index) => {
    if (index === 0) {
      return `M ${point.x} ${point.y}`;
    }
    return `${path} L ${point.x} ${point.y}`;
  }, '');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">User Growth</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Monthly active users over time</p>
      </div>
      
      <div className="relative">
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="50" height="40" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-200 dark:text-gray-700" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Line */}
          <path
            d={pathD}
            fill="none"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-sm"
          />
          
          {/* Gradient fill */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{stopColor: '#3B82F6', stopOpacity: 0.1}} />
              <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 0}} />
            </linearGradient>
          </defs>
          <path
            d={`${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`}
            fill="url(#gradient)"
          />
          
          {/* Data points */}
          {points.map((point, index) => (
            <g key={index}>
              <circle
                cx={point.x}
                cy={point.y}
                r="4"
                fill="white"
                stroke="#3B82F6"
                strokeWidth="3"
                className="drop-shadow-sm hover:r-6 transition-all cursor-pointer"
              />
              <text
                x={point.x}
                y={height - 10}
                textAnchor="middle"
                className="text-xs fill-current text-gray-500 dark:text-gray-400"
              >
                {point.month}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default LineChart;