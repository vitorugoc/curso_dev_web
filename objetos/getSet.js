const contador = {
  _valor: 1,
  get valor() {
    return this._valor++
  },
  set valor(valor) {
    if(valor > this._valor){
      this._valor = valor
    }
  }
}

console.log(contador.valor, contador.valor)
contador.valor = 200
console.log(contador.valor, contador.valor)
contador.valor = 50
console.log(contador.valor, contador.valor)

