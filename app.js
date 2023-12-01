const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   
    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunks) => {
            body.push(chunks);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
           

        })
        
        
    }




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