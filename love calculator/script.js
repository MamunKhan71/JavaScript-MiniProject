function calculateLove() {
    const name1 = (document.getElementById('per1name').value.trim()).toLowerCase();
    const name2 = (document.getElementById('per2name').value.trim()).toLowerCase();
    if (name1 == "") {
        alert("Please enter your name!");
    } else if (name2 == "") {
        alert("Please enter your partner name!");
    }
    const love = Math.round(Math.random() * 100);
    const result = document.getElementById('result');
    if (name1 == "mamun" && name2 == "zarin" || name1 == "zarin" && name2 == "mamun") {
        result.innerHTML = "Result : " + "100" + '%'
    } else {
        result.innerHTML = "Result : " + love + '%'
    }
}