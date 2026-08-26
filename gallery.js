// TN Creative World
// Gallery System
// Created & Developed by Tahir Nazeer


let gallery = [];


function saveToGallery(){

    const imageData = canvas.toDataURL("image/png");

    gallery.push(imageData);

    localStorage.setItem(
        "TN_Gallery",
        JSON.stringify(gallery)
    );


    alert("Your Art Saved Successfully!");

}



function loadGallery(){

    let saved =
    localStorage.getItem("TN_Gallery");


    if(saved){

        gallery = JSON.parse(saved);

    }


    const galleryBox =
    document.getElementById("galleryBox");


    if(!galleryBox) return;


    galleryBox.innerHTML="";


    gallery.forEach((img)=>{


        let image =
        document.createElement("img");


        image.src = img;


        image.style.width="150px";

        image.style.margin="10px";

        image.style.borderRadius="10px";


        galleryBox.appendChild(image);


    });

}




function clearGallery(){

    localStorage.removeItem("TN_Gallery");

    gallery=[];

    alert(
    "Gallery Cleared"
    );

}