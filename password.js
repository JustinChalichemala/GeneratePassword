const password = document.getElementById("textbox");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrztuvwxyz";
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrztuvwxyz";
const numbers = "0123456789";
const symbol = "!@#$%^&*()_+-=|[]{};:',.<>?/~";

const allChars = upperCase + lowerCase + numbers + symbol;

function generate() {
    const length = save() - 1;
    if (length <= 0) {
        alert("Must enter a length");
    }
    let newStr = "";
        
    while (newStr.length <= length) {
        //work on making sure when the numbers and symbols checkboxes are clicked only letters are generated
        if ((document.getElementById("letters_checkbox").checked) || 
            (document.getElementById("letters_checkbox").checked && document.getElementById("symbols_checkbox").checked && document.getElementById("numbers_checkbox".checked)) 
            || (document.getElementById("symbols_checkbox").checked && document.getElementById("numbers_checkbox").checked)) {
                newStr += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }
         else if (document.getElementById("letters_checkbox").checked && document.getElementById("symbols_checkbox").checked) {
            symbolNumbers = numbers + symbol;
            character = allChars.charAt(Math.floor(Math.random() * allChars.length));
            newStr += removeFromStr(character, symbolNumbers);  //password only has letters
        } else if (document.getElementById("numbers_checkbox").checked) {
            numbersExclude = numbers;
            character = allChars.charAt(Math.floor(Math.random() * allChars.length));
            newStr += removeFromStr(character, numbersExclude);  // password only has letters and symbols
        } else if (document.getElementById("symbols_checkbox").checked) {
            symbolsExclude = symbol;
            character = allChars.charAt(Math.floor(Math.random() * allChars.length));
            newStr += removeFromStr(character, symbolsExclude);  // password only has letters and numbers
        }
        else {
            newStr += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
    }
    password.value = newStr;

} 

function removeFromStr(character, selectorString) { //allChars will be string
    str = "";
    if (!selectorString.includes(character)) {
        str += character;
    }
    return str;
}


function save() {
    let savedLength = document.getElementById("length_textbox");
    return savedLength.value;
}


/**
 * You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a digit
only contains alphanumeric characters (note that '_' is not alphanumeric)
 */

// const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/;

//Breakdown of code:

// ^ -> start of input
// (?=.*[a-z]) -> Positive lookahead with . and * (* -> matches preceeding character 1 or more times)
//                and looks to see if there's at least one lowercase letter
// (?=.*[A-Z]) -> Positive lookahead with . and * to see if there's at least one uppercase letter
// (?=.*\d) -> Positive lookahead with . and * to see if there's at least one digit
// [a-zA-Z0-9] -> Specifies only alphanumeric values (without _ which is included with /W)
// {6,} -> Minimum of 6 characters long
// $ -> End of input


