
class Path {
    constructor () {
    }
    getFullPath () { return __filename }
    getPath () { return __dirname }
    getFileName () { return __filename.slice(__dirname.length + 1) }
    getFileNameNoExt () { return __filename.slice(__dirname.length + 1, __filename.lastIndexOf('.')) }
    getExt () { return __filename.slice(__filename.lastIndexOf('.'), __filename.length) }
}
// module.exports = Path;
// const mu_Path = new Path()
// console.log(mu_Path.getFullPath())

class Calc {
    constructor () {
    }
    sum(a,b) { return a + b }
    sub(a,b) { return a - b }
    mul(a,b) { return a * b }
    div(a,b) { return a / b }
}
// module.exports = Calc;
// const mu_Calc = new Calc();
// console.log(mu_Calc.sum(5,15));

// exportar classes para importar em arquivo node.js (ex 1)
// const myUtils = {
   // Path: Path,
   // Calc: Calc
// };
// module.exports = myUtils
// console.log(myUtils2.Calc.prototype.sum(2,5))
    
// exportar classes para importar em arquivo node.js (ex 2)
// module.exports = {
   // Path: Path,
   // Calc: Calc
// };

// exportar classes para importar em arquivo node.js (ex 3)
module.exports = class {
    constructor () {
    }
    static Path = new Path();
    static Calc = new Calc();
}
