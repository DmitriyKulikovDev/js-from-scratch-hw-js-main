/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

const Str = 'hello'
function doubleEachCharacter(inputString) {
    const arr = inputString.split('');
    const newStr = []
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i];
            newStr.push(el + el)    //так и плачет рефыакторинг
            
        }
    let resultString = newStr.join('');
    return resultString
}

const Finalstr = doubleEachCharacter(Str);
console.log(Finalstr);
