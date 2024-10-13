const element = document.querySelector("#clear-todos");

//element özellikleri

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.textContent);//sadece yazıları alır html özelliklerini almaz
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);


//style ve element özelliklerini değiştirme

// element.className = "btn btn-primary " //htmldeki seçili elemanın class özelliklerini değiştirir
// 
// element.style.color = "black"
// 
// element.style.marginLeft = "50px";
// element.href = "https://www.google.com.tr";
// element.target = "_blank";

// console.log(element.textContent);

// element.textContent = "silin";
// element.innerHTML = "<span style='color:green'>Silin</span>"



// const elements = document.querySelectorAll(".list-group-item");
// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#eee"
// })


let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)")
element2 = document.querySelector("li:nth-child(3)")
element2 = document.querySelector("li:nth-child(4)")
element2 = document.querySelectorAll("li:nth-child(odd)")//numaraları tek olan elementleri seçer
element2 = document.querySelectorAll("li:nth-child(even)")//numaraları çift olanları seçer


element2.forEach(function(el){
    el.style.background = "#ccc"
    el.style.color = "red"
})



// console.log(elements);

// console.log(element);
console.log(element2);