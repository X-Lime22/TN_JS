// Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок остальных элементов.
// moveZeros([false,1,0,1,2,0,1,3,"a"])
// должно вернуть[false,1,1,2,1,3,"a",0,0]
// И должно работать с другими входными параметрами.



let moveZeros = [false,1,0,1,2,0,1,3,"a"]

console.log(moveZeros)

let result = moveZeros.filter(el => el === 0)
for (let i = moveZeros.length + 1; i >= 0; i--) {
    if (moveZeros[i] === 0) {
        moveZeros.splice(i, 1);
    }
}

console.log(moveZeros)

console.log(moveZeros.concat(result))





