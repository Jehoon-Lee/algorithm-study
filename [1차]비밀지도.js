function solution(n, arr1, arr2) {

    
    
    
  function print(n, arr1) {
      let result1 = [];
      let tmp1 = "";
      
      for(let i=0; i<n; i++) { //각 배열 원소 조회, n번 반복 (0,1,2,3,4)
          let num = arr1[i];
          for(let j = n-1; j >= 0; j--) { //각 배열의 원소의 지도 변환 n번 반복 출력 (4,3,2,1,0) 
              if(Math.pow(2, j) > num) {
                  // console.log('num과 j값 일때 빈 값 넣기', num, j)
                  tmp1 += ' ';
              }
              else if(Math.pow(2, j) <= num) {
                  tmp1 += '#';
                  num = num-Math.pow(2,j);
              }
              if(j===0) { //배열의 한 원소 출력이 끝나면 결과값 result에 push + 출력값 변수 초기화
                  result1.push(tmp1);
                  tmp1 = "";
              }
          }                
      }
      return result1;
  }
  let result1 = print(n, arr1);
  let result2 = print(n, arr2);
  
  console.log(result1, result2)
  
}