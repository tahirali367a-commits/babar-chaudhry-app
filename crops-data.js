// File Name: crops-data.js - Crops & Farming Operations (100 Unique Actions)
const cropsArray = [
    { id: 1, name: "کھیت میں بیج بائی کا کام", img: "https://picsum.photos/id/10/600/400" },
    { id: 2, name: "ٹریکٹر سے زمین کی تیاری", img: "https://picsum.photos/id/11/600/400" },
    { id: 3, name: "سرسبز گندم کی کٹائی", img: "https://picsum.photos/id/12/600/400" },
    { id: 4, name: "دھان کی پنیری منتقل کرنا", img: "https://picsum.photos/id/13/600/400" },
    { id: 5, name: "کھیت کو پانی لگانے کا منظر", img: "https://picsum.photos/id/14/600/400" },
    { id: 6, name: "کپاس کی چنائی کرتے کسان", img: "https://picsum.photos/id/15/600/400" },
    { id: 7, name: "مکئی کی فصل میں کام کاج", img: "https://picsum.photos/id/16/600/400" },
    { id: 8, name: "سبزیوں کی برائی اور گوڈی", img: "https://picsum.photos/id/17/600/400" },
    { id: 9, name: "ٹرالی پر مال منڈی لے جانا", img: "https://picsum.photos/id/18/600/400" },
    { id: 10, name: "کماد کی چھلائی اور کٹائی", img: "https://picsum.photos/id/19/600/400" },
    { id: 11, name: "باغات سے پھل توڑنے کا کام", img: "https://picsum.photos/id/20/600/400" },
    { id: 12, name: "سورج مکھی کی چنائی", img: "https://picsum.photos/id/21/600/400" },
    { id: 13, name: "دیسی حل چلانے کا منظر", img: "https://picsum.photos/id/22/600/400" },
    { id: 14, name: "لیزر لیولنگ سے کھیت برابر کرنا", img: "https://picsum.photos/id/23/600/400" },
    { id: 15, name: "ٹنل فارمنگ میں سبزی لگانا", img: "https://picsum.photos/id/24/600/400" },
    { id: 16, name: "آلو کی برداشت اور صفائی", img: "https://picsum.photos/id/25/600/400" },
    { id: 17, name: "پیاز کی گنڈی لگانا", img: "https://picsum.photos/id/26/600/400" },
    { id: 18, name: "سرسوں کے کھیت میں کسان", img: "https://picsum.photos/id/27/600/400" },
    { id: 19, name: "ٹوکروں میں ٹماٹر پیک کرنا", img: "https://picsum.photos/id/28/600/400" },
    { id: 20, name: "چارہ کاٹنے والی مشین کا کام", img: "https://picsum.photos/id/29/600/400" },
    { id: 21, name: "گندم کی گاہائی (تھریشر)", img: "https://picsum.photos/id/30/600/400" },
    { id: 22, name: "دھان کی ڈرپ آبپاشی", img: "https://picsum.photos/id/31/600/400" },
    { id: 23, name: "باغ کی پیوند کاری (گرافٹنگ)", img: "https://picsum.photos/id/32/600/400" },
    { id: 24, name: "سبزیوں کی چھٹائی اور لوڈنگ", img: "https://picsum.photos/id/33/600/400" },
    { id: 25, name: "چنے کی فصل کی صفائی", img: "https://picsum.photos/id/34/600/400" },
    { id: 26, name: "مونگ پھلی کی کھدائی", img: "https://picsum.photos/id/35/600/400" },
    { id: 27, name: "کھیتوں میں گوڈی کرنا", img: "https://picsum.photos/id/36/600/400" },
    { id: 28, name: "لہسن اور ادرک کی کاشت", img: "https://picsum.photos/id/37/600/400" },
    { id: 29, name: "کھیت کی حدود سنبھالنا", img: "https://picsum.photos/id/38/600/400" },
    { id: 30, name: "چقندر کی برداشت", img: "https://picsum.photos/id/39/600/400" },
    { id: 31, name: "گاجر اور مولی کی دھوائی", img: "https://picsum.photos/id/40/600/400" },
    { id: 32, name: "کیلے کے گھاٹے اتارے جانا", img: "https://picsum.photos/id/41/600/400" },
    { id: 33, name: "انار اور امپائرفارمنگ", img: "https://picsum.photos/id/42/600/400" },
    { id: 34, name: "انگور کی بیلوں کی کٹائی", img: "https://picsum.photos/id/43/600/400" },
    { id: 35, name: "کھجور کے درخت پر چڑھنا", img: "https://picsum.photos/id/44/600/400" },
    { id: 36, name: "سٹرابیری کی چنائی", img: "https://picsum.photos/id/45/600/400" },
    { id: 37, name: "نرسری سے پودے شفٹ کرنا", img: "https://picsum.photos/id/46/600/400" },
    { id: 38, name: "چائے کی پتیاں چننا", img: "https://picsum.photos/id/47/600/400" },
    { id: 39, name: "زعفران کے پھول اکٹھا کرنا", img: "https://picsum.photos/id/48/600/400" },
    { id: 40, name: "کالی مرچ اور مصالحہ جات", img: "https://picsum.photos/id/49/600/400" },
    { id: 41, name: "زیتون کی کٹائی کا کام", img: "https://picsum.photos/id/50/600/400" },
    { id: 42, name: "کینولا کی بالیاں سنبھالنا", img: "https://picsum.photos/id/51/600/400" },
    { id: 43, name: "برسیم چارہ کاٹنا", img: "https://picsum.photos/id/52/600/400" },
    { id: 44, name: "جوار اور باجرہ بائی", img: "https://picsum.photos/id/53/600/400" },
    { id: 45, name: "سائلیج بنانے کا عمل", img: "https://picsum.photos/id/54/600/400" },
    { id: 46, name: "گرین ہاؤس میں وینٹیلیشن", img: "https://picsum.photos/id/55/600/400" },
    { id: 47, name: "ہائیڈروپونک سیٹ اپ کام", img: "https://picsum.photos/id/56/600/400" },
    { id: 48, name: "سپرنکلر چلانے کا نظارہ", img: "https://picsum.photos/id/57/600/400" },
    { id: 49, name: "ایلوویرا کی پتیوں کی کٹائی", img: "https://picsum.photos/id/58/600/400" },
    { id: 50, name: "گلاب کی چنائی منڈی کے لیے", img: "https://picsum.photos/id/59/600/400" },
    { id: 51, name: "گیندے کے پھولوں کے ہار", img: "https://picsum.photos/id/60/600/400" },
    { id: 52, name: "نرسری بیج بائی کا کام", img: "https://picsum.photos/id/61/600/400" },
    { id: 53, name: "مشروم فارم میں چنائی", img: "https://picsum.photos/id/62/600/400" },
    { id: 54, name: "شہد کی مکھیاں پالنا", img: "https://picsum.photos/id/63/600/400" },
    { id: 55, name: "ریشم کے کیڑوں کا فارم", img: "https://picsum.photos/id/64/600/400" },
    { id: 56, name: "ہائی برڈ بیج کی پروسیسنگ", img: "https://picsum.photos/id/65/600/400" },
    { id: 57, name: "کھیت کی نالیوں کی صفائی", img: "https://picsum.photos/id/66/600/400" },
    { id: 58, name: "کھاد بکھیرنے کا روایتی انداز", img: "https://picsum.photos/id/67/600/400" },
    { id: 59, name: "مٹی کے نمونے اکٹھا کرنا", img: "https://picsum.photos/id/68/600/400" },
    { id: 60, name: "فصل کی پیمائش اور معائنہ", img: "https://picsum.photos/id/69/600/400" },
    { id: 61, name: "فصل کو بیماری سے بچانا", img: "https://picsum.photos/id/70/600/400" },
    { id: 62, name: "کھیت میں ڈیروں کا منظر", img: "https://picsum.photos/id/71/600/400" },
    { id: 63, name: "ٹیوب ویل سے پانی کا بہاؤ", img: "https://picsum.photos/id/72/600/400" },
    { id: 64, name: "سولر پمپ سے آبپاشی", img: "https://picsum.photos/id/73/600/400" },
    { id: 65, name: "کاہ اور گھاس کی صفائی", img: "https://picsum.photos/id/74/600/400" },
    { id: 66, name: "گندم کے بچھونے لگانا", img: "https://picsum.photos/id/75/600/400" },
    { id: 67, name: "تھریشر کے ساتھ کام", img: "https://picsum.photos/id/76/600/400" },
    { id: 68, name: "کمپائن ہارویسٹر کا کام", img: "https://picsum.photos/id/77/600/400" },
    { id: 69, name: "روٹا ویٹر چلانے کا منظر", img: "https://picsum.photos/id/78/600/400" },
    { id: 70, name: "ڈسک ہیعرو سے حل چلانا", img: "https://picsum.photos/id/79/600/400" },
    { id: 71, name: "سیڈ ڈرل سے بیج ڈالنا", img: "https://picsum.photos/id/80/600/400" },
    { id: 72, name: "رزق کی منڈی میں منتقلی", img: "https://picsum.photos/id/81/600/400" },
    { id: 73, name: "کپاس کی گانٹھیں بنانا", img: "https://picsum.photos/id/82/600/400" },
    { id: 74, name: "گنے کی ملوں میں سپلائی", img: "https://picsum.photos/id/83/600/400" },
    { id: 75, name: "چاول کی مل میں عمل", img: "https://picsum.photos/id/84/600/400" },
    { id: 76, name: "آلو کولڈ اسٹوریج پیکنگ", img: "https://picsum.photos/id/85/600/400" },
    { id: 77, name: "پیاز و لہسن خشک کرنا", img: "https://picsum.photos/id/86/600/400" },
    { id: 78, name: "مرچوں کو دھوپ میں سکھانا", img: "https://picsum.photos/id/87/600/400" },
    { id: 79, name: "ٹوکریوں کی بfilter سازی", img: "https://picsum.photos/id/88/600/400" },
    { id: 80, name: "کھیت میں لکڑی اکٹھا کرنا", img: "https://picsum.photos/id/89/600/400" },
    { id: 81, name: "شام کے وقت کھیت کا لک", img: "https://picsum.photos/id/90/600/400" },
    { id: 82, name: "صبح کا دلکش زرعی منظر", img: "https://picsum.photos/id/91/600/400" },
    { id: 83, name: "کسان کا محنت بھرا دن", img: "https://picsum.photos/id/92/600/400" },
    { id: 84, name: "کھیت میں آرام کی گھڑی", img: "https://picsum.photos/id/93/600/400" },
    { id: 85, name: "دیسی طریقہ آبپاشی", img: "https://picsum.photos/id/94/600/400" },
    { id: 86, name: "بارش کے بعد کھیت لک", img: "https://picsum.photos/id/95/600/400" },
    { id: 87, name: "جدید ملچنگ تکنیک", img: "https://picsum.photos/id/96/600/400" },
    { id: 88, name: "پلاسٹک کور ٹنل فارم", img: "https://picsum.photos/id/97/600/400" },
    { id: 89, name: "سبزی منڈی کی تیاریاں", img: "https://picsum.photos/id/98/600/400" },
    { id: 90, name: "غلہ منڈی بوریوں کی لوڈنگ", img: "https://picsum.photos/id/99/600/400" },
    { id: 91, name: "مال مویشی اور چارہ", img: "https://picsum.photos/id/100/600/400" },
    { id: 92, name: "زرعی نمائش کا منظر", img: "https://picsum.photos/id/101/600/400" },
    { id: 93, name: "ماڈل ایگری فارم ورک", img: "https://picsum.photos/id/102/600/400" },
    { id: 94, name: "فصل کی پیداوار کا جائزہ", img: "https://picsum.photos/id/103/600/400" },
    { id: 95, name: "کسان بھائیوں کی میٹنگ", img: "https://picsum.photos/id/104/600/400" },
    { id: 96, name: "زرعی جدید آلات کا استعمال", img: "https://picsum.photos/id/106/600/400" },
    { id: 97, name: "بیج کی معیار ٹیسٹنگ", img: "https://picsum.photos/id/107/600/400" },
    { id: 98, name: "پودوں کی دیکھ بھال", img: "https://picsum.photos/id/108/600/400" },
    { id: 99, name: "کھیتوں کی حفاظت و باڑ", img: "https://picsum.photos/id/109/600/400" },
    { id: 100, name: "سرسبز و شاداب پاکستان", img: "https://picsum.photos/id/110/600/400" }
];

function loadCrops100() {
    const slider = document.getElementById('cropsSlider');
    if (!slider) return;

    let html = "";
    cropsArray.forEach(item => {
        html += `
            <div class="slide">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
                <div class="slide-caption">تصویر ${item.id}: ${item.name}</div>
            </div>
        `;
    });
    slider.innerHTML = html;

    // Auto Engine Scroll
    setInterval(() => {
        if (slider.scrollLeft <= -(slider.scrollWidth - slider.clientWidth - 5)) {
            slider.scrollLeft = 0;
        } else {
            slider.scrollBy({ left: -290, behavior: 'smooth' });
        }
    }, 2500);
}

document.addEventListener("DOMContentLoaded", loadCrops100);
