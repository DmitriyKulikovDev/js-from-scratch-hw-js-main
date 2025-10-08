// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
    if (number % 2 === 0) {
        isEven =true;
        console.log("Число " + number + " - четное");
        
    } else {
        isEven = false;
        console.log("Число " + number + " - нечетное");
    }
}

isEven(37)