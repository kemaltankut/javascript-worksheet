const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("Submit Event");




    e.preventDefault(); //default özelliği engeller
}

// filterInput.addEventListener("focus",function(e){

//     console.log(e); //parantez içine yazdığımız e hakkında bilgi verir
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
//     // console.log("naber");//aşağıdakinin aynısı

    
// });


// filterInput.onfocus = function(){//filter id li kısma odaklandığımızda konsole naber yazdırır
    // console.log("nABER");
// }



// console.log(filterInput):