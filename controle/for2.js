const arr = ['banana', 'ovo', 'leite', 'açúcar']
for(i in arr){
  console.log(arr[i])
}

const obj = {
  nome: 'blabla',
  logradouro: 'blablabla',
  telefone: 123123
}

for(keys in obj){
  console.log(`${keys} = ${obj[keys]}`)
}
