"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import { useTranslations } from "next-intl";

const roadmapKeys = [
  { key: "beta", status: "completed" },
  { key: "android", status: "current" },
  { key: "ios", status: "upcoming" },
  { key: "advanced", status: "upcoming" },
];

export function RoadmapSection() {
  const t = useTranslations('roadmap');
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('description')}
          </p>
        </div>

        <div className="relative border-l border-muted ml-4 md:ml-8 space-y-12">
          {roadmapKeys.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[11px] md:-left-[15px] top-1 bg-background">
                {item.status === "completed" ? (
                  <CheckCircle2 className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                ) : item.status === "current" ? (
                  <div className="h-6 w-6 md:h-8 md:w-8 rounded-full border-4 border-primary bg-background relative">
                    <div className="absolute inset-0 m-auto h-2 w-2 md:h-3 md:w-3 rounded-full bg-primary animate-pulse" />
                  </div>
                ) : (
                  <Circle className="h-6 w-6 md:h-8 md:w-8 text-muted-foreground" />
                )}
              </div>
              <div className={`p-6 rounded-2xl border ${item.status === "current" ? "bg-primary/5 border-primary/20 shadow-sm" : "bg-card"}`}>
                <h3 className="text-xl font-bold mb-2 flex items-center gap-3">
                  {t(item.key as any)}
                  {item.status === "current" && (
                    <span className="text-xs font-semibold px-2 py-1 bg-primary text-primary-foreground rounded-full">
                      {t('androidBadge')}
                    </span>
                  )}
                </h3>
                <p className="text-muted-foreground">{t((item.key + 'Desc') as any)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
