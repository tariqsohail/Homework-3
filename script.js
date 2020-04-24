const characterAmountRange = document.getElementsByClassName(
    'characterAmountRange'
)[0];
const characterAmountNumber = document.getElementsByClassName(
    'characterAmountNumber'
)[0];
const includeUpperCaseElement = document.getElementsByClassName("includeUpperCase")[0];
const includeNumbersElement = document.getElementsByClassName("includeNumbers")[0];
const includeSymbolsElement = document.getElementsByClassName("includeSymbols")[0];
const passwordDisplay = document.getElementsByClassName("passwordDisplay")[0];
const form = document.getElementsByClassName("passwordGenerator")[0];
const lowerCaseCharCodes = arrayFromLowToHigh(97, 122);
const upperCaseCharCodes = arrayFromLowToHigh(65, 90);
const numberCharCodes = arrayFromLowToHigh(48, 57);
const symbolCharCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeUpperCase = includeUpperCaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const password = generatePassword(
        characterAmount,
        includeUpperCase,
        includeNumbers,
        includeSymbols
    );
    passwordDisplay.value = password;
});

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    var charCodes = lowerCaseCharCodes;
    if (includeUppercase) charCodes = charCodes.concat(upperCaseCharCodes);
    if (includeNumbers) charCodes = charCodes.concat(numberCharCodes);
    if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes);



    var passwordCharacters = [];
    for (var i = 0; i < characterAmount; i++) {
        var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }

        return passwordCharacters.join("");
    }

    function arrayFromLowToHigh(low, high) {
        const array = []
        for (let i = low; i <= high; i++) {
            array.push(i)
        }
        return array

    }

    characterAmountNumber.addEventListener("input", syncCharacterAmount);
    characterAmountRange.addEventListener("input", syncCharacterAmount);
    function syncCharacterAmount(e) {
        const value = e.target.value;
        characterAmountNumber.value = value;
        characterAmountRange.value = value;
    }

    function copypass(){
        document.querySelector(".password-display").select();

        document.execCommand("copy");
        
        
    }

    

