//Elementi Id ye göre seçme
let element;

element = document.getElementById("todo-form"); //parantez içine id yi yazarak elementi seçiyoruz
element = document.getElementById("tasks-title");
//elementi classa göre seçme

element = document.getElementsByClassName("list-group-item")[0];//classlar birden fazla olduğu için html collection şeklinde bütün classlar önümüze gelecektir fakat köşeli parantezle indeks seçip görüntüleyebiliriz
element = document.getElementsByClassName("card-header");
// element tage göre seçme

element = document.getElementsByTagName("div");

// query selector - Css selector - tek bir element

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item"); //aynı cssteki gibi nokta koyarak classları seçiyoruz ilk bulduğu klası gösterir


element = document.querySelector("li");
element = document.querySelector("div");


//query  selector all

element = document.querySelectorAll(".list-group-item");


element.forEach(function(el){
    console.log(el);
});



console.log(element);