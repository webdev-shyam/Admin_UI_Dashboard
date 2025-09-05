import React from 'react';

interface DataPoint {
  category: string;
  sales: number;
}

interface BarChartProps {
  data: DataPoint[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map(d => d.sales));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sales by Category</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Revenue breakdown by product category</p>
      </div>
      
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="w-20 text-sm font-medium text-gray-700 dark:text-gray-300">
              {item.category}
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${(item.sales / maxValue) * 100}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                />
              </div>
            </div>
            <div className="w-16 text-sm font-semibold text-gray-900 dark:text-white text-right">
              ${(item.sales / 1000).toFixed(0)}K
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;