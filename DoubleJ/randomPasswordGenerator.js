//Random Password Generator

function printWelcome() {
    console.log("*********************************");
    console.log("*** Random Password Generator ***");
    console.log("*********************************");
    console.log("\n");
}

function getPasswordLength() {
    let userInput = readline.question("What type of password would you like?\n1) Simple\n2) Moderate\n3) Strong\n4) Souls Like\n: ");
    let passLength = 0;

    while(!passLength) {
        switch(userInput) {
            case "1": 
                passLength = 5;
                break;
            case "2":
                passLength = 8;
                break;
            case "3":
                passLength = 12;
                break;
            case "4":
                passLength = 15;
                break;
            default :
                console.log("\nIncorrect option. Please try again.\n");
                userInput = readline.question("What type of password would you like?\n1) Simple\n2) Moderate\n3) Strong\n4) Souls Like\n: ");

        }
    }

    return passLength;
}

function createSeed() {
    let seed = 0;
    let alphaNumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let specialChars = "!@#$%&*";
    let userInput = readline.question("Would you like to use special characters(!@#$%&*)?\n(Y/N): ");

    while(!seed) {
        switch(userInput.toLowerCase()) {
            case "y":
            case "yes":
                seed = alphaNumeric + specialChars;
                break;
            case "n":
            case "no":
                seed = alphaNumeric;
                break;
            default:
                console.log("Incorrect option. Please try again.\n");
                userInput = readline.question("Would you like to use special characters(!@#$%&*)?\n(Y/N): ");
        }
    }

    return seed;
}

function generatePassword(seed, length) {
    let newPassword = "";

    for (let counter = 0; counter < length; counter++) {
        newPassword += seed.charAt(Math.floor(Math.random() * seed.length));

    }

    return newPassword;
}

function printNewPassword(seed, passLength) {
    console.log(`Your new password is: ${generatePassword(seed, passLength)}`);
}

const readline = require("readline-sync");

printWelcome();

let passLength = getPasswordLength();
let seed = createSeed();

printNewPassword(seed, passLength);