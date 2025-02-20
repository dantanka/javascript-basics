let userName;
let isNameCorrect;
do {
    userName = prompt("Як вас звати?");
    console.log(`Користувач ввів: ${userName}`);

    isNameCorrect = confirm("Ви ввели своє ім'я правильно?");
    console.log(`Користувач ввів підтвердження: ${isNameCorrect}`);
}
while (!isNameCorrect);

alert("Привіт, " + userName + "!");
