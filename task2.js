// Напишите функцию, которая возвращает массив уникальных элементов
// let arr = [1, 2, 3, 4, 2, 1, 5, 6, 4, 5]


let arr = [1, 2, 3, 4, 2, 1, 5, 6, 4, 5]

function uniqueValues(arr) {
    const unique = [new Set(arr)]
    return unique
}

console.log(uniqueValues(arr))


