import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Target, Trophy, Clock, RotateCcw } from 'lucide-react';

const pieData = [
  { name: 'Pass', value: 182 },
  { name: 'Fail', value: 24 },
];

const COLORS = ['#203f78', '#ef4444'];

const leaderboard = [
  { name: 'Priya Sharma', score: 98.5, time: '12:34', attempts: 1, rank: 1 },
  { name: 'Rahul Singh', score: 96.2, time: '13:45', attempts: 1, rank: 2 },
  { name: 'Sneha Patel', score: 94.8, time: '14:20', attempts: 2, rank: 3 },
  { name: 'Vikram Mehta', score: 93.5, time: '15:10', attempts: 1, rank: 4 },
  { name: 'Anjali Gupta', score: 91.2, time: '16:05', attempts: 2, rank: 5 },
];

export function TestSection() {
  return (
    <div className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3 md:p-4 hover:border-gray-300 dark:hover:border-gray-600 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#203f78] dark:bg-[#4a6fa5] flex items-center justify-center flex-shrink-0">
            <Target className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm text-gray-900 dark:text-white">Test – Hands-on Assessment</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Performance evaluation results</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
        {/* Pass vs Fail Chart */}
        <div className="p-3 md:p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <h4 className="text-gray-900 dark:text-white text-sm mb-3">Pass vs Fail Distribution</h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#203f78]" />
              <span className="text-xs text-gray-600">Pass: 182</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="text-xs text-gray-600">Fail: 24</span>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="p-3 md:p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-gray-900 dark:text-white text-sm">Top Performers</h4>
            <Trophy className="w-4 h-4 text-yellow-600" />
          </div>
          <div className="space-y-2">
            {leaderboard.map((user) => (
              <div
                key={user.rank}
                className="flex items-center gap-2 md:gap-3 p-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-600 transition-all"
              >
                <div className={`w-6 h-6 rounded-md flex items-center justify-center text-xs flex-shrink-0 ${
                  user.rank === 1 ? 'bg-yellow-100 text-yellow-700' :
                  user.rank === 2 ? 'bg-gray-100 text-gray-700' :
                  user.rank === 3 ? 'bg-orange-100 text-orange-700' :
                  'bg-gray-50 text-gray-600'
                }`}>
                  #{user.rank}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-900 dark:text-white text-xs truncate">{user.name}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-0.5 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Target className="w-3 h-3" /> {user.score}%
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {user.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <RotateCcw className="w-3 h-3" /> {user.attempts}x
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}