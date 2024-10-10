// // widnow Object
 let value;
// console.log(this.document);

 value = document;
// value = document.all;
// value = document.all.length;
// value = document.all[42];
// value = document.all[2];
// value = document.all[document.all.length-2];


// const elements = document.all;
// // for (i = 0; i< elements.length;i++){
// //     console.log(elements[i]);
// // }HTML collection
// // elements.forEach(function(element){
// //     console.log(elements);
// // })html collectionlarda foreach gibi fonksiyonlar kullanılamaz. ama array yaparsak görebiliriz

// const collections = Array.from(document.all);

// collections.forEach(function(collections){
//     console.log(collections)
// })

// value = document.all[8];//document all yazdığımızda 8 de body vardı bodyi görmek için 8. indeksi aldık onun yerine direkt body yazarak da bodyi görebiliriz



// 

// part2


// Scriptler

value = document.scripts;
value = document.scripts.length;
value = document.scripts[0];


//linkler


value = document.links;
value = document.links[0];
value = document.links[document.links.length-1];
// value = document.links[document.links.length-1].getAttribute("class")
value = document.links[document.links.length-1].getAttribute("href")
value = document.links[document.links.length-1].className//2 satır yukarıdaki işlemi böyle de yapabiliriz
value = document.links[document.links.length-1].classList




// formlar


value = document.forms;
value = document.forms.length;
value = document.forms[0];
value = document.forms["form"];
value = document.forms[0].id;
value = document.forms[0].method;












console.log(value);
