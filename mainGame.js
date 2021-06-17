let stage = 8.1;
let countDown = [];
let scene = [];
let tryGame = 0;

//////////////////
let time_x=900;
let life = 4; //영험한 별
let lifeStars = []; //영험한 별 이미지

let lv1_Stars = []; // 떨어지는 별들을 담는 배열
let lv1_Failure = 0; // 실패 횟수
let basket; // 바구니
let ONEtoTWO = []; // 2단계로 넘어가게 될 잡은 별의 개수

let starImgs = []; // 세 종류의 별 이미지
let brokenStarImgs = []; // 부서진 별 이미지 (빨노파)
let breadImgs = []; // 세 종류 빵 이미지(빨노파)
let starDustImgs = []; // 세 종류 별가루 이미지(빨노파)
let breadStarImgs = []; // 세 종류 별가루빵 이미지(빨노파)
let tongsImgs = []; // 집게 이미지(접음, 펼침)
let BG = []; // 배경 이미지
let button = []; // 버튼 이미지
let ed = []; // 단계별 엔딩 & 최종 엔딩 이미지
let lifeImg; // 영험한 별
let basketImg; // 바구니 이미지
let starKind; // 빵, 별가루 random index
let outlineImg; // 2단계 별 터지는 기준인 점선
let trashcanImg; //4단계 쓰레기통 이미지

/////////////////////////////////////////////////////////////

let newMouseX;
let newMouseY;
let lv2_Stars = []; //별
let starColors = []; //별의 색깔
let lv2_Failure = 0; //실패 횟수
let lv2_Convey = false; // 3단계로 오브젝트를 넘길지 여부
let TWOtoTHREE = 0; //3단계로 넘어가게 될 잡은 별의 개수
let hammer; //망치

let hammerImg; //망치 이미지

///////////////////////////////////////////////////////////////
let lv3_therm;
let lv3_baking = [];
let lv3_baked = 0;
let lv3_timer = 1000; //lev2 연결 전 임시
let lv3_baking1 = 0;
let THREEtoFOUR = 0; //4단계로 넘어갈 구운 빵의 수
let lv3_color;
let lv3_failure = 0;
let breadKind = [];
/////////////////////////////////////////////////////////////
//audio
let bgm1;
let bgm2;
let bgm3;
let bgm4;
let bgm5;
let se1; //빵 완성 코인소리
let se2; //영험한 별 -1
let se3; //영험한 별 0개일 때
let se4; //망치
let se5; //클릭 소리
let se6; //게임1 피드백
let se7; //게임3

/////////////////////////////////////////////

let lv4_belts = [];
let lv4_breads = [];
// let lv4_breads2 = [];
let lv4_stars = [];
let lv4_failure = 0;
let fall = false;
let breadCount = 0;
let lv4_notice = false;
let lv4_opacity = 0;
let spaceCount = -1;
let opacity1 = 255;
let opacity2 = 0;
let change = false;
////////////////

function preload() {
  scene[0] = loadImage("~photo/0_1 title.png");
  scene[1] = loadImage("~photo/0_2 help.png");
  scene[2] = loadImage("~photo/1_1 intro.png");
  scene[3] = loadImage("~photo/1_2 intro.png");
  scene[4] = loadImage("~photo/1_3 intro.png");
  scene[5] = loadImage("~photo/2_1 LV1.png");
  scene[6] = loadImage("~photo/2_2 LV2.png");
  scene[7] = loadImage("~photo/2_3 LV3.png");
  scene[8] = loadImage("~photo/2_4 LV4.png");
  scene[9] = loadImage("~photo/0_3 BGM.png");
  lifeImg = loadImage("~photo/life.png");
  starImgs[0] = loadImage("~photo/star0.png");
  starImgs[1] = loadImage("~photo/star1.png");
  starImgs[2] = loadImage("~photo/star2.png");
  brokenStarImgs[0] = loadImage("~photo/broken0.png");
  brokenStarImgs[1] = loadImage("~photo/broken1.png");
  brokenStarImgs[2] = loadImage("~photo/broken2.png");
  outlineImg = loadImage("~photo/outline.png");
  breadImgs[0] = loadImage("~photo/bread0.png");
  breadImgs[1] = loadImage("~photo/bread1.png");
  breadImgs[2] = loadImage("~photo/bread2.png");
  starDustImgs[0] = loadImage("~photo/starDust0.png");
  starDustImgs[1] = loadImage("~photo/starDust1.png");
  starDustImgs[2] = loadImage("~photo/starDust2.png");
  breadStarImgs[0] = loadImage("~photo/breadStar0.png");
  breadStarImgs[1] = loadImage("~photo/breadStar1.png");
  breadStarImgs[2] = loadImage("~photo/breadStar2.png");
  basketImg = loadImage("~photo/basket.png");
  hammerImg = loadImage("~photo/hammer.png");
  tongsImgs[0] = loadImage("~photo/tongs0.png");
  tongsImgs[1] = loadImage("~photo/tongs1.png");
  lifeImg = loadImage("~photo/life.png");
  trashcanImg = loadImage("~photo/trashcan.png");
  BG[0] = loadImage("~photo/BG1.png");
  BG[1] = loadImage("~photo/BG2.png");
  BG[2] = loadImage("~photo/BG3.png");
  button[0] = loadImage("~photo/start1B1.png");
  button[1] = loadImage("~photo/start1B2.png");
  button[2] = loadImage("~photo/helpB1.png");
  button[3] = loadImage("~photo/helpB2.png");
  button[4] = loadImage("~photo/closeB.png");
  button[5] = loadImage("~photo/beforeB.png");
  button[6] = loadImage("~photo/nextB.png");
  button[7] = loadImage("~photo/start2B.png");
  button[8] = loadImage("~photo/nextB1.png");
  button[9] = loadImage("~photo/nextB2.png");
  button[10] = loadImage("~photo/toTitleB1.png");
  button[11] = loadImage("~photo/toTitleB2.png");
  button[12] = loadImage("~photo/bgmListB1.png");
  button[13] = loadImage("~photo/bgmListB2.png");
  ed[0] = loadImage("~photo/ending1.png");
  ed[1] = loadImage("~photo/ending2.png");
  ed[2] = loadImage("~photo/ending3.png");
  ed[3] = loadImage("~photo/ending4.png");
  ed[4] = loadImage("~photo/final1.png");
  ed[5] = loadImage("~photo/final2_1.png");
  ed[6] = loadImage("~photo/final2_2.png");

  bgm1 = createAudio("~audio/bgm1.mp3");
  bgm2 = createAudio("~audio/bgm2_2.mp3");
  bgm3 = createAudio("~audio/bgm3_ending123.mp3");
  bgm4 = createAudio("~audio/bgm4_ending04.mp3");
  bgm5 = createAudio("~audio/bgm5_santa.mp3");
  se1 = createAudio("~audio/se1.mp3");
  se2 = createAudio("~audio/se2.wav");
  se3 = createAudio("~audio/se3_1.mp3");
  se4 = createAudio("~audio/se4.m4a");
  se5 = createAudio("~audio/se5.mp3");
  se6 = createAudio("~audio/se6_1.wav");
  se7 = createAudio("~audio/se7_1.mp3");
  //let playMode = 'sustain';
}

function setup() {
  createCanvas(900, 800);
  for (let i = 0; i < 999; i++) {
    countDown[i] = 30;
  }
  basket = new Basket();
  hammer = new Hammer();

  for (let i = 0; i < 4; i++) {
    lifeStars[i] = new Life(20 + 100 * i + 20, 22);
  }

  starColors = [color(255, 0, 0), color(255, 255, 0), color(0, 0, 255)]; //별 색깔 종류(lv2는 아직 이미지x)

  //for level3
  lv3_therm = new LV3_Therm();

  lv4_setting();
}

function lv4_setting() {
  //벨트
  for (let i = 0; i < 3; i++) {
    lv4_belts[i] = new Belt(width - 150 * (i + 1), height - 150);
  }
  //별가루
  for (let i = 0; i < 3; i++) {
    lv4_stars[i] = new Star(
      width - 350 * (i + 1),
      (4 * height) / 5,
      int(random(3))
    );
  }
}

function draw() {
  starKind = int(random(0, 3));
  background(0);

  //console.log(lv1_Star[i].fail());
  //  for (let i = 0; i < lv1_Stars.length; i++) {
  // console.log(lv1_Star[i].fail());
  //  }

  // if (lifeCount() == 1 && lv1_Star[i].fail() == true) {
  //       stage = 9;
  //     }

  //<게임 개수 두 개일 경우>
  /*newMouseX = map(mouseX, width / 2, width, 0, width);
  newMouseY = map(mouseY, height/4, height/4*3, 0, height);
  lv2_GameOn_A(width, height/2, 0.5);*/

  //<게임 개수 세 개 이상일 경우>
  // newMouseX = map(mouseX, width / 2, width, 0, width);
  // newMouseY = map(mouseY, 0, height / 2, 0, height);
  // lv2_GameOn_B(width, 0, 0.5);

  //translate()로 인해 게임 화면 상 망치의 위치와 컴퓨터 화면 상 커서의 위치 간에 생긴 좌표 차이를 map()으로 조정
  //lv2_GameOn()의 x, y좌표 수정하면 그에 맞게 newMouseX, newMouseY를 새로 mapping 해야 함 ->위처럼 두 가지 경우로 나뉨

  // lv1_GameOn(0, 0, 0.5);
  // lv3_GameOn(0, height, 0.5);
  // lv4_GameOn(width, height, 0.5);

  switch (stage) {
    case 0:
      //title
      //bgm1.onplay = null;
      bgm2.stop();
      bgm4.stop();
      bgm5.stop();
      bgm1.volume(0.4);
      bgm1.loop();

      lv1_Failure = 0;
      lv2_Failure = 0;
      lv3_failure = 0;
      lv4_failure = 0;
      breadCount = 0;

      // lv1_Stars.length = 0;
      // lv2_Stars.length = 0;
      // lv3_baking.length = 0;
      // lv4_breads.length = 0;

      case0_On(0, 70, 1, 0.85);
      // rect(0,50, time_x, 10);
      // if(frameCount%60==0){
      //   time_x--;
      // }

      break;
    case 0.1:
      case0_1_On(0, 70, 1, 0.85);
      break;
    case 1:
      case1_On(0, 70, 1, 0.85);
      break;
    case 2:
      case2_On(0, 70, 1, 0.85);
      break;
    case 3:
      case3_On(0, 70, 1, 0.85);
      break;
    case 4:
      case4_On(0, 70, 1, 0.85);
      break;
    case 5:
      case5_On(0, 70, 1, 0.85);

      break;
    case 5.1:
      bgm1.stop();
      bgm2.volume(0.4);
      bgm2.loop();
      //background(255);
      case5_1_On(0, 140, 1, 0.85);

      // if (lifeCount() == 0) {
      //   stage = 13;
      // }

      // fill(255,0,0);
      // noStroke();
      //  rect(0,0,millis()/37.74,25)

      if (lifeCount() == 4) {
        for (let i = 0; i < 4; i++) {
          lifeStars[i].display();
        }
      } else if (lifeCount() == 3) {
        for (let i = 0; i < 3; i++) {
          lifeStars[i].display();
        }
      } else if (lifeCount() == 2) {
        for (let i = 0; i < 2; i++) {
          lifeStars[i].display();
        }
      } else if (lifeCount() == 1) {
        for (let i = 0; i < 1; i++) {
          lifeStars[i].display();
        }
      }
      noStroke();
      fill(248, 252, 154);
      rect(0,120, time_x, 10);
      if(frameCount%60==0){
        time_x -=60;
      }
      if(time_x==0){
        time_x=900;
      }

      //console.log(countDown);

      break;
    case 6:
      //let playMode = 'restart';
      bgm2.volume(0.4);
      bgm2.loop();
      case6_On(0, 70, 1, 0.85);

      break;
    case 6.1:
      //let playMode = 'restart';
      lv2_Convey = false;
      bgm2.volume(0.4);
      bgm2.loop();
      noCursor();
      //background(255);
      case6_1_On(0, 70, 1, 0.85);

      // if (lifeCount() == 0) {
      //   stage = 13;
      // }
      //             fill(255,0,0);
      // noStroke();
      //  rect(0,0,millis()/39,25)

      if (lifeCount() == 4) {
        for (let i = 0; i < 4; i++) {
          lifeStars[i].display();
        }
      } else if (lifeCount() == 3) {
        for (let i = 0; i < 3; i++) {
          lifeStars[i].display();
        }
      } else if (lifeCount() == 2) {
        for (let i = 0; i < 2; i++) {
          lifeStars[i].display();
        }
      } else if (lifeCount() == 1) {
        for (let i = 0; i < 1; i++) {
          lifeStars[i].display();
        }
      }
      fill(248, 252, 154);
      rect(0,230, time_x, 10);
      if(frameCount%60==0){
        time_x -=60;
      }
      if(time_x==0){
        time_x=900;
      }

      break;
    case 7:
      //let playMode = 'restart';
      bgm2.volume(0.4);
      bgm2.loop();
      cursor();
      case7_On(0, 70, 1, 0.85);

      break;
    case 7.1:
      lv2_Convey = true;
      //let playMode = 'restart';
      bgm2.volume(0.4);
      bgm2.loop();
      //background(255);
      case7_1_On(0, 140, 1, 0.85);

      // if (lifeCount() == 0) {
      //   stage = 13;
      // }

      //       fill(255,0,0);
      // noStroke();
      //  rect(0,0,millis()/37.74,25)

      if (lifeCount() == 4) {
        for (let i = 0; i < 4; i++) {
          lifeStars[i].display();
        }
      } else if (lifeCount() == 3) {
        for (let i = 0; i < 3; i++) {
          lifeStars[i].display();
        }
      } else if (lifeCount() == 2) {
        for (let i = 0; i < 2; i++) {
          lifeStars[i].display();
        }
      } else if (lifeCount() == 1) {
        for (let i = 0; i < 1; i++) {
          lifeStars[i].display();
        }
      }
      noStroke();
      fill(248, 252, 154);
      rect(0,120, time_x, 10);
      if(frameCount%60==0){
        time_x -=60;
      }
      if(time_x==0){
        time_x=900;
      }
      break;
    case 8:
      //let playMode = 'restart';
      bgm2.volume(0.4);
      bgm2.loop();
      cursor();
      case8_On(0, 70, 1, 0.85);

      break;
    case 8.1:
      lv2_Convey = true;
      bgm2.volume(0.4);
      bgm2.loop();
      noCursor();
      case8_1_On(0, 140, 1, 0.85);

      // for (let i = 0; i < lv1_Stars.length; i++) {
      //   if (lifeCount() == 0 && lv1_Star[i].fail()) {
      //     console.log(lifeCount());
      //     stage = 9;
      //   }
      // }

      //       for (let i = 0; i < lv1_Stars.length; i++) {
      //         if (lifeCount() == 1 && lv1_Star[i].fail() == true) {
      //           stage = 9;
      //         }
      //       }
      //else if(lifeCount()==1&&

      //       fill(255,0,0);
      // noStroke();
      //  rect(0,0,millis()/37.74,25)

      if (lifeCount() == 4) {
        for (let i = 0; i < 4; i++) {
          lifeStars[i].display();
        }
      } else if (lifeCount() == 3) {
        for (let i = 0; i < 3; i++) {
          lifeStars[i].display();
        }
      } else if (lifeCount() == 2) {
        for (let i = 0; i < 2; i++) {
          lifeStars[i].display();
        }
      } else if (lifeCount() == 1) {
        for (let i = 0; i < 1; i++) {
          lifeStars[i].display();
        }
      }
      
      image(breadStarImgs[0], width-250, 18);
      textSize(50);
      textStyle(BOLD);
      fill(255);
      text("+ "+ breadCount, width-130, 80);
      fill(0);
      
      // noStroke();
      // fill(248, 252, 154);
      // rect(0,120, time_x, 10);
      // if(frameCount%60==0){
      //   time_x -=30;
      // }
      // if(time_x==0){
      //   time_x=900;
      // }
      fill(255);
      
      //background(0);

      break;
    case 9:
      bgm2.stop();
      bgm4.volume(0.4);
      bgm4.loop();
      cursor();
      case9_On(0, 70, 1, 0.85);

      break;
    case 10:
      bgm2.stop();
      bgm4.volume(0.4);
      bgm4.play();
      cursor();
      case10_On(0, 70, 1, 0.85);

      break;
    case 11:
      bgm2.stop();
      bgm4.volume(0.4);
      bgm4.play();
      cursor();
      case11_On(0, 70, 1, 0.85);

      break;
    case 12:
      bgm2.stop();
      bgm4.volume(0.4);
      bgm4.play();
      cursor();
      case12_On(0, 70, 1, 0.85);

      break;
    case 13:
      bgm2.stop();
      bgm4.volume(0.4);
      bgm4.play();
      cursor();
      case13_On(0, 70, 1, 0.85);

      break;
    case 14:
      bgm2.stop();
      bgm4.stop();
      bgm5.volume(0.4);
      bgm5.play();
      cursor();
      case14_On(0, 70, 1, 0.85);

      break;
    case 15:
      bgm2.stop();
      bgm5.volume(0.4);
      bgm5.play();
      cursor();
      case15_On(0, 70, 1, 0.85);

      break;
    default:
      background(0);
  }
}

function case0_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  cursor();
  image(scene[0], 0, 0, width, height);

  //클릭소리
  imageMode(CENTER);

  if (
    mouseX > width - (width * 3) / 5 &&
    mouseX < (width * 3) / 5 &&
    mouseY > height - (height * 2) / 7 - height / 20 &&
    mouseY < (height * 5) / 7 + height / 12 - height / 20
  ) {
    image(button[1], width / 2, (height * 53) / 70, width / 5, height / 12);
  } else {
    image(button[0], width / 2, (height * 53) / 70, width / 5, height / 12);
  }

  if (
    mouseX > width - (width * 3) / 5 &&
    mouseX < (width * 3) / 5 &&
    mouseY > height - (height * 12) / 70 - height / 15 &&
    mouseY < (height * 58) / 70 + height / 12 - height / 15
  ) {
    image(button[3], width / 2, (height * 61) / 70, width / 5, height / 12);
  } else {
    image(button[2], width / 2, (height * 61) / 70, width / 5, height / 12);
  }
  imageMode(CORNER);
  
  if (
    mouseX > (width * 85) / 100 &&
    mouseX < (width * 85) / 100 + width / 7 &&
    mouseY > (height * 93) / 100 - height / 19 &&
    mouseY < (height * 93) / 100
  ) {
    image(
      button[13],
      (width * 85) / 100,
      (height * 95) / 100,
      width / 7,
      height / 19
    );
  } else {
    image(
      button[12],
      (width * 85) / 100,
      (height * 95) / 100,
      width / 7,
      height / 19
    );
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case0_1_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(scene[9], 0, 0, width, height);

  if (
    mouseX > (width * 77.5) / 100 &&
    mouseX < (width * 77.5) / 100 + (width * 2) / 18 &&
    mouseY > (height * 82) / 100 - height / 15 &&
    mouseY < (height * 82) / 100 + height / 11 - height / 15
  ) {
    // se5.play();
    image(
      button[4],
      (width * 77.5) / 100,
      (height * 82) / 100,
      (width * 2) / 19,
      height / 11
    );
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case1_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(scene[1], 0, 0, width, height);

  if (
    mouseX > (width * 77.5) / 100 &&
    mouseX < (width * 77.5) / 100 + (width * 2) / 18 &&
    mouseY > (height * 82) / 100 - height / 15 &&
    mouseY < (height * 82) / 100 + height / 11 - height / 15
  ) {
    // se5.play();
    image(
      button[4],
      (width * 77.5) / 100,
      (height * 82) / 100,
      (width * 2) / 19,
      height / 11
    );
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case2_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(scene[2], 0, 0, width, height);

  if (
    mouseX > (width * 69) / 100 &&
    mouseX < (width * 69) / 100 + (width * 2) / 19 &&
    mouseY > (height * 79) / 100 - height / 15 &&
    mouseY < (height * 79) / 100 + height / 11 - height / 15
  ) {
    image(
      button[5],
      (width * 69) / 100,
      (height * 79) / 100,
      (width * 2) / 19,
      height / 11
    );
  }

  if (
    mouseX > (width * 80) / 100 &&
    mouseX < (width * 80) / 100 + (width * 2) / 19 &&
    mouseY > (height * 79) / 100 - height / 15 &&
    mouseY < (height * 79) / 100 + height / 11 - height / 15
  ) {
    image(
      button[6],
      (width * 80) / 100,
      (height * 79) / 100,
      (width * 2) / 19,
      height / 11
    );
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case3_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(scene[3], 0, 0, width, height);

  if (
    mouseX > (width * 69) / 100 &&
    mouseX < (width * 69) / 100 + (width * 2) / 19 &&
    mouseY > (height * 79) / 100 - height / 15 &&
    mouseY < (height * 79) / 100 + height / 11 - height / 15
  ) {
    image(
      button[5],
      (width * 69) / 100,
      (height * 79) / 100,
      (width * 2) / 19,
      height / 11
    );
  }

  if (
    mouseX > (width * 80) / 100 &&
    mouseX < (width * 80) / 100 + (width * 2) / 19 &&
    mouseY > (height * 79) / 100 - height / 15 &&
    mouseY < (height * 79) / 100 + height / 11 - height / 15
  ) {
    image(
      button[6],
      (width * 80) / 100,
      (height * 79) / 100,
      (width * 2) / 19,
      height / 11
    );
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case4_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(scene[4], 0, 0, width, height);

  if (
    mouseX > (width * 63) / 100 &&
    mouseX < (width * 63) / 100 + (width * 2) / 19 &&
    mouseY > (height * 79) / 100 - height / 15 &&
    mouseY < (height * 79) / 100 + height / 11 - height / 15
  ) {
    image(
      button[5],
      (width * 63) / 100,
      (height * 79) / 100,
      (width * 2) / 19,
      height / 11
    );
  }

  if (
    mouseX > (width * 74.5) / 100 &&
    mouseX < (width * 74) / 100 + (width * 3.2) / 19 &&
    mouseY > (height * 79) / 100 - height / 15 &&
    mouseY < (height * 79) / 100 + height / 11 - height / 15
  ) {
    image(
      button[7],
      (width * 74) / 100,
      (height * 79) / 100,
      (width * 3.2) / 19,
      height / 11
    );
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case5_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(scene[5], 0, 0, width, height);

  if (
    mouseX > (width * 74) / 100 &&
    mouseX < (width * 74) / 100 + (width * 3.2) / 19 &&
    mouseY > (height * 77) / 100 - height / 15 &&
    mouseY < (height * 77) / 100 + height / 11 - height / 15
  ) {
    image(
      button[7],
      (width * 74) / 100,
      (height * 77) / 100,
      (width * 3.2) / 19,
      height / 11
    );
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case5_1_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  lv1_GameOn(0, 0, 1, false);
  if (frameCount % 60 == 0 && countDown[tryGame * 4 + 0] > 0) {
    countDown[tryGame * 4 + 0]-=2;;
  } else if (countDown[tryGame * 4 + 0] <= 0) {
    stage = 6;
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case6_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(scene[6], 0, 0, width, height);

  if (
    mouseX > (width * 74) / 100 &&
    mouseX < (width * 74) / 100 + (width * 3.2) / 19 &&
    mouseY > (height * 77) / 100 - height / 15 &&
    mouseY < (height * 77) / 100 + height / 11 - height / 15
  ) {
    image(
      button[7],
      (width * 74) / 100,
      (height * 77) / 100,
      (width * 3.2) / 19,
      height / 11
    );
  }
  // if(keyIsPressed){
  //   bgm2.play();
  // }
  pop();
  scale(1 / scX, 1 / scY);
}

function case6_1_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  lv2_GameOn_A(width, height / 2, 0.5);
  lv1_GameOn(0, height / 2, 0.5, true);
  fill(0);
  rect(0, -100, width, 300);
  rect(0, 600, width, 900);
  if (frameCount % 60 == 0 && countDown[tryGame * 4 + 1] > 0) {
    countDown[tryGame * 4 + 1]-=2;;
  } else if (countDown[tryGame * 4 + 1] <= 0) {
    stage = 7;
  }

  // if(keyIsPressed){
  //   bgm2.play();
  // }
  pop();
  scale(1 / scX, 1 / scY);
}

function case7_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(scene[7], 0, 0, width, height);

  if (
    mouseX > (width * 74) / 100 &&
    mouseX < (width * 74) / 100 + (width * 3.2) / 19 &&
    mouseY > (height * 77) / 100 - height / 15 &&
    mouseY < (height * 77) / 100 + height / 11 - height / 15
  ) {
    image(
      button[7],
      (width * 74) / 100,
      (height * 77) / 100,
      (width * 3.2) / 19,
      height / 11
    );
  }

  // if(keyIsPressed){
  //   bgm2.play();
  // }
  pop();
  scale(1 / scX, 1 / scY);
}

function case7_1_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  noCursor();
  lv2_GameOn_B(width, 0, 0.5);
  lv1_GameOn(0, 0, 0.5, true);
  fill(0);
  rect(0, 400, width, 900);
  fill(255);
  lv3_GameOn(width / 2, height, 0.5, false);
  fill(0);
  rect(0, -150, width, 150);

  if (frameCount % 60 == 0 && countDown[tryGame * 4 + 2] > 0) {
    countDown[tryGame * 4 + 2]-=2;;
  } else if (countDown[tryGame * 4 + 2] <= 0) {
    stage = 8;
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case8_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(scene[8], 0, 0, width, height);

  if (
    mouseX > (width * 74) / 100 &&
    mouseX < (width * 74) / 100 + (width * 3.2) / 19 &&
    mouseY > (height * 77) / 100 - height / 15 &&
    mouseY < (height * 77) / 100 + height / 11 - height / 15
  ) {
    image(
      button[7],
      (width * 74) / 100,
      (height * 77) / 100,
      (width * 3.2) / 19,
      height / 11
    );
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case8_1_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  newMouseX = map(mouseX, width / 2, width, 0, width);
  newMouseY = map(mouseY, 0, height / 2, 0, height);
  lv2_GameOn_B(width, 0, 0.5);
  lv1_GameOn(0, 0, 0.5, true);
  lv4_GameOn(width, height, 0.5);
  lv3_GameOn(0, height, 0.5, true);
  fill(0);
  rect(0, -150, width, 150);

  // if (frameCount % 60 == 0 && countDown[tryGame * 4 + 3] > 0) {
  //   countDown[tryGame * 4 + 3]--;
  // } else if (countDown[tryGame * 4 + 3] <= 0) {
  //   stage = 0;
  //   tryGame += 1;
  // }
  
//   if(lifeCount()==0){
// stage = 9;
//   }
    
  pop();
  scale(1 / scX, 1 / scY);
}

function case9_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(ed[0], 0, 0, width, height);

  if (
    mouseX > (width * 86) / 100 &&
    mouseX < (width * 86) / 100 + (width * 2) / 19 &&
    mouseY > (height * 87) / 100 - height / 15 &&
    mouseY < (height * 87) / 100 + height / 11 - height / 15
  ) {
    image(
      button[9],
      (width * 86) / 100,
      (height * 87) / 100,
      (width * 2) / 19,
      height / 11
    );
  } else {
    image(
      button[8],
      (width * 86) / 100,
      (height * 87) / 100,
      (width * 2) / 19,
      height / 11
    );
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case10_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(ed[1], 0, 0, width, height);

  if (
    mouseX > (width * 86) / 100 &&
    mouseX < (width * 86) / 100 + (width * 2) / 19 &&
    mouseY > (height * 87) / 100 - height / 15 &&
    mouseY < (height * 87) / 100 + height / 11 - height / 15
  ) {
    image(
      button[9],
      (width * 86) / 100,
      (height * 87) / 100,
      (width * 2) / 19,
      height / 11
    );
  } else {
    image(
      button[8],
      (width * 86) / 100,
      (height * 87) / 100,
      (width * 2) / 19,
      height / 11
    );
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case11_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(ed[2], 0, 0, width, height);

  if (
    mouseX > (width * 86) / 100 &&
    mouseX < (width * 86) / 100 + (width * 2) / 19 &&
    mouseY > (height * 87) / 100 - height / 15 &&
    mouseY < (height * 87) / 100 + height / 11 - height / 15
  ) {
    image(
      button[9],
      (width * 86) / 100,
      (height * 87) / 100,
      (width * 2) / 19,
      height / 11
    );
  } else {
    image(
      button[8],
      (width * 86) / 100,
      (height * 87) / 100,
      (width * 2) / 19,
      height / 11
    );
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case12_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(ed[3], 0, 0, width, height);

  if (
    mouseX > (width * 86) / 100 &&
    mouseX < (width * 86) / 100 + (width * 2) / 19 &&
    mouseY > (height * 87) / 100 - height / 15 &&
    mouseY < (height * 87) / 100 + height / 11 - height / 15
  ) {
    image(
      button[9],
      (width * 86) / 100,
      (height * 87) / 100,
      (width * 2) / 19,
      height / 11
    );
  } else {
    image(
      button[8],
      (width * 86) / 100,
      (height * 87) / 100,
      (width * 2) / 19,
      height / 11
    );
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case13_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(ed[4], 0, 0, width, height);

  if (
    mouseX > (width * 81) / 100 &&
    mouseX < (width * 81) / 100 + (width * 3) / 19 &&
    mouseY > (height * 87) / 100 - height / 15 &&
    mouseY < (height * 87) / 100 + height / 11 - height / 15
  ) {
    image(
      button[11],
      (width * 81) / 100,
      (height * 87) / 100,
      (width * 3) / 19,
      height / 11
    );
  } else {
    image(
      button[10],
      (width * 81) / 100,
      (height * 87) / 100,
      (width * 3) / 19,
      height / 11
    );
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case14_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(ed[5], 0, 0, width, height);

  if (
    mouseX > (width * 86) / 100 &&
    mouseX < (width * 86) / 100 + (width * 2) / 19 &&
    mouseY > (height * 87) / 100 - height / 15 &&
    mouseY < (height * 87) / 100 + height / 11 - height / 15
  ) {
    image(
      button[9],
      (width * 86) / 100,
      (height * 87) / 100,
      (width * 2) / 19,
      height / 11
    );
  } else {
    image(
      button[8],
      (width * 86) / 100,
      (height * 87) / 100,
      (width * 2) / 19,
      height / 11
    );
  }
  pop();
  scale(1 / scX, 1 / scY);
}

function case15_On(x, y, scX, scY) {
  scale(scX, scY);
  push();
  translate(x, y);
  image(ed[6], 0, 0, width, height);

  if (
    mouseX > (width * 81) / 100 &&
    mouseX < (width * 81) / 100 + (width * 3) / 19 &&
    mouseY > (height * 87) / 100 - height / 15 &&
    mouseY < (height * 87) / 100 + height / 11 - height / 15
  ) {
    image(
      button[11],
      (width * 81) / 100,
      (height * 87) / 100,
      (width * 3) / 19,
      height / 11
    );
  } else {
    image(
      button[10],
      (width * 81) / 100,
      (height * 87) / 100,
      (width * 3) / 19,
      height / 11
    );
  }
  pop();
  scale(1 / scX, 1 / scY);
  textSize(30);
  fill(0);
  text(
    "총 " + breadCount + "명의 아이들에게 별가루 빵을 선물했네!",
    400,
    280,
    400,
    200
  );
}

function lifeCount() {
  let a = life - lv1_Failure - lv2_Failure - lv3_failure - lv4_failure;
  return a;
} //영험한 별 계산

/////////////////////////////////////////////////////////////

function lv1_GameOn(x, y, sc, convey) {
  scale(sc);
  push();
  translate(x, y);
  lv1_Game(convey);
  pop();
  scale(1 / sc);
} //게임1 위치, 크기 변화, 다음 게임에 별을 convey할 것인지 여부

function lv1_Game(convey) {
  image(BG[0], 0, 0, width, height);

  if ((frameCount * 2) % 111 == 0) {
    lv1_Star(); //별 떨어지는 빈도 조절
  }

  for (let i = 0; i < lv1_Stars.length; i++) {
    if (basket.intersect(lv1_Stars[i])) {
      lv1_Stars[i].caught(); // 별을 잡으면
      if (convey) ONEtoTWO.push(i); // 잡은 별의 개수 +1
    }
    lv1_Stars[i].move();
    lv1_Stars[i].display();
    if (lv1_Stars[i].fail()) {
      lv1_Failure += 1; // 별 잡는 것을 실패하면 실패횟수+1
            if (lifeCount()<=0){
        stage=9;
      }
      se2.play();
    }
  }

  basket.move();
  basket.display();
}

function lv1_Star() {
  let starKind = int(random(0, 3));
  // let lv3_color = starKind;
  let s1 = new LV1_Star(starKind);
  lv1_Stars.push(s1);

  lv2_Stars.push(new LV2_Star(starKind));
  //게임1에서 생성된 별 색과 같은 색을 게임2의 배열에 산입

  //lv3_baking.push(new LV3_Baking(breadImgs[lv3_color]));
  lv3_baking.push(new LV3_Baking(starKind));

  //starColors.splice(lv1_Stars.length-2, 1);
  //게임1에서 나온 색깔을 게임2에서 순서대로 따르느라, 놓친 별의 색깔까지 따르는 오류를 splice를 통해 해결하려고 했는데 아직 해결 못 함
}

/////////////////////////////////////////////////////////////

function lv2_GameOn_A(x, y, sc) {
  scale(sc);
  push();
  translate(x, y);
  lv2_Game_A();
  pop();
  scale(1 / sc);
} //게임2 위치, 크기 변화

function lv2_GameOn_B(x, y, sc) {
  scale(sc);
  push();
  translate(x, y);
  lv2_Game_B();
  pop();
  scale(1 / sc);
} //게임2 위치, 크기 변화

function lv2_Game_A() {
  newMouseX = map(mouseX, width / 2, width, 0, width);
  newMouseY = map(mouseY, height / 4, (height / 4) * 3, 0, height);
  noStroke();
  strokeWeight(1);
  fill(200);
  rect(0, 0, width, height); //배경
  image(BG[1], 0, 0, width, height);

  lv2_Star(); //별 생성
  lv2_Hammer(); //망치 생성

  // if (
  //   mouseX >= width / 2 &&
  //   mouseX < width &&
  //   mouseY >= height / 4 + hammer.h/2-10 &&
  //   mouseY < (height / 4) * 3 -5
  // ) {
  //   lv2_Hammer();
  // }
  //console.log("failure: " + lv2_Failure + ", star: " + TWOtoTHREE);
} //게임2

function lv2_Game_B() {
  newMouseX = map(mouseX, width / 2, width, 0, width);
  newMouseY = map(mouseY, 0, height / 2, 0, height);
  noStroke();
  strokeWeight(1);
  fill(200);
  rect(0, 0, width, height); //배경
  image(BG[1], 0, 0, width, height);

  lv2_Star(); //별 생성
  lv2_Hammer(); //망치 생성

  // if (
  //   mouseX >= width / 2 &&
  //   mouseX < width &&
  //   mouseY >= 0 &&
  //   mouseY < height / 2 -5
  // ) {
  //   lv2_Hammer();
  // }
  //console.log("failure: " + lv2_Failure + ", star: " + TWOtoTHREE);
} //게임2

function lv2_Star() {
  for (let i of ONEtoTWO) {
    if(lv2_Stars[i].show()==true){
    lv2_Stars[i].display();
  }
    lv2_Stars[i].expand();
    //별 잡았을 경우 별가루 이미지 생성
    if (lv2_Stars[i].b) {
      if(lv2_Stars[i].show()==true){
      lv2_Stars[i].broken();
      }
      lv2_Stars[i].brokenMove();
      if ((2 * frameCount) % 120 == 119) {
        lv2_Stars[i].b = false;
      }
    }
    //레벨1에서 별 받은 만큼만 레벨2에서 별 생성

    if (lv2_Stars[i].fail()) {
      lv2_Failure += 1;
            if (lifeCount()<=0){
        stage=10;
      }
      lv2_Stars[i].caught();
      se2.play();
      //lv2_Stars[i].c =color(0, 100);
    } //잡는 데 실패할 경우 변화
  }
} //별이 나타남

function lv2_Hammer() {
  push();
  translate(newMouseX, newMouseY);
  if (mouseIsPressed) {
    rotate(radians(-40));
  }
  hammer.display();
  pop();
} //망치

function mousePressed() {
  for (let i of ONEtoTWO) {
    if (
      dist(
        lv2_Stars[i].x,
        lv2_Stars[i].y,
        newMouseX - hammer.w / 2,
        newMouseY - hammer.h + 120
      ) <
      lv2_Stars[i].r1 / 2
    ) {
      lv2_Stars[i].b = true;
      lv2_Stars[i].caught();
      //별을 잡으면
      se4.play();
      if (lv2_Convey) {
        TWOtoTHREE += 1; //잡은 별 개수 +1
      }
    }
  } //별을 잡음
  
  if (
    stage == 0 &&
    mouseX > (width * 85) / 100 &&
    mouseX < (width * 85) / 100 + width / 7 &&
    mouseY > (height * 93) / 100 - height / 19 &&
    mouseY < (height * 93) / 100
  ) {
    stage += 0.1;
  } else if (
    stage == 0.1 &&
    mouseX > (width * 77.5) / 100 &&
    mouseX < (width * 77.5) / 100 + (width * 2) / 18 &&
    mouseY > (height * 82) / 100 - height / 15 &&
    mouseY < (height * 82) / 100 + height / 11 - height / 15
  ) {
    stage -= 0.1;
  }
  else if (
    stage == 0 &&
    mouseX > width - (width * 3) / 5 &&
    mouseX < (width * 3) / 5 &&
    mouseY > height - (height * 12) / 70 - height / 15 &&
    mouseY < (height * 58) / 70 + height / 12 - height / 15
  ) {
    se5.play();
    stage += 1;
  } else if (
    stage == 1 &&
    mouseX > (width * 77.5) / 100 &&
    mouseX < (width * 77.5) / 100 + (width * 2) / 18 &&
    mouseY > (height * 82) / 100 - height / 15 &&
    mouseY < (height * 82) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    stage -= 1;
  } else if (
    stage == 0 &&
    mouseX > width - (width * 3) / 5 &&
    mouseX < (width * 3) / 5 &&
    mouseY > height - (height * 2) / 7 - height / 20 &&
    mouseY < (height * 5) / 7 + height / 12 - height / 20
  ) {
    se5.play();
    stage += 2;
  } else if (
    stage == 2 &&
    mouseX > (width * 69) / 100 &&
    mouseX < (width * 69) / 100 + (width * 2) / 19 &&
    mouseY > (height * 79) / 100 - height / 15 &&
    mouseY < (height * 79) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    stage -= 2;
  } else if (
    stage == 2 &&
    mouseX > (width * 80) / 100 &&
    mouseX < (width * 80) / 100 + (width * 2) / 19 &&
    mouseY > (height * 79) / 100 - height / 15 &&
    mouseY < (height * 79) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    stage += 1;
  } else if (
    stage == 3 &&
    mouseX > (width * 69) / 100 &&
    mouseX < (width * 69) / 100 + (width * 2) / 19 &&
    mouseY > (height * 79) / 100 - height / 15 &&
    mouseY < (height * 79) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    stage -= 1;
  } else if (
    stage == 3 &&
    mouseX > (width * 80) / 100 &&
    mouseX < (width * 80) / 100 + (width * 2) / 19 &&
    mouseY > (height * 79) / 100 - height / 15 &&
    mouseY < (height * 79) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    stage += 1;
  } else if (
    stage == 4 &&
    mouseX > (width * 63) / 100 &&
    mouseX < (width * 63) / 100 + (width * 2) / 19 &&
    mouseY > (height * 79) / 100 - height / 15 &&
    mouseY < (height * 79) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    stage -= 1;
  } else if (
    stage == 4 &&
    mouseX > (width * 74.5) / 100 &&
    mouseX < (width * 74) / 100 + (width * 3.2) / 19 &&
    mouseY > (height * 79) / 100 - height / 15 &&
    mouseY < (height * 79) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    stage += 1;
  } else if (
    stage == 5 &&
    mouseX > (width * 74) / 100 &&
    mouseX < (width * 74) / 100 + (width * 3.2) / 19 &&
    mouseY > (height * 77) / 100 - height / 15 &&
    mouseY < (height * 77) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    stage += 0.1;
  } else if (
    stage == 6 &&
    mouseX > (width * 74) / 100 &&
    mouseX < (width * 74) / 100 + (width * 3.2) / 19 &&
    mouseY > (height * 77) / 100 - height / 15 &&
    mouseY < (height * 77) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    stage += 0.1;
  } else if (
    stage == 7 &&
    mouseX > (width * 74) / 100 &&
    mouseX < (width * 74) / 100 + (width * 3.2) / 19 &&
    mouseY > (height * 77) / 100 - height / 15 &&
    mouseY < (height * 77) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    stage += 0.1;
  } else if (
    stage == 8 &&
    mouseX > (width * 74) / 100 &&
    mouseX < (width * 74) / 100 + (width * 3.2) / 19 &&
    mouseY > (height * 77) / 100 - height / 15 &&
    mouseY < (height * 77) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    stage += 0.1;
  }
  //ending
  else if (
    stage == 9 &&
    mouseX > (width * 86) / 100 &&
    mouseX < (width * 86) / 100 + (width * 2) / 19 &&
    mouseY > (height * 87) / 100 - height / 15 &&
    mouseY < (height * 87) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    if(breadCount==0){
      stage += 4;
    }
    else {
      stage += 5;
    }
  } else if (
    stage == 10 &&
    mouseX > (width * 86) / 100 &&
    mouseX < (width * 86) / 100 + (width * 2) / 19 &&
    mouseY > (height * 87) / 100 - height / 15 &&
    mouseY < (height * 87) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    if(breadCount==0){
      stage += 3;
    }
    else {
      stage += 4;
    }
  } else if (
    stage == 11 &&
    mouseX > (width * 86) / 100 &&
    mouseX < (width * 86) / 100 + (width * 2) / 19 &&
    mouseY > (height * 87) / 100 - height / 15 &&
    mouseY < (height * 87) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    if(breadCount==0){
      stage += 2;
    }
    else {
      stage += 3;
    }
  } else if (
    stage == 12 &&
    mouseX > (width * 86) / 100 &&
    mouseX < (width * 86) / 100 + (width * 2) / 19 &&
    mouseY > (height * 87) / 100 - height / 15 &&
    mouseY < (height * 87) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    if(breadCount==0){
      stage += 1;
    }
    else {
      stage += 2;
    }
  } else if (
    stage == 13 &&
    mouseX > (width * 81) / 100 &&
    mouseX < (width * 81) / 100 + (width * 3) / 19 &&
    mouseY > (height * 87) / 100 - height / 15 &&
    mouseY < (height * 87) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    stage = 0;
  } else if (
    stage == 14 &&
    mouseX > (width * 81) / 100 &&
    mouseX < (width * 81) / 100 + (width * 3) / 19 &&
    mouseY > (height * 87) / 100 - height / 15 &&
    mouseY < (height * 87) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    stage += 1;
  } else if (
    stage == 15 &&
    mouseX > (width * 81) / 100 &&
    mouseX < (width * 81) / 100 + (width * 3) / 19 &&
    mouseY > (height * 87) / 100 - height / 15 &&
    mouseY < (height * 87) / 100 + height / 11 - height / 15
  ) {
    se5.play();
    stage = 0;
  } else {
  }
}

//////////////////////////////////////////////////////////////

function lv3_GameOn(x, y, sc, convey) {
  scale(sc);
  push();
  translate(x, y);
  lv3_Game(convey);
  pop();
  scale(1 / sc);
} //게임2 위치, 크기 변화

function lv3_Game(convey) {
  noStroke();
  rect(0, 5, width, height);
  lv3_therm.display();
  image(BG[2], 0, 0, width, height);
  //lv3_therm.display();

  //빵
  for (i = 0; i < TWOtoTHREE; i++) {
    if(lv3_baking[i].show()==true){
    lv3_baking[i].display();
    }
    lv3_baking[i].move();
    if (
      ((tLevel == 1 && lv3_baking[i].y == yLv1) ||
        (tLevel == 2 && lv3_baking[i].y == yLv2) ||
        (tLevel == 3 && lv3_baking[i].y == yLv3) ||
        (tLevel == 4 && lv3_baking[i].y == yLv4) ||
        (tLevel == 5 && lv3_baking[i].y == yLv5)) &&
      lv3_baking[i].x >= width / 5 - 5 - lv3_baking[i].r / 2 &&
      lv3_baking[i].x <= (width / 5) * 4 + 5 + lv3_baking[i].r / 2
    ) {
      lv3_baking[i].caught();
      se7.play();
      if (convey) {
        THREEtoFOUR++;
        lv4_moreBreads(lv3_baking[i].c);
      }
    }

    if (lv3_baking[i].fail()) {
      lv3_baking[i].caught();
      lv3_failure++;
      if (lifeCount()<=0){
        stage=11;
      }
      se2.play();
    }
    // console.log("lv3_성공: " + THREEtoFOUR + ", lv3_실패: " + lv3_failure);
  }
}

function keyPressed() {
  ///for level3
  if (key == "w" || keyCode == UP_ARROW) {
    lv3_therm.moveUp();
  }
  if (key == "s" || keyCode == DOWN_ARROW) {
    lv3_therm.moveDown();
  }
  //for level4
  if (keyCode == 32) {
    opacity1=0;
    opacity2=255;
    if (lv4_breads.slice(spaceCount + 1).length > 0) {
      fall = true;
      spaceCount++;
      lv4_breads[spaceCount].evaluate();
      for (let i = spaceCount + 1; i < lv4_breads.length; i++) {
        lv4_breads[i].x += 180;
      }
      // 빵 떨어뜨릴 때마다 평가진행
    }
  }
}

// function keyReleased() {
//   if (keyCode == 32) {
//     opacity1 = 255;
//     opacity2 = 0;
//   }
// }

////////////////////////////////////////////////////////
function lv4_GameOn(x, y, sc) {
  scale(sc);
  push();
  translate(x, y);
  lv4_game();
  pop();
  scale(1 / sc);
}

function lv4_game() {
  noStroke();
  fill(214, 189, 187);
  rect(0, 0, width, height);
  //대기열 빵들
  //컨베이어벨트
  stroke(255);
  for (let belt of lv4_belts) {
    if (lv4_belts[lv4_belts.length - 1].x4 > -10) {
      lv4_moreBelts();
    }
    if(belt.show() == true){
    belt.move();
    belt.display();
    fill(182, 195, 203);
    stroke(255);
  }}

  //별가루
  for (let star of lv4_stars) {
    if (lv4_stars[lv4_stars.length - 1].x > 200) {
      lv4_moreStars();
    }
    if(star.show()==true){
    star.evaluate();
    star.goTrash();
    star.display();}
    noStroke();
    rect(-300, height - 150, 300, 150);
  }
  
  image(trashcanImg, 450, 430, width/2, height/1.5);
  //대기열 빵들
  if (lv4_breads.length > 0) {
    for (let i = 0; i < lv4_breads.length; i++) {
      lv4_breads[i].display();
    }
  }
  tint(255, opacity1);
  image(tongsImgs[0], (2 * width) / 3 - 255, 0, width / 3, height / 2);
  tint(255, opacity2);
  image(tongsImgs[1], (2 * width) / 3 - 255, 0, width / 3, height / 2);

  if (fall) {
    lv4_breads[spaceCount].fall();
    lv4_breads[spaceCount].display();
    //   {if (lv4_breads.slice(spaceCount + 1).length > 0){
    //   for (let i=spaceCount; i<lv4_breads.length; i++){
    //   lv4_breads[i+1].x = lv4_breads[i].x
    // }}}
    if (lv4_breads[spaceCount].a) {
      lv4_breads[spaceCount].success();
      lv4_breads[spaceCount].successMove();
      if ((3 * frameCount) % 179 == 0) {
        lv4_breads[spaceCount].a = false;
      }
      // for (let i=spaceCount+2; i<lv4_breads;i++){
      //   lv4_breads[i].x=width/2;
      //   lv4_breads[i].display();
      // }
    }
  }

  //완성빵세기
  stroke(255);
}

// 컨베이어벨트 추가
function lv4_moreBelts() {
  let b = new Belt(lv4_belts[lv4_belts.length - 1].x1 - 150, height - 150);
  lv4_belts.push(b);
}

//별가루 추가
function lv4_moreStars() {
  let s = new Star(
    lv4_stars[lv4_stars.length - 1].x - 350,
    (4 * height) / 5,
    starKind
  );
  lv4_stars.push(s);
}

//빵 추가
function lv4_moreBreads(c) {
  if (lv4_breads.length == 0 || lv4_breads[lv4_breads.length - 1].x == -999) {
    let d = new Bread((2 * width) / 3, height / 5, c);
    lv4_breads.push(d);
  } else {
    let e = new Bread(
      lv4_breads[lv4_breads.length - 1].x - 180,
      (1 * height) / 5,
      c
    );
    lv4_breads.push(e);
  }
}

// function lv4_evaluate() {
//   if (
//     lv4_breads[lv4_breads.length - 2].c == lv4_stars[lv4_stars.length - 3].c
//   ) {
//     breadCount += 1;
//     lv4_opacity = 150;
//     fall=false;// 아예 새로운 이미지 업로드 되는 순간 opacity assign으로 수정
//   }
// else {
//   lv4_failure++;
//   se2.play();
//   console.log(" lv4_failure: "+lv4_failure);
//   fall=false;
// }

function gameOver() {
  background(190, 100, 210);
  textAlign(CENTER);
  textSize(30);
  fill(255);
  text("GAME OVER", width / 2, height / 2 - 10);
  textSize(25);
  text("Refresh the page to replay!", width / 2, height / 2 + 50);
}
