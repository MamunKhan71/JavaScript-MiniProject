let headCounter = 0;
let tailCounter = 0;
const audio = new Audio("./audio.wav");
const localStorageData = () => {

    const localData = localStorage.getItem('score');
    if (localData) {
        const localParser = JSON.parse(localData);
        headCounter = localParser['heads'];
        tailCounter = localParser['tails'];
    } else {
        const newScore = {
            heads: headCounter,
            tails: tailCounter,
        }
        const newScoreJson = JSON.stringify(newScore);
        localStorage.setItem('score', newScoreJson);
    }
}

const randomGenerator = () => {
    const randNum = Math.round(Math.random() * (1 - 0) + 0);
    return randNum;
}

const previousValue = () => {
    const head = document.getElementById('head');
    const tail = document.getElementById('tail');
    head.innerText = headCounter;
    tail.innerText = tailCounter;
}

const scoreReset = () => {
    localStorage.removeItem('score');
    headCounter = 0;
    tailCounter = 0;
    localStorageData();
    previousValue();
}

const scoreSaver = () => {
    const localStorageData = JSON.parse(localStorage.getItem('score'));
    localStorageData['heads'] = headCounter;
    localStorageData['tails'] = tailCounter;
    const newLocalStorage = JSON.stringify(localStorageData);
    localStorage.setItem('score', newLocalStorage);
    previousValue();
}
const coinFlip = async () => {
    audio.play();
    setTimeout(()=>{
        const randNum = randomGenerator();
    const coinFlipper = document.getElementById('coinFlipper');
    coinFlipper.classList.remove("bg-[url('coinStatic.png')]");
    coinFlipper.classList.add("bg-[url('coin.gif')]");
    const newElement = document.createElement('h1');
    newElement.classList.add('text-6xl','bg-black','rounded-2xl','bg-opacity-50','text-white','font-bold', 'w-full', 'flex', 'h-full', 'items-center', 'justify-center');
    coinFlipper.innerHTML = "";
    if (randNum === 1) {
        headCounter++;
        newElement.innerText = "Head";
    } else {
        tailCounter++;
        newElement.innerText = "Tail";
    }
    coinFlipper.appendChild(newElement);
    scoreSaver();
    },600)
}

localStorageData();
previousValue();