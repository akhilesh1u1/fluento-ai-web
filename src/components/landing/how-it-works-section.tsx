"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const steps = [
  {
    num: "01",
    title: "Speak with AI",
    description: "Start a conversation on any topic. The AI listens and responds naturally, just like a human tutor.",
  },
  {
    num: "02",
    title: "Get Instant Feedback",
    description: "Receive immediate corrections on your pronunciation, grammar, and vocabulary usage after every exchange.",
  },
  {
    num: "03",
    title: "Improve Every Day",
    description: "Track your progress over time and watch your fluency score increase as you build a daily habit.",
  },
];

export function HowItWorksSection() {
  const t = useTranslations('howItWorks');
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center text-3xl font-bold text-primary shadow-xl mb-8 relative">
                {step.num}
                <div className="absolute inset-0 rounded-full border-4 border-primary opacity-20 blur-md" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t(`steps.s${index + 1}_title`)}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                {t(`steps.s${index + 1}_desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
