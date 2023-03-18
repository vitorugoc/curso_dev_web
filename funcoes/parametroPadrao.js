function soma(a, b, c){
  a = a || 2
  b = b || 2
  c = c || 2

  return a + b + c
}

function soma2(a, b , c){
  a = a !== undefined ? a : 2
  b = 1 in arguments ? b : 2
  c = isNaN(c) ? 2 : c

  return a + b + c
}

console.log(soma2(0, 0 ,0))

function soma3(a = 2, b = 2, c = 2){
  return a + b + c
}

console.log(soma3())


