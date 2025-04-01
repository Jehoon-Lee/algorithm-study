function solution(name, yearning, photo) {
  let result = [];
  for (let i = 0; i < photo.length; i++) {
    let total = 0;
    for (let j = 0; j < name.length; j++) {
      if (photo[i].includes(name[j]) > 0) total += yearning[j];
      if (j === name.length - 1) result.push(total);
    }
  }
  return result;
}
