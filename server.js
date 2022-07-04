const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((request, response) => {

    // lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();


    // set header content type
    response.setHeader('Content-Type', 'text/html');


    let path = './views/';
    switch (request.url) {
        case '/':
            path += 'index.html';
            response.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            response.statusCode = 200;
            break;
        case '/about-blah':
            response.setHeader('Location', './about');
            response.statusCode = 301;
            response.end();
            break;
        default:
            path += '404.html';
            response.statusCode = 404;
            break;
    }



    // send an html file
    fs.readFile(path, (error, data) => {
        if (error) {
            console.log(error);
            response.end();
        } else {
            // response.write(data);
            response.end(data);
        }
    });
});


server.listen(3000, 'localhost', () => {
    console.log('lestening for request on port 3000');
});