function tipCalculator(){
    const billAmount = parseFloat(document.getElementById('billAmt').value);
    const serviceRating = parseFloat(document.getElementById('rating').value);
    const noOfPeople = parseFloat(document.getElementById('noOfPeople').value);
    const mealType = parseFloat(document.getElementById('mealType').value);
    
    if(isNaN(billAmount)||isNaN(serviceRating)||isNaN(noOfPeople)){
        alert("Please enter a valid number");
    }

    let tip;
    switch(serviceRating){
        case 1: tip = billAmount * 0.5;
        break;
        case 2: tip = billAmount * 0.10;
        break;
        case 3: tip = billAmount * 0.05;
        break;
        case 4: tip = billAmount * 0.05;
        break;
    }
    let totalAmount = Math.round(billAmount + parseFloat(tip));
    const tipArea = document.getElementById('tipArea');
    const tipAmt = document.getElementById('tipAmt');
    tipArea.classList.remove('hidden');
    tipAmt.innerHTML = totalAmount + ' Tk';
}
