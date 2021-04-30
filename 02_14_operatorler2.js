//Aritmetik Atama Operatörleri
//+=, -=, *=, /=, %=

let sayi1 = 10;
let sayi2 = 4;
//sayi += sayi1; //sayi2 = sayi2 + sayi1;
// sayi2 -= sayi1; //sayi2 = sayi2 - sayi1;
// console.log(sayi2);

//karşılaştırma operatörler

console.log(sayi1 > sayi2);
console.log(sayi1 < sayi2);
console.log(sayi1 <= sayi2);
console.log(sayi1 >= sayi2);
console.log(sayi1 != sayi2);
console.log(sayi1 == sayi2);

let yas = 30;
let metinselYas = '30';
console.log(yas == metinselYas); //true - veri değerleri karşılaştırılır.
console.log(yas === metinselYas); //false - hem değere hem veri tipine bakılır
console.log(yas !== metinselYas); //true - bu iki değişken eşit değil

//Mantıksal operatörler ve, veya...
//sıcak ve şekerli bir çay
console.log((sayi1 < 5) && (sayi2 < 10));
console.log((sayi1 < 5) || (sayi2 < 10));

//işlem önceliği çarpma, bölme, modül alma, toplama, çıkarma
// let sonuc = 4 * 2 / 4 - 1 * 5; //-3
let sonuc = 4 + 10 / 2 - 1 * 5;
//4 + 10 / 2 - 50
//4 + 5 -5
//9 - 5
//4
console.log(sonuc);
let sonuc2 = (4 + 10) / ((2 - 1) * 5);
console.log(sonuc2);

//https://www.dummies.com/web-design-development/javascript-operator-precedence/