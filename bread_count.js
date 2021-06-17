class BreadCount {
  
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.w = width/12;
  }
    display(){
     image(lifeImg, this.x,this.y, this.w, this.w);
  }
  
  
}