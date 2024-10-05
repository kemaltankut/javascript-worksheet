// alert

// alert("Merhaba");//sayfada pop up şeklinde mesajı çıkarır

// const cevap = confirm("Emin misiniz?"); //tamam ve iptal seçenekleri olan bir mesaj çıkar tamam dersek true iptal dersek false sonucunu verir

// console.log(cevap) 
//confirm
if(confirm("emin misiniz")){ //burada mesajda verdiğimiz cevaba göre konsola yazılacak şeyler değişiyor, if bloğunu kullanarak confirmi direkt if bloğuna yazabiliriz
    console.log("Silin Gitsin");
}
else{
    console.log("Silmeyin");
}


const cevap = prompt("2+2 = ?");

if(cevap == 4){
    console.log("sonucu doğru buldunuz")
}
else{
    console.log("yanlış cevap")
}


let value;

value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;


if(confirm("Sayfa yenilensin mi=")){
    window.location.reload();
}

else{
    console.log("sayfa yenilenmedi")

}

value = window.outerHeight; //tarayıcının en tepeden en alta kadar olan pikse uzunluğunu verir(sayfa içinde olmayan kapama küçültme sembolleri dahil her yer) width yazarsak o da genişliği verir

value = window.innerHeight; //bu da sadece sayfanın uzunuluğunu belirtir

// value = window.scrollX; bu komut da x ekseninde ne kadar scroll ettiğimizi gösterir x yerine y yazarsak da y eksenini.

console.log(value);
