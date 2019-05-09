let bills = {
    2000 : "twenty",
    1000 : "ten",
    500 : "fiveDollar",
    200 : "twoDollar",
    100 : "dollar",
    25 : "quarter",
    10 : "dime",
    5 : "nickel",
    1 : "penny"
}

let factorize = function (number) {
    let myBills = [2000, 1000, 500, 200, 100, 25, 10, 5, 1]
    let remainder = number
    let factors = []
    for (let i = 0 ; i < myBills.length; i++) {
        while (remainder - myBills[i] >= 0) {
            factors.push(myBills[i])
            remainder = remainder - myBills[i]
        }
    }
    return factors
}

let calculateChange = function(total, cash) {
    // Your code here
    let remainder = factorize(cash - total)
    let answer = {}

    for (let i = 0; i < remainder.length; i++) {
        if (answer[bills[remainder[i]]] !== undefined) {
            answer[bills[remainder[i]]] += 1
        } else {
            answer[bills[remainder[i]]] = 1
        }
    }

    return answer
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));