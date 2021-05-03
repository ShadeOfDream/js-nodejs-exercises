//Soru1 Klavyeden girilen 3 sayının ortalamasını alan bir uygulama yazınız
// let sayi1 = parseInt(prompt("İlk sayıyı giriniz: "));
// let sayi2 = parseInt(prompt("İkinci sayıyı giriniz: "));
// let sayi3 = parseInt(prompt("Üçüncü sayıyı giriniz: "));
// let ortalama =(sayi1 + sayi2 + sayi3 )/3;

// console.log(`Ortalama = ${ortalama}`);

//----------------------------------------------------------------
// let sayi1 = Number(prompt("İlk sayıyı giriniz: "));
// let sayi2 = Number(prompt("İkinci sayıyı giriniz: "));
// let sayi3 = Number(prompt("Üçüncü sayıyı giriniz: "));
// let ortalama =(sayi1 + sayi2 + sayi3 )/3;

// console.log(`Ortalama = ${ortalama}`);

//Soru2 Klavyeden kenarları girilen bir üçgenin çeşidini veren uygulamayı yazınız.
//kenarlarına göre : eşkenar-ikizkenar-çeşitkenar üçgen

// let kenar1 = parseInt(prompt("Birinci kenarın uzunluğunu giriniz."));
// let kenar2 = parseInt(prompt("İkinci kenarın uzunluğunu giriniz."));
// let kenar3 = parseInt(prompt("Üçüncü kenarın uzunluğunu giriniz."));

// if(kenar1 == kenar2 && kenar2 == kenar3){
//     console.log("Bu bir eşkenar üçgendir.");
// }else if ((kenar1 == kenar2 && kenar1 !== kenar3) || (kenar1 == kenar3 && kenar1 !== kenar2) || (kenar2 == kenar3 && kenar2 !== kenar1)){
//     console.log("Bu bir ikizkenar üçgendir.");
// }else { // if(kenar1 !== kenar2 && kenar1 !== kenar3 && kenar2 !== kenar3)
//     console.log("Bu bir çeşitkenar üçgendir.")
// }

//Soru 3 Klavyeden girilen vize ve final notlarınına göre öğrencinin dersi geçip geçmediğini söyleyen bir uygulama yazınız.(Geçme notu : 50, vizenin %40ı, finalin %60ı geçerlidir.)

let vize = Number(prompt("Vize notunu giriniz:"));
let final = Number(prompt("Final notunu giriniz:"));
let not = (vize * 40) / 100 + (final * 60) / 100; //vize * 0.4 + final * 0.6

if (not >= 50){
    console.log(`Dersi geçtiniz. Notunuz: ${not}`);
}else{
    console.log(`Dersi geçemediniz! Notunuz: ${not}`);
}