let caseFunctions = new Map([
    [ "camel", function(input) {
        // Your code here
        let toCC = input.split("")
        for (let i = 1; i < toCC.length; i++) {
            if (toCC[i] === " ") {
                toCC[i+1] = toCC[i+1].toUpperCase()
            }
        }
        let answer = toCC.join("").split(" ").join("")
        return answer
    }],
    [ "pascal" , function(input) {
        // Your code here
        let toCC = input.split("")
        toCC[0] = toCC[0].toUpperCase()
        for (let i = 1; i < toCC.length; i++) {
            if (toCC[i] === " ") {
                toCC[i+1] = toCC[i+1].toUpperCase()
            }
        }
        let answer = toCC.join("").split(" ").join("")
        return answer
    }],
    [ "snake" , function(input) {
        // Your code here
        let toCC = input.split("")
        for (let i = 1; i < toCC.length; i++) {
            if (toCC[i] === " ") {
                toCC[i] = "_"
            }
        }
        let answer = toCC.join("").split(" ").join("")
        return answer
    }],
    [ "kebab" , function(input) {
        // Your code here
        let toCC = input.split("")
        for (let i = 1; i < toCC.length; i++) {
            if (toCC[i] === " ") {
                toCC[i] = "-"
            }
        }
        let answer = toCC.join("").split(" ").join("")
        return answer
    }],
    [ "title" , function(input) {
        // Your code here
        let toCC = input.split("")
        toCC[0] = toCC[0].toUpperCase()
        for (let i = 1; i < toCC.length; i++) {
            if (toCC[i] === " ") {
                toCC[i+1] = toCC[i+1].toUpperCase()
            }
        }
        let answer = toCC.join("").split(" ").join(" ")
        return answer
    }],
    [ "vowel" , function(input) {
        // Your code here
        let toCC = input.split("")
        for (let i = 0; i < toCC.length; i++) {
            if (['a', 'e', 'i', 'o', 'u'].includes(toCC[i].toLowerCase())) {
                toCC[i] = toCC[i].toUpperCase()
            }
        }
        let answer = toCC.join("").split(" ").join(" ")
        return answer
    }],
    [ "consonant" , function(input) {
        // Your code here
        let toCC = input.split("")
        for (let i = 0; i < toCC.length; i++) {
            if (!['a', 'e', 'i', 'o', 'u'].includes(toCC[i].toLowerCase())) {
                toCC[i] = toCC[i].toUpperCase()
            }
        }
        let answer = toCC.join("").split(" ").join(" ")
        return answer
    }],
    [ "upper" , function(input) {
        return input.toUpperCase()
    }],
    [ "lower" , function(input) {
        return input.toLowerCase()
    }]
])


const makeCase = function(input, style) {
    // Put your solution here
    if (!Array.isArray(style)) {
        style = [style]
    }
    caseFunctions.forEach((value, key) => {
        if (style.includes(key)) {
            input = value(input)
        }
    })
    return input
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));