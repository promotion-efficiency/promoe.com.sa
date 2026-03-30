/**
 * i18n.js — Arabic/English localization for Promotion Efficiency
 * Usage: add data-i18n="key" to elements for textContent replacement
 *        add data-i18n-html="key" for innerHTML replacement
 * Toggle with the #lang-switcher button (calls toggleLanguage())
 */

var translations = {
  ar: {
    /* ── Navigation ── */
    'nav.whoWeAre':     'من نحن',
    'nav.ourWork':      'أعمالنا',
    'nav.letsTalk':     'تواصل معنا',
    'nav.startProject': 'ابدأ مشروعاً',
    'nav.insights':     'رؤى وأفكار',

    /* ── Footer ── */
    'footer.home':         'الرئيسية',
    'footer.projects':     'المشاريع',
    'footer.about':        'عن الشركة',
    'footer.contact':      'اتصل بنا',
    'footer.blog':         'المدونة',
    'footer.privacyPolicy':'سياسة الخصوصية',
    'footer.jobs':         'الوظائف',
    'footer.emailLabel':   'البريد الإلكتروني',
    'footer.phoneLabel':   'الهاتف',
    'footer.copyright':    '© 2025 برومو إيفيشنسي. جميع الحقوق محفوظة.',

    /* ── Home (index.html) ── */
    'home.heroTitle':       'رحلتك نحو القمة تبدأ هنا',
    'home.heroSubtitle':    'حلول تواصل عميقة الأثر — من تطوير المفهوم إلى الإنتاج والتوزيع — بعناية ودقة',
    'home.strategyTitle':   'من الاستراتيجية إلى القمة',
    'home.strategySubtitle':'حملات تحوّل الأفكار إلى أداء قابل للقياس.',
    'home.recognitionTitle':'التقدير والأثر',
    'home.recognitionSub':  'اعتراف صناعي يعكس أداءً قابلاً للقياس.',
    'home.performanceText': 'نحوّل الترويج إلى أداء. حتى تقربك كل رسالة من القمة.',
    'home.whatIsTitle':     'ما هي برومو إيفيشنسي؟',
    'home.whatIsBody':      'برومو إيفيشنسي وكالة إبداعية وتسويقية متكاملة تقدم حلول تواصل متكاملة للعلامات التجارية الساعية إلى النمو والظهور والأثر القابل للقياس. بوصفنا "شريكك الإبداعي في رحلتك نحو القمة"، نقدم خدمات شاملة من تطوير المفهوم إلى الإنتاج والتوزيع، لضمان وصول العلامات التجارية إلى أعلى إمكاناتها بوصفنا أول شركة تأسست تحت مظلة نقش القابضة.',
    'home.testimonialTitle':'آراء العملاء',
    'home.clientsTitle':    'حيث يكسب الأداء الثقة',
    'home.clientsSub':      'عبر الصناعات. عبر الأسواق. عبر اللحظات.',

    /* ── About (about.html) ── */
    'about.heroTitle':      'مبنيون للأداء',
    'about.heroSubtitle':   'نحوّل تعقيد التسويق إلى نمو منظّم وقابل للقياس.',
    'about.aboutTagline':   'عن الشركة',
    'about.aboutBody':      'برومو إيفيشنسي شريك تسويقي يُعلي الاستراتيجية ويبني لنمو قابل للقياس. نصمم أنظمة ترويج منظّمة تنسّق العلامة التجارية والقنوات والأداء في محرك واحد متكامل. كل حملة ننشئها تنطلق من الوضوح، وتستند إلى البيانات، وتُبنى لتحقيق نتائج حقيقية — لا ضجيج.',
    'about.integratedThinking':'التفكير المتكامل',
    'about.integratedBody': 'نربط الاستراتيجية والإبداع والإعلام والتنفيذ في منظومة متماسكة واحدة — حتى تعمل كل نقطة تواصل معاً وليس بمعزل.',
    'about.performanceMindset':'عقلية الأداء',
    'about.performanceBody':'نقيس ما يهم. من تخطيط الحملات إلى التحسين المستمر، عملنا مصمم لتحقيق أثر تجاري ملموس.',
    'about.teamTitle':      'فريقنا',
    'about.teamTagline':    'المؤمنون',

    /* ── Contact (contact.html) ── */
    'contact.heroTitle':    'تواصل معنا',
    'contact.heroSubtitle': 'أخبرنا عن مشروعك القادم — وسنتولى الأمر من هنا.',
    'contact.howWeDoIt':    'هكذا نحب أن نعمل',
    'contact.bodyText':     'سواء كنت تحتاج حملة متكاملة، أو تجديد هوية، أو فعالية تُحدث أثراً — نحن هنا لمساعدتك. تواصل معنا ولنتحدث عن خطوتك القادمة.',

    /* ── Projects (projects.html) ── */
    'projects.heroTitle':   'أعمالنا',
    'projects.heroSubtitle':'حملات تصنع أثراً، لا مجرد انطباعات.',
    'filter.all':           'الكل',
    'filter.visualIdentity':'الهوية البصرية',
    'filter.events':        'الفعاليات',

    /* ── Blog (blog.html) ── */
    'blog.heroTitle':       'المدونة',
    'blog.heroSubtitle':    'أفكار وحملات وقصص من عالم التسويق والتواصل',
    'blog.readArticle':     'اقرأ المقال',
    'blog.categories':      'التصنيفات',
    'blog.fromArchive':     'من الأرشيف',
    'blog.ourUpdates':      'تحديثاتنا',
    'blog.viewPost':        'عرض المنشور',

    /* ── Service: Branding & Identity ── */
    'service.branding.heroTitle':   'تطوير الهوية والعلامة التجارية',
    'service.branding.heroSubtitle':'نبني العلامات التجارية من الصفر — نحدد الاستراتيجية والتموضع والتسمية وأنظمة الهوية البصرية التي تصنع تميّزاً طويل الأمد وأثراً في السوق.',
    'service.branding.tagline':     'عن هذه الخدمة',
    'service.branding.body':        'من استراتيجية العلامة التجارية والتسمية إلى أنظمة الهوية البصرية الكاملة — شاملةً تصميم الشعار والإرشادات والتطبيقات — نبني أسساً تساعد علامتك التجارية على التميّز والاتساق عبر كل نقطة تواصل. منهجنا مبني على الوضوح والتذكّر والأثر القابل للقياس في السوق.',
    'service.branding.strategyTitle':'الاستراتيجية والتسمية',
    'service.branding.strategyBody':'نحدد التموضع والتسمية واستراتيجية العلامة التجارية لمنح علامتك قصة واضحة ومكاناً مميزاً في السوق.',
    'service.branding.visualTitle': 'أنظمة الهوية البصرية',
    'service.branding.visualBody':  'تصميم الشعار والإرشادات والتطبيقات التي تحافظ على اتساق علامتك التجارية وتميزها عبر كل نقطة تواصل.',
    'service.branding.cta':         'هل أنت مستعد لبناء علامتك التجارية أو صقلها؟ تواصل معنا لبدء الحوار.',

    /* ── Service: Content & Social Media ── */
    'service.content.heroTitle':    'إنشاء المحتوى وإدارة وسائل التواصل الاجتماعي',
    'service.content.heroSubtitle': 'توليد الأفكار والسرد والكتابة والإنتاج والجدولة وتقارير الأداء — كل ذلك مُدار لضمان حضور علامة تجارية متسق.',
    'service.content.tagline':      'عن هذه الخدمة',
    'service.content.body':         'توليد الأفكار والسرد والكتابة والإنتاج والجدولة وتقارير الأداء — كل ذلك مُدار لضمان حضور علامة تجارية متسق. نبقي قنواتك نشطة وصوتك واضحاً ومحتواك منسجماً مع أهدافك.',
    'service.content.storytellingTitle':'المحتوى والسرد',
    'service.content.storytellingBody':'نصوص ومفاهيم وروايات تُلامس الجمهور وتُحرّك التفاعل.',
    'service.content.socialTitle':  'التواصل الاجتماعي والجدولة',
    'service.content.socialBody':   'إدارة التقويم والمجتمع والتقارير لضمان حضور متسق وقابل للقياس.',
    'service.content.cta':          'هل أنت مستعد لتعزيز حضورك في المحتوى ووسائل التواصل؟ تواصل معنا لبدء الحوار.',

    /* ── Service: Corporate Communication ── */
    'service.corporate.heroTitle':  'التواصل المؤسسي واستراتيجية التسويق',
    'service.corporate.heroSubtitle':'نصمم خطط تسويق منظّمة واستشارات واستراتيجيات رقمية ترفع الأداء وتُحرّك نمواً قابلاً للقياس.',
    'service.corporate.tagline':    'عن هذه الخدمة',
    'service.corporate.body':       'نصمم خطط تسويق منظّمة واستشارات واستراتيجيات رقمية ترفع الأداء وتُحرّك نمواً قابلاً للقياس. منهجنا يربط العلامة التجارية والقنوات والبيانات لتكون كل قرار مستنيراً وكل حملة مبنية للتحقيق.',
    'service.corporate.strategyTitle':'استراتيجية التسويق والاتصال',
    'service.corporate.strategyBody':'خطط وأطر تنسّق فريقك وتُركّز استثمارك.',
    'service.corporate.digitalTitle':'الأداء الرقمي',
    'service.corporate.digitalBody':'استراتيجيات قائمة على البيانات وتحسين مستمر لتوسيع نطاق ما يُحقق النتائج.',
    'service.corporate.cta':        'هل أنت مستعد لهيكلة نموك؟ تواصل معنا لبدء الحوار.',

    /* ── Service: Event Management ── */
    'service.event.heroTitle':      'إدارة الفعاليات والحملات التجريبية',
    'service.event.heroSubtitle':   'تخطيط الفعاليات الكامل وتنفيذ الأجنحة وإنتاج الهدايا وإدارة شاشات الإعلانات في السعودية ودول الخليج.',
    'service.event.tagline':        'عن هذه الخدمة',
    'service.event.body':           'تخطيط الفعاليات الكامل وتنفيذ الأجنحة وإنتاج الهدايا وإدارة شاشات الإعلانات في السعودية ودول الخليج. نحوّل الأفكار إلى تجارب ميدانية تبني الارتباط وتترك انطباعاً دائماً.',
    'service.event.eventsTitle':    'الفعاليات والأجنحة',
    'service.event.eventsBody':     'التخطيط والتصميم والتنفيذ لضمان سير كل تفعيل بسلاسة وتجسيد علامتك التجارية.',
    'service.event.giftsTitle':     'الهدايا وشبكات الشاشات',
    'service.event.giftsBody':      'البضائع المعلّمة وإدارة الشاشات الخارجية للوصول والتذكّر.',
    'service.event.cta':            'هل أنت مستعد لإنشاء تجربتك القادمة؟ تواصل معنا لبدء الحوار.',

    /* ── Service: Graphic Design ── */
    'service.graphic.heroTitle':    'التصميم الجرافيكي والأنظمة البصرية',
    'service.graphic.heroSubtitle': 'من الرسوم المتحركة والتصميم ثلاثي الأبعاد إلى الوثائق المؤسسية والإنفوجرافيك، نبتكر أصولاً بصرية تتواصل بوضوح وتميّز.',
    'service.graphic.tagline':      'عن هذه الخدمة',
    'service.graphic.body':         'من الرسوم المتحركة والتصميم ثلاثي الأبعاد إلى الوثائق المؤسسية والإنفوجرافيك والأنظمة البصرية، نبتكر أصولاً تتواصل بوضوح وتميّز. كل قطعة مصمّمة لدعم علامتك التجارية وإيصال رسالتك بفعالية عبر الطباعة والفضاء الرقمي.',
    'service.graphic.animationTitle':'الرسوم المتحركة وثلاثي الأبعاد',
    'service.graphic.animationBody':'التصميم الحركي والمكاني الذي يُحيي الأفكار ويرتقي بالتجارب الرقمية.',
    'service.graphic.printTitle':   'الأصول المطبوعة والرقمية',
    'service.graphic.printBody':    'وثائق مؤسسية وإنفوجرافيك ومواد تسويقية تبقى وفيّة للعلامة التجارية والرسالة.',
    'service.graphic.cta':          'هل أنت مستعد للارتقاء بتواصلك البصري؟ تواصل معنا لبدء الحوار.',

    /* ── Service: Photography & Videography ── */
    'service.photo.heroTitle':      'التصوير الفوتوغرافي والمرئي',
    'service.photo.heroSubtitle':   'جلسات تصوير احترافية وتغطية فعاليات ومقاطع سينمائية وأفلام ترويجية وفاصل زمني وبث مباشر.',
    'service.photo.tagline':        'عن هذه الخدمة',
    'service.photo.body':           'جلسات تصوير احترافية وتغطية فعاليات ومقاطع سينمائية وأفلام ترويجية وفاصل زمني وبث مباشر. نوثّق علامتك التجارية وفعالياتك وقصصك بصيغ تُؤدي أداءً مميزاً عبر القنوات وعلى مرّ الزمن.',
    'service.photo.photoTitle':     'التصوير الفوتوغرافي',
    'service.photo.photoBody':      'تصوير العلامة التجارية والفعاليات والمنتجات بمظهر احترافي متسق.',
    'service.photo.videoTitle':     'التصوير المرئي والبث',
    'service.photo.videoBody':      'أفلام وترويج وفاصل زمني وبث مباشر يُشرك الجمهور ويُحوّله.',
    'service.photo.cta':            'هل أنت مستعد لتوثيق لحظتك القادمة؟ تواصل معنا لبدء الحوار.',

    /* ── Shared service section ── */
    'service.fromStrategyTitle':    'من الاستراتيجية إلى القمة',
    'service.fromStrategySub':      'حملات تحوّل الأفكار إلى أداء قابل للقياس.',
    'service.clientsTitle':         'حيث يكسب الأداء الثقة',
    'service.clientsSub':           'عبر الصناعات. عبر الأسواق. عبر اللحظات.',
  }
};

var translations_en = {
  /* ── Navigation ── */
  'nav.whoWeAre':     'Who We Are',
  'nav.ourWork':      'Our Work',
  'nav.letsTalk':     "Let's Talk",
  'nav.startProject': 'Start a Project',
  'nav.insights':     'Insights',

  /* ── Footer ── */
  'footer.home':         'Home',
  'footer.projects':     'Projects',
  'footer.about':        'About',
  'footer.contact':      'Contact',
  'footer.blog':         'Blog',
  'footer.privacyPolicy':'Privacy Policy',
  'footer.jobs':         'Jobs',
  'footer.emailLabel':   'Email',
  'footer.phoneLabel':   'Phone',
  'footer.copyright':    '© 2025 Promotion Efficiency. All rights reserved.',

  /* ── Home ── */
  'home.heroTitle':       'Your hike to PEAK starts here',
  'home.heroSubtitle':    'Deeply impactful communications solutions — from concept creation to production and distribution — guided with care and precision',
  'home.strategyTitle':   'From Strategy to PEAK',
  'home.strategySubtitle':'Campaigns that transform ideas into measurable performance.',
  'home.recognitionTitle':'Recognition & Impact',
  'home.recognitionSub':  'Industry acknowledgment that reflects measurable performance.',
  'home.performanceText': 'We turn promotion into performance.\nSo every message moves you closer to PEAK.',
  'home.whatIsTitle':     'What is Promotion Efficiency?',
  'home.whatIsBody':      'Promotion Efficiency is a full-service creative and marketing agency delivering integrated communication solutions for brands seeking growth, visibility, and measurable impact. Positioned as "Your Creative Partner on Your Hike to Peak," we provide end-to-end services — from concept development to production and distribution — ensuring brands reach their highest potential as the first company established under Naqsh Holding.',
  'home.testimonialTitle':'Testimonial',
  'home.clientsTitle':    'Where Performance Earns Trust',
  'home.clientsSub':      'Across industries. Across markets. Across moments.',

  /* ── About ── */
  'about.heroTitle':      'Built for Performance',
  'about.heroSubtitle':   'We turn marketing complexity into structured, measurable growth.',
  'about.aboutTagline':   'About us',
  'about.aboutBody':      'Promotion Efficiency is a strategy-first marketing partner built for measurable growth. We design structured promotion systems that align brand, channels, and performance into one focused engine. Every campaign we create is driven by clarity, backed by data, and built to deliver results—not noise.',
  'about.integratedThinking':'Integrated Thinking',
  'about.integratedBody': 'We connect strategy, creative, media, and execution into one cohesive system—so every touchpoint works together, not in isolation.',
  'about.performanceMindset':'Performance Mindset',
  'about.performanceBody':'We measure what matters. From campaign planning to optimization, our work is designed to produce tangible business impact.',
  'about.teamTitle':      'Our Team',
  'about.teamTagline':    'the BELIEVERS',

  /* ── Contact ── */
  'contact.heroTitle':    'Contact us',
  'contact.heroSubtitle': "Tell us about your next project — we'll take it from there.",
  'contact.howWeDoIt':    'This is how we like to do things',
  'contact.bodyText':     "Whether you need a full campaign, a brand refresh, or an event that makes an impact—we're here to help. Reach out and let's talk about your next move.",

  /* ── Projects ── */
  'projects.heroTitle':   'Our Work',
  'projects.heroSubtitle':'Campaigns that create impact, not just impressions.',
  'filter.all':           'All',
  'filter.visualIdentity':'Visual Identity',
  'filter.events':        'Events',

  /* ── Blog ── */
  'blog.heroTitle':       'Blog',
  'blog.heroSubtitle':    'Ideas, campaigns, and stories from the world of marketing and communications',
  'blog.readArticle':     'Read Article',
  'blog.categories':      'Categories',
  'blog.fromArchive':     'From the Archive',
  'blog.ourUpdates':      'Our updates',
  'blog.viewPost':        'View Post',

  /* ── Service: Branding ── */
  'service.branding.heroTitle':   'Branding & Identity Development',
  'service.branding.heroSubtitle':'We build brands from the ground up — defining strategy, positioning, naming, and visual identity systems that create long-term recognition and market impact.',
  'service.branding.tagline':     'About this service',
  'service.branding.body':        'From brand strategy and naming to full visual identity systems — including logo design, guidelines, and applications — we create foundations that help your brand stand out and stay consistent across every touchpoint. Our approach is built for clarity, memorability, and measurable market impact.',
  'service.branding.strategyTitle':'Strategy & Naming',
  'service.branding.strategyBody':'We define positioning, naming, and brand strategy so your brand has a clear story and a distinct place in the market.',
  'service.branding.visualTitle': 'Visual Identity Systems',
  'service.branding.visualBody':  'Logo design, guidelines, and applications that keep your brand consistent and recognizable across every touchpoint.',
  'service.branding.cta':         'Ready to build or refine your brand? Get in touch to start the conversation.',

  /* ── Service: Content ── */
  'service.content.heroTitle':    'Content Creation & Social Media Management',
  'service.content.heroSubtitle': 'Idea creation, storytelling, copywriting, production, scheduling, and performance reporting — all managed to ensure consistent brand presence.',
  'service.content.tagline':      'About this service',
  'service.content.body':         'Idea creation, storytelling, copywriting, production, scheduling, and performance reporting — all managed to ensure consistent brand presence. We keep your channels active, your voice clear, and your content aligned with your goals.',
  'service.content.storytellingTitle':'Content & Storytelling',
  'service.content.storytellingBody':'Copy, concepts, and narratives that resonate and drive engagement.',
  'service.content.socialTitle':  'Social & Scheduling',
  'service.content.socialBody':   'Calendar management, community, and reporting so your presence stays consistent and measurable.',
  'service.content.cta':          'Ready to strengthen your content and social presence? Get in touch to start the conversation.',

  /* ── Service: Corporate ── */
  'service.corporate.heroTitle':  'Corporate Communication & Marketing Strategy',
  'service.corporate.heroSubtitle':'We design structured marketing plans, consultations, and digital strategies that elevate performance and drive measurable growth.',
  'service.corporate.tagline':    'About this service',
  'service.corporate.body':       'We design structured marketing plans, consultations, and digital strategies that elevate performance and drive measurable growth. Our approach connects brand, channels, and data so every decision is informed and every campaign is built to deliver.',
  'service.corporate.strategyTitle':'Marketing & Comms Strategy',
  'service.corporate.strategyBody':'Plans and frameworks that align your team and focus your investment.',
  'service.corporate.digitalTitle':'Digital & Performance',
  'service.corporate.digitalBody':'Data-led strategies and optimization so you can scale what works.',
  'service.corporate.cta':        'Ready to structure your growth? Get in touch to start the conversation.',

  /* ── Service: Event ── */
  'service.event.heroTitle':      'Event Management & Experiential Campaigns',
  'service.event.heroSubtitle':   'End-to-end event planning, booth execution, gift production, and advertising screen management across KSA & GCC.',
  'service.event.tagline':        'About this service',
  'service.event.body':           'End-to-end event planning, booth execution, gift production, and advertising screen management across KSA & GCC. We turn concepts into on-the-ground experiences that build connection and leave a lasting impression.',
  'service.event.eventsTitle':    'Events & Booths',
  'service.event.eventsBody':     'Planning, design, and execution so every activation runs smoothly and reflects your brand.',
  'service.event.giftsTitle':     'Gifts & Screen Networks',
  'service.event.giftsBody':      'Branded merchandise and DOOH/screen management for reach and recall.',
  'service.event.cta':            'Ready to create your next experience? Get in touch to start the conversation.',

  /* ── Service: Graphic Design ── */
  'service.graphic.heroTitle':    'Graphic Design & Visual Systems',
  'service.graphic.heroSubtitle': 'From animation and 3D design to corporate documents and infographics, we craft visual assets that communicate with clarity and distinction.',
  'service.graphic.tagline':      'About this service',
  'service.graphic.body':         'From animation and 3D design to corporate documents, infographics, and visual systems, we craft assets that communicate with clarity and distinction. Every piece is designed to support your brand and deliver your message effectively across print and digital.',
  'service.graphic.animationTitle':'Animation & 3D',
  'service.graphic.animationBody':'Motion and spatial design that bring ideas to life and elevate digital experiences.',
  'service.graphic.printTitle':   'Print & Digital Assets',
  'service.graphic.printBody':    'Corporate documents, infographics, and marketing collateral that stay on brand and on message.',
  'service.graphic.cta':          'Ready to elevate your visual communication? Get in touch to start the conversation.',

  /* ── Service: Photography ── */
  'service.photo.heroTitle':      'Photography & Videography',
  'service.photo.heroSubtitle':   'Professional photo sessions, event coverage, cinematic videos, promotional films, timelapse, and live streaming.',
  'service.photo.tagline':        'About this service',
  'service.photo.body':           'Professional photo sessions, event coverage, cinematic videos, promotional films, timelapse, and live streaming. We capture your brand, your events, and your stories in formats that perform across channels and over time.',
  'service.photo.photoTitle':     'Photography',
  'service.photo.photoBody':      'Brand shoots, events, and product imagery that look consistently professional.',
  'service.photo.videoTitle':     'Videography & Streaming',
  'service.photo.videoBody':      'Films, promos, timelapse, and live streams that engage and convert.',
  'service.photo.cta':            'Ready to capture your next moment? Get in touch to start the conversation.',

  /* ── Shared service ── */
  'service.fromStrategyTitle':    'From Strategy to PEAK',
  'service.fromStrategySub':      'Campaigns that transform ideas into measurable performance.',
  'service.clientsTitle':         'Where Performance Earns Trust',
  'service.clientsSub':           'Across industries. Across markets. Across moments.',
};

function setLanguage(lang) {
  var isAr = lang === 'ar';
  var dict = isAr ? translations.ar : translations_en;

  /* 1. Set html[lang] and dir */
  document.documentElement.lang = lang;
  document.documentElement.dir  = isAr ? 'rtl' : 'ltr';

  /* 2. Load Tajawal font for Arabic */
  if (isAr && !document.getElementById('tajawal-font')) {
    var link = document.createElement('link');
    link.id   = 'tajawal-font';
    link.rel  = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap';
    document.head.appendChild(link);

    /* Apply Tajawal to body when Arabic */
    document.body.style.fontFamily = "'Tajawal', sans-serif";
  } else if (!isAr) {
    /* Restore default font when switching back to English */
    document.body.style.fontFamily = '';
  }

  /* 3. Replace data-i18n text content */
  var textEls = document.querySelectorAll('[data-i18n]');
  for (var i = 0; i < textEls.length; i++) {
    var key = textEls[i].getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      textEls[i].textContent = dict[key];
    }
  }

  /* 4. Replace data-i18n-html innerHTML */
  var htmlEls = document.querySelectorAll('[data-i18n-html]');
  for (var j = 0; j < htmlEls.length; j++) {
    var hkey = htmlEls[j].getAttribute('data-i18n-html');
    if (dict[hkey] !== undefined) {
      htmlEls[j].innerHTML = dict[hkey];
    }
  }

  /* 5. Replace data-i18n-placeholder placeholder */
  var placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
  for (var k = 0; k < placeholderEls.length; k++) {
    var pkey = placeholderEls[k].getAttribute('data-i18n-placeholder');
    if (dict[pkey] !== undefined) {
      placeholderEls[k].placeholder = dict[pkey];
    }
  }

  /* 6. Update lang switcher button */
  var btn = document.getElementById('lang-switcher');
  if (btn) {
    btn.textContent  = isAr ? 'English' : 'العربية';
    btn.setAttribute('aria-label', isAr ? 'Switch to English' : 'Switch to Arabic');
  }

  /* 7. Persist preference */
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

function toggleLanguage() {
  var current = document.documentElement.lang || 'en';
  setLanguage(current === 'ar' ? 'en' : 'ar');
}

/* On page load: apply stored preference */
(function () {
  var stored;
  try { stored = localStorage.getItem('lang'); } catch (e) {}
  if (stored === 'ar' || stored === 'en') {
    setLanguage(stored);
  }
})();
