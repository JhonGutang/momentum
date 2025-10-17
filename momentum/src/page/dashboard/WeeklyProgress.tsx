import * as React from "react";

const weeklyProgress = [
  {
    day: "Mon",
    progress: 5,
    total: 5,
  },
  {
    day: "Tue",
    progress: 4,
    total: 5,
  },
  {
    day: "Wed",
    progress: 3,
    total: 5,
  },
  {
    day: "Today",
    progress: 2,
    total: 5,
  },
];

function ProgressCircles({ filled, total }: { filled: number; total: number }) {
  return (
    <div className="flex gap-[6px]">
      {Array.from({ length: total }).map((_, idx) => (
        <span
          key={idx}
          className={
            "block w-3.5 h-3.5 rounded-full " +
            (idx < filled ? "bg-emerald-500" : "bg-gray-200")
          }
        />
      ))}
    </div>
  );
}

export default function WeeklyProgress() {
  return (
    <div className="bg-white rounded-xl border border-muted px-7 py-6 shadow-sm w-full max-w-xs">
      <h2 className="text-base font-semibold mb-6 text-foreground">Weekly Progress</h2>
      <div className="flex flex-col gap-3">
        {weeklyProgress.map((row) => (
          <div className="flex items-center justify-between" key={row.day}>
            <span
              className={
                "text-[15px] font-normal " +
                (row.day === "Today" ? "text-foreground" : "text-muted-foreground")
              }
            >
              {row.day}
            </span>
            <ProgressCircles filled={row.progress} total={row.total}/>
          </div>
        ))}
      </div>
    </div>
  );
}
