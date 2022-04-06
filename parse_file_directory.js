console.log("Diretorio onde comando foi executado:", process.cwd());
console.log('\n')
console.log("Fullpath do node:", process.argv[0])
console.log("Fullpath do script:", process.argv[1])
console.log("Fullpath do script:", __filename)
console.log("Diretorio do script:", __dirname)

// function getFileName(){
//     return __filename.slice(__dirname.length + 1)
// }
const getFileName = () => __filename.slice(__dirname.length + 1)
console.log("Filename do script:", getFileName())

// function getFileNameNoExt(){
//     // return getFileNameExt().slice(0, getFileNameExt().lastIndexOf('.'))
//     return __filename.slice(__dirname.length + 1, __filename.lastIndexOf('.'))
// }
const getFileNameNoExt = () => __filename.slice(__dirname.length + 1, __filename.lastIndexOf('.'))
console.log("Filename sem extensao do script:", getFileNameNoExt())

// function getExtension() {
//     return __filename.slice(__filename.lastIndexOf('.'), __filename.length)
// }
const getExt = () => __filename.slice(__filename.lastIndexOf('.'), __filename.length)
console.log("Extensao do script:", getExt())

// function getExtFrom_1(v_str) {
//     let __extension = ''
//     const extPos = v_str.lastIndexOf('.')
//     for (let i=extPos; i<=v_str.length - 1; i++){
//         __extension += v_str[i]
//     }
//     return __extension
// }
// console.log(getExtFrom_1(getFileName()))

// function getExtFrom_2(v_str) {
//     return v_str.slice(v_str.lastIndexOf('.'), v_str.length)
// }
// console.log(getExtFrom_2(getFileName()))

/////////////////////////////////////////////////////////////////////

var path = require("path")

var filename = path.basename(__filename)
var name = path.parse(__filename).name
var extension = path.extname(filename)

console.log('\n')
console.log(filename)
console.log(name)
console.log(extension)


/////////////////////////////////////////////////////////////////////

// function measure_time(fn) {
//     // console.log('1')
//     let date = Date.now()
//     let currentDate = null
//     fn()
//     currentDate = Date.now();
//     let duration = currentDate - date
//     // console.log('2');
//     console.log(`the function took time: ${duration}ms`)
// }


// function test1() {
//     for (let i=0;i<=1000000;i++){
//         tempvar1 = () => __filename.slice(__dirname.length + 1)
//     }
// }
// measure_time(() => test1())

// function test2() {
//     for (let i=0;i<=1000000;i++){
//         tempvar2 = () => __filename.slice(__dirname.length + 1, __filename.lastIndexOf('.'))
//     }
// }
// measure_time(() => test2())

// function test3() {
//     for (let i=0;i<=1000000;i++){
//         tempvar3 = () => __filename.slice(__filename.lastIndexOf('.'), __filename.length)
//     }
// }
// measure_time(() => test3())

// function test11() {
//     for (let i=0;i<=1000000;i++){
//         tempvar11 = path.basename(__filename)
//     }
// }
// measure_time(() => test11())

// function test22() {
//     for (let i=0;i<=1000000;i++){
//         tempvar22 = path.parse(__filename).name
//     }
// }
// measure_time(() => test22())

// function test33() {
//     for (let i=0;i<=1000000;i++){
//         tempvar33 = path.extname(filename)
//     }
// }
// measure_time(() => test33())