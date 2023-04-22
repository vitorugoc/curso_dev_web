const a = 0
const b = 1
const c = 2

const obj = {a:a, b:b, c:c}
const obj2 = {a, b, c}

const nome = 'valor'
const valor = 6.5

const obj3 = {}
obj3[nome] = valor

console.log(obj3)

const obj4 = {[nome]: valor}
console.log(obj4)

const obj5 = {
  falar: function falar(){
    console.log('oi')
  },
}

const obj6 = {
  falar() {
    console.log('oi')
  },
}

obj5.falar()

obj6.falar()