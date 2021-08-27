


const promesa = new Promise((resolve,reject)=>{
    const todoVaBien = true;
    setTimeout(()=>{
        if(todoVaBien){
            resolve('ok');
        } else {
            reject('Something went wrong')
        }
    },3000)

    console.log('se ejecuta promesa')
})

//promesa
// .then((response)=>{
//     console.log(response)
// }).catch((response)=>{
//     console.log(response)
// })
const ejemploMuro = {
    construido: false,
    aplanado: false,
    pintado:false
}