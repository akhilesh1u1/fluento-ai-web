const fs = require('fs');
const path = require('path');

const locales = ['en', 'hi', 'bho', 'har', 'awa', 'mai', 'mag', 'bn', 'pa', 'mr', 'gu', 'ta', 'te', 'kn', 'ml'];

const baseTranslations = {
  metadata: {
    title: "Fluento AI - Your Personal English Tutor",
    description: "Master English speaking with AI conversations, real-time feedback, and daily challenges. Join the waitlist today."
  },
  navbar: {
    brand: "Fluento AI",
    joinWaitlist: "Join Waitlist"
  },
  hero: {
    badge: "Early Access Launching Soon",
    title: "Speak English Confidently",
    titleHighlight: "Anytime, Anywhere",
    description: "Master English speaking with AI-powered conversations, real-time feedback, and daily challenges. Your personal language tutor in your pocket.",
    joinWaitlistBtn: "Join the Waitlist"
  },
  features: {
    badge: "Features",
    title: "Why choose Fluento AI?",
    description: "Everything you need to master English speaking, built into one intelligent platform."
  },
  waitlist: {
    title: "Ready to speak fluently?",
    description: "Join the waitlist today to secure your early access spot and lock in exclusive launch pricing.",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email address",
    joiningBtn: "Joining...",
    joinBtn: "Join the Waitlist",
    successTitle: "You're on the list!",
    successDesc: "Keep an eye on your inbox. We'll notify you as soon as your spot is ready.",
    errorGeneric: "Something went wrong. Please try again."
  },
  founder: {
    role: "Founder, Fluento AI",
    connect: "Connect on LinkedIn",
    visionTitle: "Our Vision",
    missionTitle: "Our Mission",
    thoughtsTitle: "Founder's Thoughts"
  },
  footer: {
    copyright: "© 2026 Fluento AI. All rights reserved."
  }
};

// Simplified translation dictionary for demo/stubs
const dict = {
  hi: {
    "Join Waitlist": "प्रतीक्षा सूची में शामिल हों",
    "Speak English Confidently": "आत्मविश्वास के साथ अंग्रेजी बोलें",
    "Anytime, Anywhere": "कभी भी, कहीं भी",
    "Ready to speak fluently?": "क्या आप धाराप्रवाह बोलने के लिए तैयार हैं?"
  },
  bn: {
    "Join Waitlist": "অপেক্ষমাণ তালিকায় যোগ দিন",
    "Speak English Confidently": "আত্মবিশ্বাসের সাথে ইংরেজি বলুন"
  }
};

const messagesDir = path.join(__dirname, 'messages');
if (!fs.existsSync(messagesDir)) {
  fs.mkdirSync(messagesDir);
}

function translateValue(val, lang) {
  if (typeof val === 'string') {
    if (dict[lang] && dict[lang][val]) return dict[lang][val];
    // For unsupported dialects, fallback to basic text with language prefix to prove it works
    return lang !== 'en' ? `[${lang.toUpperCase()}] ${val}` : val;
  }
  
  if (typeof val === 'object') {
    const res = {};
    for (const key in val) {
      res[key] = translateValue(val[key], lang);
    }
    return res;
  }
  return val;
}

locales.forEach(locale => {
  const translations = translateValue(baseTranslations, locale);
  fs.writeFileSync(
    path.join(messagesDir, `${locale}.json`),
    JSON.stringify(translations, null, 2)
  );
});

console.log('Generated 15 translation files successfully in /messages');
