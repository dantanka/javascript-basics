let userEmail = prompt("Введіть email:");
console.log(`Користувач ввів: ${userEmail}`);

while (userEmail == null) {
    userEmail = prompt("Помилка! Потрібно ввести email.");
}

let atCount = 0;
for (let i = 0; i < userEmail.length; i++) {
    if (userEmail[i] === '@') {
        atCount++;
    }
}
let hasOneAt = atCount == 1;

let dotCount = 0;
for (let i = 0; i < userEmail.length; i++) {
    if (userEmail[i] === '.') {
        dotCount++;
    }
}
let hasOneDot = dotCount == 1;

let atIndex = userEmail.indexOf('@');
let dotIndex = userEmail.indexOf('.');

let firstSymbol = userEmail.charAt(0);
let validFirstSymbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let isValidFirstSymbol = validFirstSymbols.indexOf(firstSymbol) >= 0;

let isValid = hasOneAt && hasOneDot && (dotIndex > atIndex + 1) && isValidFirstSymbol;

if (isValid) {
    alert(`Ваш email ${userEmail} коректний`);
} else {
    alert(`Ваш email ${userEmail} містить помилку`);
}

