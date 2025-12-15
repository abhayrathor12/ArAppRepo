import { useState } from "react";
import {
  User,
  TrendingUp,
  Award,
  Clock,
  CheckCircle2,
  Search,
} from "lucide-react";

interface UserData {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Trainee";
  avatar: string;
  modulesCompleted: number;
  totalModules: number;
  avgScore: number;
  totalTime: string;
  status: "excellent" | "good" | "needs-improvement";
}

const users: UserData[] = [
  {
    id: 1,
    name: "Amit Kumar",
    email: "amit.kumar@company.com",
    role: "Trainee",
    avatar: "AK",
    modulesCompleted: 18,
    totalModules: 20,
    avgScore: 92.5,
    totalTime: "8h 24m",
    status: "excellent",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@company.com",
    role: "Trainee",
    avatar: "PS",
    modulesCompleted: 20,
    totalModules: 20,
    avgScore: 95.8,
    totalTime: "7h 45m",
    status: "excellent",
  },
  {
    id: 3,
    name: "Rahul Singh",
    email: "rahul.singh@company.com",
    role: "Trainee",
    avatar: "RS",
    modulesCompleted: 19,
    totalModules: 20,
    avgScore: 89.3,
    totalTime: "9h 12m",
    status: "excellent",
  },
  {
    id: 4,
    name: "Vishal Patel",
    email: "vishal.patel@company.com",
    role: "Admin",
    avatar: "VP",
    modulesCompleted: 15,
    totalModules: 20,
    avgScore: 88.7,
    totalTime: "6h 32m",
    status: "good",
  },
  {
    id: 5,
    name: "Anjali Verma",
    email: "anjali.verma@company.com",
    role: "Trainee",
    avatar: "AV",
    modulesCompleted: 17,
    totalModules: 20,
    avgScore: 91.2,
    totalTime: "8h 15m",
    status: "excellent",
  },
  {
    id: 6,
    name: "Kiran Reddy",
    email: "kiran.reddy@company.com",
    role: "Trainee",
    avatar: "KR",
    modulesCompleted: 14,
    totalModules: 20,
    avgScore: 85.4,
    totalTime: "10h 20m",
    status: "good",
  },
  {
    id: 7,
    name: "Deepak Joshi",
    email: "deepak.joshi@company.com",
    role: "Trainee",
    avatar: "DJ",
    modulesCompleted: 12,
    totalModules: 20,
    avgScore: 78.9,
    totalTime: "11h 45m",
    status: "good",
  },
  {
    id: 8,
    name: "Sneha Gupta",
    email: "sneha.gupta@company.com",
    role: "Trainee",
    avatar: "SG",
    modulesCompleted: 16,
    totalModules: 20,
    avgScore: 90.6,
    totalTime: "7h 58m",
    status: "excellent",
  },
  {
    id: 9,
    name: "Rohan Kapoor",
    email: "rohan.kapoor@company.com",
    role: "Trainee",
    avatar: "RK",
    modulesCompleted: 10,
    totalModules: 20,
    avgScore: 75.2,
    totalTime: "12h 30m",
    status: "needs-improvement",
  },
  {
    id: 10,
    name: "Pooja Mehta",
    email: "pooja.mehta@company.com",
    role: "Trainee",
    avatar: "PM",
    modulesCompleted: 15,
    totalModules: 20,
    avgScore: 87.8,
    totalTime: "9h 05m",
    status: "good",
  },
  {
    id: 11,
    name: "Arjun Nair",
    email: "arjun.nair@company.com",
    role: "Trainee",
    avatar: "AN",
    modulesCompleted: 19,
    totalModules: 20,
    avgScore: 93.4,
    totalTime: "8h 10m",
    status: "excellent",
  },
  {
    id: 12,
    name: "Kavita Desai",
    email: "kavita.desai@company.com",
    role: "Trainee",
    avatar: "KD",
    modulesCompleted: 13,
    totalModules: 20,
    avgScore: 82.1,
    totalTime: "10h 45m",
    status: "good",
  },
  {
    id: 13,
    name: "Sanjay Iyer",
    email: "sanjay.iyer@company.com",
    role: "Trainee",
    avatar: "SI",
    modulesCompleted: 11,
    totalModules: 20,
    avgScore: 76.5,
    totalTime: "11h 20m",
    status: "needs-improvement",
  },
  {
    id: 14,
    name: "Neha Agarwal",
    email: "neha.agarwal@company.com",
    role: "Trainee",
    avatar: "NA",
    modulesCompleted: 18,
    totalModules: 20,
    avgScore: 91.9,
    totalTime: "8h 30m",
    status: "excellent",
  },
  {
    id: 15,
    name: "Vikram Malhotra",
    email: "vikram.malhotra@company.com",
    role: "Admin",
    avatar: "VM",
    modulesCompleted: 20,
    totalModules: 20,
    avgScore: 94.2,
    totalTime: "7h 50m",
    status: "excellent",
  },
  {
    id: 16,
    name: "Ritu Bhatt",
    email: "ritu.bhatt@company.com",
    role: "Trainee",
    avatar: "RB",
    modulesCompleted: 14,
    totalModules: 20,
    avgScore: 84.6,
    totalTime: "9h 40m",
    status: "good",
  },
  {
    id: 17,
    name: "Manish Rao",
    email: "manish.rao@company.com",
    role: "Trainee",
    avatar: "MR",
    modulesCompleted: 16,
    totalModules: 20,
    avgScore: 88.3,
    totalTime: "8h 55m",
    status: "good",
  },
  {
    id: 18,
    name: "Divya Saxena",
    email: "divya.saxena@company.com",
    role: "Trainee",
    avatar: "DS",
    modulesCompleted: 17,
    totalModules: 20,
    avgScore: 90.1,
    totalTime: "8h 20m",
    status: "excellent",
  },
  {
    id: 19,
    name: "Anil Chopra",
    email: "anil.chopra@company.com",
    role: "Trainee",
    avatar: "AC",
    modulesCompleted: 9,
    totalModules: 20,
    avgScore: 72.8,
    totalTime: "13h 15m",
    status: "needs-improvement",
  },
  {
    id: 20,
    name: "Swati Pandey",
    email: "swati.pandey@company.com",
    role: "Trainee",
    avatar: "SP",
    modulesCompleted: 15,
    totalModules: 20,
    avgScore: 86.9,
    totalTime: "9h 25m",
    status: "good",
  },
];


interface UserStatsGridProps {
  onUserSelect: (userId: number) => void;
}

export function UserStatsGrid({ onUserSelect }: UserStatsGridProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-100 text-green-700 border-green-200";
      case "good":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "needs-improvement":
        return "bg-orange-100 text-orange-700 border-orange-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

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

  // Filter users based on search term (case-insensitive)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
    {/* Title & Description */}
    <div className="flex-1 min-w-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
        User Statistics
      </h2>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
        Track individual user performance across all modules
      </p>
    </div>

    {/* Search Bar */}
    <div className="relative w-full sm:w-80 lg:w-96">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#203f78] focus:border-transparent transition"
      />
    </div>
  </div>
</div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        {filteredUsers.length === 0 ? (
          <div className="col-span-full text-center py-10 text-gray-500 dark:text-gray-400">
            No users found matching "{searchTerm}"
          </div>
        ) : (
          filteredUsers.map((user) => (
            <button
              key={user.id}
              onClick={() => onUserSelect(user.id)}
              className="group relative bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:border-[#203f78] dark:hover:border-[#4a6fa5] hover:shadow-lg transition-all duration-300 text-left"
            >
              {/* User Avatar & Info */}
              <div className="flex items-start gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl ${getAvatarColor(
                    user.status
                  )} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-medium">{user.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-900 dark:text-white font-medium truncate">
                    {user.name}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                    {user.email}
                  </p>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 mt-1">
                    {user.role}
                  </span>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-gray-600 dark:text-gray-400">
                    Modules Completed
                  </span>
                  <span className="text-gray-900 dark:text-white font-medium">
                    {user.modulesCompleted}/{user.totalModules}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-[#203f78] dark:bg-[#4a6fa5] h-2 rounded-full transition-all"
                    style={{
                      width: `${(user.modulesCompleted / user.totalModules) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                    <Award className="w-3.5 h-3.5" />
                    <span>Avg. Score</span>
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">
                    {user.avgScore}%
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Total Time</span>
                  </div>
                  <span className="text-gray-900 dark:text-white">
                    {user.totalTime}
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-md text-xs border font-medium ${getStatusColor(
                    user.status
                  )}`}
                >
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  {user.status === "excellent"
                    ? "Excellent"
                    : user.status === "good"
                      ? "Good"
                      : "Needs Improvement"}
                </span>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#203f78]/5 dark:from-[#4a6fa5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export { users };