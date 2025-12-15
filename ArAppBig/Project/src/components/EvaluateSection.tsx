import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, AlertCircle, TrendingDown } from 'lucide-react';

const accuracyData = [
  { scenario: 'Safety Check', accuracy: 95 },
  { scenario: 'Equipment Setup', accuracy: 88 },
  { scenario: 'Emergency Response', accuracy: 82 },
  { scenario: 'Team Coordination', accuracy: 90 },
  { scenario: 'Technical Tasks', accuracy: 85 },
];

const mistakeHeatmap = [
  { area: 'Safety Protocols', frequency: 45, severity: 'high' },
  { area: 'Equipment Handling', frequency: 32, severity: 'medium' },
  { area: 'Time Management', frequency: 28, severity: 'medium' },
  { area: 'Communication', frequency: 18, severity: 'low' },
  { area: 'Documentation', frequency: 15, severity: 'low' },
];

const lowPerformers = [
  { name: 'Rohan Desai', accuracy: 65.2, scenarios: 'Safety, Equipment' },
  { name: 'Kavya Reddy', accuracy: 68.5, scenarios: 'Emergency Response' },
  { name: 'Arjun Nair', accuracy: 71.3, scenarios: 'Technical Tasks' },
];

export function EvaluateSection() {
  return (
    <div className="rounded-xl bg-white border border-gray-200 p-4 hover:border-gray-300 transition-all">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm text-gray-900">Evaluate – Real Scenario Performance</h3>
            <p className="text-xs text-gray-500">Live scenario execution analysis</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Accuracy Rate Chart */}
        <div className="lg:col-span-2 p-4 rounded-lg bg-gray-50 border border-gray-200">
          <h4 className="text-gray-900 text-sm mb-3">Accuracy Rate by Scenario</h4>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="scenario" stroke="#6b7280" style={{ fontSize: '11px' }} angle={-15} textAnchor="end" height={60} />
              <YAxis stroke="#6b7280" style={{ fontSize: '11px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
              />
              <Bar dataKey="accuracy" fill="url(#colorGradient)" radius={[6, 6, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Low Performers */}
        <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-gray-900 text-sm">Needs Improvement</h4>
            <TrendingDown className="w-4 h-4 text-red-600" />
          </div>
          <div className="space-y-2">
            {lowPerformers.map((user, index) => (
              <div key={index} className="p-2.5 rounded-lg bg-red-50 border border-red-200">
                <div className="flex items-start justify-between mb-1.5">
                  <p className="text-gray-900 text-xs">{user.name}</p>
                  <span className="text-red-600 text-xs">{user.accuracy}%</span>
                </div>
                <p className="text-xs text-gray-600">Weak areas: {user.scenarios}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mistake Heatmap */}
      <div className="mt-4 p-4 rounded-lg bg-gray-50 border border-gray-200">
        <div className="flex items-center gap-2 mb-3">
          <AlertCircle className="w-4 h-4 text-orange-600" />
          <h4 className="text-gray-900 text-sm">Common Mistake Heatmap</h4>
        </div>
        <div className="space-y-2.5">
          {mistakeHeatmap.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-gray-700">{item.area}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{item.frequency} occurrences</span>
                  <span className={`px-2 py-0.5 rounded-md text-xs ${
                    item.severity === 'high' ? 'bg-red-100 text-red-700 border border-red-200' :
                    item.severity === 'medium' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
                    'bg-green-100 text-green-700 border border-green-200'
                  }`}>
                    {item.severity}
                  </span>
                </div>
              </div>
              <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    item.severity === 'high' ? 'bg-gradient-to-r from-red-500 to-pink-500' :
                    item.severity === 'medium' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                    'bg-gradient-to-r from-green-500 to-emerald-500'
                  }`}
                  style={{ width: `${(item.frequency / 50) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}