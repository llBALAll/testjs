
// este script executa um get http na url passada como argumento e retorna e os dados de resposta
// ex: node http_request.js "https://www.google.com"

if (process.argv.length != 3) {
    console.log('\n Usage: node ' + __filename.slice(__dirname.length + 1) + ' \"URL\"')
    console.log('    ex: node ' + __filename.slice(__dirname.length + 1) + ' \"https://google.com/\"')
    process.exit(1)
}

const http = require('http')
const https = require('https')

// const options = {
//     hostname: process.argv[2],
//     port: 8888,
//     path: '/',
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//     },
// }

if (process.argv[2].slice(-process.argv[2].length, process.argv[2].indexOf(':')) === 'http') {
    http.request(process.argv[2], (resp) => {
        let data = ''
        resp.on('data', (chunk) => {
            data += chunk
        });
        resp.on('end', () => {
            // console.log(JSON.parse(data))
            console.log(data)
        })
    }).on("error", (err) => {
      console.log("Error: " + err.message)
    })
} else if (process.argv[2].slice(-process.argv[2].length, process.argv[2].indexOf(':')) === 'https') {
    https.get(process.argv[2], (resp) => {
        let data = ''
        resp.on('data', (chunk) => {
            data += chunk
        });
        resp.on('end', () => {
            // console.log(JSON.parse(data))
            console.log(data)
        })
    }).on("error", (err) => {
      console.log("Error: " + err.message)
    })
} else {
    console.log("Error: Check URL input")
}
