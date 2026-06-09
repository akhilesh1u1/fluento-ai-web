"use client";

import { motion } from "framer-motion";
import { Mic, Waves, FileText, CalendarDays, Route } from "lucide-react";
import { useTranslations } from "next-intl";

const features = [
  {
    title: "AI Voice Conversations",
    description: "Engage in natural, spoken conversations with an AI that understands context and nuance.",
    icon: Mic,
  },
  {
    title: "Pronunciation Improvement",
    description: "Get real-time feedback on your accent and pronunciation down to the phoneme level.",
    icon: Waves,
  },
  {
    title: "Grammar Correction",
    description: "Learn from your mistakes with gentle, contextual grammar corrections during your chats.",
    icon: FileText,
  },
  {
    title: "Daily Speaking Challenges",
    description: "Build a habit with bite-sized daily challenges designed to expand your vocabulary.",
    icon: CalendarDays,
  },
  {
    title: "Personalized Learning Path",
    description: "The AI adapts to your proficiency level and focuses on the areas where you need the most help.",
    icon: Route,
  },
];

export function FeaturesSection() {
  const t = useTranslations('features');
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-3xl p-8 border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t(`items.f${index + 1}_title`)}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`items.f${index + 1}_desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
