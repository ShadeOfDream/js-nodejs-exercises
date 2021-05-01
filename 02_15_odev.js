
/*Ödev 1
Bir  değişken oluşturun ve bu değişkende saniye değerini tutun.
Sonra bu saniye değerinin kaç dakika ve saniyeye denk geldiğini yazdırın
Örnek 1200 değeri için 20 dakika 0 saniye yazmalıdır.*/

let saniye = prompt("Saniye değerini giriniz.", "125");
console.log(saniye);
let dakika = parseInt(saniye / 60);
let sonuc = console.log(`${dakika} dk ` + saniye % 60 + `sn` );

/* 
Ödev 2
Bir  değişken oluşturun ve bu değişkende fahrenheit cinsinden sıcaklığı saklayın.
Sonrasında bu değerin kaç Celcius olduğunu hesaplayın.
100 değeri için 37.777778 gibi bir değer elde etmelisiniz.
Hesaplama formülü : celcius = 5/9 * (fahrenheit -32)*/

let fahrenheit = prompt('Fahrenheit sıcaklığını giriniz.', '100');
console.log(fahrenheit + "F :" );
let celcius = 5 / 9 * (fahrenheit -32);
console.log(`${celcius}°`); //alt + 0176 derece işareti


/* 
Ödev 3
Bir yıl değerinin artık yıl olup olmadığını hesaplayın
Bir yılın artık olması için ya 400 ile modu 0 olmalı yada 4 ile modu 0 olmalı ve 100 ile modu 0 olmamalı
4100 false değer vermeli.*/

let artikYilMi = prompt("Yıl değerini giriniz.","4100");
console.log((artikYilMi % 400 === 0) || ((artikYilMi % 4 === 0) && (artikYilMi % 100 !== 0)));

