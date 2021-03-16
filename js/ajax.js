$(function()  {

    $.ajax({
        url: "data.json",
        type: "GET",
        dataType: "json"

})
.done (function(res){
    console.log(res)
})

})
