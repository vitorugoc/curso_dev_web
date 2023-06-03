const numeros = [1, 2, 3, 4, 5]

let res = numeros.map(function(n){
  return n * 2
})

console.log(res)

const soma5 = n => n + 5
const metade = function(n){return n/2}
const transformaDinheiro = n => `R$ ${parseFloat(n).toFixed(2).replace('.', ',')}`

res = numeros.map(metade).map(soma5).map(transformaDinheiro)

console.log(res)