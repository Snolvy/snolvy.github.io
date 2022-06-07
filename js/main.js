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

//Add helptext Add Child
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Give the tops!";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

parent.removeChild(helpText);

//Window events.
/* let sendButton = document.querySelector("form .btn.btn-primary");
sendButton.onclick = function() {
    alert('Hello JS!');
} */

/* let sendButton = document.querySelector("form .btn.btn-primary");
sendButton.onclick = calcAmount;
} 

sendButton.addEventListener("click", function() {
    alert("Hello JS!");
});

window.addEventListener("resize", function() {
    console.log(this.innerHeight, this.innerWidth);
}); */

//Űrlap események!

let orderForm = document.querySelector("#orderFrom");
orderForm.addEventListener("submit", function(ev) {
    ev.preventDefault();

    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }
    console.log( values );
});

//Parent element kezelése!

let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function(ev) {
    this.parentElement.style.display = "none";
};
for(let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click");
}
    