let randomNumber = Math.floor(Math.random() * 101); 
let userNumber;
let attempts = 0;

do {
    userNumber = Number(prompt("Вгадайте число від 0 до 100:"));
    attempts++;

    if (isNaN(userNumber)) {
        alert("Будь ласка, введіть число!");
    } else if (userNumber < randomNumber) {
        alert("Ваше число менше.");
    } else if (userNumber > randomNumber) {
        alert("Ваше число більше.");
    } else {
        alert(`Вітаємо, ви вгадали число ${userNumber} за ${attempts} спроб!`);
    }
} while (userNumber !== randomNumber);