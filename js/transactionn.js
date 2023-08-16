// document.getElementById('deposit-btn').addEventListener('click', function () {
//     const depositeField = document.getElementById('deposit-field');
//     const newDepositeAmountString = depositeField.value;
//     const newDepositeAmount = parseFloat(newDepositeAmountString);
//     const dpositetotal = document.getElementById('deposit-total');
//     const previousTotalAmountString = dpositetotal.innerText;
//     const previousTotalAmount = parseFloat(previousTotalAmountString);
//     dpositetotal.innerText = newDepositeAmount;
//     const currentTotalAmount = previousTotalAmount + newDepositeAmount;
//     dpositetotal.innerText = currentTotalAmount;


//     const balanceTOtalString = document.getElementById('all-total')
//     const balanceToatalnumberValue = balanceTOtalString.innerText;
//     const previousBalanceTotal = parseFloat(balanceToatalnumberValue);
//     const newBalance = previousBalanceTotal + newDepositeAmount;
//     balanceTOtalString.innerText = newBalance;


//     depositeField.value = '';
// })
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositeField = document.getElementById('deposit-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat((newDepositeAmountString));
    depositeField.value = '';
    if (isNaN(newDepositeAmount)) {
        alert('Deposite amount sould be a number')
        return;
    }

    const oldDepositeAmountElement = document.getElementById('deposit-total');
    const oldDepositeAmount = oldDepositeAmountElement.innerText;
    const oldDepositeAmountNumber = parseFloat(oldDepositeAmount);
    oldDepositeAmountElement.innerText = newDepositeAmount;

    const totalDipositeAmount = oldDepositeAmountNumber + newDepositeAmount;

    oldDepositeAmountElement.innerText = totalDipositeAmount;
    

    const oldTotalBalance = document.getElementById('all-total');
    const oldTotalBalanceString = oldTotalBalance.innerText;
    const oldTotalBalanceNumber = parseFloat(oldTotalBalanceString);

    const newTotalBalance = newDepositeAmount + oldTotalBalanceNumber;
    oldTotalBalance.innerText = newTotalBalance;


})