// TN Creative World
// Premium UI Button System
// Created & Developed by Tahir Nazeer


const TN_UI_Buttons = {

    brand: "TN Creative World",

    creator: "Tahir Nazeer",

    version: "2026-2027"

};



function createTNButton(text, action){

    let button =
    document.createElement("button");


    button.innerText = text;


    button.className =
    "tn-premium-button";


    button.onclick = action;


    document.body.appendChild(button);

}



function addMainButtons(){

    createTNButton(
        "🎨 Start Creating",
        function(){

            openStudio();

        }
    );


    createTNButton(
        "🎮 Missions",
        function(){

            completeMission();

        }
    );


    createTNButton(
        "🏆 Achievements",
        function(){

            showAchievements();

        }
    );


    createTNButton(
        "👤 Tahir Nazeer Profile",
        function(){

            showCreator();

        }
    );

}



function showTNButtonInfo(){

    alert(

    TN_UI_Buttons.brand +

    "\n\nCreated & Developed by " +

    TN_UI_Buttons.creator

    );

}