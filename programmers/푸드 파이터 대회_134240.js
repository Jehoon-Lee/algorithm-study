function solution(food) {
  let result = '';
  for (let i = 1; i < food.length; i++) {
    let num = Math.floor(food[i] / 2);
    result += String(i).repeat(num);
  }

  return result + '0' + [...result].sort((a, b) => b - a).join('');
}
