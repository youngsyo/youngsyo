class Hammer{
  
  constructor(){
    this.w=250*0.9;
    this.h=250;
    this.x=-this.w/2
    this.y=-this.h
  }
  
  display(){
    tint(255,255);
    image(hammerImg,-this.w/2,-this.h+15,this.w,this.h);
  }
  
  
}