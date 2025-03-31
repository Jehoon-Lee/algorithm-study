function solution(k, score) {
    let HOF = []; //명예의전당
    let result = []; //발표점수

    for (let i = 0; i<score.length; i++) {
        if (k > i) HOF.push(score[i]);
        else {
            HOF.sort((a,b) => a-b); //오름차순 정렬
            if(HOF[0] < score[i]) {
                HOF.shift(); // 가장 낮은 점수 제거
                HOF.push(score[i]); //명예의전당 추가
            }            
        }
        HOF.sort((a,b) => a-b); //오름차순 정렬
        result.push(HOF[0]); //가장 낮은 점수 발표
    }
    return result;
}