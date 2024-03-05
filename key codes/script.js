const keyBox = document.getElementById('keyPressed');
const keyCode = document.getElementById('keyCode');
window.addEventListener('keydown', (e) =>{
    if(e.key == " "){
        keyBox.value = "Space";
    }else{
        keyBox.value = e.key;
    }
    keyCode.value = (e.key).charCodeAt(0);
});

const colorChange = () => {
    
}

const copyCode = () =>{
    const code = document.getElementById('keyCode').value;
    console.log(code);
    navigator.clipboard.writeText(code);
    alert("Copied to clipboard!")
}