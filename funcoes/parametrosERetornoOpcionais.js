function area(altura, largura){
  const area = altura * largura
  if(altura * largura > 50){
    console.log(`A área estrapola os limites! ${area}m²`)
  }else{
    return area
  }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area(10, 2, 3 , 12, 44))
console.log(area(10, 6))
let areaAlocada =  area(10, 6)
console.log(areaAlocada)