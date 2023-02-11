console.log(Math.ceil(6.1))

function Colaborador(nome){
  var nome = nome
  this.sauda = function(){
    console.log("Olá, galera!");
  }
}

const colaborador1 = new Colaborador("vitor")

console.log(colaborador1.nome)
colaborador1.sauda()

const obj = {}

obj.nome = 'carlos'
obj['profissao'] = 'pedreiro'

console.log(obj.nome)
console.log(obj.profissao)