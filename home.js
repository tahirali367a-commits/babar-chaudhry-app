// TN Creative World
// Home Control System
// Created & Developed by Tahir Nazeer


const TN_Brand = {

    name: "Tahir Nazeer",

    project: "TN Creative World",

    role: "Founder & Developer"

};



function showTNBrand(){

    alert(
        TN_Brand.project +
        "\n\n" +
        "Created by: " +
        TN_Brand.name +
        "\n" +
        TN_Brand.role
    );

}



function updateCreatorStatus(){

    let statusBox =
    document.getElementById("creatorStatus");


    if(!statusBox) return;


    statusBox.innerHTML = `

    <h2>TN Creative World</h2>

    <h3>
    Creator: Tahir Nazeer
    </h3>

    <p>
    Founder & Developer
    </p>

    <p>
    Level: ${level || 1}
    </p>

    <p>
    Coins: ${coins || 0}
    </p>

    `;

}



function welcomeCreator(){

    alert(
    "Welcome Creator!\n\n" +
    "Start your creative mission in TN Creative World."
    );

}



function openStudio(){

    window.location.href="index.html";

}