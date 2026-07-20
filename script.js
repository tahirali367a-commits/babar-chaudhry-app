// File Name: script.js

// Page Load Voice Speech (اوپن ہوتے ہی بولے گا)
function autoPlaySpeech() {
    speakAboutText();
}

function speakAboutText() {
    var text = "السلام علیکم! بابر چوہدری زراعت پر آپ کو دلی خوش آمدید کہتے ہیں۔ ہمارا مرکز آپ کی تمام فصلوں کی نگہداشت کے لیے بہترین ادویات فراہم کرتا ہے۔";
    var speech = new SpeechSynthesisUtterance();
    speech.lang = "ur-PK";
    speech.text = text;
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
}

// Toggle Babar About
function toggleBabarAbout() {
    var box = document.getElementById("babarAbout");
    box.classList.toggle("hidden");
}

// Toggle Tahir Nazeer About
function toggleTahirAbout() {
    var box = document.getElementById("tahirAbout");
    box.classList.toggle("hidden");
}

// Auto Slider Function
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3500);
