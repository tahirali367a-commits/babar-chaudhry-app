// TN Creative World
// Friend Interaction System
// Created & Developed by Tahir Nazeer


let TN_Friends = [];


function addFriend(friendName){

    if(friendName){

        TN_Friends.push(friendName);


        localStorage.setItem(
            "TN_Friends",
            JSON.stringify(TN_Friends)
        );


        alert(
            friendName +
            " added to TN Creative World Friends"
        );

    }

}



function loadFriends(){

    let saved =
    localStorage.getItem("TN_Friends");


    if(saved){

        TN_Friends = JSON.parse(saved);

    }

}



function showFriends(){

    let list = "";

    TN_Friends.forEach((friend)=>{

        list += "\n• " + friend;

    });


    alert(

        "TN Creative World Friends\n\n" +

        list +

        "\n\nCreated & Developed by Tahir Nazeer"

    );

}



function removeFriend(friendName){

    TN_Friends =
    TN_Friends.filter(
        friend => friend !== friendName
    );


    localStorage.setItem(
        "TN_Friends",
        JSON.stringify(TN_Friends)
    );

}