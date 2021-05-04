let toplam =  0;
let toplam3 = 0;

for(let i = 0; i <=10; i++){
    toplam = toplam + i;
}

for(let i = 30; i <=60; i++){
    toplam3 = toplam3 + i;
}
let toplam1 = belliAraliktakiSayilariTopla(0,10);
let toplam2 = belliAraliktakiSayilariTopla(30,60);
let toplam4 = belliAraliktakiSayilariTopla(40,160);
console.log("Toplam 1: "+ toplam1+" Toplam 2: "+ toplam2);
function belliAraliktakiSayilariTopla(baslangicSayisi, bitisSayisi){
    let toplam =0;
    for(let i = baslangicSayisi; i<=bitisSayisi;i++){
        toplam = toplam + i;
    }
    console.log("Toplam:"+toplam);
    return toplam;

}

function selamVer(){
    console.log("Merhaba");
}
selamVer();

// let sayi = 10;
// console.log(sayi);

// console.log(sayi2);//değişkeni kullanmadan önce tanımla ama fonksiyonlarda öyle değil 
// let sayi2 = 10;


selamVer2();
function selamVer2(){
    console.log("Merhaba2");
}

//10 ve 20 bu fonksiyonun argümanlarıdır.
let sayilarinToplami = sayilariTopla(10,20);
console.log("Toplam:" +sayilarinToplami);
//parametre alan fonksiyon, sayi1 ve sayi2 parametredir.
function sayilariTopla(sayi1,sayi2){
    console.log("Sayıların Toplamı :" +(sayi1 +sayi2));
    return sayi1 +sayi2;
    console.log("selam ")//bu satır return den sonra geldiği için ekranda görülmeyecek 
}

//return bir sonucu çağrıldığı yere geri döndürür.

let sayi = 10;
console.log(typeof sayi);//number
console.log(typeof selamVer);//function
console.log(typeof sayilariTopla);//function