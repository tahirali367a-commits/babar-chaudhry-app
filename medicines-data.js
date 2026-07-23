// Medicines & Fertilizers Auto-Render Engine for HTML
const medicinesDataList = [
    { title: "تصویر نمبر 1: اعلیٰ کوالٹی جڑی بوٹی مار اسپرے", desc: "گندم اور مکئی کی جڑی بوٹیوں کا مکمل خاتمہ", img: "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=600&q=80" },
    { title: "تصویر نمبر 2: این پی کے اوریجنل کھاد", desc: "پودوں کی تیز رفتار بڑھوتری کے لیے بہترین", img: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=600&q=80" },
    { title: "تصویر نمبر 3: کیڑے مار دوا (پیسٹی سائیڈ)", desc: "سست تیلا، سنڈی اور سفید مکھی کا خاتمہ", img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80" },
    { title: "تصویر نمبر 4: زراعت فاسٹ گروتھ ٹانک", desc: "فصل کی رنگت اور جڑوں کو مضبوط بنائے", img: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=600&q=80" },
    { title: "تصویر نمبر 5: فنگس کش زرعی دوا", desc: "فصلوں کو فنگس اور بیماریوں سے بچائے", img: "https://images.unsplash.com/photo-1592417817098-8f3d6eb23659?auto=format&fit=crop&w=600&q=80" },
    { title: "تصویر نمبر 6: ملٹی نیشنل یوریا و نائٹروجن", desc: "فصل کی پیداوار اور لمبائی میں اضافہ", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80" },
    { title: "تصویر نمبر 7: کپاس کی خاص کیڑے مار اسپرے", desc: "سفید مکھی کا فوری اور موثر حل", img: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80" },
    { title: "تصویر نمبر 8: بائیو ارگینک زراعت کھاد", desc: "زمین کی زرخیزی کو بحال کرنے والا ٹانک", img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80" },
    { title: "تصویر نمبر 9: سپر فاسفیٹ کھاد فارمولا", desc: "گندم اور کماد کی جڑیں مظبوط کرے", img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80" },
    { title: "تصویر نمبر 10: مکئی کی جڑی بوٹی کنٹرول اسپرے", desc: "کاشت کے فوراً بعد اسپرے کے لیے بہترین", img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80" },
    { title: "تصویر نمبر 11: جدید ایگری سائیڈ اسپرے", desc: "فصل کی ہر بیماری کا بااعتماد علاج", img: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=600&q=80" },
    { title: "تصویر نمبر 12: پوٹاشیم مائع طاقتور کھاد", desc: "پھل اور دانوں کی موٹائی اور وزن کے لیے", img: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&w=600&q=80" },
    { title: "تصویر نمبر 13: اوریجنل زنک و مائیکرو نیوٹرینٹس", desc: "پتے پیلے ہونے سے بچائیں", img: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=600&q=80" },
    { title: "تصویر نمبر 14: طاقتور کراپ بوسٹر ٹانک", desc: "فصل کی لائیو چمک اور ہریالی میں اضافہ", img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=600&q=80" },
    { title: "تصویر نمبر 15: باغات و سبزیوں کی تخصیصی دوا", desc: "کیڑوں اور بیماریوں سے مکمل تحفظ", img: "https://images.unsplash.com/photo-1611843467160-25afb8df1074?auto=format&fit=crop&w=600&q=80" }
];

// Loop Generator for Smooth Endless Scroll
function renderMedicinesSlider() {
    const medicinesContainer = document.getElementById('medicinesSlider');
    if (!medicinesContainer) return;

    let htmlContent = '';
    
    // Generating cards from list
    medicinesDataList.forEach((item) => {
        htmlContent += `
            <div class="slider-card" style="min-width: 250px; max-width: 270px; background: rgba(0,0,0,0.5); border: 1px solid #00ff87; border-radius: 12px; padding: 10px; text-align: center; flex-shrink: 0; margin-left: 10px;">
                <img src="${item.img}" alt="${item.title}" style="width: 100%; height: 170px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(0, 255, 135, 0.4);">
                <h4 style="color: #00ff87; font-size: 0.95rem; margin: 8px 0 4px 0; font-weight: bold;">${item.title}</h4>
                <p style="color: #cbd5e1; font-size: 0.8rem; margin: 0;">${item.desc}</p>
            </div>
        `;
    });

    medicinesContainer.innerHTML = htmlContent;
}

// Auto Execute on Load
document.addEventListener("DOMContentLoaded", () => {
    renderMedicinesSlider();
});
