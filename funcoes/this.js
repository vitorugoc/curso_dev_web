const carro = {
  velocidade: '50 km/h',
  aferirVelocidade() {
    console.log(this.velocidade)
  }
}

carro.aferirVelocidade()
const aferir = carro.aferirVelocidade.bind(carro)
aferir()
