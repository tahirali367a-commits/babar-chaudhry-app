// crops-data.js - 100 Real & Distinct Agricultural Crops & Fields Slider

const cropsData = [
    { id: 1, title: "گندم کے سنہرے کھیت", tag: "غلہ جات", desc: "پنجاب کے سرسبز اور زرخیز میدانی علاقوں میں تیار گندم کی فصل۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "چاول و دھان کے شاداب کھیت", tag: "غلہ جات", desc: "بہترین معیار کے باسپتی چاول کے لیے پانی سے بھرپور خوبصورت کھیت۔", image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "کپاس کے روئی سے بھرے کھیت", tag: "نقد آور فصل", desc: "سفید سونے یعنی کپاس کی کھلی ہوئی ڈوڈیاں اور شاداب فصل۔", image: "https://images.unsplash.com/photo-1605001011157-26f607f0f423?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "کماد اور گنے کے وسیع فارم", tag: "نقد آور فصل", desc: "میٹھے اور رس دار گنے کی لمبی اور گھنی فصل کے مناظر۔", image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "مکئی کے بلند و بالا فارم", tag: "چارہ و غلہ", desc: "طاقتور چھلیوں سے بھرپور مکئی کی جدید کاشتکاری۔", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "سرسیوں کے پیلے پھولوں کے کھیت", tag: "روغنی اجناس", desc: "سردیوں کے موسم میں سرسوں اور رایا کی منموہنی قدرتی رنگت۔", image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80" },
    { id: 7, title: "آلو کے وسیع و عریض فارم", tag: "سبزیاں", desc: "زمین کے اندر لذیذ آلوؤں کی جدید مکینائزڈ کاشت۔", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80" },
    { id: 8, title: "سرخ ٹماٹروں کے شاداب کھیت", tag: "سبزیاں", desc: "پکے ہوئے لال سرخ ٹماٹروں کی فارم ٹنل فارمنگ۔", image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80" },
    { id: 9, title: "سرخ و ہری مرچوں کی کاشت", tag: "مصالحہ جات", desc: "تیکھی مرچوں کے سرسبز پودے اور فصل کی رنگت۔", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80" },
    { id: 10, title: "پیاز کے کسان فارم", tag: "سبزیاں", desc: "زمین پر تر و تازہ پیاز کی بھرپور پیداوار۔", image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80" },
    { id: 11, title: "سیب کے حسین باغات", tag: "پھل و باغات", desc: "پہاڑی و بالائی علاقوں کے لال سیبوں سے لدے درخت۔", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80" },
    { id: 12, title: "آم کے قدیم و وسیع باغات", tag: "پھل و باغات", desc: "ملتانی اور سندھڑی آم کے خوشبودار اور رس دار پھل۔", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80" },
    { id: 13, title: "ترشاوہ پھل کینو اور مالٹے", tag: "پھل و باغات", desc: "سرگودھا کے مشہور و معروف کینو کے چمکدار باغات۔", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80" },
    { id: 14, title: "چنے کی فصل اور دالیں", tag: "دالیں", desc: "تھل کے صحرائی اور بارانی علاقوں میں چنے کی قدرتی کاشت۔", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?auto=format&fit=crop&w=800&q=80" },
    { id: 15, title: "سورج مکھی کے سنہرے کھیت", tag: "روغنی اجناس", desc: "سورج کی طرف منہ کیے ہوئے زرد اور خوبصورت پھول۔", image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80" },
    { id: 16, title: "مٹر کی شاداب فصل", tag: "سبزیاں", desc: "سبز مٹر کی پھلیوں سے بھرے ہوئے سرسبز کھیت۔", image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=800&q=80" },
    { id: 17, title: "گوبھی اور بند گوبھی فارم", tag: "سبزیاں", desc: "تازہ اور نامیاتی گوبھی کی وسیع پیمانے پر کاشت۔", image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=800&q=80" },
    { id: 18, title: "گاذر کی تازہ فصل", tag: "سبزیاں", desc: "زمین سے نکلنے والی رس دار اور میٹھی لال گاجر۔", image: "https://images.unsplash.com/photo-1447175008436-084170927932?auto=format&fit=crop&w=800&q=80" },
    { id: 19, title: "لہسن کے سبز کھیت", tag: "مصالحہ جات", desc: "دیسی اور چائنیز لہسن کی منافع بخش کاشت کاری۔", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80" },
    { id: 20, title: "سبز دھنیا اور پودینہ", tag: "مصالحہ جات", desc: "خوشبودار اور تازہ سبزیوں کے چھوٹے قطعات۔", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80" },
    { id: 21, title: "جامن کے گھنے باغات", tag: "پھل و باغات", desc: "گرمیوں کے موسم کا خاص اور صحت بخش سیاہ پھل۔", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80" },
    { id: 22, title: "زیتون کی سائنسی کاشت", tag: "پھل و باغات", desc: "پوٹھوہار میں زیتون کے جدید اور وسیع فارمز۔", image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=800&q=80" },
    { id: 23, title: "انگور کی بیلوں کے باغات", tag: "پھل و باغات", desc: "میٹھے اور خوبصورت انگوروں سے لٹکتی ہوئی بیلیں۔", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80" },
    { id: 24, title: "امرود کے سرسبز باغات", tag: "پھل و باغات", desc: "شریف آباد اور شیخوپورہ کے مشہور میٹھے امرود۔", image: "https://images.unsplash.com/photo-1536511154848-f1261d51c762?auto=format&fit=crop&w=800&q=80" },
    { id: 25, title: "انار کے خوبصورت درخت", tag: "پھل و باغات", desc: "قندھاری اور دیسی انار کے لال دانوں والے باغات۔", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80" },
    { id: 26, title: "جوار کا چارہ اور کھیت", tag: "چارہ و غلہ", desc: "مویشیوں کے لیے غذائیت سے بھرپور لمبا سبز چارہ۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 27, title: "باجرے کی فارمنگ", tag: "چارہ و غلہ", desc: "پرندوں کی خوراک اور طاقتور دانوں کی بہترین فصل۔", image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80" },
    { id: 28, title: "برسیم اور لوسرن کا چارہ", tag: "چارہ و غلہ", desc: "سردیوں کا ترو تازہ اور غذائیت بخش سبز چارہ۔", image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80" },
    { id: 29, title: "تربوز اور خربوزے کی بیلیں", tag: "پھل و باغات", desc: "گرمی کے موسم کے میٹھے اور پانی سے بھرپور پھل۔", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80" },
    { id: 30, title: "کھیرا اور ککڑی فارمنگ", tag: "سبزیاں", desc: "ٹنل فارمنگ میں تیار ہونے والے تازہ اور لذیذ کھیرے Alignment۔", image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=800&q=80" },
    { id: 31, title: "مونگ پھلی کے زیرِ زمین کھیت", tag: "روغنی اجناس", desc: "پوٹھوہار کی بارانی زمین کی بہترین مونگ پھلی۔", image: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?auto=format&fit=crop&w=800&q=80" },
    { id: 32, title: "تِل کی نقد آور فصل", tag: "روغنی اجناس", desc: "کم پانی میں زیادہ منافع دینے والی سفید اور سیاہ تل کی کاشت۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 33, title: "بینگن کے سبز و جامنی فارم", tag: "سبزیاں", desc: "مختلف اقسام اور سائز کے بینگن کی بھرپور پیداوار۔", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80" },
    { id: 34, title: "بھنڈی کی تازہ کاشت", tag: "سبزیاں", desc: "گرمیوں کی مقبول ترین اور بار بار چنائی والی سبزی۔", image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=800&q=80" },
    { id: 35, title: "کدو اور توری کی لمبی بیلیں", tag: "سبزیاں", desc: "نامیاتی طریقے سے اگائی گئی گھریلو اور تجارتی سبزیاں۔", image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=800&q=80" },
    { id: 36, title: "کریلا فارمنگ ٹنل", tag: "سبزیاں", desc: "صحت کے لیے مفید کڑوے کریلے کی محفوظ کاشت۔", image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80" },
    { id: 37, title: "پالک اور میتھی کے کھیت", tag: "سبزیاں", desc: "آئرن سے بھرپور پتوں والی ترو تازہ سبزیاں۔", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80" },
    { id: 38, title: "شلجم اور مولی فارمز", tag: "سبزیاں", desc: "سردیوں کی تازہ اور کرکری زیرِ زمین سبزیاں۔", image: "https://images.unsplash.com/photo-1447175008436-084170927932?auto=format&fit=crop&w=800&q=80" },
    { id: 39, title: "چقندر کی زراعت", tag: "سبزیاں", desc: "سرخ رنگت اور وافر شوگر والی قیمتی فصل۔", image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80" },
    { id: 40, title: "شکرقندی کے کھیت", tag: "سبزیاں", desc: "میٹھے اور توانائی سے بھرپور کاربوہائیڈریٹ کی کاشت۔", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80" },
    { id: 41, title: "کھجور کے نخلستان", tag: "پھل و باغات", desc: "سندھ اور بلوچستان کے لمبے اور کھجوروں سے بھرے درخت۔", image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=800&q=80" },
    { id: 42, title: "شفتالو اور آڑو کے باغات", tag: "پھل و باغات", desc: "سوات اور سوات وادی کے لذیذ و میٹھے آڑو۔", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80" },
    { id: 43, title: "خوبانی کے دلکش باغات", tag: "پھل و باغات", desc: "گلگت بلتستان کی مشہور زرد اور میٹھی خوبانی۔", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80" },
    { id: 44, title: "بادام کے سفید و گلابی باغات", tag: "خشک میوہ جات", desc: "بہار کے موسم میں بادام کے درختوں پر کھلے خوبصورت پھول۔", image: "https://images.unsplash.com/photo-1536511154848-f1261d51c762?auto=format&fit=crop&w=800&q=80" },
    { id: 45, title: "اخروٹ کے قد آور درخت", tag: "خشک میوہ جات", desc: "شمالی علاقہ جات میں قدرتی طور پر اگنے والے اخروٹ۔", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80" },
    { id: 46, title: "پستہ کے مخصوص فارمز", tag: "خشک میوہ جات", desc: "بلوچستان کی خشک اور پہاڑی زمین میں پستے کی کاشت۔", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80" },
    { id: 47, title: "چائے کے سبز اور اونچے باغات", tag: "نقد آور فصل", desc: "مانسہرہ اور بالائی علاقوں میں چائے کی پتیوں کی کاشت۔", image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80" },
    { id: 48, title: "زعفران کے قیمتی پھول", tag: "مصالحہ جات", desc: "سرخ و جامنی پھولوں سے ملنے والی دنیا کی مہنگی ترین بوٹی۔", image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80" },
    { id: 49, title: "ادرک کی زیرِ زمین کاشت", tag: "مصالحہ جات", desc: "جدید شیڈ نیٹ فارمنگ کے ذریعے ترو تازہ ادرک کی فصل۔", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80" },
    { id: 50, title: "ہلدی کے سرسبز پودے", tag: "مصالحہ جات", desc: "طبی اور کچن کی ملکہ ہلدی کی نامیاتی کاشت۔", image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80" },
    { id: 51, title: "زیرہ اور سونف کی زراعت", tag: "مصالحہ جات", desc: "خوشبودار بیجوں والی نقد آور اور منافع بخش فصلیں۔", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?auto=format&fit=crop&w=800&q=80" },
    { id: 52, title: "اجوائن کے باریک فارم", tag: "مصالحہ جات", desc: "کم لاگت میں زیادہ سے زیادہ منافع فراہم کرنے والی جڑی بوٹی۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 53, title: "کلونجی کی مبارک کاشت", tag: "مصالحہ جات", desc: "سیاہ دانوں سے لیس شفابخش پودوں کی فارمنگ۔", image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80" },
    { id: 54, title: "اسپغول کی بارانی فصل", tag: "طبی اجناس", desc: "طبی و ادویاتی اہمیت کا حامل سفید اسپغول۔", image: "https://images.unsplash.com/photo-1605001011157-26f607f0f423?auto=format&fit=crop&w=800&q=80" },
    { id: 55, title: "کینولا اور رائیا کے کھیت", tag: "روغنی اجناس", desc: "خالص اور صحت بخش برانڈڈ کھانے کے تیل کا ذریعہ۔", image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80" },
    { id: 56, title: "سویا بین کی سائنسی زراعت", tag: "روغنی اجناس", desc: "پروٹین سے بھرپور دانوں کی بین الاقوامی سطح پر کاشت۔", image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80" },
    { id: 57, title: "زیتون کا نیا باغ", tag: "پھل و باغات", desc: "ڈرپ اریگیشن کے ذریعے لگائے گئے چھوٹے زیتون کے پودے۔", image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=800&q=80" },
    { id: 58, title: "انجیر کے قدیمی باغات", tag: "پھل و باغات", desc: "مقدس اور میٹھے انجیر کے درختوں کی دیکھ بھال۔", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80" },
    { id: 59, title: "لیچی کے سرسبز باغات", tag: "پھل و باغات", desc: "سرخ چھلکے اور سفید رس والے لذیذ پھل۔", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80" },
    { id: 60, title: "چیکو اور لوکاٹ کے فارم", tag: "پھل و باغات", desc: "سندھ اور ساحلی علاقوں کی نرم اور میٹھی پیداوار۔", image: "https://images.unsplash.com/photo-1536511154848-f1261d51c762?auto=format&fit=crop&w=800&q=80" },
    { id: 61, title: "پپیتا (Papaya) ٹنل فارمنگ", tag: "پھل و باغات", desc: "ریڈ لیڈی ورائٹی کے پھلوں سے بھرے چھوٹے پودے۔", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80" },
    { id: 62, title: "کیلے کے وسیع و عریض فارمز", tag: "پھل و باغات", desc: "سندھ کے ہرے بھرے اور گھنے کیلے کے باغات۔", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80" },
    { id: 63, title: "اسٹرا بیری کے لال کھیت", tag: "پھل و باغات", desc: "ملچنگ شیٹ پر اگنے والی لذیذ اور چمکدار اسٹرا بیری۔", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80" },
    { id: 64, title: "شملہ مرچ کے ہائی ٹیک فارم", tag: "سبزیاں", desc: "سرخ، سبز اور پیلی شملہ مرچ کی ڈرپ اریگیشن کاشت۔", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80" },
    { id: 65, title: "اروی اور کچالو کی زراعت", tag: "سبزیاں", desc: "نمی اور پانی پسند جڑوں والی لذیذ سبزی۔", image: "https://images.unsplash.com/photo-1447175008436-084170927932?auto=format&fit=crop&w=800&q=80" },
    { id: 66, title: "تندوری اور سلاطی کھیرا", tag: "سبزیاں", desc: "گرین ہاؤس میں تیار شدہ بیج لیس ککڑی۔", image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=800&q=80" },
    { id: 67, title: "کریلا ٹنل سسٹم", tag: "سبزیاں", desc: "بانس اور تاروں کی مدد سے لٹکتی ہوئی لمبی کریلے کی بیلیں۔", image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80" },
    { id: 68, title: "سرخ لوبیا اور راجما", tag: "دالیں", desc: "طاقتور اور پروٹین سے بھرپور نقد آور دالیں۔", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?auto=format&fit=crop&w=800&q=80" },
    { id: 69, title: "مونگ کی دال کے سبز کھیت", tag: "دالیں", desc: "کم وقت میں تیار ہونے والی برسات کے موسم کی فصل۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 70, title: "ماش کی دال کی کاشتکاری", tag: "دالیں", desc: "زرخیز زمین کی اہم اور اعلیٰ قیمت والی دال۔", image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80" },
    { id: 71, title: "مسور کی دال کے فارم", tag: "دالیں", desc: "سردیوں کی بہترین اور منافع بخش پھلی دار فصل۔", image: "https://images.unsplash.com/photo-1605001011157-26f607f0f423?auto=format&fit=crop&w=800&q=80" },
    { id: 72, title: "دیسی چنا اور کالا چنا", tag: "دالیں", desc: "خشک سالی برداشت کرنے والی تھل کی مرکزی فصل۔", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?auto=format&fit=crop&w=800&q=80" },
    { id: 73, title: "کابلی چنا (سفید چنا)", tag: "دالیں", desc: "بڑے سائز کے چنوں کی تجارتی کاشت۔", image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80" },
    { id: 74, title: "موتھ دال اور گوارہ", tag: "دالیں", desc: "زمین کی زرخیزی بڑھانے اور طاقت دینے والی فصل۔", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80" },
    { id: 75, title: "السی (Flaxseed) کی زراعت", tag: "روغنی اجناس", desc: "نیلے پھولوں والی اومیگا تھری سے بھرپور السی۔", image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80" },
    { id: 76, title: "کاستر آئل (ارنڈی) کے پودے", tag: "روغنی اجناس", desc: "صنعتی تیل فراہم کرنے والا مضبوط اور طویل القامت پودا۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 77, title: "بمبر نیپیئر گراس (چارہ)", tag: "چارہ و غلہ", desc: "تیزی سے بڑھنے والا اور بار بار کٹائی دینے والا ہائبرڈ چارہ۔", image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80" },
    { id: 78, title: "روڈس گراس ایکسپورٹ کوالٹی", tag: "چارہ و غلہ", desc: "پریس ہائے بنانے اور برآمد کے لیے بہترین چارہ۔", image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80" },
    { id: 79, title: "جنتر اور سنگل چارہ", tag: "چارہ و غلہ", desc: "زمین میں نائٹروجن کی قدرتی مقدار میں اضافہ۔", image: "https://images.unsplash.com/photo-1605001011157-26f607f0f423?auto=format&fit=crop&w=800&q=80" },
    { id: 80, title: "سلویا اور سٹرس کی نرسریاں", tag: "نرسری و پودے", desc: "فصلوں اور باغات کے لیے صحت مند قلمیں اور پودے۔", image: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=800&q=80" },
    { id: 81, title: "گلاب کی تجارتی پھول فارمنگ", tag: "پھول و تزئین", desc: "عرقِ گلاب اور منڈی کی برآمد کے لیے سرخ گلاب۔", image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80" },
    { id: 82, title: "گیندا (Marigold) کے پیلے کھیت", tag: "پھول و تزئین", desc: "زرد اور نارنجی خوبصورت پھولوں کا وسیع رقبہ۔", image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80" },
    { id: 83, title: "موتیا اور چنبیلی کے باغات", tag: "پھول و تزئین", desc: "رات کو معطر کرنے والے خوشبودار سفید پھول۔", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80" },
    { id: 84, title: "گلیڈیولس کی کٹ فلاور کاشت", tag: "پھول و تزئین", desc: "لمبی ڈنڈیوں والے رنگ برنگے سجاSeries پھول۔", image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80" },
    { id: 85, title: "ٹیوبروز (مستقبل پھول)", tag: "پھول و تزئین", desc: "دلہن کے ہار اور عطر کی تیاری کے لیے خاص پھول۔", image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80" },
    { id: 86, title: "ایلوویرا (گھیکوار) کے فارم", tag: "طبی اجناس", desc: "کاسمیک اور ادویات کی انڈسٹری کا خام مال۔", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=800&q=80" },
    { id: 87, title: "اسٹیویا (میٹھی تلسی)", tag: "طبی اجناس", desc: "شوگر کے مریضوں کے لیے قدرتی میٹھے پودے۔", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80" },
    { id: 88, title: "مورنگا (سہانجنا) کا جنگل", tag: "طبی اجناس", desc: "سپر فوڈ اور غذائیت کا ملٹی وٹامن قدرتی خزانہ۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" },
    { id: 89, title: "لیمن گراس اور سبز چائے", tag: "طبی اجناس", desc: "خوشبودار قہوہ اور ہربل چائے کے سرسبز پودے۔", image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80" },
    { id: 90, title: "تخم ملنگا کی نقد فصل", tag: "طبی اجناس", desc: "مشروبات میں استعمال ہونے والے افادیت بخش بیج۔", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?auto=format&fit=crop&w=800&q=80" },
    { id: 91, title: "لوبیا سبزی اور دال فارمنگ", tag: "سبزیاں", desc: "سبز پھلیوں کی شکل میں تازہ غذائیت سے بھرپور۔", image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=800&q=80" },
    { id: 92, title: "سفید زیرہ خضدار و بلوچستان", tag: "مصالحہ جات", desc: "اعلیٰ خوشبو اور کوالٹی والا دیسی زیرہ۔", image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e2?auto=format&fit=crop&w=800&q=80" },
    { id: 93, title: "دھنیا بیج و ہرا دھنیا", tag: "مصالحہ جات", desc: "گھریلو استعمال اور تجارتی بیج دونوں مقصد کے لیے۔", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80" },
    { id: 94, title: "شملہ سرخ و لال مرچ بائیو", tag: "سبزیاں", desc: "اعلیٰ برآمدی کوالٹی کی نامیاتی کاشت۔", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80" },
    { id: 95, title: "چیری ٹماٹر (Cherry Tomatoes)", tag: "سبزیاں", desc: "چھوٹے سائز کے قیمتی اور خوبصورت سرخ ٹماٹر۔", image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80" },
    { id: 96, title: "بیج لیس خربوزہ و تربوز", tag: "پھل و باغات", desc: "جدید ملچنگ ٹیکنالوجی سے تیار شدہ جدید پھل۔", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80" },
    { id: 97, title: "ڈریگن فروٹ (Dragon Fruit)", tag: "پھل و باغات", desc: "جدید زرعی انقلاب کے تحت پاکستان میں جدید کاشت۔", image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80" },
    { id: 98, title: "پستے کے رنگین درخت", tag: "خشک میوہ جات", desc: "بلوچستان و سرحدی خطے کے قیمتی خشک میوے۔", image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80" },
    { id: 99, title: "کاجو کی آزمائشی فارمنگ", tag: "خشک میوہ جات", desc: "ساحلی علاقوں میں کاجو کے نایاب درخت۔", image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80" },
    { id: 100, title: "سرسبز پاکستان جدید کھیت", tag: "ماڈل فارمنگ", desc: "100% اوریجنل ڈیٹا - پاکستان کی زرعی خوشحالی کی علامت۔", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80" }
];

// Auto Slider Execution Script
function loadCropsSlider() {
    const container = document.getElementById('cropsSlider');
    if (!container) return;

    let htmlContent = `<div class="slider-wrapper" id="cropSlideWrapper" style="display: flex; transition: transform 0.6s ease-in-out;">`;
    
    cropsData.forEach((item) => {
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
    const totalSlides = cropsData.length;
    const wrapper = document.getElementById('cropSlideWrapper');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        if(wrapper) {
            wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }, 3000);
}

document.addEventListener('DOMContentLoaded', loadCropsSlider);
