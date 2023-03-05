function decisao(clausula1, clausula2){
  const irAFesta = clausula1 && clausula2;

  const irAoClube = clausula1 || clausula2;

  const sairParaPassear = clausula1 != clausula2

  const engordar = !clausula1

  console.log(irAFesta, irAoClube, sairParaPassear, engordar)
}

decisao(true, true)
decisao(true, false)
decisao(false, false)