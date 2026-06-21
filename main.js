let btn = document.getElementById('btn'); 

btn.addEventListener('click', function() {
    let billAmount = (document.getElementById('billAmount').value);
    let tipPercentage =(document.getElementById('tipPercentage').value);

    let tipAmount = document.getElementById('tipAmount').value = (billAmount * tipPercentage / 100);
    let totalBill = document.getElementById('totalBill').value = (parseFloat(billAmount) + parseFloat(tipAmount));

})