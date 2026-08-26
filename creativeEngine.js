// TN Creative World
// Creative Engine System
// Created & Developed by Tahir Nazeer


let toolMode = "brush";

let brushSize = 5;


function setBrush(){

    toolMode = "brush";

    alert(
        "Brush Mode Active\nTN Creative World\nTahir Nazeer"
    );

}



function setEraser(){

    toolMode = "eraser";

    alert(
        "Eraser Mode Active"
    );

}



function changeBrushSize(size){

    brushSize = size;

}



function clearCanvas(){

    const canvas =
    document.getElementById("drawingCanvas");

    if(canvas){

        let ctx =
        canvas.getContext("2d");

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

    }

}



function drawToolColor(color){

    currentColor = color;

}



function creatorMark(){

    return `
    TN Creative World
    Created & Developed by Tahir Nazeer
    `;

}