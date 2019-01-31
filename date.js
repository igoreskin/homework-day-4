// • Create a module that returns a date and time object using export
// function method.
// • Create another file which has your create server code.
// • Include the module in your server file and display the current date
// and time in the following format
// "The date and time are currently: "

const dateAndTime = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    let minutes = date.getMinutes();
    minutes = (minutes < 10 ? "0" : "") + minutes;

    let hours = date.getHours();
    if(hours >= 12) {
        hours = `${hours - 12}:${minutes} PM`
    } else if(hours == 0) {
        hours = `12:${minutes} AM`
    } else {
        hours = `${hours}:${minutes} AM`
    }

    const year = date.getFullYear();

    return `The date and time are currently: ${month}/${day}/${year}, ${hours}`
}

module.exports = dateAndTime;
