let passwordLength = prompt("Введіть довжину пароля:");
console.log(`Користувач ввів: ${passwordLength}`);

passwordLength = Number(passwordLength);

while (isNaN(passwordLength) || passwordLength <= 0) {
    passwordLength = Number(prompt("Помилка! Введіть правильну довжину пароля (число більше 0):"));
}

let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let password = "";

for (let i = 0; i < passwordLength; i++) {

    let randomPassword = Math.floor(Math.random() * symbols.length);

    password += symbols[randomPassword];
}

alert("Ваш згенерований пароль: " + password);
