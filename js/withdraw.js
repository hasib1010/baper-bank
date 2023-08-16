document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawFiield = document.getElementById('Withdraw-field');
    const withdrawString = withdrawFiield.value;
    const withdrawAmount = parseFloat(withdrawString);
    if (isNaN(withdrawAmount)) {
        alert('Withdraw amount sould be a number')
        return;
    }

    const previousWithdrawAmountElement = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdrawAmountElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);
   


    // total Balance - total withdraw;
    const totalBalanceElement = document.getElementById('all-total');
    const balanceString = totalBalanceElement.innerText;
    const balanceAmount = parseFloat(balanceString);
    
    if (withdrawAmount > balanceAmount) {
        alert('tk nai vai')
        return;
    }
    const totalWithdraw = previousWithdrawAmount + withdrawAmount;
    previousWithdrawAmountElement.innerText = totalWithdraw;
    const restBalance = balanceAmount - withdrawAmount;
    totalBalanceElement.innerText = restBalance;

    withdrawFiield.value = '';
})