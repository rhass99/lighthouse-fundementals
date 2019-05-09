const months = {
    01: "January",
    02: "February",
    03: "March",
    04: "April",
    05: "May",
    06: "June",
    07: "July",
    08: "August",
    09: "Septembe",
    10: "October",
    11: "November",
    12: "December"
}

let returnDate = function(day, month, year) {
    switch (day) {
        case "01": 
            return months[month] + " " + 1 +  "st, " + year
        case "02":
            return months[month] + " " + 2 +  "nd, " + year
        case "03":
            return months[month] + " " + 3 +  "rd, " + year
        default:
            if (day[0] === 0) {
                return months[month] +  " " + day[1] + "th, " + year
            } else {
                return months[month] +  " " + day + "th, " + year
            }
    }
}

let talkingCalendar = function(date) {
    // Your code here
    let dateArr = date.split("/")
    return returnDate(dateArr[2], parseInt(dateArr[1]), dateArr[0])
  };
  
  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));