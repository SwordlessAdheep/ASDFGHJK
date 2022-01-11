video="";
status= "";
objects=[ ];
r="";
g="";
b="";

function preload() {
video= createCapture(VIDEO);


}

function setup() {

canvas= createCanvas(480,380);
canvas.center();
video.hide();

}

function draw() {

image(video, 0 , 0, 480, 380);

if(status!=""){

objectDetector.detect(video, gotResult);

for(i=0; i<objects.length; i++) {

document.getElementById("status").innerHTML="status: object detected";
document.getElementById("number_of_objects").innerHTML="number of objects detected here area= "+ objects.length;
fill(r, g, b);
percent= floor(objects[i].confidence*100);
text(objects[i].label+" - "+percent+"%", objects[i].x, objects[i].y);
noFill();
stroke(r, g, b);
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

   

}

}

}

function start() {

objectDetector= ml5.objectDetector('cocossd', modelloaded);
document.getElementById("status").innerHTML="status: object is totaly dtechted :))))";

}

function modelloaded(){

console.log("model loaded");
status= true;


}

function gotResult(error, results){

if(error){

console.error(error);

}

else{

console.log(results);
objects= results;

}

}