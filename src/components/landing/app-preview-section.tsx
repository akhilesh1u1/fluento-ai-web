"use client";

import { motion } from "framer-motion";
import { Mic, Send } from "lucide-react";
import { useTranslations } from "next-intl";

export function AppPreviewSection() {
  const t = useTranslations('appPreview');
  return (
    <section className="py-24 bg-muted/20 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 max-w-xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.5]">
              {t('title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t('description')}
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {t('bullet1')}
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {t('bullet2')}
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary" />
                {t('bullet3')}
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full flex justify-center"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-primary/20 rounded-full blur-[100px] z-0" />

            {/* Mobile Phone Mockup */}
            <div className="relative z-10 w-[300px] h-[600px] bg-card border-8 border-foreground/10 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col">
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
                <div className="w-32 h-6 bg-foreground/10 rounded-b-3xl" />
              </div>

              {/* App Header */}
              <div className="pt-10 pb-4 px-6 border-b bg-background/80 backdrop-blur-md">
                <div className="text-center font-bold">{t('phone.header')}</div>
                <div className="text-xs text-center text-primary">{t('phone.status')}</div>
              </div>

              {/* App Chat Area */}
              <div className="flex-1 p-4 flex flex-col gap-4 bg-muted/10 overflow-hidden relative">
                {/* Chat Bubbles */}
                <div className="self-start max-w-[80%] bg-muted rounded-2xl rounded-tl-sm p-3 text-sm">
                  {t('phone.msg1')}
                </div>
                <div className="self-end max-w-[80%] bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 text-sm">
                  {t('phone.msg2')}
                </div>
                <div className="self-start max-w-[80%] bg-muted rounded-2xl rounded-tl-sm p-3 text-sm relative">
                  {t('phone.msg3')}
                </div>
              </div>

              {/* App Input Area */}
              <div className="p-4 border-t bg-background">
                <div className="flex items-center gap-2 bg-muted rounded-full p-1 pl-4">
                  <div className="flex-1 text-sm text-muted-foreground">{t('phone.inputPlaceholder')}</div>
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground cursor-pointer">
                    <Mic className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements for aesthetics */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-20 -left-8 bg-background p-4 rounded-2xl shadow-xl border flex items-center gap-3 z-20"
            >
              <div className="text-2xl">🎉</div>
              <div>
                <div className="font-bold text-sm">{t('phone.scoreTitle')}</div>
                <div className="text-primary text-xs">{t('phone.scoreValue')}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
