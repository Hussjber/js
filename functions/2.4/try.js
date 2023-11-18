function getCurrentDate() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const currentDate = new Date();
    const currentDayName = days[currentDate.getDay()];
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = months[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();

    const formattedDate = `Today is ${currentDayName} the ${currentDayOfMonth} of ${currentMonth} ${currentYear}`;
    
    return formattedDate;
}

const formattedDate = getCurrentDate();
console.log(formattedDate);
