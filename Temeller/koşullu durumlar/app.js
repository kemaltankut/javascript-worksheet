let a;
// Karşılaştırma Operatörleri

// == 2 değerin birbirine eşit olup olmadığını kontrol eder, eğer eşitse true değilse false değeri çıkar.

a=(2 == 2);
a=("js"=="javascript");
a=(2=="2"); //burada javascripteki bi kuraldan (eğer bir stringle sayı yan yanaysa sayı string olarak kabul edilir) dolayı sayı olan 2yi string olarak kabul ediyor ve sonuç true çıkıyor.

// ===
a=(2==="2"); //buradaki karşılaştırma operatörümüz hem değerlerin hem de veri tiplerinin aynı olup olmadığını kontrol ediyor.burada veri tiplerimiz farklı olduğu için false çıkıyor


// !=
a=(2!=4); //bu operatörümüz ise değerler eşit DEĞİLSE true çıkar eşitse false çıkar
// !==
// >
a=(4>2);//soldaki değer sağdakinden büyükse true küçükse false çıkar
// < 
a=(4<6);//soldaki değer sağdakinden küçükse true büyükse false çıkar
// >=
a=(4>=2);//soldaki değer sağdakinden büyükse veya eşitse true çıkar
a=(4>=4);
// <=
a=(4<=6);//soldaki değer sağdakinden küçükse veya eşitse true çıkar
a=(4<=4);


// Not operatörü(!): eğer bi durum false ise trueya true ise falsea çevirir
a=(!(4>2))
// And operatörü(&&): eğer bir durumda bütün değerler true ise sonuç true olur ama 1 tane bile false varsa bütün sonuç false olur
a=((2==2)&&("ahmet"=="ahmet")); //ikisi de true olduğu için sonuç da true
a=((2==2)&&("ahmet"=="ahmet")&&("ahmet"=="mehmet"));//ikisi doğru fakat 1 tanesi yanlış olduğu için sonucumuz false olur
// or operatörü(||):not operatörünün tam tersi olarak düşünebiliriz eğer 1 tane bile true varsa tüm sonuç true ama hiç true yoksa hepsi false ise sonucumuz false olur
a=((4==3)||(2==2));//1 tane true olduğu için sonuç true
a=((7==2)||(1==9));//hepsi false olduğu için sonuç false

// if  bloğu: eğer bloğumuzdaki değer true ise bloğun içindeki kodlar çalıştırılır ama false ise çalıştırılmaz örneğin:
const error = 1;

if (error==1){
    console.log("Hata Oluştu");
}
//burada error adında bir const oluşturduk ve bunun değerini  yaptık. sonrasında if bloğumuzda error 1e  eşit dedik ve error 1e eşit olduğundan yani tanımladığımız değer de true olduğundan bloğumuzun içindeki kod çalıştı

// else bloğu: eğer else bloğunun üstündeki if bloğunun değeri false olursa yani çalışmazsa else bloğu çalışır

const password=1232;

if(password==1234){
    console.log("Şifre doğru");
}
else{
    console.log("Şifre Yanlış");
}
//burada password yani şifre adında bir const oluşturup değerini 1 verdim sonra if bloğunda değerini farklı tanımladım ve içindeki kod çalışmadı o çalışmadığından hemen altındaki else bloğunun içindeki kod çalıştı

const proccess = "1";

if (proccess === "1"){
    console.log("İşlem 1");
}
else if (proccess === "2"){
    console.log("İşlem 2");
}
else if (proccess === "3"){
    console.log("İşlem 3");
}
else if (proccess==="4"){
    console.log("İşlem 4");
}
else  {
    console.log("Geçersiz İşlem")
}
//birden fazla koşulu kontrol etmek istediğimizde de elseif kullanıyoruz. eğer else if kullanacksak kendisinden önceki bloğun if veya elseif olması lazım yani ilk bloğumuz her zaman if olmak zorunda


const number = 100;
// if(number===100){
//     console.log("Sayı 100'e eşit");
// }
// else{
//     console.log("Sayı 100'e eşit değil");
// }
// eğer yukarıdaki kısmı daha kısa yazmak istiyorsak ternary operatörünü kullanabiliriz

console.log(number===100 ? "Sayı 100'e eşit" : "Sayı 100'e eşit değil") //eğer constdaki ve parantezdeki değerler eşitse ? sağındaki değer değilse : sağındaki değer çalışır bu daha kısa işlemlerde kullanılır uzun ve karmaşık  işlemlerde karışıklık yaratır

const number2=120;

if(number2===120) console.log("Sayı 120");
else console.log("Sayı 120 değil");    // eğer blokların içinde tek işlem varsa süslü parantez açmadan direkt yanına da yazabiliriz




console.log(a)