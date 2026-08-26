// TN Creative World
// Game System
// Created & Developed by Tahir Nazeer


let coins = 0;
let level = 1;
let xp = 0;


const missions = [

"صرف تین رنگ استعمال کرکے تصویر بنائیں",

"اپنی خیالی دنیا ڈیزائن کریں",

"ایک خوبصورت لوگو بنائیں",

"مستقبل کی گاڑی بنائیں",

"اپنا کارٹون کردار بنائیں"

];


function completeMission(){

    let randomMission =
    missions[Math.floor(Math.random()*missions.length)];


    xp += 20;
    coins += 10;


    if(xp >= 100){

        level++;

        xp = 0;

    }


    alert(
    "Mission Complete!\n\n" +
    randomMission +
    "\n\nCoins: " + coins +
    "\nLevel: " + level
    );

}



// پروفائل دکھانے کا فنکشن

function showProfile(){

    alert(
    "Tahir Nazeer Creator Profile\n\n" +
    "Level: " + level +
    "\nCoins: " + coins +
    "\nXP: " + xp
    );

}



// نئے رنگ انلاک

function unlockColor(){

    if(coins >= 50){

        coins -= 50;

        alert(
        "New Color Unlocked!"
        );

    }
    else{

        alert(
        "Need more coins"
        );

    }

}