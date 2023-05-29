// Напишите функцию, которая будет проверять является ли число простым, возвращая true или false

// isPrime(2) === true

function isPrime(num) {
    let prime = num !== 1
    for (let i = 2; i < Math.floor(Math.sqrt(num)) + 1; i++) {
        if (num % i === 0) {
            prime = false
            break
        }
    }
    return prime
}

console.log(isPrime(7))
