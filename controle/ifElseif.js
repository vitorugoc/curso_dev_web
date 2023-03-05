function notaFinal(valor){
  if(valor > 8 && valor <= 10){
    console.log("Honra ao mérito!")
  }else if(valor > 6 && valor <= 8){
    console.log("Aprovado!")
  }else if(valor > 4 && valor <= 6){
    console.log("Recuperação!")
  }else if(valor > 0 && valor <= 4){
    console.log("Reprovado!")
  }else{
    console.log("Nota inválida!")
  }
}

notaFinal(9)
notaFinal(7.5)
notaFinal(5)
notaFinal(3)
notaFinal(3210321)