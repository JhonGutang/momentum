import * as React from "react";
import { Sparkles } from "lucide-react";

export default function DailyMotivation() {
  return (
    <div className="bg-white rounded-xl border border-muted px-7 py-7 w-full max-w-md shadow-sm flex flex-col items-center text-center">
      <h2 className="text-lg font-semibold mb-5 text-left w-full">Motivation</h2>
      <div className="flex items-center justify-center mb-6">
        <span
          className="w-14 h-14 flex items-center justify-center rounded-full"
          style={{
            background:
              "radial-gradient(circle at 33% 70%, #DA8FFF 0%, #F7C774 100%), #F2F5F9",
          }}
        >
          <Sparkles size={32} className="text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.05)]" />
        </span>
      </div>
      <p className="italic text-muted-foreground text-[16px] mb-2">
        "You are what you repeatedly do. Excellence, then, is not an act, but a habit."
      </p>
      <span className="text-xs text-muted-foreground">- Aristotle</span>
    </div>
  );
}
