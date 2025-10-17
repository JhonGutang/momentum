"use client";

import * as React from "react";
import DefaultLayout from "@/layout/Default";
import Statistics from "@/page/dashboard/Statistics";
import HabitsToday from "@/page/dashboard/HabitsToday";
import WeeklyProgress from "@/page/dashboard/WeeklyProgress";
import DailyMotivation from "@/page/dashboard/DailyMotivation";
export default function Home() {
  return (
    <DefaultLayout>
      <Statistics />
      <div className="flex mt-10 gap-8">
        <div style={{ flex: 1.7 }}>
          <HabitsToday />
        </div>
        <div className="flex flex-col gap-3" style={{ flex: 1 }}>
          <WeeklyProgress />
          <DailyMotivation/>
        </div>
      </div>
    </DefaultLayout>
  );
}
