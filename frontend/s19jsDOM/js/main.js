let names = ["Jesus","Alfred","Mike","Ubaldo","Jon"]
//Find DOM Elements
let bodyElement = document.querySelector("body")
let script = document.querySelector("script")
//Create a virtual ul element
let unorderedList = document.createElement("ul")

bodyElement.insertBefore(unorderedList,script)


names.forEach((name,index)=>{
    //Create Paragraph
    let paragraphElement = document.createElement("li")
    var textnode = document.createTextNode(name)   

    //Append text to the li item
    paragraphElement.appendChild(textnode)
    //Insert the li node into the ul
    unorderedList.appendChild(paragraphElement)
})
