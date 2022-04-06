const scriptName = __filename.slice(__dirname.length + 1);

if ((process.argv.length < 3) || (process.argv.length > 4)) {
    console.log("\n[Script to run a simple HTTP server]");
    console.log(`\n Usage: node ${scriptName} <port> <server_path>`);
    console.log(`\n <server_path> (optional), default: path that node was executed`);
    process.exit(1);
}

const http = require("http");
const fs = require("fs");

// const host = "localhost";
const host = "0.0.0.0";
const port = process.argv[2];
// let server_path = __dirname;
let server_path = process.cwd();

if (typeof(process.argv[3]) != "undefined") {
	if (fs.existsSync(process.argv[3])) {
		server_path = process.argv[3];
	} else {
		console.log("\nError: This directory <server_path> dont exist!");
		process.exit(1);
	}
}

const requestListener = function (req, res) {
	let requrlnobar = req.url.slice(1)
    switch (req.url) {
        case "/":
            fs.readFile(server_path + "\\index.html", function (err, html) {
                if (!err) {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(html);
                } else {
                    res.writeHead(404);
                    res.end("Error: 404, Page not found!");
                    res.end("");
                    // throw err;
                }
            });
            break;
        default:
            fs.readFile(server_path + "\\" + requrlnobar, function (err, html) {
                if (!err) {
					res.setHeader("Content-Disposition", "attachment; filename=" + requrlnobar);
					res.end(html);					

					// res.writeHead(200, {
						// 'Content-Type': "application/octet-stream",
						// "Content-Disposition": "attachment; filename=" + requrlnobar
					// });
					// fs.createReadStream(server_path + "\\" + req.url).pipe(res);
				} else {			
					res.writeHead(404);
                    res.end("Error: 404, Page not found!");
					res.end("");
					// throw err;
				}
            });
    }
}

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    // console.log(`Server is running at: http://${host}:${port}`);
    console.log("> HTTP server is running...");
    console.log(`> Path: ${server_path}`);
    console.log(`> URI: http://localhost:${port}`);
});
