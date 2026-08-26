// TN Creative World
// Achievement System
// Created & Developed by Tahir Nazeer


let TN_Achievements = [];


const badges = [

    "🎨 First Creator",

    "🌟 Creative Star",

    "🔥 Design Master",

    "🏆 TN Champion",

    "👑 Creative Legend"

];



function unlockAchievement(){

    let badge =
    badges[
        Math.floor(Math.random()*badges.length)
    ];


    TN_Achievements.push(badge);


    localStorage.setItem(
        "TN_Achievements",
        JSON.stringify(TN_Achievements)
    );


    alert(
        "New Achievement Unlocked!\n\n" +
        badge +
        "\n\nTN Creative World\n" +
        "Created & Developed by Tahir Nazeer"
    );

}



function showAchievements(){

    let saved =
    localStorage.getItem("TN_Achievements");


    if(saved){

        TN_Achievements = JSON.parse(saved);

    }


    alert(
        "Tahir Nazeer Creator Achievements:\n\n" +
        TN_Achievements.join("\n")
    );

}