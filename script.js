// File Name: script.js

// ۱. براؤزر کے ذریعے اٹو وائس پلے (Auto Play on Open)
function speakAboutText() {
    let textToRead = document.getElementById("aboutText").innerText;
    
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();

        let speech = new SpeechSynthesisUtterance();
        speech.text = textToRead;
        speech.lang = 'ur-PK';
        speech.rate = 0.85;
        speech.pitch = 1.0;

        window.speechSynthesis.speak(speech);
    }
}

// پیج اوپن ہوتے ہی اٹو پلے کرنے کی کوشش
function autoPlaySpeech() {
    setTimeout(function() {
        speakAboutText();
    }, 1000); // ۱ سیکنڈ کی تاخیر کے بعد
}

// ۲. خودکار پوسٹر سلائیڈر
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    if (slides.length === 0) return;

    slides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add('active');
}

setInterval(showNextSlide, 3000);
