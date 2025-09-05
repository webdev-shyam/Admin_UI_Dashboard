import React, { useState } from 'react';
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
import TransactionsTable from '../dashboard/TransactionsTable';
import ActivityFeed from '../dashboard/ActivityFeed';
import ActivityModal from '../dashboard/ActivityModal';

import { analyticsData, chartData, transactions, activities } from '../../data/mockData';

const HomeView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activityModalOpen, setActivityModalOpen] = useState(false);

  return (
    <div className="space-y-8">
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

      {/* Table and Activity Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TransactionsTable 
            data={transactions} 
            searchQuery={searchQuery}
          />
        </div>
        <div>
          <ActivityFeed 
            activities={activities} 
            onViewAll={() => setActivityModalOpen(true)}
          />
        </div>
      </div>

      <ActivityModal
        isOpen={activityModalOpen}
        onClose={() => setActivityModalOpen(false)}
        activities={activities}
      />
    </div>
  );
};

export default HomeView;