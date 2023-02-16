document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldById('withdraw-field');

    const previousWithdrawTotal = getElementValueById('withdraw-total');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    setTextElementById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getElementValueById('balance-total');

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    setTextElementById('balance-total',newBalanceTotal);

})