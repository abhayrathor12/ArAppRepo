import { Search, Bell, User, Menu, LogOut, Sun, Moon } from "lucide-react";

interface NavbarProps {
  currentPage: "dashboard" | "reports" | "users" | "user-stats";
  setSidebarOpen: (open: boolean) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export function Navbar({ currentPage, setSidebarOpen, darkMode, setDarkMode }: NavbarProps) {
  const handleLogout = () => {
    // Add logout logic here
    alert('Logout functionality - This would redirect to login page');
  };

  return (
    <nav className="h-14 md:h-16 px-3 md:px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between transition-colors">
      {/* Left side - Mobile menu + Page Title */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        <div>
          <h2 className="text-gray-900 dark:text-white text-base md:text-lg">
            {currentPage === "dashboard"
              ? "Dashboard"
              : currentPage === "reports"
              ? "Reports"
              : currentPage === "user-stats"
              ? "User Stats"
              : "Users"}
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
            {currentPage === "dashboard"
              ? "Training analytics overview"
              : currentPage === "reports"
              ? "Detailed performance reports"
              : currentPage === "user-stats"
              ? "Individual user performance tracking"
              : "Manage users and access"}
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Search - Hidden on mobile */}
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-32 lg:w-48 pl-8 pr-3 py-1.5 text-sm rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#203f78] dark:focus:ring-[#4a6fa5] focus:border-[#203f78] dark:focus:border-[#4a6fa5] transition-all"
          />
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? (
            <Sun className="w-4 h-4 text-yellow-500" />
          ) : (
            <Moon className="w-4 h-4 text-gray-600" />
          )}
        </button>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-200 dark:hover:border-red-800 transition-all group"
          title="Logout"
        >
          <LogOut className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500" />
        </button>

        {/* User Profile */}
        <button className="flex items-center gap-2 pl-1.5 pr-2 md:pr-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all group">
          <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-[#203f78] dark:bg-[#4a6fa5] flex items-center justify-center">
            <User className="w-3 h-3 md:w-4 md:h-4 text-white" />
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs text-gray-900 dark:text-white">Amit Kumar</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
          </div>
        </button>
      </div>
    </nav>
  );
}