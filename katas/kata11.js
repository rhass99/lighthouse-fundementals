const organizeInstructors = function(instructors) {
    // Put your solution here
    let answer = {}
    for (let i = 0; i < instructors.length; i++) {
        if (answer[instructors[i].course] !== undefined) {
            answer[instructors[i].course].push(instructors[i].name)
        } else {
            answer[instructors[i].course] = [instructors[i].name]
        }
    }
    return answer
  };
  
console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
]));