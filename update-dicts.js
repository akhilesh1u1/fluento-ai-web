const fs = require('fs');
const path = require('path');

const locales = ['en', 'hi', 'bho', 'har', 'awa', 'mai', 'mag', 'bn', 'pa', 'mr', 'gu', 'ta', 'te', 'kn', 'ml'];

const enExt = {
  features: {
    badge: "Features",
    title: "Everything you need to become fluent",
    description: "Our comprehensive suite of tools ensures you get the practice and feedback required to speak English confidently.",
    items: {
      f1_title: "AI Voice Conversations",
      f1_desc: "Engage in natural, spoken conversations with an AI that understands context and nuance.",
      f2_title: "Pronunciation Improvement",
      f2_desc: "Get real-time feedback on your accent and pronunciation down to the phoneme level.",
      f3_title: "Grammar Correction",
      f3_desc: "Learn from your mistakes with gentle, contextual grammar corrections during your chats.",
      f4_title: "Daily Speaking Challenges",
      f4_desc: "Build a habit with bite-sized daily challenges designed to expand your vocabulary.",
      f5_title: "Personalized Learning Path",
      f5_desc: "The AI adapts to your proficiency level and focuses on the areas where you need the most help."
    }
  },
  howItWorks: {
    title: "How Fluento AI works",
    description: "A simple, effective process designed to get you speaking from day one.",
    steps: {
      s1_title: "Speak with AI",
      s1_desc: "Start a conversation on any topic. The AI listens and responds naturally, just like a human tutor.",
      s2_title: "Get Instant Feedback",
      s2_desc: "Receive immediate corrections on your pronunciation, grammar, and vocabulary usage after every exchange.",
      s3_title: "Improve Every Day",
      s3_desc: "Track your progress over time and watch your fluency score increase as you build a daily habit."
    }
  },
  appPreview: {
    title: "Experience the future of language learning",
    description: "Fluento AI wraps advanced language models into an intuitive, beautiful interface that makes daily practice feel like a chat with a friend.",
    bullet1: "Sleek, distraction-free design",
    bullet2: "Dark mode optimized for late-night sessions",
    bullet3: "Fluid animations and real-time voice waveforms",
    phone: {
      header: "Fluento AI Coach",
      status: "Online",
      msg1: "Hi! Ready for today's English practice? Let's talk about your weekend.",
      msg2: "Yes! I went to the park and read a book.",
      msg3: "That sounds lovely! Small tip: you could say \"I went to the park and read a book.\" The pronunciation of \"read\" in past tense is like the color \"red.\"",
      inputPlaceholder: "Type a message...",
      scoreTitle: "Fluency Score",
      scoreValue: "+15 pts today"
    }
  },
  roadmap: {
    title: "The Journey Ahead",
    description: "We are working hard to bring Fluento AI to everyone. Here is our plan.",
    beta: "Beta Release",
    betaDesc: "Early access for waitlist members to test core conversational features.",
    android: "Android Launch",
    androidBadge: "Up Next",
    androidDesc: "Official release on the Google Play Store with full speaking challenges.",
    ios: "iOS Launch",
    iosDesc: "Coming to the App Store with seamless Apple ecosystem integration.",
    advanced: "Advanced AI Features",
    advancedDesc: "Real-time accent adjustment, specialized vocabulary packs, and more."
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Got questions? We've got answers.",
    q1: "Is Fluento AI free?",
    a1: "The core conversational features will have a free tier. We will also offer a premium plan for advanced features and unlimited speaking time.",
    q2: "When will it launch?",
    a2: "We are currently in beta testing. Join the waitlist to get early access!",
    q3: "Which languages are supported?",
    a3: "Fluento AI focuses on teaching English, but you can converse and receive explanations in Hindi, Bengali, Marathi, Bhojpuri, and many other regional Indian languages."
  },
  founder: {
    role: "Founder, Fluento AI",
    connect: "Connect on LinkedIn",
    visionTitle: "Our Vision",
    missionTitle: "Our Mission",
    thoughtsTitle: "Founder's Thoughts",
    visionP1: "At Fluento AI, we envision a future where language is never a barrier to learning, communication, or opportunity.",
    visionP2: "India is home to hundreds of languages and diverse cultures. We believe every learner should be able to start their learning journey in the language they are most comfortable with and gradually build confidence in English and other global communication skills.",
    visionP3: "Our vision is to create India's most inclusive AI-powered learning platform, supporting learners across multiple Indian languages while helping them connect with a world of opportunities.",
    missionP1: "Our mission is to provide personalized AI-driven learning experiences that adapt to each learner's language, pace, and goals.",
    missionP2: "Through intelligent conversations, speaking practice, grammar improvement, vocabulary building, and progress tracking, Fluento AI aims to make learning accessible to students from every corner of India.",
    missionP3: "We are committed to building a platform that respects linguistic diversity while empowering learners to communicate confidently in a connected world.",
    thoughtsP1: "India's strength lies in its diversity. Millions of talented students have great ideas and abilities, but language barriers often limit their confidence and opportunities.",
    thoughtsP2: "Fluento AI was created with a simple belief: learning should begin in the language people understand best.",
    thoughtsP3: "Our goal is not only to teach English but also to build a bridge between local languages and global opportunities. Whether a learner speaks Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Punjabi, Kannada, Malayalam, Odia, Assamese, or any other Indian language, they should feel welcomed and supported.",
    thoughtsP4: "Technology should adapt to people, not force people to adapt to technology.",
    thoughtsP5: "That is the future we are building with Fluento AI."
  },
  footer: {
    copyright: "© 2026 Fluento AI. All rights reserved.",
    description: "Your personal AI English tutor, available 24/7 to help you speak with confidence.",
    contact: "Contact",
    privacy: "Privacy Policy",
    terms: "Terms of Service"
  }
};

const bhoExt = {
  features: {
    badge: "खूबी",
    title: "Fluento AI काहे चुनीं?",
    description: "अंग्रेजी बोले में महारत हासिल करे खातिर रउरा जे भी चाहीं, सब एकही चतुर प्लेटफॉर्म में बा।",
    items: {
      f1_title: "AI वॉइस कन्वर्सेशन",
      f1_desc: "एगो अइसन AI के संगे बातचीत करीं जे संदर्भ आ बारीकी के समझेला।",
      f2_title: "उच्चारण में सुधार",
      f2_desc: "अपन एक्सेंट आ उच्चारण प रीयल-टाइम फीडबैक पाईं।",
      f3_title: "ग्रामर (व्याकरण) सुधार",
      f3_desc: "चैट के दौरान संदर्भ के अनुसार ग्रामर के सुधार से आपन गलती से सीखीं।",
      f4_title: "रोज बोले के चुनौती",
      f4_desc: "शब्दावली बढ़ावे खातिर बनावल गइल छोट-छोट रोज के चुनौती से आदत डालीं।",
      f5_title: "रउरा हिसाब से सीखे के तरीका",
      f5_desc: "AI रउरा लेवल के हिसाब से ढल जाला आ ओही प ध्यान देला जहवां रउरा सबसे बेसी मदद के जरूरत बा।"
    }
  },
  howItWorks: {
    title: "Fluento AI कइसे काम करेला",
    description: "एगो सरल आ असरदार तरीका जे रउरा के पहिलका दिन से ही बोले के आदत डाल देला।",
    steps: {
      s1_title: "AI के संगे बात करीं",
      s1_desc: "कवनो भी विषय प बातचीत शुरू करीं। AI इंसान नियर सुनता आ जवाब देला।",
      s2_title: "तुरंत फीडबैक पाईं",
      s2_desc: "हर बातचीत के बाद आपन उच्चारण, ग्रामर आ शब्दावली प तुरंत सुधार पाईं।",
      s3_title: "हर दिन बेहतर बनीं",
      s3_desc: "आपन प्रोग्रेस देखीं आ जइसे-जइसे रउरा रोज अभ्यास करब, आपन फ्लुएंसी स्कोर बढ़त देखीं।"
    }
  },
  appPreview: {
    title: "भाषा सीखे के भविष्य के अनुभव करीं",
    description: "Fluento AI एडवांस्ड लैंग्वेज मॉडल्स के एगो सुंदर इंटरफेस में समेट देले बा, जवना से रोज के प्रैक्टिस अइसन लागेला जइसे दोस्त से बतियावत होखीं।",
    bullet1: "सुंदर आ बिना डिस्ट्रेक्शन वाला डिज़ाइन",
    bullet2: "रात में सीखे खातिर डार्क मोड",
    bullet3: "स्मूथ एनिमेशन आ रीयल-टाइम वॉइस वेवफॉर्म",
    phone: {
      header: "Fluento AI कोच",
      status: "ऑनलाइन",
      msg1: "नमस्ते! का रउवा आज के अंग्रेजी अभ्यास खातिर तैयार बानी? रउरा सप्ताहांत (weekend) के बारे में बात कइल जाव।",
      msg2: "हाँ! हम पार्क गइल रहनी आ एगो किताब पढ़नी।",
      msg3: "ई सुन के बहुत निमन लागल! एगो छोट सा सुझाव: रउरा कह सकत बानी 'I went to the park and read a book.' 'read' के भूतकाल (past tense) में उच्चारण रंग 'red' नियर होला।",
      inputPlaceholder: "एगो मेसेज लिखीं...",
      scoreTitle: "फ्लुएंसी स्कोर",
      scoreValue: "आज +15 अंक"
    }
  },
  roadmap: {
    title: "आगे के सफर",
    description: "हमनी के Fluento AI के सभका लग पहुंचावे खातिर खूब मेहनत कर रहल बानी जा। ई बा हमनी के प्लान।",
    beta: "बीटा रिलीज",
    betaDesc: "वेटलिस्ट के मेम्बर लोग खातिर खास फीचर टेस्ट करे के अर्ली एक्सेस।",
    android: "Android लॉन्च",
    androidBadge: "अगला",
    androidDesc: "पूरा स्पीकिंग चैलेंज के संगे गूगल प्ले स्टोर प ऑफिसियल रिलीज।",
    ios: "iOS लॉन्च",
    iosDesc: "Apple इकोसिस्टम के संगे App Store प आ रहल बा।",
    advanced: "एडवांस्ड AI फीचर्स",
    advancedDesc: "रीयल-टाइम एक्सेंट एडजस्टमेंट, खास शब्दावली पैक, आ बहुत कुछ।"
  },
  faq: {
    title: "अक्सर पूछल जाए वाला सवाल",
    description: "कवनो सवाल बा? हमनी लगे जवाब बा।",
    q1: "का Fluento AI फ्री बा?",
    a1: "अर्ली एक्सेस वाला लोग खातिर बेसिक फीचर बिल्कुल फ्री रही। हमनी के एडवांस फीचर खातिर एगो प्रीमियम प्लान भी लायेम जा, बाकिर हमनी के लक्ष्य बा कि शिक्षा हमेशा अफोर्डेबल रहे।",
    q2: "ई कब लॉन्च होई?",
    a2: "हमनी के अभी बीटा टेस्टिंग में बानी जा। सबसे पहिले एक्सेस पावे खातिर वेटलिस्ट में शामिल होईं!",
    q3: "कवन-कवन भाषा सपोर्टेड बा?",
    a3: "Fluento AI सुरुआत में अंग्रेजी सिखावे प फोकस कर रहल बा, बाकिर रउरा आपन प्रैक्टिस हिंदी, बंगाली, मराठी, भोजपुरी आ कई गो अउर भारतीय भाषा में शुरू कर सकत बानी।"
  },
  founder: {
    role: "संस्थापक, Fluento AI",
    connect: "लिंक्डइन प जुड़ीं",
    visionTitle: "हमनी के सपना",
    missionTitle: "हमनी के मिशन",
    thoughtsTitle: "संस्थापक के विचार",
    visionP1: "Fluento AI में, हमनी के अइसन भविष्य के सपना देखत बानी जा जहवां भाषा कबो भी सीखे, संवाद करे भा कवनो अवसर के बीच में बाधा ना बने।",
    visionP2: "भारत सैकड़ो भाषा आ विविध संस्कृति के देश ह। हमनी के मानल बा कि हर सीखे वाला के आपन सफर ओही भाषा से शुरू करे के चाहीं जेकरा में ऊ सबसे बेसी सहज महसूस करे, आ धीरे-धीरे अंग्रेजी आ दोसर ग्लोबल कम्युनिकेशन स्किल में आत्मविश्वास बढ़ावे।",
    visionP3: "हमनी के सपना भारत के सबसे बेसी समावेशी (inclusive) AI-आधारित लर्निंग प्लेटफॉर्म बनावे के बा, जे कई गो भारतीय भाषा में मदद करे आ उनकरा के दुनिया भर के अवसर से जोड़े।",
    missionP1: "हमनी के मिशन बा कि पर्सनल AI-आधारित लर्निंग अनुभव दिहल जाव जवन हर सीखे वाला के भाषा, गति आ लक्ष्य के हिसाब से ढल जाव।",
    missionP2: "चतुर बातचीत, बोले के अभ्यास, ग्रामर में सुधार, शब्दावली बढ़ावे आ प्रोग्रेस ट्रैक करे के माध्यम से, Fluento AI के लक्ष्य भारत के हर कोना के छात्र लोग खातिर सीखल आसान बनावल बा।",
    missionP3: "हमनी के एगो अइसन प्लेटफॉर्म बनावे खातिर प्रतिबद्ध बानी जा जवन भाषाई विविधता के सम्मान करे आ सीखे वाला लोग के जुड़ल दुनिया में आत्मविश्वास से संवाद करे खातिर सशक्त बनावे।",
    thoughtsP1: "भारत के ताकत एकर विविधता में बा। लाखन होनहार छात्र लोग लगे निमन बिचार आ क्षमता बा, बाकिर भाषा के बाधा अक्सर उनकर आत्मविश्वास आ अवसर के रोक देला।",
    thoughtsP2: "Fluento AI एगो छोट सा विश्वास के साथ बनावल गइल बा: सीखे के शुरुआत ओही भाषा में होखे के चाहीं जेकरा लोग सबसे निमन से समझेला।",
    thoughtsP3: "हमनी के लक्ष्य खाली अंग्रेजी सिखावल नइखे, बलुक स्थानीय भाषा आ ग्लोबल अवसर के बीच के पुल बनावल बा। चाहे केहू हिंदी, बंगाली, तमिल, तेलुगु, मराठी, गुजराती, पंजाबी, कन्नड़, मलयालम, ओडिया, असमिया या कवनो दोसर भारतीय भाषा बोले, ओकरा के हमेशा इहवां स्वागत आ सपोर्ट महसूस होखे के चाहीं।",
    thoughtsP4: "टेक्नोलॉजी के लोग के हिसाब से ढले के चाहीं, ना कि लोग के टेक्नोलॉजी के हिसाब से।",
    thoughtsP5: "इहे उ भविष्य ह जवन हमनी के Fluento AI के संगे बना रहल बानी जा।"
  },
  footer: {
    copyright: "© 2026 Fluento AI. सब अधिकार सुरक्षित बा।",
    description: "रउरा अपना पर्सनल AI इंग्लिश ट्यूटर, जे 24/7 उपलब्ध बा रउरा के आत्मविश्वास से बोले में मदद करे खातिर।",
    contact: "संपर्क करीं",
    privacy: "गोपनीयता नीति",
    terms: "सेवा के शर्त"
  }
};

const messagesDir = path.join(__dirname, 'messages');

locales.forEach(locale => {
  const filePath = path.join(messagesDir, `${locale}.json`);
  let content = {};
  if (fs.existsSync(filePath)) {
    content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }
  
  if (locale === 'en') {
    Object.assign(content, enExt);
  } else if (locale === 'bho') {
    Object.assign(content, bhoExt);
  } else {
    // Fallback to English for other locales so they don't break/show old placeholders
    Object.assign(content, enExt);
  }
  
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
});

console.log('Updated translation files successfully.');
