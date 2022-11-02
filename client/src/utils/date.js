function dateFormat(dateVal) {
    if (!dateVal){
        return "Uh oh, no date selected!"
    } else {
        let toInt = parseInt(dateVal)
        let newDate = new Date(toInt);
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC'}
    return newDate.toLocaleDateString('en-us', options)
    }
}

function parseTime(time) {
    console.log(time)
    if (!time){
        return "whenever you arrive!"
    } else {
        let hour = parseInt(time);
        let minutes = time.substring(3,5);

        //edge case
        if (time==='12:00') {
            return `${hour}:${minutes} PM`
        } else if (time==='00:00') {
            return "12:00 AM"
        } else if(time > '12:00') {
            return `${hour - 12}:${minutes} PM`
        }  else {
            return `${hour}:${minutes} AM`;
        }
    }    
}

module.exports = { dateFormat, parseTime }
