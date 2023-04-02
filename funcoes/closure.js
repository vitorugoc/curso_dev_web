const x = 'Global'

function z(){
  const x = 'Local'
  function w(){
    return x
  }

  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())