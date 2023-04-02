const val = 'Global'

function imprime(){
  console.log(val)
}

function imprime2(){
  const val = 'Local'
  imprime()
}

imprime2()