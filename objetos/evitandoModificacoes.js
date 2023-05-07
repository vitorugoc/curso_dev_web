const produto = Object.preventExtensions({
  nome: 'Qualquer',
  preco: 52.99,
  tag: 'promoção'
})
console.log('Extensível? :', Object.isExtensible(produto))

produto.nome = 'Cafeteira'
produto.descricao = 'A melhor cafeteira já criada!'
delete produto.tag
console.log(produto)

const pessoa = {nome: 'João', idade: 18}
Object.seal(pessoa)
pessoa.sobrenome = 'Costa'
pessoa.nome = 'Julia'
delete pessoa.nome
console.log(pessoa)

//Object.freeze ---> Object.seal + Valores Constantes