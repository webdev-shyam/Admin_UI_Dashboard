import React, { useState, useMemo } from 'react';
import { ChevronUpDownIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface Transaction {
  id: number;
  name: string;
  email: string;
  date: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
}

interface TransactionsTableProps {
  data: Transaction[];
  searchQuery: string;
}

type SortKey = 'name' | 'date' | 'amount' | 'status';
type SortOrder = 'asc' | 'desc';

const TransactionsTable: React.FC<TransactionsTableProps> = ({ data, searchQuery }) => {
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const filteredAndSortedData = useMemo(() => {
    let filtered = data;
    
    if (searchQuery) {
      filtered = data.filter(transaction => 
        transaction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transaction.status.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered.sort((a, b) => {
      let aVal: any = a[sortKey];
      let bVal: any = b[sortKey];
      
      if (sortKey === 'date') {
        aVal = new Date(aVal);
        bVal = new Date(bVal);
      }
      
      if (sortOrder === 'asc') {
        return aVal > bVal ? 1 : -1;
      }
      return aVal < bVal ? 1 : -1;
    });
  }, [data, searchQuery, sortKey, sortOrder]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const getSortIcon = (key: SortKey) => {
    if (sortKey !== key) {
      return <ChevronUpDownIcon className="w-4 h-4" />;
    }
    return sortOrder === 'asc' ? 
      <ChevronUpIcon className="w-4 h-4" /> : 
      <ChevronDownIcon className="w-4 h-4" />;
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = "inline-flex px-2 py-1 text-xs font-medium rounded-full";
    switch (status) {
      case 'completed':
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400`;
      case 'pending':
        return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400`;
      case 'failed':
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400`;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Transactions</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">Latest customer transactions and payments</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900/50">
            <tr>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center space-x-1">
                  <span>Customer</span>
                  {getSortIcon('name')}
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => handleSort('date')}
              >
                <div className="flex items-center space-x-1">
                  <span>Date</span>
                  {getSortIcon('date')}
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => handleSort('amount')}
              >
                <div className="flex items-center space-x-1">
                  <span>Amount</span>
                  {getSortIcon('amount')}
                </div>
              </th>
              <th 
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => handleSort('status')}
              >
                <div className="flex items-center space-x-1">
                  <span>Status</span>
                  {getSortIcon('status')}
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredAndSortedData.map((transaction) => (
              <tr 
                key={transaction.id} 
                className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {transaction.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {transaction.email}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {new Date(transaction.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                  ${transaction.amount.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={getStatusBadge(transaction.status)}>
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredAndSortedData.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No transactions found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionsTable;