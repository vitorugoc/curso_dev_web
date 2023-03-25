function Carro(velocidadeMaxima = 180, fatorAceleracao = 5){
  let velocidadeAtual = 0

  this.acelerar = function () {
    if(velocidadeAtual + fatorAceleracao <= velocidadeMaxima){
      velocidadeAtual += fatorAceleracao
    }else{
      velocidadeAtual = velocidadeMaxima
    }
  }

  this.getVelocidadeAtual = function () {
    return velocidadeAtual
  }
}

const celta = new Carro
celta.acelerar()
celta.acelerar()
celta.acelerar()
console.log(celta.getVelocidadeAtual())

const porsche911 = new Carro(320, 30)
porsche911.acelerar()
porsche911.acelerar()
porsche911.acelerar()
porsche911.acelerar()
porsche911.acelerar()
porsche911.acelerar()
porsche911.acelerar()
porsche911.acelerar()
porsche911.acelerar()
porsche911.acelerar()
porsche911.acelerar()
porsche911.acelerar()
console.log(porsche911.getVelocidadeAtual())
