function solution(numbers) {
  let sumNotExists = 0;
  for(let i=0; i<=9; i++) {
      if(numbers.indexOf(i) < 0) sumNotExists += i;
  }
  return sumNotExists;
}