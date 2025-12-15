import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  Filter,
  Download,
  Calendar,
  FileText,
  TrendingUp,
} from "lucide-react";

const trendData = [
  { month: "Jan", pass: 98, fail: 30 },
  { month: "Feb", pass: 110, fail: 32 },
  { month: "Mar", pass: 125, fail: 31 },
  { month: "Apr", pass: 142, fail: 33 },
  { month: "May", pass: 155, fail: 31 },
  { month: "Jun", pass: 168, fail: 34 },
];

const sessions = [
  {
    id: "S-2024-156",
    user: "Priya Sharma",
    mode: "Evaluate",
    score: 98.5,
    date: "Nov 18, 2024",
    duration: "18:45",
    status: "Pass",
  },
  {
    id: "S-2024-155",
    user: "Rahul Singh",
    mode: "Evaluate",
    score: 96.2,
    date: "Nov 18, 2024",
    duration: "17:30",
    status: "Pass",
  },
  {
    id: "S-2024-154",
    user: "Sneha Patel",
    mode: "Evaluate",
    score: 94.8,
    date: "Nov 17, 2024",
    duration: "19:15",
    status: "Pass",
  },
  {
    id: "S-2024-153",
    user: "Vikram Mehta",
    mode: "Evaluate",
    score: 93.5,
    date: "Nov 17, 2024",
    duration: "20:10",
    status: "Pass",
  },
  {
    id: "S-2024-152",
    user: "Anjali Gupta",
    mode: "Evaluate",
    score: 91.2,
    date: "Nov 17, 2024",
    duration: "18:50",
    status: "Pass",
  },
  {
    id: "S-2024-151",
    user: "Kavya Reddy",
    mode: "Evaluate",
    score: 68.5,
    date: "Nov 16, 2024",
    duration: "16:45",
    status: "Fail",
  },
  {
    id: "S-2024-150",
    user: "Arjun Nair",
    mode: "Evaluate",
    score: 88.3,
    date: "Nov 16, 2024",
    duration: "21:20",
    status: "Pass",
  },
  {
    id: "S-2024-149",
    user: "Deepak Kumar",
    mode: "Evaluate",
    score: 92.7,
    date: "Nov 16, 2024",
    duration: "20:30",
    status: "Pass",
  },
];

export function Reports() {
  return (
    <div className="space-y-4">
      {/* Filters and Actions */}
      <div className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3 md:p-4 transition-colors">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#203f78] dark:text-[#4a6fa5]" />
            <h3 className="text-sm text-gray-900 dark:text-white">Filters</h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Date Filter */}
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
              <Calendar className="w-3.5 h-3.5" />
              <span>Last 30 Days</span>
            </button>

            {/* User Filter */}
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
              <Filter className="w-3.5 h-3.5" />
              <span>All Users</span>
            </button>

            {/* Mode Filter */}
            <select className="px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs">
              <option>All Modes</option>
              <option>Evaluate</option>
            </select>

            {/* Export Buttons */}
            <div className="flex items-center gap-2 pl-2 ml-auto lg:ml-2 lg:border-l border-gray-200 dark:border-gray-700">
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-[#203f78] dark:bg-[#4a6fa5] text-white">
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Export PDF</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-green-600 dark:bg-green-700 text-white">
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Export CSV</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trends Graph */}
      <div className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3 md:p-4 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#203f78] dark:text-[#4a6fa5]" />
            <div>
              <h3 className="text-sm text-gray-900 dark:text-white">
                Evaluate Performance Trends
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                6-month evaluation overview
              </p>
            </div>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="pass" fill="#4a6fa5" radius={[4, 4, 0, 0]} />
            <Bar dataKey="fail" fill="#203f78" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Table */}
      <div className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3 md:p-4 transition-colors">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-4 h-4 text-[#203f78] dark:text-[#4a6fa5]" />
          <div>
            <h3 className="text-sm text-gray-900 dark:text-white">Session History</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Detailed chronological records
            </p>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="overflow-x-auto hidden sm:block">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2.5 px-3 text-xs text-gray-600">Session ID</th>
                <th className="text-left py-2.5 px-3 text-xs text-gray-600">User</th>
                <th className="text-left py-2.5 px-3 text-xs text-gray-600">Mode</th>
                <th className="text-left py-2.5 px-3 text-xs text-gray-600">Score</th>
                <th className="text-left py-2.5 px-3 text-xs text-gray-600">Duration</th>
                <th className="text-left py-2.5 px-3 text-xs text-gray-600">Date</th>
                <th className="text-left py-2.5 px-3 text-xs text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="py-2.5 px-3 text-xs text-gray-600">{session.id}</td>
                  <td className="py-2.5 px-3 text-xs text-gray-900">{session.user}</td>
                  <td className="py-2.5 px-3">
                    <span className={`px-2 py-0.5 rounded-md text-xs ${
                      session.mode === "Train"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}>
                      {session.mode}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-xs">{session.score}%</td>
                  <td className="py-2.5 px-3 text-xs">{session.duration}</td>
                  <td className="py-2.5 px-3 text-xs">{session.date}</td>
                  <td className="py-2.5 px-3">
                    <span className={`px-2 py-0.5 rounded-md text-xs ${
                      session.status === "Pass"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                      {session.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden space-y-3">
          {sessions.map((session) => (
            <div key={session.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-gray-50 dark:bg-gray-800">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {session.id}
                </span>

                <span className={`px-2 py-0.5 rounded-md text-xs ${
                  session.status === "Pass"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}>
                  {session.status}
                </span>
              </div>

              <div className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <p><strong>User:</strong> {session.user}</p>
                <p><strong>Mode:</strong> {session.mode}</p>
                <p><strong>Score:</strong> {session.score}%</p>
                <p><strong>Duration:</strong> {session.duration}</p>
                <p><strong>Date:</strong> {session.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500">Showing 8 of 156 sessions</p>
          <div className="flex items-center gap-1.5">
            <button className="px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 border text-xs">Previous</button>
            <button className="px-3 py-1.5 rounded-lg bg-[#203f78] text-white text-xs">1</button>
            <button className="px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 border text-xs">2</button>
            <button className="px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 border text-xs">3</button>
            <button className="px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 border text-xs">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
