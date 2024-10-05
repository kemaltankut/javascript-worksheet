// While döngüler

let i = 0;

// while(i < 10){ //while döngülerinde aşağıdaki işlem tamamlandığında parantez içinde verdiğimiz koşulu kontrol eder, eğer koşul hala sağlanıyorsa, koşul sağlanmayana kadar işlemlere devam eder

//     console.log(i);

//     i++;//bu yazım ve i+=1; i = i+1 demek yani i'ye sürekli 1 ekle demek
// }

// break ve contiune

while(i<10){
    console.log(i);
    if(i==5){
        break;//yukarıda yazdığımız if koşulu sağlanırsa aşağıya yazdığımız break komudu çalışır. break komudu ise fonksiyonu hemen durdurur
    }
    i++;
}
let a = 0;

// while(a<10){
//     if(a==3 || a==5){ burada a 3 olduğu zaman continue komudunu görüp en başa gidip tekrardan fonksiyonu çalıştıracak fakat sürekli değer 3 olup continue görüp başa gideceğinden sonsuz bir döngüye girecektir
//         continue;
//     }
//     console.log(a);
//     a++;
    
// }

while(a<10){ //burada ise continue koşulunu sağlayan durumda geri dönüp kodumuz continueya tekrar aynı şekilde gitmesin diye continuedan önce yapmasını istediğimiz işlemi yazdık böylece kodumuz sorunsuz çalıştı
    if(a==3||a==5){
        a++;
        continue
    }
    console.log(a);
    a++;
}



// do while döngüleri

b = 0;

do{ //burada koşulu kontrol etmeden direkt yazdığımız şey çalışır sonra kontrol edilir
    console.log(b);
    b++;


}while(b<10)


const langs = ["javascript","python","java"];

// let index = 0;

// while(index < langs.length){
//     console.log(langs[index]);

//     index++;
// }

// for(let index = 0;index<langs.length;index++){
//     console.log(langs[index])
// }//for döngüsüyle yukarıda yazdığımız şeyi tek satırda yazabiliyoruz

langs.forEach(function(langs,index){
    console.log(langs,index);
})


const users = [
    {name:"Kemal",age:19},
    {name:"alperen",age:28},
    {name:"mustafa",age:30}
];

const names = users.map(function(user){
    return user.name;
});
const ages = users.map(function(user){
    return user.age;
});
console.log(ages); 
console.log(names); //map döngüsünü kullanarak oluştruduğumuz arrayin içindeki name'leri alıyoruz


const user = {
    name:"kemal",
    age:19
};

for(let key in user){
    console.log(key,user[key]);
}