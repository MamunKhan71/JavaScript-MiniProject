const keyBox = document.getElementById('keyPressed');
const keyCode = document.getElementById('keyCode');
const specialKeys = ["Backspace", "Escape", "Tab", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Space", "Alt", "Control", "CapsLock", "Meta", "ContextMenu", "Shift", "Enter"]
const duplicateKeys = ["Shift", "Control", "Alt", "Meta"];

window.addEventListener('keydown', (e) => {
    if (specialKeys.includes(e.key)) {
        e.preventDefault()
    };
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

async function copy() {
    const copy = document.getElementById('copyButton');
    const copyHtml = copy.innerHTML;
    console.log(copyHtml)
    copy.innerHTML = "Copied"
    setTimeout(() => {
        copy.innerHTML = copyHtml;
    }, 2000)
}

const duplicateValue = (keyIdEvent, dupliId) => {
    keyIdEvent.classList.add('bg-amber-400');
    document.getElementById(`${dupliId}2`).classList.add('bg-amber-400')
    setTimeout(() => {
        keyIdEvent.classList.remove('bg-amber-400');
        document.getElementById(`${dupliId}2`).classList.remove('bg-amber-400')
    }, 200);
}

const colorChange = (keyId) => {
    let keyIdEvent;
    if (specialKeys.includes(keyId)) {
        keyIdEvent = document.getElementById(String(keyId));
    } else {
        keyIdEvent = document.getElementById(String(keyId).toLowerCase());
    }
    if (duplicateKeys.includes(keyId)) {
        duplicateValue(keyIdEvent, keyId);
    } else {
        keyIdEvent.classList.add('bg-amber-400');
        setTimeout(() => {
            keyIdEvent.classList.remove('bg-amber-400');
        }, 200);
    }
}

const copyCode = () => {
    const code = document.getElementById('keyCode').value;
    console.log(code);
    navigator.clipboard.writeText(code);
    copy(this);
}