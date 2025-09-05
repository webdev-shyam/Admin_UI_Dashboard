import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { 
  UserPlusIcon, 
  ShoppingBagIcon, 
  UserIcon, 
  CreditCardIcon, 
  StarIcon,
  SparklesIcon,
  ArrowDownTrayIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
  type: 'user' | 'order' | 'profile' | 'payment' | 'review' | 'subscription' | 'download' | 'share';
}

interface ActivityFeedProps {
  activities: Activity[];
  onViewAll?: () => void;
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities, onViewAll }) => {
  const getIcon = (type: Activity['type']) => {
    const iconClass = "w-5 h-5 text-white";
    switch (type) {
      case 'user':
        return <UserPlusIcon className={iconClass} />;
      case 'order':
        return <ShoppingBagIcon className={iconClass} />;
      case 'profile':
        return <UserIcon className={iconClass} />;
      case 'payment':
        return <CreditCardIcon className={iconClass} />;
      case 'review':
        return <StarIcon className={iconClass} />;
      case 'subscription':
        return <SparklesIcon className={iconClass} />;
      case 'download':
        return <ArrowDownTrayIcon className={iconClass} />;
      case 'share':
        return <ShareIcon className={iconClass} />;
      default:
        return <UserIcon className={iconClass} />;
    }
  };

  const getIconBackground = (type: Activity['type']) => {
    switch (type) {
      case 'user':
        return 'bg-green-500';
      case 'order':
        return 'bg-blue-500';
      case 'profile':
        return 'bg-purple-500';
      case 'payment':
        return 'bg-emerald-500';
      case 'review':
        return 'bg-yellow-500';
      case 'subscription':
        return 'bg-pink-500';
      case 'download':
        return 'bg-indigo-500';
      case 'share':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Activity Feed</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Recent platform activity</p>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={activity.id} className="flex items-start space-x-3 group hover:bg-gray-50 dark:hover:bg-gray-900/50 p-2 rounded-lg transition-colors">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${getIconBackground(activity.type)}`}>
                {getIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 dark:text-white">
                  <span className="font-medium">{activity.user}</span>
                  {' '}
                  <span className="text-gray-600 dark:text-gray-400">{activity.action}</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{activity.time}</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <button 
            onClick={onViewAll}
            className="w-full text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20 py-2 px-4 rounded-lg"
          >
            View all activities
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;