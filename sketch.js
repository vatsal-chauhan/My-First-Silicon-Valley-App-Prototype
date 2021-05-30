var name,subject;
var form,suggest;
var capture,captureImg,career,careerImg;
var docterImg,lawyerImg,literatureImg,doctor,lawter,literature;

function preload(){
  doctorImg=loadImage("science/doctor.jpg");
  lawyerImg=loadImage("humanities/lawyer.PNG");
  literatureImg=loadImage("humanities/lit.jpg");
  captureImg=loadImage("Capture.PNG");
  careerImg=loadImage("jjb.PNG");

}

function setup() {
  //creating canvas and giving parameters to it
  createCanvas(displayWidth-50,displayHeight-100);
  //adding the sprites
  doctor=createSprite(width-850,height/2+200,10,10);
  doctor.addImage("doctor",doctorImg);
  doctor.scale=0.2;
  lawyer=createSprite(width-150,height/2+200,10,10);
  lawyer.addImage("lawyer",lawyerImg);
  lawyer.scale =0.5;
  literature=createSprite(width-550,height/2+200,10,10);
  literature.addImage("lit",literatureImg);
  literature.scale=0.7;
  capture=createSprite(width-750,height/2-170,10,10);
  capture.addImage("cap",captureImg );
  capture.scale=0.7;
  career=createSprite(width-120,height/2-150,10,10);
  career.addImage("care",careerImg);
  career.scale=0.9;
  form=new Form();
  form.display();
}

function draw() {
  background(255,255,255);  
  drawSprites();
}