class Bread {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.c = color;
    this.r = 50;
    this.s = 15;
    this.g = 0.7;
    this.a = false;
    this.bx = (2 * width) / 3;
    this.by = (6 * height) / 7;
    this.bys = 23;
  }

  tong0display() {
    image(tongsImgs[0], (2 * width) / 3, height / 5, width / 3, height / 3);
  }

  tong1display() {
    image(tongsImgs[1], (2 * width) / 3, height / 5, width / 3, height / 3);
  }

  display() {
    image(breadImgs[this.c], this.x - 200, this.y, width / 5, width / 5);
  }

  fall() {
    this.y += this.s;
    this.s += this.g;
    if (this.y > height - 80) {
      this.x = -999;
      this.y = 999;
    }
  }

  evaluate() {
    if (this.c == lv4_stars[lv4_stars.length - 2].c) {
      se1.volume(0.8);
      se1.play();
      breadCount += 1;
      lv4_stars[lv4_stars.length - 2].y = 999;
      this.a = true;
      // let a= new BreadStar(this.x, this.y, this.c);
      // a.move();
      // a.display();
      // 아예 새로운 이미지 업로드 되는 순간 opacity assign으로 수정
    } else {
      se2.play();
      lv4_failure++;
            if (lifeCount()<=0){
        stage=12;
      }
    }
  }
  success() {
    push();
    translate(this.bx - 200, this.by);
    if (frameCount % 5 == 0) {
      rotate(random(radians(-10, 0)));
    }
    image(breadStarImgs[this.c], 0, 0, width / 5, width / 5);
    pop();
    // this.by+=random(-5,5);
  }

  successMove() {
    this.by -= this.bys;
    this.bys -= 1;
    if (this.by < height / 4) {
      this.bys = -0.99 * this.bys;
    }
  }

  show(){
    if(true) {
      return true;
    }
    else if(this.x<=-999 || this.y>=999) {
      return false;
  }}
}
