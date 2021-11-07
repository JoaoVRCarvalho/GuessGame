'use strict'; 

function resultCheck(guessedNumber, computerNumber) {
    // number must be between 1 and 20
    if (guessedNumber === computerNumber) {
        return "You won";
    } else if (guessedNumber ===0) {
        return "No number";
    } else if (guessedNumber > computerNumber) {
        return "Too high";
    } else if (guessedNumber < computerNumber) {
        return "Too low";
    }
}