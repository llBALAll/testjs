
console.log("\nimportando funcao de modulo no node.js");
const funcSoma = require("./soma_node.js");
console.log("A soma eh:", funcSoma(4,5));

console.log("\nimportando modulo no node.js");
const myUtils = require("./myUtils_node.js");

console.log("\nobtendo nomes de classes de modulo no node.js");
console.log(myUtils)
console.log(Object.getOwnPropertyNames(myUtils))
console.log(Object.getOwnPropertyNames(myUtils).toString())

console.log("\nobtendo nomes de funcoes/metodos de classe de modulo no node.js");
console.log(myUtils.Calc);
// console.log(myUtils.Calc.prototype);
console.log(myUtils.Calc.constructor);
// console.log(myUtils.Calc.constructor.prototype);
// console.log(Object.getOwnPropertyNames(myUtils.Calc));
if( myUtils.Calc.prototype != null ) {
    console.log(Object.getOwnPropertyNames(myUtils.Calc.prototype));
    console.log("\nusando funcao/metodo de classe de modulo no node.js, ex1");
    console.log("A soma eh:", myUtils.Calc.prototype.sum(4,5));

    console.log("\nusando funcao/metodo de classe de modulo no node.js, ex2");
    const myUtils_Calc_soma = myUtils.Calc.prototype.sum;
    console.log("A soma eh:", myUtils_Calc_soma(4,5));

    console.log("\nusando funcao/metodo de classe de modulo no node.js, ex3");
    console.log("instanciando classe de modulo no node.js");
    const myUtils_Calc = new myUtils.Calc();
    console.log("A soma eh:", myUtils_Calc.sum(4,5))
}else {
    console.log(Object.getOwnPropertyNames(myUtils.Calc.constructor.prototype));
    console.log("\nusando funcao/metodo de classe de modulo no node.js, ex4");
    console.log("instanciando classe de modulo no node.js");
    console.log("A soma eh:", myUtils.Calc.sum(4,5))
}
