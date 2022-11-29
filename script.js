function getInputValue(inputFildId){
    const inputFildValue = document.getElementById(inputFildId);
    const getValue = inputFildValue.value;
    inputFildValue.value = '';
    return getValue;
}
function strToNum(getStr){
    const getNumber = parseFloat(getStr);
    return getNumber;
}
function setInnerText(elementId, setNumber){
    const getElementById = document.getElementById(elementId);
    getElementById.innerText = setNumber;
}

//total expenses part

document.getElementById('calculate-btn').addEventListener('click', function(){
    //for total income
    const incomeInputValue = getInputValue('total-income');
    const incomeInputValueNum =strToNum(incomeInputValue);
    //for food input fild
    const foodInputValue = getInputValue('food-input-fild');
    const foodInputValueNum = strToNum(foodInputValue);
    //for rent input fild
    const rentInputValue = getInputValue('rent-input-fild');
    const rentInputValueNum = strToNum(rentInputValue);
    //for clothes input fild
    const clothesInputfildValue = getInputValue('clothes-input-fild');
    const clothesInputfildValueNum = strToNum(clothesInputfildValue);
    //calculate all expenses
    const totalExpenses = foodInputValueNum + rentInputValueNum + clothesInputfildValueNum;
    //set inner text
    setInnerText('expenses', totalExpenses);
    //calculate balance
    const balance = incomeInputValueNum - totalExpenses;
    setInnerText('balance', balance);
})

// savings part

document.getElementById('save-btn').addEventListener('click', function(){
    const saveInputValue = getInputValue('save-input-fild');
    const saveInputValueNum = strToNum(saveInputValue);
    const balanceId = document.getElementById('balance');
    const balance = balanceId.innerText;
    const balanceNum = strToNum(balance);
    //calculate savings
    const savingAmount = (balanceNum * saveInputValueNum) / 100;
    const reamainingBalance =balanceNum - savingAmount;
    //set inner text
    setInnerText('saving-amount', savingAmount);
    setInnerText('remaining-balance', reamainingBalance);
    
})