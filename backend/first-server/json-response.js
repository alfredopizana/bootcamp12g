
const http = require('http');

const server = http.createServer((request,response)=>{
    response.writeHead(200,{"Content-Type":"application/json"})
    const bodyResponse = {
        message: "This is the Message",
        other_attribute: "Other attribute"
    }
    const stringifiedResponse = JSON.stringify(bodyResponse)
    response.write(stringifiedResponse)
    response.end()
})
server.listen(8080,()=>{
    console.log('Server Running in http://locahost:8080')
})