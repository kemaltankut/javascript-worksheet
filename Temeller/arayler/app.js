let value;

const numbers = [21,43,54,20,23,61,1];
// const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python","Java","C++","Javascript"];

const a = ["Merhaba",22,null,undefined,3.14]; 

value = numbers.length;

value = numbers[0];
value = numbers[numbers.length -1];

// herhangi bir indesteki değeri değiştirme
numbers[2] = 1000;
value = numbers[2];

value = numbers.indexOf(1000); //parantez içindeki sayının kaçıncı index olduğunu gösterir

numbers.push(123123); // arrayin sonuna sayı ekleme
numbers.unshift(10101010); //arrayin başına sayı ekleme
value = numbers

numbers.pop(); //arrayin sonundaki sayıyı atma
value=numbers;

numbers.shift(); //arrayin başındaki sayıyı atma
value = numbers;

numbers.splice(0,3); //burada 0dan 3e kadar olan sayıları attı
value=numbers

numbers.reverse(); //arrayi ters çevirir
value=numbers;

value =numbers.sort(); //SAYILARIN SADECE EN SOLDAKİ RAKAMINA BAKARAK KÜÇÜKTEN BÜYÜĞE SIRALAR


value = numbers.sort(function(x,y){
     return x-y; //küçükten büyüğe sıralama

});


console.log(value);