// funcao sem retorno
function imprimeSoma(a, b){
    console.log(a + b)
}

imprimeSoma(1 , 2)
imprimeSoma(3)
imprimeSoma(10, 12, 13 ,14, 15, 17)

// funcao com retorno

function soma(a, b = 0){
    const soma = a + b;

    return soma
}

let resultado = soma(4, 5)
console.log(resultado)

console.log(soma(3,1))
console.log(soma(1))