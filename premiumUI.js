// TN Creative World
// Premium UI Controller
// Created & Developed by Tahir Nazeer


const TN_UI = {

    brand: "TN Creative World",

    creator: "Tahir Nazeer",

    role: "Founder & Developer",

    photo: "assets/profile.jpg"

};



function loadPremiumHeader(){

    const header =
    document.getElementById("premiumHeader");


    if(!header) return;


    header.innerHTML = `

    <div class="tn-premium-header">

        <img src="${TN_UI.photo}">

        <div>

            <h2>
            ${TN_UI.brand}
            </h2>

            <p>
            Created by ${TN_UI.creator}
            </p>

        </div>

    </div>

    `;

}



function showPremiumMessage(){

    alert(

    "Welcome to TN Creative World\n\n" +

    "Modern Creative Experience\n" +

    "Created & Developed by Tahir Nazeer"

    );

}



function activatePremiumMode(){

    document.body.classList.add(
        "premium-mode"
    );

}