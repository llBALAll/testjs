
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
// console.log(mu_Path.getPath())
// console.log(mu_Path.getFileName())
// console.log(mu_Path.getFileNameNoExt())
// console.log(mu_Path.getExt())

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


module.exports = {
    Path: Path,
    Calc: Calc
};
