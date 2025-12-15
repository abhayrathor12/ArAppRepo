import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { ModuleGrid } from './components/ModuleGrid';
import { Dashboard } from './components/Dashboard';
import { Reports } from './components/Reports';
import { Users } from './components/Users';
import { UserStatsGrid } from './components/UserStatsGrid';
import { UserDashboard } from './components/UserDashboard';
import { Login } from './components/Login';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'reports' | 'users' | 'user-stats'>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedModuleId, setSelectedModuleId] = useState<number | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogin = (userId: string) => {
    setLoggedInUser(userId);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser('');
    setCurrentPage('dashboard');
    setSelectedModuleId(null);
    setSelectedUserId(null);
  };

  const handleModuleSelect = (moduleId: number) => {
    setSelectedModuleId(moduleId);
  };

  const handleBackToModules = () => {
    setSelectedModuleId(null);
  };

  const handleUserSelect = (userId: number) => {
    setSelectedUserId(userId);
  };

  const handleBackToUsers = () => {
    setSelectedUserId(null);
  };

  const handleNavigate = (page: 'dashboard' | 'reports' | 'users' | 'user-stats') => {
    setCurrentPage(page);
    // Reset module selection when navigating away from dashboard
    if (page !== 'dashboard') {
      setSelectedModuleId(null);
    }
    // Reset user selection when navigating away from user-stats
    if (page !== 'user-stats') {
      setSelectedUserId(null);
    }
  };

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} darkMode={darkMode} setDarkMode={setDarkMode} />;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <div className="relative flex min-h-screen">
          <Sidebar 
            currentPage={currentPage} 
            onNavigate={handleNavigate}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            darkMode={darkMode}
          />
          
          <div className="flex-1 flex flex-col lg:ml-56">
            <Navbar 
              currentPage={currentPage}
              setSidebarOpen={setSidebarOpen}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              onLogout={handleLogout}
            />
            
            <main className="flex-1 p-3 md:p-4 lg:p-6 overflow-y-auto bg-gray-50 dark:bg-gray-800 transition-colors">
              {currentPage === 'dashboard' && (
                selectedModuleId ? (
                  <Dashboard moduleId={selectedModuleId} onBack={handleBackToModules} />
                ) : (
                  <ModuleGrid onModuleSelect={handleModuleSelect} />
                )
              )}
              {currentPage === 'user-stats' && (
                selectedUserId ? (
                  <UserDashboard userId={selectedUserId} onBack={handleBackToUsers} />
                ) : (
                  <UserStatsGrid onUserSelect={handleUserSelect} />
                )
              )}
              {currentPage === 'reports' && <Reports />}
              {currentPage === 'users' && <Users />}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}