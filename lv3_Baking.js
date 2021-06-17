let yLv1; //전역변수로 정의 안하면
let yLv2;
let yLv3;
let yLv4;
let yLv5;

class LV3_Baking {
  constructor(c) {
    let xs = [width / 12, (width / 12) * 11];
    yLv1 = (height / 16) * 11-10;
    yLv2 = (height / 16) * 9-15;
    yLv3 = (height / 16) * 7-20;
    yLv4 = (height / 16) * 5-25;
    yLv5 = (height / 16) * 3-30;
    let yLvs = [yLv1, yLv2, yLv3, yLv4, yLv5];
    this.x = random(xs);
    this.y = random(yLvs);
    this.c = c;
    this.r = 120;
    this.sp = 1.5;
  }

  display() {
    //image(breadImgs[this.c],this.x,this.y,width/10,height/10);
    // push();
    // translate(this.x, this.y);
    // //image(this.c,0,0,100,100);
    // fill(this.c);
    // noStroke();
    // circle(0, 0, r);
    // pop();
    
    push();
    translate(this.x,this.y);
    imageMode(CENTER);
    image(breadImgs[this.c],0,0,this.r,this.r);
    pop();
    imageMode(CORNER);
    
  }

  move() {
    if (this.x >= width / 12 && this.x < width / 3 - this.r / 2) {
      this.x += this.sp;
    } else if (this.x <= (width / 12) * 11 && this.x >= width / 3 + this.r / 2) {
      this.x -= this.sp;
    }
  }

  caught() {
    this.x = -999;
    this.y = -999;
    this.sp = 0;
  }

  fail() {
    if ((this.x >= width / 3 - this.r / 2 && this.x <= (width / 3) * 2 + this.r / 2)&&((tLevel == 1 && this.y != yLv1) ||
      (tLevel == 2 && this.y != yLv2) ||
      (tLevel == 3 && this.y != yLv3) ||
      (tLevel == 4 && this.y != yLv4) ||
      (tLevel == 5 && this.y != yLv5)))
      return true;
    else return false;
  }
  
  show(){
    if(true){
      return true;
    }
    else if(this.y==-999){
      return false;
    }
  }


 /* success() {
    if (tLevel == 1 && this.y == yLv1) {
      this.x = -999;
      this.y = -999;
      lv3_baked++;
      matched=true;
    } else if (tLevel == 2 && this.y == yLv2) {
      this.x = -999;
      this.y = -999;
      lv3_baked++;
      matched=true;
    } else if (tLevel == 3 && this.y == yLv3) {
      this.x = -999;
      this.y = -999;
      lv3_baked++;
      matched=true;
    } else if (tLevel == 4 && this.y == yLv4) {
      this.x = -999;
      this.y = -999;
      lv3_baked++;
      matched=true;
    } else if (tLevel == 5 && this.y == yLv5) {
      this.x = -999;
      this.y = -999;
      lv3_baked++;
      matched=true;
    }

    console.log(lv3_baked + " breads baked");
  }

  test() {
    //사라지고, life -1
    if (this.x >= width / 3 - r / 2 && this.x <= (width / 3) * 2 + r / 2) {
      this.x = -999;
      this.y = -999;
      lv3_touched++;
      matched=false;
      console.log("life -" + lv3_touched);
    }
  } */
}