import { MetricCard } from "./MetricCard";
import { TrainSection } from "./TrainSection";
import { TestSection } from "./TestSection";
import { EvaluateSection } from "./EvaluateSection";
import { RecentActivity } from "./RecentActivity";
import { ProgressTimeline } from "./ProgressTimeline";
import { VRPreview } from "./VRPreview";
import {
  Trophy,
  Clock,
  AlertTriangle,
  Users,
  ArrowLeft,
  BookOpen,
} from "lucide-react";

interface DashboardProps {
  moduleId: number;
  onBack: () => void;
}

export function Dashboard({ moduleId, onBack }: DashboardProps) {
  return (
    <div className="space-y-4">
      {/* Module Header */}
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-3 md:p-4 transition-colors">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
          </button>
          <div className="w-8 h-8 rounded-lg bg-[#203f78] dark:bg-[#4a6fa5] flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <div>
            <h2 className="text-gray-900 dark:text-white">Module {moduleId} Dashboard</h2>
            <p className="text-xs text-gray-600 dark:text-gray-400">Analytics and performance overview</p>
          </div>
        </div>
      </div>

      {/* Hero / Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <MetricCard
          title="Top Scorer"
          value="Priya Sharma"
          subtitle="98.5% accuracy"
          icon={Trophy}
          gradient="from-[#203f78] to-[#203f78]"
          iconColor="text-[#203f78]"
        />
        <MetricCard
          title="Fastest Completion"
          value="Rahul Singh"
          subtitle="12:34 minutes"
          icon={Clock}
          gradient="from-[#203f78] to-[#203f78]"
          iconColor="text-[#203f78]"
        />
        <MetricCard
          title="Most Failed Users"
          value="8 users"
          subtitle="Need attention"
          icon={AlertTriangle}
          gradient="from-red-500 to-pink-500"
          iconColor="text-red-600"
        />
        <MetricCard
          title="Total Participants"
          value="248"
          subtitle="Across all modes"
          icon={Users}
          gradient="from-[#203f78] to-[#203f78]"
          iconColor="text-[#203f78]"
        />
      </div>

      {/* AR/VR Training Sections */}
      <TrainSection />
      <TestSection />
      {/* <EvaluateSection /> */}
    </div>
  );
}