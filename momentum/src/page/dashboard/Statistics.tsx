import * as React from "react";
import { CheckCircle2, Flame, Star, CalendarDays, BarChart, Trophy, Award } from "lucide-react";

const stats = [
  {
    icon: <CheckCircle2 className="text-green-400 bg-green-100 rounded-full p-1" size={24} />,
    value: "12",
    label: "Day Streak",
    badge: <Flame size={18} className="text-orange-400" />,
  },
  {
    icon: (
      <div className="bg-blue-100 rounded-full flex items-center justify-center w-6 h-6">
        <span className="text-blue-400 font-semibold text-sm">D</span>
      </div>
    ),
    value: "85%",
    label: "Completion Rate",
    badge: <Star size={18} className="text-yellow-400" />,
  },
  {
    icon: (
      <div className="bg-purple-100 rounded-full flex items-center justify-center w-6 h-6">
        <CalendarDays size={16} className="text-purple-400" />
      </div>
    ),
    value: "6/7",
    label: "Today's Progress",
    badge: <BarChart size={18} className="text-blue-400" />,
  },
  {
    icon: (
      <div className="bg-orange-100 rounded-full flex items-center justify-center w-6 h-6">
        <Trophy size={16} className="text-orange-400" />
      </div>
    ),
    value: "24",
    label: "Total Habits",
    badge: <Award size={18} className="text-yellow-400" />,
  },
];

export default function Statistics() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <div
          key={stat.label}
          className="flex flex-col gap-2 relative transition hover:shadow-md min-h-[120px] bg-white rounded-xl shadow-sm border border-muted px-6 py-5 w-full h-full"
        >
          {/* Badge icon, top-right */}
          <span className="absolute top-4 right-5">{stat.badge}</span>
          {/* Main icon top-left */}
          <div>{stat.icon}</div>
          {/* Value */}
          <div className="mt-4 text-lg font-bold text-foreground">{stat.value}</div>
          {/* Label */}
          <div className="text-xs text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
