const urlEncode = function(text) {
    // Put your solution here
    text = text.trim()
    let textArr = text.split("")
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i] === " ") {
            textArr[i] = "%20"
        }
    }
    return textArr.join("")
};
  
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));