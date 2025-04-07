function solution(wallpaper) {
  let top = null;
  let bottom = null;
  let left = null;
  let right = null;

  for (let i = 0; i < wallpaper.length; i++) {
    const idx = wallpaper[i].indexOf('#');
    const lastIdx = wallpaper[i].lastIndexOf('#');
    if (idx >= 0) {
      //맨 위 x좌표 (처음 발견되는 파일 위치의 x좌표)
      if (top === null) top = i;
      //맨 왼쪽 x 좌표 (인덱스 기준 가장 먼저 나온 파일 위치)
      if (left === null || idx < left) left = idx;
      //맨 아래쪽 y좌표 (마지막 발견되는 파일 위치의 x좌표)
      if (bottom === null || bottom < i) bottom = i;
      //맨 오른쪽 y좌표 (가장 뒤에 나온 파일 위치)
      if (right === null || lastIdx > right) right = lastIdx;
    }
  }
  return [top, left, bottom + 1, right + 1];
}
