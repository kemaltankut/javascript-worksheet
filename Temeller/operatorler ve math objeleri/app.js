let value;

const value1 = 10;


const value2 = 4;


// Aritmetik operatörler

// value = value1 + value2;

// value = value1 - value2;

// value = value1 * value2;

// value = value1 / value2;

// value = value1 % value2;

value = Math.PI; //pi sayısı
value = Math.E;  //doğal logaritma tabanı

value = Math.round(3.6); //yuvarlama işlemi
value = Math.round(3.2);

value = Math.ceil(3.1); //tavana(ceil) yuvarlama


value = Math.floor(3.6); //tabana(floor) yuvarlama

value = Math.sqrt(16);  //karekök alma

value = Math.abs(-16);  //mutlak değer(absolute) alma

value = Math.pow(6,3);   //sayının üssünü alma virgülün solundaki taban sağındaki de üssü 

value = Math.max(2,13,-124,100); //max methodu parantez içindeki sayıların en büyüğünü gösterir

value = Math.min(2,13,-124,100); //min methodu da maxın aksine en küçük sayıyı gösterir

value = Math.random(); //0 ve 1 arasında 1 hariç ondalıklı sayı üretir

value = Math.random() * 20; //0 ve 20(20 dahil değil) arasında rastgele sayı üretir. Burada 0 ı ve 1 i 20 ile çarptık sonucunda 0 ve 20 sayılarını elde ettik bu yüzden 0 ve 20 arasında sayılar ürettik

value = Math.random() * 20 + 1; // burada ise önce 20 ile çarptık sonra 1 ekledik bu işlemlerin sonucunda 1 ve 21 sayılarımız oldu bu yüzden 0 ve 21 arasında rastgele sayılar alıyoruz

value = Math.floor(Math.random()*22); //0 ve 22 arasında ondalıklı olmayan rastgele sayılar üretir burada floorla birleştirerek aslında üretilen ondalıklı sayıları tabana yuvarlamış oluyoruz










console.log(value);


