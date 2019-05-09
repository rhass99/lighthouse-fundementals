const prompt = require('prompt-sync')({"sigint": true})

const numToGuess = Math.floor(Math.random() * 10 + 1)

let answer = 0
let attempts = 0
let trials = []

while (answer !== numToGuess) {
    answer = parseInt(prompt("Guess a number between 1 and 10:> ", "no answer"))
    if (!isNaN(answer) && !trials.includes(answer) && answer !== numToGuess) {
        switch (answer > numToGuess) {
            case (true):
                attempts += 1
                trials.push(answer)
                console.log("Too High")
                break
            case (false):
                attempts += 1
                trials.push(answer)
                console.log("Too Low")
                break
        }
    } else if (isNaN(answer)){
        console.log("Not a number! Try again!")
    } else if (trials.includes(answer)) {
        console.log("Already Guessed!")
    }
}

attempts += 1
console.log("You got it! You took " + attempts.toString() + " attempts!")