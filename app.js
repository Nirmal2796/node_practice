const http = require('http');

const server = http.createServer((req, res) => {
   
    if (req.url === '/home') {
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if (req.url === '/about') {
        res.write('<html>');
        res.write('<head><title>About us</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
        return res.end();
    }

    if (req.url === '/node') {
        res.write('<html>');
        res.write('<head><title>Node Js Project</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        return res.end();
    }
    
    res.setHeader('content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my node js server </h1></body>');
    res.write('</html>');
    res.end();
})

server.listen(4000);