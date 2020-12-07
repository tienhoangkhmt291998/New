

function Nhap(){
    let x = "nguyen tien";

    console.log(x);
    setTimeout(()=>{
        FullName(x);
    },2000)
}
function FullName(fullname){
    console.log(fullname + " hoang");
}
Nhap();