// TN Creative World
// Store System
// Created & Developed by Tahir Nazeer


let TN_Store_Items = [

    {
        name: "Premium Brush",
        price: 50,
        type: "tool"
    },

    {
        name: "Special Colors Pack",
        price: 100,
        type: "colors"
    },

    {
        name: "Creative Sticker Pack",
        price: 150,
        type: "sticker"
    }

];



function showStore(){

    let list = "";


    TN_Store_Items.forEach((item,index)=>{

        list +=

        "\n" +
        (index+1) +
        ". " +
        item.name +

        " - " +
        item.price +
        " Coins";

    });


    alert(

    "TN Creative World Store\n\n" +

    list +

    "\n\nCreated & Developed by Tahir Nazeer"

    );

}



function buyItem(index){

    let item =
    TN_Store_Items[index];


    if(!item){

        alert("Item not found");

        return;

    }


    alert(

    item.name +

    " Purchased!\n\n" +

    "TN Creative World\n" +

    "Created by Tahir Nazeer"

    );

}