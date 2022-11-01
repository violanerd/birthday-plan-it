function dateFormat(dateVal) {
    if (!dateVal){
        return "Uh oh, no date selected!"
    } else {
        let toInt = parseInt(dateVal)
    let newDate = new Date(toInt);
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    return newDate.toLocaleDateString('en-us', options)
    }
}

function parseTime(time) {
    if (!time){
        return "whenever you arrive!"
    } else {
        let hour = parseInt(time);
        let minutes = time.substring(3,5);

        if(time > '12:00') {
            return `${hour - 12}:${minutes} PM`;
        } else {
            return `${hour}:${minutes} AM`;
        }
    }    
}

// thanks https://stackoverflow.com/questions/17884586/javascript-parsing-times-without-date
module.exports = { dateFormat, parseTime }