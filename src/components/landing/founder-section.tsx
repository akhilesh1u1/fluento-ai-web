"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function FounderSection() {
  const t = useTranslations('founder');
  return (
    <section id="founder" className="py-24 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Left Column - Founder Profile */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-32"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-6 shadow-2xl ring-1 ring-primary/10">
              <Image 
                src="/founder.jpeg" 
                alt="Akhilesh Prajapati - Founder of Fluento AI"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-1">Akhilesh Prajapati</h3>
              <p className="text-primary font-medium mb-6">{t('role')}</p>
              
              <a 
                href="https://www.linkedin.com/in/akhilesh1u-389769207" 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto shadow-md flex items-center gap-2")}
              >
                <LinkedinIcon className="w-5 h-5" />
                {t('connect')}
              </a>
            </div>
          </motion.div>

          {/* Right Column - Vision & Story */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 space-y-12"
          >
            {/* Vision Section */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  {t('visionTitle')}
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('visionP1')}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                {t('visionP2')}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                {t('visionP3')}
              </p>
            </div>

            {/* Mission Section */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  {t('missionTitle')}
                </span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('missionP1')}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                {t('missionP2')}
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                {t('missionP3')}
              </p>
            </div>

            {/* Founder's Thoughts Section */}
            <div className="prose prose-lg dark:prose-invert max-w-none bg-background rounded-3xl p-8 md:p-10 shadow-lg border border-primary/10 relative">
              <div className="absolute -top-4 -left-4 text-6xl text-primary/20 select-none">"</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                {t('thoughtsTitle')}
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t('thoughtsP1')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('thoughtsP2')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('thoughtsP3')}
                </p>
                <p className="text-foreground font-semibold text-xl">
                  {t('thoughtsP4')}
                </p>
                <p className="text-primary font-medium">
                  {t('thoughtsP5')}
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
