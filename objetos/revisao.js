const produto = new Object
produto.nome = 'Mesa'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
  modelo: 'Golf',
  valor: 119000,
  proprietario: {
    nome: 'Vitor',
    idade: 20,
    endereco: {
      logradouro: 'Rua blabla',
      numero: 123
    }
  },
  condutores: [{
    nome: 'Pablo',
    idade: 18,
  },
  {
    nome: 'Manuela',
    idade: '39'
  }
]
}

carro.proprietario.endereco.logradouro = 'Rua ABC'
carro['proprietario']['endereco']['logradouro'] = 'Rua dos Pardais'
console.log(carro.proprietario.endereco.logradouro)

delete carro.condutores
delete carro.proprietario.endereco
console.log(carro)
console.log(carro.proprietario.nome.length)

