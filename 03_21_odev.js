/* 
Math.random() ile rastgele sayı üretebilirsiniz. Bu fonksiyon 0 dahil - 1 hariç bir değer üretir mesela 0.56 gibi. Sonrasında bu ifadenin sonucunu istediğiniz aralığın üst sınıırıyla çarparsanız verilen aralıkta değer üretmiş olursunuz.

Mesela 0 ile 10 arasında bir sayı için (Math.random() * 10)+1 size 1 ile 10 arasında ki 10 da dahil sayı üretmiş olur.

Üretilen bu sayı ondalıklı olabilir bunu tam sayıya dönüştürmek için Math.floor() kullanabilirsiniz.

Küçük bir piyango oyunu tasarlayınız. Sistem iki basamaklı bir sayı üretmeli.
Kullanıcıdan da bu sayıyı tahmin etmesini istemelisiniz.
 
Eğer kullanıcı sayıyı tam olarak doğru bilirse 10000 TL;
Eğer kullanıcı sayının basamaklarını bilirse yani 65 yerine 56 yazmıssa 5000TL
Eğer kullanıcı şanslı numaranın sadece bir basamağını bilirse 1000 TL kazanır.*/

let uretilenSayi = (Math.random() * 90) + 10; //74,656565665
console.log("Üretilen ondalıklı sayı " + uretilenSayi);
uretilenSayi = Math.floor(uretilenSayi);//74

let kullanicininGirdigiSayi = parseInt(prompt("İki basamaklı bir sayı giriniz.","10"));

//---
let uretilenSayiBirlerBasamagi = uretilenSayi % 10;
let uretilenSayiOnlarBasamagi = Math.floor(uretilenSayi / 10);

console.log(`Üretilen sayının onlar basamağı ${uretilenSayiOnlarBasamagi} birler basamağı ${uretilenSayiBirlerBasamagi}`);
//---
let kullanicininGirdigiSayiBirlerBasamagi = kullanicininGirdigiSayi % 10;
let kullanicininGirdigiSayiOnlarBasamagi = Math.floor(kullanicininGirdigiSayi / 10);

console.log(`Kullanıcının girdiği sayının onlar basamağı ${kullanicininGirdigiSayiOnlarBasamagi} birler basamağı ${kullanicininGirdigiSayiBirlerBasamagi}`);

console.log(`Sistemin ürettiği sayı ${uretilenSayi} kullanıcının girdiği sayı ${kullanicininGirdigiSayi}`);

if(uretilenSayi === kullanicininGirdigiSayi){
    console.log("Tebrikler 10000 TL kazandınız. Tahmininiz:"+kullanicininGirdigiSayi+" Üretilen:" + uretilenSayi);
}else if( uretilenSayiBirlerBasamagi === kullanicininGirdigiSayiOnlarBasamagi && uretilenSayiOnlarBasamagi === kullanicininGirdigiSayiBirlerBasamagi){
    console.log("Tebrikler 5000 TL kazandınız.Tahmininiz:"+kullanicininGirdigiSayi+" Üretilen:" + uretilenSayi); //65 -56
}else if(uretilenSayiBirlerBasamagi === kullanicininGirdigiSayiBirlerBasamagi || uretilenSayiOnlarBasamagi === kullanicininGirdigiSayiOnlarBasamagi ){
    console.log("Tebrikler 1000 TL kazandınız.Tahmininiz:"+kullanicininGirdigiSayi+" Üretilen:" + uretilenSayi); //84 - 83, 79-49
}else{
    console.log("Maalesef kazanamadınız.Tahmininiz:"+kullanicininGirdigiSayi+" Üretilen:" + uretilenSayi);
}

//tekrar

let random = Math.floor((Math.random()*90)+10);
let kullaniciSayi = parseInt(prompt("İki basamaklı bir sayı giriniz."));

let randomBirler = random % 10;
let randomOnlar = parseInt(random / 10);

let kullaniciSayiBirler = kullaniciSayi % 10;
let kullaniciSayiOnlar = parseInt(kullaniciSayi / 10);

if(random === kullaniciSayi){
    console.log("Tebrikler 10000 TL kazandınız. Tahmininiz:" + kullaniciSayi + " Üretilen:" + random);
}else if (randomBirler === kullaniciSayiOnlar && randomOnlar === kullaniciSayiBirler){
    console.log("Tebrikler 5000 TL kazandınız. Tahmininiz:" + kullaniciSayi + " Üretilen:" + random);
}else if(randomBirler === kullaniciSayiBirler || randomOnlar === kullaniciSayiOnlar){
    console.log("Tebrikler 1000 TL kazandınız. Tahmininiz:" + kullaniciSayi + " Üretilen:" + random);
}else {
    console.log("Maalesef kazanamadınız. Tahmininiz:" + kullaniciSayi + " Üretilen:" + random);
}