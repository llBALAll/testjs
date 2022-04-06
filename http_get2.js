
// este script executa um get http na url passada como argumento e retorna o os dados de resposta,
// utiliza o modulo request

if (process.argv.length != 3) {
    console.log('\n Usage: node ' + __filename.slice(__dirname.length + 1) + ' \"URL\"')
    console.log('    ex: node ' + __filename.slice(__dirname.length + 1) + ' \"https://google.com/\"')
    process.exit(1)
}

var request = require("request")

var parseMyAwesomeHtml = function(vContent) {
    console.log(vContent)
}

request(process.argv[2], (error, response, body) => {
    if (error) { return console.log(error) }
    // console.log("Status code: " + response.statusCode)
    parseMyAwesomeHtml(body)
})
