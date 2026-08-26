// TN Creative World
// Multiplayer Game Room System
// Created & Developed by Tahir Nazeer


let players = [];

const maxPlayers = 4;


function joinGameRoom(playerName){

    if(players.length < maxPlayers){

        players.push(playerName);

        alert(
            playerName +
            " joined TN Creative Room!"
        );

        updatePlayers();

    }
    else{

        alert(
            "Room is full! Maximum 4 players allowed."
        );

    }

}



function leaveRoom(playerName){

    players =
    players.filter(
        player => player !== playerName
    );


    updatePlayers();

}



function updatePlayers(){

    const box =
    document.getElementById("playersBox");


    if(!box) return;


    box.innerHTML = "";


    players.forEach((player,index)=>{

        box.innerHTML += `

        <div class="player-card">

        <h3>
        Player ${index+1}
        </h3>

        <p>
        ${player}
        </p>

        </div>

        `;

    });

}



function startGame(){

    if(players.length >= 2){

        alert(
        "Game Started!\n\n" +
        "TN Creative World\n" +
        "Created by Tahir Nazeer"
        );

    }
    else{

        alert(
        "Need at least 2 players."
        );

    }

}