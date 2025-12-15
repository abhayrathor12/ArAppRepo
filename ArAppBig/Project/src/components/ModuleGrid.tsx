import { BookOpen, Users, Clock, TrendingUp, ChevronRight } from 'lucide-react';

interface Module {
  id: number;
  name: string;
  participants: number;
  completionRate: number;
  avgTime: string;
  status: 'active' | 'completed' | 'upcoming';
}

const modules: Module[] = [
  { id: 1, name: 'Module 1', participants: 248, completionRate: 92.5, avgTime: '24:32', status: 'active' },
  { id: 2, name: 'Module 2', participants: 235, completionRate: 88.3, avgTime: '22:15', status: 'active' },
  { id: 3, name: 'Module 3', participants: 221, completionRate: 85.7, avgTime: '26:40', status: 'active' },
  { id: 4, name: 'Module 4', participants: 198, completionRate: 90.1, avgTime: '23:50', status: 'active' },
  { id: 5, name: 'Module 5', participants: 186, completionRate: 87.4, avgTime: '25:20', status: 'active' },
  { id: 6, name: 'Module 6', participants: 175, completionRate: 89.6, avgTime: '24:10', status: 'active' },
  { id: 7, name: 'Module 7', participants: 162, completionRate: 91.2, avgTime: '22:45', status: 'active' },
  { id: 8, name: 'Module 8', participants: 154, completionRate: 86.8, avgTime: '27:30', status: 'active' },
  { id: 9, name: 'Module 9', participants: 142, completionRate: 88.9, avgTime: '23:20', status: 'active' },
  { id: 10, name: 'Module 10', participants: 135, completionRate: 90.5, avgTime: '24:55', status: 'active' },
  { id: 11, name: 'Module 11', participants: 128, completionRate: 87.2, avgTime: '26:10', status: 'active' },
  { id: 12, name: 'Module 12', participants: 115, completionRate: 89.3, avgTime: '25:40', status: 'active' },
  { id: 13, name: 'Module 13', participants: 108, completionRate: 91.8, avgTime: '23:15', status: 'active' },
  { id: 14, name: 'Module 14', participants: 95, completionRate: 86.5, avgTime: '28:20', status: 'active' },
  { id: 15, name: 'Module 15', participants: 88, completionRate: 88.1, avgTime: '24:30', status: 'active' },
  { id: 16, name: 'Module 16', participants: 76, completionRate: 90.7, avgTime: '22:50', status: 'active' },
  { id: 17, name: 'Module 17', participants: 64, completionRate: 85.9, avgTime: '27:10', status: 'active' },
  { id: 18, name: 'Module 18', participants: 52, completionRate: 89.4, avgTime: '25:05', status: 'active' },
  { id: 19, name: 'Module 19', participants: 38, completionRate: 87.6, avgTime: '26:35', status: 'upcoming' },
  { id: 20, name: 'Module 20', participants: 24, completionRate: 91.1, avgTime: '23:45', status: 'upcoming' },
];

interface ModuleGridProps {
  onModuleSelect: (moduleId: number) => void;
}

export function ModuleGrid({ onModuleSelect }: ModuleGridProps) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 md:p-6 transition-colors">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-[#203f78] dark:bg-[#4a6fa5] flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-gray-900 dark:text-white">Training Modules</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Select a module to view detailed analytics</p>
          </div>
        </div>
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        {modules.map((module) => (
          <button
            key={module.id}
            onClick={() => onModuleSelect(module.id)}
            className="group relative bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:border-[#203f78] dark:hover:border-[#4a6fa5] hover:shadow-lg transition-all duration-300 text-left"
          >
            {/* Status Badge */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#203f78]/10 dark:bg-[#4a6fa5]/20 flex items-center justify-center group-hover:bg-[#203f78] dark:group-hover:bg-[#4a6fa5] transition-colors">
                  <BookOpen className="w-4 h-4 text-[#203f78] dark:text-[#4a6fa5] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-gray-900 dark:text-white">{module.name}</h3>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-[#203f78] dark:group-hover:text-[#4a6fa5] group-hover:translate-x-1 transition-all" />
            </div>

            {/* Module Stats */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                  <Users className="w-3.5 h-3.5" />
                  <span>Participants</span>
                </div>
                <span className="text-gray-900 dark:text-white">{module.participants}</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Completion</span>
                </div>
                <span className="text-gray-900 dark:text-white">{module.completionRate}%</span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Avg. Time</span>
                </div>
                <span className="text-gray-900 dark:text-white">{module.avgTime}</span>
              </div>
            </div>

            {/* Status Badge */}
            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
              <span
                className={`inline-flex items-center px-2 py-1 rounded-md text-xs ${
                  module.status === 'active'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
                    : module.status === 'completed'
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                    : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                    module.status === 'active'
                      ? 'bg-green-500'
                      : module.status === 'completed'
                      ? 'bg-gray-500'
                      : 'bg-orange-500'
                  }`}
                />
                {module.status === 'active' ? 'Active' : module.status === 'completed' ? 'Completed' : 'Upcoming'}
              </span>
            </div>

            {/* Hover Effect Gradient */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#203f78]/5 dark:from-[#4a6fa5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Total Modules</p>
              <p className="text-gray-900 dark:text-white">20 Modules</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#203f78]/10 dark:bg-[#4a6fa5]/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#203f78] dark:text-[#4a6fa5]" />
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Total Participants</p>
              <p className="text-gray-900 dark:text-white">2,844 Users</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Avg. Completion</p>
              <p className="text-gray-900 dark:text-white">88.7%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}