// TN Creative World
// Mission System
// Created & Developed by Tahir Nazeer


let TN_Player = {

    name: "Tahir Nazeer Creator",

    coins: 0,

    level: 1,

    xp: 0

};


const TN_Missions = [

    "اپنی خوبصورت تصویر بنائیں",

    "صرف پانچ رنگوں سے ڈیزائن بنائیں",

    "اپنا نیا لوگو بنائیں",

    "ایک خیالی دنیا بنائیں",

    "اپنا کارٹون کردار بنائیں"

];



function getNewMission(){

    let mission =
    TN_Missions[
        Math.floor(Math.random()*TN_Missions.length)
    ];


    return mission;

}



function completeMission(){

    TN_Player.coins += 10;

    TN_Player.xp += 20;


    if(TN_Player.xp >= 100){

        TN_Player.level++;

        TN_Player.xp = 0;

    }


    alert(
        "Mission Complete!\n\n" +
        "Coins: " + TN_Player.coins +
        "\nLevel: " + TN_Player.level +
        "\nXP: " + TN_Player.xp +
        "\n\nTN Creative World\n" +
        "Created by Tahir Nazeer"
    );

}



function showPlayerStatus(){

    alert(

        "Creator: Tahir Nazeer\n" +
        "Level: " + TN_Player.level +
        "\nCoins: " + TN_Player.coins

    );

}