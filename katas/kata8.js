const multiplicationTable = function(maxValue) {
    // Your code here
    let table = []
    for (let i = 0; i < maxValue ; i++) {
        table[i] = []
    }

    for (let i = 0; i < maxValue; i++) {
        for (let x = 0; x < maxValue; x++) {
            table[i][x] = (i+1) * (x+1)
        }
    }
    return table
  };
  
  console.log(multiplicationTable(1));
  console.log(multiplicationTable(5));
  console.log(multiplicationTable(10));