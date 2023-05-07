class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Professor'){
    super(sobrenome)
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor(){
    super('Silva')
  }
}

const filha = new Filho
const pai = new Pai('Souza')
console.log(filha)
console.log(pai)