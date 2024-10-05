// scope kavramı

// global function ve block olmak üzere 3 çeşit scope (kapsama) bulunur function scopeu fonksiyonlar block scope'u if else tarzı blokları geri kalanı da global scope kapsar ve farklı scopedaki kodlar değerler birbiriyle karışmaz


var value1 = 10;
let value2 = 20;
const value3 = 30;

function func(){
    var value1 = 40;
    let value2 = 50;
    const value3 = 60;

    console.log(value1,value2,value3)
}
func();

// if(true){
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c); //burada yazdırmak istediğimzide sadece var ile tanımlanan a yazdırılır çünkü let ve constun aksine var değişkeni bulunduğu bloğun dışında çalışabiliyor

if(true){
    var value1 = 40;
    let value2 = 50;
    const value3 = 60; //burada ise var değeri dışarıya çıkabildiği için değeri tamamen değişmiş olacaktır (varın bu farkı sadece bloklarda geçerli functionlarda geçerli değil)
}
    

console.log(value1,value2,value3);  