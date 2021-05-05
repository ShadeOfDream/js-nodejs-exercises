//primitive
let yas = 32;
let yeniYas = yas; //atama yaptığımızda değeri alıyor

console.log(yas, yeniYas);//32 32 

yas = 40;
console.log(yas, yeniYas);//40 32

let isim = "Ad";
let yeniIsim = isim;

console.log(isim, yeniIsim);// Ad Ad

isim = "yeniAd";
console.log(isim, yeniIsim);// yeniAd Ad

//referans tipli array object
//array
let renkler = ['kırmızı', 'yeşil'];
let yeniRenkler = renkler; //atama yaptığımızda değerleri alıp atamıyor da başlangıç noktasını referans adresini yazıyor

console.log(renkler, yeniRenkler); 

renkler.push('mavi');
console.log(renkler, yeniRenkler); 
//-----------
let renkler2 = ['sarı', 'mor'];
let yeniRenkler2 = renkler2;

renkler2 = ['sarı', 'mor'];//adres değişikliği olduğu için eklenen yeni renk renkler2 dizisini etkileyecek yeniRenkler2 ilk atanan referansı tutuyor
renkler2.push('gri');
console.log(renkler2,yeniRenkler2);


//object
let ogrenci = {
    ad: 'Ad1',
    yas: 32
}

let yeniOgrenci = ogrenci;

console.log(ogrenci,yeniOgrenci);

ogrenci.yas = 36;
console.log(ogrenci,yeniOgrenci);
