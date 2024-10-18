// event bubbling

/* document.querySelector(".container").addEventListener("click",run1);

function run1(e){
    console.log("Div container");
}

document.querySelector(".card.row").addEventListener("click",run2);

function run2(e){
    console.log("card row");
}

document.querySelectorAll(".card-body")[1].addEventListener("click",run3);

function run3(e){
    console.log("card body");
}
 */


// event capturing veya delegation

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run);

function run (e){
    if (e.target.className === "fa fa-remove"){
        console.log("Silme işlemi")
    }    
    if (e.target.id === "filter"){
        console.log("filtreleme işlemi");
    }    
    if (e.target.id === "clear-todos"){
        console.log("Bütün taskları silme işlemi")
    }
    // console.log(e.target);
}