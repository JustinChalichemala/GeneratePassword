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
    //Current obj: when a user inputs the length into the length_value textbox, you need to save it in some way,
    //  either using a button press or event handler to do like a key event. Then, that needs to be used in the 
    //  generate function, which then has to be displayed in the first textbox.
    let newStr = "";
    // newStr += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    // newStr += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    // newStr += numbers.charAt(Math.floor(Math.random() * numbers.length));
    // newStr += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    
    while (newStr.length <= length) {
        if (document.getElementById("letters_checkbox").checked == true) {
            newStr += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        } else {
            newStr += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
    }
    password.value = newStr;
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


