function nome(valor){
  return valor
}

const fun = function (){
  return 1
}

const arr = [function (a){return a}, function(b){return b}]

const obj = {}
obj.saudacao = function (){console.log("Olá!")}
obj.saudacao()

function teste(a){
  a()
}

teste(() => console.log("Teste"));


function subtracao(a, b){
  return function(c){
    console.log(a - b - c)
  }
}

subtracao(10,2)(3)