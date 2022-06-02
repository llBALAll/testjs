
class Path {
    constructor () {
    }
    getFullPath () { return __filename }
    getPath () { return __dirname }
    getFileName () { return __filename.slice(__dirname.length + 1) }
    getFileNameNoExt () { return __filename.slice(__dirname.length + 1, __filename.lastIndexOf('.')) }
    getExt () { return __filename.slice(__filename.lastIndexOf('.'), __filename.length) }
}

class Calc {
    constructor () {
    }
    sum(a,b) { return a + b }
    sub(a,b) { return a - b }
    mul(a,b) { return a * b }
    div(a,b) { return a / b }
}


// exportar classes para importar em arquivo html (ex 1)
//export const myUtils = {
//    Path: Path,
//    Calc: Calc
//};

// exportar classes para importar em arquivo html (ex 2) 
//export default {
//    Path: Path,
//    Calc: Calc
//};

// exportar classes para importar em arquivo html (ex 3) 
export default class {
    constructor () {
    }
    static Path = new Path();
    static Calc = new Calc();
};

