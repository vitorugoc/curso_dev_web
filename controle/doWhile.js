function aleatorio (min, max){
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor);
}

let numeroCondicao = 2

do{
  numeroCondicao = aleatorio(0, 20);
  console.log("Valor gerado: " + numeroCondicao)
}while( numeroCondicao != 2)

console.log("Finalizado!")