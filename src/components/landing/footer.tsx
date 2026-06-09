import Link from "next/link";
import { Globe } from "lucide-react";
import { useTranslations } from "next-intl";

export function FooterSection() {
  const t = useTranslations('footer');
  return (
    <footer className="border-t bg-background pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl tracking-tight">Fluento AI</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              {t('description')}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="font-semibold mb-4">{t('supportedLanguages')}</h3>
            <div className="flex flex-wrap gap-2 max-w-sm justify-center md:justify-end">
              {['Hindi', 'Bhojpuri', 'Awadhi', 'Marathi', 'Gujarati', 'Kannada', 'Bengali', 'Tamil', 'Telugu', 'Malayalam'].map(lang => (
                <span key={lang} className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors cursor-default">
                  {lang}
                </span>
              ))}
            </div>
          </div>


        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground border-t pt-8">
          <p>{t('copyright')}</p>
          <div className="flex items-center gap-6">
            <div className="group relative">
              <span className="hover:text-primary transition-colors cursor-pointer">{t('privacy')}</span>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-background/95 backdrop-blur-sm border border-primary/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 text-xs text-muted-foreground pointer-events-none">
                <div className="font-semibold text-foreground mb-1">Privacy Policy</div>
                We only collect your name and email for the waitlist. Your data is secure and will never be shared with third parties.
                {/* Small triangle arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-background"></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-[9px] border-transparent border-t-primary/20 -z-10"></div>
              </div>
            </div>
            
            <div className="group relative">
              <span className="hover:text-primary transition-colors cursor-pointer">{t('terms')}</span>
              <div className="absolute bottom-full right-0 md:left-1/2 md:-translate-x-1/2 mb-3 w-64 p-4 bg-background/95 backdrop-blur-sm border border-primary/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 text-xs text-muted-foreground pointer-events-none">
                <div className="font-semibold text-foreground mb-1">Terms & Conditions</div>
                By joining the waitlist, you agree to receive email updates about our launch. Fluento AI is currently in beta.
                {/* Small triangle arrow */}
                <div className="absolute top-full right-4 md:left-1/2 md:-translate-x-1/2 border-8 border-transparent border-t-background"></div>
                <div className="absolute top-full right-[15px] md:left-1/2 md:-translate-x-1/2 border-[9px] border-transparent border-t-primary/20 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
