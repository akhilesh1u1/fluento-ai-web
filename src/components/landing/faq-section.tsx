"use client";

import { Accordion } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function FaqSection() {
  const t = useTranslations('faq');

  const faqItems = [
    {
      question: t('q1'),
      answer: t('a1'),
    },
    {
      question: t('q2'),
      answer: t('a2'),
    },
    {
      question: t('q3'),
      answer: t('a3'),
    },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('description')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  );
}
