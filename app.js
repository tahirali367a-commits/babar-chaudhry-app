const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

let drawing = false;
let currentColor = "#000000";
let brushSize = 5;


// برش شروع
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", stopDraw);
canvas.addEventListener("mousemove", draw);


// موبائل کے لیے
canvas.addEventListener("touchstart", startTouch);
canvas.addEventListener("touchend", stopDraw);
canvas.addEventListener("touchmove", touchDraw);



function startDraw(e){
    drawing = true;
    draw(e);
}


function stopDraw(){
    drawing = false;
    ctx.beginPath();
}


function draw(e){

    if(!drawing) return;

    const rect = canvas.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;


    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = currentColor;


    ctx.lineTo(x,y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x,y);
}



function startTouch(e){
    drawing=true;
}


function touchDraw(e){

    if(!drawing) return;

    let touch=e.touches[0];

    let rect=canvas.getBoundingClientRect();

    let x=touch.clientX-rect.left;
    let y=touch.clientY-rect.top;


    ctx.lineWidth=brushSize;
    ctx.lineCap="round";
    ctx.strokeStyle=currentColor;

    ctx.lineTo(x,y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x,y);
}



// 100 رنگوں کا نظام

const colors=[
"#000000","#FFFFFF","#FF0000","#00FF00","#0000FF",
"#FFFF00","#FF00FF","#00FFFF","#FFA500","#800080",
"#008000","#FFC0CB","#A52A2A","#808080","#FFD700"
];


for(let i=0;i<85;i++){

    let randomColor =
    "#" + Math.floor(Math.random()*16777215).toString(16);

    colors.push(randomColor);
}



const colorBox=document.getElementById("colorBox");


colors.forEach(color=>{

    let btn=document.createElement("div");

    btn.className="color-btn";

    btn.style.background=color;

    btn.onclick=function(){

        currentColor=color;

    };


    colorBox.appendChild(btn);

});



// مشن شروع

function startCreative(){

    alert(
    "Welcome to TN Creative World!\nYour first mission: Create something beautiful."
    );

}


// تصویر محفوظ کرنا

function saveArt(){

    let link=document.createElement("a");

    link.download="Tahir-Nazeer-Art.png";

    link.href=canvas.toDataURL();

    link.click();

}