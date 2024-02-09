setInterval(countTime, 1000);

function countTime(){
    const dt = new Date();
    const timer = document.getElementById('timer');
    timer.innerHTML = dt.toLocaleTimeString();
    const dateDay = document.getElementById('dateDay');
    dateDay.innerHTML = dt.toDateString();
}