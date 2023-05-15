function showDate() {

    // Storing current date
    const date = new Date();
    const currentDay = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();

    // Storing user dates input
    let day = document.getElementById("day").value
    let month = document.getElementById("month").value
    let year = document.getElementById("year").value

    let buffer = [day, month, year]

    if (year == 0) {
        year = 0

    } else {
        year = currentYear - document.getElementById("year").value
    }

    if (currentMonth - month < 0) {
        year--
        month = (currentMonth + 12) - month
    } else if (month == 0) {
        month = 0

    } else {
        month = currentMonth - month
    }

    if (currentDay - day < 0) {
        if (month > 0) {
            month--
        }
        day = (currentDay + 30) - day
    } else if (day == 0) {
        day = 0
    } else {
        day = currentDay - day
    }

    if (buffer[0] == 0 || buffer[1] == 0 || buffer[2] == 0 || buffer[0] > 31 || buffer[1] > 12 || buffer[2] > currentYear) {
        document.querySelector(".warning").innerText = "Must be a valid date."
    } else {
        document.querySelector(".warning").innerText = ""

        document.getElementById("day_result").innerText = day
        document.getElementById("month_result").innerText = month
        document.getElementById("year_result").innerText = year

        buffer[0], buffer[1], buffer[2] = 0
        day, month, year = 0
    }

}
