let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");
value = todoList;
value = todo
value = cardrow


//child nodes -text dahil

value = todoList.childNodes;
value = todoList.childNodes[0];//childnodes dersek htmldeki satır atlamaları da sayar

//children - element

value = todoList.children; 
value = todoList.children[0]; 
value = todoList.children[todoList.children.length -1]; 
value = todoList.children[2].textContent = "değişti"; 


value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "burası da değişti";

value = todoList;
// value = todoList.children[0];
value = todoList.firstElementChild; //yukarıdakinin aynısı
value = todoList.children.length;
value = todoList.childElementCount;//yukarıdakiyle aynı


value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;

//element kardeşleri

value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling;
value = todo.nextElementSibling.nextElementSibling;


value = todo.previousElementSibling.previousElementSibling;

console.log(value);