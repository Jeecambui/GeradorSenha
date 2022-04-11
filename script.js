const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");


const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqestubwxyz";
const numbers = "0123456789";
const symbols = "!@#$%¨&*(_)-+=";

function getLowercase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(){
    const len = lenEl.value;

    let password = "";

    if(upperEl.checked){
        password += getUppercase();
    }

    if(lowerEl.checked){
        password += getLowercase();
    }

    if(numberEl.checked){
        password += getNumber();
    }

    if(symbolEl.checked){
        password += getSymbal();
    }

}