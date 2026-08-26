// TN Creative World
// Notification System
// Created & Developed by Tahir Nazeer


let TN_Notifications = [];


function addNotification(message){

    let notice = {

        text: message,

        time: new Date().toLocaleString(),

        brand: "TN Creative World",

        creator: "Tahir Nazeer"

    };


    TN_Notifications.push(notice);


    localStorage.setItem(
        "TN_Notifications",
        JSON.stringify(TN_Notifications)
    );

}



function loadNotifications(){

    let data =
    localStorage.getItem("TN_Notifications");


    if(data){

        TN_Notifications =
        JSON.parse(data);

    }

}



function showNotifications(){

    let list = "";


    TN_Notifications.forEach(item=>{

        list +=
        "\n🔔 " +
        item.text +
        "\n" +
        item.time +
        "\n";

    });


    alert(

        "TN Creative World Notifications\n\n" +

        list +

        "\nCreated & Developed by Tahir Nazeer"

    );

}



function clearNotifications(){

    TN_Notifications = [];


    localStorage.removeItem(
        "TN_Notifications"
    );

}