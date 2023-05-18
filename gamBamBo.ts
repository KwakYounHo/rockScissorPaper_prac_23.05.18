let rules:string[] = ['gam','bam','bo'];

/**
 * rules라는 규칙(배열형태)를 입력하면 배열의 임의의 요소를 반환
 * @param {문자열[]} rules
 * @returns {문자열}
 */
export function virtualMe(rules:string[]):string {
  const randomIndex = Math.floor(Math.random() * rules.length);
  return rules[randomIndex];
}

/**
 * 첫 번째 매개변수에 내가 낼 규칙, 두 번째 매개변수에 다른 사람이 낼 규칙을 넣고 돌리면 결과가 나온다.
 * @param {문자열} me 
 * @param {문자열} you
 * @returns {숫자|에러}
 */
export function gamBamBo(me:string, you:string):number|Error {
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
  if (!rules.includes(me) || !rules.includes(you)) {
    return new Error('가위, 바위, 보만 내세요!')
  }

  let result:number = 0;
  // [0] = 가위, [1] = 바위, [2] = 보
  switch (me) {
    case (rules[0]) :
      switch (you) {
        case (rules[0]) :
          result = 2;
          break;
        case (rules[1]) :
          result = 0;
          break;
        case (rules[2]) :
          result = 1;
          break;
      }
    case (rules[1]) :
      switch (you) {
        case (rules[0]) :
          result = 1;
          break;
        case (rules[1]) :
          result = 2;
          break;
        case (rules[2]) :
          result = 0;
          break;
      }
    case (rules[2]) :
      switch (you) {
        case (rules[0]) :
          result = 0;
          break;
        case (rules[1]) :
          result = 1;
          break;
        case (rules[2]) :
          result = 2;
          break;
      }
  }
  return result;
}

/**
 * @param {배열} rules
 * @param {함수} movementFunction 
 * @param {넘버} loop 
 * @param {함수} subFunction 
 * @returns {객체}
 * @메인함수
 * 로직
 * @loop
 * 반복횟수
 * @서브함수
 * 도우미 함수(기본값 ()=>{})
 */
export function winRate(rules:string[], movementFunction:Function, loop:number, subFunction:Function=()=>{}):object {
  interface resultType {
    [key:string]:number
  }
  let result:resultType = {
    winRate  : 0,
    loseRate : 0,
    draw     : 0
  };
  for (let i=0; i<loop; i++) {
    const functionResult = movementFunction(subFunction(rules),subFunction(rules));
    switch (functionResult) {
      case 0:
        result.loseRate++;
        break;
      case 1:
        result.winRate++;
        break;
      case 2:
        result.draw++;
        break;
    }
  }
  return result;
}

export function refactor(loop:number):object {
  const result:object = winRate(rules,gamBamBo,loop,virtualMe);
  return result;
}