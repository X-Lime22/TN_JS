// Что будет в результате вызова?

const q = new Array(4).fill('2').map(parseInt)

console.log(q)

// new Array(4) - Создается новый массив с длинной (length) в 4 символа
// .fill('2') - Заполняет этот массив повторяющимися значениями, в данном случае - "2"
// .map - создаёт новый массив из результатов вызова parseInt для каждого элемента
// Результатом стал массив из 4 элементов - [2, NaN, NaN, 2]

// Такой вывод обусловлен тем, что метод map принимает в качестве аргументов не только элемент массива, но и его индекс.
// В функцию parseInt попадает уже 2 аргумента, 1 - что преобразовать, 2 - в какой системе счисления это сделать.
// Первая "2" сработает нормально, её аргументы будут "2" и 0 (нулевой элемент в массиве), вторая "2" уже не сработает,
// потому что неверно указана система счисления - 1, а если она меньше двух, то выдаст NaN. Третья "2" тоже будет преобразована в NaN
// потому что в системе счисления 2, не может быть чисел кроме 0 и 1, у нас - 2.

