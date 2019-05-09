

const blocksAway = function(directions) {
    // Put your solution here
    let sumEast = 0
    let sumNorth = 0
    let currentDirection = ""

    if (directions[0] === "right") {
        sumEast += directions[1]
        currentDirection = "east"
    } else {
        sumNorth += directions[1]
        currentDirection = "north"
    }
    for (let i = 2; i < directions.length; i+=2) {
        if (currentDirection === "north") {
            switch (directions[i]) {
                case ("left"):
                    sumEast -= directions[i+1]
                    currentDirection = "east"
                    break
                case("right"):
                    sumEast += directions[i+1]
                    currentDirection = "east"
                    break
            }
        } else {
            switch (directions[i]) {
                case ("left"):
                    sumNorth += directions[i+1]
                    currentDirection = "north"
                    break
                case ("right"):
                    sumNorth -= directions[i+1]
                    currentDirection = "north"
                    break
            }
        }
    }
    return {
        "east" : sumEast,
        "north" : sumNorth
    }
};
  
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));