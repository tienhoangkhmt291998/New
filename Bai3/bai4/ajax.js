



function getData(url){
    return new Promise((res,rej)=>{
        $.ajax({
            type: "get",
            url: url,
            success:res,
            fail:rej
        });
    })
}

async function get(url){
    const a = await getData(url);
    console.log(a);
}
get("https://jsonplaceholder.typicode.com/todos/2");