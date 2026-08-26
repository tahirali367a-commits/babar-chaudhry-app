// TN Creative World
// Splash Screen System
// Created & Developed by Tahir Nazeer


const TN_Splash = {

    name: "Tahir Nazeer",

    project: "TN Creative World",

    image: "assets/profile.jpg"

};



function showSplash(){

    let splash =
    document.createElement("div");


    splash.className =
    "tn-splash";


    splash.innerHTML = `

    <div class="splash-card">

        <img src="${TN_Splash.image}">

        <h1>
        ${TN_Splash.project}
        </h1>

        <h3>
        Created & Developed by
        </h3>

        <h2>
        ${TN_Splash.name}
        </h2>

        <div class="loading">
        Loading Creative World...
        </div>

    </div>

    `;


    document.body.appendChild(splash);



    setTimeout(()=>{

        splash.remove();

    },3000);

}



window.addEventListener(
"load",
showSplash
);