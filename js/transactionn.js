document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositeField = document.getElementById('deposit-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);
    const dpositetotal = document.getElementById('deposit-total');
    const previousTotalAmountString = dpositetotal.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);
    dpositetotal.innerText = newDepositeAmount;
    const currentTotalAmount = previousTotalAmount + newDepositeAmount;
    dpositetotal.innerText = currentTotalAmount;


    const balanceTOtalString = document.getElementById('all-total')
    const balanceToatalnumberValue = balanceTOtalString.innerText;
    const previousBalanceTotal = parseFloat(balanceToatalnumberValue);
    const newBalance = previousBalanceTotal + newDepositeAmount;
    balanceTOtalString.innerText = newBalance;


    depositeField.value = '';
})