function countdown(){
    let now = new Date();
    /* Put end date here format (year, month(number), day, hours, minutes, seconds) */
    let eventDate = new Date(2021, 11, 29, 23,59,59);


    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTime;
    let secs = Math.floor(remTime/1000);
    let mins = Math.floor(secs/60);
    let hrs = Math.floor(mins/60);
    let days = Math.floor(hrs/24);

    hrs %= 24;
    mins %= 60;
    secs %= 60;

    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;

    document.getElementById("days").textContent = days;
    document.getElementById("days").innerText = days;
    document.getElementById("hrs").textContent = hrs;
    document.getElementById("mins").textContent = mins;
    document.getElementById("secs").textContent = secs;

    setTimeout(countdown,1000);
}

countdown();