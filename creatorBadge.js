// TN Creative World
// Creator Badge System
// Created & Developed by Tahir Nazeer


const TN_Creator = {

    name: "Tahir Nazeer",

    title: "Founder & Developer",

    project: "TN Creative World",

    image: "assets/profile.jpg"

};



function addCreatorBadge(){

    const badge = document.createElement("div");

    badge.className = "tn-creator-badge";


    badge.innerHTML = `

    <img src="${TN_Creator.image}">

    <div>

    <h4>${TN_Creator.name}</h4>

    <p>${TN_Creator.title}</p>

    </div>

    `;


    document.body.appendChild(badge);

}




function showBrandInfo(){

    alert(

    TN_Creator.project +

    "\n\nCreated & Developed by " +

    TN_Creator.name

    );

}