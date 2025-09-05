import React from 'react';
import { 
  UsersIcon, 
  CurrencyDollarIcon, 
  ShoppingBagIcon, 
  ArrowTrendingUpIcon 
} from '@heroicons/react/24/outline';

import AnalyticsCard from '../dashboard/AnalyticsCard';
import LineChart from '../dashboard/LineChart';
import BarChart from '../dashboard/BarChart';
import PieChart from '../dashboard/PieChart';

import { analyticsData, chartData } from '../../data/mockData';

const AnalyticsView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400">Detailed analytics and performance metrics</p>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnalyticsCard
          title="Total Users"
          value={analyticsData.totalUsers}
          trend={8.2}
          icon={UsersIcon}
          color="bg-blue-500"
        />
        <AnalyticsCard
          title="Revenue"
          value={analyticsData.revenue}
          prefix="$"
          trend={12.5}
          icon={CurrencyDollarIcon}
          color="bg-green-500"
        />
        <AnalyticsCard
          title="Orders"
          value={analyticsData.orders}
          trend={-2.3}
          icon={ShoppingBagIcon}
          color="bg-purple-500"
        />
        <AnalyticsCard
          title="Growth"
          value={analyticsData.growth}
          suffix="%"
          trend={analyticsData.growth}
          icon={ArrowTrendingUpIcon}
          color="bg-orange-500"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
          <LineChart data={chartData.userGrowth} />
        </div>
        <BarChart data={chartData.salesByCategory} />
        <PieChart data={chartData.trafficSources} />
      </div>

      {/* Additional Analytics Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Conversion Rates</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Landing Page</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">3.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Product Page</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">2.8%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Checkout</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">1.9%</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Performing Pages</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">/dashboard</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">45,231 views</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">/products</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">32,891 views</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">/pricing</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">28,456 views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsView;