const express = require('express');
const fs = require('fs');
const router = express.Router()
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

router.get('/',async (request,response)=>{
    const content = await readFilePromise('koders.json')
    let kodersData = content.koders;
    const { generation, gender, name, count } = request.query
    if(generation){
        kodersData = kodersData.filter(koder => koder.generation === parseInt(generation))
    }
    if(gender){
        kodersData = kodersData.filter(koder => koder.gender === gender)
    }
    if(name){
        kodersData = kodersData.filter(koder => koder.name === name)
    }
    if(count){
        numberOfKoders = count > content.koders.length ? kodersData.length : count;
        kodersData = kodersData.slice(0,numberOfKoders);
    }
    content.koders = kodersData || content.koders
    response.status(200).json({
        success:true,
        message:'All Koders',
        data: {
            koders: content.koders
        }
    })
})
router.get('/:id',async (request,response)=>{
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
router.post('',async (request,response)=>{
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
router.patch('/:id',async (request,response)=>{
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
router.delete("/:id",async (request,response)=>{
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
module.exports = router