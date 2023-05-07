const pai = {nome: 'João', corOlhos: 'verde'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corOlhos)

const filha2 = Object.create(pai, {
  nome: { value: 'Thais', writable: false, enumerable: true}
})

filha2.nome = 'Joana'
console.log(filha2.nome)

console.log(`${filha2.nome} tem olhos ${filha2.corOlhos}s`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


filha2.corOlhos = 'Azul'

for(let key in filha2){
  filha2.hasOwnProperty(key) ? 
    console.log(key) : console.log(`Herdado pelo seu pai: ${key}`)
}