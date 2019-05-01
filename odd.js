const isOdd = (num) => {
    if (num % 2 !== 0) {
        return true
    }
    return false
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));