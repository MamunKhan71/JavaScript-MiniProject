const keyBox = document.getElementById('keyPressed');
const keyCode = document.getElementById('keyCode');
window.addEventListener('keydown', (e) => {
    if (e.key == " ") {
        keyBox.value = "Space";
        colorChange("Space");
    }
     else {
        keyBox.value = e.key;
        colorChange(e.key);
    }
    keyCode.value = (e.key).charCodeAt(0);
});


const colorChange = (keyId) => {
    const keyIdEvent = document.getElementById(String(keyId).toLowerCase());
    keyIdEvent.classList.add('bg-amber-400');
    setTimeout(()=>{
        keyIdEvent.classList.remove('bg-amber-400');
    },200)
}

const copyCode = () => {
    const code = document.getElementById('keyCode').value;
    console.log(code);
    navigator.clipboard.writeText(code);
    alert("Copied to clipboard!")
}