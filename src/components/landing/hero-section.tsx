"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations('hero');
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-16 lg:pt-40 lg:pb-24">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute -top-[20%] left-[20%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] opacity-50 dark:opacity-20" />
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[100px] opacity-50 dark:opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-background/50 backdrop-blur-sm border-primary/20 text-primary mb-8"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          {t('badge')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.5]"
        >
          {t('title')}{" "}
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 px-2 py-3">
            {t('titleHighlight')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10"
        >
          {t('description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="h-14 px-8 text-lg rounded-full w-full sm:w-auto group shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all"
            onClick={() => {
              document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {t('joinWaitlistBtn')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
