const http = require('http');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const server = http.createServer((request,response)=>{
    const path = request.url;
    const method = request.method;
    console.log(path, method)
    if(path === '/mentors'){

        switch(method){
            case 'GET':
                response.write('Aqui encontraras a los mentores de kodemia');
            break;
            case 'POST':
                response.write('Aqui podrás crear un mentor')
            break;
            default:
                response.write('No se esperaba esto')
            break;
        }
    } else{
        response.write('No se esperaba esto')
    }
    

    
    response.end()
})

server.listen(8080,()=>{
    console.log('Server Running in http://localhost:8080')
})