const aprovados = ['Ana', 'José', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array, x){
  console.log(`${indice + 1}) ${nome}`)
  console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)
