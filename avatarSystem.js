// TN Creative World
// Avatar & User Profile System
// Created & Developed by Tahir Nazeer


let TN_User = {

    name: "New Creator",

    avatar: "assets/profile.jpg",

    badge: "Creative Beginner",

    creator: "Tahir Nazeer"

};



function saveUserProfile(){

    localStorage.setItem(
        "TN_User_Profile",
        JSON.stringify(TN_User)
    );


    alert(
        "Profile Saved\n\n" +
        "TN Creative World\n" +
        "Created by Tahir Nazeer"
    );

}



function loadUserProfile(){

    let data =
    localStorage.getItem(
        "TN_User_Profile"
    );


    if(data){

        TN_User =
        JSON.parse(data);

    }

}



function changeUserName(newName){

    TN_User.name = newName;

    saveUserProfile();

}



function changeAvatar(imagePath){

    TN_User.avatar = imagePath;

    saveUserProfile();

}



function showUserProfile(){

    alert(

        "Creator: " + TN_User.name +

        "\nBadge: " + TN_User.badge +

        "\nPowered by TN Creative World"

    );

}