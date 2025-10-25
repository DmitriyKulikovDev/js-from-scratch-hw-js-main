/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Еслйи общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
// Входные массивы. Для начала допустим, что у них одинаковая длина (arr1.length === arr2.length)
const arr1 = [1,6,7,5,9,18,55];
const arr2 = [31,27,34,148,55,83,11];
//arr1 = ["Подсказка", "Подсказка", "Подсказка", "Подсказка", "Подсказка"];
//arr2 = ["Подсказка", "цикл", "Метод", "функция", "Пример"];
//arr1 = [true, false, true, true, true, true];
//arr2 = [true, true, false, true, false, true];


function findUniqueElements(someArray) {
    const setSomeArray = new Set(someArray)
    return Array.from(setSomeArray)
}



function findCommonElements(array1, array2) {
    const newArr = [];
    //const finalArr = [];
    for (let i = 0; i < array2.length; i++) {   //т.к. длина одинаковая, то берем длину только первого массива //const element = array1[index];
        for (let j = 0; j < array1.length; j++) {
            if (array2[i] === array1[j]) {
                newArr.push(array2[i])
            }
            
        }            
        
    }
    
    return findUniqueElements(newArr);
}
   
console.log(findCommonElements(arr1, arr2));
