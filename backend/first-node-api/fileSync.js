const { response } = require('express');
const express = require('express');


const fs = require('fs');
const server = express();
server.use(express.json())
const objectKodemia = JSON.parse(fs.readFileSync('./koders.json'))

function readFilePromise(pathToRead){
    return new Promise((resolve,reject)=>{
        fs.readFile(pathToRead,'utf8',(err,content)=>{
            if(err){
                reject(err)
            }else{
                const json  = JSON.parse(content)
                resolve(json)
            }
        })
    })
}


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
server.get('/koders',async (req,res)=>{
    const content = await readFilePromise('koders.json')
    res.status(200).json({
        success:true,
        message:'All Koders',
        data: {
            koders: content.koders
        }
    })
})
server.get('/koders/:id',async (request,response)=>{
    const { id } = request.params
    const content = await readFilePromise('koders.json')
    const koder = content.koders.filter(koder=>{
        return koder.id === parseInt(id)
    })[0]
    response.status(200).json({
        success:true,
        message:'Your koder is',
        data: {
            koder: koder
        }
    })
})
server.post('/koders',async (request,response)=>{
    const newKoder = request.body
    console.log(newKoder)
    const content = await readFilePromise('koders.json')
    content.koders.push(newKoder);
    fs.writeFileSync("koders.json",JSON.stringify(content,null,2),"utf8")
    response.status(201)
    response.json({
        success:true,
        message:'Koder Added',
        data: {
            koder: newKoder
        }
    })
})
server.patch('/koders/:id',async (request,response)=>{
    const { id } = request.params
    const { name, generation } = request.body
    const content = await readFilePromise('koders.json')

    const newKoders = content.koders.map((koder)=>{
        if(koder.id === parseInt(id)){
            if(!name)
                koder = {...koder,generation};
            else if(!generation)
                koder = {...koder,name};
            else
                koder = {...koder,name,generation};
        }
        return koder
    })
    content.koders = newKoders
    fs.writeFileSync("koders.json",JSON.stringify(content,null,2),"utf8")
    response.status(200)
    response.json({
        success:true,
        message:'Koder Updated'
    })
})
server.delete("/koders/:id",async (request,response)=>{
    const { id } = request.params
    const content = await readFilePromise('koders.json')
    content.koders = content.koders.filter(koder => {
        return koder.id != parseInt(id)
    })
    fs.writeFileSync("koders.json",JSON.stringify(content,null,2))
    response.status(200).json({
        success: true,
        message: "Koder Deleted"
    })
})

server.listen(8080,()=>{
    console.log("Server Runnin http://localhost:8080");
})