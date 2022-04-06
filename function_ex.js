// o javascript tem Hoisting, ou seja, todas as declaracoes serao movidas para o topo do codigo antes da execucao
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope


console.log(soma(8, 12))

// declaracao de funcao
function soma (num1, num2) {
    return num1 + num2;
}

// observe q nao acontece Hoisting quando de utiliza expressao de funcao, por isso ocorre erro
/* 
console.log(soma2(2, 6))

// expressao de funcao
let soma2 = function (num1, num2) {
    return num1 + num2;
}
 */

 // expressao de funcao no modo arrow
let soma3 = (num1, num2) => {
    return num1 + num2;
}
console.log(soma3(4, 6))
