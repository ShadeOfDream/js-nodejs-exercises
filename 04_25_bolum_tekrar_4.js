/*Soru 11:
Sıcak soguk oyunu yapalım. Sistem 100e kadar bir sayı üretsin. Kullanıcı bu sayıyı tahmin etmeye çalışsın. Kullanıcının girdiği değere göre kullanıcıyı arttır azalt diyerek uyaralım. Kullanıcı sayıyı bulana kadar tahmin istemeye devam edelim ve sayıyı buldugunda kaç denemeden sonra bulduğunu belirtelim.*/

// let sayi = parseInt((Math.random() * 100)+1);
// // console.log(sayi);
// console.log("Hadi oyuna başlayalım. 1'den 100'e kadar bir sayı tutuldu. Tahmininin:  ");
// // let tahmin = parseInt(prompt("Bir tahmin giriniz."));
// let tahmin = -1;
// let tahminSayisi =0;

// while(tahmin != sayi){
//     tahmin = parseInt(prompt("Tahmin giriniz."));
//     tahminSayisi++;
//     if(tahmin == sayi ){
//         console.log("Tebrikler! Sayıyı doğru tahmin ettiniz"+ tahminSayisi + "seferde");
//     }else if(tahmin > sayi){
//     console.log("Tahmin değerini azalt, bir daha dene!")
//     }else { //if(tahmin < sayi)
//     console.log("Tahmin değerini arttır, bir daha dene!")
//     }
// }


/*
SORU 12:
Kullanıcıdan sürekli olarak sayı alan ve de kullanıcı 0a bastığında girdiği sayıların çarpımını sonuç olarak gösteren programı yazınız.*/
// let carpim = 1;
// let sayi = parseInt(prompt("Lütfen bir sayı giriniz. İşlemi sonlandırmak ve çarpım sonucunu görmek için 0'a basınız."));

// while (sayi!=0) {
//     carpim = carpim *sayi
//     sayi = parseInt(prompt("Lütfen bir sayı giriniz. İşlemi sonlandırmak ve çarpım sonucunu görmek için 0'a basınız."));
// }
// console.log(carpim);




/* SORU 13:
Kullanıcıdan aldığınız iki tamsayı değerin en büyük ortak bölenini bulan uygulamayı yazınız Örneğin 14 ve 35 sayıları için ebob = 7 olmalıdır. */
let sayi1 = parseInt(prompt("Bir tamsayı giriniz."));
let sayi2 = parseInt(prompt("Bir tamsayı giriniz."));

let ebob=1, kontrol=2;
while (kontrol <= sayi1 && kontrol <= sayi2) {
    if(sayi1 % kontrol === 0 && sayi2 % kontrol === 0){ //aynı kontrol değişkenine tam bölünüyorsa
    ebob = kontrol;
    }
    kontrol++;
}
if(ebob==1){
    console.log("Bu sayılar aralarında asaldır.")
}else{
    console.log(`${sayi1} ve ${sayi2}' nin EBOB'u  ${ebob}.`);
}
