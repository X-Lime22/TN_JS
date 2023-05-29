// Напишите функцию, которая вернет строку с именами студентов, у которых оценка больше 50

const students = [
    { name: "Alex", mark: "76" },
    { name: "John", mark: "30" },
    { name: "Smith", mark: "50" },
    { name: "Bob", mark: "62" },
    { name: "Sam", mark: "97" },
]

function goodMarks() {
    const result = students.filter(item => item.mark > 50)
    console.log(result)
}

goodMarks()



