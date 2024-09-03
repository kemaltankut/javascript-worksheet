let value;
const programmer ={
    name:"Kemal Tankut",
    age:25,
    email:"kmltnkt@gmail.com",
    langs:["Python","Javascript"],

    address:{
        city:"Gaziantep",
        neighbourhood:"Batikent",
        street:"Muhsin Yazicioglu"
    },
    work : function(){
        console.log("Programcı Çalışıyor...");
    }
}
value = programmer; 
value = programmer.email;//programmer constundaki email objesini alma
value = programmer["email"];//yukarıdakinin aynısı 

value = programmer.langs;
value = programmer.address.city; //programmer constundaki address objesinin altındaki city objesini alma

programmer.work();//programmer constundaki work fonskiyonunu(methodunu) çalıştırma

const programmers=[
    {name:"Kemal", age:18},
    {name:"Alperen", age:28},
];
value = programmers[0]//programmers constundaki 0ıncı indeksi alma
value = programmers[0].name//programmers consutndaki 0ıncı indeksin nameini alma
 
console.log(value);