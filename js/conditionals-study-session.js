"use strict";
// alert("connected");

//define a function names addFive that takes an input and adds 5, if the input is NOT numeric the function should return false.

function addFive(x) {
    x = parseInt(x) + 5;
    if (isNaN(x)){
        return false;
    } else {
        return x;
    }
}

// console.log(addFive("2")); // 7
// console.log(addFive(5)); // 10
// console.log(addFive(true)); // false
// console.log(addFive("cat")); // false


//define a function names toTheThird that takes an input and returns that input to the third power (cubed); if the input is not numeric the function should return false

function toTheThird(x) {
    x = parseInt(x);
    if (isNaN(x)) {
        return false;
    } else {
        return x * x * x;
    }
}

// console.log(toTheThird("2")); // 8
// console.log(toTheThird(5)); // 125
// console.log(toTheThird(true)); // false
// console.log(toTheThird("cat")); // false


// Define a function named lowerCase that takes in a single input. If the input is not a string, return false. If the input is a non-numeric string, then return it with all the letters lowercase. (look up palindrome).

function lowerCase(x) {
    if (!isNaN(parseFloat(x))) {
        return false;
    } else if (typeof (x) === "string") {
        return x.toLowerCase();
    } else {
        return false;
    }
}

// console.log(lowerCase("2")); // false
// console.log(lowerCase(5)); // false
// console.log(lowerCase(true)); // false
// console.log(lowerCase("CAT")); // cat


// Write a function named sumOfCubes that takes in two inputs. If both inputs are numeric, sumOfCubes should cube each input and return the sum of them added together. For example, if we pass a and b then we should cube a and add it to the cube of b. If either or both inputs are not numeric, sumOfCubes should return false.

function sumOfCubes(x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    if (isNaN(x) || isNaN(y)) {
        return false;
    } else {
        return ((x*x*x)+(y*y*y));
    }
}

// console.log(sumOfCubes("2", "5")); //8 + 125 = 133
// console.log(sumOfCubes(5, 4)); //125 + 64 = 189
// console.log(sumOfCubes(true, true)); //false
// console.log(sumOfCubes("cat", "dog")); //false


// Write a function named divide that takes in two inputs. If both inputs provided are numeric, divide returns the result of the first input divided by the second. If either or both inputs are not numeric, divide should return false.

function divide(x, y) {
    x = parseFloat(x);
    y = parseFloat(y);
    if (isNaN(x) || isNaN(y)) {
        return false;
    } else if (y === 0) {
        return false;
    } else {
        return x / y;
    }
}

// console.log(divide("12", "4")); // 12 / 4 = 3
// console.log(divide(20, 6)); // 20 / 6 = 3.33333~
// console.log(divide(true, true)); // false
// console.log(divide("cat", "dog")); //false

//hey, aren't there special rules when it comes to dividing with or by 0??? (If you divide a number by 0 (y), it would return infinity normally)

// console.log(divide(0, 12));
// console.log(divide(12, 0));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


// Write a function named reverseUpperCaseString that takes in a single input. If the input is a numeric string, then return false. If the input is a string, return that string capitalized and reversed

function reverseUpperCaseString(x) {
    if (!isNaN(parseFloat(x))) {
        return false;
    } else if (typeof(x) !== "string") {
        return false;
    } else {
        x = (x.split("").reverse().join("")).toUpperCase();
        return x;
    }
}

//=== OR ===//

function reverseUpperCaseString(input) {
    if(!isNaN(parseFloat(input))) {
        return false;
    }else if (typeof input !== "string") {
        return false;
    }else{
        var input2 = (input.split("").reverse().join("")).toUpperCase();
        return  input2 === input.toUpperCase();
    }
}

// console.log(reverseUpperCaseString(true)); // false
// console.log(reverseUpperCaseString(18)); // false
// console.log(reverseUpperCaseString("15")); // false
// console.log(reverseUpperCaseString("cat")); // TAC
// console.log(reverseUpperCaseString("RaCeCaR")); // RACECAR
// console.log(reverseUpperCaseString("yRaNoiTCId")); // DICTIONARY



// Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.

function getLowestNumber(x, y, z) {
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);
    if (!isNaN(x) && (!isNaN(y) && (!isNaN(z)))) {
        return Math.min(x, y, z);
    } else return false;
}

// console.log(getLowestNumber(1, 15, 30)); // 1
// console.log(getLowestNumber(true, false, true)); // false
// console.log(getLowestNumber("1", "15", "30")); // 1
// console.log(getLowestNumber("cat", "dog", "hippopotamus")); // false
// console.log(getLowestNumber(1, "otter", 30)); // false
// console.log(getLowestNumber(-53, 72, 7)); // -53








