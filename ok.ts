const Http = require('http');

const reqa = (req, res) => {
    req.headers['content-type'] = "text/plain";
    res.setHeader("Cookie", "Fuck off");
    res.setHeader("G", "ok");
    res.statusCode = 200;
    res.write("<h1> OK server </h1>");
    res.end();

}
const proxy = Http.createServer(reqa);
proxy.listen(3000, () => {
    console.log("Ok server connected"); 
});
