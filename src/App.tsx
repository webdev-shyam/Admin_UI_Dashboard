import React, { useState } from 'react';

import { ThemeProvider } from './contexts/ThemeContext';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';

import HomeView from './components/views/HomeView';
import AnalyticsView from './components/views/AnalyticsView';
import UsersView from './components/views/UsersView';
import SettingsView from './components/views/SettingsView';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'users':
        return <UsersView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <HomeView />;
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        currentView={currentView}
        onViewChange={setCurrentView}
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar 
          onMenuClick={() => setSidebarOpen(true)}
        />
        
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          {renderCurrentView()}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;