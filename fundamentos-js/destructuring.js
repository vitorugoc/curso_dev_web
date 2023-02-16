const imovel = {
  cidade: "Belo Horizonte",
  estado: "Minas Gerais",
  logradouro: {
    rua: "ABC",
    numero: "1235"
  }
}

const { cidade, estado } = imovel
console.log(cidade, estado)
let {cidade:c , estado:e} = imovel
console.log(c, e)

let { logradouro: {rua, numero}} = imovel
console.log(rua, numero)

const { aleatorio = 0, teste = "Blbalbalba"} = imovel
console.log(aleatorio, teste)

let { iptu: {valor, taxa }} = imovel

const imvoel = {
  tipoLogradouro: "casa",
  cidade: "Natal",
  estado: "Rio Grande do Norte",
  logradouro: {
    rua: "ABC",
    numero: "312",
    bairro: "Fulano de tal"
  }
}