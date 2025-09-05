export const analyticsData = {
  totalUsers: 12847,
  revenue: 89420,
  orders: 3421,
  growth: 12.5
};

export const chartData = {
  userGrowth: [
    { month: 'Jan', users: 4000 },
    { month: 'Feb', users: 5200 },
    { month: 'Mar', users: 6100 },
    { month: 'Apr', users: 7800 },
    { month: 'May', users: 9200 },
    { month: 'Jun', users: 10500 },
    { month: 'Jul', users: 12847 }
  ],
  salesByCategory: [
    { category: 'Electronics', sales: 45000 },
    { category: 'Clothing', sales: 32000 },
    { category: 'Books', sales: 18000 },
    { category: 'Sports', sales: 25000 },
    { category: 'Home', sales: 38000 }
  ],
  trafficSources: [
    { source: 'Direct', percentage: 35, color: '#3B82F6' },
    { source: 'Google', percentage: 28, color: '#10B981' },
    { source: 'Social', percentage: 20, color: '#F59E0B' },
    { source: 'Email', percentage: 12, color: '#EF4444' },
    { source: 'Other', percentage: 5, color: '#8B5CF6' }
  ]
};

export const transactions = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', date: '2024-01-15', amount: 2499, status: 'completed' },
  { id: 2, name: 'Michael Chen', email: 'michael@example.com', date: '2024-01-14', amount: 1899, status: 'pending' },
  { id: 3, name: 'Emily Rodriguez', email: 'emily@example.com', date: '2024-01-14', amount: 3299, status: 'completed' },
  { id: 4, name: 'David Kim', email: 'david@example.com', date: '2024-01-13', amount: 899, status: 'failed' },
  { id: 5, name: 'Lisa Thompson', email: 'lisa@example.com', date: '2024-01-13', amount: 1599, status: 'completed' },
  { id: 6, name: 'James Wilson', email: 'james@example.com', date: '2024-01-12', amount: 4299, status: 'completed' },
  { id: 7, name: 'Maria Garcia', email: 'maria@example.com', date: '2024-01-12', amount: 2199, status: 'pending' },
  { id: 8, name: 'Robert Brown', email: 'robert@example.com', date: '2024-01-11', amount: 1299, status: 'completed' }
];

export const activities = [
  { id: 1, user: 'John Doe', action: 'joined the platform', time: '2 minutes ago', type: 'user' },
  { id: 2, user: 'Sarah Smith', action: 'placed an order #12847', time: '5 minutes ago', type: 'order' },
  { id: 3, user: 'Mike Johnson', action: 'updated profile', time: '8 minutes ago', type: 'profile' },
  { id: 4, user: 'Emma Wilson', action: 'completed payment', time: '12 minutes ago', type: 'payment' },
  { id: 5, user: 'Alex Brown', action: 'left a review', time: '15 minutes ago', type: 'review' },
  { id: 6, user: 'Lisa Davis', action: 'subscribed to premium', time: '18 minutes ago', type: 'subscription' },
  { id: 7, user: 'Tom Miller', action: 'downloaded report', time: '22 minutes ago', type: 'download' },
  { id: 8, user: 'Kate Johnson', action: 'shared content', time: '25 minutes ago', type: 'share' }
];