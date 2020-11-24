var showForm = document.querySelector(".form--save");
var btnAdd = document.querySelector(".btn--add");
var btnSave = document.querySelector(".btn--save");
var table = document.getElementById("table");

// lay value cua input

var ip_name = document.querySelector(".inpt--name");
var ip_email = document.querySelector(".inpt--email");
var ip_age = document.querySelector(".inpt--age");

var array = [

];


// construstor function

function Table (id,name,email,age){
    this.id = id;
    this.name = name;
    this.email =email;
    this.age = age;
}


// show form

function ShowForm(){
    showForm.classList.remove("d-none");
    btnAdd.classList.add("d-none");

}



function Hidden(){
    showForm.classList.add("d-none");
    btnAdd.classList.remove("d-none");
    GetValue();
}


function GetValue(){
    var tr = document.querySelectorAll("tr");
    let id = tr.length;
    let name = ip_name.value;
    let email = ip_email.value;
    let age = Number(ip_age.value);
    let obj = new Table(id,name,email,age);

    if(name == "" || email == "" || age <= 0){
        alert("Nhap lai nam hoac email hoac age");
    }else{
        array.push(obj);
        Render(array);
    }
}


// them tr

function Render(row) {

    var tr ="";
    
    for (i of row){
        if (row.length > 0){
            tr = `
            <tboy>
                    <tr>
                        <td>${i.id}</td>
                        <td>${i.name}</td>
                        <td>${i.email}</td>
                        <td>${i.age}</td>
                        <td><button class="btn--red" >Xoa </button></td>
                    </tr>
            </tboy>
            `;
            table.innerHTML += tr;
        }
    }
    // if(row.length > 0){
    //     tr = `
    //         <tboy>
    //                 <tr>
    //                     <td>${row[row.length -1].id}</td>
    //                     <td>${row[row.length -1].name}</td>
    //                     <td>${row[row.length -1].email}</td>
    //                     <td>${row[row.length -1].age}</td>
    //                     <td><button class="btn--red" >Xoa </button></td>
    //                 </tr>
    //         </tboy>
    //         `;
    //     table.innerHTML += tr;
    // }
}
Render(array);

// search

var search = document.querySelector(".btn--search");

search.addEventListener("click",Search);

function Search(){
    var key_search = document.querySelector(".inpt--search").value;
    GetValueSearch(key_search,array);
}



function GetValueSearch(key1,array){
    console.log(key1);
    if(array.length > 0){
       var list = array.filter(key=> key1 == key.name);
       console.log(list);
       Render(list)
    }
}



// remove

function Remove(id,array){

}