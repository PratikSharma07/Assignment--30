const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var apple, slingShot;

var score = 0;

function preload() {
    backgroundImg = loadImage("sprites/bg.jpg");
}

function setup(){
    var canvas = createCanvas(1366,620);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(683,height,1366,20);

    platform1 = new Ground(150, 305, 300, 170);
    platform2 = new Ground(1000,100,300,20);
    platform3 = new Ground(750,250,300,20);
    platform4 = new Ground(1150,400,200,20);
    platform5 = new Ground(750,550,370,20);
 

    fruit1 = new Coconut(1100,90,70,70);
    fruit2 = new Pineapple(1040,90,70,70);
    fruit3 = new Coconut(980,90,70,70);
    fruit4 = new Pineapple(920,90,70,70);
    fruit5 = new Coconut(850,160,50,50);
    fruit6 = new Pineapple(780,150,70,70);
    fruit7 = new Pineapple(710,150,70,70);
    fruit8 = new Coconut(660,150,50,50);
    fruit9 = new Coconut(900,540,50,50);
    fruit10 = new Coconut(840,540,50,50);
    fruit11 = new Coconut(780,540,50,50);
    fruit12 = new Coconut(720,540,50,50);
    fruit13 = new Coconut(660,540,50,50);
    fruit14= new Coconut(600,540,50,50);
    fruit15= new Coconut(840,540,50,50);
    fruit16= new Coconut(780,520,50,50);
    fruit17= new Coconut(720,520,50,50);
    fruit18= new Coconut(660,520,50,50);
    fruit19= new Coconut(780,500,50,50);
    fruit20= new Coconut(720,500,50,50);
    fruit21 = new Coconut(740,480,60,60);
    fruit22 = new Pineapple(1200,380,70,70);
    fruit23 = new Pineapple(1150,380,70,70);
    fruit24 = new Pineapple(1100,380,70,70);
    fruit25 = new Pineapple(1200,360,70,70);
    fruit26 = new Pineapple(1150,360,70,70); 
    fruit27 = new Pineapple(1100,360,70,70);
   
    apple = new Apple(100,100);


    slingShot = new SlingShot(apple.body,{x:200,y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)

    fruit1.score();
    fruit2.score();
    fruit3.score();
    fruit4.score();
    fruit5.score();
    fruit6.score();
    fruit7.score();
    fruit8.score();
    fruit9.score();
    fruit10.score();
    fruit11.score();
    fruit12.score();
    fruit13.score();
    fruit14.score();
    fruit15.score();
    fruit16.score();
    fruit17.score();
    fruit18.score();
    fruit19.score();
    fruit20.score();
    fruit21.score();
    fruit22.score();
    fruit23.score();
    fruit24.score();
    fruit25.score();
    fruit26.score();
    fruit27.score();
    fruit1.display();
    fruit2.display();
    fruit3.display();
    fruit4.display();
    fruit5.display();
    fruit6.display();
    fruit7.display();
    fruit8.display();
    fruit9.display();
    fruit10.display();
    fruit11.display();
    fruit12.display();
    fruit13.display();
    fruit14.display();
    fruit15.display();
    fruit16.display();
    fruit17.display();
    fruit18.display();
    fruit19.display();
    fruit20.display();
    fruit21.display();
    fruit22.display();
    fruit23.display();
    fruit24.display();
    fruit25.display();
    fruit26.display();
    fruit27.display();
    ground.display();
    platform1.display();
    platform2.display();
    platform3.display();
    platform4.display();
    platform5.display();
    apple.display();
    slingShot.display();    
}
function mouseDragged(){
Matter.Body.setPosition(apple.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
     slingShot.attach(apple.body);
   
    }
}
