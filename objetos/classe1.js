class Lancamento {
  constructor(nome = 'Genérico', valor = 0){
    this.nome = nome
    this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes, ano){
    this.mes = mes
    this.ano = ano
    this.lancamentos = []
  }

  addLancamentos(...lancamentos){
    lancamentos.forEach(l => this.lancamentos.push(l))
  }

  sumario() {
    let valorConsolidado = 0
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor
    })

    return valorConsolidado
  }
}

const salario = new Lancamento('Salário', 4500)
const conta = new Lancamento('Luz', -1200)

const contasAPagar = new CicloFinanceiro(5, 2023)
contasAPagar.addLancamentos(salario, conta)
console.log(contasAPagar.sumario())