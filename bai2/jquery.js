
var array =[
    {
        id:"Id",
        name:"Name",
        email:"Email",
        age:"Age"
    }
]



$(document).ready(function (){
    $(".btn--add").click(function (){
        $(this).hide();
        $(".form--save").removeClass("d-none");
    });

    $(".btn--save").click(function (){
        $(".form--save").addClass("d-none");
        $(".btn--add").show();
        $("#table").html(Render(array))
    })

})

// render

function  Render(data){
    for(i of data){
        var html = `
            <tr>
                <th>${i.id}</th>
                <th>${i.name}</th>
                <th>${i.email}</th>
                <th>${i.age}</th>
                <th><button>Xoa</button></th>
            </tr>
        `;
    }

    return html;
}