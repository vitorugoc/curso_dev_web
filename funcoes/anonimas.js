const sub = function (a, b){
  return a - b
}

console.log(sub(2, 1))

const imprimeOperacao = function (a, b, operacao = sub){
  console.log(operacao(a, b))
}

imprimeOperacao(5,2)
imprimeOperacao(5,3, function (a, b){
  return a * b
})

const obj = {
  falar: function(){
    console.log('olá')
  },
}

obj.falar()