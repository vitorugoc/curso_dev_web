const endereco = {
  logradouro: 'ABC',
  numero: 123,
  bairro: 'Fulano de Tal'
}

console.log(Object.keys(endereco))
console.log(Object.values(endereco))
console.log(Object.entries(endereco), Object.entries(endereco))

Object.entries(endereco).forEach(([chave, valor])=> {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(endereco, 'estado', {
  enumerable: false,
  writable: false,
  value: 'Minas Gerais'
})
endereco.estado = 'São Paulo'
console.log(endereco)

const dest = {a: 0}
const obj1 = {b: 1}
const obj2 = {c: 2}

const objetosConcatenados = Object.assign(dest, obj1, obj2)

console.log(objetosConcatenados)

//Object.freeze(objetosConcatenados)
objetosConcatenados.a = 123
console.log(objetosConcatenados)
