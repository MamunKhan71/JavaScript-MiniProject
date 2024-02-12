function calculateAge() {
    const date = document.getElementById('date').value.trim();
    const bornDate = new Date(date);
    const dateToday = new Date();
    console.log(dateToday)
    const milliseconds = Math.abs(dateToday - bornDate);
    seconds = milliseconds / 1000;
    minutes = milliseconds / (1000 * 60);
    hours = milliseconds / (1000 * 60 * 60);
    days = milliseconds / (1000 * 60 * 60 * 24);
    weeks = milliseconds / (1000 * 60 * 60 * 24 * 7);
    months = milliseconds / (1000 * 60 * 60 * 24 * 30.436875);
    years = milliseconds / (1000 * 60 * 60 * 24 * 365.25);
    const remainingMonths = Math.floor(months % 12);
    const remainingDays = Math.floor(days % 30.436875);
    document.getElementById('result').innerHTML = `Your age is : <span class='font-semibold'>${Math.round(years)}</span> year, <span class='font-semibold'>${remainingMonths}</span> Month and <span class='font-semibold'>${remainingDays}</span> days`;
    document.getElementById('lastPart').appendChild(document.createElement('hr'));
    document.getElementById('subfield').classList.remove('hidden')
    document.getElementById('month').innerHTML = Math.round(months);
    document.getElementById('weeks').innerHTML = Math.round(weeks);
    document.getElementById('days').innerHTML = Math.round(days);
    document.getElementById('hours').innerHTML = Math.round(hours);
    document.getElementById('minutes').innerHTML = Math.round(minutes);
    document.getElementById('seconds').innerHTML = Math.round(seconds);
    document.getElementById('milliseconds').innerHTML = Math.round(milliseconds);

}