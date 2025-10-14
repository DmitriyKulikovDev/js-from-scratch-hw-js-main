/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
const newArr = [1,2,2,3,4,4,5]
//const num = 34;
//const newFoundElement = includesElement(newArr, num);
//
const uniqueElement = [];
function findUniqueElements(someArray) {
    
    for (let i = 0; i < someArray.length; i++) {
           const num = someArray[i]; 
           const foundEl = includesElement(uniqueElement, num);
           if (i === 0) {           
            uniqueElement.push(num)                 //Первый элемент всегда уникальный - всегда включаем в массив
           } else if (foundEl === false) {      //рефакторинг
            uniqueElement.push(num)
           }
    }
    
}

findUniqueElements(newArr);
console.log(uniqueElement);



// const num = someArray[i];
//         const foundEl = includesElement(newArr, num)
//             if (foundEl === false) {     // если данного элемента нет, 
//                  uniqueElement.push(num)                       // то мы его добавляем в новый массив (уникальный)
//             }