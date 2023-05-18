function gamBamBo(me:string, you:string):number|Error {
  // 가위바위보는 메서드가 없습니다.
  // 추상적인 아주 사람적인 개념은 사람만 알고있는 개념입니다.
  // ----------------------------------------------------
  // 가위바위보 개념?
  // 가위(gam), 바위(bam), 보(bo)가 있음
  // 승리 공식이 있습니다.
  // 가위는 바위에게는 지고, 보자기는 이길 수 있음
  // 바위는 보자기에게는 지고, 가위에게는 이길 수 있음
  // 보는 가위에게는 지고, 바위에게는 이길 수 있음
  // 불리언의 형태로 리턴을 할 것인데
  // 0은 진 것, 1은 이긴 것, 2는 비긴 것
  let rules:string[] = ['gam','bam','bo'];
  if (!rules.includes(me) || !rules.includes(you)) {
    return new Error('가위, 바위, 보만 내세요!')
  }

  let result: number = 0;
  // [0] = 가위, [1] = 바위, [2] = 보
  switch (me) {
    case (rules[0]) :
      if (you === rules[0]) {
        result = 2;
      } else if (you === rules[1]) {
        result = 0;
      } else if (you === rules[2]) {
        result = 1;
      }
      break;
    case (rules[1]) :
      if (you === rules[0]) {
        result = 1;
      } else if (you === rules[1]) {
        result = 2;
      } else if (you === rules[2]) {
        result = 0;
      }
      break;
    case (rules[2]) :
      if (you === rules[0]) {
        result = 0;
      } else if (you === rules[1]) {
        result = 1;
      } else if (you === rules[2]) {
        result = 2;
      }
      break;
  }
  return result;
}

console.log(gamBamBo('bo','bam'));