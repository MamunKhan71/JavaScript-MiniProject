function palindromeChecker() {
    const palInput = (document.getElementById('palInput').value).toString();
    const palInputReverse = palInput.split("").reverse().join("");
    if (palInput == "") {
        alert("Insert any word");
    }
    else {
        if (palInput === palInputReverse) {
            const palResult = document.getElementById('result');
            palResult.innerHTML = "Result : " + palInput + " is a palindrome!"
        }
        else {
            const palResult = document.getElementById('result');
            palResult.innerHTML = "Result : " + palInput + " is not a palindrome!"
        }
    }

}