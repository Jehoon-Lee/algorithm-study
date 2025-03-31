function solution(t, p) {
    let count = 0;
    for (let i=0; i<t.length-p.length+1; i++) {
        let parsedNum = t.slice(i, i+p.length);
        if(parsedNum <= p) count +=1;
    }
    return count;
}