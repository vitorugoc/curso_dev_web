// pessoa -> fed34 -> {....}
const pessoa = { nome: 'Pedro'}
pessoa.nome = 'Maria'

// pessoa -> fed34 ->  {'Pedro'}
// pessoa -> fed34 -> {'Maria'}

//pessoa = {carro: 'Fiesta'}
//pessoa -> ab32 -> {'Fiesta'}

Object.freeze(pessoa)

pessoa.nome = 'Pietro'
pessoa.endereco = 'Logradouro Fulano de Tal'
delete pessoa.nome

console.log(pessoa)