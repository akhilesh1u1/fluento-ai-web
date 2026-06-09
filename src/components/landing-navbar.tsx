"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Globe } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";

export function LandingNavbar() {
  const { setTheme, theme } = useTheme();
  const t = useTranslations('navbar');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/40">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight">{t('brand')}</span>
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSwitcher />
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button 
            className="rounded-full px-6 font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
            onClick={() => {
              document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t('joinWaitlist')}
          </Button>
        </div>
      </div>
    </header>
  );
}
