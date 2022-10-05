function solution(N, stages) {
  let result = [];
  let failPer = []; //실패율
  for(let i=1; i<=N; i++) {
      let failCnt = 0; //해당 스테이지를 클리어 하지 못한 사용자 수
      let tryPerson = 0; //해당 스테이지에 도전한 사용자 수
      stages.filter((stage) => {
          if(stage === i) failCnt++;
          if(stage >= i) tryPerson++;
      })
      failPer.push(failCnt/tryPerson);
  }
  let tmp = [...failPer]; 
  console.log(failPer)
  console.log(tmp);
  let dupCnt = [];

  tmp.sort((a,b) => b-a);    
  tmp.forEach((n, idx) => {
      if(failPer.indexOf(n) >= 0) {
          let dupNum = failPer.indexOf(n)+1;
          console.log('실패율 중복x', dupNum, dupCnt)
          if(dupCnt.includes(dupNum)) {
              while(dupCnt.includes(dupNum)) { //실패율이 중복으로 나온 경우
                  console.log('실패율중복', dupNum)
                  if(!dupCnt.includes(dupNum+1)) {
                      result.push(dupNum+1)
                      dupCnt.push(dupNum+1);
                      break;
                  }
                  dupNum++;
              }
          }
          else {
              result.push(dupNum);
              dupCnt.push(dupNum);
          }
      }
  })
  return result;
}
