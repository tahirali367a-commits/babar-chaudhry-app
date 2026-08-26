// TN Creative World
// Music System
// Created & Developed by Tahir Nazeer


const TN_Music = {

    introSong:
    "assets/music/tahir-nazeer-game-intro.mp3",


    youtubeSongs:[

        "https://youtu.be/REmRBK6YdSo",

        "https://youtu.be/jn0V1JBxNGU",

        "https://youtu.be/68ZEOOvEcds",

        "https://youtu.be/pThESjSD5TM",

        "https://youtu.be/pi_E8CyAWXA"

    ]

};



function playIntroSong(){

    let audio =
    new Audio(TN_Music.introSong);

    audio.play();

}



function welcomeTahirNazeer(){

    let message =
    new SpeechSynthesisUtterance(

    "Welcome to TN Creative World. Tahir Nazeer Project"

    );


    speechSynthesis.speak(message);

}



function playYoutubeSong(number){

    let link =
    TN_Music.youtubeSongs[number];


    window.open(
        link,
        "_blank"
    );

}



function startMusicSystem(){

    playIntroSong();


    setTimeout(()=>{

        welcomeTahirNazeer();

    },5000);

}