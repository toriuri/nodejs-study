// Nodejs야 니가 기본적으로 가지고 있는 기능 중에서 http 모듈을 가져와봐! 
var http = require('http');
var server = http.createServer(
    function(request, response){
        // favicon.icon는 좀 무시해!
        if(request.url == '/favicon.ico'){
            return response.writeHead(404);
        }
        console.log(request.url);
        var content = `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <title>WEB</title>
        </head>
        <body>
            <h1><a href="index.html">WEB</a></h1>
            <ol>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">Javascript</a></li>
                <li><a href="4.html">Nodejs</a></li>
            </ol>
            <h2>HTML</h2>
            HTML is Hyper Text Markup Language
        
        </body>
        </html>
        `;
        response.write(content);
        response.end();
    }
);
server.listen(3000);



















// var http = require('http');
// var fs = require('fs');
// var app = http.createServer(function(request,response){
//     var url = request.url;
//     if(request.url == '/'){
//       url = '/index.html';
//     }
//     if(request.url == '/favicon.ico'){
//       return response.writeHead(404);
//     }
//     response.writeHead(200);
//     response.end(fs.readFileSync(__dirname + url));

// });
// app.listen(3000);