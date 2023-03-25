const vendas = [98.00, 120.00, 80.00, 130.00, 58.00, 62.00]

//Sem callback
let vendasAbaixoMeta = []
for(i in vendas){
  if(vendas[i] < 100.00){
    vendasAbaixoMeta.push(vendas[i])
  }
}

console.log(vendasAbaixoMeta)

//Com callback
vendasAbaixoMeta = vendas.filter(venda => venda < 100.00)

console.log(vendasAbaixoMeta)