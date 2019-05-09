const queenThreat = function(board) {
    let threat = false
    let queens = []
    for (let i = 0; i < 8; i++) {
        for (let x = 0; x < 8; x++) {
            if (board[i][x] === 1) {
                queens.push([i, x])
            }
        }
    }
    let first = []
    let last = []
    if (queens[0][0] < queens[1][0]) {
        first = queens[0]
        last = queens[1]
    } else {
        first = queens[1]
        last = queens[0]
    }

    for (let i = first[0]+1; i < 8; i++) {
        let xAfter = first[1] + i - first[0]
        let xBefore = first[1] -i + first[0]
        let valueXafter = board[i][xAfter]
        let valueXbefore = board[i][xBefore]
        if ( valueXafter === 1 || valueXbefore === 1){
            threat = true
        }
    }

    return threat
}

const generateBoard = function(whiteQ, blackQ) {
    let board = new Array(8)
    for (let i = 0; i < 8; i++) {
        board[i] = new Array(8)
    }
    for (let i = 0; i < 8; i++) {
        for (let x = 0; x < 8; x++){
            if (i === whiteQ[0] && x === whiteQ[1]) {
                board[i][x] = 1
            } else if (i === blackQ[0] && x === blackQ[1]) {
                board[i][x] = 1
            } else {
                board[i][x] = 0
            }
        }
    }
    return board
}



let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

whiteQueen = [0, 0];
blackQueen = [7, 5];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard)
console.log(queenThreat(generatedBoard));