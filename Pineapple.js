class Pineapple extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/Pineapple.png");
    }
display(){
  console.log(this.body.speed);
  if(this.body.speed<5.5){
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