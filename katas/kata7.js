let camelCase = function(input) {
    // Your code here
    let toCC = input.split("")
    for (let i = 1; i < toCC.length; i++) {
        if (toCC[i] === " ") {
            toCC[i+1] = toCC[i+1].toUpperCase()
        }
    }
    let answer = toCC.join("").split(" ").join("")
    return answer
};
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));