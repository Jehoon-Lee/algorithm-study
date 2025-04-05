function solution(s) {
  const lastIndex = {};  // 각 문자 마지막 등장 위치 저장 (키포인트)
  const result = [];
  for (let i=0; i<s.length; i++) {
      const char = s[i]; //문자열 저장
      if(lastIndex[char] === undefined) { //저장된 문자열 위치 없으면, -1 push
          result.push(-1)
      } else { //해당 문자의 저장된 위치가 있으면, (현재 인덱스 - 기존 위치) push
          result.push(i-lastIndex[char]);
      }
      lastIndex[char] = i; //각 문자 별 마지막 등장 위치 저장 
  }
  return result;
}