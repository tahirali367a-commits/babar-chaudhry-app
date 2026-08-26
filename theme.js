// TN Creative World
// Premium Theme System
// Created & Developed by Tahir Nazeer


const TN_Theme = {

    brand: "TN Creative World",

    creator: "Tahir Nazeer",

    mode: "Premium",

    version: "2026-2027"

};



function activateTNTheme(){

    document.body.classList.add(
        "tn-premium-theme"
    );


    console.log(

        TN_Theme.brand +

        " Premium Theme Activated\n" +

        "Created by " +

        TN_Theme.creator

    );

}



function changeTheme(name){

    document.body.className = "";

    document.body.classList.add(
        name
    );


}



function showThemeInfo(){

    alert(

    "TN Creative World\n\n" +

    "Premium Theme " +

    TN_Theme.version +

    "\nCreated & Developed by " +

    TN_Theme.creator

    );

}