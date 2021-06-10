const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var backgroundImg;
var snow = [];

function preload(){
  backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);

}

function draw() {
  background(backgroundImg); 
  if(frameCount%05===0){
    snow.push(new Snow(random(width/2-10, width/2+10), 10, 10));
  }
  for (var j = 0; j < snow.length; j++) {
    snow[j].display();   
  }


}