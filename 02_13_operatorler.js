//Aritmetik Operatörler + - * / %

let sayi1 = 100;
let sayi2 = 20;

let sonuc = sayi1 + sayi2;
sonuc = sayi1 - sayi2;
sonuc = sayi1 * sayi2;
sonuc = sayi1 / sayi2;
sonuc = sayi1 % sayi2;
console.log(sonuc);

let isim = 'Ad';
let soyIsim ='Soyad';
let tamIsim = isim + soyIsim; //AdSoyad
let tamIsim2 = isim - soyIsim; //NaN --Not a Number
console.log(tamIsim);
console.log(tamIsim2);

let yas = 30;
let metinOlarakYas = '30';
console.log(yas);
console.log(yas + 1);
console.log(metinOlarakYas);
console.log(metinOlarakYas + 1); // toplamada - değişken string sonuna string ekleme yapılıyor
console.log(metinOlarakYas - 10); // diğer işlemler - değişken matematiksel işlem olarak algılanır 
console.log(metinOlarakYas * 10 );

//Arttırma azaltma operatörleri
let sayi3 = 15;
let sayi4 = 8;

sayi3 = sayi3 + 1;
sayi3++;
++sayi3; //tek başına kullandığında öne ya da sona konumlandırmanın bir anlamı yok, direkt 1 arttırır veya azaltma yapar
sayi3--; //sayi3 = sayi3 - 1
--sayi3;
console.log(sayi3); 

console.log("sayi4 : " + sayi4);
console.log("sayi4 : " + sayi4++); //önce değişken kullanılır sonra değeri 1 arttırılır
console.log("sayi4 : " + sayi4);
console.log("sayi4 : " + (++sayi4)); //önce değişken değeri 1 arttırılır ve kullanılır

let sayi5 = 50;
console.log(sayi5++);
console.log(sayi5);

let sayi6 = 50;
console.log(--sayi6);
console.log(sayi6);