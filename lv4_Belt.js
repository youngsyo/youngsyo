class Belt{
  constructor(x, y){
    this.x1=x;
    this.y1=y;
    this.x2=this.x1+150;
    this.y2=this.y1;
    this.x3=this.x1+145;
    this.y3=this.y1+200;
    this.x4=this.x1-10;
    this.y4=this.y1+200;
  }
  
    
  move(){
    this.x1+=1.5;
    this.x2+=1.5;
    this.x3+=1.5;
    this.x4+=1.5;
  }
  display(){
    fill(117, 112, 111);
    quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
  }
  
  show(){
    if(true){
      return true;
    }
    else if(this.x1>width+30){
      return false;
    }
  }
}