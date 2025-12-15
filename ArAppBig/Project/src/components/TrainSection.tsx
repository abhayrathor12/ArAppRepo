import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PlayCircle, Clock, TrendingUp } from 'lucide-react';

const completionData = [
  { day: 'Mon', rate: 85 },
  { day: 'Tue', rate: 88 },
  { day: 'Wed', rate: 92 },
  { day: 'Thu', rate: 90 },
  { day: 'Fri', rate: 95 },
  { day: 'Sat', rate: 89 },
  { day: 'Sun', rate: 93 },
];

export function TrainSection() {
  return (
    <div className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-3 md:p-4 hover:border-gray-300 dark:hover:border-gray-600 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
            <PlayCircle className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm text-gray-900 dark:text-white text-[14px]">Train – Performance Overview</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Training video completion metrics</p>
          </div>
        </div>
       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4">
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-1.5">
            <PlayCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
            <p className="text-xs text-gray-600 dark:text-gray-400">Completed Training</p>
          </div>
          <p className="text-lg text-gray-900 dark:text-white">186 users</p>
          <p className="text-xs text-green-600 dark:text-green-400 mt-0.5">↑ 12% from last week</p>
        </div>

        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-1.5">
            <Clock className="w-4 h-4 text-[#203f78] dark:text-[#4a6fa5]" />
            <p className="text-xs text-gray-600 dark:text-gray-400">Avg. Time Spent</p>
          </div>
          <p className="text-lg text-gray-900 dark:text-white">24:32 min</p>
          <p className="text-xs text-[#203f78] dark:text-[#4a6fa5] mt-0.5">Optimal duration</p>
        </div>

        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-1.5">
            <TrendingUp className="w-4 h-4 text-[#203f78] dark:text-[#4a6fa5]" />
            <p className="text-xs text-gray-600 dark:text-gray-400">Completion Rate</p>
          </div>
          <p className="text-lg text-gray-900 dark:text-white">92.5%</p>
          <p className="text-xs text-[#203f78] dark:text-[#4a6fa5] mt-0.5">Excellent performance</p>
        </div>
      </div>

      {/* Completion Rate Chart */}
      <div className="p-3 md:p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <h4 className="text-gray-900 dark:text-white text-sm mb-3">Weekly Completion Rate Trend</h4>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={completionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="day" stroke="#6b7280" style={{ fontSize: '11px' }} />
            <YAxis stroke="#6b7280" style={{ fontSize: '11px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '12px',
              }}
            />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 3 }}
              activeDot={{ r: 5, stroke: '#10b981', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}