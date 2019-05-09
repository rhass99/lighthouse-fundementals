const conditionalSum = function(values, condition) {
    // Your code here
    let sum = 0
    for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0 && condition === 'even') {
            sum += values[i]
        } else if (values[i] % 2 !== 0 && condition === 'odd') {
            sum += values[i]
        }
    }
    return sum;
}



//     for (let i = 0; i < values.length; i++) {
//         switch (condition) {
//             case "even":
//                 if (values[i] % 2 === 0) {
//                     sum += values[i]
//                 }
//                 break
//             case "odd":
//                 if (values[i] % 2 !== 0) {
//                     sum += values[i]
//                 }
//                 break
//             default:
//             return 0
//         }
//     }
//     return sum
//   };
  
  console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
  console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
  console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
  console.log(conditionalSum([], "odd"));