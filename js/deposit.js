

document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount = getInputFieldById('deposit-field');
    const previousDepositTotal = getElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    setTextElementById ('deposit-total',newDepositTotal);

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementById('balance-total', newBalanceTotal);

})