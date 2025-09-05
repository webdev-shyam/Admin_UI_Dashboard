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

interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  activities: Activity[];
}

const ActivityModal: React.FC<ActivityModalProps> = ({ isOpen, onClose, activities }) => {
  if (!isOpen) return null;

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

  // Generate more activities for the modal
  const extendedActivities = [
    ...activities,
    { id: 9, user: 'Jennifer Lee', action: 'updated billing information', time: '28 minutes ago', type: 'profile' as const },
    { id: 10, user: 'Mark Thompson', action: 'cancelled subscription', time: '32 minutes ago', type: 'subscription' as const },
    { id: 11, user: 'Anna Rodriguez', action: 'placed order #12848', time: '35 minutes ago', type: 'order' as const },
    { id: 12, user: 'Chris Wilson', action: 'left a 5-star review', time: '38 minutes ago', type: 'review' as const },
    { id: 13, user: 'Sophie Chen', action: 'downloaded invoice', time: '42 minutes ago', type: 'download' as const },
    { id: 14, user: 'Ryan Davis', action: 'shared product link', time: '45 minutes ago', type: 'share' as const },
    { id: 15, user: 'Maya Patel', action: 'completed payment', time: '48 minutes ago', type: 'payment' as const },
    { id: 16, user: 'Lucas Brown', action: 'joined the platform', time: '52 minutes ago', type: 'user' as const },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div 
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75"
          onClick={onClose}
        />

        <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                All Activities
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Complete activity history for your platform
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="max-h-96 overflow-y-auto">
            <div className="space-y-3">
              {extendedActivities.map((activity) => (
                <div 
                  key={activity.id} 
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                >
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
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityModal;