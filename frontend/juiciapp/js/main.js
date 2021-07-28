let url = 'https://portal.tjajal.org/consulta.php?dep=VI&fecha=&exp=1101%2F2020&actor=&demandado=&terceros=&cc=Boletin';

$.ajax(
    {
        url: url,
        method: 'GET',
        headers: { 'Access-Control-Allow-Origin': '*' },
        success: function(data){
            console.log(data)
        },
        async: false
    })
// jQuery cross domain ajax
$.get(url).done(function (data) {
    console.log(data);
});

// using XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.onload = function () {
    console.log(xhr.responseText);
};
xhr.send();

// using the Fetch API
fetch(url).then(function (response) {
    return response.json();
}).then(function (json) {
    console.log(json);
});
console.log("prueba")
    function bringComments(){
        /*let commentsObject;
        $.ajax({
            method:'GET',
            url:endPoint+'/comments/.json',
            success: function (result) {
                commentsObject = result;
            },
            async: false
        });
        let commentsArray = Object.values(commentsObject)
        return commentsArray;*/
    }
    