import React from 'react';
import { 
  HomeIcon, 
  ChartBarIcon, 
  UsersIcon, 
  CogIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: string;
  onViewChange: (view: string) => void;
}

const navigation = [
  { name: 'Home', icon: HomeIcon, id: 'home' },
  { name: 'Analytics', icon: ChartBarIcon, id: 'analytics' },
  { name: 'Users', icon: UsersIcon, id: 'users' },
  { name: 'Settings', icon: CogIcon, id: 'settings' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentView, onViewChange }) => {

  const handleNavClick = (viewId: string) => {
    onViewChange(viewId);
    onClose(); // Close sidebar on mobile after navigation
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <ChartBarIcon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="ml-3">
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">NextMetrics</h1>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    currentView === item.id
                      ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-r-2 border-blue-500'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <item.icon className={`mr-3 h-5 w-5 ${
                    currentView === item.id ? 'text-blue-500' : 'text-gray-400 dark:text-gray-500'
                  }`} />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;