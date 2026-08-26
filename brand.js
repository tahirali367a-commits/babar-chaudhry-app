// TN Creative World
// Brand Identity System
// Created & Developed by Tahir Nazeer


const TN_Brand_Info = {

    name: "Tahir Nazeer",

    project: "TN Creative World",

    role: "Founder & Developer",

    image: "assets/profile.jpg"

};



function createBrandCard(){

    let card = document.createElement("div");

    card.className = "tn-brand-card";


    card.innerHTML = `

    <img src="${TN_Brand_Info.image}">

    <div>

    <strong>
    ${TN_Brand_Info.name}
    </strong>

    <small>
    ${TN_Brand_Info.role}
    </small>

    </div>

    `;


    document.body.appendChild(card);

}



function showTNBrandMessage(){

    console.log(

    "TN Creative World - " +

    "Created & Developed by Tahir Nazeer"

    );

}