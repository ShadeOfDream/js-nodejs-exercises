//var let const değişken tanımlama 
//ES6 let - const
var yas = 30;
console.log(yas);
console.log(yas);
console.log(yas);

//degişken tanımlama kuralları
//keyword kullanılmaz
//rakam ile başlanmaz
//harf, _, $ ile başlayabilir
//birden fazla kelime içerdiğinde "camelCase" 
//türkçe karakter ve boşluk kullanımı yok

let tckimlikno = 12345678910;
let sayi1 = 1;
let _sayi2 = 2;
let $sayi3 = 3;
let kisininDogumYili = 1900; //camelCase
let kisinin_dogum_yili = 2000;
let kisinin_dogumYili = 1800;

let sayi5;
console.log(sayi5); //undefined

let sayi6;
sayi6 = 50;
console.log(sayi6);

let sayi7;
sayi7 = 30;
sayi7 = 40;
console.log(sayi7);

const piSayisi = 3.14;
/*piSayisi =3.15; //Uncaught TypeError: Assignment to constant variable.*/
console.log(piSayisi);

not = 85; //hata oluşmaz js dilinin esnekliğinden dolayı ama değişken tanımlarken başına let const getirilmeli
console.log(not);