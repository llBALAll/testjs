
const http = require('http')
const https = require('https')
// const fs = require('fs');                // uncomment if use server https (https.createServer)
// const https_options = {                  // uncomment if use server https (https.createServer)
//   key: fs.readFileSync('key.pem'),       // uncomment if use server https (https.createServer)
//   cert: fs.readFileSync('cert.pem')      // uncomment if use server https (https.createServer)
// };                                       // uncomment if use server https (https.createServer)

const port = 8000

http.createServer((req, res) => {
// https.createServer(https_options, (req, res) => {                // uncomment to use server https
    
    // const headers = {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        // 'Access-Control-Allow-Origin': 'http://localhost:8888',
        // 'Access-Control-Max-Age': 2592000, // 30 days
    // };

    res.setHeader('Access-Control-Allow-Headers', '*')
    // res.setHeader('Access-Control-Request-Method', '*')
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Origin', '*')
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888')
    // res.setHeader('Access-Control-Allow-Credentials', true) 

    if (req.method === 'OPTIONS') {
        res.writeHead(204)
        // res.writeHead(204, headers)
        res.end()
        return;
    }

    if (['GET', 'POST'].indexOf(req.method) > -1) {       
        let reqUrl = req.url.slice(1, req.url.length)      

        if (reqUrl.slice(0, reqUrl.indexOf(':')) === 'http') {
            const cReq = http.request(reqUrl, (cRes) => {
                let data = ''
                cRes.on('data', (chunk) => {
                    data += chunk
                });
                cRes.on('end', () => {
                    // console.log(JSON.parse(data))
                    // console.log(data)
                    res.writeHead(200)
                    res.write(data)
                    res.end('')
                })
            }).on('error', (error) => {
            //   console.log("Error: " + err.message)
                console.error(error)
            })
            cReq.end()
        } else if (reqUrl.slice(0, reqUrl.indexOf(':')) === 'https') {
            // https.get(reqUrl, (cRes) => {
            const cReq = https.request(reqUrl, (cRes) => {
                let data = ''
                cRes.on('data', (chunk) => {
                    data += chunk
                });
                cRes.on('end', () => {
                    // console.log(JSON.parse(data))
                    // console.log(data)
                    res.writeHead(200);
                    res.write(data)
                    res.end('')
                })
            }).on('error', (error) => {
                console.error(error)
                // console.log("Error: " + err.message)
                // res.write("Error: " + err.message)
                // res.end('')
            })
            cReq.end()
        } else {
            res.writeHead(404)
            // res.end("Error: 404, Page not found!")
            // res.writeHead(200);
            // res.writeHead(200, {'Content-Type': 'text/html'})
            res.write('This is a proxy server to bypass CORS policy (Access-Control-Allow-Origin).')
            res.write('\nTo use this server make request http in this format: (http://localhost:8000/URI)')
            res.end('\nEx: http://localhost:8000/https://www.google.com)')
        }

        return;
    }

    res.writeHead(405)
    // res.writeHead(405, headers)
    res.end(`${req.method} is not allowed for the request.`)
}).listen(port)
