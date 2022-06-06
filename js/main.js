function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;  /*3 operandusos kifejezés*/
    
    showSumPrice(price, amountNumber);
    
}

/*if(isNaN(amountNumber)) {
    amountNumber = 0;
}*/  

function showSumPrice(price = 1000, amountNumber = 1) { /*alapértelmezett értékek: price, number*/
    /*amountNumber = amountNumber || 0;*/
    let showAmount = document.querySelector("span.show-amount");
    if ( amountNumber > 10 ) {
        alert("Max 10 prdouct!");
    } else if ( amountNumber < 1 ) {
        alert("Min 1 products have to buy!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}