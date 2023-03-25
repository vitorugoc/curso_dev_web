const produtos = ['banana', 'refrigerante', 'pasta de dente', 'arroz']

function imprimir(nome, indice){
  console.log(`${indice + 1}- ${nome}`)
}

produtos.forEach(imprimir)
produtos.forEach(produto => console.log(produto))