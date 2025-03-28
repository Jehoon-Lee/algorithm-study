//내 답안
function solution(left, right) {
  let result = 0;
  for(let i=left; i<=right; i++) {
      let measure = []; //약수
      for(let j=i; j>=1; j--) {
          if (i % j === 0) measure.push(j);
      }
      measure.length % 2 === 0 ? result += i : result -= i;
  }
  return result;
}

//다른 답안
function solution(left, right) {
  let result = 0;
  for(let i=left; i<=right; i++) {
      Number.isInteger(Math.sqrt(i)) ? result -= i : result += i;
  }
  return result;
}

