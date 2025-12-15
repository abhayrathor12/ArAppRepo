import { Play, Eye } from 'lucide-react';

export function VRPreview() {
  return (
    <div className="rounded-xl bg-white border border-gray-200 p-4 overflow-hidden group hover:border-gray-300 transition-all">
      <div className="flex items-center gap-2 mb-3">
        <Eye className="w-4 h-4 text-cyan-600" />
        <h3 className="text-sm text-gray-900">VR Simulation Preview</h3>
      </div>

      {/* 3D-style thumbnail */}
      <div className="relative aspect-video rounded-lg bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 border border-gray-200 overflow-hidden mb-3">
        {/* Simulated 3D grid background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom" />
        </div>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <Play className="w-6 h-6 text-white" />
          </div>
          <p className="text-gray-900 text-xs mt-2">Safety Protocol VR</p>
        </div>

        {/* Floating particles effect */}
        <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <div className="absolute top-6 right-4 w-1 h-1 rounded-full bg-blue-400 animate-pulse delay-75" />
        <div className="absolute bottom-4 left-6 w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse delay-150" />
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600">Duration</span>
          <span className="text-gray-900">18:45 min</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600">Difficulty</span>
          <span className="px-2 py-0.5 rounded-md bg-orange-50 text-orange-700 text-xs border border-orange-200">
            Intermediate
          </span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600">Completed by</span>
          <span className="text-gray-900">156 users</span>
        </div>
      </div>

      <button className="w-full mt-3 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs hover:shadow-md transition-all">
        Launch Simulation
      </button>
    </div>
  );
}
