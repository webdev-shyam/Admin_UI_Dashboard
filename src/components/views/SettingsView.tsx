import React, { useState } from 'react';
import { 
  UserIcon,
  BellIcon,
  ShieldCheckIcon,
  CogIcon,
  KeyIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../../contexts/ThemeContext';

const SettingsView: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true
  });
  
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    company: 'NextMetrics Inc.',
    timezone: 'UTC-8'
  });

  const handleNotificationChange = (type: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleProfileChange = (field: keyof typeof profile, value: string) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your account and application preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
                    <UserIcon className="w-5 h-5 mr-3" />
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <BellIcon className="w-5 h-5 mr-3" />
                    Notifications
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <ShieldCheckIcon className="w-5 h-5 mr-3" />
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <CogIcon className="w-5 h-5 mr-3" />
                    Preferences
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Profile Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 border border-blue-600 hover:border-blue-700 rounded-lg transition-colors">
                  Change Photo
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => handleProfileChange('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => handleProfileChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={profile.company}
                    onChange={(e) => handleProfileChange('company', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Timezone
                  </label>
                  <select
                    value={profile.timezone}
                    onChange={(e) => handleProfileChange('timezone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="UTC-8">Pacific Time (UTC-8)</option>
                    <option value="UTC-5">Eastern Time (UTC-5)</option>
                    <option value="UTC+0">GMT (UTC+0)</option>
                    <option value="UTC+1">Central European Time (UTC+1)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">Email Notifications</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications via email</p>
                </div>
                <button
                  onClick={() => handleNotificationChange('email')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notifications.email ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications.email ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">Push Notifications</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive push notifications in browser</p>
                </div>
                <button
                  onClick={() => handleNotificationChange('push')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notifications.push ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications.push ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">SMS Notifications</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Receive important alerts via SMS</p>
                </div>
                <button
                  onClick={() => handleNotificationChange('sms')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    notifications.sms ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications.sms ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Appearance Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Appearance</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">Dark Mode</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Toggle between light and dark themes</p>
                </div>
                <button
                  onClick={toggleDarkMode}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    darkMode ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;