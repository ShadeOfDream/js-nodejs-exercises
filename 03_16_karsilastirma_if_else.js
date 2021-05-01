let benimYasim = 30, onunYasi = 25;

if(benimYasim < onunYasi){
console.log("Ben, senden küçüğüm.");
}else if(benimYasim === onunYasi){
    console.log("Yaşıtız.");
}
else{
    console.log("Ben, senden büyüğüm.");
}
/*
Hata oluşturabilecek durumlar
//-----------
if benimYasim > 10 {

}
//----------
if(benimYasim < 30);{
    console.log("Yaşım 30'dan küçük");
}
//----------
let isim = "Ad";
if(isim === "Ad")
    console.log("Merhaba Ad");//tek satır  işlem olursa süslü parantez olmasa da olur.
    console.log("Nasılsın");//birden fazla satır bulunyorsa if sonrası süslü parantez açılmalı
//----------
//art arda if kullanımı, switch case önerisi
let sayi1 = 10, sayi2 =20;
if(sayi1 > sayi2) 
    if(sayi1 > 20)
    console.log("Sayi1 hem sayi2'den hem 20'den büyüktür");

    else{ //bu else hangi if için çalışacak karmaşıklık oluşturmamak için süslü parantezler eklenmeli
        console.log("else çalıştı");
    }
/1
if(sayi1 > sayi2) {
    if(sayi1 > 20)
    console.log("Sayi1 hem sayi2'den hem 20'den büyüktür");
}
else{ 
    console.log("else çalıştı");
    }
/2
if(sayi1 > sayi2) 
    if(sayi1 > 20){
    console.log("Sayi1 hem sayi2'den hem 20'den büyüktür");
    }
    else{ //kendine en yakın if için çalışır
    console.log("else çalıştı");
    }
//----------
let asalSayiMi = true;
if(asalSayiMi == true){ // true olduğunda işlem yapılacağı için tekrardan true yazmaya gerek yok 

}
if(asalSayiMi){

}
*/