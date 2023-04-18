const obj1 = {
  nome: 'Vitor'
}
obj1.nome = 'Maria'
console.log(obj1)

const obj2 = new Object
console.log(obj2)
console.log(typeof Object, typeof new Object)

function Produto(nome, preco, desconto){
  this.nome = nome
  this.calcularDesconto = function (){
    return preco * (1-desconto)
  }
}

const produto1 = new Produto('Mesa', 200, 0.05)
console.log(produto1.nome)
console.log(produto1.calcularDesconto())
const produto2 = new Produto('Cadeira', 50, 0.25)
console.log(produto2.calcularDesconto())

function criarFuncionario(nome, salarioBase, faltas, diasTrabalhados){
  return {
    nome,
    salarioBase,
    faltas,
    calculaSalario(){
      return(Math.ceil((salarioBase/diasTrabalhados) * (diasTrabalhados - faltas))).toFixed(2)
    }
  }
}

const funcionario1 = criarFuncionario('José', 2000, 3, 31)
console.log(funcionario1.nome)
console.log(funcionario1.calculaSalario())

const filho = Object.create(null)
filho.nome = 'Ronaldo'
console.log(filho)

