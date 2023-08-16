document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawFiield = document.getElementById('Withdraw-field');
    const withdrawString = withdrawFiield.value;
    const withdrawAmount = parseFloat(withdrawString);

    const previousWithdrawAmountElement = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdrawAmountElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);
    const totalWithdraw = previousWithdrawAmount + withdrawAmount;
    previousWithdrawAmountElement.innerText = totalWithdraw;

    // total Balance - total withdraw;
    const totalBalanceElement = document.getElementById('all-total');
    const balanceString = totalBalanceElement.innerText;
    const balanceAmount = parseFloat(balanceString);
    
    const restBalance = balanceAmount - withdrawAmount;
    totalBalanceElement.innerText = restBalance;

    withdrawFiield.value = '';
})