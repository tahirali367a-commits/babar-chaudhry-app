// TN Creative World
// Icon & Profile Image System
// Created & Developed by Tahir Nazeer


const TN_Images = {

    appIcon:
    "assets/tn-game-icon.png",


    profile:
    "assets/profile.jpg"

};



function loadGameIcon(){

    let icon =
    document.querySelector(
    "link[rel='icon']"
    );


    if(icon){

        icon.href =
        TN_Images.appIcon;

    }

}



function showCreatorImage(){

    let images =
    document.querySelectorAll(
    ".tn-profile-image"
    );


    images.forEach(img=>{

        img.src =
        TN_Images.profile;

    });

}



function startIconSystem(){

    loadGameIcon();

    showCreatorImage();

}