const express = require('express');

const server = express();

server.get('/',(request,response)=>{
    response.writeHead(200,{'Content-Type':'application/json'})
    let message = {message: "Ocurrio algo inesperado"};
    let stringyfiedMessage = JSON.stringify(message);
    response.write(stringyfiedMessage);
    response.end();
});
server.get('/mentors',(request,response)=>{
    let message = {message: "Mentors GET"};
    let stringyfiedMessage = JSON.stringify(message);
    response.write(stringyfiedMessage);
    response.end();
});
server.post('/mentors',(request,response)=>{
    let message = {message: "Mentors POST"};
    // let stringyfiedMessage = JSON.stringify(message);
    // response.write(stringyfiedMessage);
    // response.end();
    response.status(201).json(message)
});
server.listen(8080,()=>{
    console.log("Server Runnin http://locahost:8080");
})