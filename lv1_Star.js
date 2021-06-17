class LV1_Star {
  constructor(k) {
    this.k = k; //별의 종류
    this.x = random(30, width - (width / 12 + 30)); //별 생성 x좌표 범위
    this.y = 0; //별 생성 y좌표
    this.r = width / 10;
    this.sp = 2.5; //별이 떨어지는 속도
  }

  move() {
    this.y += this.sp;
    if (this.y + this.r > (height * 5) / 6 + 2) {
      this.y = -999;
    }
  } // 별 떨어지는 움직임

  display() {
    image(
      starImgs[this.k],
      this.x,
      this.y,
      this.r + width / 200,
      this.r+ width / 200
    );
  } // 별 이미지가 보이도록

  caught() {
    se6.play();
    this.sp = 0;
    this.y = -999;
  } // 바구니에 잡혔을 때 별의 상태

  fail() {
    if (this.y + width / 10 > (height * 5) / 6) {
      this.sp = 0;
      this.y = -999
      return true;
    } else return false;
  } //바구니에 담지 못했을 때 실패로 판정하는 범위 (소수점 아래는 )
  
    
  show(){
    if(true){
    return true;
       }
    else if(this.caught() || this.fail()){
    return false;}

  }
  
}
