function lancarErro(e){
  throw new Error('Houve um erro na formatação!');
}

function formataNumero(obj){
  try{
    console.log(obj.number.toFixed(2))
  }catch(e){
    lancarErro(e)
  }
}

formataNumero({numero: 25.5});