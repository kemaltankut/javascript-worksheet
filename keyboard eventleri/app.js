// Klavye Eventleri
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent= e.target.value;
    // console.log(e.target.value);
}

// keypress
// document.addEventListener("keypress",run);//sadece sayıları özel karakterleri harfleri algılar

// function run(e){
//     console.log(e.which);//hangi karaktere bastığımızı gösterir
//     console.log(e.key);
//     console.log("naber");

     


// }



//keydown
// document.addEventListener("keydown",run);
// //keydownda ise bastığımız her tuş algılanır
// function run(e){
//     console.log(e.key);
// }



//keyup


// document.addEventListener("keyup",run);
// //keyup ise tuştan elimizi çektiğimizde çalışır
// function run(e){
//     console.log(e.key);
// }
