//Összegzés!
let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum= 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Sum: ", sum);


//Számlálás!
let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if(numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log("Even numbers: ", db);

//Szélsőérték keresése!
let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if(numericArray[i] > biggest) {
        biggest = numericArray[i];
    }
}
console.log("The biggest element: ", biggest);

let smallest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if(numericArray[i] < smallest) {
        smallest = numericArray[i];
    }
}
console.log("The biggest element: ", smallest);


//Eldöntés tétele!
let contains = false;
for (let i = 0; i< numericArray.length && !contains; i++) {
    if (numericArray[i] == 5) {
        contains = true;
    }
}
console.log("This array contains 5: ", contains);