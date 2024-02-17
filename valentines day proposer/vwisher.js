let count = 0;
const btnYes = document.getElementById('yes');
let noBtn = document.getElementById('no');
noBtn.addEventListener('click', function () {
    let buttonSize = String(count*16)+'px';
    const headerPhoto = document.getElementById('image').src="./images/An1.gif";
    btnYes.classList.add('text-[80px]');
    count++;
    console.log(buttonSize);
});
