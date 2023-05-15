function showDate() {

    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();

    let day = document.getElementById("day").value
    let month = document.getElementById("month").value
    let year = currentYear - document.getElementById("year").value


    if (currentMonth - month < 0) {
        year--
        month = (currentMonth + 12) - month 
    } else {
        month = currentMonth - month
    }

    if (currentDay - day < 0) {
        month--
        day = (currentDay + 30) - day
    } else {
        day = currentDay - day
    }

    document.getElementById("day_result").innerText = day
    document.getElementById("month_result").innerText = month
    document.getElementById("year_result").innerText = year
    console.log(day)
}