let value;

// veri tiplerini string'e çevirme
 
value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String([1,2,3,4,5]);
value = String(function() {console.log()});

value = (10).toString(); //burada yaptığımız işlem yukarıdaki satırlarda yaptığımız işlemle aynı

// veri tiplerini sayıya dönüştürme

value = Number("123");
value = Number("null");
value = Number("undefined"); //sayıya çevirilemez
value = Number("Hello World"); //sayısal bir değer olmadığı için sayıya çevirilemez
//fonksiyonlar da sayıya çevirilemez
//arraylar de sayıya çevirilemez

value = parseFloat("3.14");
value =parseInt("3");

const a = "Hello World" + 34;

console.log(a);
console.log(typeof a);

const b ="34" + 53;

console.log(b)
console.log(typeof b)

const c = Number("34") +53

console.log(c)
console.log(typeof c)




console.log(value);
console.log(typeof value);








