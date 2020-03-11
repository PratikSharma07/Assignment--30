class Coconut extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/Coconut.png");
  }


display(){
  if(this.body.speed<6){
    super.display();
  }
  else{
    push();
    World.remove(world,this.body);
    tint(255,this.Visibility);
    this.Visibility= this.Visibility-5;
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
  }
}
score(){
  if (this.Visiblity < 0 && this.Visiblity > -1005){
    score++;
  }
}
};
