//Primitive ve Referans Veri Tipleri
//----------------------------------------------------------------
//Primitive Tipler : Number, String, Boolean, Undefined, Null, Symbol
//Referans Tipler : Object

let sayi = 50;
console.log(sayi);
console.log(typeof sayi);

let ondalikSayi = 20.001;
console.log(ondalikSayi);
console.log(typeof ondalikSayi);

let negatifSayi = -30;
console.log(negatifSayi);
console.log(typeof negatifSayi);

let isim = "Ad";
let soyIsim ='Soyad';
console.log(isim);
console.log(typeof isim);

// let cumle = 'Mars'a yolculuk';
//kaçış karakteri
let cumle = 'Mars\'a yolculuk';
// let cumle = "Mars'a yolculuk";
console.log(cumle);

let tamIsim = isim + ' ' + soyIsim;
console.log(tamIsim);

//template literal - backtick (alt gr + ,)
let tamIsim2 = `${isim} ${soyIsim}`;
console.log("template literal : " + tamIsim2);
console.log(`template literal ile yazdır ${tamIsim2}`);

let asalSayiMi = true;
console.log("Veri türümüzün değeri " + asalSayiMi + " veri tipi: " + typeof asalSayiMi);
console.log(`Veri türümüzün değeri ${asalSayiMi}, veri tipi : ${typeof asalSayiMi}`);

let renk;
console.log(renk);
console.log(typeof renk);

let renk2;
renk2 = "Mor";
console.log(renk2);
console.log(typeof renk2);


// let renk3 = "Mavi";
renk3 = "Mavi";
console.log(renk3);
console.log(typeof renk3);

let yas = null;
console.log("veri degeri: " + yas + " veri tipi: " + typeof yas);