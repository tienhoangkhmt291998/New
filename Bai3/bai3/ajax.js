
var x = [];

$.ajax({
    url:"https://jsonplaceholder.typicode.com/todos",
    post:"get",
    success:function(data){
        x.push(data);
        console.log(data);
        GetData(data);
    },
    fail:function(err){
        console.log()
    }
})

function GetData(data){
    console.log(data);
}
