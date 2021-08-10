const { response } = require('express');
const express = require('express');
const routerKoders = require('./routers/koders.js')
const routerMentors = require('./routers/mentors.js')

const server = express();
server.use(express.json())
server.use('/koders',routerKoders)
server.use("/mentors", routerMentors)
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

server.get('/read',(req,res)=>{
    readFilePromise('koders.json')
    .then((content)=>{
        const arrayKoders = JSON.parse(content);
        res.json({arrayKoders})
    })
    .catch((err)=>{
        res.status(400).json({error:"No se pudo leer archivo"})
    })
})


server.listen(8080,()=>{
    console.log("Server Runnin http://localhost:8080");
})