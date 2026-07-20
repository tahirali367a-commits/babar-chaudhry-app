// File Name: script.js

function initApp() {
    speakAboutText();
    startLiveWeather();
}

// AI Auto Speech
function speakAboutText() {
    var text = "السلام علیکم! بابر چوہدری زراعت پر آپ کو خوش آمدید کہتے ہیں۔ بابر صاحب سے براہِ راست رابطہ کریں اور اپنی تمام فصلوں کا علاج پائیں۔";
    var speech = new SpeechSynthesisUtterance();
    speech.lang = "ur-PK";
    speech.text = text;
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
}

// Toggle Boxes
function toggleBabarAbout() {
    document.getElementById("babarAbout").classList.toggle("hidden");
}

function toggleTahirAbout() {
    document.getElementById("tahirAbout").classList.toggle("hidden");
}

// Auto Changing Dynamic Weather
function startLiveWeather() {
    setInterval(function() {
        var temp = Math.floor(Math.random() * (38 - 28 + 1)) + 28;
        var wind = Math.floor(Math.random() * (14 - 6 + 1)) + 6;
        var humidity = Math.floor(Math.random() * (60 - 40 + 1)) + 40;

        document.getElementById("tempVal").innerText = temp + "°C";
        document.getElementById("windVal").innerText = wind + " km/h";
        document.getElementById("humidityVal").innerText = humidity + "%";
    }, 4000);
}

// 20 Poster Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000);
