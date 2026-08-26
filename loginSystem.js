// TN Creative World
// Login System
// Created & Developed by Tahir Nazeer


let TN_Player = {

    name:"",

    login:false

};



function playerLogin(){

    let name =
    prompt(
    "Enter Your Name"
    );


    if(name){

        TN_Player.name=name;

        TN_Player.login=true;


        localStorage.setItem(
        "TN_Player",
        JSON.stringify(TN_Player)
        );


        alert(

        "Welcome " +
        name +
        "\n\nTN Creative World"

        );


        startMusicSystem();

    }

}



function checkLogin(){

    let data =
    localStorage.getItem(
    "TN_Player"
    );


    if(data){

        TN_Player =
        JSON.parse(data);

    }

}