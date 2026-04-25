/**
 * Flat-key translations dictionary.
 * `en` is the source of truth — `ar` is checked against it via `typeof en`,
 * so any missing or extra key in `ar` produces a TypeScript error.
 */

export const en = {
  // ---- Common chrome ----
  'common.openBuilder': 'Open the builder',
  'common.startBuilding': 'Start building',
  'common.viewSource': 'View Source on GitHub',
  'common.preview': 'Preview',
  'common.reset': 'Reset',
  'common.confirmReset': 'Confirm reset',
  'common.backToHome': 'Back to home',
  'common.backToEditor': 'Back to editor',
  'common.learnMore': 'Learn more',
  'common.untitledDraft': 'Untitled draft',
  'common.local': 'local',
  'common.savedPrefix': 'Saved · ',
  'common.justNow': 'just now',
  'common.secondsAgo': '{n}s ago',
  'common.minutesAgo': '{n}m ago',
  'common.hoursAgo': '{n}h ago',
  'common.daysAgo': '{n}d ago',

  // ---- Navbar (Home) ----
  'nav.features': 'Features',
  'nav.howItWorks': 'How it works',
  'nav.github': 'GitHub',
  'nav.langLabel': 'Language',

  // ---- Hero (landing) ----
  'hero.badge': 'v0.1 — Public preview',
  'hero.badgeNote': "what's new",
  'hero.title': 'Build landing pages in minutes',
  'hero.description':
    'Use ready-made sections, edit content and colors, and launch quickly.',

  // ---- Features (landing bento) ----
  'features.eyebrow': 'What it is',
  'features.heading': 'A small toolkit, calibrated for craft.',
  'features.subheading':
    "Everything below stays out of your way until you need it. Nothing that's not in service of getting a page out the door.",
  'features.cards.sections.title': 'Polished sections, ready to compose.',
  'features.cards.sections.body':
    'Seven sections — Hero, Features, Pricing, Testimonials, FAQ, Contact, CTA — each designed to look intentional out of the box.',
  'features.cards.drag.title': 'Reorder with a drag.',
  'features.cards.drag.body': 'Sections snap into place. No grids to configure.',
  'features.cards.style.title': 'Color and copy, in place.',
  'features.cards.style.body':
    'The Inspector edits live — see every change as you type.',
  'features.cards.save.title': 'Saves locally, instantly.',
  'features.cards.save.body':
    'No accounts, no cloud. Your draft lives in your browser and survives a refresh — no setup, no waiting.',
  'features.savedLabel': 'Saved',
  'features.savedSuffix': '— just now',

  // ---- HowItWorks (landing) ----
  'how.eyebrow': 'How it works',
  'how.heading': 'Three steps, no documentation required.',
  'how.steps.1.title': 'Pick a section.',
  'how.steps.1.body':
    'Drop in a Hero, Features, Pricing — whatever the page calls for. Stack as many as you need.',
  'how.steps.2.title': 'Edit in place.',
  'how.steps.2.body':
    'Click any section to open the Inspector. Change the headline, swap colors, link the button.',
  'how.steps.3.title': 'Preview & ship.',
  'how.steps.3.body':
    'Hit Preview to see the page on its own. Your draft is autosaved as you go.',

  // ---- FinalCTA (landing) ----
  'finalCta.title': 'Open the builder. Ship something today.',
  'finalCta.body':
    'No sign-up. No setup. Your draft lives in your browser — refresh-proof and yours alone.',

  // ---- Footer (landing) ----
  'footer.tagline': 'A small, local-first builder.',

  // ---- Builder shell ----
  'builder.untitledDraft': 'Untitled draft',
  'builder.sections': 'Sections',
  'builder.clickToAdd': 'click to add',
  'builder.dragHint':
    'Tip: drag the grip handle on a section to reorder it on the canvas.',
  'builder.empty.title': 'Your canvas is empty.',
  'builder.empty.body':
    'Pick a section from the panel on the left to start composing your page. A Hero is usually a good first move.',
  'builder.empty.hint': 'Add your first section from the sidebar',
  'builder.deleteAria': 'Delete {label} section',
  'builder.dragAria': 'Drag {label} section',
  'builder.langToggle': 'Toggle language',

  // ---- Inspector ----
  'inspector.empty.title': 'Nothing selected',
  'inspector.empty.body':
    'Click any section on the canvas to edit its content and colors here.',
  'inspector.editingLabel': 'Editing',
  'inspector.section.content': 'Content',
  'inspector.section.style': 'Style',
  'inspector.field.title': 'Title',
  'inspector.field.titlePlaceholder': 'Section title',
  'inspector.field.description': 'Description',
  'inspector.field.descriptionPlaceholder': 'A brief, supporting line',
  'inspector.field.buttonText': 'Button text',
  'inspector.field.buttonTextPlaceholder': 'Get started',
  'inspector.field.buttonLink': 'Button link',
  'inspector.field.primaryColor': 'Primary color',
  'inspector.field.backgroundColor': 'Background color',
  'inspector.changeColorAria': 'Change {label} color',

  // ---- Section registry (sidebar labels + descriptions) ----
  'registry.hero.label': 'Hero',
  'registry.hero.description': 'A confident opening statement.',
  'registry.features.label': 'Features',
  'registry.features.description': 'Showcase what your product does.',
  'registry.pricing.label': 'Pricing',
  'registry.pricing.description': 'Plans laid out clearly.',
  'registry.testimonials.label': 'Testimonials',
  'registry.testimonials.description': 'Voices from the people who use it.',
  'registry.faq.label': 'FAQ',
  'registry.faq.description': 'Anticipate the obvious questions.',
  'registry.contact.label': 'Contact',
  'registry.contact.description': 'A clean, no-nonsense form.',
  'registry.cta.label': 'Call to action',
  'registry.cta.description': 'A final, decisive nudge.',

  // ---- Default section content (used when adding a new section) ----
  'defaults.hero.title': 'Build landing pages in minutes',
  'defaults.hero.description':
    'Use ready-made sections, edit content and colors, and launch quickly.',
  'defaults.hero.button': 'Start building',

  'defaults.features.title': "Everything you need, nothing you don't.",
  'defaults.features.description':
    'A focused toolkit that gets out of your way. Designed for speed, calibrated for craft.',
  'defaults.features.button': 'See all features',

  'defaults.pricing.title': 'Simple pricing, made for teams.',
  'defaults.pricing.description':
    'No hidden fees. No per-seat surprises. Pick a plan that fits.',
  'defaults.pricing.button': 'View plans',

  'defaults.testimonials.title': 'Trusted by teams that ship.',
  'defaults.testimonials.description':
    'A small selection of the operators, designers, and engineers building with us.',
  'defaults.testimonials.button': 'Read more stories',

  'defaults.faq.title': 'Frequently asked questions',
  'defaults.faq.description':
    'A quick read of the things people ask before they sign up.',
  'defaults.faq.button': 'Talk to us',

  'defaults.contact.title': 'Get in touch.',
  'defaults.contact.description':
    'Tell us about the work. We reply within one business day.',
  'defaults.contact.button': 'Send message',

  'defaults.cta.title': 'Ready to draft your first page?',
  'defaults.cta.description':
    'Open the builder, drop in a few sections, and watch it come together.',
  'defaults.cta.button': 'Open the builder',

  // ---- Section template decorations (HeroSection badge etc.) ----
  'section.hero.badge': 'New release · v1.0',

  // ---- Features section (decorative grid items) ----
  'section.features.items.speed.title': 'Built for speed',
  'section.features.items.speed.body': 'Pages render in milliseconds, not seconds.',
  'section.features.items.secure.title': 'Secure by default',
  'section.features.items.secure.body':
    'Sensible defaults, opt-in extras when you need them.',
  'section.features.items.workflow.title': 'Fits your workflow',
  'section.features.items.workflow.body':
    'Plays nicely with the tools your team already uses.',
  'section.features.items.diffs.title': 'Versioned diffs',
  'section.features.items.diffs.body':
    'See exactly what changed between any two states.',
  'section.features.items.dx.title': 'Developer-friendly',
  'section.features.items.dx.body': 'A small, well-typed API. No surprises.',
  'section.features.items.alerts.title': 'Quiet alerts',
  'section.features.items.alerts.body':
    'Notifications that respect your focus time.',

  // ---- Pricing section ----
  'section.pricing.popular': 'Most popular',
  'section.pricing.starter.name': 'Starter',
  'section.pricing.starter.price': 'Free',
  'section.pricing.starter.period': 'forever',
  'section.pricing.starter.description':
    'Everything you need to draft and ship a single page.',
  'section.pricing.starter.f1': '1 project',
  'section.pricing.starter.f2': 'All sections',
  'section.pricing.starter.f3': 'Local autosave',
  'section.pricing.starter.f4': 'Community support',

  'section.pricing.pro.name': 'Pro',
  'section.pricing.pro.price': '$12',
  'section.pricing.pro.period': '/ month',
  'section.pricing.pro.description':
    'For freelancers and small teams shipping pages weekly.',
  'section.pricing.pro.f1': 'Unlimited projects',
  'section.pricing.pro.f2': 'Custom sections',
  'section.pricing.pro.f3': 'Cloud sync',
  'section.pricing.pro.f4': 'Priority email support',

  'section.pricing.team.name': 'Team',
  'section.pricing.team.price': '$32',
  'section.pricing.team.period': '/ month',
  'section.pricing.team.description':
    'Collaboration, roles, and audit logs for larger teams.',
  'section.pricing.team.f1': 'Everything in Pro',
  'section.pricing.team.f2': 'Shared workspaces',
  'section.pricing.team.f3': 'Role-based access',
  'section.pricing.team.f4': 'Audit log',

  // ---- Testimonials ----
  'section.testimonials.t1.quote':
    'It feels like the team understood exactly what I wanted to ship before I did. The defaults are calibrated, the constraints are kind.',
  'section.testimonials.t1.name': 'Maya Reyes',
  'section.testimonials.t1.role': 'Product Designer · Lattice',
  'section.testimonials.t2.quote':
    'I drafted three landing variants for an A/B test in an afternoon. The scope is small, but everything in it is sharp.',
  'section.testimonials.t2.name': 'Idris Karim',
  'section.testimonials.t2.role': 'Founder · Northwave',
  'section.testimonials.t3.quote':
    'No accounts, no setup, no surprises. It saves locally, opens fast, and gets out of my way. Refreshing.',
  'section.testimonials.t3.name': 'Eleni Sotiriou',
  'section.testimonials.t3.role': 'Engineer · Ground Studio',

  // ---- FAQ ----
  'section.faq.q1.q': 'Do I need an account?',
  'section.faq.q1.a':
    'No. Your draft is saved locally in this browser. No sign-up, no cloud, no friction.',
  'section.faq.q2.q': 'Will my work survive a refresh?',
  'section.faq.q2.a':
    'Yes. Every edit autosaves to LocalStorage. Close the tab, reopen it, your draft is right where you left it.',
  'section.faq.q3.q': 'Can I export to HTML?',
  'section.faq.q3.a':
    'Not in v0.1. Export is on the roadmap — for now the focus is on a calm, fast drafting experience.',
  'section.faq.q4.q': 'How many sections can I add?',
  'section.faq.q4.a':
    'There is no hard limit. The canvas keeps up well into the dozens of sections.',
  'section.faq.q5.q': 'Is the source code available?',
  'section.faq.q5.a':
    'The intent is to keep the project small and inspectable. A public repo is planned.',

  // ---- Contact ----
  'section.contact.email.label': 'Email',
  'section.contact.email.value': 'hello@example.com',
  'section.contact.chat.label': 'Live chat',
  'section.contact.chat.value': 'Mon–Fri, 9am–6pm',
  'section.contact.office.label': 'Office',
  'section.contact.office.value': '2nd floor, 14 Chambers Lane',
  'section.contact.form.firstName': 'First name',
  'section.contact.form.firstNamePlaceholder': 'Maya',
  'section.contact.form.lastName': 'Last name',
  'section.contact.form.lastNamePlaceholder': 'Reyes',
  'section.contact.form.email': 'Email',
  'section.contact.form.emailPlaceholder': 'you@company.com',
  'section.contact.form.message': 'Message',
  'section.contact.form.messagePlaceholder': 'Tell us a little about the work...',

  // ---- Preview ----
  'preview.empty.title': 'Nothing to preview yet.',
  'preview.empty.body':
    'Add a section or two on the canvas to see your page render here.',
} as const

export type TranslationKey = keyof typeof en

export const ar: Record<TranslationKey, string> = {
  // Common
  'common.openBuilder': 'افتح المحرر',
  'common.startBuilding': 'ابدأ الآن',
  'common.viewSource': 'عرض الكود على GitHub',
  'common.preview': 'معاينة',
  'common.reset': 'إعادة ضبط',
  'common.confirmReset': 'تأكيد المسح',
  'common.backToHome': 'الرئيسية',
  'common.backToEditor': 'العودة إلى المحرر',
  'common.learnMore': 'اعرف المزيد',
  'common.untitledDraft': 'مسودة بلا عنوان',
  'common.local': 'محلي',
  'common.savedPrefix': 'محفوظ · ',
  'common.justNow': 'الآن',
  'common.secondsAgo': 'منذ {n} ث',
  'common.minutesAgo': 'منذ {n} د',
  'common.hoursAgo': 'منذ {n} س',
  'common.daysAgo': 'منذ {n} يوم',

  // Navbar
  'nav.features': 'المميزات',
  'nav.howItWorks': 'آلية العمل',
  'nav.github': 'GitHub',
  'nav.langLabel': 'اللغة',

  // Hero
  'hero.badge': 'الإصدار 0.1 — معاينة عامة',
  'hero.badgeNote': 'الجديد',
  'hero.title': 'أنشئ صفحة هبوط احترافية خلال دقائق',
  'hero.description':
    'اختر من أقسام جاهزة، عدّل النصوص والألوان، واطلق موقعك بسهولة.',

  // Features
  'features.eyebrow': 'ما هو',
  'features.heading': 'مجموعة أدوات صغيرة، مُتقَنة الصنع.',
  'features.subheading':
    'كل ما يلي يبتعد عن طريقك حتى تحتاجه. لا شيء هنا إلا في خدمة إطلاق صفحتك.',
  'features.cards.sections.title': 'أقسام جاهزة بتصميم احترافي.',
  'features.cards.sections.body':
    'سبعة أقسام — Hero وFeatures وPricing وTestimonials وFAQ وContact وCTA — كلٌّ منها مصمَّم ليبدو مدروسًا منذ اللحظة الأولى.',
  'features.cards.drag.title': 'أعد الترتيب بالسحب.',
  'features.cards.drag.body': 'الأقسام تستقر في مكانها. بلا شبكات للضبط.',
  'features.cards.style.title': 'ألوان ونصوص، تُحرَّر مباشرة.',
  'features.cards.style.body':
    'المُفتِّش يعدّل لحظيًا — ترى كل تغيير وأنت تكتب.',
  'features.cards.save.title': 'حفظ محلي فوري.',
  'features.cards.save.body':
    'بلا حسابات وبلا سحابة. مسودتك تعيش في متصفّحك وتصمد أمام التحديث — بلا إعداد وبلا انتظار.',
  'features.savedLabel': 'محفوظ',
  'features.savedSuffix': '— الآن',

  // HowItWorks
  'how.eyebrow': 'آلية العمل',
  'how.heading': 'ثلاث خطوات، بلا تعقيد.',
  'how.steps.1.title': 'اختر قسمًا.',
  'how.steps.1.body':
    'أضف Hero أو Features أو Pricing — ما تحتاجه الصفحة. كدّس ما يلزم.',
  'how.steps.2.title': 'حرّر مباشرة.',
  'how.steps.2.body':
    'اضغط على أي قسم ليفتح المُفتِّش. غيّر العنوان، بدّل الألوان، اربط الزر.',
  'how.steps.3.title': 'عاين وأطلق.',
  'how.steps.3.body':
    'اضغط معاينة لرؤية الصفحة وحدها. المسودة تُحفَظ تلقائيًا أثناء العمل.',

  // FinalCTA
  'finalCta.title': 'افتح المحرر. أنجِز شيئًا اليوم.',
  'finalCta.body':
    'بلا اشتراك. بلا إعداد. مسودتك تعيش في متصفّحك — صامدة أمام التحديث ومِلكك وحدك.',

  // Footer
  'footer.tagline': 'أداة صغيرة محلية أولًا.',

  // Builder shell
  'builder.untitledDraft': 'مسودة بلا عنوان',
  'builder.sections': 'الأقسام',
  'builder.clickToAdd': 'اضغط للإضافة',
  'builder.dragHint':
    'تلميح: اسحب مقبض الإمساك على القسم لإعادة ترتيبه على اللوحة.',
  'builder.empty.title': 'لوحتك فارغة.',
  'builder.empty.body':
    'اختر قسمًا من القائمة الجانبية لتبدأ تأليف صفحتك. غالبًا Hero هو البداية المناسبة.',
  'builder.empty.hint': 'أضف أوّل قسم من الشريط الجانبي',
  'builder.deleteAria': 'احذف قسم {label}',
  'builder.dragAria': 'اسحب قسم {label}',
  'builder.langToggle': 'تبديل اللغة',

  // Inspector
  'inspector.empty.title': 'لم تختر شيئًا',
  'inspector.empty.body':
    'اضغط على أي قسم في اللوحة لتعديل محتواه وألوانه هنا.',
  'inspector.editingLabel': 'تحرير',
  'inspector.section.content': 'المحتوى',
  'inspector.section.style': 'التصميم',
  'inspector.field.title': 'العنوان',
  'inspector.field.titlePlaceholder': 'عنوان القسم',
  'inspector.field.description': 'الوصف',
  'inspector.field.descriptionPlaceholder': 'سطر مساند مختصر',
  'inspector.field.buttonText': 'نص الزر',
  'inspector.field.buttonTextPlaceholder': 'ابدأ',
  'inspector.field.buttonLink': 'رابط الزر',
  'inspector.field.primaryColor': 'اللون الأساسي',
  'inspector.field.backgroundColor': 'لون الخلفية',
  'inspector.changeColorAria': 'غيّر {label}',

  // Registry
  'registry.hero.label': 'القسم الافتتاحي',
  'registry.hero.description': 'افتتاحية واثقة.',
  'registry.features.label': 'المميزات',
  'registry.features.description': 'اعرض ما يقدّمه منتجك.',
  'registry.pricing.label': 'التسعير',
  'registry.pricing.description': 'خطط معروضة بوضوح.',
  'registry.testimonials.label': 'آراء العملاء',
  'registry.testimonials.description': 'أصوات من يستخدمونه.',
  'registry.faq.label': 'الأسئلة الشائعة',
  'registry.faq.description': 'استبق الأسئلة الواضحة.',
  'registry.contact.label': 'تواصل',
  'registry.contact.description': 'نموذج نظيف مباشر.',
  'registry.cta.label': 'دعوة للإجراء',
  'registry.cta.description': 'نَخسة أخيرة حاسمة.',

  // Defaults
  'defaults.hero.title': 'أنشئ صفحة هبوط احترافية خلال دقائق',
  'defaults.hero.description':
    'اختر من أقسام جاهزة، عدّل النصوص والألوان، واطلق موقعك بسهولة.',
  'defaults.hero.button': 'ابدأ الآن',

  'defaults.features.title': 'كل ما تحتاجه، بلا زيادة.',
  'defaults.features.description':
    'مجموعة أدوات مُركّزة لا تشوّش عليك. مصمَّمة للسرعة، مُتقَنة الصنع.',
  'defaults.features.button': 'عرض كل المميزات',

  'defaults.pricing.title': 'تسعير بسيط، مُصمَّم للفِرق.',
  'defaults.pricing.description': 'بلا رسوم خفية ولا مفاجآت. اختر خطة تناسبك.',
  'defaults.pricing.button': 'عرض الخطط',

  'defaults.testimonials.title': 'موثوقون من فِرَق تنجز.',
  'defaults.testimonials.description':
    'مختارات من المُشغّلين والمصممين والمهندسين الذين يبنون معنا.',
  'defaults.testimonials.button': 'اقرأ المزيد من القصص',

  'defaults.faq.title': 'أسئلة متكرّرة',
  'defaults.faq.description': 'قراءة سريعة لأكثر ما يُسأل قبل الاشتراك.',
  'defaults.faq.button': 'تحدّث معنا',

  'defaults.contact.title': 'تواصل معنا.',
  'defaults.contact.description':
    'أخبرنا عن العمل. نردّ خلال يوم عمل واحد.',
  'defaults.contact.button': 'إرسال الرسالة',

  'defaults.cta.title': 'جاهز لإنشاء صفحتك الأولى؟',
  'defaults.cta.description':
    'افتح المحرر، أضف بعض الأقسام، وشاهدها تكتمل.',
  'defaults.cta.button': 'افتح المحرر',

  // Section decorations
  'section.hero.badge': 'إصدار جديد · v1.0',

  'section.features.items.speed.title': 'مُصمَّم للسرعة',
  'section.features.items.speed.body':
    'الصفحات تُعرَض في أجزاء من الثانية، لا في ثوانٍ.',
  'section.features.items.secure.title': 'آمن افتراضيًا',
  'section.features.items.secure.body':
    'إعدادات افتراضية حكيمة، وإضافات اختيارية عند الحاجة.',
  'section.features.items.workflow.title': 'يلائم سير عملك',
  'section.features.items.workflow.body':
    'يتفاهم مع الأدوات التي يستعملها فريقك.',
  'section.features.items.diffs.title': 'فروقات موثَّقة',
  'section.features.items.diffs.body':
    'شاهد بالضبط ما تغيّر بين أي حالتين.',
  'section.features.items.dx.title': 'صديق للمطورين',
  'section.features.items.dx.body':
    'واجهة برمجية صغيرة ومُحكمة الأنواع. بلا مفاجآت.',
  'section.features.items.alerts.title': 'تنبيهات هادئة',
  'section.features.items.alerts.body': 'إشعارات تحترم وقتك للتركيز.',

  // Pricing
  'section.pricing.popular': 'الأكثر شيوعًا',
  'section.pricing.starter.name': 'مبتدئ',
  'section.pricing.starter.price': 'مجاني',
  'section.pricing.starter.period': 'للأبد',
  'section.pricing.starter.description':
    'كل ما تحتاجه لتأليف صفحة واحدة وإطلاقها.',
  'section.pricing.starter.f1': 'مشروع واحد',
  'section.pricing.starter.f2': 'كل الأقسام',
  'section.pricing.starter.f3': 'حفظ محلي تلقائي',
  'section.pricing.starter.f4': 'دعم المجتمع',

  'section.pricing.pro.name': 'احترافي',
  'section.pricing.pro.price': '$12',
  'section.pricing.pro.period': '/ شهريًا',
  'section.pricing.pro.description':
    'للمستقلّين والفِرق الصغيرة الذين يطلقون صفحات أسبوعيًا.',
  'section.pricing.pro.f1': 'مشاريع غير محدودة',
  'section.pricing.pro.f2': 'أقسام مخصَّصة',
  'section.pricing.pro.f3': 'مزامنة سحابية',
  'section.pricing.pro.f4': 'دعم بريدي ذو أولوية',

  'section.pricing.team.name': 'فريق',
  'section.pricing.team.price': '$32',
  'section.pricing.team.period': '/ شهريًا',
  'section.pricing.team.description':
    'تعاون وأدوار وسجلّات تدقيق للفِرَق الكبيرة.',
  'section.pricing.team.f1': 'كل ما في الاحترافي',
  'section.pricing.team.f2': 'مساحات عمل مشتركة',
  'section.pricing.team.f3': 'وصول حسب الدور',
  'section.pricing.team.f4': 'سجل تدقيق',

  // Testimonials (names kept; roles localized)
  'section.testimonials.t1.quote':
    'شعرتُ أن الفريق فهم تمامًا ما أردتُ إطلاقه قبل أن أعرفه. الإعدادات الافتراضية مدروسة، والقيود لطيفة.',
  'section.testimonials.t1.name': 'مايا رِيَيس',
  'section.testimonials.t1.role': 'مصمِّمة منتج · Lattice',
  'section.testimonials.t2.quote':
    'أعددتُ ثلاث صفحات لاختبار A/B في فترة بعد الظهر. النطاق صغير، لكن كل ما فيه مُتقن.',
  'section.testimonials.t2.name': 'إدريس كريم',
  'section.testimonials.t2.role': 'مؤسِّس · Northwave',
  'section.testimonials.t3.quote':
    'بلا حسابات وبلا إعداد وبلا مفاجآت. تحفظ محليًا، تفتح بسرعة، وتبتعد عن طريقي. منعشة.',
  'section.testimonials.t3.name': 'إيليني سوتيريو',
  'section.testimonials.t3.role': 'مهندسة · Ground Studio',

  // FAQ
  'section.faq.q1.q': 'هل أحتاج إلى حساب؟',
  'section.faq.q1.a':
    'لا. مسودتك محفوظة محليًا في هذا المتصفّح. بلا اشتراك ولا سحابة ولا تعقيد.',
  'section.faq.q2.q': 'هل يصمد عملي أمام التحديث؟',
  'section.faq.q2.a':
    'نعم. كل تعديل يُحفَظ تلقائيًا في LocalStorage. أغلق التبويب وأعد فتحه — مسودتك بانتظارك.',
  'section.faq.q3.q': 'هل يمكنني التصدير إلى HTML؟',
  'section.faq.q3.a':
    'ليس في الإصدار 0.1. التصدير ضمن الخارطة — حاليًا التركيز على تجربة كتابة هادئة وسريعة.',
  'section.faq.q4.q': 'كم قسمًا يمكنني إضافته؟',
  'section.faq.q4.a':
    'لا حدّ صارم. اللوحة تواكب عشرات الأقسام دون مشكلة.',
  'section.faq.q5.q': 'هل الكود المصدري متاح؟',
  'section.faq.q5.a':
    'القصد إبقاء المشروع صغيرًا قابلًا للفحص. مستودع عام مُخطَّط له.',

  // Contact
  'section.contact.email.label': 'البريد',
  'section.contact.email.value': 'hello@example.com',
  'section.contact.chat.label': 'محادثة مباشرة',
  'section.contact.chat.value': 'الإثنين–الجمعة، 9 ص – 6 م',
  'section.contact.office.label': 'المكتب',
  'section.contact.office.value': 'الطابق الثاني، 14 شارع تشامبرز',
  'section.contact.form.firstName': 'الاسم الأول',
  'section.contact.form.firstNamePlaceholder': 'مايا',
  'section.contact.form.lastName': 'الاسم الأخير',
  'section.contact.form.lastNamePlaceholder': 'رِيَيس',
  'section.contact.form.email': 'البريد الإلكتروني',
  'section.contact.form.emailPlaceholder': 'you@company.com',
  'section.contact.form.message': 'الرسالة',
  'section.contact.form.messagePlaceholder': 'أخبرنا قليلًا عن العمل…',

  // Preview
  'preview.empty.title': 'لا شيء للمعاينة بعد.',
  'preview.empty.body':
    'أضف قسمًا أو قسمين على اللوحة لتظهر صفحتك هنا.',
}

export const translations = { en, ar } as const

export type Language = keyof typeof translations
