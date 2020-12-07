
var muaxe = false;

function DoDh(time){

    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(muaxe == false){
                res("van chua mua xe dc");
            }else{
                res("con do dh bo trao thuong cho con 1 chiec xe may")
            }
        },time)
    })
}


const lan1 = DoDh(3000);

lan1.then((data)=>{
    console.log("con vang truot dh");
    console.log(data);
})

.then(()=>{
    return DoDh(1000)
})
.then((data)=>{
    console.log("con vang truot dh");
    console.log(data);
})
.then(()=>{
    muaxe = true;
    return DoDh(3000)
},1000)
.then((data)=>{
    console.log(data);
})