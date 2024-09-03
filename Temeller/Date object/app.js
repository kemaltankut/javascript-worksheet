let value;



const now = new Date();//şu an ki zamanı alır
const date1 = new Date("10-10-2005 08:05");
const date2 = new Date("October 10 2005 08:05"); //üçü de custom zaman yazmamızı sağlar
const date3 = new Date("10/10/2005 08:05");

value = date1.getMonth(); //ocağı 0 alarak hangi ayı girdiğimizi sayıyla söyler örneğin ekim 9. ay olarak gözükür
value = date1.getDate(); //hangi gün olduğunu yazar
value = date1.getDay(); //haftanın hangi günü olduğunu, pazarı 0. gün kabul ederek söyler. örneğin, salı 2. gün
value = date1.getHours();//saadece saati söyler
value = date1.getMinutes();//dakikayı
value = date1.getSeconds();//saniyeyi
value = date1.getMilliseconds();//milisaniyeyi söyler


date1.setMonth(8); //ayı
date1.setDate(3);  //günü
date1.setFullYear(1994);//ve yılı yeniden ayarlamamızı sağlar



value = date1;



console.log(value);