'use client'

import * as React from "react";
import {
  LayoutDashboard,
  BarChart2,
  Calendar,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// If you later want to pull from config, use: import { APP_NAME } from "@/config/data";
const APP_NAME = "Momentum";

const sidebarItems = [
  {
    text: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    routeNames: ["/dashboard", "dashboard", "/", "/home"],
  },
  {
    text: "Analytics",
    icon: BarChart2,
    href: "/analytics",
    routeNames: ["/analytics", "analytics"],
  },
  {
    text: "Calendar",
    icon: Calendar,
    href: "/calendar",
    routeNames: ["/calendar", "calendar"],
  },
  {
    text: "Settings",
    icon: Settings,
    href: "/settings",
    routeNames: ["/settings", "settings"],
  },
];

type SidebarProps = {
  routeName: string;
};

export default function SidebarComponent({ routeName }: SidebarProps) {
  // Normalize route for matching
  const normalizedRoute =
    routeName === "/" || routeName === "home"
      ? "dashboard"
      : routeName.replace(/^\//, "");

  const router = useRouter();

  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <Sidebar className="h-screen w-[240px] border-r flex-shrink-0">
          <SidebarHeader>
            <div className="flex items-center gap-3 px-2 py-2">
              <div className="flex items-center justify-center w-8 h-8 rounded bg-muted border">
                <span className="text-xl text-primary">&#9679;</span>
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground">{APP_NAME}</span>
            </div>
          </SidebarHeader>
          <SidebarMenu>
            {sidebarItems.map((item) => {
              const isActive = item.routeNames.some((name) => {
                const itemNormalized =
                  name === "/" || name === "home"
                    ? "dashboard"
                    : name.replace(/^\//, "");
                return (
                  itemNormalized.toLowerCase() === normalizedRoute.toLowerCase()
                );
              });
              const Icon = item.icon;
              return (
                <li key={item.text}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={
                      "cursor-pointer w-full flex items-center justify-start px-4 py-2 gap-3 rounded transition-colors text-base"
                      + (isActive
                        ? " font-bold text-primary"
                        : " text-foreground")
                    }
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => router.push(item.href)}
                  >
                    <span className="flex-shrink-0"><Icon size={18} /></span>
                    <span>{item.text}</span>
                  </Button>
                </li>
              );
            })}
          </SidebarMenu>
          <SidebarFooter>
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
}
