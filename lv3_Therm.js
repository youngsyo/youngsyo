let tLevel;

class LV3_Therm {
  constructor() {
    tLevel = 1; //1~5번 칸 중 어디에 있는가
  }

  display() {
    noStroke();
    fill(189, 0, 0);
    rect(300, 500, 250, 300);
    if (tLevel == 1) {
      rect(
        (width / 21) * 8,
        height / 12 + (height * 8) / 15,
        (width / 21) * 5,
        (height / 15) * 2
      );
    } else if (tLevel == 2) {
      rect(
        (width / 21) * 8,
        height / 12 + (height * 6) / 15,
        (width / 21) * 5,
        (height / 15) * 4
      );
    } else if (tLevel == 3) {
      rect(
        (width / 21) * 8,
        height / 12 + (height * 4) / 15,
        (width / 21) * 5,
        (height / 15) * 6
      );
    } else if (tLevel == 4) {
      rect(
        (width / 21) * 8,
        height / 12 + (height * 2) / 15,
        (width / 21) * 5,
        (height / 15) * 8
      );
    } else if (tLevel == 5) {
      rect((width / 21) * 8, height / 12, (width / 21) * 5, (height / 15) * 10);
    }
  }

  moveUp() {
    tLevel++;
    if (tLevel > 5) tLevel = 5;
  }
  moveDown() {
    tLevel--;
    if (tLevel < 1) tLevel = 1;
  }
}
