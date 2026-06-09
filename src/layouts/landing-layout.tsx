import * as React from "react";
import { LandingNavbar } from "@/components/landing-navbar";

export function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col selection:bg-primary/30">
      <LandingNavbar />
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
