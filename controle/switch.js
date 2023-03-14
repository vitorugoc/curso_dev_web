const notaFinal = function (nota){
  switch(nota){
    case 10:
    case 9:
      console.log('Honra ao mérito')
      break;
    case 8:
    case 7:
    case 6:
      console.log('Você passou de ano')
      break;
    case 5:
      console.log("Foi quase!")
      break;
    case 4:
    case 3:
      console.log("Estude mais!")
      break;
    case 2:
    case 1:
      console.log('Você está em recuperação!')
      break;
    default:
      console.log("Nota inválida")
  }
}

notaFinal(5)