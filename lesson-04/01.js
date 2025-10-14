/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

const arr = [32,11,33,12,54,22,47];

function includesElement(someArray, element) {
    const includedElement = [];
    let isFound;
    for (let i = 0; i < someArray.length; i++) {
        
        if (element === someArray[i]) {
            isFound = true;
            includedElement.push(element); // продумать как вывести найденный элемент
            return isFound
        } else {
            isFound = false;
        }
        
    }
    return isFound

    
}

const number = 54;  // искомое число присваиваем переменной, чтобы можно было ее выводить
const foundElement = includesElement(arr, number);
// выводим нужное сообщение в зависимости от того, найдено число или нет
// код ниже можно вывести в функции

if (foundElement === true) {            // если наша функция возвращает true, то выводим сообщение о том, что число найдено
    console.log("Number " + number + " is found");
    
} else {                                    // в обратном случае -  не найдено
    console.log("Number " + number + " is NOT found");
}
