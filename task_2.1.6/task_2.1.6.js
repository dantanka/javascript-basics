let userEmail = prompt("Введіть email:");
console.log(`Користувач ввів: ${userEmail}`);

while (userEmail == null) {
    userEmail = prompt("Помилка! Потрібно ввести email.");
}

const atSymbol = '@';
let atSymbolCount = 0;
for (let i = 0; i < userEmail.length; i++) {
    if (userEmail[i] === atSymbol) {
        atSymbolCount++;
    }
}

console.log(`@ occured in email: '${userEmail}' - '${atSymbolCount}' times`);

if (atSymbolCount == 1) {
    alert(`Ваш email ${userEmail} коректний`);
} else {
    alert(`Ваш email ${userEmail} містить помилку`);
}

