

// input : thoi tiet nang mua


// output : khong di choi dc do thoi tiet qua xau


let thoiTiet = "xau1"
let x = "thoi tiet xau quas"
function danhGia(x) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(x)
        }, 2000)
    })
}

function yesNo(thoiTiet) {
    return new Promise((res, rej) => {
            if (thoiTiet === "xau") {
                res("khong di choi nua")
            } else {
                res("van di choi dc")
            }
    })
}

async function run(){
    const a = await danhGia(x)
    const b = await yesNo(thoiTiet)
    console.log(a)
    console.log(b)
}

run();