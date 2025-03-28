function solution(N, stages) {
    //N = 전체 스테이지 개수
    //stages = 사용자들이 멈춰있는 스테이지들이 담겨있는 배열
    //result = 실패율 = 해당 스테이지 실패자 수/해당 스테이지 도전자 수
    let result = [];
    let failPer = []; //실패율
    
    for(let i=1; i<=N; i++) {
        let failCnt = 0; //해당 스테이지를 클리어 하지 못한 사용자 수
        let tryPerson = 0; //해당 스테이지에 도전한 사용자 수
        stages.filter((stage) => {
            if(stage === i) failCnt++;
            if(stage >= i) tryPerson++;
        })
        //도전자 수 or 클리어 못한 사용자 수 => 0 존재시 NaN 값 계산될 부분을 0으로 처리
        // console.log(`${i}번 스테이지 도전자 수: ${tryPerson}, 실패자 수: ${failCnt}`)
        failPer.push([i, isNaN(failCnt/tryPerson) ? 0 : failCnt/tryPerson]); 
    }
    let sortedFailPer = [...failPer].sort((a,b) => b[1] -a[1]); 
    
    return sortedFailPer.map((n) => n[0]);
    
    //배열에 스테이지를 인덱스[0]에 같이 넣어줌으로써 인덱스[1]로 정렬 시 자연스럽게 같이 정렬 되버림. 
    // let dupCnt = [];
    // sortedFailPer.sort((a,b) => b-a);  
    // sortedFailPer.forEach((n, idx) => {
    //     if(failPer.indexOf(n) >= 0) {
    //         let dupNum = failPer.indexOf(n)+1;
    //         // console.log('실패율 중복x', dupNum, dupCnt)
    //         if(dupCnt.includes(dupNum)) {
    //             while(dupCnt.includes(dupNum)) { //스테이지의 실패율이 중복으로 나온 경우
    //                 // console.log('실패율중복', dupNum)
    //                 if(!dupCnt.includes(dupNum+1)) {
    //                     result.push(dupNum+1)
    //                     dupCnt.push(dupNum+1);
    //                     break;
    //                 }
    //                 dupNum++; //스테이지 실패율의 중복값이 중복스테이지 체크배열에 존재 시 +1
    //             }
    //         }
    //         else {
    //             result.push(dupNum);
    //             dupCnt.push(dupNum);
    //         }
    //     }
    // })
    // return result;
}



// //처음 작성한 코드(테스트 1,3,12,19,20,21 실패, 정확성 77.8/100.0)
// function solution(N, stages) {
//   //N = 전체 스테이지 개수
//   //stages = 사용자들이 멈춰있는 스테이지들이 담겨있는 배열
//   //result = 실패율 = 해당 스테이지 실패자 수/해당 스테이지 도전자 수
//   let result = [];
//   let failPer = []; //실패율
//   for(let i=1; i<=N; i++) {
//       let failCnt = 0; //해당 스테이지를 클리어 하지 못한 사용자 수
//       let tryPerson = 0; //해당 스테이지에 도전한 사용자 수
//       stages.filter((stage) => {
//           if(stage === i) failCnt++;
//           if(stage >= i) tryPerson++;
//       })
//       //도전자 수 or 클리어 못한 사용자 수 => 0 존재시 NaN 값 계산될 부분을 0으로 처리
//       // console.log(`${i}번 스테이지 도전자 수: ${tryPerson}, 실패자 수: ${failCnt}`)
//       console.log('페일 퍼 넣을값:', failCnt/tryPerson);
//       failPer.push(isNaN(failCnt/tryPerson) ? 0 : failCnt/tryPerson); 
//   }
//   let sortedFailPer = [...failPer].sort((a,b) => b-a); 
//   let dupCnt = [];
//   // return sortedFailPer.map((n) => n[0]);
//   sortedFailPer.sort((a,b) => b-a);   

//   sortedFailPer.forEach((n, idx) => {
//       if(failPer.indexOf(n) >= 0) {
//           let dupNum = failPer.indexOf(n)+1;
//           // console.log('실패율 중복x', dupNum, dupCnt)
//           if(dupCnt.includes(dupNum)) {
//               while(dupCnt.includes(dupNum)) { //스테이지의 실패율이 중복으로 나온 경우
//                   // console.log('실패율중복', dupNum)
//                   if(!dupCnt.includes(dupNum+1)) {
//                       result.push(dupNum+1)
//                       dupCnt.push(dupNum+1);
//                       break;
//                   }
//                   dupNum++; //스테이지 실패율의 중복값이 중복스테이지 체크배열에 존재 시 +1
//               }
//           }
//           else {
//               result.push(dupNum);
//               dupCnt.push(dupNum);
//           }
//       }
//   })
//   console.log('result:', result);
//   console.log('dupCnt:', dupCnt);
//   return result;
// }