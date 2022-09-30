function solution(n, arr1, arr2) {
  let result1 = print(n, arr1);
  let result2 = print(n, arr2);
  // console.log(result1, result2)
  return sum(result1, result2);
}
  function print(n, arr) {
      let result = [];
      let tmp = "";
      
      for(let i=0; i<n; i++) { //각 배열 원소 조회, n번 반복 (0,1,2,3,4)
          let num = arr[i];
          for(let j = n-1; j >= 0; j--) { //각 배열의 원소의 지도 변환 n번 반복 출력 (4,3,2,1,0) 
              if(Math.pow(2, j) > num) { //각 자리 위치에 존재하는 2의 제곱수가 num보다 크면 ' ' 처리
                  tmp += ' ';
              }
              else if(Math.pow(2, j) <= num) {//각 자리 위치에 존재하는 2의 제곱수가 num보다 작거나 같으면 '#' 처리
                  tmp += '#';
                  num = num-Math.pow(2,j); //# 처리한 2의 제곱수의 값만큼 num값에서 제하고 계산
              }
              if(j === 0) { //배열의 한 원소 출력이 끝나면 결과값 result에 push + 출력값 변수 초기화
                  result.push(tmp);
                  tmp = "";
              }
          }                
      }
      return result;
  }
  function sum(arr1, arr2) {
      let sumResult = [];
      arr1.forEach((val, idx) => {
          let tmp = "";
          for(let i=0; i<val.length; i++) {
              if(val[i] === '#' || arr2[idx][i] === '#') tmp += '#'; //arr1, arr2 의 각 배열 원소의 #위치 비교 시 1개라도 존재하면 #처리 
              else tmp += ' ';
              if(i === val.length-1) {
                  sumResult.push(tmp);
                  tmp = "";
              }
          }
      })
      return sumResult;
  } 