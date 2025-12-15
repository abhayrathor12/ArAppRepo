import {
  ArrowLeft,
  Award,
  Clock,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Target,
  AlertTriangle,
  BookOpen,
} from "lucide-react";
import { users } from "./UserStatsGrid";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

interface UserDashboardProps {
  userId: number;
  onBack: () => void;
}

export function UserDashboard({
  userId,
  onBack,
}: UserDashboardProps) {
  const user = users.find((u) => u.id === userId);

  if (!user) return null;

  // Mock data for user performance across modules
  const modulePerformance = [
    { module: "M1", score: 95, time: 28 },
    { module: "M2", score: 92, time: 25 },
    { module: "M3", score: 88, time: 30 },
    { module: "M4", score: 94, time: 24 },
    { module: "M5", score: 90, time: 27 },
    { module: "M6", score: 91, time: 26 },
    { module: "M7", score: 93, time: 23 },
    { module: "M8", score: 89, time: 29 },
    { module: "M9", score: 96, time: 22 },
    { module: "M10", score: 92, time: 25 },
  ];

  const progressData = [
    { week: "Week 1", completed: 2 },
    { week: "Week 2", completed: 5 },
    { week: "Week 3", completed: 8 },
    { week: "Week 4", completed: 12 },
    { week: "Week 5", completed: 15 },
    { week: "Week 6", completed: 18 },
  ];

  const statusData = [
    {
      name: "Passed",
      value: user.modulesCompleted,
      color: "#22c55e",
    },
    { name: "Failed", value: 2, color: "#ef4444" },
    {
      name: "Pending",
      value: user.totalModules - user.modulesCompleted,
      color: "#f59e0b",
    },
  ];

  const recentActivity = [
    {
      module: "Module 18",
      status: "passed",
      score: 94,
      date: "2 hours ago",
    },
    {
      module: "Module 17",
      status: "passed",
      score: 89,
      date: "1 day ago",
    },
    {
      module: "Module 16",
      status: "passed",
      score: 92,
      date: "2 days ago",
    },
    {
      module: "Module 15",
      status: "failed",
      score: 68,
      date: "3 days ago",
    },
    {
      module: "Module 14",
      status: "passed",
      score: 91,
      date: "4 days ago",
    },
  ];

  const getAvatarColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-500";
      case "good":
        return "bg-[#203f78]";
      case "needs-improvement":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-4">
      {/* Header with User Info */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 md:p-6 transition-colors">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors flex-shrink-0"
          >
            <ArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
          <div
            className={`w-14 h-14 rounded-xl ${getAvatarColor(user.status)} flex items-center justify-center flex-shrink-0`}
          >
            <span className="text-white text-lg">
              {user.avatar}
            </span>
          </div>
          <div className="flex-1">
            <h1 className="text-gray-900 dark:text-white">{user.name}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {user.email}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                {user.role}
              </span>
              <span
                className={`inline-flex items-center px-2 py-1 rounded-md text-xs border ${
                  user.status === "excellent"
                    ? "bg-green-100 text-green-700 border-green-200"
                    : user.status === "good"
                      ? "bg-blue-100 text-blue-700 border-blue-200"
                      : "bg-orange-100 text-orange-700 border-orange-200"
                }`}
              >
                {user.status === "excellent"
                  ? "Excellent Performance"
                  : user.status === "good"
                    ? "Good Performance"
                    : "Needs Improvement"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#203f78]/10 dark:bg-[#4a6fa5]/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-[#203f78] dark:text-[#4a6fa5]" />
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Modules Completed
              </p>
              <p className="text-gray-900 dark:text-white">
                {user.modulesCompleted}/{user.totalModules}
              </p>
            </div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-[#203f78] dark:bg-[#4a6fa5] h-2 rounded-full"
                style={{
                  width: `${(user.modulesCompleted / user.totalModules) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <Award className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Average Score
              </p>
              <p className="text-gray-900 dark:text-white">{user.avgScore}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Total Time Spent
              </p>
              <p className="text-gray-900 dark:text-white">{user.totalTime}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <XCircle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Failed Modules
              </p>
              <p className="text-gray-900 dark:text-white">2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
        {/* Performance Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 md:p-6 transition-colors">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#203f78]" />
            <h2 className="text-gray-900 dark:text-white">
              Module Performance
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={modulePerformance}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f0f0f0"
              />
              <XAxis dataKey="module" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Bar
                dataKey="score"
                fill="#203f78"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Progress Over Time */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 md:p-6 transition-colors">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-[#203f78]" />
            <h2 className="text-gray-900 dark:text-white">Progress Timeline</h2>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={progressData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f0f0f0"
              />
              <XAxis dataKey="week" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="completed"
                stroke="#203f78"
                strokeWidth={2}
                dot={{ fill: "#203f78", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Module Status & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
        {/* Module Status Pie Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 md:p-6 transition-colors">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-[#203f78]" />
            <h2 className="text-gray-900 dark:text-white">
              Module Status Overview
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4">
            {statusData.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  {item.name}: {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 md:p-6 transition-colors">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-[#203f78]" />
            <h2 className="text-gray-900 dark:text-white">Recent Activity</h2>
          </div>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      activity.status === "passed"
                        ? "bg-green-100"
                        : "bg-red-100"
                    }`}
                  >
                    {activity.status === "passed" ? (
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">
                      {activity.module}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {activity.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm ${activity.status === "passed" ? "text-green-600" : "text-red-600"}`}
                  >
                    {activity.score}%
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                    {activity.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strengths & Weaknesses */}
    </div>
  );
}