const squareCode = function(message) {
    // Put your solution here
    message = message.replace(/ /gm, "")
    let messgArr = Array.from(message)
    let col = Math.ceil(Math.sqrt(messgArr.length))
    let stage1 = []
    let roll = messgArr.length
    for (let i = 0; i < roll; i += col) {
        stage1.push(messgArr.slice(i,i + col))
    }
    let result = []
    let i = 0
    while (i < stage1[0].length) {
        let interm = []
        for (let x = 0; x < stage1.length; x++) {
            interm.push(stage1[x][i])
        }
        result.push(interm.join(""))
        i++
    }
    return result
};
  
console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));