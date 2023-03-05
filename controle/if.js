function notaFinal(nota){
  if(nota > 6){
    console.log("Aluno aprovado!");
  }
}

notaFinal(5)
// notaFinal(6.1)
notaFinal(6)

function imprimeSeVerdade(valor){
  if(valor){
    console.log('Executado!')
  }
}

imprimeSeVerdade()
imprimeSeVerdade(null)
imprimeSeVerdade(1)
imprimeSeVerdade([1, 4])