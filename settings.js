// TN Creative World
// Settings System
// Created & Developed by Tahir Nazeer


const TN_Settings = {

    creator: "Tahir Nazeer",

    project: "TN Creative World",

    sound: true,

    theme: "Premium",

    version: "2026-2027"

};



function saveSettings(){

    localStorage.setItem(
        "TN_Settings",
        JSON.stringify(TN_Settings)
    );


    alert(
        "Settings Saved\n\n" +
        "TN Creative World\n" +
        "Created by Tahir Nazeer"
    );

}



function toggleSound(){

    TN_Settings.sound =
    !TN_Settings.sound;


    alert(
        TN_Settings.sound
        ?
        "Sound Enabled"
        :
        "Sound Disabled"
    );

}



function changeTNTheme(themeName){

    TN_Settings.theme = themeName;


    document.body.className =
    themeName;


    saveSettings();

}



function loadSettings(){

    let data =
    localStorage.getItem("TN_Settings");


    if(data){

        Object.assign(
            TN_Settings,
            JSON.parse(data)
        );

    }

}