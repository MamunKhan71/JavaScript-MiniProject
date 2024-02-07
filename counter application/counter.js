let counter = 0;

function increment() {
    counter += 1;
    let count = document.getElementById('counter');
    count.innerHTML = counter;
}
function decrement() {
    if (counter <= 0) {
        alert("Cannot be a negative number");
        counter = 0;
    }
    else {
        counter -= 1;
        let count = document.getElementById('counter');
        count.innerHTML = counter;
    }
}
function reset() {
    counter = 0;
    let count = document.getElementById('counter');
    count.innerHTML = counter;
}