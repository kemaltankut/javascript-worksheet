const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

//remove metodu

// todos[0].remove();  //0. indeksteki elemanı siler


//remove child

// todoList.removeChild(todoList.lastElementChild);
todoList.removeChild(todos[3]);

console.log(todoList);
console.log(todos);
