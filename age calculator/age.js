function calculateAge() {
    const date = document.getElementById('date').value.trim();
    const bornDate = new Date(date);
    const dateToday = new Date()
    const birthDate = bornDate.getDate();
    const birthMonth = bornDate.getMonth() + 1;
    const birthYear = bornDate.getFullYear();

    const todayDate = dateToday.getDate();
    const todayMonth = dateToday.getMonth() + 1;
    const todayYear = dateToday.getFullYear();

    document.getElementById('result').innerHTML = `Your age is : <span class='font-semibold'>${todayYear - birthYear}</span> year, <span class='font-semibold'>${todayMonth - birthMonth}</span> Month and <span class='font-semibold'>${todayDate - birthDate}</span> days`;
    document.getElementById('lastPart').appendChild(document.createElement('hr'));
    document.getElementById('subfield').classList.remove('hidden')
    const milliseconds = Math.floor((dateToday - bornDate));
    const seconds = Math.floor(milliseconds / 1000);
    const minute = Math.floor(seconds / 60);
    const hour = Math.floor(minute / 60);
    const day = Math.floor(hour / 24);
    const week = Math.floor(day / 7);
    const month = Math.floor(day / 30.436875);
    document.getElementById('month').innerHTML = month;
    document.getElementById('weeks').innerHTML = week;
    document.getElementById('days').innerHTML = day;
    document.getElementById('minutes').innerHTML = minute;
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('milliseconds').innerHTML = milliseconds;

}