class Star {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.c = color;
    this.r = 30;
    this.sx = 1.5;
    this.sy = 1;
  }
  display() {
    image(
      starDustImgs[this.c],
      this.x - 200,
      this.y - 130,
      width / 2,
      height / 2
    );
  }
  evaluate(){
    if(this.x <= width-290 && this.x >= width-290-this.sx && this.y == 4*height/5 && lv4_breads.length>0 && lv4_breads.slice(spaceCount+1).length>0 && this.c == lv4_breads[spaceCount+1].c){
      se2.play();
      console.log("실패");
      lv4_failure++;
            if (lifeCount()<=0){
        stage=12;
      }
    }
  //   else if(this.x<=width-300 && this.x >= width-300-this.sx && this.y == 4*height/5){console.log("통과");
  // }
  }

  goTrash() {
    this.x += this.sx;
  }
  
  show(){
    if(true){
      return true;
    }
    else if(this.x>width+30){
      return false;
    }
  }
}
