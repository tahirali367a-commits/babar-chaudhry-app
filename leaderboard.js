// TN Creative World
// Leaderboard System
// Created & Developed by Tahir Nazeer


let TN_Leaderboard = [];


function addCreatorRank(name, level, coins){

    let creator = {

        name: name,

        level: level,

        coins: coins,

        brand: "TN Creative World"

    };


    TN_Leaderboard.push(creator);


    TN_Leaderboard.sort(
        (a,b)=> b.coins - a.coins
    );


    localStorage.setItem(
        "TN_Leaderboard",
        JSON.stringify(TN_Leaderboard)
    );

}



function loadLeaderboard(){

    let data =
    localStorage.getItem("TN_Leaderboard");


    if(data){

        TN_Leaderboard =
        JSON.parse(data);

    }

}



function showLeaderboard(){

    let ranking = "";


    TN_Leaderboard.forEach((user,index)=>{

        ranking +=

        "\n🏆 " +
        (index+1) +

        " - " +

        user.name +

        "\nLevel: " +
        user.level +

        "\nCoins: " +
        user.coins +

        "\n";

    });


    alert(

        "TN Creative World Leaderboard\n\n" +

        ranking +

        "\nCreated & Developed by Tahir Nazeer"

    );

}