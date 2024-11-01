// local storage

// setItem

// localStorage.setItem("hareket","burpeee");
// localStorage.setItem("tekrar",50); //burada yazdığımız 50 değeri int olarak değil default olarak string girilecektir

// Get Item

// const value = localStorage.getItem("tekrar");
// 
// console.log(value);
// console.log(typeof value); //string olarak girildiğinin kanıtı

// clear localstorage

localStorage.setItem("hareket","burpeee");
localStorage.setItem("tekrar",50); //burada yazdığımız 50 değeri int olarak değil default olarak string girilecektir

// localStorage.clear();   

// console.log(localStorage.getItem("sport"));

// if (localStorage.getItem("sport") ===  null){
//     console.log("sorguladığınız veri bulunmuyor");
// }
// else{
//     console.log("sorguladığınız veri bulunuyor");
// }

// local storegada array yazma

// const todos = ["Todo 1","Todo 2","Todo 3"];

// localStorage.setItem("todos",todos); //burada her elemanı tek tek alıp stringe çevirdi array gibi yazmadı

// localStorage.setItem("todos",JSON.stringify(todos));

// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(e){
    const value = todoInput.value;

    let todos;
    if (localStorage.getItem("todos")===null){
        todos = []
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));




    e.preventDefault();
}