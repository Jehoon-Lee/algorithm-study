function solution(s) {
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === '(' ? (cnt += 1) : (cnt -= 1);
    //도중에 '(' 개수보다 ')' 개수가 많아지면 break
    if (cnt < 0) break;
  }
  //끝났을 때 '(', ')' 개수 일치 체크
  return cnt === 0 ? true : false;
}
