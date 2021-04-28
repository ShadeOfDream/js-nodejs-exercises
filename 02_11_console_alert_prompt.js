//çıktıları görmek için
let age = 31;
console.log(age);
console.error('Yanlış işlem');
console.warn('Parola en az bir rakam içermeli');
console.clear();

console.table({ad:"ad", yas:31});

//"id" kelimeleri arasında yapılan işlem süresini bulma
console.time("id");
console.log("aaa");
console.log("aaa");
console.log("aaa");
console.log("aaa");
console.log("aaa");
console.timeEnd("id");
console.clear();

// alert('Merhaba Dünya!');

let sayi1 = 50;
// alert(sayi1);

let girilenSayi = prompt("Bir sayı giriniz");
console.log(girilenSayi);