const avo = { atr1: 1}
const pai = {__proto__: avo, atr2: 2, atr3: 4}
const filho = {__proto__: pai, atr3: 3}

console.log(filho.atr1, filho.atr2, filho.atr3)

const carro = {
  velAtual: 0,
  velMax: 220,
  acelerar(delta){
    if (this.velMax >= this.velAtual + delta){
      this.velAtual += delta
    } else{
      this.velAtual = this.velMax
    }
  },
  velocimetro(){
    return `${this.velAtual}km/h de ${this.velMax}km/h`
  }
}

const ferrari = {
  modelo: 'F40',
  velMax: 320
}

const porsche = {
  modelo: '911',
  velocimetro() {
    return `${this.modelo}: ${super.velocimetro()}`
  }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(porsche, carro)

console.log(ferrari)
console.log(porsche)

ferrari.acelerar(300)
console.log(ferrari.velocimetro())
ferrari.acelerar(30)
console.log(ferrari.velocimetro())

porsche.acelerar(100)
console.log(porsche.velocimetro())

