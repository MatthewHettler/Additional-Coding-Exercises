"use strict";

/*************************BEGINNING OF EXERCISES***********************************/

//TODO: [Exercise 1: Return the sum of two numbers]

function addition (a, b) {
    return (a + b);
}
// console.log("The sum of a and b = "); // log comment
// console.log(addition(5, 5)); // output 10

/************************************************************/

// TODO: [Exercise 2: Compare strings by count of characters]

function comp(str1, str2) {
    if (str1.length == str2.length) {
        return true;
    } else {
        return false;
    }
}

// console.log("True or False? The length of 'AB' and 'CD' strings are equal."); // log comment
// console.log(comp("AB","CD")); // output is true

/************************************************************/

// TODO: [Exercise 3: Is this string empty?]

function isEmpty(s) {
    if (s === ""){
        return true;
    } else {
        return false;
    }
}

// console.log(isEmpty(" "));
// console.log(isEmpty(""));
// console.log(isEmpty("a"));

/************************************************************/

// TODO: [Exercise 4: Correct the Mistakes]

// TODO: Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// TODO: The below function needs to be corrected. Examples of what it needs to accomplish: squared(5) ➞ 25, squared(9) ➞ 81, squared(100) ➞ 10000.

// function squaed(b) {
//     return $a*$a;
// }

// TODO: The below is the code I've corrected.
function squared(b) {
    return b*b;
}

// console.log(squared(10));
// console.log(squared(69));

/************************************************************/

// TODO: [Exercise 5: Is the number less than or equal to zero?]

//TODO: Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
    if (num <= 0) {
        return true;
    } else {
        return false;
    }
}

// console.log(lessThanOrEqualToZero(5));
// console.log(lessThanOrEqualToZero(0));

/************************************************************/

// TODO: [Exercise 6: Convert minutes into Seconds]

//TODO: Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
    return minutes * 60;
}

// console.log(convert(6));
// console.log(convert(4));
