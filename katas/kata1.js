let sumLargestNumbers = function(data) {
    // Put your solution here
    let sumArr = []
    if (data.length === 2) {
        return data[0] + data[1]
    } else {
        sumArr = data.slice(0,2)
        let x = 0
        for (let i = 2; i < data.length; i++) {
            while(x < 2) {
                if (sumArr[x] < data[i]) {
                    sumArr[x] = data[i]
                    break;
                }
                x++
            }
        }
    }
    return sumArr[0] + sumArr[1]
  };
  
  console.log(sumLargestNumbers([1, 10]));
  console.log(sumLargestNumbers([1, 2, 3]));
  console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));