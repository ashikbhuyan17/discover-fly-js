

// document.getElementById('increase').addEventListener('click', function () {
//     // let inputField = Number(document.getElementById('input').value)
//     // inputField++;
//     // document.getElementById('input').value = inputField
//     // let ticketAmount = inputField * 150
//     // console.log('increase : ' + ticketAmount);
//     firstClassTicket(true);

// })

// document.getElementById('decrease').addEventListener('click', function () {
//     // let inputField = Number(document.getElementById('input').value)
//     // inputField--;
//     // if (inputField < 0) {
//     //     inputField = 0
//     // }
//     // document.getElementById('input').value = inputField
//     // let ticketAmount = inputField * 150
//     // console.log('decrease :' + ticketAmount);
//     firstClassTicket(false);

// })

// function firstClassTicket(isIncrease) {
//     let inputField = Number(document.getElementById('firstClass-count').value)
//     if (isIncrease == true) {
//         inputField++;
//     }
//     else if (isIncrease == false & inputField > 0) {
//         inputField--;
//     }
//     document.getElementById('firstClass-count').value = inputField
//     let ticketAmount = inputField * 150
//     console.log('increase : ' + ticketAmount);
// }

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

    console.log('increase : ' + ticketAmount);

    calculateTotal();
}



function calculateTotal() {
    let economyInput = Number(document.getElementById('economy-count').value)
    let firstClassInput = Number(document.getElementById('firstClass-count').value)
    const totalAmount = firstClassInput * 150 + economyInput * 100
    document.getElementById('subtotal').innerText = '$' + totalAmount

    const tax = totalAmount * 0.1
    document.getElementById('total-tax').innerText = '$' + tax

    // grandTotal
    const grandTotal = tax + totalAmount
    document.getElementById('grand-total').innerText = '$' + grandTotal

}

// function economyTicket(isIncrease) {
//     let inputField = Number(document.getElementById('economy-count').value)
//     if (isIncrease == true) {
//         inputField++;
//     }
//     else if (isIncrease == false & inputField > 0) {
//         inputField--;
//     }
//     document.getElementById('economy-count').value = inputField
//     let ticketAmount = inputField * 100
//     console.log('economyIncrease : ' + ticketAmount);
// }



// document.getElementById('economyIncrease').addEventListener('click', function () {
//     // let inputField = Number(document.getElementById('economyInput').value)
//     // inputField++;
//     // document.getElementById('economyInput').value = inputField
//     // let ticketAmount = inputField * 100
//     // console.log('economyIncrease : ' + ticketAmount);

//     economyTicket(true);

// })

// document.getElementById('economyDecrease').addEventListener('click', function () {
//     // let inputField = Number(document.getElementById('economyInput').value)
//     // inputField--;
//     // if (inputField < 0) {
//     //     inputField = 0
//     // }
//     // document.getElementById('economyInput').value = inputField
//     // let ticketAmount = inputField * 100
//     // console.log('economyDecrease :' + ticketAmount);
//     economyTicket(false);

// })


