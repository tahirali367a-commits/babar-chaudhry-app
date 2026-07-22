// medicines-data.js - 100 Real & Distinct Agricultural Medicines/Fertilizers Slider

const medicinesData = [
    { id: 1, title: "یوریا کھاد - اوریجنل نائٹروجن", tag: "زرعی کھاد", desc: "پودوں کی تیز رفتار بڑھوتری اور رنگت کو گہرا سبز بنانے کے لیے۔", image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "ڈی اے پی کھاد (DAP)", tag: "زرعی کھاد", desc: "جڑوں کی مضبوطی اور طاقتور فصل کے لیے فاسفورس کا بہترین ذریعہ۔", image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "کیڑے مار اسپرے (Pesticide)", tag: "کیڑے مار", desc: "سست تیلا، سنڈی اور سفید مکھی کا مکمل اور فوری خاتمہ۔", image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "جڑی بوٹی مار فارمولا (Herbicide)", tag: "جڑی بوٹی مار", desc: "گندم، مکئی اور کپاس کی نقصان دہ جڑی بوٹیوں کی تلفی۔", image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "فنگس کش دوا (Fungicide)", tag: "فنگس علاج", desc: "پتوں کے جھلساؤ اور جڑوں کی فنگس کی بیماریوں کا مؤثر علاج۔", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "پوٹاش کھاد (SOP/MOP)", tag: "زرعی کھاد", desc: "دانے اور پھل کا سائز بڑھانے اور رنگت بہتر بنانے کے لیے۔", image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80" },
    { id: 7, title: "زنک اور سلفیٹ بائیو ٹانک", tag: "طاقتور ٹانک", desc: "پودوں کی پیلاہٹ ختم کر کے شادابی اور رنگت بحال کرنے کا علاج۔", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80" },
    { id: 8, title: "کپاس سنڈی کنٹرول اسپرے", tag: "کیڑے مار", desc: "گلابی سنڈی اور امریکن سنڈی کے حملے سے مکمل بچاؤ۔", image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80" },
    { id: 9, title: "گندم جڑی بوٹی مار اسپرے", tag: "جڑی بوٹی مار", desc: "دنبی گھاس اور جلیبی بوٹی کا جڑ سے خاتمہ۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 10, title: "امینو ایسڈ گروتھ پروموٹر", tag: "طاقتور ٹانک", desc: "پودوں کو شدید گرمی اور سوکھے کے اثرات سے محفوظ رکھنے کے لیے۔", image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80" },
    { id: 11, title: "کیلشیم امونیم نائٹریٹ (CAN)", tag: "زرعی کھاد", desc: "زمین کی تیزابیت درست کر کے فصل کی تیزی سے نشوونما کے لیے۔", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80" },
    { id: 12, title: "دانے دار زہر (Granular Pesticide)", tag: "کیڑے مار", desc: "مکئی کے تنا چھیدک اور کماد کے کیڑوں کے لیے دانے دار دوا۔", image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80" },
    { id: 13, title: "بائیو سلفر پاؤڈر و اسپرے", tag: "فنگس علاج", desc: "سفید فنگس اور گرمی کے تناؤ سے فصل کی حفاظت۔", image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80" },
    { id: 14, title: "مکئی گروتھ بوسٹر", tag: "طاقتور ٹانک", desc: "چھلی کے سائز اور دانوں کی بھرپور بھرائی کے لیے خاص فارمولا۔", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80" },
    { id: 15, title: "نظام جڑ روٹ ڈیوپلمنٹ مائع", tag: "طاقتور ٹانک", desc: "نئے پودوں کی جڑوں کو تیزی سے پھیلانے کا سائنسی محلول۔", image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80" },
    { id: 16, title: "تھریپس اور لال مکڑی کنٹرول", tag: "کیڑے مار", desc: "مرچ اور کپاس کے باریک کیڑوں کا مکمل صفایا۔", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80" },
    { id: 17, title: "این پی کے (NPK) مائع فارمولا", tag: "زرعی کھاد", desc: "نائٹروجن، فاسفورس اور پوٹاش کا متوازن مرکب۔", image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80" },
    { id: 18, title: "چوڑی پتے والی جڑی بوٹی مار", tag: "جڑی بوٹی مار", desc: "فصل کو نقصان پہنچائے بغیر خود رو پودوں کا خاتمہ۔", image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80" },
    { id: 19, title: "کاپر آکسی کلورائڈ", tag: "فنگس علاج", desc: "سبزیوں اور فصلوں کے فنگس داغوں کا علاج۔", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=800&q=80" },
    { id: 20, title: "ہیومک ایسڈ سولوشن", tag: "طاقتور ٹانک", desc: "زمین کی زرخیزی اور سخت زمین کو نرم بنانے کا قدرتی حل۔", image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80" },
    { id: 21, title: "نائٹرو فاس کھاد", tag: "زرعی کھاد", desc: "نائٹروجن اور فاسفورس کا فوری اثر کرنے والا امتزاج۔", image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80" },
    { id: 22, title: "سفید مکھی فاسٹ کلر اسپرے", tag: "کیڑے مار", desc: "کپاس میں سفید مکھی کا سائنسی اور فوری خاتمہ۔", image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80" },
    { id: 23, title: "باریک پتے والی جڑی بوٹی مار", tag: "جڑی بوٹی مار", desc: "جوار اور بجرے میں جنگلی گھاس کی تلفی۔", image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80" },
    { id: 24, title: "بورون ۵٪ مائع محلول", tag: "طاقتور ٹانک", desc: "پھول گرنے سے روکنے اور پھل کی بھرپور سیٹنگ کے لیے۔", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80" },
    { id: 25, title: "بلاسٹ و زنگ کش فنگسائیڈ", tag: "فنگس علاج", desc: "چاول اور گندم کی فصل میں پتے کے بلاسٹ کا سائنسی حل۔", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=800&q=80" },
    { id: 26, title: "سنگل سپر فاسفیٹ (SSP)", tag: "زرعی کھاد", desc: "سلفیٹ اور فاسفورس کی کمی پورا کرنے والی زرعی کھاد۔", image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80" },
    { id: 27, title: "لش گرین نائٹروجن ٹانک", tag: "طاقتور ٹانک", desc: "فصل کی پیلاہٹ دور کر کے شادابی لانے والا ہائیڈرو ٹانک۔", image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80" },
    { id: 28, title: "سبزیوں کی کیڑے مار دوا", tag: "کیڑے مار", desc: "ٹماٹر اور بینگن میں سسٹ تیلا اور کیڑے کنٹرول۔", image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80" },
    { id: 29, title: "کپاس پری ایمرجنس جڑی بوٹی مار", tag: "جڑی بوٹی مار", desc: "اگاؤ سے پہلے جڑی بوٹیوں کی روکتھام کا زہر۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 30, title: "میگنیشیم سلفیٹ کرسٹل", tag: "زرعی کھاد", desc: "کلوروفل کی مقدار بڑھا کر پودوں کا عملِ ضیائی تالیف تیز کرنے کے لیے۔", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80" },
    { id: 31, title: "فاسفورس سلفیٹ مائع", tag: "زرعی کھاد", desc: "جڑوں میں فاسفورس کی حل پذیری اور منتقلی تیز۔", image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80" },
    { id: 32, title: "ٹوبیکو کیڑے مار ایکسٹریکٹ", tag: "کیڑے مار", desc: "نامیاتی طریقے سے چوسنے والے کیڑوں پر قابو۔", image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80" },
    { id: 33, title: "مکئی و دھان جڑی بوٹی کنٹرول", tag: "جڑی بوٹی مار", desc: "سوانک اور جلیبی گھاس کا صفایا۔", image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80" },
    { id: 34, title: "ملٹی مائیکرو نیوٹریئنٹ مکسچر", tag: "طاقتور ٹانک", desc: "آئرن، زنک، بورون اور کاپر کا پاور مکس۔", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80" },
    { id: 35, title: "ڈاؤن ملڈیو اینٹی فنگس", tag: "فنگس علاج", desc: "کدو اور سبزیوں پر سفیدی مائل فنگس کا خاتمہ۔", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=800&q=80" },
    { id: 36, title: "امونیم سلفیٹ دانے دار", tag: "زرعی کھاد", desc: "کلراٹھی اور سخت زمین کے لیے نائٹروجن و سلفر کا بہترین امتزاج۔", image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80" },
    { id: 37, title: "فولیر اسپرے این پی کے", tag: "طاقتور ٹانک", desc: "پتوں کے ذریعے فوری جذب ہونے والی جدید کھاد۔", image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80" },
    { id: 38, title: "سلو آکسین سنڈی زہر", tag: "کیڑے مار", desc: "سنڈیوں کا معدے اور جلد پر اثر کرنے والا زہر۔", image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80" },
    { id: 39, title: "نہر و کھال جڑی بوٹی پاک اسپرے", tag: "جڑی بوٹی مار", desc: "پانی کے راستوں سے جڑی بوٹیاں صاف کرنے کا پاور اسپرے Call/WhatsApp۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 40, title: "کیلشیم نائٹریٹ کرسٹل", tag: "زرعی کھاد", desc: "پھل کو پھٹنے سے بچانے اور طاقت دینے کے لیے۔", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80" },
    { id: 41, title: "سوائل کنڈیشنر آرگینک", tag: "زرعی کھاد", desc: "زمین کا نامیاتی مادہ بڑھانے اور جراثیم فعال کرنے والا پاؤڈر۔", image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80" },
    { id: 42, title: "سبز تیلا و جھینگا کیڑا کنٹرول", tag: "کیڑے مار", desc: "فصل کی نئی کوپلووں کی حفاظت کا اسپرے Call/WhatsApp۔", image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80" },
    { id: 43, title: "کماد کی جڑی بوٹی مار دوا", tag: "جڑی بوٹی مار", desc: "کماد کی فصل سے سخت جڑی بوٹیاں تلف کریں۔", image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80" },
    { id: 44, title: "سائنسی فلوِک ایسڈ ڈراپس", tag: "طاقتور ٹانک", desc: "کھادوں کی افادیت دوگنی کرنے والا بائیو محلول۔", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80" },
    { id: 45, title: "روٹ روٹ روکتھام ڈرنچنگ", tag: "فنگس علاج", desc: "جڑ کے سڑنے اور پودا سوکھنے کی بیماری سے بچاؤ۔", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=800&q=80" },
    { id: 46, title: "پوٹاشیم نائٹریٹ 13-0-44", tag: "زرعی کھاد", desc: "دانے کا وزن اور چمک بڑھانے والی امپورٹڈ کھاد۔", image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80" },
    { id: 47, title: "سی ویڈ سمندری کائی ایکسٹریکٹ", tag: "طاقتور ٹانک", desc: "قدرتی ہارمونز سے لیس گروتھ اسٹیمولنٹ۔", image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80" },
    { id: 48, title: "امریکن فال آرمی ورم زہر", tag: "کیڑے مار", desc: "مکئی کے پروانوں اور آرمی ورم پر فوری کاری ضرب۔", image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80" },
    { id: 49, title: "دھان جڑی بوٹی تلفی مائع", tag: "جڑی بوٹی مار", desc: "منجی اور چاول کی کدو گھاس کا مکمل صفایا۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 50, title: "زنک چیزلیٹڈ ۱۰٪", tag: "زرعی کھاد", desc: "پودوں کی رکاوٹ ختم کر کے قد بڑھانے کی فوری خوراک۔", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80" },
    { id: 51, title: "سلفر ۸۰٪ ڈبلیو ڈی جی", tag: "فنگس علاج", desc: "فنگس اور لال مکڑی پر یکساں اور مؤثر کنٹرول۔", image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80" },
    { id: 52, title: "سسٹمک کیڑے مار سائلنٹ زہر", tag: "کیڑے مار", desc: "پودے کے وجود میں جذب ہو کر اندرونی کیڑے ختم کرے۔", image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80" },
    { id: 53, title: "سورغم و باجرہ جڑی بوٹی اسپرے", tag: "جڑی بوٹی مار", desc: "چارے کی فصلوں میں جڑی بوٹیاں روکے۔", image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80" },
    { id: 54, title: "سائٹوکائنن گروتھ محلول", tag: "طاقتور ٹانک", desc: "شاخیں اور پھول بڑھانے کا خاص اینزائم۔", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80" },
    { id: 55, title: "لیٹ بلاسٹ فنگل کنٹرول", tag: "فنگس علاج", desc: "آلو کے جھلساؤ کا گارنٹی شدہ اوریجنل علاج۔", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=800&q=80" },
    { id: 56, title: "مونو امونیم فاسفیٹ (MAP)", tag: "زرعی کھاد", desc: "شروعاتی مرحلے میں تیز رفتار جڑیں بنانے کی کھاد۔", image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80" },
    { id: 57, title: "پاور بوٹ برانڈڈ ٹانک", tag: "طاقتور ٹانک", desc: "فصل کا وزن اور کوالٹی دوگنا کرنے والا فارمولا۔", image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80" },
    { id: 58, title: "دم گھوٹو زہر برائے کیڑا", tag: "کیڑے مار", desc: "تیز بخارات بنا کر کیڑوں کو سانس روک کر تلف کرے۔", image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80" },
    { id: 59, title: "بارڈر جڑی بوٹی تلفی مائع", tag: "جڑی بوٹی مار", desc: "زمین کی حدود سے تمام خود رو بوٹیاں ہٹائے۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 60, title: "کومپلیکس این پی کے 15-15-15", tag: "زرعی کھاد", desc: "تینوں بنیادی اجزا کی متوازن دانے دار خوراک۔", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80" },
    { id: 61, title: "سائلنٹ کلر بائیو پیسٹیسائڈ", tag: "کیڑے مار", desc: "نامیاتی زرعی ادویات سے سست اور تیلے پر فتح۔", image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80" },
    { id: 62, title: "زمین اصلاحی جپسم سولوشن", tag: "زرعی کھاد", desc: "سخت اور نمکیات زدہ رقبے کی حالت سنبھالے۔", image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80" },
    { id: 63, title: "مکئی و کپاس مشترکہ جڑی بوٹی کش", tag: "جڑی بوٹی مار", desc: "مختلف فصلوں میں محفوظ جڑی بوٹی کنٹرول۔", image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80" },
    { id: 64, title: "جبرالک ایسڈ ٹیبلٹس", tag: "طاقتور ٹانک", desc: "سبزیوں اور پھلوں کا سائز و لمبائی تیزی سے بڑھائے۔", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80" },
    { id: 65, title: "کالر روٹ و فنگس کاٹ", tag: "فنگس علاج", desc: "پودے کے تنے کے نچلے حصے کا گلنا روکے۔", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=800&q=80" },
    { id: 66, title: "آئرن چیزلیٹ سولوشن", tag: "زرعی کھاد", desc: "پتوں کی زردی دور کرنے کی خاص زرعی خوراک۔", image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80" },
    { id: 67, title: "اینٹی اسٹریس بائیو فارمولا", tag: "طاقتور ٹانک", desc: "موسمی تبدیلیوں کا دباؤ برداشت کرنے کا محلول۔", image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80" },
    { id: 68, title: "سفید سنڈی ٹاپ ڈرنچنگ", tag: "کیڑے مار", desc: "کماد اور کپاس کی سنڈیوں کا خاتمہ۔", image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80" },
    { id: 69, title: "باغبان جڑی بوٹی سپرے", tag: "جڑی بوٹی مار", desc: "پھلدار درختوں کے نیچے جڑی بوٹیوں کی تلفی Call/WhatsApp۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 70, title: "میکرو نیوٹریئنٹ این پی کے سوائل", tag: "زرعی کھاد", desc: "زمین کے بنیادی غذائی اجزا پورا کرنے کا فارمولا۔", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80" },
    { id: 71, title: "پاؤڈری ملڈیو فنگس کلر", tag: "فنگس علاج", desc: "پتوں پر سفید پاؤڈر نما فنگس کا سائنسی حل۔", image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80" },
    { id: 72, title: "سینگنگ بائیٹ پیسٹیسائڈ", tag: "کیڑے مار", desc: "چبانے والے کیڑوں پر جلد اثر کرنے والا اسپرے Call/WhatsApp۔", image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80" },
    { id: 73, title: "گندم اگاؤ کے بعد جڑی بوٹی کش", tag: "جڑی بوٹی مار", desc: "اگاؤ کے ۲۰ دن بعد کی جانے والی اسپرے دوا۔", image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80" },
    { id: 74, title: "فلاورنگ بوسٹر بائیو مائع", tag: "طاقتور ٹانک", desc: "پھولوں کی تعداد اور سیٹنگ میں زبردست اضافہ۔", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80" },
    { id: 75, title: "سٹیم روٹ علاج محلول", tag: "فنگس علاج", desc: "تنے کے گلنے کی خطرناک بیماری کی دوا Call/WhatsApp۔", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=800&q=80" },
    { id: 76, title: "فاسفیٹ سولوبلائزنگ بیکٹیریا", tag: "زرعی کھاد", desc: "زمین میں موجود بند فاسفورس کو بحال کرنے کی کھاد۔", image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80" },
    { id: 77, title: "پلانٹ وٹامن بی-کمپلیکس", tag: "طاقتور ٹانک", desc: "شدید گرمی میں پودوں کو مرجھانے سے محفوظ رکھے۔", image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80" },
    { id: 78, title: "چلی و ٹماٹو کیڑا اسپرے", tag: "کیڑے مار", desc: "مرچ کے پتوں کا مرڑاؤ اور کیڑا روکے۔", image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80" },
    { id: 79, title: "زیرو ٹلیج جڑی بوٹی زہر", tag: "جڑی بوٹی مار", desc: "بغیر حل چلائے زمین کی بوٹیاں ختم کرنے کا اسپرے Call/WhatsApp۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 80, title: "پوٹاشیم سلفیٹ گرینولر", tag: "زرعی کھاد", desc: "اعلیٰ کوالٹی پوٹاش جو پانی میں حل پذیر ہے۔", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80" },
    { id: 81, title: "سائلنٹ پرو نامیاتی کھاد", tag: "زرعی کھاد", desc: "قدرتی معدنیات سے آراستہ زمین دوست کھاد۔", image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80" },
    { id: 82, title: "گلابی سنڈی کا موثر علاج", tag: "کیڑے مار", desc: "کپاس کے ڈوڈے کی حفاظت کا خاص فارمولا Call/WhatsApp۔", image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80" },
    { id: 83, title: "کپاس و چاول جڑی بوٹی مائع", tag: "جڑی بوٹی مار", desc: "مختلف فصلوں کی تمام جڑی بوٹیوں کی تلفی۔", image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80" },
    { id: 84, title: "پلانٹ گروتھ ہارمون مکس", tag: "طاقتور ٹانک", desc: "پودے کا قد اور پھل کی سائز بڑھائے۔", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80" },
    { id: 85, title: "اینٹی بیکٹیریل وائرس شیلڈ", tag: "فنگس علاج", desc: "بیکٹیریا اور وائرس کے حملے سے تحفظ۔", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=800&q=80" },
    { id: 86, title: "سلفر مائع مائیکرو کرسٹل", tag: "زرعی کھاد", desc: "پودوں کی خوراک کی فراہمی میں تیزی لائے۔", image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80" },
    { id: 87, title: "اینزائم بیسڈ گروتھ ٹانک", tag: "طاقتور ٹانک", desc: "پودوں کے اندرونی نظام کو متحرک کرے۔", image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80" },
    { id: 88, title: "فروٹ فلائی مکھی ٹریپ زہر", tag: "کیڑے مار", desc: "پھل کی مکھی کو ڈنک مارنے سے روکے۔", image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80" },
    { id: 89, title: "مکئی و جوار جڑی بوٹی اسپرے", tag: "جڑی بوٹی مار", desc: "چھلی کی فصل کو جڑی بوٹی سے پاک کرے۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 90, title: "مائیکرو ایلیمنٹس ملٹی زرعی کھاد", tag: "زرعی کھاد", desc: "تمام ضروری زائل عناصر پر مشتمل کھاد۔", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80" },
    { id: 91, title: "فاسفورس ریچ سوائل بوسٹر", tag: "زرعی کھاد", desc: "جڑ کے نظام کو مضبوط بنانے کا سائنسی طریقہ۔", image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=80" },
    { id: 92, title: "لاروا و سنڈی کلر فاسٹ اسپرے", tag: "کیڑے مار", desc: "سنڈیوں کی انڈوں سے نکلتے ہی تلفی۔", image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80" },
    { id: 93, title: "کپاس اگاؤ کے بعد جڑی بوٹی کش", tag: "جڑی بوٹی مار", desc: "پودے کی حفاظت اور بوٹیوں کا صفایا۔", image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80" },
    { id: 94, title: "سپر سائٹو بائیو محلول", tag: "طاقتور ٹانک", desc: "فصل کی زیادہ سے زیادہ بالیاں بنانے والا۔", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80" },
    { id: 95, title: "پتوں کی فنگس اینٹی پرو", tag: "فنگس علاج", desc: "پیلاہٹ اور فنگل داغوں کا مکمل خاتمہ۔", image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?auto=format&fit=crop&w=800&q=80" },
    { id: 96, title: "نائٹروجن سلفیٹ مائع", tag: "زرعی کھاد", desc: "ترشاوہ پھلوں اور فصل کی بہترین خوراک۔", image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80" },
    { id: 97, title: "پلانٹ انرجی بوسٹر ڈراپس", tag: "طاقتور ٹانک", desc: "پودے کو توانائی فراہم کر کے پیداوار بڑھائے۔", image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80" },
    { id: 98, title: "تیلا و چوسنے والے کیڑے کنٹرول", tag: "کیڑے مار", desc: "سیاہ اور سبز تیلے کا بہترین اور اوریجنل توڑ۔", image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80" },
    { id: 99, title: "ہمہ اقسام جڑی بوٹی کلر", tag: "جڑی بوٹی مار", desc: "ہر قسم کی جنگلی گھاس ختم کرے Call/WhatsApp۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 100, title: "فل سپیکٹرم بائیو نیوٹریئنٹ", tag: "زرعی کھاد", desc: "۱00 اوریجنل فارمولا - کسان کی مکمل خوشحالی کے لیے۔", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80" }
];

// Auto Slider Execution Script
function loadMedicinesSlider() {
    const container = document.getElementById('medicinesSlider');
    if (!container) return;

    let htmlContent = `<div class="slider-wrapper" id="medSlideWrapper" style="display: flex; transition: transform 0.6s ease-in-out;">`;
    
    medicinesData.forEach((item) => {
        htmlContent += `
            <div class="slide-item" style="min-width: 100%; box-sizing: border-box; padding: 10px; text-align: center;">
                <div style="position: relative; overflow: hidden; border-radius: 15px; border: 2px solid #00ff87; box-shadow: 0 0 15px rgba(0,255,135,0.3);">
                    <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 240px; object-fit: cover; display: block;">
                    <span style="position: absolute; top: 10px; right: 10px; background: #00ff87; color: #000; padding: 4px 12px; border-radius: 20px; font-weight: bold; font-size: 0.85rem;">${item.tag} #${item.id}</span>
                </div>
                <h3 style="color: #00ff87; margin-top: 12px; font-size: 1.15rem;">${item.title}</h3>
                <p style="color: #ddd; font-size: 0.88rem; margin-top: 4px;">${item.desc}</p>
            </div>
        `;
    });

    htmlContent += `</div>`;
    container.innerHTML = htmlContent;

    // Auto Loop Engine (ہر 3 سیکنڈ بعد سلائیڈ آٹو تبدیل ہو گی)
    let currentIndex = 0;
    const totalSlides = medicinesData.length;
    const wrapper = document.getElementById('medSlideWrapper');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        if(wrapper) {
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, 3000);
}

document.addEventListener('DOMContentLoaded', loadMedicinesSlider);
