Array.prototype.myForEach = function(callback) {
  for(let i = 0; i < this.length; i++){
    callback(this[i], i, this)
  }
}

const aprovados = ['Vitor', 'Joana', 'Alice', 'José']


aprovados.myForEach(function(nome, indice){
  console.log(`${indice + 1}) ${nome}`)
})