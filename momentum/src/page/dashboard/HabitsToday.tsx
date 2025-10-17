import * as React from "react";
import { CheckCircle2, Droplet, BookOpen, Dumbbell, Hand, Sparkles } from "lucide-react";

type Habit = {
  name: string;
  description: string;
  status: "completed" | "progress" | "pending";
  extra?: React.ReactNode;
  rightStatus: React.ReactNode;
  rightIcon: React.ReactNode;
  highlighted?: boolean;
};

const habits: Habit[] = [
  {
    name: "Morning Meditation",
    description: "10 minutes of mindfulness",
    status: "completed",
    rightStatus: <span className="text-emerald-500 font-semibold">Completed</span>,
    rightIcon: <Sparkles size={18} className="ml-2 text-yellow-400" />,
    highlighted: false,
  },
  {
    name: "Drink 8 Glasses of Water",
    description: "Stay hydrated throughout the day",
    status: "progress",
    rightStatus: (
      <span className="font-semibold text-sky-500">
        8/8
      </span>
    ),
    rightIcon: <Droplet size={18} className="ml-2 text-sky-400" />,
    highlighted: true,
  },
  {
    name: "Read for 30 minutes",
    description: "Current book: Atomic Habits",
    status: "pending",
    rightStatus: <span className="text-muted-foreground">Pending</span>,
    rightIcon: <BookOpen size={18} className="ml-2 text-blue-200" />,
    highlighted: false,
  },
  {
    name: "Exercise",
    description: "30 minutes workout",
    status: "pending",
    rightStatus: <span className="text-muted-foreground">Pending</span>,
    rightIcon: <Dumbbell size={18} className="ml-2 text-orange-400" />,
    highlighted: false,
  },
  {
    name: "Practice Gratitude",
    description: "Write 3 things I'm grateful for",
    status: "pending",
    rightStatus: <span className="text-muted-foreground">Pending</span>,
    rightIcon: <Hand size={18} className="ml-2 text-yellow-400" />,
    highlighted: false,
  },
];

function getLeftCircle(habit: Habit) {
  if (habit.status === "completed" || habit.status === "progress") {
    return (
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 mr-3">
        <CheckCircle2 className="text-emerald-500" size={18} />
      </span>
    );
  }
  return (
    <span className="flex items-center justify-center w-6 h-6 rounded-full border border-muted-foreground/30 mr-3 bg-white">
      {/* Empty circle */}
      <span className="w-3 h-3 inline-block rounded-full bg-white"></span>
    </span>
  );
}

export default function HabitsToday() {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4">Today's Habits</h2>
      <div className="flex flex-col gap-3">
        {habits.map((habit, idx) => (
          <div
            key={habit.name}
            className={
              "flex items-start gap-3 bg-white rounded-xl border border-muted px-5 py-4 w-full min-h-[72px] transition " +
              (habit.highlighted ? "ring-2 ring-sky-100" : "") +
              (habit.status === "completed" ? " opacity-90" : "") +
              " hover:shadow-sm"
            }
          >
            {/* Left circle */}
            {getLeftCircle(habit)}
            {/* Content */}
            <div className="flex flex-col flex-1">
              <span className={
                "font-semibold text-foreground" +
                (habit.status === "completed" ? " line-through text-emerald-500" : "")
              }>
                {habit.name}
              </span>
              <span className="text-xs text-muted-foreground mt-[3px]">
                {habit.description}
              </span>
            </div>
            {/* Right status */}
            <div className="flex flex-col items-end min-w-[90px]">
              <span className="flex items-center gap-1 text-sm">
                {habit.rightStatus} {habit.rightIcon}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


