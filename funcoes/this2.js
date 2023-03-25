function Veiculo(){
  this.velocidade = 0

  const self = this
  setInterval(function(){
    self.velocidade++
    console.log(self.velocidade)
  }, 1000)
}

new Veiculo