//yeni element oluşturma


// <a id ="clear-todos"class=" btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a");

const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";

newLink.appendChild(document.createTextNode("Farklı bir sayfaya git"));
cardbody.appendChild(newLink);

//text content

// newLink.textContent = "Farkli sayfaya git"; bu sıkıntılı bi yöntem çünkü textcontenti kullanırsak kardeş elementlerin yazısı gidebilir
// cardbody.textContent = "slfkasşl"
// console.log(cardbody);


// text node

// const text = document.createTextNode("naber");
// cardbody.appendChild(text);
// console.log(cardbody); 




console.log(newLink);