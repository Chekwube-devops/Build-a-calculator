document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById('btn');

    btn.addEventListener('click', function () {

        const billAmount = Number(document.getElementById('billAmount').value);
        const tipPercentage = Number(document.getElementById('tipPercentage').value);

        const tipAmount = (billAmount * tipPercentage) / 100;
        const totalBill = billAmount + tipAmount;

        document.getElementById('tipAmount').value = tipAmount;
        document.getElementById('totalBill').value = totalBill;
    });
});