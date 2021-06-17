class Basket {
  constructor() {
    this.x = width/2; //바구니 x좌표 중심
    this.y = height*5/6; //바구니 y좌표 중심
    this.w = width*27/100; //바구니의 너비
    this.h = height/6; // 바구니의 높이
   
  }
  move() {
    if (this.x - this.w/2 > 0 && this.x + this.w/2 < width) {
      if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        this.x -= 7;
      }
      if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        this.x += 7;
      }
    } else if (this.x - this.w/2 <= 0) {
      this.x += 1;
    } else {
      this.x -= 1;
    }
  } //바구니 좌우 이동
  
  display() {
    imageMode(CENTER);
    image(basketImg, this.x, this.y, this.w, this.h);
    imageMode(CORNER);
  } //바구니 이미지 보이도록
  intersect(b) {
    if (
      b.x > this.x - (this.w/2 + 20) &&
      b.x + b.r + width/200 < this.x + this.w/2 +20 &&
      b.y > this.y - (b.r + 40)
    )
      return true;
    else return false;
  } // 바구니가 별을 잡는 것으로 판정하는 범위 (소수점 아래는 )
}
