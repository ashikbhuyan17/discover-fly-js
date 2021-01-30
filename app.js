
function flightsBooking(ticket, isIncrease) {
    let inputField = Number(document.getElementById(ticket + '-count').value)
    if (isIncrease == true) {
        inputField++;
    }
    else if (isIncrease == false & inputField > 0) {
        inputField--;
    }
    document.getElementById(ticket + '-count').value = inputField
    let ticketAmount = 0
    if (ticket == 'firstClass') {
        ticketAmount = inputField * 150
    }
    if (ticket == 'economy') {
        ticketAmount = inputField * 100
    }
    // console.log('increase : ' + ticketAmount);
    calculateTotal();
}


function calculateTotal() {

    // Subtotal
    let economyInput = Number(document.getElementById('economy-count').value)
    let firstClassInput = Number(document.getElementById('firstClass-count').value)
    const totalAmount = firstClassInput * 150 + economyInput * 100
    document.getElementById('subtotal').innerText = '$' + totalAmount

    // Charge 10% VAT
    const tax = Math.round(totalAmount * 0.1)
    document.getElementById('total-tax').innerText = '$' + tax

    // grandTotal
    const grandTotal = tax + totalAmount
    // console.log({ grandTotal });
    document.getElementById('grand-total').innerText = '$' + grandTotal

}


document.getElementById('show').addEventListener('click', function () {
    document.getElementById('showing').style.display = "block";
})

document.getElementById('closeButton').addEventListener('click', function () {
    document.getElementById('showing').style.display = "none";
})
