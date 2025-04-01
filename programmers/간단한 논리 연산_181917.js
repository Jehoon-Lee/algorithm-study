// 수정된 코드
function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}

/* function solution(x1, x2, x3, x4) {
  const X = calc(x1, x2, 'OR');
  const Y = calc(x3, x4, 'OR');
  return calc(X, Y, 'AND');
}

function calc(a, b, type) {
  let X = null;
  // x V y (OR연산 계산)
  if (type === 'OR') {
    if (a === true) {
      if (b === true || b === false) X = true;
    } else if (a === false) {
      if (b === true) X = true;
      else if (b === false) X = false;
    }
  } //x ∧ y (AND연산 계산)
  else if (type === 'AND') {
    if (a === true) {
      if (b === true) X = true;
      else if (b === false) X = false;
    } else if (a === false) {
      if (b === true || b === false) X = false;
    }
  }
  return X;
}
*/
