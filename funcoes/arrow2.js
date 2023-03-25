function Veiculo(){
  this.velocidade = 0

  setInterval(() => {
    this.velocidade++
    console.log(this.velocidade)
  }, 1000)
}

function ChamaVeiculo(){
  new Veiculo
}

ChamaVeiculo()

