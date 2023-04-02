function criarCarro(marca, modelo, ano){
  return {
    marca,
    modelo,
    ano
  }
}

console.log(criarCarro('ford', 'fiesta', '2017'))
let marca = 'Volkswagen'
let modelo = 'Tiguan'
let ano = '2020'
const Tiguan = criarCarro(marca, modelo, ano)
console.log(Tiguan)