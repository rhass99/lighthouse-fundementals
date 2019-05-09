let numberOfVowels = function(data) {
    // Put your solution here
    const vowels = ["a", "e", "i", "o", "u"]
    const dataArr = data.split("")
    let sum = 0
    for (let i = 0; i < dataArr.length; i++) {
        let x = 0
        while (x < vowels.length) {
            if (dataArr[i] === vowels[x]){
                sum += 1
                break
            }
            x++
        }
    }
    return sum
  };
  
  console.log(numberOfVowels("orangeeeeeeeenee"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));