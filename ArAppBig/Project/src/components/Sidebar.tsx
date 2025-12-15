import {
  LayoutDashboard,
  FileText,
  Layers,
  Users,
  X,
  BarChart3,
} from "lucide-react";

interface SidebarProps {
  currentPage: "dashboard" | "reports" | "users" | "user-stats";
  onNavigate: (page: "dashboard" | "reports" | "users" | "user-stats") => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  darkMode: boolean;
}

export function Sidebar({
  currentPage,
  onNavigate,
  sidebarOpen,
  setSidebarOpen,
  darkMode,
}: SidebarProps) {
  const handleNavigate = (page: "dashboard" | "reports" | "users" | "user-stats") => {
    onNavigate(page);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 w-56 h-screen p-4 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden z-50 transition-all duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        {/* Logo */}
        <div className="mb-6 flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#203f78] dark:bg-[#4a6fa5] flex items-center justify-center shadow-sm">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <div>
            <h1 className="text-gray-900 dark:text-white text-sm">
              VR Analytics
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Training Platform
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          <button
            onClick={() => handleNavigate("dashboard")}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm ${
              currentPage === "dashboard"
                ? "bg-[#203f78]/10 dark:bg-[#4a6fa5]/20 text-[#203f78] dark:text-[#4a6fa5] border border-[#203f78]/20 dark:border-[#4a6fa5]/30"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
            {currentPage === "dashboard" && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#203f78] dark:bg-[#4a6fa5]" />
            )}
          </button>

          <button
            onClick={() => handleNavigate("user-stats")}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm ${
              currentPage === "user-stats"
                ? "bg-[#203f78]/10 dark:bg-[#4a6fa5]/20 text-[#203f78] dark:text-[#4a6fa5] border border-[#203f78]/20 dark:border-[#4a6fa5]/30"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>User Stats</span>
            {currentPage === "user-stats" && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#203f78] dark:bg-[#4a6fa5]" />
            )}
          </button>

          <button
            onClick={() => handleNavigate("reports")}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm ${
              currentPage === "reports"
                ? "bg-[#203f78]/10 dark:bg-[#4a6fa5]/20 text-[#203f78] dark:text-[#4a6fa5] border border-[#203f78]/20 dark:border-[#4a6fa5]/30"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Reports</span>
            {currentPage === "reports" && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#203f78] dark:bg-[#4a6fa5]" />
            )}
          </button>

          <button
            onClick={() => handleNavigate("users")}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all text-sm ${
              currentPage === "users"
                ? "bg-[#203f78]/10 dark:bg-[#4a6fa5]/20 text-[#203f78] dark:text-[#4a6fa5] border border-[#203f78]/20 dark:border-[#4a6fa5]/30"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Users</span>
            {currentPage === "users" && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#203f78] dark:bg-[#4a6fa5]" />
            )}
          </button>
        </nav>

        {/* Footer decoration */}
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="p-3 rounded-lg bg-[#203f78]/5 dark:bg-[#4a6fa5]/10 border border-[#203f78]/20 dark:border-[#4a6fa5]/30">
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Powered by AR/VR
            </p>
            <p className="text-xs text-[#203f78] dark:text-[#4a6fa5]">Version 2.0</p>
          </div>
        </div>
      </aside>
    </>
  );
}