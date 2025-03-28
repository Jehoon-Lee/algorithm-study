function solution(X, Y) {
  let partner = "";
  let x = X.split('').sort().reverse().join('');
  let y = Y.split('').sort().reverse().join('');
  
  for(let i=0; i<x.length; i++) {
      if(y.includes(x[i])) {
          partner += x[i];
          y = y.replace(x[i], '');
      }
  }
  if(!partner) return "-1"
  else if(!Number(partner)) return "0";
  else return partner+"";
}

//     let numArr = [X, Y];
//     let partner = [];
  
//     for(let i=0; i<numArr[0].length; i++) {
//         let num = numArr[0][i];
//         if(numArr[1].includes(num)) {
//             partner.push(num)
//             numArr[1] = numArr[1].replace(num, '');
//         }
//     }
//     if(!partner.length) return "-1";
//     partner = partner.sort((a,b) => b-a).join('');
//     return Number(partner) === 0 ? "0" : partner+"";
  
  
//     let arrX = X.split('');
//     let partner = [];
//     arrX.forEach((n) => {
//         if(Y.includes(n)) {
//             Y = Y.replace(n, '');
//             partner.push(n)
//         }
//     })
//     if(!partner.length) return "-1";
//     partner = partner.sort((a,b) => b-a).join('');
//     return Number(partner) === 0 ? "0" : partner+"";