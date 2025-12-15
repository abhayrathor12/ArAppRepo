import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
}

export function MetricCard({ title, value, subtitle, icon: Icon, gradient, iconColor }: MetricCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-md">
      {/* Content */}
      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <p className="text-xs text-gray-600 dark:text-gray-400">{title}</p>
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} opacity-10 dark:opacity-20 flex items-center justify-center`}>
            <Icon className={`w-4 h-4 ${iconColor} dark:brightness-125`} />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg text-gray-900 dark:text-white mb-0.5">{value}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}