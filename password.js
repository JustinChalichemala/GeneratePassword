const password = document.getElementById("textbox");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrztuvwxyz";
const numbers = "0123456789";
const symbol = "!@#$%^&*()_+-=|[]{};:',.<>?/~";

const allChars = alphabet + numbers + symbol;

/**
 * Randomly chooses and concatonates characters based on filtering checkboxes (no checkboxes includes all characters).
 * This function is called to show passoword in the "textbox" field.
 */
function generate() {
    const length = save() - 1;
    if (length <= 0) {
        alert("Must enter a length");
    }
    let newStr = "";
    let availableChars = allChars;

    if (document.getElementById("letters_checkbox").checked) {
        availableChars = alphabet;
    }

    if (document.getElementById("numbers_checkbox").checked) {
        let wantedChars = alphabet + symbol;
        availableChars = removeFromStr(wantedChars, availableChars);
    }

    if (document.getElementById("symbols_checkbox").checked) {
        let wantedChars = alphabet + numbers;
        availableChars = removeFromStr(wantedChars, availableChars);
    }

    while (newStr.length <= length) {
        if (availableChars.length == 0) {
            break;
        }
        let character = availableChars.charAt(Math.floor(Math.random() * availableChars.length));
        newStr += character;

        if (document.getElementById("letters_checkbox").checked 
            && document.getElementById("numbers_checkbox").checked
            && document.getElementById("symbols_checkbox").checked) {
                availableChars = alphabet
        }
    }

    password.value = newStr;

} 

/**
 * Loops through available characters and adds necessary characters to a string us based on wanted characters
 * @param {*} wantedCharacters resulting characters needed for specific checkbox
 * @param {*} selectorString current available characters
 * @returns 
 */
function removeFromStr(wantedCharacters, selectorString) {
    let str = "";
    for (let i = 0; i < selectorString.length; i++) {
        if (wantedCharacters.includes(selectorString[i])) {
            str += selectorString[i];
        }
    }
    return str;
}


/**
 * Saves the value entered into the length texbox
 * @returns numberical value
 */
function save() {
    let savedLength = document.getElementById("length_textbox");
    return savedLength.value;
}


