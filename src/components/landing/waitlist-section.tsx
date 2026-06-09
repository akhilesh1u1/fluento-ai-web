"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import { useTranslations } from "next-intl";

export function WaitlistSection() {
  const t = useTranslations('waitlist');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Add data to Firestore waitlist collection
      const docRef = await addDoc(collection(db, "waitlist"), {
        name: formData.name,
        email: formData.email,
        createdAt: serverTimestamp()
      });
      
      console.log("Document written with ID: ", docRef.id);
      setIsSubmitted(true);
      setFormData({ name: "", email: "" });

    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
      console.error("Waitlist error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 z-0" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-background/60 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 md:p-16 shadow-2xl text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.5]">
            {t('title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            {t('description')}
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary/10 border border-primary/30 rounded-2xl p-8 max-w-md mx-auto"
            >
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold mb-2">{t('successTitle')}</h3>
              <p className="text-muted-foreground">{t('successDesc')}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
              <Input
                type="text"
                name="name"
                placeholder={t('namePlaceholder')}
                value={formData.name}
                onChange={handleInputChange}
                required
                className="h-14 text-base bg-background/80 border-primary/20 focus-visible:ring-primary"
              />
              <Input
                type="email"
                name="email"
                placeholder={t('emailPlaceholder')}
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-14 text-base bg-background/80 border-primary/20 focus-visible:ring-primary"
              />
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
              <Button 
                type="submit" 
                size="lg" 
                disabled={isLoading}
                className="h-14 text-base w-full mt-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow disabled:opacity-50 whitespace-normal"
              >
                <span className="flex items-center justify-center gap-2">
                  {isLoading ? t('joiningBtn') : t('joinBtn')}
                  {!isLoading && <Send className="h-5 w-5" />}
                </span>
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
