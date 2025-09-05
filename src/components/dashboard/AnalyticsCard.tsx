import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/outline';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

interface AnalyticsCardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  trend?: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  title,
  value,
  prefix = '',
  suffix = '',
  trend,
  icon: Icon,
  color
}) => {
  const animatedValue = useAnimatedCounter(value, 2000);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            {prefix}
            {prefix === '$' ? formatNumber(animatedValue) : animatedValue.toLocaleString()}
            {suffix}
          </p>
          {trend !== undefined && (
            <div className={`flex items-center mt-2 ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {trend >= 0 ? (
                <ArrowUpIcon className="w-4 h-4 mr-1" />
              ) : (
                <ArrowDownIcon className="w-4 h-4 mr-1" />
              )}
              <span className="text-sm font-medium">{Math.abs(trend)}%</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">vs last month</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;