// Fonskiyon tanımlama

 function merhaba(name="Bilgi yok",age = "Bilgi yok"){
    //   if (typeof name==="undefined") name = "bilgi yok;" 
    //   if (typeof age==="undefined") age = "bilgi yok"
     console.log(`name: ${name} Yaş: ${age}`);
 } 

// merhaba("Kemal",18); //fonksiyon çağrısı
// merhaba();//burada bilgi vermesek bile if bloğunu kullanarak sonucun bilgi yok şeklinde çıkmasını sağladık. ama if ile uğraşmak yerine fonskiyonu tanımlarken varsayılan bir değer atarsak bilgi verilmediğinde varsayılan değerimiz çıakcaktır

function square(x) {
    return x*x;
}
function cube(x){
    return x*x*x;
    console.log("aaa")//bu kod çalışmayacaktır çünkü return fonksiyonu bitirir
}
// let a = square(12);
// a = cube(a);
let a = cube(square(12));//yukarıdakini daha düzenli yazdık
console.log(a); //return kullanarak fonksiyondan çıkan değeri tekrar alıp yeni fonksiyonda kullanıyoruz 
// function expression

const merhaba = function(name){
    console.log("Merhaba "+ name);
};
merhaba("Kemal");

(function(myName){
    console.log("Merhaba: "+ myName);
})("Kemal") //IIFE tanımlandığı an çalışan fonksiyon



const database = {
    host : "localhost",
    add:function(){
        console.log("eklendi");
    },
    delete:function(){
        console.log("silindi");
    },
    update:function(id){
        console.log(`Id: ${id} Güncellendi`);
    },
    delete:function(id){
        console.log(`Id: ${id} silindi`);
    }

}

console.log(database.host);

database.add();

database.update(10);