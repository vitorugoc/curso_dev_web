let nome = 'Vitor'
let profissao = 'Programador'

let template = `${nome} 
é um 
${profissao}`

console.log(nome + ' é um ' + profissao);
console.log(template)


function soma(a, b){
    return a + b
}
let template2 = `1 + 1 é igual a: ${soma(1, 1)}`

console.log(template2)