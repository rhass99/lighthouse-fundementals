const characters = ['=', '%20', '&']

const parser = function(text) {
    let step1 = text.replace(/\%20/gm, " ");
    return step1.split('&')
}

const urlDecode = function(text) {
    // Put your solution here
    let answer = {}
    let arr = parser(text)
    for (let i = 0; i < arr.length; i++) {
        let result = arr[i].split("=")
        answer[result[0]] = result[1]
    }
    return answer
};
  
console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);