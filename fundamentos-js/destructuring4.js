function aleatorio([min = 0, max = 100000] = []){
  if(min > max)
    [min, max] = [max, min];

  let valor = Math.random() * (max - min) + min;
  return Math.ceil(valor);
}

const intervalo = [20, 10]
console.log(aleatorio(intervalo))
console.log(aleatorio([5, 8]))
console.log(aleatorio([50]))
console.log(aleatorio([, 12]))
console.log(aleatorio([]))
console.log(aleatorio())