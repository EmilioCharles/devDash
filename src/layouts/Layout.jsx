import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Determine title based on route
  const getTitle = () => {
    switch (location.pathname) {
      case '/': return 'Overview';
      case '/analytics': return 'Analytics';
      case '/profile': return 'Profile';
      case '/settings': return 'Settings';
      default: return 'Dashboard';
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white h-screen flex overflow-hidden font-display">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden bg-background-light dark:bg-background-dark">
        <Header title={getTitle()} toggleMobileMenu={() => setSidebarOpen(true)} />

        {/* Main Scrollable Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
