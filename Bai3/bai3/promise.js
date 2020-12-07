

// dau vao la array


// output la 1 list danh sach trong array do

let arr = [1,2,3,4,5];


const prmit = new Promise((res,rej)=>{

    if(arr.length > 0){
        res(arr);
    }
    rej("array rong");
})
prmit.then((data)=>{
    data.map((item,key)=>{
        console.log(item);
    })
})
.catch ((err)=> console.log(err))
