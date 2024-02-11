function getUnicodeCharacter(){
    const text = document.getElementById('characterInput').value.trim();
    const uniCode = text.charCodeAt(0);
    document.getElementById('result').innerHTML = `The unicode of <span class="font-semibold">'${text}'</span> is : <span class="font-semibold">${uniCode}</span>`
    document.getElementById('lastPart').appendChild(document.createElement('hr'));
}