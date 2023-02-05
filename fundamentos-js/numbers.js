let peso1 = 3.1
let peso2 = Number('1.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const nota1 = 9.65
const nota2 = 5.698

const total = nota1 * peso1 + nota2 * peso2
let media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString())
media = media.toString()
console.log(typeof media)