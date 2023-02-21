function aleatorio({min = 0, max = 100000} = {}){
  let valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const intervalo = {min: 20, max: 50}
console.log(aleatorio(intervalo))
console.log(aleatorio({min: 5, max: 15}))
console.log(aleatorio({max: 6}))
console.log(aleatorio({}))
console.log(aleatorio())