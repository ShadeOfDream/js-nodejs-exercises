let Ada = {
    adi: 'Ada',
    soyadi: 'L',
    dogumYili: 1988,
    evliMi: false,
    sevdigiRenkler: ['yeşil', 'mavi'],  
    yasiHesapla : function (dogumYili){
        return 2021 - dogumYili;
    }
}

console.log(Ada);
console.log(Ada.dogumYili);
// console.log(Ada[dogumYili]);//Uncaught ReferenceError: dogumYili is not defined - tırnak işareti içinde yazılmalı
console.log(Ada['dogumYili']);

Ada.yasiHesapla(1988);// çıktı vermez

let yasi = Ada.yasiHesapla(1988);
console.log(yasi);

console.log(Ada.yasiHesapla(1988));
//--------------------------------------
let Ada2 = {
    adi: 'Ada',
    soyadi: 'L',
    dogumYili: 1981,
    yasiHesapla2 : function (){
        return 2021 - this.dogumYili;
    }
}
let yasi2 = Ada2.yasiHesapla2();
console.log(yasi2);

//---------------------------
let Ada3 = {
    adi: 'Ada',
    dogumYili: 1980,
    yasiHesapla3 : function (){
        this.yas = 2021 - this.dogumYili;
    }
}
Ada3.yasiHesapla3();  // yas değişkeni hesaplanması için fonksiyon çağrılmalı ki fonksiyon tetiklensin
console.log(Ada3.yas); //direkt yas diye bize değeri vermez 


let Bird = {
    adi: 'Bird',
    soyadi: 'S',
    dogumYili: 1985,
    yasiHesapla : function (){
        return 2021 - this.dogumYili;
    }
}

Bird.soyadi = " D ";
Bird['soyadi'] = " E ";
console.log(Bird); 

let ogrenciler = [ Ada, Bird];
console.log(ogrenciler);
console.log(ogrenciler[0].dogumYili);

let flower = new Object();
flower.adi ="Flower";
flower.dogumYili = 1990;
console.log(flower);
console.log(flower.soyadi);