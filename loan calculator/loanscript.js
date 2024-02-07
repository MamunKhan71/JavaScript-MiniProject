function loanCalculator() {
    const loanAmount = parseFloat(document.getElementById('loanAmt').value.trim());
    const interest = parseFloat(document.getElementById('interest').value.trim());
    const duration = parseFloat(document.getElementById('duration').value.trim());
    // Principal loan amount x interest rate x loan term
    const monthlyInterest = interest / 100 / 12;
    const total_payment = duration;
    const monthly_payment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -total_payment));
    const totalInterest = (monthly_payment * total_payment) - loanAmount;
    const result = document.getElementById('result');
    result.innerHTML = "Total Interest : " + totalInterest.toFixed(2) + " Tk";
    const monthly = document.getElementById('monthly_payment');
    monthly.classList.remove('hidden');
    monthly.innerHTML = "Monthly Payment : " + monthly_payment.toFixed(2) + " Tk";

}