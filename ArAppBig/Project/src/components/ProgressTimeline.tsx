import { CheckCircle, Circle, Clock } from 'lucide-react';

const timeline = [
  { stage: 'Training Video', status: 'complete', date: 'Nov 15' },
  { stage: 'Hands-on Test', status: 'complete', date: 'Nov 16' },
  { stage: 'Real Scenario', status: 'in-progress', date: 'Today' },
  { stage: 'Final Evaluation', status: 'pending', date: 'Nov 20' },
];

export function ProgressTimeline() {
  return (
    <div className="rounded-xl bg-white border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-4 h-4 text-purple-600" />
        <h3 className="text-sm text-gray-900">User Progress Timeline</h3>
      </div>

      <div className="space-y-3">
        {timeline.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            {/* Icon */}
            <div className="relative">
              {item.status === 'complete' ? (
                <div className="w-6 h-6 rounded-full bg-green-100 border-2 border-green-500 flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-green-600" />
                </div>
              ) : item.status === 'in-progress' ? (
                <div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-blue-500 flex items-center justify-center animate-pulse">
                  <Circle className="w-2.5 h-2.5 text-blue-600 fill-blue-600" />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center">
                  <Circle className="w-2.5 h-2.5 text-gray-400" />
                </div>
              )}
              {index < timeline.length - 1 && (
                <div className={`absolute left-1/2 top-6 w-0.5 h-6 -translate-x-1/2 ${
                  item.status === 'complete' ? 'bg-green-500' : 'bg-gray-300'
                }`} />
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className={`text-xs ${
                item.status === 'complete' ? 'text-gray-900' :
                item.status === 'in-progress' ? 'text-blue-700' :
                'text-gray-400'
              }`}>
                {item.stage}
              </p>
              <p className="text-xs text-gray-400">{item.date}</p>
            </div>

            {/* Status Badge */}
            {item.status === 'in-progress' && (
              <span className="px-2 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs">
                Active
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}