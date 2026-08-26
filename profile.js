// TN Creative World
// Creator Profile System
// Created & Developed by Tahir Nazeer


let creatorName = "Tahir Nazeer";
let creatorTitle = "Founder & Developer";


function loadProfile(){

    const profileData = {

        name: creatorName,

        title: creatorTitle,

        badge: "Creative Master",

        level: level,

        coins: coins,

        xp: xp

    };


    console.log(profileData);

}



function creatorWelcome(){

    alert(
        "Welcome to TN Creative World\n\n" +
        "Creator: " + creatorName +
        "\n" +
        creatorTitle
    );

}



function addCoins(amount){

    coins += amount;

    alert(
        "You received " + amount + " Coins!"
    );

}



function showCreator(){

    document.body.insertAdjacentHTML(
        "beforeend",

        `
        <div class="creator-card">

        <img src="assets/profile.jpg">

        <h2>${creatorName}</h2>

        <p>${creatorTitle}</p>

        <p>Badge: Creative Master</p>

        </div>
        `
    );

}