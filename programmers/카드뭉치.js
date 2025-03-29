function solution(cards1, cards2, goal) {
    let result = "Yes";
    goal.forEach((word) => {
        if (word === cards1[0]) cards1.shift();
        else if (word === cards2[0]) cards2.shift();
        else result = "No";
    })
    // for (const word of goal) { //forEach와 for of차이점 알 것
    //     if (word === cards1[0]) cards1.shift();
    //     else if (word === cards2[0]) cards2.shift();
    //     else result = "No";
    // }
    return result;
}