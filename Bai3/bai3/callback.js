

function GoiCon(){
    console.log("hoang oi xuong an com")
}


function Bo(naucom){

    console.log("bo di cho ve chuan bi nau com");
    naucom();
    GoiCon();
    // nauXong(GoiCon);
    nauXong()
}


function NauCom(){
    console.log("dang nau com");

}


function nauXong(goicon){
    setTimeout(()=>{
        console.log("bo nau com xong roi");
        // goicon();
    },3000)
}

Bo(NauCom);