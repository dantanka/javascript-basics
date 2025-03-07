let num1, num2, operation, result;

do {
    num1 = prompt("Введіть перше число:");
    num2 = prompt("Введіть друге число:");
    
    if (isNaN(num1) || isNaN(num2) || num1.trim() === "" || num2.trim() === "") {
        alert("Будь ласка, введіть коректні числа!");
    } else {
        num1 = Number(num1);
        num2 = Number(num2);
    }
} while (isNaN(num1) || isNaN(num2));

do {
    operation = prompt("Введіть математичну операцію (+, -, *, /):");
} while (!["+", "-", "*", "/"].includes(operation));

switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        if (num2 === 0) {
            alert("Ділення на нуль неможливе!");
            result = "Помилка";
        } else {
            result = num1 / num2;
        }
        break;
}


alert(`Результат: ${result}`);