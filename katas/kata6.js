let repeatNumbers = function(data) {
    // Put your solution here
    let answer = []
    for (let i = 0; i < data.length; i++) {
        let num = data[i][0].toString()
        answer.push(num.repeat(data[i][1]))
    }
    return answer
};
  
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));