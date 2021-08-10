const express = require("express");
const fs = require('fs');
const { reset } = require("nodemon");
const router = express.Router();


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
router.get("/",async (request,response)=>{
    const content = await readFilePromise("koders.json")
    let mentorsData = content.mentors
    const {name,module} = request.query
    if(name){
        mentorsData = mentorsData.filter(mentor => mentor.name === name)
    }
    if(module){
        mentorsData = mentorsData.filter(mentor => mentor.module === module)
    }
    content.mentors = mentorsData || content.mentors
    response.status(200).json({
        sucess:true,
        message: "Mentors",
        data: {
            mentors: content.mentors
        }
    })
})
router.get("/:id",async (request,response)=>{
    const content = await readFilePromise("koders.json")
    let mentorsData = content.mentors
    const {id} = request.params

    content.mentors = content.mentors.filter(mentor => mentor.id = id)[0]
    response.status(200).json({
        sucess:true,
        message: "Your Mentor is",
        data: {
            mentors: content.mentors
        }
    })
})
router.post('',async (request,response)=>{
    const newMentor = request.body
    const content = await readFilePromise('koders.json')
    content.mentors.push(newMentor);
    fs.writeFileSync("koders.json",JSON.stringify(content,null,2),"utf8")
    response.status(201)
    response.json({
        success:true,
        message:'Koder Added',
        data: {
            koder: newMentor
        }
    })
})
router.patch('/:id',async (request,response)=>{
    const { id } = request.params
    const { name, module } = request.body
    const content = await readFilePromise('koders.json')

    const newMentors = content.mentors.map((mentor)=>{
        if(mentor.id === parseInt(id)){
            if(!name)
                mentor = {...mentor,module};
            else if(!module)
                mentor = {...mentor,name};
            else
                mentor = {...mentor,name,module};
        }
        return mentor
    })
    content.mentors = newMentors
    fs.writeFileSync("koders.json",JSON.stringify(content,null,2),"utf8")
    response.status(200)
    response.json({
        success:true,
        message:'Mentors Updated'
    })
})
router.delete("/:id",async (request,response)=>{
    const { id } = request.params
    const content = await readFilePromise('koders.json')
    content.mentors = content.mentors.filter(mentor => {
        return mentor.id != parseInt(id)
    })
    fs.writeFileSync("koders.json",JSON.stringify(content,null,2))
    response.status(200).json({
        success: true,
        message: "Mentor Deleted"
    })
})
module.exports = router