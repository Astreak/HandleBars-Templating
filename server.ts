const http = require("http");
const fs = require("fs");

const reqL = (req, res) => {
    req.headers["content-type"] = "text/html";
    var obj = {
        "name": "prj",
        "age":12
    }
    
    fs.readFile("./public/home.html", (err, data) => {
        if (err) {
            res.statusCode = 404;
            res.end("Error");
        }
        else {
            res.statusCode = 200;
            res.setHeader("Cookie", "Hello wolrd");
            console.log(res.connection);
            res.writeHead(200, { 'content-type': "text/html" });
            res.write(data);
            res.end();
            
            
        }
    });
}

const server = http.createServer(reqL);
server.listen(4000, 'localhost', () => {
    console.log(`Server is running localhost port 4000`);
})