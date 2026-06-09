import { LandingLayout } from "@/layouts/landing-layout";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { AppPreviewSection } from "@/components/landing/app-preview-section";
import { RoadmapSection } from "@/components/landing/roadmap-section";
import { FaqSection } from "@/components/landing/faq-section";
import { WaitlistSection } from "@/components/landing/waitlist-section";
import { FooterSection } from "@/components/landing/footer";
import { FounderSection } from "@/components/landing/founder-section";

import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <LandingLayout>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AppPreviewSection />
      <RoadmapSection />
      <FounderSection />
      <FaqSection />
      <WaitlistSection />
      <FooterSection />
    </LandingLayout>
  );
}
