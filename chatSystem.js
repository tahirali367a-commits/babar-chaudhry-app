// TN Creative World
// Chat System
// Created & Developed by Tahir Nazeer


let TN_Messages = [];


function sendMessage(user, message){

    if(message.trim() === ""){
        return;
    }


    let newMessage = {

        user: user,

        text: message,

        time: new Date().toLocaleString(),

        brand: "TN Creative World"

    };


    TN_Messages.push(newMessage);


    localStorage.setItem(
        "TN_Chat",
        JSON.stringify(TN_Messages)
    );


    alert(
        "Message Sent\n\n" +
        "TN Creative World\n" +
        "Created by Tahir Nazeer"
    );

}



function loadMessages(){

    let data =
    localStorage.getItem("TN_Chat");


    if(data){

        TN_Messages =
        JSON.parse(data);

    }

}



function showMessages(){

    let chat = "";

    TN_Messages.forEach(msg=>{

        chat +=
        "\n" +
        msg.user +
        ": " +
        msg.text;

    });


    alert(
        "TN Creative World Chat\n\n" +
        chat
    );

}