class LV2_Star {
  constructor(k) {
    this.k = k; //별의 종류
    this.r1 = (width / 6) * 0.9; //별 지름
    this.r2 = this.r1 * 1.6; //테두리 점선 지름
    this.rChange = 0.2; //원이 커지는 속도
    this.x = random(this.r2 / 2, width - this.r2 / 2); //별 x좌표
    this.y = random(this.r2 / 2, height - this.r2 / 2); //별 y좌표
    this.bx=this.x;
    this.by=this.y;
    this.b=false;
    this.t=255;
  }

  display() {
    // noStroke();
    // fill(255, 100);
    // ellipse(this.x, this.y, this.r2, this.r2); //테두리
    imageMode(CENTER);
    tint(255, 255);
    image(outlineImg, this.x-1, this.y-1, this.r2+20, this.r2+20);
    image(starImgs[this.k], this.x, this.y, this.r1, this.r1);
    imageMode(CORNER);
  }
  //나타내기

  broken() {
    imageMode(CENTER);
    tint(255, this.t);
    image(brokenStarImgs[this.k], this.bx, this.by, this.r1*1.5, this.r1*1.5);
    imageMode(CORNER);
  }
  
  
  brokenMove() {
    this.t-=10;
  }
  //부서진 별 나타내기

  expand() {
    if (this.r1 <= this.r2) {
      this.r1 += this.rChange;
    }
  }
  //별이 점점 커짐

  caught() {
    this.y = -999;
    this.rChange = 0;
  }
  //별이 잡힘

  fail() {
    if (this.r1 >= this.r2 - this.rChange && this.r1 < this.r2) return true;
    else return false;
  }
  //별을 잡지 못함
  
      show(){
    if(true){
    return true;
       }
    else if(this.y == -999||this.t <= 300){
    return false;}

  }
  
}
