let value;

const firstName="Louis";
const lastName="Armstrong";

const langs = "Java,Python,c++";

value = firstName + " " + lastName; //stringlerde toplama işlemi. 

value = "Kemal";

value+= " " + "Tankut"; //value = value +  " " +"Tankut";

value = firstName.length;

value = firstName.concat(" ",lastName," ","caz"); //concat ile uç uca ekliyoruz

value = firstName.toLowerCase();
value = lastName.toUpperCase();

value=firstName[0];
value=firstName[3];
value=firstName[firstName.length -1]; // stringin son harfini verir.uzunluğunu bilmediğimiz stringlerde bu özelliği kullanıyoruz.

value =firstName.indexOf("L"); //parantez içine yazdığımız stringin kaçıncı eleman olduğunu gösterir. eğer paranteze yazdığımız eleman stringde yoksa -1 sonucunu alırız

value =firstName.charAt(2); //bu da yukarıdakinin tam tersi, parantez içine yazdığımız sayı stringdeki hangi elemana karşılık gelir onu gösterir.

value =langs.split(","); //parantez içine koyduğum şeye göre ayırır

value =langs.replace("Python" , "Css"); //soldakini sağdakiyle yer değiştirir

value=langs.includes("Python"); //parantez içindeki şey stringde varsa true yoksa false çıkar






console.log(value);