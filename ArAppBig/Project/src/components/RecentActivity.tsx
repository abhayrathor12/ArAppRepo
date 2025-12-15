import { Activity, PlayCircle, Target, CheckCircle, XCircle } from 'lucide-react';

const activities = [
  {
    id: 1,
    user: 'Priya Sharma',
    action: 'Completed Test Assessment',
    score: 98.5,
    time: '2 minutes ago',
    type: 'test',
    status: 'pass',
  },
  {
    id: 2,
    user: 'Rahul Singh',
    action: 'Finished Training Module',
    duration: '24:32',
    time: '15 minutes ago',
    type: 'train',
    status: 'complete',
  },
  {
    id: 3,
    user: 'Sneha Patel',
    action: 'Evaluated Real Scenario',
    score: 94.8,
    time: '32 minutes ago',
    type: 'evaluate',
    status: 'pass',
  },
  {
    id: 4,
    user: 'Vikram Mehta',
    action: 'Failed Test Assessment',
    score: 58.3,
    time: '1 hour ago',
    type: 'test',
    status: 'fail',
  },
  {
    id: 5,
    user: 'Anjali Gupta',
    action: 'Started Training Module',
    time: '1 hour ago',
    type: 'train',
    status: 'in-progress',
  },
];

export function RecentActivity() {
  return (
    <div className="rounded-xl bg-white border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-4 h-4 text-blue-600" />
        <h3 className="text-sm text-gray-900">Recent Training Activity</h3>
      </div>

      <div className="space-y-2">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all group"
          >
            {/* Icon */}
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              activity.type === 'train' ? 'bg-green-100' :
              activity.type === 'test' ? 'bg-blue-100' :
              'bg-purple-100'
            }`}>
              {activity.type === 'train' ? (
                <PlayCircle className="w-4 h-4 text-green-600" />
              ) : activity.type === 'test' ? (
                <Target className="w-4 h-4 text-blue-600" />
              ) : (
                <Activity className="w-4 h-4 text-purple-600" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <p className="text-gray-900 text-xs">{activity.user}</p>
                {activity.status === 'pass' && (
                  <CheckCircle className="w-3 h-3 text-green-600" />
                )}
                {activity.status === 'fail' && (
                  <XCircle className="w-3 h-3 text-red-600" />
                )}
              </div>
              <p className="text-xs text-gray-500">{activity.action}</p>
            </div>

            {/* Stats */}
            <div className="text-right">
              {activity.score && (
                <p className={`text-xs ${
                  activity.status === 'pass' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {activity.score}%
                </p>
              )}
              {activity.duration && (
                <p className="text-xs text-blue-600">{activity.duration}</p>
              )}
              <p className="text-xs text-gray-400">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}