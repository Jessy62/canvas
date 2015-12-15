var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

//cercle

ctx.beginPath();
ctx.arc(200,200,100,0,Math.PI*2);
ctx.strokeStyle = "rgb(27, 52, 140)";
ctx.lineWidth = 15;
ctx.stroke();
console.log(ctx);

//1er Carré

ctx.fillStyle = "rgb(14, 119, 204)";
ctx.fillRect(187, 160, 25, 25);


//2nd Carré

ctx.fillStyle = "rgb(0, 23, 144)";
ctx.fillRect(187, 210, 25, 25);
