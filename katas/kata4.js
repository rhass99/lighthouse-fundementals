const instructorWithLongestName = function(instructors) {
    // Put your solution here
    let answer = []
    let max = instructors[0].name.length
    let maxIndex = 0
    for (let i = 0; i < instructors.length; i++) {
        answer.push(instructors[i].name.length)
    }
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] > max) {
            max = answer[i]
            maxIndex = i
        }
    }
    return instructors[maxIndex]
};
  

console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
{name: "Matthew", course: "Web"},
{name: "David", course: "iOS"},
{name: "Domascus", course: "Web"}
]));