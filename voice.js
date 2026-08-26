// TN Creative World
// Voice System
// Created & Developed by Tahir Nazeer


let microphoneStream = null;


async function startVoice(){

    try{

        microphoneStream =
        await navigator.mediaDevices.getUserMedia({
            audio:true
        });


        alert(
            "Microphone Started\n\n" +
            "TN Creative World\n" +
            "Created by Tahir Nazeer"
        );


    }
    catch(error){

        alert(
            "Microphone permission denied."
        );

    }

}



function stopVoice(){

    if(microphoneStream){

        let tracks =
        microphoneStream.getTracks();


        tracks.forEach(track=>{
            track.stop();
        });


        microphoneStream=null;


        alert(
            "Microphone Closed"
        );

    }

}