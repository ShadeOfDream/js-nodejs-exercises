const sayilar = [1, 2, 3, 4, 5, 6]; 

// sayilar.push(7); //const olduğu halde ekleme çıkarma yapabildik neden çünkü referans adresini tutuyor ekleme yaparken başlangıç referans adresi değişmedi 
// console.log(sayilar);
// sayilar = [1, 2, 3]; //ama = atama ile referans adresini değiştirir ve hata da verir, Uncaught TypeError: Assignment to constant variable.

// const yeniSayilar = sayilar.map(function(sayi){//map -  return olmalı
//     return sayi + 2;
// });
// console.log(sayilar); //map kaynak diziyi değerlerini değiştirmiyor
// console.log(yeniSayilar);

// const kitaplar = [ 
//     {adi: '1', sayfaSayisi: 120},
//     {adi: '2', sayfaSayisi: 146},
//     {adi: '3', sayfaSayisi: 220},
// ];
// const sayfaSayilari = kitaplar.map(function(kitap){
//     return kitap.sayfaSayisi;
// });

// console.log(sayfaSayilari);

// const kisiler = [ 
//     {adi: 'ad1', soyadi: 'soyad1'},
//     {adi: 'ad2', soyadi: 'soyad2'},
//     {adi: 'ad3', soyadi: 'soyad3'},
// ]

// const kisiListesi = kisiler.map(function(kisi){
//     return kisi;
// });

// console.log(kisiListesi);

// const yeniIsimler = kisiler.map((kisi) => kisi.adi +" " + kisi.soyadi);//with arrow function
// console.log(yeniIsimler);

function kendiMapYapim(dizi, islem){
    const yeniDizi = [];
    for(let i=0; i<dizi.length; i++){
        yeniDizi.push(islem(dizi[i],i));
    }

    return yeniDizi;}

const olusanYeniDizi = kendiMapYapim(sayilar, function(sayi, index){
    console.log("index: " + index);
    return sayi  / 2;
});
console.log(olusanYeniDizi);