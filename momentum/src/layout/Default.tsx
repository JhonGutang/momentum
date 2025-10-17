"use client";

import * as React from "react";
import SidebarComponent from "@/shared-components/Sidebar";
import { usePathname } from "next/navigation";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-row bg-background text-foreground">
      <SidebarComponent routeName={pathname || ""} />
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
