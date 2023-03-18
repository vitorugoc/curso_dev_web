function soma(){
  let somador = 0;
  for(i in arguments){
    somador += arguments[i]
  }
  return somador
}

console.log(soma(1, 2))
console.log(soma(102, 44, 1, 2, 5 , 1 , 2))
console.log(soma('a', 'b', 'c'))