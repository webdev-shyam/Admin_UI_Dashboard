import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon,
  UserPlusIcon,
  EllipsisVerticalIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  avatar: string;
}

const mockUsers: User[] = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'Admin', status: 'active', joinDate: '2024-01-15', avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2' },
  { id: 2, name: 'Michael Chen', email: 'michael@example.com', role: 'User', status: 'active', joinDate: '2024-01-14', avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2' },
  { id: 3, name: 'Emily Rodriguez', email: 'emily@example.com', role: 'Editor', status: 'pending', joinDate: '2024-01-13', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2' },
  { id: 4, name: 'David Kim', email: 'david@example.com', role: 'User', status: 'inactive', joinDate: '2024-01-12', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2' },
  { id: 5, name: 'Lisa Thompson', email: 'lisa@example.com', role: 'User', status: 'active', joinDate: '2024-01-11', avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2' },
  { id: 6, name: 'James Wilson', email: 'james@example.com', role: 'Editor', status: 'active', joinDate: '2024-01-10', avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&dpr=2' },
];

const UsersView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'all' || user.role.toLowerCase() === selectedRole;
    return matchesSearch && matchesRole;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircleIcon className="w-5 h-5 text-green-500" />;
      case 'inactive':
        return <XCircleIcon className="w-5 h-5 text-red-500" />;
      case 'pending':
        return <ClockIcon className="w-5 h-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "inline-flex px-2 py-1 text-xs font-medium rounded-full";
    switch (status) {
      case 'active':
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400`;
      case 'inactive':
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400`;
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400`;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Users</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your platform users</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <UserPlusIcon className="w-5 h-5 mr-2" />
          Add User
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
          <option value="user">User</option>
        </select>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div key={user.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                </div>
              </div>
              <button className="p-1 text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                <EllipsisVerticalIcon className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Role</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{user.role}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Status</span>
                <div className="flex items-center">
                  {getStatusIcon(user.status)}
                  <span className={`ml-2 ${getStatusBadge(user.status)}`}>
                    {user.status}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Joined</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {new Date(user.joinDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No users found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default UsersView;