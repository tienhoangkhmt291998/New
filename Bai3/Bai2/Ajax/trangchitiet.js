
var url_string = window.location.href;
var url = new URL(url_string);
var c = Number(url.searchParams.get("id"));

var arr=[];

function getData(id){

    return new Promise((res,rej)=>{
        $.ajax({
            type: "get",
            url: `https://jsonplaceholder.typicode.com/todos/${id}`,
            success:res,
            fail:rej
        });
    })
}
// goi data
getData(c)
    .then((data)=>{
        arr.push(data);
        Render(data);
    })
    .catch((err)=>console.log(err));


function Render(data){
   var col =  `
    <div class="col-xl-3 col-md-3 col-sm-6 pdd">
        <div class="card" style="width: auto;">
            <img src="https://cdn1.viettelstore.vn/images/Product/ProductImage//Note20-Ultra-2311.jpg" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a class="btn btn-primary"  onclick="SaveLocal()" > Them vao gio hang </a>
            </div>
        </div>
    </div>
    `;
    $("#list-item").html(col);
}

function SaveLocal(){
    localStorage.setItem("items",JSON.stringify(arr))
    var x = JSON.stringify(localStorage.getItem("items"));


    add(x);

}
function add(arr){
    console.log(arr);
    localStorage.setItem("arr",)
}
