import React, { useState } from 'react';
import { 
  Bars3Icon,
  MagnifyingGlassIcon,
  BellIcon,
  SunIcon,
  MoonIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../../contexts/ThemeContext';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Bars3Icon className="w-5 h-5" />
          </button>
          
          <div className="ml-4 lg:ml-0 relative max-w-xs sm:max-w-sm lg:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
          
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
            >
              <BellIcon className="w-5 h-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white dark:ring-gray-900"></span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Notifications</h3>
                </div>
                <div className="p-2">
                  <div className="space-y-1">
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">New user registration</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</p>
                    </a>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Payment received</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center space-x-1 sm:space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2"
                alt="Profile"
              />
              <ChevronDownIcon className="w-4 h-4 text-gray-400 hidden sm:block" />
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
                <div className="p-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    Settings
                  </a>
                  <hr className="my-1 border-gray-200 dark:border-gray-700" />
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;