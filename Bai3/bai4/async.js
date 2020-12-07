
$.ajax({
    url:"https://jsonplaceholder.typicode.com/todos/33",
    post:"get",
    success:function(data){
        // x.push(data);
        console.log(data);
        GetData(data);
    },
    fail:function(err){
        console.log(err)
    }
})