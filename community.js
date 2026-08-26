// TN Creative World
// Community System
// Created & Developed by Tahir Nazeer


let creators = [];


function addCreator(name, art){

    let creator = {

        creatorName: name,

        artwork: art,

        brand: "Tahir Nazeer Creative World"

    };


    creators.push(creator);


    localStorage.setItem(
        "TN_Creators",
        JSON.stringify(creators)
    );


    alert(
        "Your Creation Added to TN Creative World Community!"
    );

}




function loadCreators(){

    let data =
    localStorage.getItem("TN_Creators");


    if(data){

        creators = JSON.parse(data);

    }


    const box =
    document.getElementById("communityBox");


    if(!box) return;


    box.innerHTML="";


    creators.forEach(item=>{


        box.innerHTML += `

        <div class="creator-card">

        <img src="assets/profile.jpg">

        <h3>${item.creatorName}</h3>

        <p>
        Powered by TN Creative World
        </p>

        <img src="${item.artwork}"
        class="art-image">


        </div>

        `;


    });


}




function shareCreator(){

    alert(
    "Share your art with TN Creative World\n\n" +
    "Created & Developed by Tahir Nazeer"
    );

}