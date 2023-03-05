function aleatorio (min, max){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor);
}

let numeroCondicao = 0

while( numeroCondicao != 2){
  numeroCondicao = aleatorio(0, 20);
  console.log("Valor gerado: " + numeroCondicao)
}

console.log("Finalizado!")